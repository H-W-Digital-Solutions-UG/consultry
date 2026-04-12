import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Datenschutz",
    description: "Vorläufige Datenschutzhinweise für die Consultry Marketing-Website.",
    path: "/datenschutz",
  });
}

export default function DatenschutzPage() {
  return (
    <StaticContentPage
      intro="Consultry entwickelt die Plattform für DACH-Beratungen mit EU-Hosting und Privacy-by-Design als Standard."
      overline="RECHTLICHES"
      paragraphs={[
        "Diese Seite beschreibt vorläufig die Datenschutzgrundsätze der Marketing-Website und wird für den Launch noch um die vollständige rechtliche Fassung ergänzt.",
        "Wir verarbeiten personenbezogene Daten nur im Rahmen der Bereitstellung der Website, der Kommunikation mit Interessenten und der Verwaltung von Pilotanfragen.",
        "Produkt- und Marketingdaten sollen innerhalb der EU verarbeitet werden. Die finale Datenschutzerklärung wird die eingesetzten Dienste, Speicherfristen und Betroffenenrechte konkret benennen.",
      ]}
      title="Datenschutz"
    />
  );
}
