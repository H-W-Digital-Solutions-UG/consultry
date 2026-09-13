import type { PageContent } from "./types";
import { STATS } from "./shared";

export const corpus: PageContent = {
  variant: "corpus",
  meta: {
    title: "Consultry: euer Firmenwissen, vom ersten Dokument an nutzbar",
    description: "Firmenwissen beginnt im Kickoff mit einem Vertrag und wächst Woche für Woche. Jede Stufe liefert Nutzen, Lücken bleiben sichtbar.",
  },
  hero: {
    title: "Vom ersten Dokument an nutzbar.",
    lede: "Euer Firmenwissen beginnt im Kickoff mit einem Vertrag und wächst Woche für Woche. Lücken werden angezeigt, nicht erraten.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "„Ladet erst mal fünfzig Angebote hoch.“",
    lede: "Der Satz, an dem Piloten in Woche eins kippen. Das beste Firmenwissen nützt nichts, wenn es als Hausaufgabe beginnt.",
    stats: [STATS.gartner47, STATS.atlassian50],
  },
  how: {
    title: "Jede Stufe liefert eigenen Wert.",
    lede: "Drag-and-drop, Bulk-Upload, Mail-Weiterleitung oder read-only-Anbindung. Dokumente werden erkannt und einsortiert, niemand füllt ein Schema.",
    sequence: true,
    steps: [
      { icon: "corpus-1", title: "Kickoff: ein Vertrag", text: "Ein Dokument, sofort ein Ergebnis: Fristen, Optionen, nächste Chance." },
      { icon: "corpus-2", title: "Woche 1: Verträge und Angebote", text: "Wiederverwendbare Bausteine aus dem, was schon gewonnen hat." },
      { icon: "corpus-3", title: "Ab Woche 2: Referenzen und Profile", text: "Eignung für Ausschreibungen und Teamplanung, danach der Rest per read-only-Anbindung." },
    ],
    kpis: [
      { value: "1", label: "Dokument genügt für den Start", kind: "Regel" },
      { value: "< 15 min", label: "vom Kickoff bis zum ersten Ergebnis", kind: "Ziel" },
      { value: "4", label: "Stufen bis zum vollen Firmenwissen, jede mit eigenem Nutzen", kind: "Regel" },
    ],
  },
  boundaries: {
    title: "Was wir versprechen, und was nicht.",
    items: [
      { claim: "Unvollständig starten ist erlaubt. Lücken werden angezeigt.", limit: "Keine Vollständigkeitsgarantie. Was nicht geladen ist, wird nicht erraten." },
      { claim: "Freigabe eines Dokuments, Übernahme ins Firmenwissen und Freigabe als Baustein sind drei getrennte Schritte.", limit: "Kein automatisches Lernen aus jedem Dokument. Kundengrenzen und Rechte bleiben." },
      { claim: "Read-only-Anbindung eurer Quellen, tenant-isoliert, kein Training auf geteiltem Speicher.", limit: "Consultry ersetzt weder DMS noch CRM oder ERP. Die führenden Systeme bleiben führend." },
    ],
  },
  band: {
    title: "Der erste Wert kommt aus einem Dokument, nicht aus fünfzig.",
    text: "Trag dich ein, wir melden uns mit dem nächsten Termin.",
  },
};
