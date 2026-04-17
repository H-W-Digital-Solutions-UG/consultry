import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
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
    <LegalPageTemplate
      currentDocumentHref="/agb"
      lastUpdated="April 2026"
      overline="RECHTLICHES"
      sections={[
        {
          title: "1. Vorläufiger Stand",
          body: "Diese Seite bildet die Struktur der Allgemeinen Geschäftsbedingungen für die Consultry Marketing-Website und produktnahe Pilotangebote ab.",
        },
        {
          title: "2. Geltung bis zum Launch",
          body: "Bis zur finalen Veröffentlichung der AGB gelten für Pilotprojekte, Workshops und Produktvorschauen die jeweils individuell vereinbarten Angebotsunterlagen und Projektvereinbarungen.",
        },
        {
          title: "3. Finale Regelungsbereiche",
          body: "Die veröffentlichte AGB-Fassung wird Leistungsumfang, Nutzungsrechte, Haftung, Supportbedingungen und vertragsrelevante Rahmenbedingungen für die Consultry-Plattform konkret regeln.",
        },
      ]}
      title="Allgemeine Geschäftsbedingungen"
    />
  );
}
