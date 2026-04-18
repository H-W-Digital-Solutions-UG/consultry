"use client";

import { useEffect, useRef } from "react";
import type {
  CLSMetricWithAttribution,
  FCPMetricWithAttribution,
  INPMetricWithAttribution,
  LCPMetricWithAttribution,
  MetricWithAttribution,
  TTFBMetricWithAttribution,
} from "web-vitals";
import { pushAnalyticsEvent } from "@/lib/analytics";

/**
 * RUM reporter for Core Web Vitals with attribution data.
 *
 * Responsibilities:
 * - Subscribe to LCP / INP / CLS / FCP / TTFB using `web-vitals/attribution`.
 * - Translate each metric into a flat analytics payload (GA4-friendly).
 * - Forward payloads through {@link pushAnalyticsEvent}, which is itself
 *   a no-op unless analytics are enabled in the current environment AND the
 *   user has granted performance consent. We therefore never measure or ship
 *   vitals data without consent.
 * - In non-production builds, additionally log every metric to the console so
 *   developers can inspect LCP subpart timings locally.
 *
 * Invariants:
 * - Safe to render multiple times: subscription runs exactly once via an
 *   instance ref guarded against React Strict Mode double-mount.
 * - `web-vitals` is loaded via dynamic `import()` so it stays out of the
 *   synchronous critical bundle. It is ~5 KB gzipped and is fetched after
 *   hydration, so it never competes with LCP resources.
 * - No public API surface: the component renders `null` and is meant to be
 *   mounted once in the root layout.
 */
const WEB_VITALS_EVENT = "web_vitals";
const DEV_LOG_ENABLED = process.env.NODE_ENV !== "production";

type FlatPayload = Record<string, boolean | number | string | undefined>;

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

/**
 * Round a millisecond duration to the nearest integer. Returns `undefined`
 * for invalid or non-finite inputs so the analytics payload omits the key
 * entirely rather than emitting `NaN` strings.
 */
function roundMs(value: number | undefined): number | undefined {
  if (!isFiniteNumber(value)) {
    return undefined;
  }

  return Math.round(value);
}

/**
 * Round the primary metric value. CLS is a unitless score in [0, 1]-ish
 * range, so it needs to keep decimal precision; all others are durations in
 * milliseconds and are rounded to the nearest integer.
 */
function roundMetricValue(name: string, value: number): number {
  if (name === "CLS") {
    return Math.round(value * 10_000) / 10_000;
  }

  return Math.round(value);
}

function basePayload(metric: MetricWithAttribution): FlatPayload {
  return {
    metric_id: metric.id,
    metric_name: metric.name,
    metric_rating: metric.rating,
    metric_value: roundMetricValue(metric.name, metric.value),
    metric_delta: roundMetricValue(metric.name, metric.delta),
    navigation_type: metric.navigationType,
  };
}

function lcpAttributionPayload(metric: LCPMetricWithAttribution): FlatPayload {
  const { attribution } = metric;

  return {
    lcp_element: attribution.target,
    lcp_resource_url: attribution.url,
    lcp_ttfb: roundMs(attribution.timeToFirstByte),
    lcp_resource_load_delay: roundMs(attribution.resourceLoadDelay),
    lcp_resource_load_duration: roundMs(attribution.resourceLoadDuration),
    lcp_element_render_delay: roundMs(attribution.elementRenderDelay),
  };
}

function inpAttributionPayload(metric: INPMetricWithAttribution): FlatPayload {
  const { attribution } = metric;

  return {
    inp_interaction_type: attribution.interactionType,
    inp_interaction_target: attribution.interactionTarget,
    inp_load_state: attribution.loadState,
    inp_input_delay: roundMs(attribution.inputDelay),
    inp_processing_duration: roundMs(attribution.processingDuration),
    inp_presentation_delay: roundMs(attribution.presentationDelay),
  };
}

function clsAttributionPayload(metric: CLSMetricWithAttribution): FlatPayload {
  const { attribution } = metric;

  return {
    cls_largest_shift_target: attribution.largestShiftTarget,
    cls_load_state: attribution.loadState,
    cls_largest_shift_time: roundMs(attribution.largestShiftTime),
    cls_largest_shift_value: isFiniteNumber(attribution.largestShiftValue)
      ? Math.round(attribution.largestShiftValue * 10_000) / 10_000
      : undefined,
  };
}

function fcpAttributionPayload(metric: FCPMetricWithAttribution): FlatPayload {
  const { attribution } = metric;

  return {
    fcp_load_state: attribution.loadState,
    fcp_ttfb: roundMs(attribution.timeToFirstByte),
    fcp_first_byte_to_fcp: roundMs(attribution.firstByteToFCP),
  };
}

function ttfbAttributionPayload(metric: TTFBMetricWithAttribution): FlatPayload {
  const { attribution } = metric;

  return {
    ttfb_waiting_duration: roundMs(attribution.waitingDuration),
    ttfb_cache_duration: roundMs(attribution.cacheDuration),
    ttfb_dns_duration: roundMs(attribution.dnsDuration),
    ttfb_connection_duration: roundMs(attribution.connectionDuration),
    ttfb_request_duration: roundMs(attribution.requestDuration),
  };
}

/**
 * Build the analytics payload for any metric. Public for testability:
 * given a metric produced by `web-vitals/attribution`, the return value is
 * the exact object shape that will be pushed to `dataLayer`.
 */
export function buildWebVitalsPayload(metric: MetricWithAttribution): FlatPayload {
  switch (metric.name) {
    case "LCP":
      return { ...basePayload(metric), ...lcpAttributionPayload(metric) };
    case "INP":
      return { ...basePayload(metric), ...inpAttributionPayload(metric) };
    case "CLS":
      return { ...basePayload(metric), ...clsAttributionPayload(metric) };
    case "FCP":
      return { ...basePayload(metric), ...fcpAttributionPayload(metric) };
    case "TTFB":
      return { ...basePayload(metric), ...ttfbAttributionPayload(metric) };
  }
}

function report(metric: MetricWithAttribution) {
  const payload = buildWebVitalsPayload(metric);

  if (DEV_LOG_ENABLED) {
    console.debug(`[web-vitals] ${metric.name}`, metric, payload);
  }

  pushAnalyticsEvent(WEB_VITALS_EVENT, payload);
}

export function WebVitalsReporter() {
  const initialisedRef = useRef(false);

  useEffect(() => {
    if (initialisedRef.current) {
      return;
    }

    initialisedRef.current = true;
    let cancelled = false;

    import("web-vitals/attribution")
      .then((mod) => {
        if (cancelled) {
          return;
        }

        mod.onCLS(report);
        mod.onFCP(report);
        mod.onINP(report);
        mod.onLCP(report);
        mod.onTTFB(report);
      })
      .catch((error: unknown) => {
        if (DEV_LOG_ENABLED) {
          console.warn("[web-vitals] failed to load", error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
