# Consultry · Astro marketing alternative

An independent marketing-site implementation with prerendered Astro HTML, native links and small TypeScript enhancements. It does not modify or require the existing Next.js marketing site or React smoke-test application.

## Page structure

| Route | Purpose |
| --- | --- |
| `/` | Shared promise and product perspectives; no product demo, the carried 3D object provides the immersion |
| `/produkt` | Overview linking all four product perspectives |
| `/produkt/firmengedaechtnis` | Knowledge graph across Confluence, Notion, Obsidian and SharePoint; valid state and approvals |
| `/produkt/corporate-alignment` | Knowledge, brand and approval perspectives |
| `/produkt/agenten-ledger` | Swarm orchestration with per-contribution audit and a recorded working state |
| `/produkt/zugriff` | Access management: SSO, roles and effects, integrations, agent scope with audit log |
| `/warteliste` | Direct signup destination |
| `/unternehmen`, `/kontakt` | Company context and contact |
| `/legal/impressum`, `/legal/datenschutz`, `/legal/agb` | Existing legal documents rendered as native HTML |

The shorter campaign paths, such as `/zugriff`, redirect to their canonical `/produkt/…` page and preserve query parameters; `/korpus` and `/produkt/korpus` redirect to `/produkt/firmengedaechtnis`, into which Korpus was merged on 15 September 2026. Product pages use a compact navigation with a route back to the overview and an on-page signup. The home page and footer expose all four destinations.

## Rendering and motion

Headings, product examples, their individual states, links, forms and WebP posters are present in the built HTML. Neither a React hydration tree nor an iframe is needed. Product demonstrations use DOM state changes and a pausable, once-only walkthrough; they remain manually controllable. Their layout follows a workflow-builder pattern: a dark dotted canvas with a breadcrumb rail and numbered step tabs, holding the warm Consultry composer and artifact surfaces adapted from the Figma Prompt Workspace (`214:2`), Shell & Assistant (`229:324`) and Layouts (`66:9`) references, and a harness-style monospace run log for agent contributions. The hero shows no separate app-preview card. A prepared task, its initial sources and the current agent contribution remain separate from the result. The canvas keeps a stable identity and version; users can compare the starting point with the current work, inspect source excerpts and download the final fictional example. Reading/processing retains the preceding result until the next contribution is ready. On compact screens an explicit start collapses the prompt and brings the canvas into view.

Each result has a purpose-specific treatment: offer revision, three-part conversation briefing, Steering slide, versioned Cutover plan, or staffing estimate. These are local, predefined examples with visible unresolved decisions; they do not call an agent backend or modify Figma.

The initial hero uses a dimensioned WebP poster matching the model. Three.js and the scene runtime sit behind a dynamic import in `src/scripts/hero-scene.ts` for all four product variants and the homepage logo. The homepage mark is built from six extruded components traced from the current Consultry PNG, with matching generated WebP posters. The scene keeps a fixed camera, with independent object expansion during a bounded scroll interval. Reached arguments accumulate through the final resting pose. Reduced-motion and constrained-connection paths retain the poster. The implementation does not add a global scrolling library.

WebGL starts only while the artwork is visible at a matching endpoint, after at least 180ms without scrolling. Where supported, startup also waits for a native idle callback; no timeout forces it into a busy frame. The renderer draws on demand with a 60 Hz scheduling cap, a 540px drawing-buffer cap during movement and a 720px cap at rest. Marker transforms use cached layout dimensions, and scroll styling updates only the elements and values that change. No render loop runs while the scene is still or offscreen.

The home page and product overview use a borderless native horizontal gallery. The active card is centered with neighboring previews on both sides; previous/next controls wrap through all four products. On screens up to 480px wide, 60vw cards and enlarged source images keep both neighboring objects visible. Two decorative, inert copies at each end preserve the previews across wrapping while only the four canonical product links remain accessible. Touch/trackpad scrolling and Arrow/Home/End navigation are supported. The gallery caches slide geometry and updates emphasis only when the active card changes.

`BaseLayout.astro` owns navigation, footer and canonical metadata. `src/content/products.ts` owns the four-route registry. Astro's Node adapter handles the live signup API and campaign redirects while pages remain prerendered.

## Waitlist

The native Astro form submits to `POST /api/waitlist/signup`. The server forwards an authenticated HubSpot Forms API submission. No iframe, HubSpot tracking script, or browser-side token is used. This replaces Loops **only in marketing-site-astro**; the separate Next.js site and existing provider records are untouched.

Configure `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_ID_DE`, `HUBSPOT_FORM_ID_EN`, `HUBSPOT_ACCESS_TOKEN` and `HUBSPOT_SUBSCRIPTION_TYPE_ID` as shown in [.env.example](.env.example). Keep `HUBSPOT_WAITLIST_ENABLED=false` until the checklist below is complete. Never prefix credentials with `PUBLIC_`. The Codex HubSpot connector is not a runtime credential for the website.

Email is the contact identifier. Create these proposed contact properties and include them in **both** HubSpot form definitions. This implementation does not create properties or forms remotely:

| Internal name | Type | Source |
| --- | --- | --- |
| `email` | Existing email | Visitor entry |
| `consultry_signup_page` | Single-line text | Same-origin URL, only three UTM parameters retained |
| `consultry_signup_language` | Single-line text | Current form language, de or en |
| `consultry_consent_version` | Single-line text | Server-validated consent version |
| `consultry_utm_source` | Single-line text, optional | Sanitized signup URL |
| `consultry_utm_medium` | Single-line text, optional | Sanitized signup URL |
| `consultry_utm_campaign` | Single-line text, optional | Sanitized signup URL |

The API also receives the server timestamp, source context and consent text from `src/lib/waitlist/consent.ts`, the same wording used by the checkbox. We do not infer company, lifecycle stage, owner, email confirmation or marketing eligibility. Existing contacts may submit again. Optional properties are omitted when absent rather than erased. Custom properties represent the latest signup, not an immutable ledger; retain form-submission history for evidence.

### HubSpot activation checklist

1. Confirm the intended Consultry account. Create/publish the DE and EN forms with the listed fields and a dedicated launch/product-update subscription type. If deliberately using one form, enter its ID for both languages and verify confirmation-email language behavior.
2. Configure double opt-in for these forms; verify sender, unsubscribe mechanism and DE/EN emails. Do not manually mark contacts confirmed or override unsubscribes. API acceptance is not proof that an email was sent or a subscription confirmed.
3. Configure a server token with the minimum permissions required by the secure Forms endpoint in the deployment secret store. Add the IDs and restart Astro. Standalone preview needs environment variables injected at runtime; rebuilding does not refresh an already-running Node process.
4. Review the provider agreement, hosting region, transfer safeguards, retention and the **complete** privacy notice before real collection. The provider paragraph was updated; legacy sections about cookies, analytics, legal bases and retention are not verified against this deployment. This is not legal sign-off.
5. Check marketing-contact settings and associated billing. The application does not set a paid marketing-contact flag. Add deployment-level rate limiting/bot protection for the POST route; a honeypot and origin check are not comprehensive abuse prevention.
6. After mocked tests, run an explicitly approved end-to-end submission with an address you control. Verify CRM record, source, language, consent, confirmation email, unsubscribe state, repeat submission and errors. This implementation created no real contacts or emails.
7. Only then set `HUBSPOT_WAITLIST_ENABLED=true`. This is operator sign-off, not an automated check of remote HubSpot settings. GET availability reports local configuration only.

The API limits the streamed body to 8 KiB, validates email, exact origin, JSON content type, locale, consent version and a honeypot, fixes the outbound host, rejects redirects, and uses a 10-second timeout. No client-supplied CRM fields, raw response HTML, redirects, visitor IP or tracking cookies are forwarded. There are no automatic POST retries: a timeout can leave an uncertain provider result, so inspect HubSpot before replaying. Missing configuration or activation fails closed.

Only the source page and campaign fields are kept in session storage. Other query fields and fragments are excluded. Source context survives navigation to the signup page. No analytics events are emitted.

Sources: [Forms API](https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/v3-legacy/submit-data-unauthenticated), [authenticated endpoint](https://developers.hubspot.com/changelog/announcing-forms-submission-rate-limits), [double opt-in](https://knowledge.hubspot.com/marketing-email/set-up-double-opt-in-for-emails), [marketing-contact settings](https://knowledge.hubspot.com/records/set-contacts-as-marketing), [HubSpot DPA](https://legal.hubspot.com/dpa).

## Local development and verification

```sh
npm install
npm run dev
npm run check
npm test
npm run build
npm run check:output
npm run preview
```

Use Node.js 24 LTS (the local machine also has an unsupported odd Node 23 installation). Set `ASTRO_TELEMETRY_DISABLED=1` in restricted environments.

The local preview runs at `http://127.0.0.1:4321`. It needs the Node server for API and redirect routes; serving `dist/client` alone is insufficient.

`check:output` verifies the built routes, canonical metadata, native product/form markup, local links and assets, hash targets, ARIA references and the JavaScript import graph. It reports each landing page's initial JavaScript gzip size separately from the deferred Three.js/scene bundle in `output/check-output.json`. It also rejects React/Next runtime markers. Visual layout, input behavior and live route responses require browser checks in addition to this static report. Unit tests mock the provider and never submit real waitlist entries.

For local renderer diagnostics, append `?scene-perf=1` to a page with a 3D hero and inspect the canvas's `data-scene-perf` JSON. It reports setup time, asynchronous shader preparation, CPU render submission time, submitted frame count, draw calls, triangles and buffer dimensions. These observations do not measure GPU completion, sustained frame rate or Core Web Vitals; diagnostics are off by default and send no telemetry.

`SITE_URL` sets the canonical origin. Search indexing is disabled unless `PUBLIC_INDEXABLE=true` is explicitly set for a production build. The alternative has not been deployed by these local build commands.

## Design review

Messaging input for the next collaborative refinement: [voice-session wording and page mapping, 14 September](../product-definition/archive/session-2026-09-14-framing-messaging/NOTES.md). This records the broader product framing, core safeguards versus optional additional isolation, and later evidence-based founder stories. It is not final page copy or approval to publish. Current product authority remains `product-definition/DECISIONS.md` (D-0914-F01–F06).

See [design-qa.md](design-qa.md) for the reference decisions, local browser checks, screenshots and the measured initial-JavaScript comparison. Font license notices are included beside the self-hosted Inter and JetBrains Mono files.
