"use client";

import { useEffect, useState } from "react";

type HeroBackgroundVideoProps = {
  src: string;
};

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";
const VIDEO_MOUNT_DELAY_MS = 220;

export function HeroBackgroundVideo({ src }: HeroBackgroundVideoProps) {
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const viewport = window.visualViewport;

    const syncVideoVisibility = () => {
      const layoutViewportWidth = document.documentElement.clientWidth;
      const visualViewportWidth = viewport?.width ?? layoutViewportWidth;
      const settledViewportWidth = Math.min(layoutViewportWidth, visualViewportWidth);

      setShouldRenderVideo(mediaQuery.matches && settledViewportWidth >= 768);
    };

    timeoutId = window.setTimeout(syncVideoVisibility, VIDEO_MOUNT_DELAY_MS);
    mediaQuery.addEventListener("change", syncVideoVisibility);
    window.addEventListener("resize", syncVideoVisibility);
    viewport?.addEventListener("resize", syncVideoVisibility);

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      mediaQuery.removeEventListener("change", syncVideoVisibility);
      window.removeEventListener("resize", syncVideoVisibility);
      viewport?.removeEventListener("resize", syncVideoVisibility);
    };
  }, []);

  if (!shouldRenderVideo) {
    return null;
  }

  return (
    <div className="absolute inset-0">
      <video
        aria-hidden="true"
        autoPlay
        className="h-full w-full object-cover object-center"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
