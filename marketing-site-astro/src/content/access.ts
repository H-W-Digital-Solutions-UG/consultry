import type { PageContent } from "./types";
import { STATS } from "./shared";

export const access: PageContent = {
  variant: "access",
  meta: {
    title: "Consultry: Berechtigungen gelten für Agenten wie für Menschen",
    description: "KI soll innerhalb vereinbarter Befugnisse arbeiten. Grundschutz gehört zum Kern; zusätzliche Isolation und Betriebsoptionen werden passend zum Einsatz entwickelt.",
  },
  hero: {
    title: "Berechtigungen gelten für Agenten wie für Menschen.",
    lede: "KI arbeiten lassen. Im vereinbarten Rahmen.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
    h1MaxCh: 14,
  },
  problem: {
    title: "KI soll weiterarbeiten können. Mit klaren Befugnissen.",
    lede: "Ein Auftrag braucht einen Rahmen: Daten, Werkzeuge, Wirkungen. Darin soll nicht jeder Schritt neu freigegeben werden.",
    stats: [STATS.bitkom77, STATS.coreview66],
  },
  how: {
    title: "Der Agent arbeitet mit den Rechten des Consultants.",
    lede: "Im Beispiel bereitet er Teamaufwand und Kostenrahmen vor. Exakte Tagessätze bleiben gesperrt.",
    sequence: false,
    steps: [
      { icon: "access-1", title: "Den Auftrag begrenzen", text: "Quellen, Werkzeuge und erlaubte Wirkungen gehören zur Aufgabe." },
      { icon: "access-2", title: "Autonomie ermöglichen", text: "Im vorab vereinbarten Rahmen kann der Agent eigenständig weiterarbeiten." },
      { icon: "access-3", title: "Grenzen wirksam halten", text: "Rechte für Lesen, Schreiben, Löschen und Weitergabe sollen außerhalb des Prompts geprüft werden." },
    ],
  },
  boundaries: {
    title: "Was wir zusagen, und was nicht.",
    items: [
      { claim: "Autonomie innerhalb vorher vereinbarter Befugnisse.", limit: "Eine allgemeine Agentenfreigabe erweitert keine Organisationsregeln." },
      { claim: "Grundschutz gehört zum Kern, auch für kleine Teams.", limit: "Rechte gelten am Zugriff selbst. Ein Prompt ersetzt diese Kontrolle nicht." },
      { claim: "Betriebsweg und zusätzliche Isolation passend zum Einsatz.", limit: "Privates Modell und Hosting sind Optionen. Betrieb und Verträge sind noch offen." },
    ],
  },
  band: {
    title: "KI arbeiten lassen. Mit klaren Befugnissen.",
    text: "Wir erproben selbstständige KI-Arbeit innerhalb vereinbarter Grenzen. Trag dich für die nächste Runde ein.",
  },
};
