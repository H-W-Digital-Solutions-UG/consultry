import type { PageContent } from "./types";
import { STATS } from "./shared";

export const ledger: PageContent = {
  variant: "ledger",
  meta: {
    title: "Consultry: Agentenschwärme. Einfach koordinieren.",
    description: "Wenn ein Auftrag mehrere Perspektiven braucht, verbindet Consultry die Beiträge am Ergebnis. Mit gemeinsamen Grundlagen und nachvollziehbarem Arbeitsstand. Zur Erprobung vormerken.",
  },
  hero: {
    title: "Agentenschwärme.",
    titleEnd: "Einfach koordinieren.",
    lede: "Ein Auftrag. Abgestimmte Beiträge. Du behältst den Überblick.",
    cta: "Am Auftrag erproben",
    secondary: "Beispiel erleben",
  },
  problem: {
    title: "Alle arbeiten. Du sortierst.",
    lede: "Recherche, Analyse, Entwurf: drei Ergebnisse, die du selbst abgleichen musst. Du wolltest Arbeit abgeben, nicht noch mehr koordinieren.",
    stats: [STATS.bcg40, STATS.spi27],
  },
  how: {
    title: "Zusammen wird Arbeit draus.",
    lede: "Im Beispiel bringen drei Agenten ihre Beiträge und Einwände in einen Entwurf ein. Offene Fragen bleiben sichtbar.",
    sequence: true,
    steps: [
      { icon: "ledger-1", title: "Ein Auftrag", text: "Gemeinsames Ziel und Arbeitsstand. Jede Identität behält ihre Zugriffsgrenzen." },
      { icon: "ledger-2", title: "Beiträge verbinden", text: "Ergebnisse, Quellen und Einwände am Auftrag abgleichen." },
      { icon: "ledger-3", title: "Den Faden behalten", text: "Entscheidungen und offene Fragen in die nächste Aufgabe mitnehmen." },
    ],
  },
  boundaries: {
    title: "Was gilt. Was offen bleibt.",
    items: [
      { claim: "Zusätzliche Agenten dort, wo sie der Aufgabe helfen.", limit: "Nicht jeder Auftrag braucht einen Schwarm. Mehr Agenten bedeuten nicht automatisch bessere oder günstigere Ergebnisse." },
      { claim: "Unterschiedliche Beiträge werden am Ziel abgeglichen.", limit: "Einigkeit beweist keine Richtigkeit. Gleiche Quellen sind keine unabhängigen Belege; die fachliche Verantwortung bleibt beim Menschen." },
      { claim: "Der Arbeitsstand bleibt mit seiner Entstehung verbunden.", limit: "Was für einen Auftrag passt, gilt nicht automatisch überall. Die Übernahme ins gemeinsame Wissen braucht eine passende Prüfung." },
    ],
  },
  band: {
    title: "Weniger zusammenpuzzeln.",
    text: "Erprobe Agentenarbeit an deinem Auftrag. Melde dich für eine der nächsten Runden an.",
  },
};
