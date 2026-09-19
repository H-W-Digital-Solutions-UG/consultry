export type SignupAttribution = {
  signupPageUrl: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export const attributionSessionKey = "consultry:signup-context:v1";
const campaignKeys = ["utm_source", "utm_medium", "utm_campaign"] as const;

/** Only the page and campaign fields belong in signup context, never arbitrary query data. */
export function attributionFromUrl(value: string): SignupAttribution {
  const url = new URL(value);
  const clean = new URL(url.pathname, url.origin);
  for (const key of campaignKeys) {
    const value = url.searchParams.get(key)?.trim().slice(0, 200);
    if (value) clean.searchParams.set(key, value);
  }
  return {
    signupPageUrl: clean.href,
    utmSource: clean.searchParams.get("utm_source") ?? undefined,
    utmMedium: clean.searchParams.get("utm_medium") ?? undefined,
    utmCampaign: clean.searchParams.get("utm_campaign") ?? undefined,
  };
}

export function isProductEntry(pathname: string): boolean {
  return /^\/(?:en\/)?(?:produkt\/)?(?:firmengedaechtnis|korpus|corporate-alignment|agenten-ledger|zugriff)\/?$/.test(pathname);
}
