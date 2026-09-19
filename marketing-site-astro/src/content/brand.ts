import type { PageContent } from "./types";
import { STATS } from "./shared";

export const brand: PageContent = {
  variant: "brand",
  meta: {
    title: "Consultry: Dein Stil. Im ersten Entwurf.",
    description: "Weniger Nacharbeit an KI-Entwürfen: Consultry bringt Wissen, Sprache und Vorlagen in die Erstellung. Erprobe den Ansatz an einer echten Unterlage.",
  },
  hero: {
    title: "Dein Stil.",
    titleEnd: "Im ersten Entwurf.",
    lede: "Angebote und Folien aus deinem Wissen. In deinen Vorlagen.",
    cta: "Mit Unterlagen erproben",
    secondary: "Beispiel erleben",
  },
  problem: {
    title: "Fertig? Jetzt bist du dran.",
    lede: "Die KI meldet: erledigt. Du korrigierst Zahlen, ersetzt Begriffe und baust Folien um. So war die Entlastung nicht gedacht.",
    stats: [STATS.sixsense80, STATS.bcg40],
  },
  how: {
    title: "Vom Gespräch zum Angebot.",
    lede: "Deine Notizen, deine Vorlage. Wähle den Umfang und passe den Angebotsentwurf an.",
    sequence: false,
    steps: [
      { icon: "brand-1", title: "Auf Wissen bauen", text: "Aussagen und Zahlen an vorhandenen Grundlagen ausrichten." },
      { icon: "brand-2", title: "Klinge nach dir. Nicht nach KI.", text: "Dein Ton, deine Begriffe, deine Vorlagen." },
      { icon: "brand-3", title: "Weiterarbeiten", text: "Bearbeitbare Unterlagen mit sichtbaren offenen Punkten." },
    ],
  },
  boundaries: {
    title: "Was gilt. Was offen bleibt.",
    items: [
      { claim: "Arbeit, die nach euch aussieht. Und sich weiterverwenden lässt.", limit: "Ein stimmiger Auftritt allein belegt keine fachliche Richtigkeit. Offene Punkte gehören zum Ergebnis." },
      { claim: "Wissen, Begriffe und Vorlagen fließen in den Entwurf ein.", limit: "Welche Grundlagen gelten, muss erkennbar sein. Die Freigabe einer Unterlage erlaubt nicht automatisch jede Weitergabe." },
      { claim: "Auch die Weiterbearbeitung soll leichter werden.", limit: "Die benötigten Formate und Prüfkriterien klären wir an echter Arbeit. Ein Entwurf ist nicht automatisch kundenfertig." },
    ],
  },
  band: {
    title: "Dein nächster Entwurf?",
    text: "Lass uns testen, wie viel Nacharbeit bleibt.",
  },
};
