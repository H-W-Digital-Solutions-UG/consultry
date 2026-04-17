import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/marketing/LegalPageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Datenschutzrichtlinie",
    description:
      "Datenschutzrichtlinie von Consultry mit Informationen zu erhobenen Daten, Rechtsgrundlagen, Betroffenenrechten und Kontaktwegen.",
    path: "/datenschutz",
  });
}

export default function DatenschutzPage() {
  return (
    <LegalPageTemplate
      currentDocumentHref="/datenschutz"
      intro={
        <>
          <p>
            Diese Datenschutzerklärung erläutert die Richtlinien von https://consultry.de
            hinsichtlich der Erhebung, Verwendung, Offenlegung und dem Schutz personenbezogener
            Daten, die wir erheben, wenn Sie auf https://consultry.de (den „Dienst“) zugreifen.
            Diese Datenschutzerklärung definiert und beschreibt Ihre Datenschutzrechte sowie den
            Schutz, den Sie nach den geltenden Datenschutzgesetzen genießen.
          </p>
          <p>
            Durch die Nutzung unseres Dienstes stimmen Sie der Erhebung und Verwendung Ihrer
            personenbezogenen Daten gemäß dieser Datenschutzerklärung zu. Bitte greifen Sie nicht
            auf unseren Dienst zu und nutzen Sie ihn nicht, wenn Sie der Erhebung und Verwendung
            Ihrer Informationen, wie in dieser Datenschutzerklärung beschrieben, nicht zustimmen.
            Diese Datenschutzerklärung wurde mit Hilfe des CookieScript Generator für
            Datenschutzerklärungen erstellt.
          </p>
        </>
      }
      lastUpdated="17-April-2026"
      metaItems={[
        { label: "Gültig ab", value: "16-April-2026" },
        { label: "Aktualisiert am", value: "17-April-2026" },
      ]}
      overline="RECHTLICHES"
      sections={[
        {
          title: "Welche Informationen wir erheben, zu welchen Zwecken und auf welcher Rechtsgrundlage",
          body: (
            <>
              <p>Die nachstehenden Definitionen der Rechtsgrundlagen sind wie folgt zu verstehen:</p>
              <p>
                <strong>Berechtigtes Interesse:</strong> Interesse des Unternehmens oder eines
                Dritten, sofern Ihre Interessen oder Grundrechte und -freiheiten nicht überwiegen
                und deren Nutzung Ihrer personenbezogenen Daten in einem angemessenen Verhältnis zu
                Ihren Rechten und Freiheiten steht.
              </p>
              <p>
                <strong>Vertragserfüllung:</strong> Verarbeitung Ihrer personenbezogenen Daten, wenn
                dies für die Erfüllung eines Vertrags, dessen Vertragspartei Sie sind, oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
              <p>
                <strong>Rechtliche Verpflichtungen:</strong> Verarbeitung Ihrer personenbezogenen
                Daten, wenn dies für die Erfüllung einer rechtlichen oder regulatorischen
                Verpflichtung erforderlich ist, der wir unterliegen.
              </p>
              <p>
                <strong>Einwilligung:</strong> Ihre Einwilligung bedeutet jede freiwillig erteilte,
                spezifische, informierte und unmissverständliche Willensbekundung, mit der Sie
                durch eine Erklärung oder eine eindeutige bestätigende Handlung Ihr Einverständnis
                mit der Verarbeitung personenbezogener Daten, die Sie betreffen, signalisieren. Wir
                können Ihre Einwilligung einholen, wenn wir keine andere Rechtsgrundlage für die
                Verarbeitung Ihrer Daten haben.
              </p>
              <p>
                <strong>Nutzungsdaten</strong>
                <br />
                Was wir erheben: Informationen darüber, wie Nutzer mit unserer Website oder
                Anwendung interagieren, einschließlich besuchter Seiten, Verweildauer auf Seiten,
                Klickpfade und Browserdetails.
                <br />
                Zweck: Analyse des Nutzerverhaltens, Optimierung der Leistung und Verbesserung der
                Benutzererfahrung.
                <br />
                Aufbewahrungsfrist: 365 Tage
                <br />
                Rechtsgrundlage: Legitimate Interests
              </p>
              <p>
                <strong>Persönliche Identifikationsinformationen</strong>
                <br />
                Was wir erheben: E-Mail-Adresse, Telefonnummer (mobil)
                <br />
                Zweck: Verwaltung von Benutzerkonten, Gewährleistung eines sicheren Zugangs und
                Bereitstellung personalisierter Inhalte.
                <br />
                Aufbewahrungsfrist: 730 Tage
                <br />
                Rechtsgrundlage: Consent
              </p>
              <p>
                <strong>Kontaktinformationen</strong>
                <br />
                Was wir erheben: Work Phone Number, Work E-Mail
                <br />
                Zweck: Sicherstellung einer korrekten Leistungserbringung und Unterstützung bei
                kontobezogenen Mitteilungen.
                <br />
                Aufbewahrungsfrist: 730 Tage
                <br />
                Rechtsgrundlage: Consent
              </p>
              <p>
                <strong>Online-Kennungen &amp; Geräteinformationen</strong>
                <br />
                Was wir erheben: IP-Adresse, Browsertyp und -version, Betriebssystem
                <br />
                Zweck: Absicherung unserer Plattform, Optimierung der Leistung und Verständnis der
                technischen Nutzung.
                <br />
                Aufbewahrungsfrist: 365 Tage
                <br />
                Rechtsgrundlage: Consent
              </p>
              <p>
                <strong>Standortdaten</strong>
                <br />
                Was wir erheben: Geolocation (GPS-Koordinaten, Ort basierend auf IP-Adresse)
                <br />
                Zweck: Personalisierung von Erlebnissen und Diensten basierend auf Ihrem Standort.
                <br />
                Aufbewahrungsfrist: 365 Tage
                <br />
                Rechtsgrundlage: Consent
              </p>
              <p>
                <strong>Kommunikationsdaten</strong>
                <br />
                Was wir erheben: E-Mail-Korrespondenz
                <br />
                Zweck: Bereitstellung von Kundensupport und Aufrechterhaltung einer
                Korrespondenzhistorie.
                <br />
                Aufbewahrungsfrist: 730 Tage
                <br />
                Rechtsgrundlage: Legitimate Interests
              </p>
              <p>
                <strong>Präferenz- und Verhaltensdaten</strong>
                <br />
                Was wir erheben: Interessen und Präferenzen der Nutzer, Interaktionsverlauf mit
                Inhalten oder Produkten
                <br />
                Zweck: Personalisierung von Empfehlungen, Werbung und Inhalten.
                <br />
                Aufbewahrungsfrist: 730 Tage
                <br />
                Rechtsgrundlage: Consent
              </p>
              <p>
                <strong>Berufliche Informationen</strong>
                <br />
                Was wir erheben: Firmenname, Geschäftliche E-Mail-Adresse, Team Size, Industry,
                Industry Focus
                <br />
                Zweck: Unterstützung von Geschäftsbeziehungen und Anpassung von Inhalten für
                berufliche Nutzer.
                <br />
                Aufbewahrungsfrist: 730 Tage
                <br />
                Rechtsgrundlage: Consent
              </p>
              <p>
                <strong>Einwilligungs- und Rechtsdokumente</strong>
                <br />
                Was wir erheben: Einwilligungsformulare
                <br />
                Zweck: Erfüllung rechtlicher und regulatorischer Verpflichtungen.
                <br />
                Aufbewahrungsfrist: 730 Tage
                <br />
                Rechtsgrundlage: Consent
              </p>
            </>
          ),
        },
        {
          title: "Wie wir Ihre personenbezogenen Daten erhalten",
          body: (
            <>
              <p>Wir erheben Informationen, die Sie uns direkt bereitstellen, wenn Sie:</p>
              <ul>
                <li>Formulare ausfüllen</li>
                <li>Unsere Dienste nutzen</li>
                <li>Mit uns korrespondieren</li>
                <li>Uns aus anderen Gründen kontaktieren</li>
              </ul>
              <p>
                Through cookies, consent tools, and analytics technologies on our website, where
                required only with your consent.
              </p>
              <p>Wir können Ihre personenbezogenen Daten auch aus anderen legitimen Quellen beziehen:</p>
              <ul>
                <li>Wir können personenbezogene Daten von Partnern und Kooperationsunternehmen erhalten</li>
              </ul>
            </>
          ),
        },
        {
          title: "Pflicht zur Bereitstellung personenbezogener Daten",
          body: (
            <>
              <p>
                In bestimmten Fällen ist die Bereitstellung personenbezogener Daten gesetzlich oder
                vertraglich vorgeschrieben oder zur Durchführung eines Vertrags erforderlich.
              </p>
            </>
          ),
        },
        {
          title: "Wie wir Ihre Informationen teilen",
          body: (
            <>
              <p>
                H&amp;W Digital Solutions UG kann Ihre personenbezogenen Daten den Empfängern der
                folgenden Kategorien offenlegen:
              </p>
              <p>
                Mit Ihrer Einwilligung. H&amp;W Digital Solutions UG wird Ihre Daten für jeden
                Zweck mit Ihrer ausdrücklichen Zustimmung teilen.
              </p>
              <p>
                Bei Unternehmensübertragungen. Ihre Daten werden im Falle einer Fusion, Übernahme,
                Verhandlung, eines Verkaufs von Geschäftsanteilen oder einer Finanzierung an Dritte
                übertragen.
              </p>
              <p>
                Wir übermitteln personenbezogene Daten in folgende Drittstaaten: Vereinigte
                Staaten. Dieses Land, Gebiet oder die angegebenen Sektoren wurden von der
                Europäischen Kommission als mit angemessenem Datenschutzniveau anerkannt.
              </p>
            </>
          ),
        },
        {
          title: "Konkret eingesetzte Dienstleister und Systeme",
          body: (
            <>
              <p>
                Zur technischen Bereitstellung und zum Hosting unseres Dienstes nutzen wir derzeit
                insbesondere <strong>Vercel</strong>.
              </p>
              <p>
                Für das Consent-Management und die Steuerung von Einwilligungen verwenden wir
                <strong> CookieScript</strong>, einen Dienst von <strong>Objectis Ltd.</strong>,
                Laisves st. 60, LT-05120 Vilnius, Litauen.
              </p>
              <p>
                Für optionale Statistik und Reichweitenmessung verwenden wir nach Ihrer
                Einwilligung <strong>Google Tag Manager</strong> und <strong>Google Analytics 4</strong>.
              </p>
              <p>
                Für Wartelisten-Anmeldungen, Double-Opt-In-Kommunikation und die Speicherung
                optionaler Angaben zur Lead-Qualifizierung verwenden wir <strong>Loops</strong>
                (loops.so), einen Dienst der <strong>Astrodon Corporation</strong>, USA.
              </p>
              <p>
                Soweit bei der Nutzung dieser Dienste personenbezogene Daten in Drittländer,
                insbesondere in die Vereinigten Staaten, übermittelt werden, erfolgt dies nach den
                jeweils von den Anbietern vorgesehenen Datenschutz- und
                Übermittlungsmechanismen.
              </p>
            </>
          ),
        },
        {
          title: "Rechte der betroffenen Person",
          body: (
            <>
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul>
                <li>
                  Recht auf Auskunft: Sie können eine Kopie der personenbezogenen Daten, die wir
                  über Sie speichern, anfordern.
                </li>
                <li>
                  Recht auf Berichtigung: Sie können die Berichtigung unrichtiger oder
                  unvollständiger Informationen verlangen.
                </li>
                <li>
                  Recht auf Löschung (Recht auf Vergessenwerden): Unter bestimmten Voraussetzungen
                  können Sie die Löschung Ihrer personenbezogenen Daten verlangen.
                </li>
                <li>
                  Recht auf Einschränkung der Verarbeitung: Sie können die Einschränkung der
                  Verarbeitung Ihrer personenbezogenen Daten unter bestimmten Umständen verlangen.
                </li>
                <li>
                  Recht auf Datenübertragbarkeit: Sie haben das Recht, Ihre personenbezogenen Daten
                  in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und
                  diese Daten einem anderen Verantwortlichen zu übermitteln.
                </li>
                <li>
                  Widerspruchsrecht: In bestimmten Fällen können Sie der Verarbeitung Ihrer
                  personenbezogenen Daten widersprechen.
                </li>
                <li>
                  Recht auf transparente Information: Sie haben das Recht, klare, transparente und
                  leicht verständliche Informationen darüber zu erhalten, wie wir Ihre
                  personenbezogenen Daten verarbeiten.
                </li>
              </ul>
              <p>
                <strong>Widerruf der Einwilligung:</strong>
                <br />
                Gemäß Artikel 13 Absatz 2 Buchstabe c der DSGVO haben Sie das Recht, Ihre
                Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten jederzeit zu widerrufen.
                Als Besucher dieser Website können Sie Ihre Einwilligung direkt über das auf der
                Website bereitgestellte Consent-Banner ganz einfach anpassen oder widerrufen.
                Alternativ können Sie sich auch an den Websitebetreiber wenden, dessen Kontaktdaten
                in dieser Datenschutzerklärung angegeben sind. Bitte beachten Sie, dass der
                Widerruf Ihrer Einwilligung die Rechtmäßigkeit der Verarbeitung, die vor dem
                Widerruf erfolgte, nicht berührt.
              </p>
              <p>
                Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter{" "}
                <a href="mailto:contact@hw-digitalsolutions.de">contact@hw-digitalsolutions.de</a>.
              </p>
              <p>
                Wir werden Ihre Rechte nur ausüben, nachdem wir Ihren schriftlichen Antrag zum
                Ausüben eines bestimmten Rechts erhalten und Ihre Identität verifiziert haben.
              </p>
              <p>
                Ihre Anträge werden innerhalb eines Monats ab dem Eingang des Antrags, der unseren
                internen Regelungen und der DSGVO entspricht, erfüllt oder eine Ablehnung mit
                Angabe der Gründe mitgeteilt. Diese Frist kann um zwei weitere Monate verlängert
                werden, wenn der Antrag aufgrund des Umfangs der personenbezogenen Daten oder
                weiterer gleichzeitig bearbeiteter Anträge besonders aufwendig ist. Wir werden Sie
                innerhalb eines Monats nach Eingang des Antrags über eine Verlängerung und die
                Gründe dafür informieren. Die Antwort erfolgt in der von Ihnen gewünschten Form.
              </p>
              <p>
                Wir können die Erfüllung Ihres Antrags verweigern, wenn die in der DSGVO
                vorgesehenen Ausnahmen und/oder Einschränkungen der Rechte der betroffenen Person
                Anwendung finden oder wenn Ihr Antrag offensichtlich unbegründet oder
                unverhältnismäßig ist. Im Falle einer Ablehnung werden wir Ihnen die Gründe dafür
                schriftlich mitteilen.
              </p>
            </>
          ),
        },
        {
          title: "Beschwerderecht bei einer Aufsichtsbehörde",
          body: (
            <>
              <p>
                Sie haben das Recht, bei einer zuständigen Aufsichtsbehörde Beschwerde einzureichen,
                wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
                geltendes Recht und Ihre Rechte und berechtigten Interessen verstößt. Sie können
                gemäß den für Bundesbeauftragte für den Datenschutz und die Informationsfreiheit
                (BfDI) der Bundesrepublik Deutschland festgelegten Verfahren vorgehen, die unter
                folgendem Link zu finden sind:{" "}
                <a href="https://www.bfdi.bund.de/anschriften" rel="noreferrer" target="_blank">
                  https://www.bfdi.bund.de/anschriften
                </a>
                .
              </p>
              <p>
                Bitte beachten Sie, dass trotz aller Bemühungen kein System vollständig sicher ist.
                Wir haben jedoch angemessene Sicherheitsmaßnahmen implementiert, um die Risiken
                unbefugten Zugriffs auf oder unsachgemäßen Verwendung Ihrer personenbezogenen Daten
                zu minimieren.
              </p>
            </>
          ),
        },
        {
          title: "Sicherheit",
          body: (
            <>
              <p>
                Wir und unsere Drittanbieter, die im Auftrag der oben genannten Zwecke
                personenbezogene Daten verarbeiten können, sind vertraglich verpflichtet, die
                Vertraulichkeit dieser Daten zu wahren.
              </p>
              <p>
                Wir setzen angemessene Sicherheitspraktiken und -verfahren ein, um die
                Vertraulichkeit und Sicherheit Ihrer Informationen, einschließlich aller nicht
                öffentlichen personenbezogenen Daten, zu schützen.
              </p>
              <p>
                Wir schützen Ihre Daten durch angemessene physische, technische und administrative
                Sicherheitsmaßnahmen, einschließlich der Beschränkung des Zugriffs auf Ihre
                Informationen auf Mitarbeiter, die diese Informationen kennen müssen.
              </p>
            </>
          ),
        },
        {
          title: "Änderungen dieser Richtlinie",
          body: (
            <>
              <p>
                Wir überprüfen diese Datenschutzerklärung regelmäßig und behalten uns das Recht vor,
                sie jederzeit in Übereinstimmung mit geltenden Gesetzen und Vorschriften zu ändern.
                Änderungen treten mit ihrer Veröffentlichung auf unserer Website sofort in Kraft.
              </p>
              <p>
                Bitte überprüfen Sie diese Datenschutzerklärung von Zeit zu Zeit, um über etwaige
                Änderungen informiert zu bleiben.
              </p>
            </>
          ),
        },
        {
          title: "Kontakt",
          body: (
            <>
              <p>Für Fragen kontaktieren Sie uns bitte über folgende Methoden:</p>
              <p>
                Name: H&amp;W Digital Solutions UG
                <br />
                Adresse: Greifswalder Straße 13D, 10405 Berlin
                <br />
                E-Mail:{" "}
                <a href="mailto:contact@hw-digitalsolutions.de">contact@hw-digitalsolutions.de</a>
                <br />
                Website: <a href="https://consultry.de">https://consultry.de</a>
                <br />
                Telefon: +4917670937993
              </p>
            </>
          ),
        },
      ]}
      title="Datenschutzrichtlinie"
    />
  );
}
