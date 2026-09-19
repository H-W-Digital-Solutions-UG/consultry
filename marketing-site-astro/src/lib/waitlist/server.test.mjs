import assert from 'node:assert/strict';
import test from 'node:test';
import { getWaitlistConfiguration, handleWaitlistSignup } from './server.ts';
import { consentRecord, waitlistConsent, waitlistConsentVersion } from './consent.ts';
import { attributionFromUrl, isProductEntry } from './attribution.ts';

const env = {
  HUBSPOT_WAITLIST_ENABLED: 'true', HUBSPOT_PORTAL_ID: '12345',
  HUBSPOT_FORM_ID_DE: '11111111-1111-1111-1111-111111111111',
  HUBSPOT_FORM_ID_EN: '22222222-2222-2222-2222-222222222222',
  HUBSPOT_ACCESS_TOKEN: 'test-token-not-a-real-credential', HUBSPOT_SUBSCRIPTION_TYPE_ID: '999',
};
const valid = {
  email: '  Example@Consultancy.de ', newsletterConsent: true,
  locale: 'de', consentVersion: waitlistConsentVersion,
  signupPageUrl: 'https://consultry.de/produkt/zugriff?utm_source=campaign&design=12&email=discard-me#private',
  utmSource: 'campaign',
};
function request(body = valid, options = {}) {
  return new Request('https://consultry.de/api/waitlist/signup', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://consultry.de', ...options.headers },
    body: options.raw ?? JSON.stringify(body),
  });
}
const accepted = () => Promise.resolve(Response.json({ inlineMessage: 'Thanks' }));
async function blocked(body, error, status = 400, options = {}, config = env) {
  let calls = 0;
  const response = await handleWaitlistSignup(request(body, options), config, async () => { calls++; return accepted(); });
  assert.equal(calls, 0, 'rejected requests must not contact HubSpot');
  assert.equal(response.status, status);
  assert.deepEqual(await response.json(), { error });
}
test('fails closed without every HubSpot setting and explicit activation', async () => {
  assert.equal(getWaitlistConfiguration({}), null);
  assert.equal(getWaitlistConfiguration({ LOOPS_FORM_ID: 'old', LOOPS_WAITLIST_LIST_ID: 'old' }), null);
  for (const key of Object.keys(env)) {
    const incomplete = { ...env, [key]: '' };
    assert.equal(getWaitlistConfiguration(incomplete), null, key);
    await blocked(valid, 'waitlist_not_configured', 503, {}, incomplete);
  }
  assert.equal(getWaitlistConfiguration({ ...env, HUBSPOT_WAITLIST_ENABLED: 'false' }), null);
});
test('pins HubSpot endpoints and validates IDs and token', () => {
  const config = getWaitlistConfiguration(env);
  assert.equal(config.endpoints.de, 'https://api.hsforms.com/submissions/v3/integration/secure/submit/12345/' + env.HUBSPOT_FORM_ID_DE);
  assert.equal(config.endpoints.en, 'https://api.hsforms.com/submissions/v3/integration/secure/submit/12345/' + env.HUBSPOT_FORM_ID_EN);
  assert.equal(config.subscriptionTypeId, 999);
  for (const bad of [
    { HUBSPOT_PORTAL_ID: '../evil' }, { HUBSPOT_FORM_ID_DE: 'https://evil.test' }, { HUBSPOT_FORM_ID_EN: 'missing' },
    { HUBSPOT_SUBSCRIPTION_TYPE_ID: '0' }, { HUBSPOT_SUBSCRIPTION_TYPE_ID: '1.5' },
    { HUBSPOT_SUBSCRIPTION_TYPE_ID: '99999999999999999999' }, { HUBSPOT_ACCESS_TOKEN: 'token\r\nInjected: header' },
  ]) assert.equal(getWaitlistConfiguration({ ...env, ...bad }), null);
});
test('requires same-origin JSON and blocks honeypots', async () => {
  for (const Origin of ['https://other.test', '', 'null']) await blocked(valid, 'invalid_origin', 403, { headers: { Origin } });
  for (const type of ['text/plain', 'application/json-evil']) await blocked(valid, 'unsupported_content_type', 415, { headers: { 'Content-Type': type } });
  await blocked({ ...valid, website: 'bot' }, 'invalid_submission', 422);
});
test('bounds UTF-8 bytes and rejects invalid JSON shapes', async () => {
  await blocked(valid, 'request_too_large', 413, { raw: 'x'.repeat(8193) });
  await blocked(valid, 'request_too_large', 413, { raw: JSON.stringify({ ...valid, extra: '😀'.repeat(2500) }) });
  await blocked(valid, 'request_too_large', 413, { headers: { 'Content-Length': '9000' } });
  for (const raw of ['{', '[]', 'null', '"hello"']) await blocked(valid, 'invalid_json', 400, { raw });
});
test('validates full email and explicit boolean consent', async () => {
  for (const email of ['not-an-email', 'a\r\nb@c.de', 'a'.repeat(250) + '@x.de', 123]) await blocked({ ...valid, email }, 'invalid_email');
  for (const newsletterConsent of [false, undefined, 'true', 1]) await blocked({ ...valid, newsletterConsent }, 'missing_newsletter_consent');
});
test('rejects stale consent and unsupported or missing locale', async () => {
  for (const locale of ['fr', undefined, 'constructor']) await blocked({ ...valid, locale }, 'invalid_locale');
  for (const consentVersion of ['old', undefined]) await blocked({ ...valid, consentVersion }, 'consent_changed', 409);
});
test('rejects external, credential-bearing and missing source URLs', async () => {
  for (const signupPageUrl of ['https://external.test/', 'https://person:secret@consultry.de/', undefined, 'https://consultry.de/' + 'x'.repeat(2048)]) {
    await blocked({ ...valid, signupPageUrl }, 'invalid_source');
  }
});
for (const locale of ['de', 'en']) test(locale + ': sends minimal fields, exact consent and server-only authentication', async () => {
  let captured;
  const before = Date.now();
  const response = await handleWaitlistSignup(request({ ...valid, locale,
    ipAddress: '192.0.2.1', hutk: 'do-not-forward', accessToken: 'fake',
    fields: [{ name: 'lifecyclestage', value: 'customer' }], utmMedium: 'invented-not-in-source',
    legalConsentOptions: { consent: { consentToProcess: false } },
  }), env, async (url, init) => {
    assert.equal(url, getWaitlistConfiguration(env).endpoints[locale]);
    assert.equal(init.headers.Authorization, 'Bearer ' + env.HUBSPOT_ACCESS_TOKEN);
    assert.equal(init.headers['Content-Type'], 'application/json');
    assert.equal(init.redirect, 'error');
    assert.ok(init.signal instanceof AbortSignal);
    captured = JSON.parse(init.body);
    return Response.json({ redirectUri: 'https://do-not-redirect.test', inlineMessage: '<script>doNotRender()</script>' });
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  const fields = Object.fromEntries(captured.fields.map(field => [field.name, field.value]));
  assert.deepEqual(fields, {
    email: 'example@consultancy.de', consultry_signup_page: 'https://consultry.de/produkt/zugriff?utm_source=campaign',
    consultry_signup_language: locale, consultry_consent_version: waitlistConsentVersion, consultry_utm_source: 'campaign',
  });
  assert.ok(captured.fields.every(field => field.objectTypeId === '0-1'));
  assert.deepEqual(captured.context, { pageUri: fields.consultry_signup_page, pageName: 'Consultry Early Access (' + locale + ')' });
  assert.ok(Number(captured.submittedAt) >= before && Number(captured.submittedAt) <= Date.now());
  assert.deepEqual(captured.legalConsentOptions, { consent: {
    consentToProcess: true, text: consentRecord(locale, 'https://consultry.de'),
    communications: [{ value: true, subscriptionTypeId: 999, text: waitlistConsent[locale].communications }],
  } });
  assert.equal('skipValidation' in captured, false);
  assert.equal(JSON.stringify(captured).includes('do-not-forward'), false);
});
test('sanitizes HubSpot errors; auth, rate limits and failures are not success', async () => {
  for (const [status, expected, error] of [[400, 502, 'signup_failed'], [401, 503, 'signup_unavailable'], [403, 503, 'signup_unavailable'], [429, 429, 'rate_limited'], [500, 502, 'signup_failed'], [302, 502, 'signup_failed']]) {
    const result = await handleWaitlistSignup(request(), env, async () => new Response('private-provider-details', { status }));
    assert.equal(result.status, expected);
    assert.deepEqual(await result.json(), { error });
  }
  const invalid = await handleWaitlistSignup(request(), env, async () => Response.json({ errors: [{ errorType: 'INVALID_EMAIL', message: 'private-email' }] }, { status: 400 }));
  assert.deepEqual(await invalid.json(), { error: 'invalid_email' });
  const failure = await handleWaitlistSignup(request(), env, async () => { throw new Error('secret'); });
  assert.deepEqual(await failure.json(), { error: 'signup_unavailable' });
});
test('malformed and contradictory success bodies fail closed', async () => {
  for (const body of [null, [], { success: false }, { status: 'error' }, { errors: [{ errorType: 'UNKNOWN' }] }]) {
    const result = await handleWaitlistSignup(request(), env, async () => Response.json(body));
    assert.equal(result.status, 502);
  }
  const result = await handleWaitlistSignup(request(), env, async () => new Response('<html>Gateway error</html>'));
  assert.equal(result.status, 502);
});
test('accepted repeat submissions do not claim email confirmation', async () => {
  for (let i = 0; i < 2; i++) assert.deepEqual(await (await handleWaitlistSignup(request(), env, accepted)).json(), { success: true });
});
test('attribution keeps only campaign fields; canonical and legacy entries work', () => {
  assert.deepEqual(attributionFromUrl('https://consultry.de/produkt/agenten-ledger?utm_source=mail&email=private&design=12#warteliste'), {
    signupPageUrl: 'https://consultry.de/produkt/agenten-ledger?utm_source=mail', utmSource: 'mail', utmMedium: undefined, utmCampaign: undefined,
  });
  assert.equal(isProductEntry('/en/produkt/agenten-ledger'), true);
  assert.equal(isProductEntry('/korpus'), true);
  assert.equal(isProductEntry('/warteliste'), false);
});
