import { useEffect, useRef, useState } from "react";

/**
 * Scripted walkthrough for a widget: when `enabled` turns true (the product
 * surface entered the viewport), step through `sequence` once, applying each
 * value with `apply`. Any real interaction calls `stop()` and hands control to
 * the user. Never runs under prefers-reduced-motion. Runs at most once.
 */
export function useAutoplay<T>(enabled: boolean, sequence: T[], apply: (v: T) => void, interval = 1500) {
  const [playing, setPlaying] = useState(false);
  const stopped = useRef(false);
  const started = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!enabled || started.current || stopped.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    started.current = true;
    setPlaying(true);
    sequence.forEach((v, i) => {
      timers.current.push(
        window.setTimeout(() => {
          if (stopped.current) return;
          apply(v);
          if (i === sequence.length - 1) setPlaying(false);
        }, interval * (i + 1)),
      );
    });
    return () => timers.current.forEach((t) => window.clearTimeout(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  const stop = () => {
    stopped.current = true;
    timers.current.forEach((t) => window.clearTimeout(t));
    setPlaying(false);
  };

  return { playing, stop };
}
