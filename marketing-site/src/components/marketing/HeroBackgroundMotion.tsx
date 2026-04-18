"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";
const DESKTOP_MIN_WIDTH_PX = 768;
const SCENE_MOUNT_DELAY_MS = 180;

const HeroBackgroundMotionScene = dynamic(
  () =>
    import("./HeroBackgroundMotionScene").then(
      (mod) => mod.HeroBackgroundMotionScene,
    ),
  { ssr: false },
);

/**
 * Lightweight visibility gate for the animated hero scene.
 *
 * Contract:
 * - Renders `null` on viewports below {@link DESKTOP_MIN_WIDTH_PX}.
 * - Dynamically imports the heavy SVG scene only when the viewport qualifies,
 *   so phones never download or parse the scene's JS chunk.
 * - The gate is debounced on width so iOS URL-bar / keyboard viewport shifts
 *   do not trigger redundant re-renders or layout reads.
 *
 * Invariants:
 * - Must remain a Client Component because it reads `window.matchMedia` and
 *   `window.visualViewport`.
 * - The dynamic import uses `ssr: false` so the scene is never serialized in
 *   SSR payload — consistent with the previous behavior where the scene only
 *   mounted after a client-side width check.
 */
export function HeroBackgroundMotion() {
  const [shouldRenderScene, setShouldRenderScene] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const viewport = window.visualViewport;
    let timeoutId: number | null = null;
    let lastSettledWidth = -1;

    const syncSceneVisibility = () => {
      const layoutViewportWidth = document.documentElement.clientWidth;
      const visualViewportWidth = viewport?.width ?? layoutViewportWidth;
      const settledViewportWidth = Math.min(
        layoutViewportWidth,
        visualViewportWidth,
      );

      if (settledViewportWidth === lastSettledWidth) {
        return;
      }

      lastSettledWidth = settledViewportWidth;
      setShouldRenderScene(
        mediaQuery.matches && settledViewportWidth >= DESKTOP_MIN_WIDTH_PX,
      );
    };

    timeoutId = window.setTimeout(syncSceneVisibility, SCENE_MOUNT_DELAY_MS);
    mediaQuery.addEventListener("change", syncSceneVisibility);
    window.addEventListener("resize", syncSceneVisibility);
    viewport?.addEventListener("resize", syncSceneVisibility);

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      mediaQuery.removeEventListener("change", syncSceneVisibility);
      window.removeEventListener("resize", syncSceneVisibility);
      viewport?.removeEventListener("resize", syncSceneVisibility);
    };
  }, []);

  if (!shouldRenderScene) {
    return null;
  }

  return <HeroBackgroundMotionScene />;
}
