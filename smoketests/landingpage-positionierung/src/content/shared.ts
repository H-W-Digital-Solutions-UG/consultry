import type { Stat } from "@/components/Evidence";

/**
 * Same eyebrow on all five pages: the category, addressed to knowledge-intensive
 * companies in general. Consultancies are the first go-to-market focus (see the
 * band qualifier), not the boundary of the market.
 */
export const EYEBROW = "Der KI-Arbeitskern für wissensintensive Unternehmen";

/** Three factual trust lines. Verbatim from the corpus boundaries / CONTEXT-EXTRACT. */
export const TRUST = ["Im Tenant eurer Beratung", "Read-only-Anbindung eurer Quellen", "Kein Training auf geteiltem Speicher"];

/** The same three facts as a labelled strip under the hero (label, fact, one line of detail from existing copy). */
export const TRUST_ITEMS = [
  { label: "Betrieb", fact: TRUST[0], detail: "Azure oder AWS eurer Beratung, Anmeldung über Entra ID." },
  { label: "Quellen", fact: TRUST[1], detail: "Beim Abruf gefiltert, nicht im Prompt." },
  { label: "Training", fact: TRUST[2], detail: "Tenant-isoliert, Protokoll ohne Inhalte." },
];

/** Sourced figures already vetted for the deck. Reuse, never invent. */
export const STATS = {
  gartner47: {
    value: "47 %",
    label: "der Wissensarbeiter finden die Informationen nicht, die sie für ihre Arbeit brauchen.",
    source: "Gartner, Digital Worker Experience Survey 2023, 4.861 Beschäftigte",
  },
  atlassian50: {
    value: "50 %",
    label: "sagen: Teams im eigenen Haus arbeiten unwissentlich an denselben Dingen.",
    source: "Atlassian, State of Teams 2025, 12.000 Wissensarbeiter, Anbieterstudie",
  },
  bitkom77: {
    value: "77 %",
    label: "der Unternehmen nennen Datenschutz als Hemmnis, bei verdoppelter KI-Nutzung.",
    source: "Bitkom, KI in Deutschland 2026, 604 Unternehmen ab 20 Beschäftigten",
  },
  coreview66: {
    value: "2/3",
    label: "verschieben sogar Copilot wegen Datenschutzrisiken.",
    source: "CoreView 2026, Herstellerstudie",
  },
  spi27: {
    value: "26,6 %",
    label: "der Projekte verfehlen den Termin, Überschreitung im Schnitt 11,3 %.",
    source: "SPI Research, Professional Services Maturity Benchmark 2025",
  },
  sixsense80: {
    value: "80 %",
    label: "der Abschlüsse gehen an den Anbieter, der schon vor dem ersten Gespräch Favorit war.",
    source: "6sense, B2B Buyer Experience Report 2025, rund 4.000 Käufer",
  },
  bcg40: {
    value: "+40 %",
    label: "bewertete Qualität je Aufgabe, wenn Berater mit KI auf passendem Kontext arbeiten.",
    source: "Dell’Acqua et al., Harvard und BCG 2023, Feldversuch mit 758 Beratern",
  },
  /** Internal assumption, not a measurement. Kept for reference; not rendered in v2. */
  internal10h: {
    value: "10 h",
    label: "jeder Beraterwoche sind intern. Kein Kunde bezahlt sie.",
    source: "Annahme aus Kundengesprächen, keine Messung",
  },
} satisfies Record<string, Stat>;

export const PATHS_SECTION = {
  title: "Euer Datenraum. Euer Betriebsweg.",
  lede: "Fällt ein Anbieter aus, wechselt das Modell, nicht der Datenraum.",
};

/** One-line qualifier in the waitlist band: first focus named as focus, not as the limit of the market. */
export const FOR_WHOM_LINE = "Erster Fokus: IT- und SAP-Beratungen in DACH mit 20 bis 200 Beratern. Der Kern passt überall, wo Wissen die Arbeit trägt.";
