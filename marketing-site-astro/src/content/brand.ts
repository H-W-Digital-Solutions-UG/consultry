import type { PageContent } from "./types";
import { STATS } from "./shared";

export const brand: PageContent = {
  variant: "brand",
  meta: {
    title: "Consultry: jede Unterlage in eurer Sprache, eurer Vorlage, eurer Freigabe",
    description: "Ergebnisse sollen zu eurem Wissen, eurer Sprache und euren Vorlagen passen. Fachlicher Stand und Freigabe bleiben getrennt sichtbar.",
  },
  hero: {
    title: "Eure Sprache. Eure Vorlagen. Eure Freigaben.",
    lede: "Inhalt und Sprache passen zu eurer Organisation.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Das Ergebnis steht. Die Nacharbeit beginnt.",
    lede: "Ein KI-Ergebnis hilft erst, wenn es fachlich stimmt und zu euch passt.",
    stats: [STATS.sixsense80, STATS.bcg40],
  },
  how: {
    title: "Inhalt, Sprache und Freigabe. Getrennt geprüft.",
    lede: "Im Beispiel wird eine Steering-Folie mit aktueller Grundlage und Kundensprache überarbeitet.",
    sequence: false,
    steps: [
      { icon: "brand-1", title: "Wissen", text: "Ist die Fassung aktuell und belegt?" },
      { icon: "brand-2", title: "Marke und Design", text: "Folgt sie euren Begriffen und Vorlagen?" },
      { icon: "brand-3", title: "Freigabe", text: "Darf sie so nach außen?" },
    ],
  },
  boundaries: {
    title: "Was Corporate Alignment leistet, und was nicht.",
    items: [
      { claim: "Drei Blickwinkel, getrennt sichtbar, mit offenen Punkten.", limit: "Kein Gesamt-Score, keine Ampel. Design belegt keine Richtigkeit." },
      { claim: "Aktuelle Begriffe, Vorlagen und belegte Aussagen bilden die Grundlage neuer Entwürfe.", limit: "Freigabe einer Unterlage und Erlaubnis zur Weitergabe bleiben getrennt." },
      { claim: "Inhalt, Sprache und Gestaltung gehören bei neuen und weiterbearbeiteten Unterlagen zusammen.", limit: "Ein passender Auftritt ersetzt keine fachliche Prüfung." },
    ],
  },
  band: {
    title: "Ergebnisse, die zu euch passen.",
    text: "Trag dich ein, wenn ihr weniger Nacharbeit an Inhalt, Sprache und Vorlagen erproben möchtet.",
  },
};
