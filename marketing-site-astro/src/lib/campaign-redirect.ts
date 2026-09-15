import type { APIRoute } from 'astro';

/** Only the five explicit legacy campaign routes import this handler. */
export const redirectCampaign: APIRoute = ({ url }) => new Response(null, {
  status: 308,
  headers: { Location: `/produkt${url.pathname}${url.search}` },
});
