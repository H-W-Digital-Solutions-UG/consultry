import type { PageContent } from "./types";
import { STATS } from "./shared";

export const ledger: PageContent = {
  variant: "ledger",
  meta: {
    title: "Consultry: Viele Agenten. Ein gemeinsamer Stand.",
    description: "Das Wissensledger verbindet Beiträge, Quellen und vereinbarte Arbeitsstände. Menschen und Agenten arbeiten weiter, während Widersprüche und frühere Grundlagen sichtbar bleiben.",
  },
  hero: {
    title: "Viele Agenten. Ein gemeinsamer Stand.",
    lede: "Der nächste Agent knüpft an euren Arbeitsstand an.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Ein neuer Lauf sollte kein Neustart sein.",
    lede: "Mehrere Agenten, ein Projekt. Entscheidungen sollen bleiben, damit niemand wieder von vorn erklärt.",
    stats: [STATS.bcg40, STATS.spi27],
  },
  how: {
    title: "Aus vier Beiträgen wird ein Arbeitsstand.",
    lede: "Im Beispiel überarbeiten Delivery, Daten und Risiko einen Cutover-Plan von Stand 07 auf 08.",
    sequence: true,
    steps: [
      { icon: "ledger-1", title: "Gemeinsame Ausgangsbasis", text: "Die Aufgabe knüpft an den bisherigen Arbeitsstand an. Menschen und Agenten nutzen ihren jeweils erlaubten Ausschnitt." },
      { icon: "ledger-2", title: "Beiträge abgleichen", text: "Quellen, Beiträge und Gegenbelege werden zusammengeführt. Was als Arbeitsstand gilt und was offen bleibt, wird festgehalten." },
      { icon: "ledger-3", title: "Darauf weiterarbeiten", text: "Der nächste Lauf knüpft an den angenommenen Stand an. Frühere Grundlagen bleiben sichtbar; geeignete Erkenntnisse fließen geprüft ins Firmenwissen." },
    ],
  },
  boundaries: {
    title: "Was der gemeinsame Stand leistet, und was nicht.",
    items: [
      { claim: "Agenten stimmen sich auf einen Arbeitsstand für ihre Aufgabe ab. Widersprüche bleiben darin sichtbar.", limit: "Konsens ist kein Wahrheitsbeleg. Gleiche Quelle, kein zweiter Beleg." },
      { claim: "Beiträge, Revisionen und angenommene Arbeitsstände werden festgehalten. Frühere Grundlagen bleiben nachvollziehbar.", limit: "Festhalten ist keine Freigabe. Zusagen verantworten Menschen." },
      { claim: "Geeignete Erkenntnisse werden mit dem Firmenwissen verknüpft, damit Folgeaufgaben darauf aufbauen können.", limit: "Übernahme braucht Prüfung. Ein Task-Stand gilt nicht automatisch überall." },
    ],
  },
  band: {
    title: "Weiterarbeiten, ohne alles neu zu erklären.",
    text: "Trag dich ein, wenn ihr gemeinsame Arbeitsstände über Aufgaben und Agenten hinweg erproben möchtet.",
  },
};
