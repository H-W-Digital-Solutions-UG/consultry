import type { APIRoute } from 'astro';

/** Only the explicit legacy campaign routes import this handler; /korpus has its own merged target. */
export const redirectCampaign: APIRoute = ({ url }) => new Response(null, {
  status: 308,
  headers: { Location: `/produkt${url.pathname}${url.search}` },
});
