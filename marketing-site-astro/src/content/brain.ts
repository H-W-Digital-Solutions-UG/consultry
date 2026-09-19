import type { PageContent } from "./types";
import { STATS } from "./shared";

export const brain: PageContent = {
  variant: "brain",
  meta: {
    title: "Consultry: Einmal erarbeitet. Weiter genutzt.",
    description: "Mach vorhandene Unterlagen für die nächste Aufgabe nutzbar. Consultry verbindet Vorarbeit mit Quellen, Entscheidungen und ihrem Stand. Jetzt für die Erprobung vormerken.",
  },
  hero: {
    title: "Einmal erarbeitet.",
    titleEnd: "Weiter genutzt.",
    lede: "Deine KI knüpft an Vorarbeit an. Quellen und Änderungen bleiben sichtbar.",
    cta: "Mit Vorarbeit erproben",
    secondary: "Beispiel erleben",
  },
  problem: {
    title: "Gefunden. Noch gültig?",
    lede: "Die Analyse liegt vor. Doch seitdem hat sich etwas geändert. Du brauchst den Zusammenhang, nicht nur die Datei.",
    stats: [STATS.gartner47, STATS.atlassian50],
  },
  how: {
    title: "Was hat sich geändert?",
    lede: "Was kannst du übernehmen? Was musst du neu prüfen? Das Beispiel zeigt veränderte Quellen und betroffene Ergebnisse.",
    sequence: false,
    steps: [
      { icon: "brain-1", title: "Wissen mitbringen", text: "Unterlagen, Quellen und ihr Zusammenhang bilden den Einstieg." },
      { icon: "brain-2", title: "Änderungen erkennen", text: "Neue Fassungen zeigen, welche Grundlagen du erneut prüfen solltest." },
      { icon: "brain-3", title: "Darauf aufbauen", text: "Die nächste Aufgabe nutzt passende Vorarbeit, mit Quellen und Annahmen." },
    ],
  },
  boundaries: {
    title: "Was gilt. Was offen bleibt.",
    items: [
      { claim: "Du musst nicht erst das ganze Wissensarchiv aufräumen.", limit: "Für die Erprobung wählen wir passende Unterlagen und Quellen. Verfügbare Anbindungen klären wir gemeinsam; Consultry ersetzt kein DMS, CRM oder ERP." },
      { claim: "Vorarbeit bleibt mit ihren Grundlagen verbunden.", limit: "Auch abgeleitete Inhalte unterliegen Zugriffsregeln. Gemeinsame Arbeit macht gesperrte Quellen nicht frei." },
      { claim: "Neue Fassungen und Widersprüche werden einordenbar.", limit: "Eine Verknüpfung beweist keine Richtigkeit. Quelle, Zeitpunkt und offene Annahmen bleiben entscheidend." },
      { claim: "Was du schon erarbeitet hast, kann die nächste Aufgabe erleichtern.", limit: "Ob die Vorarbeit noch passt, muss für die konkrete Aufgabe beurteilt werden. Fachliche Verantwortung bleibt beim Menschen." },
    ],
  },
  band: {
    title: "Da geht noch was.",
    text: "Lass uns mehr aus deiner Vorarbeit machen.",
  },
};
