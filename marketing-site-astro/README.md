# Consultry · Astro marketing alternative

An independent marketing-site implementation with prerendered Astro HTML, native links and small TypeScript enhancements. It does not modify or require the existing Next.js marketing site or React smoke-test application.

## Page structure

| Route | Purpose |
| --- | --- |
| `/` | Shared promise, product perspectives and an immediate example |
| `/produkt` | Overview linking all five product perspectives |
| `/produkt/firmengedaechtnis` | Knowledge validity and sources |
| `/produkt/korpus` | Gradually building usable company knowledge |
| `/produkt/corporate-alignment` | Knowledge, brand and approval perspectives |
| `/produkt/agenten-ledger` | Versioned knowledge and working consensus |
| `/produkt/zugriff` | Identity, permissions and data boundaries |
| `/warteliste` | Direct signup destination |
| `/unternehmen`, `/kontakt` | Company context and contact |
| `/legal/impressum`, `/legal/datenschutz`, `/legal/agb` | Existing legal documents rendered as native HTML |

The five shorter campaign paths, such as `/korpus`, redirect to their canonical `/produkt/…` page and preserve query parameters. Product pages use a compact navigation with a route back to the overview and an on-page signup. The home page and footer expose all five destinations.

## Rendering and motion

Headings, product examples, their individual states, links, forms and WebP posters are present in the built HTML. Neither a React hydration tree nor an iframe is needed. Product demonstrations use DOM state changes and a pausable, once-only walkthrough; they remain manually controllable. Their layout follows a workflow-builder pattern: a dark dotted canvas with a breadcrumb rail and numbered step tabs, holding the warm Consultry composer and artifact surfaces adapted from the Figma Prompt Workspace (`214:2`), Shell & Assistant (`229:324`) and Layouts (`66:9`) references, and a harness-style monospace run log for agent contributions. The hero shows no separate app-preview card. A prepared task, its initial sources and the current agent contribution remain separate from the result. The canvas keeps a stable identity and version; users can compare the starting point with the current work, inspect source excerpts and download the final fictional example. Reading/processing retains the preceding result until the next contribution is ready. On compact screens an explicit start collapses the prompt and brings the canvas into view.

Each result has a purpose-specific treatment: offer revision, three-part conversation briefing, Steering slide, versioned Cutover plan, or staffing estimate. These are local, predefined examples with visible unresolved decisions; they do not call an agent backend or modify Figma.

The initial hero uses a dimensioned WebP poster matching the model. Three.js and the scene runtime sit behind a dynamic import in `src/scripts/hero-scene.ts` for all five product variants and the homepage logo. The homepage mark is built from six extruded components traced from the current Consultry PNG, with matching generated WebP posters. The scene keeps a fixed camera, with independent object expansion during a bounded scroll interval. Reached arguments accumulate through the final resting pose. Reduced-motion and constrained-connection paths retain the poster. The implementation does not add a global scrolling library.

WebGL starts only while the artwork is visible at a matching endpoint, after at least 180ms without scrolling. Where supported, startup also waits for a native idle callback; no timeout forces it into a busy frame. The renderer draws on demand with a 60 Hz scheduling cap, a 540px drawing-buffer cap during movement and a 720px cap at rest. Korpus shares one shader variant across its layers. Marker transforms use cached layout dimensions, and scroll styling updates only the elements and values that change. No render loop runs while the scene is still or offscreen.

The home page and product overview use a borderless native horizontal gallery. The active card is centered with neighboring previews on both sides; previous/next controls wrap through all five products. On screens up to 480px wide, 60vw cards and enlarged source images keep both neighboring objects visible. Two decorative, inert copies at each end preserve the previews across wrapping while only the five canonical product links remain accessible. Touch/trackpad scrolling and Arrow/Home/End navigation are supported. The gallery caches slide geometry and updates emphasis only when the active card changes.

`BaseLayout.astro` owns navigation, footer and canonical metadata. `src/content/products.ts` owns the five-route registry. Astro's Node adapter handles the live signup API and campaign redirects while pages remain prerendered.

## Waitlist

The form uses the existing Loops integration contract. Configure server-side environment variables:

```text
LOOPS_WAITLIST_LIST_ID=…
LOOPS_FORM_ID=…
```

`LOOPS_FORM_ENDPOINT` or `LOOPS_WAITLIST_FORM_ID` can supply the existing alternative configuration. Do not prefix provider credentials with `PUBLIC_`.

The client checks local API availability only when a form approaches the viewport. Without configuration, the form explicitly says it is not connected and cannot submit. A confirmation requires a successful provider response; there is no simulated success. The API validates email, explicit consent, request origin, body size and a honeypot. It forwards the existing consent-version fields.

Only the source page and the three campaign fields are kept in session storage. Navigation to `/warteliste` preserves the product entry. Arbitrary query fields, fragments and design-preview parameters are excluded from the signup URL. This module sends no analytics events or telemetry requests. The existing legal wording is copied verbatim from the original marketing site, including its original dates and production-stack descriptions.

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
