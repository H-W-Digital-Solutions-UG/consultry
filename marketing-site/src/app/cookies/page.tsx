import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChartLine, Database, ShieldCheck } from "lucide-react";
import { CookiePreferencesPanel } from "@/components/analytics/CookiePreferencesPanel";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Cookies",
    description:
      "Cookie-Hinweise, Consent-Steuerung und Informationen zu technisch notwendigen sowie optionalen Statistik-Diensten auf consultry.de.",
    path: "/cookies",
  });
}

const cookieCategories = [
  {
    title: "Streng notwendig",
    body: "Diese Mechanismen halten die Website benutzbar. Dazu gehoeren die Speicherung des Banner-Status ueber CookieScript sowie lokale Hinweise, die Sie bereits geschlossen haben.",
    icon: ShieldCheck,
    tone:
      "border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))]",
    items: [
      "CookieScript speichert Ihre Consent-Auswahl, damit das Banner nicht bei jedem Seitenaufruf neu erscheint.",
      "Die Hinweisleiste im Kopfbereich merkt sich lokal, ob Sie den Hinweis bereits geschlossen haben.",
    ],
  },
  {
    title: "Performance und Statistik",
    body: "Diese Kategorie wird erst nach Ihrer ausdruecklichen Zustimmung aktiv. Dann laden wir Google Tag Manager und Google Analytics 4, um Seitenaufrufe, CTA-Klicks und den Waitlist-Funnel datensparsam zu messen.",
    icon: ChartLine,
    tone:
      "border-[rgba(255,116,72,0.18)] bg-[linear-gradient(180deg,rgba(255,91,46,0.12),rgba(255,91,46,0.03))]",
    items: [
      "Google Tag Manager dient nur als Ausspielschicht fuer Analyse-Tags und wird ohne Statistik-Einwilligung nicht geladen.",
      "Google Analytics 4 misst nur die freigegebenen Interaktionen unserer Marketing-Seiten und des Waitlist-Funnels.",
    ],
  },
  {
    title: "Session-Uebergabe fuer die Warteliste",
    body: "Nach einer erfolgreichen Wartelisten-Anmeldung speichern wir Ihre E-Mail-Adresse kurzzeitig im Browser-Speicher, damit die optionale Qualifizierungsseite dieselbe Anmeldung zuordnen kann.",
    icon: Database,
    tone:
      "border-[rgba(244,183,109,0.16)] bg-[linear-gradient(180deg,rgba(244,183,109,0.1),rgba(244,183,109,0.02))]",
    items: [
      "Die Session-Information bleibt in Ihrem Browser und wird nicht fuer seitenuebergreifendes Tracking genutzt.",
      "Wenn Sie den Browser-Speicher loeschen oder das Geraet wechseln, ist diese Zuordnung nicht mehr verfuegbar.",
    ],
  },
] as const;

const setupChecklist = [
  "CookieScript wird als erstes globale Script geladen und steuert die Einwilligung fuer optionale Statistik.",
  "Google Tag Manager und Google Analytics 4 laden nur nach Performance-Einwilligung.",
  "Ohne Einwilligung bleiben CTA-, Funnel- und Seitenmessung deaktiviert.",
  "Diese Seite bleibt Ihr fester Einstiegspunkt, um die Auswahl jederzeit wieder zu oeffnen.",
] as const;

export default function CookiesPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-18 pt-12 sm:pb-24 sm:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(circle at 18% 14%, rgba(255,91,46,0.2) 0%, rgba(255,91,46,0.06) 22%, transparent 44%), radial-gradient(circle at 82% 0%, rgba(114,91,181,0.18) 0%, rgba(114,91,181,0.05) 20%, transparent 44%), linear-gradient(180deg, rgba(11,11,16,0.98) 0%, rgba(19,16,22,0.98) 28%, rgba(19,16,22,0.7) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 48%, rgba(0,0,0,0.22) 100%)",
          }}
        />

        <div className="content-shell relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,31rem)] lg:items-start lg:gap-12">
            <div className="max-w-[43rem]">
              <p className="eyebrow text-[rgba(255,162,117,0.92)]">COOKIE-STEUERUNG</p>
              <h1 className="mt-5 max-w-[11ch] text-balance text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[rgba(250,250,249,0.98)]">
                Ihre Einwilligung soll klar, knapp und reversibel bleiben.
              </h1>
              <p className="mt-5 max-w-[39rem] text-[15px] leading-[1.8] text-[rgba(232,228,238,0.74)] sm:text-[16px]">
                Auf consultry.de trennen wir strikt zwischen technisch notwendigen Mechanismen und
                optionaler Statistik. Google Tag Manager und Google Analytics 4 bleiben blockiert,
                bis Sie Statistik ausdruecklich erlauben. Diese Seite zeigt den aktuellen Aufbau
                und gibt Ihnen jederzeit einen direkten Zugriff auf die Cookie-Einstellungen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] px-4 py-2.5 text-[14px] font-medium text-[rgba(250,250,249,0.94)] transition hover:border-[rgba(255,162,117,0.28)] hover:bg-[rgba(255,255,255,0.08)]"
                  href="/datenschutz"
                >
                  Zur Datenschutzerklaerung
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] px-4 py-2.5 text-[14px] font-medium text-[rgba(232,228,238,0.72)] transition hover:text-[rgba(250,250,249,0.94)]"
                  href="/impressum"
                >
                  Impressum
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <CookiePreferencesPanel />
          </div>

          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {cookieCategories.map((category) => {
              const Icon = category.icon;

              return (
                <section
                  className={`surface-panel rounded-[28px] border px-5 py-5 sm:px-6 sm:py-6 ${category.tone}`}
                  key={category.title}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)]">
                      <Icon className="h-5 w-5 text-[var(--consultry-brand-warm)]" />
                    </div>
                    <h2 className="text-[1.12rem] font-semibold leading-[1.2] text-[var(--consultry-text-primary)]">
                      {category.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.75] text-[var(--consultry-text-secondary)]">
                    {category.body}
                  </p>
                  <ul className="mt-5 space-y-3 text-[13px] leading-[1.65] text-[var(--consultry-text-muted)]">
                    {category.items.map((item) => (
                      <li className="flex items-start gap-3" key={item}>
                        <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[var(--consultry-brand-coral)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <section className="surface-panel mt-8 rounded-[30px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(24,21,28,0.98)_0%,rgba(20,18,24,0.98)_100%)] px-5 py-6 sm:px-7 sm:py-7">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-start">
              <div className="max-w-[42rem]">
                <p className="eyebrow text-[rgba(255,162,117,0.92)]">BETRIEBSMODELL</p>
                <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[rgba(250,250,249,0.98)]">
                  So ist der Consent-Stack auf dieser Website verdrahtet.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.75] text-[rgba(232,228,238,0.74)]">
                  CookieScript verwaltet die Auswahl, das Root-Layout laedt die Consent-Schicht
                  zuerst, und erst danach darf die optionale Statistik aktiviert werden. Die
                  eigentliche Messung laeuft ueber Google Tag Manager und Google Analytics 4.
                </p>
              </div>

              <ul className="space-y-3">
                {setupChecklist.map((item, index) => (
                  <li
                    className="flex items-start gap-3 rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3.5 text-[14px] leading-[1.65] text-[var(--consultry-text-secondary)]"
                    key={item}
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(255,91,46,0.16)] text-[12px] font-semibold text-[rgba(250,250,249,0.94)]">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <p className="mt-8 text-sm text-[var(--consultry-text-faint)]">Stand: April 2026</p>
        </div>
      </section>
    </main>
  );
}
