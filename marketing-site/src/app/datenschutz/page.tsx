import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { companyProfile } from "@/lib/company";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Datenschutz",
    description:
      "Datenschutzhinweise der Consultry Website mit Angaben zu Hosting, Kontaktanfragen, lokalen Speichermechanismen und Betroffenenrechten.",
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
          title: "1. Datenschutz auf einen Blick",
          body: (
            <>
              <p>
                Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle
                Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <p>
                Diese Website dient derzeit der Information über das Produkt <strong>Consultry</strong>,
                der Kontaktaufnahme per E-Mail sowie der Vorbereitung von Demo- und Pilotanfragen.
                Es werden aktuell keine Analyse- oder Marketing-Tracker eingesetzt.
              </p>
            </>
          ),
        },
        {
          title: "2. Verantwortliche Stelle",
          body: (
            <>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p>
                <strong>{companyProfile.legalName}</strong>
                <br />
                {companyProfile.address.street}
                <br />
                {companyProfile.address.postalCode} {companyProfile.address.city}
                <br />
                {companyProfile.address.country}
              </p>
              <p>
                <strong>Telefon:</strong> {companyProfile.phoneDisplay}
                <br />
                <strong>E-Mail:</strong>{" "}
                <a href={`mailto:${companyProfile.legalEmail}`}>{companyProfile.legalEmail}</a>
              </p>
            </>
          ),
        },
        {
          title: "3. Hosting und technische Bereitstellung",
          body: (
            <>
              <p>
                Die Website wird extern gehostet. Beim Aufruf der Website können technisch
                erforderliche Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
                Seiten, Referrer, Browsertyp und Betriebssystem verarbeitet werden, um die Website
                sicher und stabil auszuliefern.
              </p>
              <p>
                Das Hosting erfolgt zum Zweck der sicheren Bereitstellung unseres Online-Angebots
                sowie auf Grundlage unseres berechtigten Interesses an einem zuverlässigen
                technischen Betrieb gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Eingesetzter Hosting-Anbieter:
                <br />
                <strong>Hostinger International Ltd.</strong>
                <br />
                61 Lordou Vironos Str. 6023
                <br />
                Larnaca, Zypern
              </p>
            </>
          ),
        },
        {
          title: "4. Kontaktaufnahme und Demo-Anfragen",
          body: (
            <>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten
                Angaben ausschließlich zur Bearbeitung Ihrer Anfrage, zur Kommunikation im Rahmen
                von Demo-, Pilot- oder Produktgesprächen und, falls erforderlich, zur
                Vertragsanbahnung.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den
                Abschluss eines Vertrags oder vorvertragliche Maßnahmen gerichtet ist, sowie
                hilfsweise Art. 6 Abs. 1 lit. f DSGVO für die effiziente Bearbeitung allgemeiner
                Anfragen.
              </p>
              <p>
                Das auf der Website sichtbare Waitlist-/Demo-Formular validiert E-Mail-Adressen im
                aktuellen Stand ausschließlich lokal im Browser. Über dieses Formular werden derzeit
                keine Daten serverseitig an uns übertragen oder dauerhaft gespeichert.
              </p>
            </>
          ),
        },
        {
          title: "5. Cookies, lokale Speichermechanismen und externe Links",
          body: (
            <>
              <p>
                Diese Website verwendet derzeit keine Analyse- oder Marketing-Cookies. Es können
                jedoch technisch notwendige Mechanismen eingesetzt werden, damit die Website und
                ihre Grundfunktionen korrekt dargestellt werden.
              </p>
              <p>
                Zusätzlich speichert die Hinweisleiste im Kopfbereich lokal im Browser, ob Sie den
                Hinweis bereits geschlossen haben. Hierfür wird ein Eintrag im <strong>localStorage</strong>{" "}
                Ihres Browsers gesetzt. Diese Information verbleibt auf Ihrem Endgerät und wird
                nicht an uns übertragen.
              </p>
              <p>
                Die verwendeten Schriften werden über <strong>next/font</strong> in die Anwendung
                eingebunden und von der Website selbst ausgeliefert. Beim Aufruf der Seite wird
                daher keine direkte Verbindung zu Google Fonts durch Ihren Browser aufgebaut.
              </p>
              <p>
                Wenn Sie externe Links, z. B. zu LinkedIn oder X, anklicken, verlassen Sie unsere
                Website. Für die Datenverarbeitung auf den Zielseiten sind ausschließlich die
                jeweiligen Betreiber verantwortlich.
              </p>
            </>
          ),
        },
        {
          title: "6. Rechtsgrundlagen und Speicherdauer",
          body: (
            <>
              <p>
                Sofern Sie uns aktiv kontaktieren, verarbeiten wir Ihre Daten auf Grundlage von
                Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO. Soweit gesetzliche
                Aufbewahrungspflichten bestehen, erfolgt die Verarbeitung zusätzlich auf Grundlage
                von Art. 6 Abs. 1 lit. c DSGVO.
              </p>
              <p>
                Personenbezogene Daten speichern wir nur so lange, wie dies zur Bearbeitung Ihrer
                Anfrage, zur Dokumentation geschäftlicher Kommunikation oder zur Erfüllung
                gesetzlicher Pflichten erforderlich ist.
              </p>
            </>
          ),
        },
        {
          title: "7. Ihre Rechte",
          body: (
            <>
              <p>Sie haben nach Maßgabe der gesetzlichen Vorschriften insbesondere folgende Rechte:</p>
              <ul>
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten,</li>
                <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten,</li>
                <li>Löschung Ihrer Daten, soweit keine gesetzlichen Pflichten entgegenstehen,</li>
                <li>Einschränkung der Verarbeitung,</li>
                <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen,</li>
                <li>Datenübertragbarkeit bei automatisierter Verarbeitung,</li>
                <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft.</li>
              </ul>
              <p>
                Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu,
                insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
              </p>
            </>
          ),
        },
      ]}
      title="Datenschutz"
    />
  );
}
