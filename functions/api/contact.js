/**
 * Cloudflare Pages Function — Contact form handler.
 *
 * Trimite mesajele formularului de contact către bogdan@axait.ro folosind Resend API.
 *
 * SETUP NECESAR (Bogdan):
 *   1. Cont gratuit pe https://resend.com (free tier 3000 emails/lună).
 *   2. Adaugă domeniul `axait.ro` în Resend → verificare DNS prin Cloudflare
 *      (3 record-uri: 1× TXT pentru SPF, 1× TXT pentru DKIM, 1× MX pentru bounces).
 *   3. Generează API key în Resend dashboard.
 *   4. În Cloudflare Pages → Settings → Environment variables setează:
 *        RESEND_API_KEY = re_xxxxxxxxxxxxxx
 *      pentru AMBELE medii (Production + Preview).
 *   5. Re-deploy preview pentru a aplica env var.
 *
 * Pentru diagnostic rapid (fără a trimite email) folosește GET /api/contact-status.
 *
 * Endpoint: POST /api/contact
 * Content-Type: application/x-www-form-urlencoded sau multipart/form-data
 */

export async function onRequestPost(context) {
  try {
    const data = await context.request.formData();

    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const company = (data.get('company') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    const honeypot = (data.get('website') || '').toString().trim();

    // Honeypot anti-spam — boții completează câmpurile ascunse.
    if (honeypot) {
      // Răspuns OK fără a trimite efectiv emailul.
      return json({ ok: true }, 200);
    }

    // Validare câmpuri obligatorii.
    if (!name || !email || !message) {
      return json({ error: 'Câmpurile obligatorii lipsesc (nume, email, mesaj).' }, 400);
    }
    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return json({ error: 'Conținut prea lung.' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: 'Adresa de email este invalidă.' }, 400);
    }

    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(`[${new Date().toISOString()}] contact: RESEND_API_KEY missing`);
      return json(
        {
          error: 'RESEND_API_KEY missing',
          hint: 'Setează env var în Cloudflare Pages → Settings → Environment variables (Preview + Production) și redeploy.',
        },
        500
      );
    }

    // Log diagnostic — vizibil în Cloudflare Workers Logs. NU logăm conținut/PII.
    console.log(
      `[${new Date().toISOString()}] contact: dispatching to bogdan@axait.ro (from=noreply@axait.ro, deploy=${
        context.env.CF_PAGES_COMMIT_SHA || 'unknown'
      })`
    );

    const html = `
      <h2 style="font-family:sans-serif;color:#0f172a">Mesaj nou de pe axait.ro</h2>
      <table style="font-family:sans-serif;font-size:14px;line-height:1.55;border-collapse:collapse">
        <tr><td style="padding:6px 12px 6px 0;color:#64748b"><strong>Nume:</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#64748b"><strong>Email:</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${company ? `<tr><td style="padding:6px 12px 6px 0;color:#64748b"><strong>Companie:</strong></td><td>${escapeHtml(company)}</td></tr>` : ''}
        ${phone ? `<tr><td style="padding:6px 12px 6px 0;color:#64748b"><strong>Telefon:</strong></td><td>${escapeHtml(phone)}</td></tr>` : ''}
      </table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:18px 0" />
      <p style="font-family:sans-serif;font-size:14px;color:#0f172a;white-space:pre-wrap">${escapeHtml(message)}</p>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:18px 0" />
      <p style="font-family:sans-serif;font-size:11px;color:#94a3b8">Trimis din formularul de contact axait.ro</p>
    `;

    const text =
      `Mesaj nou de pe axait.ro\n\n` +
      `Nume: ${name}\n` +
      `Email: ${email}\n` +
      (company ? `Companie: ${company}\n` : '') +
      (phone ? `Telefon: ${phone}\n` : '') +
      `\n---\n\n${message}\n`;

    let resendRes;
    try {
      resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AXA IT Site <noreply@axait.ro>',
          to: ['bogdan@axait.ro'],
          reply_to: email,
          subject: `[axait.ro] Mesaj nou de la ${name}`,
          html,
          text,
        }),
      });
    } catch (networkErr) {
      console.error(`[${new Date().toISOString()}] contact: Resend fetch threw`, networkErr);
      return json(
        {
          error: 'Resend API failed',
          resend_status: 0,
          resend_error: String(networkErr).slice(0, 200),
        },
        502
      );
    }

    if (!resendRes.ok) {
      const detail = (await resendRes.text()).slice(0, 200);
      console.error(
        `[${new Date().toISOString()}] contact: Resend API error ${resendRes.status} — ${detail}`
      );
      return json(
        {
          error: 'Resend API failed',
          resend_status: resendRes.status,
          resend_error: detail,
          hint:
            resendRes.status === 422
              ? 'Probabil domeniul axait.ro nu e verificat în Resend (DNS SPF/DKIM lipsă) sau adresa from nu corespunde.'
              : resendRes.status === 401 || resendRes.status === 403
              ? 'API key invalid sau revocat — regenerează din Resend dashboard.'
              : undefined,
        },
        502
      );
    }

    return json({ ok: true }, 200);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] contact: unexpected handler error`, err);
    return json({ error: 'Eroare neașteptată. Te rugăm să încerci din nou.' }, 500);
  }
}

// Răspuns pentru metode neacceptate (GET, etc.) — evită 404 confuz.
export async function onRequest(context) {
  if (context.request.method === 'POST') {
    return onRequestPost(context);
  }
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { Allow: 'POST', 'Content-Type': 'text/plain' },
  });
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
}
