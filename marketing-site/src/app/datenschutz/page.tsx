import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
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
    <LegalPageTemplate
      lastUpdated="April 2026"
      overline="RECHTLICHES"
      sections={[
        {
          title: "1. Datenschutzgrundsatz",
          body: "Consultry entwickelt die Plattform für DACH-Beratungen mit EU-Hosting und Privacy-by-Design als Standard. Diese Seite beschreibt den vorläufigen rechtlichen Rahmen für die Marketing-Website.",
        },
        {
          title: "2. Zweck der Verarbeitung",
          body: "Personenbezogene Daten werden aktuell nur im Rahmen der Bereitstellung der Website, der Kommunikation mit Interessenten und der Verwaltung von Pilotanfragen verarbeitet.",
        },
        {
          title: "3. Finale Erklärung zum Launch",
          body: "Die finale Datenschutzerklärung wird eingesetzte Dienste, Speicherfristen, Rechtsgrundlagen und Betroffenenrechte vollständig ausweisen.",
        },
      ]}
      title="Datenschutz"
    />
  );
}
