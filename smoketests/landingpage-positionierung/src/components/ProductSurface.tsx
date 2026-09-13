import { cloneElement, isValidElement, useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";
import { TRUST } from "@/content/shared";
import { SAMPLE_ASSERTIONS } from "@/domain/assertions";
import { SAMPLE_FINDINGS } from "@/domain/alignment";
import { SAMPLE_CLAIMS, SAMPLE_STEPS } from "@/domain/ledger";
import { PRINCIPALS, SOURCES, filterSources } from "@/domain/access";
import { TIERS } from "@/domain/corpus";
import { KeyValue } from "./AppUi";
import { Button } from "./Button";

/**
 * The product surface: one app window in the grammar of the implemented
 * Consultry App Design System (dark shell, icon navigation with counts, eyebrow
 * + title header, compact rows with outlined status badges, review rail).
 * It is a functional-looking impression, not the final product. When the panel
 * enters the viewport, the widget plays its one gesture through once; any
 * click hands control to the visitor.
 *
 * Navigation, counts and the sample context come from the existing click dummy.
 */
const NAV: Array<{ label: string; count?: number; icon: ReactNode }> = [
  { label: "Meine Arbeit", count: 3, icon: <IconHome /> },
  { label: "Kunden", count: 6, icon: <IconBriefcase /> },
  { label: "Projekte", count: 8, icon: <IconLayers /> },
  { label: "Wissen und Assets", count: 10, icon: <IconBookmark /> },
  { label: "Menschen und Teams", icon: <IconPeople /> },
  { label: "Commercials", count: 10, icon: <IconCompass /> },
  { label: "Operations", count: 2, icon: <IconSettings /> },
];

const AREA: Record<string, { nav: string; category: string; title: string; meta: string }> = {
  brain: {
    nav: "Wissen und Assets",
    category: "Wissen und Assets",
    title: "Aussagen mit Gültigkeit",
    meta: `${SAMPLE_ASSERTIONS.length} Aussagen, ${SAMPLE_ASSERTIONS.filter((a) => a.state === "open").length} Freigabe offen`,
  },
  corpus: { nav: "Wissen und Assets", category: "Wissen und Assets", title: "Korpus-Aufbau", meta: `${TIERS.length} Stufen, Stufe 0 live im Kickoff` },
  brand: {
    nav: "Meine Arbeit",
    category: "Meine Arbeit",
    title: "Corporate Alignment",
    meta: `${SAMPLE_FINDINGS.length} Befunde, 3 Perspektiven, kein Gesamt-Score`,
  },
  ledger: {
    nav: "Operations",
    category: "Kontrollebene",
    title: "Lauf und gemeinsamer Stand",
    meta: `${SAMPLE_STEPS.length} Einträge, ${SAMPLE_CLAIMS.filter((c) => !c.source).length} offene Frage`,
  },
  access: {
    nav: "Operations",
    category: "Kontrollebene",
    title: "Zugriff beim Abruf",
    meta: `${SOURCES.length} Quellen, ${filterSources(PRINCIPALS[1]).filter((v) => v.allowed).length} im Zugriff des Consultants`,
  },
};

const RAIL = [
  { k: "Betrieb", v: TRUST[0], ok: true },
  { k: "Quellen", v: TRUST[1], ok: true },
  { k: "Training", v: TRUST[2], ok: true },
  { k: "Rechte", v: "Für Agenten wie für Menschen", ok: true },
  { k: "Modellweg", v: "Freigegeben je Datenklasse", ok: true },
  { k: "Protokoll", v: "Ohne Inhalte", ok: true },
];

/** The Consultry hero film (local, muted, ≈220 KB) behind the window, attached only near the viewport, never under reduced motion. */
function Backdrop() {
  const ref = useRef<HTMLVideoElement>(null);
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
      { rootMargin: "400px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} aria-hidden="true" muted loop playsInline preload="none" poster="/bg/shell-1600.webp" className="pointer-events-none absolute inset-0 h-full w-full object-cover">
      <source data-src="/bg/shell-loop.webm" type="video/webm" />
      <source data-src="/bg/shell-loop.mp4" type="video/mp4" />
    </video>
  );
}

export function ProductSurface({ variant, children, onCta }: { variant: string; children: ReactNode; onCta: () => void }) {
  const area = AREA[variant] ?? AREA.brain;
  const ref = useRef<HTMLElement>(null);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.35)) {
          setAutoplay(true);
          io.disconnect();
        }
      },
      { threshold: [0.35] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const widget = isValidElement(children) ? cloneElement(children as ReactElement<{ autoplay?: boolean }>, { autoplay }) : children;

  return (
    <figure ref={ref} className="app relative mt-12 overflow-hidden rounded-[16px] bg-surface-hero">
      <Backdrop />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,27,24,0.1)_0%,rgba(30,27,24,0.55)_100%)]" />

      <div className="relative p-3 sm:p-8 md:p-12 lg:px-16 lg:pt-16 lg:pb-14">
        <div className="app-shell overflow-hidden rounded-[12px] border border-white/12 shadow-hero">
          <div className="grid md:grid-cols-[14rem_minmax(0,1fr)]">
            {/* dark shell: sidebar */}
            <aside className="app-shell app-divider hidden border-r md:block" aria-label="Navigation (Beispiel)">
              <div className="flex h-14 items-center gap-2.5 px-4">
                <span className="logo-mark inline-block size-6 rounded-[7px]" aria-hidden="true" />
                <span className="text-[15px] font-semibold">Consultry</span>
              </div>
              <div className="px-3">
                <div className="app-sunken app-text-3 flex h-9 items-center gap-2 rounded-lg px-3 text-[13px]">
                  <IconSearch />
                  Suchen und fragen
                </div>
              </div>
              <ul className="mt-3 space-y-0.5 px-3">
                {NAV.map((n) => (
                  <li key={n.label} className="app-nav" data-active={n.label === area.nav ? "true" : "false"}>
                    <span className="app-text-3 shrink-0">{n.icon}</span>
                    {n.label}
                    {n.count !== undefined && <span className="app-nav-count">{n.count}</span>}
                  </li>
                ))}
              </ul>
              <div className="app-divider mx-4 mt-4 border-t pt-4">
                <p className="app-eyebrow">Kontext</p>
                <p className="mt-1.5 text-[13px]">Hansa Maschinenbau AG</p>
                <p className="app-text-3 text-[13px]">ERP Rollout Acceleration</p>
              </div>
              <div className="app-divider mt-6 flex items-center gap-3 border-t px-4 py-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#3a3734] text-[11px] font-semibold">TR</span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px]">Tobias Rehm</span>
                  <span className="app-text-3 block text-[12px]">Principal</span>
                </span>
              </div>
            </aside>

            {/* workspace */}
            <div className="app-panel min-w-0">
              <header className="app-divider flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b px-5 py-3 md:px-7">
                <div>
                  <p className="app-eyebrow">{area.category}</p>
                  <h3 className="mt-0.5 text-[18px] font-semibold tracking-[-0.01em]">{area.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="app-text-3 hidden text-[13px] sm:inline">{area.meta}</span>
                  <figcaption className="app-badge app-badge-neutral">Beispieldaten</figcaption>
                </div>
              </header>

              <div className="grid lg:grid-cols-[minmax(0,1fr)_15rem]">
                <div className="min-w-0 px-5 py-5 md:px-7 md:py-6">{widget}</div>
                <aside className="app-divider app-rail border-t px-5 py-5 lg:border-t-0 lg:border-l" aria-label="Datenweg">
                  <p className="app-eyebrow">Datenweg</p>
                  <div className="mt-2">
                    <KeyValue items={RAIL} />
                  </div>
                </aside>
              </div>

              <footer className="app-divider flex flex-wrap items-center justify-between gap-3 border-t px-5 py-3 md:px-7">
                <span className="app-text-3 text-[13px]">Freigabe durch Menschen · Rechte gelten beim Abruf</span>
                <Button variant="primary" size="sm" onClick={onCta}>
                  Auf die Warteliste
                </Button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

/* Lucide-style 16px outline icons, 1.75px stroke. */
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
function IconHome() {
  return (
    <Svg>
      <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" />
    </Svg>
  );
}
function IconBriefcase() {
  return (
    <Svg>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </Svg>
  );
}
function IconLayers() {
  return (
    <Svg>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
    </Svg>
  );
}
function IconBookmark() {
  return (
    <Svg>
      <path d="M6 3h12v18l-6-4-6 4z" />
    </Svg>
  );
}
function IconPeople() {
  return (
    <Svg>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2" />
    </Svg>
  );
}
function IconCompass() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </Svg>
  );
}
function IconSettings() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </Svg>
  );
}
function IconSearch() {
  return (
    <Svg>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </Svg>
  );
}
