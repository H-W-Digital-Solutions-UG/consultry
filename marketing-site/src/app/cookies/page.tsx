import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Cookies",
    description: "Vorläufige Cookie-Hinweise für die Consultry Marketing-Website.",
    path: "/cookies",
  });
}

export default function CookiesPage() {
  return (
    <LegalPageTemplate
      lastUpdated="April 2026"
      overline="RECHTLICHES"
      sections={[
        {
          title: "1. Grundsatz",
          body: "Diese Website verwendet derzeit nur die technischen Mechanismen, die für Bereitstellung, Sicherheit und die Verarbeitung von Kontaktanfragen erforderlich sind.",
        },
        {
          title: "2. Technisch notwendige Funktionen",
          body: "Zum aktuellen Stand beschränkt sich die Website auf eine datensparsame Grundkonfiguration. Es werden nur diejenigen Speicher- oder Session-Mechanismen genutzt, die für Auslieferung, Navigation und Formulare nötig sind.",
        },
        {
          title: "3. Messung und Erweiterungen",
          body: "Falls künftig Analyse-, Reichweiten- oder Marketingdienste ergänzt werden, werden Cookie-Kategorien, Anbieter, Laufzeiten und Consent-Mechanismen entsprechend erweitert und transparent dokumentiert.",
        },
      ]}
      title="Cookies"
    />
  );
}
