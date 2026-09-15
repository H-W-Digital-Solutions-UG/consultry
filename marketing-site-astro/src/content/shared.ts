import type { Stat } from "./types";

/**
 * Shared category and product direction, grounded in D-0914-F01–F04.
 * Consulting is an initial channel, not a boundary around the product.
 */
export const EYEBROW = "Ein Arbeitskern für Menschen und KI-Agenten";

/** Product principles, not claims of a validated deployment or provider contract. */
export const TRUST = ["Vorarbeit mit Zusammenhang", "Grundschutz für alle", "Autonomie im vereinbarten Rahmen"];

/** Shared explanations for those principles. */
export const TRUST_ITEMS = [
  { label: "Wissen", fact: TRUST[0], detail: "Quellen, Entscheidungen und aktueller Stand gehören zur Arbeit dazu." },
  { label: "Schutz", fact: TRUST[1], detail: "Rechte sollen an Zugriffen und Aktionen gelten, unabhängig vom Agentenprompt." },
  { label: "Arbeit", fact: TRUST[2], detail: "Vorab eingeräumte Befugnisse ermöglichen selbstständiges Weiterarbeiten." },
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
  title: "Ein Betriebsweg, der zu euch passt.",
  lede: "Welche Option passt, klären wir in der Erprobung.",
};

/** One-line qualifier in the waitlist band: first focus named as focus, not as the limit of the market. */
export const FOR_WHOM_LINE = "Für Solo-Founder, Teams und Organisationen. Zum Start besonders Beratungen.";
