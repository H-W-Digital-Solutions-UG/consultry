import { useEffect, useRef } from "react";

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };

/** A short ambient pass, loaded only on screen; never decodes continuously in the background. */
export function useAmbientVideo(sourceKey: string) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    let visible = false;
    let attached = false;
    let finished = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const sources = Array.from(video.querySelectorAll("source"));
    const stopTimer = () => { clearTimeout(timer); };
    const finish = () => { finished = true; video.pause(); };
    const boundPlayback = () => {
      stopTimer();
      timer = setTimeout(finish, Math.max(0, 4900 - video.currentTime * 1000));
    };
    const update = () => {
      const conservative = motion.matches || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
      if (!visible || document.hidden || conservative || finished) { video.pause(); return; }
      if (!attached) {
        sources.forEach((source) => { source.src = source.dataset.src ?? ""; });
        attached = true;
        video.load();
      }
      void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(video);
    motion.addEventListener("change", update);
    connection?.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    video.addEventListener("playing", boundPlayback);
    video.addEventListener("pause", stopTimer);
    video.addEventListener("ended", finish);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      video.removeEventListener("playing", boundPlayback);
      video.removeEventListener("pause", stopTimer);
      video.removeEventListener("ended", finish);
      stopTimer();
      video.pause();
      sources.forEach((source) => source.removeAttribute("src"));
      if (attached) video.load();
    };
  }, [sourceKey]);
  return ref;
}
