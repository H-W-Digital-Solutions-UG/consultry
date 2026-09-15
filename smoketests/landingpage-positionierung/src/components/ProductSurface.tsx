import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { TRUST } from "@/content/shared";
import { SAMPLE_ASSERTIONS } from "@/domain/assertions";
import { SAMPLE_FINDINGS } from "@/domain/alignment";
import { PRINCIPALS, SOURCES, filterSources } from "@/domain/access";
import { TIERS } from "@/domain/corpus";
import { Button } from "./Button";

/**
 * The product surface: one app window in the grammar of the implemented
 * Consultry App Design System (dark shell, quiet navigation, title header,
 * compact rows with outlined status badges and a supporting review rail).
 * It is a functional-looking impression, not the final product.
 * A visible example plays once in focus; a real selection takes over immediately.
 *
 * Navigation and the sample context come from the existing click dummy.
 */
const NAV: Array<{ label: string; icon: ReactNode }> = [
  { label: "Meine Arbeit", icon: <IconHome /> },
  { label: "Wissen und Assets", icon: <IconBookmark /> },
  { label: "Operations", icon: <IconSettings /> },
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
    nav: "Wissen und Assets",
    category: "Gemeinsames Wissen",
    title: "Agenten und Wissensledger",
    meta: "Hansa · Wave 2",
  },
  access: {
    nav: "Operations",
    category: "Kontrollebene",
    title: "Zugriff beim Abruf",
    meta: `${SOURCES.length} Quellen, ${filterSources(PRINCIPALS[1]).filter((v) => v.allowed).length} im Zugriff des Consultants`,
  },
};

const RAIL = [
  { k: "Betrieb", v: TRUST[0] },
  { k: "Quellen", v: TRUST[1] },
  { k: "Training", v: TRUST[2] },
  { k: "Rechte", v: "Für Agenten wie für Menschen" },
  { k: "Modellweg", v: "Freigegeben je Datenklasse" },
  { k: "Protokoll", v: "Ohne Inhalte" },
];

const LEDGER_RAIL = [
  { k: "Evidenz", v: "Quellen und Gegenbelege bleiben prüfbar" },
  { k: "Geschäftliche Freigabe", v: "Verantwortung bleibt bei Menschen" },
  { k: "Zugriff", v: "Je Identität und Aufgabe begrenzt" },
];

export function ProductSurface({ variant, children, onCta }: { variant: string; children: ReactNode; onCta: () => void }) {
  const area = AREA[variant] ?? AREA.brain;
  const rules = variant === "ledger" ? LEDGER_RAIL : RAIL;
  const widget = isValidElement(children) ? cloneElement(children as ReactElement<{ autoplay?: boolean }>, { autoplay: true, key: variant }) : children;

  return (
    <figure id="produktflaeche" className="app product-proof relative mt-12 scroll-mt-24 overflow-hidden rounded-[16px] bg-surface-hero">
      <img src="/bg/shell-1600.webp" alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,27,24,0.1)_0%,rgba(30,27,24,0.55)_100%)]" />

      <div className="relative p-3 sm:p-8 md:p-12 lg:px-16 lg:pt-16 lg:pb-14">
        <div className="app-shell overflow-hidden rounded-[12px] border border-white/12 shadow-hero">
          <div className="grid lg:grid-cols-[11rem_minmax(0,1fr)]">
            {/* dark shell: sidebar */}
            <aside className="app-shell app-divider hidden border-r lg:block" aria-label="Navigation (Beispiel)">
              <div className="flex h-14 items-center gap-2.5 px-4">
                <span className="logo-mark inline-block size-6 rounded-[7px]" aria-hidden="true" />
                <span className="text-[15px] font-semibold">Consultry</span>
              </div>
              <ul className="mt-2 space-y-0.5 px-2">
                {NAV.map((n) => (
                  <li key={n.label} className="app-nav" data-active={n.label === area.nav ? "true" : "false"}>
                    <span className="app-text-3 shrink-0">{n.icon}</span>
                    <span className="min-w-0 text-[12px] leading-tight">{n.label}</span>
                  </li>
                ))}
              </ul>
              <div className="app-divider mx-4 mt-4 border-t pt-4">
                <p className="app-eyebrow">Beispielprojekt</p>
                <p className="mt-1.5 text-[13px]">Hansa Maschinenbau AG</p>
                <p className="app-text-3 text-[13px]">ERP Rollout Acceleration</p>
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

              <div className="grid xl:grid-cols-[minmax(0,1fr)_13rem]">
                <div className="min-w-0 px-5 py-5 md:px-7 md:py-6">{widget}</div>
                <aside className="app-divider app-rail border-t px-5 py-5 xl:border-t-0 xl:border-l" aria-label={variant === "ledger" ? "Wissen und Verantwortung" : "Datenweg"}>
                  <p className="app-eyebrow">{variant === "ledger" ? "Wissen & Verantwortung" : "Datenweg"}</p>
                  <dl className="mt-4 grid gap-x-5 gap-y-4 sm:grid-cols-3 xl:grid-cols-1">
                    {rules.map((rule) => (
                      <div key={rule.k} className="min-w-0">
                        <dt className="app-text-3 text-[12px]">{rule.k}</dt>
                        <dd className="app-text-2 mt-1 text-[13px] leading-relaxed">{rule.v}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>

              <footer className="app-divider flex flex-wrap items-center justify-between gap-3 border-t px-5 py-3 md:px-7">
                <span className="app-text-3 text-[13px]">{variant === "ledger" ? "Gemeinsamer Stand · Rechte gelten je Identität und Aufgabe" : "Freigabe durch Menschen · Rechte gelten beim Abruf"}</span>
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
function IconBookmark() {
  return (
    <Svg>
      <path d="M6 3h12v18l-6-4-6 4z" />
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
