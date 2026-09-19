import type { PageContent } from "./types";
import { STATS } from "./shared";

export const access: PageContent = {
  variant: "access",
  meta: {
    title: "Consultry: Freiraum für KI. Kontrolle für dich.",
    description: "KI selbstständig arbeiten lassen, mit klaren Befugnissen für Daten, Werkzeuge und Aktionen. Grundschutz gehört zum Kern. Jetzt für die Erprobung vormerken.",
  },
  hero: {
    title: "Freiraum für KI.",
    titleEnd: "Kontrolle für dich.",
    lede: "Klare Rechte für Daten und Aktionen. Statt blind „Alles erlauben“.",
    cta: "KI-Arbeit erproben",
    secondary: "Beispiel erleben",
  },
  problem: {
    title: "Lesen dürfen. Löschen nicht.",
    lede: "Du gibst eine Aufgabe ab, nicht den Generalschlüssel. Was dein Agent darf, muss beim Zugriff geprüft werden.",
    stats: [STATS.bitkom77, STATS.coreview66],
  },
  how: {
    title: "Wo ist die Grenze?",
    lede: "Ein Dokument lesen heißt nicht, es löschen zu dürfen. Das Beispiel zeigt getrennte Rechte für jede Aktion.",
    sequence: false,
    steps: [
      { icon: "access-1", title: "Rechte vergeben", text: "Welche Daten darf der Agent nutzen, was verändern?" },
      { icon: "access-2", title: "Wege offenlassen", text: "Innerhalb seiner Befugnisse wählt der Agent seinen Weg." },
      { icon: "access-3", title: "Zugriffe prüfen", text: "Lesen, Schreiben, Löschen und Weitergeben getrennt kontrollieren." },
    ],
  },
  boundaries: {
    title: "Was gilt. Was offen bleibt.",
    items: [
      { claim: "Grundschutz gehört zum Kern. Nicht nur zum Enterprise-Paket.", limit: "Auch ein „Alles erlauben“ darf Organisationsregeln nicht erweitern. Der Auftrag und die delegierten Befugnisse begrenzen, was ein Agent darf." },
      { claim: "Rechte werden je Aktion und Ressource geprüft.", limit: "Ein Prompt oder ein Protokoll ersetzt diese Kontrolle nicht. Die Durchsetzung muss für jede angebundene Integration geprüft werden." },
      { claim: "Die passende KI für deine Aufgabe. Auf einem Datenweg, den ihr verantworten könnt.", limit: "Zusätzliche Isolation, private Modelle und Hosting sind optionale Angebotsrichtungen. Architektur und konkrete Verfügbarkeit sind noch offen." },
    ],
  },
  band: {
    title: "Was würdest du abgeben?",
    text: "Bring Aufgabe und Zugriffsgrenzen mit.",
  },
};
