import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { companyProfile } from "@/lib/company";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Datenschutz",
    description:
      "Datenschutzhinweise der Consultry Website mit Angaben zu Hosting, Cookie-Einwilligung, Webanalyse, Warteliste und Betroffenenrechten.",
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
                der Kontaktaufnahme per E-Mail, der Wartelisten-Anmeldung sowie der Vorbereitung von
                Pilotanfragen. Fuer die Verwaltung optionaler Statistik-Einwilligungen setzen wir
                CookieScript ein. Nur wenn Sie Statistik erlauben, laden wir Google Tag Manager und
                Google Analytics 4 fuer eine datensparsame Reichweiten- und Funnel-Messung.
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
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                USA
              </p>
            </>
          ),
        },
        {
          title: "4. Kontaktaufnahme und Produktgespraeche",
          body: (
            <>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten
                Angaben ausschließlich zur Bearbeitung Ihrer Anfrage, zur Kommunikation im Rahmen
                von Wartelisten-, Pilot- oder Produktgesprächen und, falls erforderlich, zur
                Vertragsanbahnung.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den
                Abschluss eines Vertrags oder vorvertragliche Maßnahmen gerichtet ist, sowie
                hilfsweise Art. 6 Abs. 1 lit. f DSGVO für die effiziente Bearbeitung allgemeiner
                Anfragen.
              </p>
            </>
          ),
        },
        {
          title: "5. Warteliste, Produkt-Updates und Double-Opt-In",
          body: (
            <>
              <p>
                Wenn Sie sich über das Wartelistenformular anmelden, verarbeiten wir Ihre
                E-Mail-Adresse sowie die für Anmeldung, Bestaetigung und Dokumentation Ihrer
                Einwilligung erforderlichen Protokolldaten. Sofern Sie uns nachgelagert freiwillig
                weitere Angaben uebermitteln, etwa zu Teamgroesse, Beratungsfokus, groessten
                operativen Engpaessen oder Interesse an Pilotplaetzen, verarbeiten wir auch diese
                Angaben zur Einordnung Ihrer Wartelisten-Anmeldung.
              </p>
              <p>
                Zweck der Verarbeitung ist die Verwaltung der Warteliste, die Versendung der
                Double-Opt-In-Bestaetigung, spaetere Produkt- und Wartelisten-Updates sowie die
                Priorisierung frueher Pilotgespraeche fuer passende Beratungen. Rechtsgrundlage ist
                Ihre Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p>
                Die Anmeldung erfolgt im Double-Opt-In-Verfahren. Nach Ihrer Anmeldung erhalten Sie
                eine E-Mail, in der Sie Ihre Anmeldung bestaetigen muessen. Erst nach dieser
                Bestaetigung wird Ihre Wartelisten-Anmeldung aktiv.
              </p>
              <p>
                Fuer die technische Abwicklung der Wartelisten-Anmeldung sowie fuer Versand und
                Verwaltung unserer E-Mails nutzen wir <strong>Loops</strong>, einen Dienst der
                <strong> Astrodon Corporation, USA</strong>. Dabei werden die von Ihnen
                uebermittelten Formulardaten an Loops uebertragen und dort verarbeitet.
              </p>
              <p>
                Dabei kann es zu einer Uebermittlung personenbezogener Daten in die USA kommen.
                Nach Angaben von Loops erfolgt eine solche Drittlandsverarbeitung unter Nutzung der
                jeweils anwendbaren Uebermittlungsmechanismen, insbesondere unter Berufung auf das
                EU-U.S. Data Privacy Framework sowie, soweit erforderlich, Standardvertragsklauseln
                oder andere gesetzlich zulaessige Garantien. Weitere Informationen zu den
                eingesetzten Garantien koennen Sie unter{" "}
                <a href={`mailto:${companyProfile.legalEmail}`}>{companyProfile.legalEmail}</a>{" "}
                anfordern.
              </p>
              <p>
                Wir speichern Ihre Daten fuer die Dauer Ihrer Wartelisten-Anmeldung oder bis Sie
                Ihre Einwilligung widerrufen. Daten, die wir zum Nachweis Ihrer Einwilligung oder
                zur Geltendmachung, Ausuebung oder Verteidigung von Rechtsanspruechen benoetigen,
                speichern wir nur so lange, wie dies hierfuer erforderlich ist.
              </p>
              <p>
                Sie koennen Ihre Einwilligung jederzeit mit Wirkung fuer die Zukunft widerrufen,
                insbesondere ueber den Abmeldelink in jeder E-Mail oder durch Nachricht an{" "}
                <a href={`mailto:${companyProfile.legalEmail}`}>{companyProfile.legalEmail}</a>.
              </p>
            </>
          ),
        },
        {
          title: "6. Einwilligungsmanagement, Webanalyse, lokale Speichermechanismen und externe Links",
          body: (
            <>
              <p>
                Diese Website nutzt <strong>CookieScript</strong> als Consent-Management-Plattform,
                um Ihre Einwilligung fuer technisch notwendige und optionale Statistik-Dienste zu
                verwalten. Anbieter ist <strong>Objectis, UAB</strong>, Laisves st. 60, LT-05120
                Vilnius, Litauen. CookieScript speichert Ihre Consent-Auswahl in einem
                First-Party-Cookie, damit die Banner- und Kategorie-Einstellungen bei weiteren
                Seitenaufrufen beruecksichtigt werden.
              </p>
              <p>
                Wenn Sie Statistik erlauben, laden wir <strong>Google Tag Manager</strong> und
                <strong> Google Analytics 4</strong>. Dabei koennen insbesondere Informationen zu
                Seitenaufrufen, Browser, Geraet, Referrer sowie gemessenen Interaktionen auf
                unserer Website verarbeitet werden. Rechtsgrundlage ist Ihre Einwilligung gemaess
                Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p>
                Verantwortliche Anbieter fuer die genannten Google-Dienste ist grundsaetzlich
                <strong> Google Ireland Limited</strong>, Gordon House, Barrow Street, Dublin 4,
                Irland. Eine Uebermittlung personenbezogener Daten an <strong>Google LLC</strong> in
                den USA kann dabei nicht ausgeschlossen werden. Google verweist fuer bestimmte
                internationale Datenuebermittlungen auf seine Zertifizierung nach dem EU-U.S. Data
                Privacy Framework sowie ergaenzende vertragliche Garantien.
              </p>
              <p>
                Zusaetzlich speichert die Hinweisleiste im Kopfbereich lokal im Browser, ob Sie den
                Hinweis bereits geschlossen haben. Hierfuer wird ein Eintrag im
                <strong> localStorage</strong> Ihres Browsers gesetzt. Nach einer erfolgreichen
                Wartelisten-Anmeldung speichern wir ausserdem die verwendete E-Mail-Adresse kurzzeitig
                im <strong>sessionStorage</strong>, damit die optionale Qualifizierungsseite dieselbe
                Anmeldung demselben Browser zuordnen kann. Diese Informationen verbleiben auf Ihrem
                Endgeraet und werden nicht fuer seitenuebergreifendes Tracking genutzt.
              </p>
              <p>
                Die verwendeten Schriften werden ueber <strong>next/font</strong> in die Anwendung
                eingebunden und von der Website selbst ausgeliefert. Beim Aufruf der Seite wird
                daher keine direkte Verbindung zu Google Fonts durch Ihren Browser aufgebaut.
              </p>
              <p>
                Wenn Sie externe Links, z. B. zu LinkedIn oder X, anklicken, verlassen Sie unsere
                Website. Fuer die Datenverarbeitung auf den Zielseiten sind ausschliesslich die
                jeweiligen Betreiber verantwortlich.
              </p>
            </>
          ),
        },
        {
          title: "7. Rechtsgrundlagen und Speicherdauer",
          body: (
            <>
              <p>
                Sofern Sie uns aktiv kontaktieren, verarbeiten wir Ihre Daten auf Grundlage von
                Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO. Optionale Statistik- und
                Messdienste verarbeiten wir nur auf Grundlage Ihrer Einwilligung gemaess Art. 6
                Abs. 1 lit. a DSGVO. Soweit gesetzliche Aufbewahrungspflichten bestehen, erfolgt die
                Verarbeitung zusaetzlich auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
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
          title: "8. Ihre Rechte",
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
