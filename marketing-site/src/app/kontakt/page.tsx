import type { Metadata } from "next";
import { JsonLd } from "@/components/marketing/JsonLd";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { buildPageMetadata } from "@/lib/seo";
import { buildContactPageJsonLd } from "@/lib/structured-data";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Kontakt | Demo und Pilotprojekt fuer DACH-Beratungen",
    description:
      "Kontaktieren Sie Consultry fuer Produktfragen, Pilotprojekte und Demo-Anfragen fuer DACH-IT- und Digitalisierungsberatungen.",
    path: "/kontakt",
    keywords: [
      "Consultry Kontakt",
      "Demo Beratungssoftware",
      "Pilotprojekt DACH Beratungen",
    ],
  });
}

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={buildContactPageJsonLd({
          title: "Kontakt",
          description:
            "Kontakt fuer Produktdemos, Pilotprojekte und Fragen zu Consultry fuer DACH-Beratungen.",
          path: "/kontakt",
        })}
      />
      <StaticContentPage
        intro="Wir sprechen mit Beratungshaeusern, die Folgegeschaeft, Staffing, Wissenswiederverwendung und Delivery-Steuerung in einer operativen Plattform verbinden wollen."
        overline="KONTAKT"
        paragraphs={[
          "Fuer Produktdemos, Pilotprojekte und Fragen zur Plattform erreichen Sie uns direkt per E-Mail unter kontakt@consultry.com.",
          "Wenn Sie Consultry fuer Ihr Beratungshaus evaluieren, schreiben Sie uns kurz, welche Teamgroesse, welche Delivery-Struktur und welche Toollandschaft heute im Einsatz sind. So koennen wir die Demo auf Ihre Realitaet zuschneiden.",
          "Unser Fokus liegt auf DACH-IT- und Digitalisierungsberatungen mit 30 bis 200 Mitarbeitenden, komplexem Staffing, Angebotsdruck und verstreutem Projektwissen. Genau dort entfaltet das Operating System von Consultry seine groesste Wirkung.",
        ]}
        title="Sprechen Sie mit dem Consultry-Team."
      />
    </>
  );
}
