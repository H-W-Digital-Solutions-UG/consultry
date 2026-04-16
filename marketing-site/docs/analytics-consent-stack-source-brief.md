# Consent-Gated `CookieScript + GTM + GA4` Source Brief

This brief collects the official primary sources needed to implement a consent-gated analytics stack in `marketing-site`.

## Recommended Integration Order

1. Load `CookieScript` first in the document `<head>` so consent exists before other scripts.
2. Mount `Google Tag Manager` only after `performance` consent.
3. Keep `GA4` inside `GTM` and avoid a second, direct `gtag.js` install.
4. Use `Next.js` `beforeInteractive` for the CMP and `afterInteractive` for analytics/tag manager scripts.

## CookieScript

Use these sources for install order, consent UI behavior, custom styling, custom functions, and plan/compliance nuance.

- Install order and head placement: https://help.cookie-script.com/en/getting-started/installing-banner-on-your-website
- Custom functions / API surface: https://help.cookie-script.com/en/articles/30246-custom-functions
- Open banner / settings from a custom link: https://help.cookie-script.com/en/javascript-code-documentation/display-cookie-banner-with-a-custom-link
- Change consent from a custom link or checkbox: https://help.cookie-script.com/en/javascript-code-documentation/accept-or-reject-cookies-with-custom-link-on-the-page
- Custom styling / custom CSS: https://help.cookie-script.com/en/articles/30170-add-custom-styles-to-cookie-consent-banner
- Banner colors and layout settings: https://help.cookie-script.com/en/articles/30180-cookie-banner-custom-colors
- Accept-all button behavior and compliance notes: https://help.cookie-script.com/en/articles/30209-show-the-accept-all-button
- Decline-all button behavior and compliance notes: https://help.cookie-script.com/en/articles/30210-show-the-decline-all-button
- Auto-accept behavior and compliance warnings: https://help.cookie-script.com/en/articles/30185-accept-cookies-automatically-after
- Cookie badge and consent withdrawal/reopen behavior: https://help.cookie-script.com/en/articles/30176-cookie-badge
- Show cookie categories / save-and-close behavior: https://help.cookie-script.com/en/articles/30206-show-cookie-categories
- Pricing and plan limits, including Free/Standard/Plus and trial notes: https://help.cookie-script.com/en/articles/30255-free-and-paid-pricing-plans
- Google Consent Mode / CMP integration entry point: https://help.cookie-script.com/en/articles/34534-google-consent-mode-implementation-instructions
- CookieScript with Google Tag Manager: https://help.cookie-script.com/en/articles/30215-how-to-install-cookiescript-with-google-tag-manager

## Google Tag Manager

Use these sources for container creation, installing the web container, configuring the Google tag, and validating changes before publish.

- Create a GTM account and container: https://support.google.com/tagmanager/answer/6103696
- Install a web container: https://support.google.com/tagmanager/answer/14847097?hl=en
- Configure Google tag settings in GTM: https://support.google.com/tagmanager/answer/12131703?hl=en
- Manage Google tag usage in GTM: https://support.google.com/tagmanager/answer/12329709?hl=en
- Add a Google tag in GTM: https://support.google.com/tagmanager/answer/14842872?hl=en
- Preview and debug containers: https://support.google.com/tagmanager/answer/6107056?hl=en
- Verify and publish tags: https://support.google.com/tagmanager/answer/14842769?hl=en
- Tag sequencing in web containers: https://support.google.com/tagmanager/answer/6238868

## GA4

Use these sources for website setup, Google tag ID lookup, key events, and event-scoped custom dimensions.

- Set up Analytics for a website and/or app: https://support.google.com/analytics/answer/9304153?hl=en
- Set up GA4 for a website and/or app with the Google tag flow: https://support.google.com/analytics/answer/14183469?hl=en
- Find your Google tag ID: https://support.google.com/analytics/answer/9539598?hl=en
- Measure key events: https://support.google.com/analytics/answer/12946393?hl=en-IE
- Create event-scoped custom dimensions: https://support.google.com/analytics/answer/14239696?hl=en
- About custom dimensions and metrics: https://support.google.com/analytics/answer/14240153?hl=en-EN
- Troubleshoot tag setup on your website: https://support.google.com/analytics/answer/9311124?hl=en

## Next.js

Use these sources for script placement, hydration timing, env vars, and the App Router client hook needed by the route tracker.

- `Script` component behavior and strategies: https://nextjs.org/docs/app/api-reference/components/script
- Environment variables in Next.js: https://nextjs.org/docs/app/guides/environment-variables
- App Router env config / `NEXT_PUBLIC_` bundling behavior: https://nextjs.org/docs/app/api-reference/config/next-config-js/env
- `useSearchParams` and `Suspense` guidance: https://nextjs.org/docs/app/api-reference/functions/use-search-params

## Practical Readout

- CookieScript should be the first script in the head, not a React recreation of the CMP.
- `GTM` should be loaded only after consent, which is easiest to reason about in App Router with a small client bootstrap.
- `GA4` should be configured only in `GTM`, so the app does not ship a second analytics snippet.
- `NEXT_PUBLIC_` env vars are the right place for the CookieScript script URL and the GTM container ID.
- The route tracker should live in a client component with `useSearchParams` behind `Suspense`.
