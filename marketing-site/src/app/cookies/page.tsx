import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
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
    <StaticContentPage
      intro="Diese Website verwendet nur die technisch notwendigen Mechanismen für Bereitstellung, Messung und die Verwaltung von Kontaktanfragen."
      overline="RECHTLICHES"
      paragraphs={[
        "Die finale Cookie-Dokumentation wird vor dem Launch mit einer vollständigen Auflistung aller eingesetzten Kategorien, Anbieter und Laufzeiten ergänzt.",
        "Bis dahin beschränkt sich die Website auf minimale technische Funktionen und eine datensparsame Grundkonfiguration.",
        "Wenn zusätzliche Analyse- oder Marketingdienste hinzukommen, werden Consent-Mechanismen und Einstellungen entsprechend erweitert.",
      ]}
      title="Cookies"
    />
  );
}
