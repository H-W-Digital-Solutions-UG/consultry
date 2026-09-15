import type { PageContent } from "./types";
import { STATS } from "./shared";

export const corpus: PageContent = {
  variant: "corpus",
  meta: {
    title: "Consultry: euer Firmenwissen, vom ersten Dokument an nutzbar",
    description: "Vorhandene Unterlagen, Analysen und KI-Ergebnisse werden zur Grundlage weiterer Arbeit. Quellen, Eignung und offene Fragen bleiben sichtbar.",
  },
  hero: {
    title: "Vom ersten Dokument an nutzbar.",
    lede: "Eure Vorarbeit trägt die nächste Aufgabe.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Wissen einbringen darf kein neues Projekt werden.",
    lede: "Verträge, Notizen und Analysen sind schon da. Sie sollen helfen, ohne dass ihr erst alles von Hand ordnet.",
    stats: [STATS.gartner47, STATS.atlassian50],
  },
  how: {
    title: "Vorhandene Unterlagen tragen die nächste Aufgabe.",
    lede: "Im Beispiel entsteht aus Vertrag und früherem Angebot ein Gesprächsbriefing.",
    sequence: true,
    steps: [
      { icon: "corpus-1", title: "Mit vorhandener Arbeit starten", text: "Ein Vertrag, eine Analyse oder ein KI-Ergebnis kann den Ausgangspunkt liefern." },
      { icon: "corpus-2", title: "Passende Vorarbeit verbinden", text: "Frühere Ergebnisse und erprobte Vorgehensweisen helfen auf unterschiedliche Weise weiter." },
      { icon: "corpus-3", title: "Lücken sichtbar halten", text: "Was noch fehlt und wofür Vorarbeit geeignet ist, gehört zur nächsten Aufgabe dazu." },
    ],
  },
  boundaries: {
    title: "Was wir versprechen, und was nicht.",
    items: [
      { claim: "Unvollständig starten ist erlaubt. Lücken werden angezeigt.", limit: "Was nicht geladen ist, wird nicht erraten." },
      { claim: "Dokumente, Arbeitsergebnisse und wiederverwendbare Bausteine bleiben unterscheidbar.", limit: "Ob Vorarbeit passt, hängt von Quellen, Anforderungen und Rechten ab." },
      { claim: "Vorhandene Systeme und deren Rechte bleiben der Bezugspunkt.", limit: "Kein Ersatz für DMS, CRM oder ERP. Erste Quellen klären wir in der Erprobung." },
    ],
  },
  band: {
    title: "Vorhandene Arbeit. Ein guter Anfang.",
    text: "Trag dich ein, wenn ihr eure Unterlagen als Grundlage weiterer Arbeit erproben möchtet.",
  },
};
