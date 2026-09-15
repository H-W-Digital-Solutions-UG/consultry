import type { APIRoute } from "astro";
import { getWaitlistConfiguration, handleWaitlistSignup, type WaitlistEnvironment } from "../../../lib/waitlist/server";

export const prerender = false;

function environment(): WaitlistEnvironment {
  const read = (name: string) => process.env[name] ?? import.meta.env[name];
  return {
    LOOPS_FORM_ID: read("LOOPS_FORM_ID"),
    LOOPS_FORM_ENDPOINT: read("LOOPS_FORM_ENDPOINT"),
    LOOPS_WAITLIST_FORM_ID: read("LOOPS_WAITLIST_FORM_ID"),
    LOOPS_WAITLIST_LIST_ID: read("LOOPS_WAITLIST_LIST_ID"),
  };
}

/** Configuration only; never probes the provider or sends visitor data. */
export const GET: APIRoute = () => Response.json(
  { available: Boolean(getWaitlistConfiguration(environment())) },
  { headers: { "Cache-Control": "no-store" } },
);

export const POST: APIRoute = ({ request }) => handleWaitlistSignup(request, environment());
