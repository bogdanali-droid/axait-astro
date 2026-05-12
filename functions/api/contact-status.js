/**
 * Cloudflare Pages Function — Contact debug status.
 *
 * Endpoint NON-destructiv care NU trimite email. Doar raportează configurarea
 * env vars vizibile pentru function-ul de contact, ca să putem diagnostica
 * rapid de ce nu ajung mesajele în inbox.
 *
 * GET /api/contact-status
 *
 * IMPORTANT: NU expune valoarea API key — doar primele 4 caractere ca prefix
 * (suficient ca să confirmi că env var este setat + match pe ce ai în Resend,
 * dar inutil ca secret).
 */

export async function onRequestGet(context) {
  const hasKey = Boolean(context.env.RESEND_API_KEY);
  const keyPrefix = hasKey ? context.env.RESEND_API_KEY.slice(0, 4) + '...' : 'NOT SET';

  const body = {
    timestamp: new Date().toISOString(),
    environment: context.env.CF_PAGES_BRANCH || 'unknown',
    resend_api_key_set: hasKey,
    resend_api_key_prefix: keyPrefix,
    expected_from: 'noreply@axait.ro',
    expected_to: 'bogdan@axait.ro',
    deploy_id: context.env.CF_PAGES_COMMIT_SHA || 'unknown',
    note: 'Acest endpoint NU trimite email. Verifică doar configurația.',
  };

  return new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

// Blochează alte metode — endpoint-ul este read-only.
export async function onRequest(context) {
  if (context.request.method === 'GET') {
    return onRequestGet(context);
  }
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { Allow: 'GET', 'Content-Type': 'text/plain' },
  });
}
