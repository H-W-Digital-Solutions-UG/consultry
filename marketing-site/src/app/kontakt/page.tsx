import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Kontakt",
    description:
      "Kontaktieren Sie Consultry für Produktfragen, Pilotprojekte und Frühzugang für DACH-Beratungen.",
    path: "/kontakt",
  });
}

export default function KontaktPage() {
  return (
    <StaticContentPage
      intro="Wir sprechen mit Beratungshäusern, die ihre Akquise-, Staffing- und Delivery-Prozesse in einer operativen Plattform bündeln wollen."
      overline="KONTAKT"
      paragraphs={[
        "Für Produktdemos, Pilotprojekte und Fragen zur Plattform erreichen Sie uns direkt per E-Mail unter kontakt@consultry.com.",
        "Wenn Sie Consultry für Ihr Beratungshaus evaluieren, schreiben Sie uns kurz, welche Teamgröße, welche Delivery-Struktur und welche Toollandschaft heute im Einsatz sind. So können wir die Demo auf Ihre Realität zuschneiden.",
        "Unser Fokus liegt auf DACH-Beratungen mit komplexen Staffing-, Angebots- und Delivery-Prozessen. Genau dort entfaltet das operative System von Consultry seine größte Wirkung.",
      ]}
      title="Sprechen Sie mit dem Consultry-Team."
    />
  );
}
