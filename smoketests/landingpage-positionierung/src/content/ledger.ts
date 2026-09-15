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
    lede: "Wissen bleibt. Über einzelne Läufe hinaus.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Ein neuer Lauf sollte kein Neustart sein.",
    lede: "Wenn Menschen und Agenten mit verschiedenen Annahmen weiterarbeiten, gehen geklärte Fragen wieder auf. Es braucht einen gemeinsamen Stand, der festhält, was vereinbart wurde, worauf es beruht und was noch offen ist.",
    stats: [STATS.bcg40, STATS.spi27],
  },
  how: {
    title: "Wissen festhalten. Gemeinsam weiterarbeiten.",
    sequence: true,
    steps: [
      { icon: "ledger-1", title: "Gemeinsame Ausgangsbasis", text: "Die Aufgabe referenziert einen versionierten Wissensstand. Menschen und Agenten nutzen ihren jeweils erlaubten Ausschnitt." },
      { icon: "ledger-2", title: "Beiträge abgleichen", text: "Quellen, Beiträge und Gegenbelege werden zusammengeführt. Was als Arbeitsstand gilt und was offen bleibt, wird festgehalten." },
      { icon: "ledger-3", title: "Darauf weiterarbeiten", text: "Der nächste Lauf knüpft an den angenommenen Stand an. Frühere Grundlagen bleiben sichtbar; geeignete Erkenntnisse fließen geprüft ins Firmenwissen." },
    ],
  },
  boundaries: {
    title: "Was der gemeinsame Stand leistet, und was nicht.",
    items: [
      { claim: "Agenten stimmen sich auf einen Arbeitsstand für ihre Aufgabe ab. Widersprüche bleiben darin sichtbar.", limit: "Konsens ist kein Wahrheitsbeleg. Mehrere Beiträge mit derselben Quelle werden nicht zu unabhängigen Belegen." },
      { claim: "Beiträge, Revisionen und angenommene Arbeitsstände werden festgehalten. Frühere Grundlagen bleiben nachvollziehbar.", limit: "Das Festhalten eines Beitrags ist keine geschäftliche Freigabe. Bindende Zusagen verantworten Menschen." },
      { claim: "Geeignete Erkenntnisse werden mit dem Firmenwissen verknüpft, damit Folgeaufgaben darauf aufbauen können.", limit: "Die Übernahme braucht Prüfung. Zweck und Rechte gelten weiter; ein Task-Stand gilt nicht automatisch im ganzen Unternehmen." },
    ],
  },
  band: {
    title: "Gemeinsam weiter. Auf nachvollziehbarer Grundlage.",
    text: "Trag dich ein, wir melden uns mit dem nächsten Termin.",
  },
};
