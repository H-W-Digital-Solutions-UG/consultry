import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "AGB",
    description: "Vorläufige Allgemeine Geschäftsbedingungen der Consultry Marketing-Website.",
    path: "/agb",
  });
}

export default function AgbPage() {
  return (
    <StaticContentPage
      intro="Die finalen AGB werden vor dem öffentlichen Launch der Website ergänzt."
      overline="RECHTLICHES"
      paragraphs={[
        "Diese Seite ist ein vorläufiger Platzhalter für die Allgemeinen Geschäftsbedingungen von Consultry.",
        "Bis zur Finalisierung gelten individuelle Vereinbarungen und Angebotsunterlagen für Pilotprojekte, Workshops und Produktdemos.",
        "Die veröffentlichte AGB-Fassung wird Leistungsumfang, Nutzungsrechte, Haftung und Supportbedingungen für die Consultry-Plattform konkret regeln.",
      ]}
      title="Allgemeine Geschäftsbedingungen"
    />
  );
}
