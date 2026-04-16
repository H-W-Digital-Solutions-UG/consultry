# `marketing-site` Analytics Runbook

Status snapshot for `marketing-site` as of April 16, 2026.

This document is the synthesized handoff note for the consent-gated analytics stack on `consultry.de`. It combines:

- current repo state
- the intended production architecture
- the exact GTM and GA4 setup required
- the remaining CookieScript dashboard work
- official online sources from CookieScript, Google, and Next.js

The working decision for this repo is:

- `CookieScript` as the CMP and source of truth for consent
- `GTM` loaded only after `performance` consent
- `GA4` configured only inside `GTM`
- no direct `gtag.js` install in app code
- no `noscript` GTM iframe in this architecture

---

## 1. Target Architecture

### Chosen model

This repo uses **app-level consent gating**, not vendor-side autoblocking as the primary enforcement mechanism.

That means:

1. `CookieScript` loads first in the document head.
2. The app reads the consent state from `CookieScript.instance.currentState()`.
3. `GTM` is mounted only when the `performance` category is allowed.
4. `GA4` receives events only through `GTM`.

### Why this model was chosen

- It guarantees no Google request before consent if the app shell is working correctly.
- It is easier to reason about in Next.js App Router than mixing GTM install snippets, CMP blocking, and Google Consent Mode behavior.
- It avoids duplicate instrumentation paths.
- It keeps the analytics logic explicit in code while leaving consent storage and UI to CookieScript.

### Explicit non-goals

- no direct GA4 `gtag.js` snippet in the app
- no GTM `noscript` iframe
- no Hotjar in this rollout
- no automatic pageview duplication between GTM and app code
- no React recreation of the CookieScript banner logic

---

## 2. Current Repo State

The app is no longer a blank slate. The shell, event layer, and most of the legal surface are already prepared.

### App shell and consent bridge

- [src/app/layout.tsx](/Users/jules/dev/consultry/marketing-site/src/app/layout.tsx)
  - loads `CookieScript` with `next/script`
  - uses `strategy="beforeInteractive"`
  - mounts the analytics bootstrap under `Suspense`

- [src/components/analytics/AnalyticsBootstrap.tsx](/Users/jules/dev/consultry/marketing-site/src/components/analytics/AnalyticsBootstrap.tsx)
  - reads `NEXT_PUBLIC_GTM_ID`
  - waits for CookieScript consent events
  - mounts GTM only after `performance` consent
  - owns client-side `page_view` route tracking
  - delegates approved click tracking via `data-analytics-*` attributes

- [src/lib/analytics.ts](/Users/jules/dev/consultry/marketing-site/src/lib/analytics.ts)
  - normalizes consent lookups
  - pushes events into `window.dataLayer`
  - defines `page_view`, `cta_click`, `generate_lead`, `qualify_lead`, and `contact_click`

- [src/types/global.d.ts](/Users/jules/dev/consultry/marketing-site/src/types/global.d.ts)
  - defines CookieScript browser API typings
  - defines `window.dataLayer`

### Consent UI and legal surfaces

- [src/components/analytics/CookiePreferencesPanel.tsx](/Users/jules/dev/consultry/marketing-site/src/components/analytics/CookiePreferencesPanel.tsx)
  - shows current consent status
  - opens CookieScript settings
  - can allow performance or reject to necessary only

- [src/app/cookies/page.tsx](/Users/jules/dev/consultry/marketing-site/src/app/cookies/page.tsx)
  - now acts as the branded first-party consent/control page
  - documents necessary vs performance usage

- [src/app/datenschutz/page.tsx](/Users/jules/dev/consultry/marketing-site/src/app/datenschutz/page.tsx)
  - describes CookieScript, GTM, GA4, and local/session storage
  - no longer references Vercel analytics

### Funnel and CTA tracking

- [src/components/marketing/Nav.tsx](/Users/jules/dev/consultry/marketing-site/src/components/marketing/Nav.tsx)
- [src/components/marketing/HeroShowCaseHomepage.tsx](/Users/jules/dev/consultry/marketing-site/src/components/marketing/HeroShowCaseHomepage.tsx)
- [src/components/marketing/CTABand.tsx](/Users/jules/dev/consultry/marketing-site/src/components/marketing/CTABand.tsx)
- [src/app/kontakt/page.tsx](/Users/jules/dev/consultry/marketing-site/src/app/kontakt/page.tsx)

These already carry `data-analytics-*` attributes for approved CTA/contact tracking.

### Waitlist flow and consent evidence

- [src/components/marketing/WaitlistSignupForm.tsx](/Users/jules/dev/consultry/marketing-site/src/components/marketing/WaitlistSignupForm.tsx)
  - enforces a newsletter/product-updates consent checkbox in UI
  - sends `newsletterConsent`
  - fires `generate_lead` on successful signup

- [src/app/api/waitlist/signup/route.ts](/Users/jules/dev/consultry/marketing-site/src/app/api/waitlist/signup/route.ts)
  - enforces `newsletterConsent === true`
  - sends consent evidence fields to Loops

- [src/lib/waitlist.ts](/Users/jules/dev/consultry/marketing-site/src/lib/waitlist.ts)
  - defines:
    - `waitlistConsentVersion`
    - `waitlistConsentTextVersion`
    - `waitlistConsentSource`
    - consent property definitions

- [src/components/marketing/WaitlistQualifierForm.tsx](/Users/jules/dev/consultry/marketing-site/src/components/marketing/WaitlistQualifierForm.tsx)
  - fires `qualify_lead` on successful qualifier submission

### Dependencies and env placeholders

- [package.json](/Users/jules/dev/consultry/marketing-site/package.json)
  - `@vercel/analytics` removed
  - `@vercel/speed-insights` removed

- [.env.example](/Users/jules/dev/consultry/marketing-site/.env.example)
  - already contains:
    - `NEXT_PUBLIC_COOKIESCRIPT_SRC`
    - `NEXT_PUBLIC_GTM_ID`

---

## 3. Runtime Values Still Needed

The code is mostly ready. The remaining activation work is dashboard and environment setup.

### Required public env vars

Add these to `.env.local` and deployment env:

```env
NEXT_PUBLIC_COOKIESCRIPT_SRC=https://cdn.cookie-script.com/s/YOUR_REAL_COOKIE_SCRIPT_ID.js
NEXT_PUBLIC_GTM_ID=GTM-TKS5F39X
```

### Analytics IDs already known

- GTM container ID: `GTM-TKS5F39X`
- GA4 measurement ID: `G-FKJQQB5QVJ`

Important:

- `GTM-TKS5F39X` belongs in app env
- `G-FKJQQB5QVJ` belongs in Google Tag Manager, not directly in app code

---

## 4. CookieScript Work Still Outstanding

The repo can already consume CookieScript once the real script URL is present. The missing work is mainly in the CookieScript dashboard.

### Required CookieScript configuration

1. Create the site/banner for `consultry.de`
2. Keep category design simple:
   - `strict`
   - `performance`
3. Make sure the banner exposes:
   - accept all
   - decline all
   - settings/details
4. Do not enable any “auto accept after delay” behavior
5. Ensure the consent badge or reopen path is enabled
6. Copy the final global script URL into `NEXT_PUBLIC_COOKIESCRIPT_SRC`

### Repo-side expectation

This code expects the consent category name `performance`. If the dashboard setup diverges from that naming or behavior, the gating logic in [AnalyticsBootstrap.tsx](/Users/jules/dev/consultry/marketing-site/src/components/analytics/AnalyticsBootstrap.tsx) and [CookiePreferencesPanel.tsx](/Users/jules/dev/consultry/marketing-site/src/components/analytics/CookiePreferencesPanel.tsx) will no longer match reality.

---

## 5. GTM Setup

Use `GTM-TKS5F39X`.

Do not paste the standard GTM snippets into the site manually. The app already injects GTM after consent.

### 5.1 Create the base Google tag

Inside GTM:

1. Go to `Tags`
2. Click `New`
3. Name it `GA4 - Google tag`
4. Choose tag type `Google tag`
5. Enter Google tag ID `G-FKJQQB5QVJ`
6. Trigger: `All Pages`
7. Save

Important:

- keep this tag minimal
- do not turn on unrelated auto-measurement features here
- do not add another direct analytics snippet outside GTM

### 5.2 Enable the right built-in variables and create only the custom Data Layer Variables

In GTM, first enable these built-in variables:

- `Page URL`
- `Page Title`

The app already sends `page_location` and `page_title`, but GTM’s built-in values are sufficient for those and avoid unnecessary duplication.

Then create only these user-defined `Data Layer Variable`s under `Variables` → `User-Defined Variables` → `New` → `Data Layer Variable`.

| Variable name | Data Layer Variable Name | Why it exists |
|---|---|---|
| `DLV - page_path` | `page_path` | Keeps the app-defined path value, including query string when present |
| `DLV - content_group` | `content_group` | Comes from the app’s route mapping |
| `DLV - cta_label` | `cta_label` | Custom CTA metadata |
| `DLV - cta_location` | `cta_location` | Custom CTA metadata |
| `DLV - destination_type` | `destination_type` | Custom CTA metadata |
| `DLV - destination_path` | `destination_path` | Custom CTA metadata |
| `DLV - contact_method` | `contact_method` | Custom contact metadata |
| `DLV - contact_location` | `contact_location` | Custom contact metadata |
| `DLV - lead_source` | `lead_source` | Custom lead metadata |
| `DLV - qualification_source` | `qualification_source` | Custom qualification metadata |

### 5.3 Create the Custom Event Triggers

Under `Triggers` → `New` → `Custom Event`, create:

| Trigger name | Event name |
|---|---|
| `CE - page_view` | `page_view` |
| `CE - cta_click` | `cta_click` |
| `CE - generate_lead` | `generate_lead` |
| `CE - qualify_lead` | `qualify_lead` |
| `CE - contact_click` | `contact_click` |

No regex and no extra filters for v1.

### 5.4 Create the GA4 Event Tags

Create one GA4 event tag per event.

#### Tag 1

- Tag name: `GA4 - page_view`
- Event name: `page_view`
- Trigger: `CE - page_view`

Parameters:

- `page_path` = `{{DLV - page_path}}`
- `page_location` = `{{Page URL}}`
- `page_title` = `{{Page Title}}`
- `content_group` = `{{DLV - content_group}}`

#### Tag 2

- Tag name: `GA4 - cta_click`
- Event name: `cta_click`
- Trigger: `CE - cta_click`

Parameters:

- `cta_label` = `{{DLV - cta_label}}`
- `cta_location` = `{{DLV - cta_location}}`
- `destination_type` = `{{DLV - destination_type}}`
- `destination_path` = `{{DLV - destination_path}}`

#### Tag 3

- Tag name: `GA4 - generate_lead`
- Event name: `generate_lead`
- Trigger: `CE - generate_lead`

Parameters:

- `lead_source` = `{{DLV - lead_source}}`
- `page_path` = `{{DLV - page_path}}`

#### Tag 4

- Tag name: `GA4 - qualify_lead`
- Event name: `qualify_lead`
- Trigger: `CE - qualify_lead`

Parameters:

- `qualification_source` = `{{DLV - qualification_source}}`
- `page_path` = `{{DLV - page_path}}`

#### Tag 5

- Tag name: `GA4 - contact_click`
- Event name: `contact_click`
- Trigger: `CE - contact_click`

Parameters:

- `contact_method` = `{{DLV - contact_method}}`
- `contact_location` = `{{DLV - contact_location}}`

---

## 6. GA4 Setup

### 6.1 Create or verify the web stream

The GA4 measurement ID already known for this stack is:

- `G-FKJQQB5QVJ`

Ensure the corresponding GA4 property and web stream exist for `consultry.de`.

### 6.2 Key events

After data starts arriving, mark:

- `generate_lead` as a key event

Optional:

- `qualify_lead`
- `contact_click`

### 6.3 Custom dimensions

Create event-scoped custom dimensions only for parameters that are not already covered by GA4’s default dimensions or reports:

- `cta_label`
- `cta_location`
- `destination_type`
- `contact_method`
- `contact_location`

Optional:

- `destination_path`
- `content_group`

Do **not** create custom dimensions for:

- `page_path`
- `page_location`
- `page_title`
- `lead_source`
- `qualification_source`

Rationale:

- `page_path`, `page_location`, and `page_title` are already covered by GA4/GTM page reporting.
- `lead_source` and `qualification_source` are currently constant in this implementation, so they add little reporting value in v1.
- `content_group` is already sent by the app and may be useful later, but it should not be the first custom definition you consume unless you actually need the breakdown.

---

## 7. Verification Workflow

### 7.1 Before consent

Expected behavior:

- CookieScript banner shows
- GTM does not load
- GA4 does not receive events
- no requests to Google analytics/tag endpoints

### 7.2 After accepting `performance`

Expected behavior:

- GTM loads once
- `page_view` appears on current route
- client-side route changes produce one `page_view` each
- CTA clicks produce `cta_click`
- waitlist success produces `generate_lead`
- qualifier success produces `qualify_lead`
- email/phone clicks produce `contact_click`

### 7.3 GTM validation

Use GTM Preview / Tag Assistant:

1. open preview
2. connect to the site
3. accept `performance`
4. test:
   - route changes
   - CTA clicks
   - contact clicks
   - waitlist signup
   - qualifier submit

### 7.4 Repo validation already completed

At the repo level, these checks have already passed after the code changes:

- `pnpm lint`
- `pnpm build`

Next.js MCP also returned no current runtime/config errors from the dev server. A fully automated browser navigation pass was blocked by a local Playwright filesystem limitation on this machine, so the remaining end-to-end validation should be treated as still pending.

---

## 8. Best-Practice Guardrails

These are the practical guardrails used while shaping this setup.

### React and Next.js

- one global click delegation path, not several parallel listeners
- one explicit route-tracking path for pageviews
- `CookieScript` loaded with `beforeInteractive`
- `GTM` loaded with `afterInteractive`
- no direct stateful CMP recreation in React
- `useSearchParams` kept inside a client component under `Suspense`

### Analytics architecture

- CMP is the source of truth for consent
- the app gates tag manager loading
- GTM maps `dataLayer` events to GA4
- GA4 is not installed twice
- no `noscript` GTM iframe in this architecture

### UX and legal

- the third-party banner should stay operational and minimal
- the expressive branded consent experience belongs on the first-party `/cookies` page
- `/datenschutz` and `/cookies` must match the final live vendor configuration before publishing

---

## 9. Immediate Next Steps

1. Put the real CookieScript script URL into `NEXT_PUBLIC_COOKIESCRIPT_SRC`
2. Put `GTM-TKS5F39X` into `NEXT_PUBLIC_GTM_ID`
3. Restart local dev / redeploy so public env vars are baked correctly
4. Build the GTM workspace using the tables above
5. Preview GTM with consent rejected and accepted
6. Publish GTM
7. Mark key events and custom dimensions in GA4
8. Final-check legal wording against the actual vendor setup

---

## 10. Official Sources

### CookieScript

- Install order and head placement: [CookieScript install](https://help.cookie-script.com/en/getting-started/installing-banner-on-your-website)
- Custom functions / API: [CookieScript custom functions](https://help.cookie-script.com/en/articles/30246-custom-functions)
- Open banner/settings from custom UI: [Display banner with custom link](https://help.cookie-script.com/en/javascript-code-documentation/display-cookie-banner-with-a-custom-link)
- Accept/reject cookies with custom link: [Custom accept/reject](https://help.cookie-script.com/en/javascript-code-documentation/accept-or-reject-cookies-with-custom-link-on-the-page)
- Custom styling: [Custom CSS for banner](https://help.cookie-script.com/en/articles/30170-add-custom-styles-to-cookie-consent-banner)
- Banner colors and layout settings: [Cookie banner custom colors](https://help.cookie-script.com/en/articles/30180-cookie-banner-custom-colors)
- Accept-all behavior: [Show the accept all button](https://help.cookie-script.com/en/articles/30209-show-the-accept-all-button)
- Decline-all behavior: [Show the decline all button](https://help.cookie-script.com/en/articles/30210-show-the-decline-all-button)
- Auto-accept warning: [Accept cookies automatically after](https://help.cookie-script.com/en/articles/30185-accept-cookies-automatically-after)
- Consent badge/reopen path: [Cookie badge](https://help.cookie-script.com/en/articles/30176-cookie-badge)
- Category UI / save-and-close: [Show cookie categories](https://help.cookie-script.com/en/articles/30206-show-cookie-categories)
- Pricing and plan nuance: [Free and paid pricing plans](https://help.cookie-script.com/en/articles/30255-free-and-paid-pricing-plans)
- GTM integration reference: [How to install CookieScript with GTM](https://help.cookie-script.com/en/articles/30215-how-to-install-cookiescript-with-google-tag-manager)

### Google Tag Manager

- GTM account/container creation: [Create a GTM account and container](https://support.google.com/tagmanager/answer/6103696)
- Install a web container: [Install GTM web container](https://support.google.com/tagmanager/answer/14847097?hl=en)
- Configure the Google tag in GTM: [Configure your Google tag settings](https://support.google.com/tagmanager/answer/12131703?hl=en)
- Add Google tag in GTM: [Add a Google tag in GTM](https://support.google.com/tagmanager/answer/14842872?hl=en)
- Preview/debug: [Preview and debug containers](https://support.google.com/tagmanager/answer/6107056?hl=en)
- Publish flow: [Verify and publish tags](https://support.google.com/tagmanager/answer/14842769?hl=en)

### GA4

- Website setup: [Set up Analytics for a website](https://support.google.com/analytics/answer/9304153?hl=en)
- GA4 Google tag setup: [Set up Analytics for a website and/or app](https://support.google.com/analytics/answer/14183469?hl=en)
- Find your Google tag ID: [Find your Google tag ID](https://support.google.com/analytics/answer/9539598?hl=en)
- Events reference: [Set up events](https://developers.google.com/analytics/devguides/collection/ga4/events)
- Key events: [Measure key events](https://support.google.com/analytics/answer/12946393?hl=en-IE)
- Event-scoped custom dimensions: [Create custom dimensions](https://support.google.com/analytics/answer/14239696?hl=en)
- Custom dimensions overview: [About custom dimensions and metrics](https://support.google.com/analytics/answer/14240153?hl=en-EN)

### Next.js

- Script loading strategies: [Next.js Script component](https://nextjs.org/docs/app/api-reference/components/script)
- Environment variables: [Next.js environment variables](https://nextjs.org/docs/app/guides/environment-variables)
- `NEXT_PUBLIC_` behavior: [Next.js env config](https://nextjs.org/docs/app/api-reference/config/next-config-js/env)
- `useSearchParams` and `Suspense`: [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
