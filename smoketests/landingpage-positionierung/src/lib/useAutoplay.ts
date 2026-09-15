import { useEffect, useEffectEvent, useRef, useState, type RefObject } from "react";

export type WalkthroughStep<T> = { value: T; label: string; duration?: number };
type Phase = "idle" | "running" | "paused" | "manual" | "complete";

export interface WalkthroughController {
  focusRef: RefObject<HTMLDivElement | null>;
  status: "idle" | "playing" | "paused" | "manual" | "complete";
  running: boolean;
  index: number;
  count: number;
  cycle: number;
  label: string;
  duration: number;
  stop: () => void;
  toggle: () => void;
}

/** One readable run in view, with manual takeover and a single pausable timer. */
export function useAutoplay<T>(enabled: boolean, steps: readonly WalkthroughStep<T>[], apply: (value: T) => void): WalkthroughController {
  const focusRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true);
  const [phase, setPhase] = useState<Phase>("idle");
  const [{ index, cycle }, setPosition] = useState({ index: 0, cycle: 0 });
  const clock = useRef({ index: -1, cycle: -1, remaining: 0 });
  const applyStep = useEffectEvent((next: number) => apply(steps[next].value));
  const duration = steps[index].duration ?? 4500;
  const inView = visible && documentVisible;
  const running = phase === "running" && inView;

  useEffect(() => {
    const node = focusRef.current;
    if (!node) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionChange = () => {
      setReduceMotion(media.matches);
      if (media.matches) setPhase((current) => current === "running" ? "paused" : current);
    };
    const visibilityChange = () => setDocumentVisible(document.visibilityState === "visible");
    motionChange();
    visibilityChange();
    media.addEventListener("change", motionChange);
    document.addEventListener("visibilitychange", visibilityChange);
    // Observe controls and first rows, not the much taller mobile data rail.
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.intersectionRatio >= 0.7), {
      rootMargin: "-72px 0px -10% 0px", threshold: [0, 0.7, 1],
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", motionChange);
      document.removeEventListener("visibilitychange", visibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !inView || reduceMotion || phase !== "idle") return;
    // A brief scroll past should not start a presentation.
    const timer = window.setTimeout(() => {
      setPosition((current) => ({ index: 0, cycle: current.cycle + 1 }));
      setPhase("running");
    }, 450);
    return () => window.clearTimeout(timer);
  }, [enabled, inView, reduceMotion, phase]);

  useEffect(() => {
    if (cycle > 0) applyStep(index);
  }, [index, cycle]);

  useEffect(() => {
    if (!running) return;
    if (clock.current.index !== index || clock.current.cycle !== cycle) {
      clock.current = { index, cycle, remaining: duration };
    }
    const started = performance.now();
    const timer = window.setTimeout(() => {
      if (index === steps.length - 1) setPhase("complete");
      else setPosition((current) => ({ ...current, index: current.index + 1 }));
    }, clock.current.remaining);
    return () => {
      window.clearTimeout(timer);
      clock.current.remaining = Math.max(0, clock.current.remaining - (performance.now() - started));
    };
  }, [running, index, cycle, duration, steps.length]);

  const stop = () => setPhase("manual");
  const toggle = () => {
    if (phase === "running") setPhase("paused");
    else if (phase === "paused") setPhase("running");
    else {
      setPosition((current) => ({ index: 0, cycle: current.cycle + 1 }));
      setPhase("running");
    }
  };

  return {
    // The button reflects playback intent. Viewport suspension only freezes the
    // clock; pressing Pause still pauses explicitly until the user resumes.
    focusRef, status: phase === "running" ? "playing" : phase,
    running, index, count: steps.length, cycle, label: steps[index].label, duration, stop, toggle,
  };
}
