import { useAmbientVideo } from "@/lib/useAmbientVideo";

/**
 * Ambient film: the variant's 5-second object film (generated from its brand
 * object, muted, 50–190 KB) as a background element, never a player. Sources are
 * attached only on screen; one pass, paused off screen/when hidden. Reduced
 * motion and Data Saver show the poster. Always below the fold.
 */
export function AmbientFilm({ variant, className = "" }: { variant: string; className?: string }) {
  const ref = useAmbientVideo(variant);
  const base = `/film/${variant}`;
  return (
    <video ref={ref} aria-hidden="true" muted playsInline preload="none" poster={`${base}-poster.webp`} className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}>
      <source data-src={`${base}.webm`} type="video/webm" />
      <source data-src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}
