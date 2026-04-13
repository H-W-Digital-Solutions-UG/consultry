"use client";

import { startTransition, useEffect, useEffectEvent, useState } from "react";

type UseActiveSectionOptions = {
  anchorFraction?: number;
};

export function useActiveSection(
  ids: readonly string[],
  {
    anchorFraction = 0.34,
  }: UseActiveSectionOptions = {},
) {
  const idsKey = ids.join("|");
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const [progress, setProgress] = useState(0);

  const updateState = useEffectEvent((elements: HTMLElement[]) => {
    if (!elements.length) {
      return;
    }

    const anchorY = window.innerHeight * anchorFraction;

    let nextId = elements[0]?.id ?? "";
    let nearestDistance = Number.POSITIVE_INFINITY;

    for (const element of elements) {
      const distance = Math.abs(element.getBoundingClientRect().top - anchorY);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nextId = element.id;
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

    const runUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        updateState(elements);
      });
    };

    runUpdate();

    window.addEventListener("scroll", runUpdate, { passive: true });
    window.addEventListener("resize", runUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", runUpdate);
      window.removeEventListener("resize", runUpdate);
    };
  }, [anchorFraction, idsKey]);

  return {
    activeId: activeId || ids[0] || "",
    progress,
  };
}
