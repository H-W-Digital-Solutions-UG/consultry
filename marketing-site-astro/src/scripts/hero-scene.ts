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
  // Compact layouts (phones, small tablets, flat windows) are static: the poster stands for the
  // object, without WebGL, the Three.js download or a pinned scroll story. Same query as the CSS.
  const compact = window.matchMedia("(max-width: 1099px), (max-height: 649px)");
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
  let carryStart = 480;
  let carryDistance = 400;
  let lastCarry: number | null = null;
  const signalLines = scrollTarget.querySelector<HTMLElement>("[data-signal-lines]");
  // The home hero carries the object further and turns it more than a product page.
  const carryStrength = Math.min(3, Math.max(.5, Number(scrollTarget.dataset.sceneCarry) || 1));
  // Below 1, the arguments use only this share of the pinned range; the carry
  // then runs in place until the release while the arguments and actions fade
  // and the product gallery rises beneath the receding object.
  const argumentShare = Math.min(1, Math.max(.3, Number(scrollTarget.dataset.sceneShare) || 1));
  const stack = scrollTarget.querySelector<HTMLElement>(".hero-signal-stack");
  const steps = scrollTarget.querySelector<HTMLElement>(".hero-steps");
  // Home: the sequence starts with the first scrolled pixel, while the object still rises into its frame.
  const early = scrollTarget.dataset.sceneEarly === "true";
  // Lede and pilot-access card share one column; it fades as a whole.
  const lead = scrollTarget.querySelector<HTMLElement>(".hero-lead") ?? scrollTarget.querySelector<HTMLElement>(".hero-conversion");
  // Home: the focus halo behind the pinned object fades with the carry as well, and the
  // story backdrop dims as a whole while the object holds the focus (0.55 at most).
  const focus = scrollTarget.querySelector<HTMLElement>(".hero-object");
  const dimLayer = argumentShare < 1 ? document.querySelector<HTMLElement>("[data-backdrop-dim]") : null;
  const DIM_STRENGTH = 0.55;
  let lastDim = -1;
  let lastProgress: number | null = null;
  let lastReveal = "";
  let lastAspect = -1;
  let quietUntil = 0;

  const status = (value: SceneStatus) => {
    if (container.dataset.status !== value) container.dataset.status = value;
  };
  const conservative = () =>
    motion.matches ||
    compact.matches ||
    !!connection?.saveData ||
    /(^|-)2g$/.test(connection?.effectiveType ?? "");
  const progressAtScroll = () =>
    Math.min(1, Math.max(0, (window.scrollY - scrollStart) / scrollDistance));
  const carryAtScroll = () =>
    Math.min(1, Math.max(0, (window.scrollY - carryStart) / carryDistance));
  // Start the renderer only where poster and model coincide: at either end of
  // the scrub and before the carry has turned the object away from the poster.
  const atEndpoint = () => {
    const progress = progressAtScroll();
    return (progress === 0 || progress === 1) && carryAtScroll() === 0;
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
        scrollStart = early ? 0 : start;
        scrollDistance =
          (early ? start : 0) + availableDistance * argumentShare - Math.min(24, availableDistance * 0.1);
        if (argumentShare < 1) {
          // Home: the carry fills the remaining pinned range, then the pin releases.
          carryStart = scrollStart + scrollDistance;
          carryDistance = Math.max(240, Math.round(release - carryStart));
        } else {
          // Product pages: the carry runs from the sticky release until the object has left.
          carryStart = release;
          carryDistance = Math.max(240, Math.round(window.innerHeight * 0.55 * carryStrength));
        }
        // The story backdrop holds its frame while the three arguments play and
        // resumes the moment the carry begins: the last step line is full and
        // the hooks start to fade, so the world moves as the object recedes.
        scrollTarget.dataset.scenePinFrom = String(Math.round(start));
        scrollTarget.dataset.sceneHoldUntil = String(Math.round(carryStart));
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
    carryStart = scrollStart + scrollDistance;
    carryDistance = Math.max(240, Math.round(window.innerHeight * 0.55 * carryStrength));
    scrollTarget.dataset.sceneHoldUntil = String(Math.round(scrollStart + scrollDistance + window.innerHeight));
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
    // The carry is written to the embed (poster drift and scale) and to the
    // connector layer only, never to the hero ancestor.
    const carry = conservative() ? 0 : carryAtScroll();
    if (carry !== lastCarry) {
      lastCarry = carry;
      const value = carry.toFixed(3);
      container.style.setProperty("--scene-carry", value);
      signalLines?.style.setProperty("--scene-carry", value);
      if (argumentShare < 1) {
        for (const element of [stack, steps, lead, focus]) element?.style.setProperty("--scene-carry", value);
        // Matches the CSS fade (gone at carry 1 / 2.2), so hiding never pops.
        if (lead) lead.dataset.faded = String(carry > 0.46);
      }
    }
    if (dimLayer) {
      const dim = (lastAspect >= 1 ? 1 : 0) * Math.max(0, 1 - carry * 1.6) * DIM_STRENGTH;
      if (dim !== lastDim) {
        lastDim = dim;
        dimLayer.style.opacity = dim.toFixed(3);
      }
    }
    if (conservative()) return;
    if (container.dataset.status === "ready") {
      scene?.setScrollProgress(progress);
      scene?.setCarry(carry);
    }
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
        carryStrength,
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
      if (import.meta.env.DEV) (container as HTMLElement & { smokeScene?: SmokeScene }).smokeScene = scene;
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
  }, { rootMargin: early ? "0px 0px 120% 0px" : "0px" });
  preloadObserver.observe(visual);
  visibleObserver.observe(visual);
  motion.addEventListener("change", preferences);
  compact.addEventListener("change", preferences);
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
    compact.removeEventListener("change", preferences);
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
    container.style.removeProperty("--scene-carry");
    for (const element of [stack, steps, lead, focus]) element?.style.removeProperty("--scene-carry");
    dimLayer?.style.removeProperty("opacity");
    delete lead?.dataset.faded;
    signalLines?.style.removeProperty("--scene-carry");
    delete scrollTarget.dataset.sceneAspect;
    delete scrollTarget.dataset.sceneHoldUntil;
    delete scrollTarget.dataset.scenePinFrom;
  };
}
