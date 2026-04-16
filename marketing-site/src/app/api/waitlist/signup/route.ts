import {
  waitlistConsentSource,
  waitlistConsentTextVersion,
  waitlistConsentVersion,
} from "@/lib/waitlist";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistSignupBody = {
  email?: unknown;
  countryDomain?: unknown;
  newsletterConsent?: unknown;
  signupPageUrl?: unknown;
  utmCampaign?: unknown;
  utmMedium?: unknown;
  utmSource?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

async function readLoopsError(response: Response) {
  const raw = await response.text().catch(() => "");

  if (!raw) {
    return "loops_request_failed";
  }

  try {
    const parsed = JSON.parse(raw) as { message?: string; error?: string };
    return parsed.message ?? parsed.error ?? raw;
  } catch {
    return raw;
  }
}

export async function POST(request: Request) {
  const formEndpoint =
    process.env.LOOPS_WAITLIST_FORM_ID?.trim() ??
    process.env.NEXT_PUBLIC_LOOPS_FORM_ENDPOINT?.trim();
  const waitlistListId =
    process.env.LOOPS_WAITLIST_LIST_ID?.trim() ??
    process.env.NEXT_PUBLIC_LOOPS_WAITLIST_LIST_ID?.trim();

  if (!formEndpoint || !waitlistListId) {
    return Response.json({ error: "waitlist_not_configured" }, { status: 500 });
  }

  let body: WaitlistSignupBody;

  try {
    body = (await request.json()) as WaitlistSignupBody;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const email = isNonEmptyString(body.email) ? body.email.trim().toLowerCase() : "";

  if (!emailPattern.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  if (body.newsletterConsent !== true) {
    return Response.json({ error: "missing_newsletter_consent" }, { status: 400 });
  }

  const consentCapturedAt = new Date().toISOString();
  const payload = new URLSearchParams({
    email,
    mailingLists: waitlistListId,
    source: "consultry_waitlist",
    userGroup: "warteliste",
    waitlistConsentAt: consentCapturedAt,
    waitlistConsentSource,
    waitlistConsentTextVersion,
    waitlistConsentVersion,
    waitlistTrackingConsent: "false",
  });

  if (isNonEmptyString(body.signupPageUrl)) {
    payload.set("signupPageUrl", body.signupPageUrl.trim());
  }

  if (isNonEmptyString(body.countryDomain)) {
    payload.set("countryDomain", body.countryDomain.trim());
  }

  if (isNonEmptyString(body.utmSource)) {
    payload.set("utmSource", body.utmSource.trim());
  }

  if (isNonEmptyString(body.utmMedium)) {
    payload.set("utmMedium", body.utmMedium.trim());
  }

  if (isNonEmptyString(body.utmCampaign)) {
    payload.set("utmCampaign", body.utmCampaign.trim());
  }

  const loopsResponse = await fetch(formEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
    cache: "no-store",
  });

  if (!loopsResponse.ok) {
    return Response.json(
      { error: await readLoopsError(loopsResponse) },
      { status: loopsResponse.status },
    );
  }

  return Response.json({ success: true });
}
