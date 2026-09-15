/**
 * Cookieless smoke-test telemetry.
 *
 * Every event carries the page `variant` so signups and interactions can be
 * attributed per positioning. Events go to `window.dataLayer` (for GTM-style
 * consumers) and, only if `VITE_TRACK_ENDPOINT` is configured, to that endpoint
 * via `sendBeacon`. No identifiers, no cookies, no fingerprinting.
 */
export type CtaLocation = "hero" | "hero_secondary" | "nav" | "how" | "band" | "band_example";
export type ScrollDepth = 25 | 50 | 75;

export type TrackEvent =
  | { name: "page_view"; variant: string; path: string; referrer: string }
  | { name: "cta_click"; variant: string; location: CtaLocation }
  | { name: "scroll_depth"; variant: string; depth: ScrollDepth }
  | { name: "widget_interact"; variant: string; action: string }
  | { name: "waitlist_submit"; variant: string; ok: boolean; error?: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/** Builds the JSON payload sent to the optional endpoint. Pure, for testability. */
export function buildPayload(event: TrackEvent, now: Date = new Date()): string {
  return JSON.stringify({ ...event, at: now.toISOString(), v: 1 });
}

/** Records an event. Safe to call during SSR-less client rendering only. */
export function track(event: TrackEvent): void {
  if (typeof window === "undefined") return;
  (window.dataLayer ??= []).push({ event: event.name, ...event });
  const endpoint = import.meta.env.VITE_TRACK_ENDPOINT as string | undefined;
  if (endpoint && typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon(endpoint, new Blob([buildPayload(event)], { type: "application/json" }));
  } else if (import.meta.env.DEV) {
    console.debug("[track]", event);
  }
}
