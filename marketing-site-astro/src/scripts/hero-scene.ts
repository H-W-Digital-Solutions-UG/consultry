import type { SmokeObjectVariant, SmokeScene } from "../lib/scene/types";
import { isSceneVariant } from '../lib/scene/variants';

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };
type SceneStatus = "poster" | "loading" | "ready" | "unavailable";

const mounted = new Map<HTMLElement, () => void>();
let lifecycleInstalled = false;

/** Plain DOM enhancement: the initial module graph never imports Three.js. */
export function mountHeroScenes() {
  document
    .querySelectorAll<HTMLElement>("[data-hero-scene]")
    .forEach((element) => {
      if (!mounted.has(element)) mounted.set(element, mountScene(element));
    });
  if (lifecycleInstalled) return;
  lifecycleInstalled = true;
  // Compatible with Astro's optional page transitions; no router is required.
  document.addEventListener("astro:before-swap", () => {
    mounted.forEach((dispose) => dispose());
    mounted.clear();
  });
  document.addEventListener("astro:page-load", mountHeroScenes);
}

function mountScene(container: HTMLElement): () => void {
  const host = container.querySelector<HTMLElement>("[data-scene-stage]");
  const visual = host?.parentElement;
  const variant = container.dataset.heroScene;
  if (
    !host ||
    !visual ||
    !isSceneVariant(variant)
  )
    return () => {};

  const scrollTarget =
    container.closest<HTMLElement>("[data-scroll-scene]") ?? container;
  const revealTargets = [
    container.querySelector<HTMLElement>(".hero-scene-embed__annotations"),
    scrollTarget.querySelector<HTMLElement>(".aspect-rail"),
  ].filter((element): element is HTMLElement => !!element);
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const connection = (navigator as Navigator & { connection?: Connection })
    .connection;
  let scene: SmokeScene | null = null;
  let cancelled = false;
  let pending = false;
  let failed = false;
  let near = false;
  let visible = false;
  let settled = false;
  let prepared = false;
  let paintedProgress: number | null = null;
  let paintFrame = 0;
  let idle: number | undefined;
  let fallback: ReturnType<typeof setTimeout> | undefined;
  let scrollStart = 0;
  let scrollDistance = 480;
  let lastProgress: number | null = null;
  let lastReveal = "";
  let lastAspect = -1;
  let quietUntil = 0;

  const status = (value: SceneStatus) => {
    if (container.dataset.status !== value) container.dataset.status = value;
  };
  const conservative = () =>
    motion.matches ||
    !!connection?.saveData ||
    /(^|-)2g$/.test(connection?.effectiveType ?? "");
  const progressAtScroll = () =>
    Math.min(1, Math.max(0, (window.scrollY - scrollStart) / scrollDistance));
  const atEndpoint = () => {
    const progress = progressAtScroll();
    return progress === 0 || progress === 1;
  };
  const layoutTop = (element: HTMLElement) => {
    let top = 0;
    for (
      let node: HTMLElement | null = element;
      node;
      node = node.offsetParent as HTMLElement | null
    )
      top += node.offsetTop;
    return top;
  };
  const measureScroll = () => {
    // Desktop pins the complete composition; compact layouts pin the artwork
    // and its app preview, leaving the conversion actions in normal flow.
    const story = Array.from(scrollTarget.querySelectorAll<HTMLElement>("[data-scene-focus]"))
      .find((element) => getComputedStyle(element).position === "sticky");
    const track = scrollTarget.querySelector<HTMLElement>("[data-scene-focus-track]");
    const storyStyle = story ? getComputedStyle(story) : null;
    if (story && track && storyStyle?.position === "sticky") {
      const sectionTop = layoutTop(track);
      const stickyTop = Number.parseFloat(storyStyle.top) || 0;
      const conversion = track.querySelector<HTMLElement>(".hero-conversion");
      const conversionStyle = conversion ? getComputedStyle(conversion) : null;
      const compactLead = story.classList.contains("hero-object") && conversion && conversionStyle
        ? conversion.offsetHeight + (Number.parseFloat(conversionStyle.marginTop) || 0)
          + (Number.parseFloat(conversionStyle.marginBottom) || 0)
          + (Number.parseFloat(storyStyle.marginTop) || 0)
        : 0;
      const start = Math.max(0, sectionTop + compactLead - stickyTop);
      const release =
        sectionTop +
        track.clientHeight -
        story.offsetHeight -
        stickyTop;
      if (release > start) {
        // Complete the object and caption sequence while the focus frame is
        // still pinned. Artwork transforms must not alter this scroll range.
        const availableDistance = release - start;
        scrollStart = start;
        scrollDistance =
          availableDistance - Math.min(24, availableDistance * 0.1);
        return;
      }
    }
    // Layout coordinates stay stable if the surrounding composition translates.
    scrollStart = Math.max(
      0,
      layoutTop(scrollTarget),
      layoutTop(visual) + visual.offsetHeight / 2 - window.innerHeight * 0.76,
    );
    scrollDistance = Math.min(560, Math.max(420, window.innerHeight * 0.58));
  };
  const cancelScheduled = () => {
    if (idle !== undefined) window.cancelIdleCallback(idle);
    if (fallback !== undefined) clearTimeout(fallback);
    idle = undefined;
    fallback = undefined;
  };
  const updateScroll = () => {
    if (!visible || document.hidden) return;
    const progress = conservative() ? 1 : progressAtScroll();
    if (progress !== lastProgress) {
      lastProgress = progress;
      const reveal = Math.min(1, Math.max(0, (progress - 0.06) / 0.3)).toFixed(
        2,
      );
      const aspect =
        conservative() || progress < 0.1
          ? 0
          : progress < 0.35
            ? 1
            : progress < 0.65
              ? 2
              : 3;
      // Only the annotation layer and three rules consume this value. Keeping
      // it off the hero ancestor avoids invalidating every descendant's styles.
      if (reveal !== lastReveal) {
        lastReveal = reveal;
        revealTargets.forEach((element) =>
          element.style.setProperty("--scene-reveal", reveal),
        );
      }
      // Reached HTML arguments accumulate through the final resting pose,
      // including when the optional canvas is unavailable. Reverse scrolling
      // naturally unwinds the stages; conservative presentation stays static.
      if (aspect !== lastAspect) {
        lastAspect = aspect;
        scrollTarget.dataset.sceneAspect = String(aspect);
      }
    }
    if (conservative()) return;
    if (container.dataset.status === "ready")
      scene?.setScrollProgress(progress);
    // A slow import never swaps the poster for an already expanded model.
    // Commit only after the renderer confirms the current matching endpoint.
    // This sets the actual runtime state to 1 for a late swap at the far end.
    else if (prepared && (progress === 0 || progress === 1)) {
      scene?.setScrollProgress(progress);
      if (paintedProgress === progress) status("ready");
    }
  };
  const load = async () => {
    if (
      cancelled ||
      pending ||
      failed ||
      scene ||
      !visible ||
      !settled ||
      document.hidden ||
      conservative() ||
      !atEndpoint()
    )
      return;
    cancelScheduled();
    pending = true;
    status("loading");
    try {
      const { createSmokeScene } = await import("../lib/scene/runtime");
      if (cancelled) return;
      // Downloading is asynchronous; the user may have started scrolling while
      // it completed. Do not create a WebGL context or compile shaders then.
      if (
        conservative() ||
        document.hidden ||
        !visible ||
        !atEndpoint() ||
        performance.now() < quietUntil
      ) {
        status("poster");
        return;
      }
      scene = createSmokeScene(host, {
        variant: variant as SmokeObjectVariant,
        reducedMotion: false,
        visible: visible && !document.hidden,
        onReady() {
          if (cancelled) return;
          prepared = true;
          updateScroll();
        },
        onFrame(progress) {
          if (cancelled) return;
          paintedProgress = progress;
          if (prepared && container.dataset.status !== "ready") updateScroll();
        },
        onContextLost() {
          scene?.dispose();
          scene = null;
          prepared = false;
          paintedProgress = null;
          failed = true;
          if (!cancelled) status("unavailable");
        },
      });
      updateScroll();
    } catch {
      if (!cancelled) {
        failed = true;
        status("unavailable");
      }
    } finally {
      pending = false;
      if (!scene && !failed) schedule();
    }
  };
  const schedule = () => {
    cancelScheduled();
    if (
      cancelled ||
      !visible ||
      !near ||
      !settled ||
      document.hidden ||
      conservative() ||
      failed ||
      scene ||
      pending ||
      !atEndpoint()
    )
      return;
    const remaining = quietUntil - performance.now();
    if (remaining > 0) {
      fallback = setTimeout(() => {
        fallback = undefined;
        schedule();
      }, remaining);
      return;
    }
    if ("requestIdleCallback" in window) {
      idle = window.requestIdleCallback(() => {
        idle = undefined;
        void load();
      });
    } else {
      fallback = setTimeout(() => {
        fallback = undefined;
        void load();
      }, 0);
    }
  };
  const preferences = () => {
    // Free the renderer when preferences become conservative. A later opt-in
    // starts with a fresh assembled frame, never an old expanded canvas.
    if (conservative()) {
      scene?.dispose();
      scene = null;
      prepared = false;
      paintedProgress = null;
      status("poster");
    }
    // Re-evaluate the HTML phase even if both preference modes are at progress 1.
    lastProgress = null;
    updateScroll();
    schedule();
  };
  const pageVisibility = () => {
    scene?.setVisible(visible && !document.hidden && !conservative());
    updateScroll();
    schedule();
  };
  const onScroll = () => {
    // The renderer owns the single animation-frame queue. This handler only
    // reads the cached scroll range and writes labels when their phase changes.
    if (visible && !document.hidden) updateScroll();
    if (!scene && !failed) {
      quietUntil = performance.now() + 180;
      schedule();
    }
  };
  const afterLoad = () => {
    const images = Array.from(visual.querySelectorAll("img"));
    void Promise.all(
      images.map((image) => image.decode().catch(() => {})),
    ).then(() => {
      if (cancelled) return;
      paintFrame = requestAnimationFrame(() => {
        paintFrame = requestAnimationFrame(() => {
          paintFrame = 0;
          measureScroll();
          updateScroll();
          settled = true;
          quietUntil = performance.now() + 180;
          schedule();
        });
      });
    });
  };
  const onResize = () => {
    measureScroll();
    onScroll();
  };
  measureScroll();
  const preloadObserver = new IntersectionObserver(
    ([entry]) => {
      near = entry.isIntersecting;
      schedule();
    },
    { rootMargin: "160px" },
  );
  const visibleObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    scene?.setVisible(visible && !document.hidden && !conservative());
    updateScroll();
    schedule();
  });
  preloadObserver.observe(visual);
  visibleObserver.observe(visual);
  motion.addEventListener("change", preferences);
  connection?.addEventListener("change", preferences);
  document.addEventListener("visibilitychange", pageVisibility);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  if (document.readyState === "complete") afterLoad();
  else window.addEventListener("load", afterLoad, { once: true });

  return () => {
    cancelled = true;
    cancelAnimationFrame(paintFrame);
    cancelScheduled();
    preloadObserver.disconnect();
    visibleObserver.disconnect();
    motion.removeEventListener("change", preferences);
    connection?.removeEventListener("change", preferences);
    document.removeEventListener("visibilitychange", pageVisibility);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("load", afterLoad);
    scene?.dispose();
    scene = null;
    revealTargets.forEach((element) =>
      element.style.removeProperty("--scene-reveal"),
    );
    delete scrollTarget.dataset.sceneAspect;
  };
}
