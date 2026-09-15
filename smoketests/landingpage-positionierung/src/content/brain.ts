import type { PageContent } from "./types";
import { STATS } from "./shared";

export const brain: PageContent = {
  variant: "brain",
  meta: {
    title: "Consultry: das Firmengedächtnis, das mitarbeitet",
    description: "Kunden, Angebote, Projekte und Entscheidungen als verbundene Fakten, jede mit Datum und Quelle.",
  },
  hero: {
    title: "Das Wissen der ganzen Firma arbeitet mit.",
    lede: "Verbundene Fakten. Mit Datum und Quelle.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Erfahrung liegt im Archiv, nicht im nächsten Projekt.",
    lede: "Die dritte S/4HANA-Migration, und noch immer keine Blaupause im Haus. Gelerntes landet in Ordnern, statt das nächste Projekt schneller zu machen.",
    stats: [STATS.gartner47, STATS.atlassian50],
  },
  how: {
    title: "Fakten statt Dateien.",
    sequence: false,
    steps: [
      { icon: "brain-1", title: "Verbundene Fakten", text: "Aus Dokumenten werden Fakten mit Bezug: wer, was, seit wann, woher." },
      { icon: "brain-2", title: "Jeder Fakt hat ein Datum", text: "Löst ein neues Handbuch das alte ab, weiß das System es zuerst." },
      { icon: "brain-3", title: "Erst geprüft, dann Firmenwissen", text: "Neues Wissen wird freigegeben, bevor es zählt." },
    ],
  },
  boundaries: {
    title: "Was das Firmengedächtnis ist, und was nicht.",
    items: [
      { claim: "Jede Aussage hat eine Quelle oder ist als offene Frage markiert.", limit: "Kein Anspruch auf absolute Wahrheit. Eine Freigabe gilt für Zweck, Zeit und Quelle." },
      { claim: "Wir modellieren, was eure Firma kann: Methoden, Präzedenzfälle, Belege, Projekthistorie.", limit: "Kein zweites Intranet, das nur beschreibt, wer ihr seid." },
      { claim: "Änderungen an Begriffen, Methoden und Vorlagen bekommen eine Version und treffen betroffene Arbeit gezielt.", limit: "Keine automatische Neuschreibung. Eine geänderte Grundlage erzeugt Prüfbedarf, keine stille Korrektur." },
    ],
  },
  band: {
    title: "Verbundene Fakten mit Datum und Quelle.",
    text: "Wir bauen den ersten Produktpfad mit echten Teams. Trag dich ein, wenn ihr beim nächsten Erprobungsschritt dabei sein wollt.",
  },
};
