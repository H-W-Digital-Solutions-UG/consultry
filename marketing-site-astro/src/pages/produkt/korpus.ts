import type { APIRoute } from 'astro';

/** Korpus merged into Firmengedächtnis on 2026-09-15. Old links stay alive. */
export const GET: APIRoute = ({ url }) => new Response(null, {
  status: 308,
  headers: { Location: `/produkt/firmengedaechtnis${url.search}` },
});
export const prerender = false;
