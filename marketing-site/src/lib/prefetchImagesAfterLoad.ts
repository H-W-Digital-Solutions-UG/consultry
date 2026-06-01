/**
 * Tracks image URLs already requested via `prefetchImageUrls` for this page
 * lifetime so idle, intersection, and Strict Mode double-invocations do not
 * duplicate fetches.
 */
const prefetchedImageUrls = new Set<string>();

/**
 * Warms the HTTP cache for the given image URLs using `Image` preloads.
 * Idempotent: each distinct URL is started at most once per page load.
 *
 * Invariants: URLs are opaque strings; empty/duplicate inputs are ignored.
 * Failure modes: invalid URLs fail silently on the `Image` instances.
 *
 * @param urls - Image URLs to warm (e.g. same-origin `/images/...` paths).
 */
export function prefetchImageUrls(urls: readonly string[]): void {
  if (typeof window === "undefined") {
    return;
  }

  for (const raw of urls) {
    const href = raw.trim();
    if (!href || prefetchedImageUrls.has(href)) {
      continue;
    }
    prefetchedImageUrls.add(href);
    const img = new Image();
    img.src = href;
  }
}

/**
 * Schedules low-priority prefetch of image URLs after `window` `load` and in an
 * idle callback. Warms the HTTP cache (and often the memory cache) so UI that
 * swaps `src` later avoids a visible network/decode hitch, without contending
 * with LCP-critical fetches during initial render.
 *
 * Uses {@link prefetchImageUrls} so viewport-based prefetch shares the same
 * deduplication when both paths run.
 *
 * Failure modes: cleanup cancels the idle callback / timeout and drops the load
 * listener; already-prefetched URLs are no-ops.
 *
 * @param urls - Image URLs to warm (e.g. same-origin `/images/...` paths).
 * @returns Cleanup to cancel pending work (safe to call multiple times).
 */
export function schedulePrefetchImagesAfterLoad(urls: readonly string[]): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const unique = [...new Set(urls.filter(Boolean))];
  if (unique.length === 0) {
    return () => {};
  }

  let ricId: number | undefined;
  let timeoutId: number | undefined;
  let cancelled = false;

  const runPrefetch = () => {
    if (cancelled) {
      return;
    }
    prefetchImageUrls(unique);
  };

  const scheduleIdle = () => {
    if (cancelled) {
      return;
    }
    if (typeof window.requestIdleCallback === "function") {
      ricId = window.requestIdleCallback(runPrefetch, { timeout: 4000 });
    } else {
      timeoutId = window.setTimeout(runPrefetch, 1);
    }
  };

  const onWindowLoad = () => {
    scheduleIdle();
  };

  if (document.readyState === "complete") {
    scheduleIdle();
  } else {
    window.addEventListener("load", onWindowLoad);
  }

  return () => {
    cancelled = true;
    window.removeEventListener("load", onWindowLoad);
    if (ricId !== undefined) {
      window.cancelIdleCallback(ricId);
    }
    if (timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }
  };
}
