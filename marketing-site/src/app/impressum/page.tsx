import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
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
    <StaticContentPage
      intro="Dies ist eine vorläufige Impressumsseite für die aktuelle Produkt- und Designvalidierung der Marketing-Website."
      overline="RECHTLICHES"
      paragraphs={[
        "Consultry GmbH, Berlin, Deutschland.",
        "Verantwortlich für diese Website ist das Consultry-Team. Für rechtliche oder geschäftliche Anfragen nutzen Sie bitte kontakt@consultry.com.",
        "Diese Seite wird im Zuge des Launch-Setups weiter mit den finalen Unternehmens- und Registerdaten ergänzt.",
      ]}
      title="Impressum"
    />
  );
}
