export async function onRequestPost(context) {
  const { request, env } = context;

  // Verificare token secret pentru securitate
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.API_SECRET}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { title, description, slug } = await request.json();

  if (!title || !slug) {
    return new Response(JSON.stringify({ error: 'title si slug sunt obligatorii' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const pageId = env.FACEBOOK_PAGE_ID;
  const accessToken = env.FACEBOOK_ACCESS_TOKEN;
  const link = `https://axait.ro/blog/${slug}`;

  const message = `${title}\n\n${description}\n\nCiteste articolul complet: ${link}`;

  const response = await fetch(
    `https://graph.facebook.com/v25.0/${pageId}/feed`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        link,
        access_token: accessToken,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Facebook API error', details: result }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true, post_id: result.id }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
