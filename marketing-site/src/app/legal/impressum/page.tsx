import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { companyProfile } from "@/lib/company";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Impressum",
    description:
      "Impressum der Consultry Website mit Anbieterangaben, Kontakt, Registerdaten und Hinweisen zur Streitbeilegung.",
    path: "/legal/impressum",
  });
}

export default function LegalImpressumPage() {
  return (
    <LegalPageTemplate
      lastUpdated="April 2026"
      sections={[
        {
          title: "1. Angaben gemäß § 5 DDG",
          body: (
            <>
              <p>
                Betreiberin dieser Website und Anbieterin des Angebots <strong>Consultry</strong> ist:
              </p>
              <p>
                <strong>{companyProfile.legalName}</strong>
                <br />
                {companyProfile.address.street}
                <br />
                {companyProfile.address.postalCode} {companyProfile.address.city}
                <br />
                {companyProfile.address.country}
              </p>
            </>
          ),
        },
        {
          title: "2. Registereintrag und Vertretung",
          body: (
            <>
              <p>
                <strong>Handelsregister:</strong> {companyProfile.commercialRegister}
                <br />
                <strong>Registergericht:</strong> {companyProfile.registerCourt}
              </p>
              <p>
                <strong>Vertreten durch:</strong>
              </p>
              <ul>
                {companyProfile.managingDirectors.map((managingDirector) => (
                  <li key={managingDirector}>{managingDirector}</li>
                ))}
              </ul>
            </>
          ),
        },
        {
          title: "3. Kontakt",
          body: (
            <>
              <p>
                <strong>Telefon:</strong> {companyProfile.phoneDisplay}
                <br />
                <strong>E-Mail:</strong>{" "}
                <a href={`mailto:${companyProfile.legalEmail}`}>{companyProfile.legalEmail}</a>
                <br />
                <strong>Produktanfragen:</strong>{" "}
                <a href={`mailto:${companyProfile.productEmail}`}>{companyProfile.productEmail}</a>
              </p>
            </>
          ),
        },
        {
          title: "4. Umsatzsteuer-ID",
          body: (
            <>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                <strong>{companyProfile.vatId}</strong>
              </p>
            </>
          ),
        },
        {
          title: "5. EU-Streitschlichtung",
          body: (
            <>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:
                <br />
                <a href={companyProfile.euDisputeUrl} rel="noreferrer" target="_blank">
                  {companyProfile.euDisputeUrl}
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </>
          ),
        },
        {
          title: "6. Verbraucherstreitbeilegung",
          body: (
            <>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ),
        },
      ]}
      title="Impressum"
    />
  );
}
