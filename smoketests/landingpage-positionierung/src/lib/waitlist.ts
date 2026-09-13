/**
 * Waitlist client matching the marketing site's `POST /api/waitlist/signup`
 * contract (Loops-backed): `email`, `newsletterConsent`, `signupPageUrl`, UTMs.
 * The variant path travels inside `signupPageUrl`, which is what makes the
 * smoke test attributable without any extra field on the Loops side.
 */
export type WaitlistResult = { ok: true } | { ok: false; error: string };

export interface WaitlistInput {
  email: string;
  newsletterConsent: boolean;
  signupPageUrl: string;
  utm?: { source?: string; medium?: string; campaign?: string };
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Client-side validation mirroring the server; returns an error code or null. */
export function validate(input: WaitlistInput): string | null {
  if (!EMAIL.test(input.email.trim())) return "invalid_email";
  if (input.newsletterConsent !== true) return "missing_newsletter_consent";
  return null;
}

/** Reads UTM parameters from a URL search string. Pure. */
export function readUtm(search: string): WaitlistInput["utm"] {
  const p = new URLSearchParams(search);
  const pick = (k: string) => p.get(k)?.trim() || undefined;
  return { source: pick("utm_source"), medium: pick("utm_medium"), campaign: pick("utm_campaign") };
}

export async function submitWaitlist(input: WaitlistInput): Promise<WaitlistResult> {
  const invalid = validate(input);
  if (invalid) return { ok: false, error: invalid };
  const endpoint = (import.meta.env.VITE_WAITLIST_ENDPOINT as string | undefined) ?? "/api/waitlist/signup";
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: input.email.trim().toLowerCase(),
        newsletterConsent: true,
        signupPageUrl: input.signupPageUrl,
        countryDomain: typeof window !== "undefined" ? window.location.hostname : undefined,
        utmSource: input.utm?.source,
        utmMedium: input.utm?.medium,
        utmCampaign: input.utm?.campaign,
      }),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      return { ok: false, error: body.error ?? `http_${res.status}` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}
