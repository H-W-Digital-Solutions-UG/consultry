"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { SmokeObjectVariant, SmokeScene } from "./types";
import "./smoke-object.css";

export interface SmokeObjectProps {
  variant: SmokeObjectVariant;
  /** Existing transparent artwork, present in the server-rendered HTML. */
  poster: ReactNode;
  className?: string;
  /** Numbered markers for a matching three-item HTML explanation outside the embed. */
  annotated?: boolean;
}

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };
type Status = "poster" | "loading" | "ready" | "unavailable";

/** React 19.3+ artwork enhancement. No Three.js import in the initial module graph. */
export function SmokeObject(props: SmokeObjectProps) {
  return <ObjectInstance key={props.variant} {...props} />;
}

function ObjectInstance({ variant, poster, className = "", annotated = false }: SmokeObjectProps) {
  const stage = useRef<HTMLDivElement>(null);
  const scene = useRef<SmokeScene | null>(null);
  const [status, setStatus] = useState<Status>("poster");

  useEffect(() => {
    const host = stage.current;
    if (!host) return;
    const visual = host.parentElement!;
    const container = visual.parentElement!;
    const scrollTarget = host.closest<HTMLElement>("[data-scroll-scene]") ?? visual;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    let cancelled = false;
    let pending = false;
    let failed = false;
    let near = false;
    let visible = false;
    let settled = false;
    let prepared = false;
    let paintFrame = 0;
    let idle: number | undefined;
    let fallback: ReturnType<typeof setTimeout> | undefined;
    let scrollFrame = 0;
    let scrollStart = 0;
    let scrollDistance = 480;
    const layoutTop = (element: HTMLElement) => {
      let top = 0;
      for (let node: HTMLElement | null = element; node; node = node.offsetParent as HTMLElement | null) top += node.offsetTop;
      return top;
    };
    const measureScroll = () => {
      // Layout coordinates exclude the visual layer's small scroll translation.
      scrollStart = Math.max(0, layoutTop(scrollTarget), layoutTop(visual) + visual.offsetHeight / 2 - window.innerHeight * .76);
      scrollDistance = Math.min(560, Math.max(420, window.innerHeight * .58));
    };
    const conservative = () => motion.matches || !!connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
    const cancelScheduled = () => {
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (fallback !== undefined) clearTimeout(fallback);
      idle = undefined;
      fallback = undefined;
    };
    const updateScroll = () => {
      scrollFrame = 0;
      if (!visible || document.hidden) return;
      const progress = motion.matches ? 1 : Math.min(1, Math.max(0, (window.scrollY - scrollStart) / scrollDistance));
      visual.style.setProperty("--object-progress", progress.toFixed(4));
      scrollTarget.style.setProperty("--scene-progress", progress.toFixed(4));
      scrollTarget.style.setProperty("--scene-reveal", Math.min(1, Math.max(0, (progress - .06) / .3)).toFixed(4));
      // A slow download must never replace the assembled poster with an
      // already-expanded model. Keep the prepared canvas at the poster pose
      // until native scrolling reaches either matching endpoint (0 and 1).
      // Check the committed DOM state so no scroll frame can overtake React's
      // poster-to-canvas commit. The next native scroll then drives the model.
      if (container.dataset.status === "ready") scene.current?.setScrollProgress(progress);
      else if (prepared && !conservative() && (progress === 0 || progress === 1)) setStatus("ready");
    };
    const load = async () => {
      if (cancelled || pending || failed || scene.current || !near || !settled || document.hidden || conservative()) return;
      cancelScheduled();
      pending = true;
      setStatus("loading");
      try {
        const { createSmokeScene } = await import("./runtime");
        if (cancelled) return;
        if (conservative() || document.hidden || !near) { setStatus("poster"); return; }
        scene.current = createSmokeScene(host, {
          variant,
          reducedMotion: motion.matches,
          visible: visible && !document.hidden,
          onReady: () => {
            if (cancelled) return;
            prepared = true;
            updateScroll();
          },
          onContextLost: () => {
            scene.current?.dispose();
            scene.current = null;
            prepared = false;
            failed = true;
            if (!cancelled) setStatus("unavailable");
          },
        });
        updateScroll();
      } catch {
        if (!cancelled) { failed = true; setStatus("unavailable"); }
      } finally { pending = false; }
    };
    const schedule = () => {
      cancelScheduled();
      if (cancelled || !near || !settled || document.hidden || conservative() || failed || scene.current || pending) return;
      if ("requestIdleCallback" in window) {
        idle = window.requestIdleCallback(() => { idle = undefined; void load(); }, { timeout: 2500 });
      } else {
        fallback = setTimeout(() => { fallback = undefined; void load(); }, 0);
      }
    };
    const preferences = () => {
      scene.current?.setReducedMotion(motion.matches);
      updateScroll();
      schedule();
    };
    const pageVisibility = () => {
      scene.current?.setVisible(visible && !document.hidden);
      updateScroll();
      schedule();
    };
    const onScroll = () => {
      if (visible && !document.hidden && !scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
    };
    const afterLoad = () => {
      // Give the decoded poster a paint before requesting the optional chunk.
      // No fixed 1.2s delay: that made ordinary early scrolling race the model.
      const images = Array.from(visual.querySelectorAll("img"));
      void Promise.all(images.map((img) => img.decode().catch(() => {}))).then(() => {
        if (cancelled) return;
        paintFrame = requestAnimationFrame(() => {
          paintFrame = requestAnimationFrame(() => {
            paintFrame = 0;
            measureScroll();
            updateScroll();
            settled = true;
            schedule();
          });
        });
      });
    };
    const onResize = () => { measureScroll(); onScroll(); };
    measureScroll();
    const preloadObserver = new IntersectionObserver(([entry]) => {
      near = entry.isIntersecting;
      schedule();
    }, { rootMargin: "160px" });
    const visibleObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      scene.current?.setVisible(visible && !document.hidden);
      updateScroll();
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
      cancelAnimationFrame(scrollFrame);
      cancelScheduled();
      preloadObserver.disconnect();
      visibleObserver.disconnect();
      motion.removeEventListener("change", preferences);
      connection?.removeEventListener("change", preferences);
      document.removeEventListener("visibilitychange", pageVisibility);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", afterLoad);
      scene.current?.dispose();
      scene.current = null;
      scrollTarget.style.removeProperty("--scene-progress");
      scrollTarget.style.removeProperty("--scene-reveal");
    };
  }, [variant]);
  return (
    <div className={`smoke-object ${className}`} data-variant={variant} data-status={status} aria-hidden="true">
      <div className="smoke-object__visual">
        <div className="smoke-object__poster">{poster}</div>
        <div ref={stage} className="smoke-object__stage" />
        {annotated && <div className="smoke-object__annotations">{[1, 2, 3].map((part) => <span className={`smoke-object__annotation smoke-object__annotation--${part}`} key={part}>0{part}</span>)}</div>}
      </div>
    </div>
  );
}
