"use client";

import { startTransition, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";

type UseActiveSectionOptions = {
  anchorFraction?: number;
  anchorOffsetPx?: number;
  switchMode?: "nearest" | "crossed";
};

type UseBandActiveSectionOptions = {
  rootMargin?: string;
  thresholds?: number[];
};

const DEFAULT_BAND_THRESHOLDS = Array.from({ length: 21 }, (_, index) => index / 20);

export function useActiveSection(
  ids: readonly string[],
  {
    anchorFraction = 0.34,
    anchorOffsetPx,
    switchMode = "nearest",
  }: UseActiveSectionOptions = {},
) {
  const idsKey = ids.join("|");
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const [progress, setProgress] = useState(0);

  const updateState = useEffectEvent((elements: HTMLElement[]) => {
    if (!elements.length) {
      return;
    }

    const anchorY = anchorOffsetPx ?? window.innerHeight * anchorFraction;

    let nextId = elements[0]?.id ?? "";

    if (switchMode === "crossed") {
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= anchorY) {
          nextId = element.id;
          continue;
        }

        break;
      }
    } else {
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const element of elements) {
        const distance = Math.abs(element.getBoundingClientRect().top - anchorY);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextId = element.id;
        }
      }
    }

    if (nextId && nextId !== activeId) {
      startTransition(() => {
        setActiveId(nextId);
      });
    }

    const firstTop = elements[0]?.getBoundingClientRect().top ?? 0;
    const lastTop = elements[elements.length - 1]?.getBoundingClientRect().top ?? 0;
    const distance = lastTop - firstTop;

    const nextProgress =
      distance <= 0
        ? firstTop <= anchorY
          ? 1
          : 0
        : Math.min(1, Math.max(0, (anchorY - firstTop) / distance));

    setProgress((current) =>
      Math.abs(current - nextProgress) > 0.002 ? nextProgress : current,
    );
  });

  useEffect(() => {
    const idList = idsKey ? idsKey.split("|") : [];

    if (!idList.length) {
      return;
    }

    const elements = idList
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    let frameId = 0;
    const viewport = window.visualViewport;

    const runUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        updateState(elements);
      });
    };

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            runUpdate();
          });

    runUpdate();

    if (resizeObserver) {
      for (const element of elements) {
        resizeObserver.observe(element);
      }
    }

    window.addEventListener("scroll", runUpdate, { passive: true });
    window.addEventListener("resize", runUpdate);
    window.addEventListener("orientationchange", runUpdate);
    viewport?.addEventListener("resize", runUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", runUpdate);
      window.removeEventListener("resize", runUpdate);
      window.removeEventListener("orientationchange", runUpdate);
      viewport?.removeEventListener("resize", runUpdate);
    };
  }, [anchorFraction, anchorOffsetPx, idsKey, switchMode]);

  return {
    activeId: activeId || ids[0] || "",
    progress,
  };
}

export function useBandActiveSection(
  ids: readonly string[],
  {
    rootMargin = "-18% 0px -38% 0px",
    thresholds = DEFAULT_BAND_THRESHOLDS,
  }: UseBandActiveSectionOptions = {},
) {
  const idsKey = ids.join("|");
  const thresholdsKey = thresholds.join("|");
  const observerThresholds = useMemo(
    () => thresholdsKey.split("|").map((value) => Number(value)),
    [thresholdsKey],
  );
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const activeIdRef = useRef(activeId);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  const updateActive = useEffectEvent(
    (elements: HTMLElement[], visibleHeights: Map<string, number>) => {
      let nextId = activeIdRef.current || elements[0]?.id || "";
      let nextVisibleHeight = visibleHeights.get(nextId) ?? 0;

      for (const element of elements) {
        const visibleHeight = visibleHeights.get(element.id) ?? 0;

        if (visibleHeight > nextVisibleHeight) {
          nextId = element.id;
          nextVisibleHeight = visibleHeight;
        }
      }

      if (!nextVisibleHeight || nextId === activeIdRef.current) {
        return;
      }

      activeIdRef.current = nextId;
      startTransition(() => {
        setActiveId(nextId);
      });
    },
  );

  useEffect(() => {
    const idList = idsKey ? idsKey.split("|") : [];

    if (!idList.length) {
      return;
    }

    const elements = idList
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length || typeof IntersectionObserver === "undefined") {
      return;
    }

    const visibleHeights = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleHeights.set(
            (entry.target as HTMLElement).id,
            entry.isIntersecting ? entry.intersectionRect.height : 0,
          );
        }

        updateActive(elements, visibleHeights);
      },
      {
        root: null,
        rootMargin,
        threshold: observerThresholds,
      },
    );

    for (const element of elements) {
      visibleHeights.set(element.id, 0);
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [idsKey, observerThresholds, rootMargin]);

  return activeId || ids[0] || "";
}
