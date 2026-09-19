import { consentRecord, waitlistConsent, waitlistConsentVersion } from './consent.ts';
import { attributionFromUrl } from './attribution.ts';

export type WaitlistEnvironment = {
  HUBSPOT_WAITLIST_ENABLED?: string;
  HUBSPOT_PORTAL_ID?: string;
  HUBSPOT_FORM_ID_DE?: string;
  HUBSPOT_FORM_ID_EN?: string;
  HUBSPOT_ACCESS_TOKEN?: string;
  HUBSPOT_SUBSCRIPTION_TYPE_ID?: string;
};
const maxBodyLength = 8192;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formPattern = /^[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i;

export function getWaitlistConfiguration(env: WaitlistEnvironment) {
  if (env.HUBSPOT_WAITLIST_ENABLED !== 'true') return null;
  const portalId = env.HUBSPOT_PORTAL_ID?.trim() ?? '';
  const de = env.HUBSPOT_FORM_ID_DE?.trim() ?? '';
  const en = env.HUBSPOT_FORM_ID_EN?.trim() ?? '';
  const token = env.HUBSPOT_ACCESS_TOKEN?.trim() ?? '';
  const subscription = env.HUBSPOT_SUBSCRIPTION_TYPE_ID?.trim() ?? '';
  const subscriptionTypeId = Number(subscription);
  if (!/^[1-9]\d*$/.test(portalId) || !formPattern.test(de) || !formPattern.test(en)
    || !token || /\s/.test(token) || !/^[1-9]\d*$/.test(subscription)
    || !Number.isSafeInteger(subscriptionTypeId)) return null;
  const endpoint = 'https://api.hsforms.com/submissions/v3/integration/secure/submit/' + portalId + '/';
  return { endpoints: { de: endpoint + de, en: endpoint + en }, token, subscriptionTypeId };
}
function json(value: object, status = 200) {
  return Response.json(value, { status, headers: { 'Cache-Control': 'no-store' } });
}
function record(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
/** Stop reading at the byte limit, including requests without Content-Length. */
async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error('invalid_json');
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyLength) { await reader.cancel(); throw new Error('request_too_large'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) as unknown;
}
function sourceContext(value: unknown, origin: string) {
  if (typeof value !== 'string' || !value.trim() || value.length > 2048) return null;
  try {
    const source = new URL(value, origin);
    if (source.origin !== origin || source.username || source.password) return null;
    return attributionFromUrl(source.href);
  } catch { return null; }
}

/** Provider acceptance is not confirmation of a contact's marketing subscription. */
export async function handleWaitlistSignup(
  request: Request,
  env: WaitlistEnvironment,
  send: typeof fetch = fetch,
): Promise<Response> {
  const origin = new URL(request.url).origin;
  if (request.headers.get('origin') !== origin) return json({ error: 'invalid_origin' }, 403);
  if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    return json({ error: 'unsupported_content_type' }, 415);
  }
  if (Number(request.headers.get('content-length')) > maxBodyLength) return json({ error: 'request_too_large' }, 413);
  let body: Record<string, unknown>;
  try {
    const parsed = await readBody(request);
    if (!record(parsed)) throw new Error('invalid_json');
    body = parsed;
  } catch (error) {
    return error instanceof Error && error.message === 'request_too_large'
      ? json({ error: 'request_too_large' }, 413) : json({ error: 'invalid_json' }, 400);
  }
  if (typeof body.website === 'string' && body.website.trim()) return json({ error: 'invalid_submission' }, 422);
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (email.length > 254 || !emailPattern.test(email)) return json({ error: 'invalid_email' }, 400);
  if (body.newsletterConsent !== true) return json({ error: 'missing_newsletter_consent' }, 400);
  const locale = body.locale;
  if (locale !== 'de' && locale !== 'en') return json({ error: 'invalid_locale' }, 400);
  if (body.consentVersion !== waitlistConsentVersion) return json({ error: 'consent_changed' }, 409);
  const source = sourceContext(body.signupPageUrl, origin);
  if (!source) return json({ error: 'invalid_source' }, 400);
  const config = getWaitlistConfiguration(env);
  if (!config) return json({ error: 'waitlist_not_configured' }, 503);

  // Fixed field allowlist. Ignore client-provided CRM fields, timestamps and consent text.
  const values: Record<string, string> = {
    email, consultry_signup_page: source.signupPageUrl,
    consultry_signup_language: locale, consultry_consent_version: waitlistConsentVersion,
  };
  if (source.utmSource) values.consultry_utm_source = source.utmSource;
  if (source.utmMedium) values.consultry_utm_medium = source.utmMedium;
  if (source.utmCampaign) values.consultry_utm_campaign = source.utmCampaign;
  const payload = {
    submittedAt: String(Date.now()),
    fields: Object.entries(values).map(([name, value]) => ({ objectTypeId: '0-1', name, value })),
    context: { pageUri: source.signupPageUrl, pageName: 'Consultry Early Access (' + locale + ')' },
    legalConsentOptions: { consent: {
      consentToProcess: true,
      text: consentRecord(locale, origin),
      communications: [{ value: true, subscriptionTypeId: config.subscriptionTypeId, text: waitlistConsent[locale].communications }],
    } },
  };
  try {
    const response = await send(config.endpoints[locale], {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + config.token },
      body: JSON.stringify(payload), signal: AbortSignal.timeout(10_000), redirect: 'error',
    });
    if (response.status === 429) return json({ error: 'rate_limited' }, 429);
    if (response.status === 401 || response.status === 403) return json({ error: 'signup_unavailable' }, 503);
    const result: unknown = await response.json().catch(() => null);
    if (response.status !== 200) {
      const invalidEmail = response.status === 400 && record(result) && Array.isArray(result.errors)
        && result.errors.some(error => record(error) && error.errorType === 'INVALID_EMAIL');
      return invalidEmail ? json({ error: 'invalid_email' }, 400) : json({ error: 'signup_failed' }, 502);
    }
    if (!record(result) || result.success === false || result.status === 'error'
      || (Array.isArray(result.errors) && result.errors.length > 0)) return json({ error: 'signup_failed' }, 502);
    // Never forward provider HTML, redirects, contact IDs, or subscription-state assertions.
    return json({ success: true });
  } catch { return json({ error: 'signup_unavailable' }, 503); }
}
