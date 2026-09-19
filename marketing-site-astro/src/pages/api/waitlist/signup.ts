import type { APIRoute } from "astro";
import { getWaitlistConfiguration, handleWaitlistSignup, type WaitlistEnvironment } from "../../../lib/waitlist/server";

export const prerender = false;

function environment(): WaitlistEnvironment {
  const read = (name: string) => process.env[name] ?? import.meta.env[name];
  return {
    HUBSPOT_WAITLIST_ENABLED: read("HUBSPOT_WAITLIST_ENABLED"),
    HUBSPOT_PORTAL_ID: read("HUBSPOT_PORTAL_ID"),
    HUBSPOT_FORM_ID_DE: read("HUBSPOT_FORM_ID_DE"),
    HUBSPOT_FORM_ID_EN: read("HUBSPOT_FORM_ID_EN"),
    HUBSPOT_ACCESS_TOKEN: read("HUBSPOT_ACCESS_TOKEN"),
    HUBSPOT_SUBSCRIPTION_TYPE_ID: read("HUBSPOT_SUBSCRIPTION_TYPE_ID"),
  };
}

/** Configuration only; never probes the provider or sends visitor data. */
export const GET: APIRoute = () => Response.json(
  { available: Boolean(getWaitlistConfiguration(environment())) },
  { headers: { "Cache-Control": "no-store" } },
);

export const POST: APIRoute = ({ request }) => handleWaitlistSignup(request, environment());
