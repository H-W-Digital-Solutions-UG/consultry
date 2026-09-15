export type WaitlistEnvironment = {
  LOOPS_FORM_ID?: string;
  LOOPS_FORM_ENDPOINT?: string;
  LOOPS_WAITLIST_FORM_ID?: string;
  LOOPS_WAITLIST_LIST_ID?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxBodyLength = 8192;
const campaignFields = ["utmSource", "utmMedium", "utmCampaign"] as const;

export function getWaitlistConfiguration(env: WaitlistEnvironment) {
  const form = env.LOOPS_FORM_ENDPOINT?.trim()
    || env.LOOPS_WAITLIST_FORM_ID?.trim()
    || env.LOOPS_FORM_ID?.trim();
  const listId = env.LOOPS_WAITLIST_LIST_ID?.trim();
  if (!form || !listId) return null;
  try {
    if (form.includes("://") && !form.startsWith("https://")) return null;
    const endpoint = new URL(form.startsWith("https://") ? form : `https://app.loops.so/api/newsletter-form/${encodeURIComponent(form)}`);
    if (endpoint.protocol !== "https:") return null;
    return { endpoint: endpoint.href, listId };
  } catch {
    return null;
  }
}

function json(value: object, status = 200) {
  return Response.json(value, { status, headers: { "Cache-Control": "no-store" } });
}

function field(value: unknown, maxLength = 200) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function sanitizeSource(value: unknown, origin: string) {
  try {
    if (!field(value)) return null;
    const source = new URL(field(value, 2048), origin);
    if (source.origin !== origin) return null;
    const clean = new URL(source.pathname, origin);
    for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
      const value = field(source.searchParams.get(key));
      if (value) clean.searchParams.set(key, value);
    }
    return clean.href;
  } catch {
    return null;
  }
}

/** Shared, framework-free endpoint. A successful response requires provider acceptance. */
export async function handleWaitlistSignup(
  request: Request,
  env: WaitlistEnvironment,
  send: typeof fetch = fetch,
): Promise<Response> {
  const origin = new URL(request.url).origin;
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin && requestOrigin !== origin) return json({ error: "invalid_origin" }, 403);
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "unsupported_content_type" }, 415);
  }
  if (Number(request.headers.get("content-length")) > maxBodyLength) {
    return json({ error: "request_too_large" }, 413);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > maxBodyLength) return json({ error: "request_too_large" }, 413);
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid_body");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  if (field(body.website)) return json({ error: "invalid_submission" }, 422);
  const email = field(body.email, 255).toLowerCase();
  if (email.length > 254 || !emailPattern.test(email)) return json({ error: "invalid_email" }, 400);
  if (body.newsletterConsent !== true) return json({ error: "missing_newsletter_consent" }, 400);
  const source = sanitizeSource(body.signupPageUrl, origin);
  if (!source) return json({ error: "invalid_source" }, 400);

  const config = getWaitlistConfiguration(env);
  if (!config) return json({ error: "waitlist_not_configured" }, 503);

  const payload = new URLSearchParams({
    email,
    mailingLists: config.listId,
    source: "consultry_waitlist",
    userGroup: "warteliste",
    signupPageUrl: source,
    countryDomain: new URL(request.url).hostname,
    waitlistConsentAt: new Date().toISOString(),
    waitlistConsentSource: "website_warteliste",
    waitlistConsentVersion: "consultry_waitlist_v1_2026-04-16",
    waitlistConsentTextVersion: "de_waitlist_checkbox_v1",
    waitlistTrackingConsent: "false",
  });
  for (const key of campaignFields) {
    const value = field(body[key]);
    if (value) payload.set(key, value);
  }

  try {
    const response = await send(config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      const message = (await response.text()).toLowerCase();
      if (response.status === 429 || /rate.?limit|too many/.test(message)) return json({ error: "rate_limited" }, 429);
      if (/already|duplicate|exists/.test(message)) return json({ error: "already_joined" }, 409);
      return json({ error: "signup_failed" }, 502);
    }
    const providerResult = await response.json().catch(() => null);
    if (providerResult?.success === false) return json({ error: "signup_failed" }, 502);
    return json({ success: true });
  } catch {
    return json({ error: "signup_unavailable" }, 503);
  }
}
