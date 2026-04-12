import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Impressum",
    description: "Impressum der Consultry Marketing-Website.",
    path: "/impressum",
  });
}

export default function ImpressumPage() {
  return (
    <LegalPageTemplate
      lastUpdated="April 2026"
      overline="RECHTLICHES"
      sections={[
        {
          title: "1. Unternehmen",
          body: "Consultry GmbH, Berlin, Deutschland. Diese Seite bildet den vorläufigen Impressumsrahmen für die aktuelle Produkt- und Designvalidierung der Marketing-Website ab.",
        },
        {
          title: "2. Kontakt",
          body: "Verantwortlich für diese Website ist das Consultry-Team. Für rechtliche oder geschäftliche Anfragen nutzen Sie bitte kontakt@consultry.com.",
        },
        {
          title: "3. Ergänzungen zum Launch",
          body: "Die Seite wird im Zuge des Launch-Setups um finale Unternehmens-, Register- und vertretungsberechtigte Angaben ergänzt.",
        },
      ]}
      title="Impressum"
    />
  );
}
