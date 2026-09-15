import assert from "node:assert/strict";
import test from "node:test";
import { getWaitlistConfiguration, handleWaitlistSignup } from "./server.ts";
import { attributionFromUrl, isProductEntry } from "./attribution.ts";

const env = { LOOPS_FORM_ID: "test-form", LOOPS_WAITLIST_LIST_ID: "test-list" };
const valid = {
  email: "  Example@Consultancy.de ",
  newsletterConsent: true,
  signupPageUrl: "https://consultry.de/produkt/korpus?utm_source=campaign&design=12&email=discard-me",
  utmSource: "campaign",
};
function request(body = valid, options = {}) {
  return new Request("https://consultry.de/api/waitlist/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: "https://consultry.de", ...options.headers },
    body: options.raw ?? JSON.stringify(body),
  });
}
const never = () => { throw new Error("Provider must not be called"); };

test("requires real provider configuration; no simulated success", async () => {
  const response = await handleWaitlistSignup(request(), {}, never);
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { error: "waitlist_not_configured" });
});

test("accepts legacy env aliases without exposing them", () => {
  assert.deepEqual(getWaitlistConfiguration(env), { endpoint: "https://app.loops.so/api/newsletter-form/test-form", listId: "test-list" });
  assert.equal(getWaitlistConfiguration({ ...env, LOOPS_FORM_ENDPOINT: "https://app.loops.so/api/newsletter-form/other" }).endpoint, "https://app.loops.so/api/newsletter-form/other");
  assert.equal(getWaitlistConfiguration({ ...env, LOOPS_FORM_ENDPOINT: "http://unsafe.test" }), null);
});

test("rejects invalid email before contacting provider", async () => {
  const response = await handleWaitlistSignup(request({ ...valid, email: "not-an-email" }), env, never);
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, "invalid_email");
});

test("requires explicit boolean consent", async () => {
  for (const value of [false, undefined, "true"]) {
    const response = await handleWaitlistSignup(request({ ...valid, newsletterConsent: value }), env, never);
    assert.equal((await response.json()).error, "missing_newsletter_consent");
  }
});

test("rejects cross-origin submissions and honeypot values", async () => {
  assert.equal((await handleWaitlistSignup(request(valid, { headers: { Origin: "https://other.test" } }), env, never)).status, 403);
  assert.equal((await handleWaitlistSignup(request({ ...valid, website: "bot" }), env, never)).status, 422);
});

test("bounds body input and rejects malformed JSON", async () => {
  assert.equal((await handleWaitlistSignup(request(valid, { raw: "x".repeat(8193) }), env, never)).status, 413);
  assert.equal((await handleWaitlistSignup(request(valid, { raw: "{" }), env, never)).status, 400);
  assert.equal((await handleWaitlistSignup(request(valid, { raw: "[]" }), env, never)).status, 400);
});

test("rejects external or missing source URLs", async () => {
  for (const signupPageUrl of ["https://external.test/", undefined]) {
    const response = await handleWaitlistSignup(request({ ...valid, signupPageUrl }), env, never);
    assert.equal((await response.json()).error, "invalid_source");
  }
});

test("provider payload preserves source, campaign, normalized email and consent", async () => {
  let captured;
  const response = await handleWaitlistSignup(request(), env, async (url, init) => {
    assert.equal(url, "https://app.loops.so/api/newsletter-form/test-form");
    captured = new URLSearchParams(init.body);
    return Response.json({ success: true });
  });
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(captured.get("email"), "example@consultancy.de");
  assert.equal(captured.get("signupPageUrl"), "https://consultry.de/produkt/korpus?utm_source=campaign");
  assert.equal(captured.get("utmSource"), "campaign");
  assert.equal(captured.get("countryDomain"), "consultry.de");
  assert.equal(captured.get("waitlistTrackingConsent"), "false");
  assert.equal(captured.get("waitlistConsentTextVersion"), "de_waitlist_checkbox_v1");
  assert.ok(captured.get("waitlistConsentAt"));
});

test("maps provider errors without leaking raw response bodies", async () => {
  const duplicate = await handleWaitlistSignup(request(), env, async () => new Response("already exists private-provider-details", { status: 400 }));
  assert.deepEqual(await duplicate.json(), { error: "already_joined" });
  const limit = await handleWaitlistSignup(request(), env, async () => new Response("rate limited", { status: 429 }));
  assert.equal(limit.status, 429);
  const failure = await handleWaitlistSignup(request(), env, async () => { throw new Error("network-secret"); });
  assert.deepEqual(await failure.json(), { error: "signup_unavailable" });
});

test("does not turn an explicit provider rejection into a confirmation", async () => {
  const response = await handleWaitlistSignup(request(), env, async () => Response.json({ success: false }));
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), { error: "signup_failed" });
});

test("attribution strips design, fragment, email and all arbitrary query data", () => {
  assert.deepEqual(attributionFromUrl("https://consultry.de/produkt/agenten-ledger?utm_source=mail&email=private&design=12#warteliste"), {
    signupPageUrl: "https://consultry.de/produkt/agenten-ledger?utm_source=mail",
    utmSource: "mail", utmMedium: undefined, utmCampaign: undefined,
  });
});

test("recognizes canonical landing routes and legacy campaign paths", () => {
  assert.equal(isProductEntry("/produkt/agenten-ledger"), true);
  assert.equal(isProductEntry("/korpus"), true);
  assert.equal(isProductEntry("/warteliste"), false);
  assert.equal(isProductEntry("/produkt/account-growth"), false);
});
