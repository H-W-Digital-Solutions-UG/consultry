import { useEffect, useRef } from "react";

/**
 * Ambient film: the variant's 5-second object film (generated from its brand
 * object, muted, 50–190 KB) as a background element, never a player. Sources are
 * attached only when the section comes near the viewport; under
 * prefers-reduced-motion only the poster is shown. Always below the fold.
 */
export function AmbientFilm({ variant, className = "" }: { variant: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const base = `/film/${variant}`;
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        for (const s of Array.from(v.querySelectorAll("source"))) s.src = s.dataset.src ?? "";
        v.load();
        v.play().catch(() => {});
        io.disconnect();
      },
      { rootMargin: "500px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} aria-hidden="true" muted loop playsInline preload="none" poster={`${base}-poster.webp`} className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}>
      <source data-src={`${base}.webm`} type="video/webm" />
      <source data-src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}
