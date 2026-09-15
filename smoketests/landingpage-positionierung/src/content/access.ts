import type { PageContent } from "./types";
import { STATS } from "./shared";

export const access: PageContent = {
  variant: "access",
  meta: {
    title: "Consultry: Berechtigungen gelten für Agenten wie für Menschen",
    description: "Läuft in eurem Tenant, mit euren Rechten. Quellen werden beim Abruf gefiltert, nicht im Prompt.",
  },
  hero: {
    title: "Berechtigungen gelten für Agenten wie für Menschen.",
    lede: "Euer Tenant. Eure Rechte. Auch für Agenten.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
    h1MaxCh: 14,
  },
  problem: {
    title: "KI bleibt vor der Tür, solange der Zugriff ungeklärt ist.",
    lede: "Kundendaten dürfen nicht in frei zugängliche KI-Werkzeuge. Wer den sicheren Weg zuerst anbietet, besetzt die Kategorie.",
    stats: [STATS.bitkom77, STATS.coreview66],
  },
  how: {
    title: "Kein Weg, keine Verarbeitung.",
    sequence: false,
    steps: [
      { icon: "access-1", title: "Rechte gelten beim Abruf", text: "Quellen werden gefiltert, bevor sie im Kontext landen." },
      { icon: "access-2", title: "Ein Paket je Lauf", text: "Quellen, Rechte und Werkzeuge sind klar begrenzt." },
      { icon: "access-3", title: "Freigegebene Wege", text: "Sensibles bleibt lokal, wird minimiert oder blockiert." },
    ],
  },
  boundaries: {
    title: "Was wir zusagen, und was nicht.",
    items: [
      { claim: "Ein dokumentierter, je Kunde freigegebener Daten- und Modellweg. Bestehende Verträge bleiben nutzbar.", limit: "Keine pauschale Konformitätszusage. Konfiguration und Vertragskette bleiben Teil der Einführung." },
      { claim: "Erkennung sensibler Daten mehrschichtig und lokal, im Zweifel gesperrt.", limit: "Kein Versprechen, hundert Prozent aller personenbezogenen Daten zu finden. Unklares verlässt die Grenze nicht." },
      { claim: "Der Agent erbt den Lesebereich seines Auftraggebers und schlägt Ergebnisse vor.", limit: "Kein Agent schreibt direkt in führende Systeme oder erzeugt ohne menschliche Freigabe verbindliche Unterlagen." },
    ],
  },
  band: {
    title: "Der sichere Weg zuerst.",
    text: "Wir bauen den Weg, der in eurem Tenant bleibt. Trag dich ein, wir melden uns mit dem nächsten Erprobungstermin.",
  },
};
