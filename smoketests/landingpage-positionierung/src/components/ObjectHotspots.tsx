import { useEffect, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import { track } from "@/lib/track";
import { emitSurfaceSelect } from "@/lib/surfaceBus";

/** One block of the hero object mapped to one entry of the product surface. x/y in % of the object's square canvas. */
export interface Hotspot {
  id: string;
  index: number;
  short: string;
  label: string;
  detail: string;
  x: number;
  y: number;
}

const pad = (n: number) => String(n).padStart(2, "0");
const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/** Walkthrough beat: first entry shortly after the object is in view, then one entry per beat, looping. */
const AUTO_START = 900;
const AUTO_STEP = 1800;

/**
 * Hotspots over the hero object plus a persistent entry rail. One button per
 * block with a mono numeral under it; next to the object the six entries of
 * the run (index, short title) on one hairline, the current entry in warm.
 * Block and rail are linked: hover or focus on either highlights both, and
 * activating either jumps to the same entry in the product surface and moves
 * focus there. After load the highlight walks through the entries by itself
 * while the object is in view and nobody has interacted; the first interaction
 * stops it for good. On touch the first tap on a block previews, the second
 * jumps; a rail item jumps at once. Nothing covers the object and nothing
 * appears or disappears, so layout never shifts (D-0913-03, D-0913-10, D-0913-11).
 */
export function ObjectHotspots({ variant, hotspots, children }: { variant: string; hotspots: Hotspot[]; children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const pinned = useRef<string | null>(null);
  const lastPointer = useRef<string>("");
  const wrap = useRef<HTMLDivElement>(null);
  const autoTimer = useRef<number | undefined>(undefined);
  const autoStopped = useRef(false);
  const autoIndex = useRef(-1);

  const stopAuto = () => {
    autoStopped.current = true;
    if (autoTimer.current !== undefined) {
      window.clearTimeout(autoTimer.current);
      autoTimer.current = undefined;
    }
  };
  const clear = () => {
    pinned.current = null;
    setActive(null);
  };

  // Walkthrough: while the object is in view and nobody has interacted, move the highlight along the entries on a loop.
  useEffect(() => {
    const el = wrap.current;
    if (!el || reduceMotion()) return;
    const tick = () => {
      autoIndex.current = (autoIndex.current + 1) % hotspots.length;
      setActive(hotspots[autoIndex.current].id);
      autoTimer.current = window.setTimeout(tick, AUTO_STEP);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (autoStopped.current) return;
        if (entry.isIntersecting && autoTimer.current === undefined) {
          autoTimer.current = window.setTimeout(tick, autoIndex.current < 0 ? AUTO_START : AUTO_STEP);
        } else if (!entry.isIntersecting && autoTimer.current !== undefined) {
          window.clearTimeout(autoTimer.current);
          autoTimer.current = undefined;
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (autoTimer.current !== undefined) window.clearTimeout(autoTimer.current);
      autoTimer.current = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // A pinned (touch) preview clears on a tap outside the object; Escape clears the selection and ends the walkthrough.
  useEffect(() => {
    if (!active) return;
    const onDown = (e: globalThis.PointerEvent) => {
      if (pinned.current && !wrap.current?.contains(e.target as Node | null)) clear();
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        stopAuto();
        clear();
      }
    };
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown, true);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const jump = (id: string) => {
    stopAuto();
    track({ name: "widget_interact", variant, action: `hero_object:${id}` });
    pinned.current = null;
    setActive(id);
    emitSurfaceSelect(id);
    const target = document.getElementById("produktflaeche");
    target?.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
    // Move focus with the scroll so keyboard and screen-reader users land on the selected entry.
    requestAnimationFrame(() => {
      target?.querySelector<HTMLElement>('[aria-pressed="true"]')?.focus({ preventScroll: true });
    });
  };
  const show = (id: string) => {
    stopAuto();
    setActive(id);
  };
  const onBlockClick = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    // Decide per activation: keyboard clicks carry detail 0; pointer clicks carry their pointer type (or the last
    // pointerdown as fallback for browsers whose click is a plain MouseEvent).
    const native = e.nativeEvent as globalThis.PointerEvent;
    const pointerType = native.pointerType || lastPointer.current;
    const isTouch = e.detail !== 0 && pointerType === "touch";
    if (isTouch && pinned.current !== id) {
      stopAuto();
      pinned.current = id;
      setActive(id);
      track({ name: "widget_interact", variant, action: `hero_object_preview:${id}` });
      // If the tapped block sits low in the viewport the rail may be below the fold: nudge it into view, nearest
      // edge only, as a direct answer to the tap.
      requestAnimationFrame(() => {
        document.getElementById("hero-step-rail")?.scrollIntoView({ block: "nearest", behavior: reduceMotion() ? "auto" : "smooth" });
      });
      return;
    }
    jump(id);
  };
  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    lastPointer.current = e.pointerType;
    stopAuto();
  };

  return (
    <div ref={wrap} className="relative">
      <div className="relative">
        {children}
        <div className="absolute inset-0">
          {hotspots.map((h) => (
            <button
              key={h.id}
              type="button"
              className="hotspot"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              data-hotspot={h.id}
              data-active={active === h.id ? "true" : "false"}
              aria-label={`${pad(h.index)} · ${h.label}`}
              onMouseEnter={() => show(h.id)}
              onFocus={() => show(h.id)}
              onPointerDown={onPointerDown}
              onClick={(e) => onBlockClick(e, h.id)}
            >
              <span className="hotspot-num" aria-hidden="true">
                {pad(h.index)}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* entry rail, persistent: on desktop in the object's empty top-right canvas (right of block 3, above block 4,
          lifted into the hero's headroom); below lg in flow under the object, pulled into the canvas's empty bottom band
          (the object ends at 74 %), two columns */}
      <div id="hero-step-rail" className="-mt-[14%] lg:absolute lg:-top-[6%] lg:right-0 lg:mt-0 lg:w-1/2">
        <p className="hero-rail-caption">Ein Lauf · sechs Einträge</p>
        <ol className="mt-2 grid grid-cols-2 gap-x-4 lg:grid-cols-1" aria-label="Einträge des Laufs">
          {hotspots.map((h) => (
            <li key={h.id}>
              <button
                type="button"
                className="hero-rail-item"
                data-rail={h.id}
                aria-current={active === h.id ? "step" : undefined}
                onMouseEnter={() => show(h.id)}
                onFocus={() => show(h.id)}
                onClick={() => jump(h.id)}
              >
                <span className="hero-rail-index">{pad(h.index)}</span>
                <span className="hero-rail-label">{h.short}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
