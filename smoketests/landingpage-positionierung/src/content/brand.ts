import type { PageContent } from "./types";
import { STATS } from "./shared";

export const brand: PageContent = {
  variant: "brand",
  meta: {
    title: "Consultry: jede Unterlage in eurer Sprache, eurer Vorlage, eurer Freigabe",
    description: "Jede Kundenunterlage wird aus drei Blickwinkeln geprüft: Wissen, Marke und Design, Freigabe. Getrennt sichtbar, ohne Gesamt-Score.",
  },
  hero: {
    title: "Eure Sprache. Eure Vorlagen. Eure Freigaben.",
    lede: "Consultry kennt eure Begriffe, Vorlagen und Freigaben und prüft jede Unterlage aus drei Blickwinkeln.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Ein richtiges Ergebnis im falschen Kleid kostet trotzdem Vertrauen.",
    lede: "Beratung bleibt ein Beziehungsgeschäft. Der professionelle Auftritt ist die dritte Stufe des Vertrauens, nach Beziehung und Vertraulichkeit.",
    stats: [STATS.sixsense80, STATS.bcg40],
  },
  how: {
    title: "Drei Blickwinkel auf jede neue Fassung.",
    sequence: false,
    steps: [
      { icon: "brand-1", title: "Wissen", text: "Ist die Fassung aktuell und belegt?" },
      { icon: "brand-2", title: "Marke und Design", text: "Folgt sie euren Begriffen und Vorlagen?" },
      { icon: "brand-3", title: "Freigabe", text: "Darf sie so nach außen?" },
    ],
    kpis: [
      { value: "3", label: "Blickwinkel je Unterlage, getrennt sichtbar", kind: "Regel" },
      { value: "0", label: "Gesamt-Score, keine Ampel", kind: "Regel" },
      { value: "1", label: "Person entscheidet über die Verwendung", kind: "Regel" },
    ],
  },
  boundaries: {
    title: "Was Corporate Alignment leistet, und was nicht.",
    items: [
      { claim: "Drei Blickwinkel, getrennt sichtbar, mit offenen Punkten.", limit: "Kein Gesamt-Score, keine Ampel. Ein korrektes Design belegt keine fachliche Richtigkeit." },
      { claim: "Abgelöste Begriffe und Bausteine fließen nicht in neue Entwürfe, sobald eine neue Fassung freigegeben ist.", limit: "Keine autonome Versendung, kein stilles Überschreiben. Ein Mensch entscheidet über Fassung und Verwendung." },
      { claim: "Gilt für erzeugte und synchronisierte Unterlagen gleichermaßen.", limit: "Kein CMS, kein Publishing-Modul. Consultry macht die Unterlage richtig; den Kanal wählt ihr." },
    ],
  },
  band: {
    title: "Unterlagen, die von Anfang an nach eurem Haus aussehen.",
    text: "Wenn ihr Angebote und Steering-Unterlagen heute noch von Hand gegen Vorlagen, Begriffe und Freigaben prüft, trag dich ein.",
  },
};
