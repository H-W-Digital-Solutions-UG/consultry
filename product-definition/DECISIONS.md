# Consultry: Entscheidungen, verworfene Ideen und Lehren

Stand: 15.09.2026. Dieses Register führt Entscheidungen und die aktuelle Wayfinder-Arbeit. Die historische Einordnung vom 04.09. bleibt erhalten und wird durch die datierten Ergänzungen unten präzisiert. Quellenkürzel und konkrete Einstiege stehen in [SOURCES.md](SOURCES.md).

## Statusregeln

- **Akzeptiert:** im vorliegenden Gespräch explizit bestätigt oder in einer einschlägigen Wayfinder-Resolution dokumentiert, ohne spätere Ablösung.
- **Aktuelle Richtung:** vom Nutzer gewünschte Priorisierung; nachfolgend ausdrücklich explorativ eingegrenzt. Keine pauschale Implementierungsfreigabe.
- **Berichtet:** im Handover einer anderen Session als beschlossen dokumentiert; Herkunft wird beibehalten, keine unabhängige Tatsachenbestätigung.
- **Verworfen:** ausdrücklich zurückgewiesene Formulierung oder Produktannahme.
- **Ersetzt:** vormals gültige Richtung, die durch eine neuere Entscheidung geändert wurde.
- **Verschoben:** bewusst nicht für den aktuellen Schritt; nicht mit Verwerfen gleichsetzen.
- **Offen/Vorschlag:** weder Frage noch Empfehlung gilt allein durch ihre Dokumentation als ratifiziert.

Die jüngste Nutzerkorrektur („das war explorative“) hat Vorrang vor einer zu starken Lesart der Entwürfe. Wiederholung, ein Dateiname mit „Final“ oder die Übernahme durch einen Assistenten sind keine zusätzlichen Abstimmungen. „Nicht übernommen“ und „Audit-Kritik“ unten bezeichnen meine Einordnung, nicht nachträglich erfundene Ablehnungen des Nutzers.

## Ergänzungen aus der Ledger-Session und dieser Session

Quelle L: [„Wissensledger integrieren“, Gesprächsbelege](archive/session-2026-09-05-wissensledger/INSIGHTS.md). Quelle C: diese Session mit Shared-Co-Work-Ergänzung und dem ausdrücklichen Auftrag vom 10.09., die Restrukturierung mit den anderen Sessionerkenntnissen abzuschließen, ausgenommen Modellhosting.

| ID | Aussage | Status und Grenze | Herkunft |
|---|---|---|---|
| D-0910-01 | Sechs führende Dokumente übernehmen und bisherigen Bestand archivieren | jetzt zur Umsetzung beauftragt; Dokumentenmigration, keine neue Architekturfreigabe | C; Migrationsbericht |
| D-0910-02 | Ledger-Idee gehört in den Consultry-Kern | gewünschte Produktausrichtung; DID-/Blockchain-Technik offen | L1 |
| D-0910-03 | Agentenschwärme halten ihren vereinbarten Wissensstand im Ledger fest | direkt vom Nutzer ergänzt; konkrete Annahmeregeln offen | L2 |
| D-0910-04 | Kontextversionen und Änderungen dürfen die Zusammenarbeit nicht unbemerkt auseinanderlaufen lassen | bestätigtes Problem/Ziel; Wechsel-/Invalidierungsmechanik als Vorschlag | L2–L3 |
| D-0910-05 | Trajectories und Lernmuster nutzen | direkt gewünschte Richtung; beobachtbare Beiträge und Ereignisse, keine automatische Modelltrainingsfreigabe | L4 |
| D-0910-06 | Task-Subgraphen ins Mainledger zurückführen | Nutzerrichtung mit Korrektur: logische Verknüpfung in gemeinsamer DAG-Historie; Mainledger als akzeptierte Sicht | L5 |
| D-0910-07 | Rollen und Aufgaben erhalten passende Skills und erlaubten Kontext | vom Nutzer ergänzt; Rolle, Skill, Kontext und Rechte unterscheidbar | L6 |
| D-0910-08 | Beratung, Klient, Projekt und Aufgabe als verbundene Kontexte | Struktur ausdrücklich positiv bestätigt; keine starre Pflicht-Hierarchie jeder Aufgabe | L7 |
| D-0910-09 | Vertrauliche Daten müssen Teil normaler AI-unterstützter Beratungsarbeit sein | vom Nutzer als wichtigstes Kernproblem priorisiert; rechtlich einzuordnende und technisch durchzusetzende Grenzen | L8 |
| D-0910-10 | Shared Co-Work Context mit mehreren menschlichen/maschinellen Identitäten | gewünschte Ergänzung und zur lokalen Sicherung beauftragt; Group Chat als Oberfläche, identitätsbezogene Sichten | C |
| D-0910-11 | Graph/Brain zentral; UI-Wissensintegration und rollenbasierte API/Harness-Nutzung | direkte Richtung vom 04.–05.09.; konkrete Graph-Engine/Runtime offen | C; archivierter Kontextanker |
| D-0910-12 | Frontier-bevorzugte sensible AI-Verarbeitung | bestätigte Zielrichtung; qualitätsgebundene Fallback-Regel bleibt Vorschlag | C |
| D-0910-13 | Modellhosting aus der aktuellen Sessionübernahme ausnehmen | ausdrücklich beauftragt; Hardware, Modellbetrieb, Anbieter-/Deploymentvergleiche und Kapazitäts-/Kostenannahmen nicht als neue Produktentscheidungen übernehmen | C, 10.09. |
| D-0910-14 | Private signierte Logs, DIDs, Blockchain, externe Checkpoints und Konsensverfahren | technische Vergleichskandidaten; kein ausgewählter Stack und kein Wirksamkeitsbeleg | L1; historisches Integrationspapier |
| D-0910-15 | Synthetische Vertragsanalyse als erster Proof | Assistentenvorschlag; kein verbindlicher Erstfall und keine Verengung der Produktvision | L8 |
| D-0910-16 | Agentenkonsens ersetzt Wahrheit oder Geschäftsfreigabe | ausgeschlossen durch bestehende Evidence-/Authority-Grenzen; Konsens kann als Arbeitsstand dienen | C; L2–L8 und Authority-Tickets |

Der Ausschluss von Modellhosting ist kein Auftrag, historische Quellen zu vernichten. Sie bleiben im eingefrorenen Bestand erhalten und entscheiden die neue Produktbasis nicht. Datenschutzanforderungen und Model-Bridge-Semantik bleiben dagegen ausdrücklich relevant.

## Produkt und Arbeitsweise

| Entscheidung / Idee | Heutiger Status | Gültige Aussage und Lehre | Herkunft |
|---|---|---|---|
| Consultry Core als Arbeitskern der Beratung | Akzeptiert | Whole Product verbindet Wissen, reale Arbeit und Verantwortung; ein Verkaufs- oder Demo-Einstieg begrenzt es nicht | WF: Product and Platform Destination; Chat Schritte 1–4 |
| Opportunity-to-Concept als Endpunkt | Erweitert | Opportunity-to-Project ist ein wichtiger vollständiger Wertpfad; Konzept/Angebot ist Zwischenresultat. Die Verengung des Whole Product auf einen einzigen Wedge wurde gesondert zurückgewiesen | WF: Problem and Outcome Hierarchy; Proposal Lifecycle; Chat |
| Operating Continuity bei Rollenkompression als primärer Outcome | Verworfen | Expertise wird handlungswirksam; Effizienz, Qualität, Blind-Spot-Abdeckung und Synergien sind Wirkungen. Rollenkompression ist eine Kontextbedingung | WF: Problem and Outcome Hierarchy; direkte Nutzerkorrektur |
| Kleine Beratungen pauschal als SMB ausschließen | Verworfen | Boutique und Growing Specialist Consultancy bleiben gültig; Organisationsform und tatsächliche Jobs zählen | WF: First Consultancy Operating Archetypes; Chat |
| Beratungsunternehmen und dessen Klient gleichsetzen | Verworfen | Consultry-Kunde ist die Beratung; Klientenorganisationen bilden darunter eigene Kontexte und Grenzen | WF: Problem and Outcome Hierarchy |
| Sechs Coverage-Bereiche als Module/Abteilungen/technische Grenzen | Verworfen | Die Karte prüft die Breite des Beratungsbetriebs, nicht die spätere Softwarezerlegung | WF: Canonical Responsibility and Job Families; Coverage Ledger |
| Feste zusätzliche Rollen-/Gatekeeper-Taxonomie | Zurückgenommen | Person, Verantwortung, Teilnahme und Autorität unterscheiden, aber nur konkret benötigte Modellierung hinzufügen | WF: Product Actors, Role Compression, Jobs and Authority |
| Zwei Menschen müssen jedes Ergebnis validieren | Verworfen | Eine Person darf mit Agentenhilfe verantworten; Mehr-Augen-Regeln nur bei tatsächlicher Anforderung | WF: Case Participation/Authority; Consultant Daily Work |
| Agentenprüfung und menschliche Verantwortung | Akzeptierte Grenze | Agentenbeitrag, fachliche Entscheidung und technische Autorisierung bleiben unterscheidbar; Agentenprüfung ist kein zusätzlicher menschlicher Reviewer | dieselben WF-Tickets |
| Chat-only-Produkt | Verworfen | Arbeit, Kontext und Ergebnisse bleiben produktprägend; ein technischer Erstclient kann dialogbasiert bedient werden | WF: Reject a Chat-only Product; Chat Schritt 4; Nutzer 04.09. |
| Harness ist nur optionaler Zusatz | Präzisiert/teilweise ersetzt | Harness by default; eine separate technische Oberfläche bleibt optional. Produkt-Harness und Client-Oberfläche unterscheiden | WF: Harness Integration Boundary; Chat Schritt 1 |
| Harness schlägt ausschließlich nächsten Arbeitsschritt vor | Verworfen | Es kann innerhalb eingeräumter Autorität ausführen, koordinieren, parallelisieren, prüfen und Menschen gezielt einbeziehen | Chat Schritt 4, korrigiert und explizit ratifiziert |
| Alle Arbeitsbereiche sind nur Views identischer Datenobjekte | Verworfen | Verbundene Arbeitskontexte; physische Verknüpfung, Synchronisierung, Kopie oder Übergabe ist noch zu lösen | Chat Schritt 4, korrigiert und explizit ratifiziert |
| Einfaches Connector-/Quellen-Onboarding | Akzeptierte Produktausrichtung | Einfaches Anbinden gehört zum Kern; Umfang des ersten echten Connectors bleibt offen. Eine explizite Ablehnung jedes späteren Integrationsprojekts ist nicht belegt | direkte Nutzerergänzung „einfaches onboarding … Harness by default“ |
| Sales–Consultant-Zusammenarbeit | Akzeptiert | Consultant aus relevantem Projekt bringt Kontext; Sales, falls vorhanden, kommerzielle Arbeit. Gleiche Person darf mehrere Funktionen tragen | Chat Schritt 2 ergänzt und bestätigt |
| Bestandskundensignal und neue Ausschreibung | Akzeptiert | Zwei verschiedene Einstiege in Opportunity-to-Project erhalten | WF Proposal Lifecycle; Chat Schritte 2–3 |
| Opportunity-to-Project-Paket | Akzeptiert | Opportunity-Entscheidung, kundentaugliches Angebot/Ausschreibungsantwort und Project Activation Brief | Chat Schritt 3 |
| Signal wird automatisch qualifizierte Opportunity | Fachlich verworfen | Menschlich verantwortete Pursue/Bid-Qualifizierung bleibt nötig | WF Proposal Lifecycle, Session note 03.08. |
| Drei zusätzliche UI-Stufen in Schritt 5.2 | Offen | „Signal → Opportunity-Kandidat → angenommene Exploration“ wurde nur vorgeschlagen; keine Pflicht zu drei Objekten/Gates ableiten | letzter unbestätigter Grill-Vorschlag im Chat |
| Separates obligatorisches Internal Externalization Gate | Entfernt | Kein zusätzlicher universeller Gate-Begriff; benötigte Rechte-/Freigabegrenzen bleiben im jeweiligen Vorgang | Chat; WF Proposal Lifecycle |
| Fortschritt allein als Definition von Arbeit | Verworfen | Consulting Work, Work Result und Client Progress zusammen betrachten | WF Active Client Work Anatomy, Working Decisions 1–2 |
| Agentenziel über Outcomes statt nur erledigte Schritte bewerten | Präzisiert und bestätigt | Ergebnisbezogene Tests und fachliche Bewertung; später beobachtbare Wirkung getrennt führen | dasselbe Ticket, Working Decisions 3–5 |
| Unterschiedliche Testbarkeit von Outcomes | Präzisiert und bestätigt | Testbarkeit, Evidenzstand, Zeithorizont und Attribution unterscheiden; Urteil bleibt bei offenen Qualitätsfragen notwendig | dieselben Teilentscheidungen; direkte Nutzerergänzung |
| Quellenprüfung als eigenständiger globaler Bereich | Verworfen | Quellen, Evidenz und Prüfungen als Child im assoziierten Flow | Chat; Systemic Click Dummy Experience Contract |
| Corporate Alignment | Akzeptiert | Wissensbasis, fachlicher Inhalt, Corporate Design und Verwendung/Freigabe gelten auch für erzeugte und synchronisierte Artefakte | WF Corporate Artifact Alignment; Chat |
| Consultants pflegen ständig manuell Patterns | Verworfen | Überschneidungen und frühere Lösungswege aus zugelassenen Daten erkennen; Menschen entscheiden über koordinierte Arbeit oder Blueprint | Chat; WF Consultant Daily Work, Duplicate-work branch |
| Ähnlichkeit = automatisch wiederverwendbares Asset | Verworfen | Fachliche Eignung, Klientengrenzen und Rechte behalten; leichte Wiederverwendung und formale Produktisierung trennen | WF Reusable Asset Boundary; Reuse-Referenz |
| Jede Freigabe macht eine Aussage allgemein wahr | Nicht übernommen; Audit-Kritik | Freigabe eines Artefakts, Wissensübernahme, Asset Release und Modelltraining sind verschiedene Vorgänge | WF Reuse und Corporate Alignment; Audit des August-Pakets, keine eigene Nutzerabstimmung dazu |
| Dynamische Diagramme, Fragen, Few Shots und Artefaktflächen | Akzeptierte Experience-Richtung | Aufgabenpassende Interaktion und progressive Disclosure; keine festgeschriebene Screenarchitektur | WF UX Grammar; Chat |
| Vollständiger visueller PoC als Pflicht vor technischem Start | Aktuelle Richtung geändert | Technischen Kern priorisieren; Codex ist ein Beispiel. Keine konkrete neue Route ratifiziert, UI-Erkenntnisse bleiben nutzbar | Nutzer 04.09.2026 einschließlich nachfolgender Explorations-Korrektur |
| Security/Privacy und laufende Wissensverknüpfung | Aktuelle Suchrichtung | Wichtig für den nächsten technischen Schritt; noch keine Freigabe alter Gateway-, Graph-, Vault- oder Deployment-Entwürfe | Nutzer 04.09. einschließlich Explorations-Korrektur |
| Allgemeines Harness Framework als erstes Produkt | Verworfen für den Start | Kleine Consultry-spezifische Integration vorhandener Laufzeiten bevorzugen; Build-vs-Buy konkret prüfen | WF Harness Integration Boundary; ausdrücklicher Chat |

## Graph, Brain und historische technische Kandidaten

| Thema | Status | Was erhalten bleibt / was noch offen ist |
|---|---|---|
| Core Skill Graph | Fachliche Bedeutung akzeptiert | Versionierte passende AI-Skill-Definitionen und Beziehungen; kein Mitarbeiter-Skill-Ranking |
| Context/Knowledge, Skills, Execution, Validation und Authority | Semantische Trennung erhalten | Kein Beweis, dass dafür getrennte Datenbanken oder große Engines nötig sind |
| Graph-Datenbank | Technisch offen; Graph/Brain inzwischen zentral priorisiert | Die frühere Verschiebung macht den Graphen nicht wieder zu einem optionalen späteren Suchindex; physische Auswahl nach Abfragen, Aktualisierung und Zugriff |
| Bitemporalität | Früher technisch beschlossen, später zur Revalidierung gestellt | Herkunft und Historie erhalten; konkrete Speicherung ist offen |
| Eigene Runtime als zwingende Core-IP | Unbestätigter Architekturvorschlag | Kein stilles Überschreiben der OSS-orientierten Harness-Integration |
| Frühere Provider-, Datenbank- und Runtime-Stacks | Historische technische Kandidaten | Keine Implementierungsfreigabe durch Accepted-Tabellen älterer Dokumente; Modellhosting aus aktueller Übernahme ausgenommen |
| „Kein persistierter State ohne Approval“ | Audit: als Universalregel zu weit | Empfehlung: automatisches Ingest, Zwischenergebnisse und gekennzeichnete Ableitungen ermöglichen; fachliche Freigabe getrennt |
| „Kein produktiver Graph ändert sich aus einem Run“ | Audit: für Wissensdaten zu weit | Empfehlung: Wissensdaten quellengebunden aktualisieren; Skills, Policies und Berechtigungen dadurch nicht selbst verändern |
| Pseudonymisierung senkt automatisch Schutzklasse | Audit: nicht übernommen | Ersetzte Namen begründen allein keinen erlaubten Daten-/Modellweg |
| Rechte nur am Prompt oder Frontend prüfen | Audit: unzureichender Entwurf | Empfehlung: technische Durchsetzung bei Abruf, Ableitungen und Ausgängen prüfen |
| GNN, Manifold Steering, parametric memory, universelle Agency-Theorie | Exploratives Quellenmaterial | Relevanz fallbezogen prüfen; keine aktuelle Startanforderung |

Quellen: Kernel Data Model §§2.1,10,15–18; Virtual Harness Refinement; Privacy Egress Gateway §§3,5; Architektur-Track im August-ZIP; `papers/KnowledgeSources.md`. Die Einordnung „zu weit/unzureichend“ ist Audit-Ergebnis und technische Empfehlung, keine behauptete historische Nutzerabstimmung.

## Explorierte Pitch-/Business-Stände mit Herkunft

Quelle: das als „final“ bezeichnete Handover 26.08. §§1–4 und dessen HTML-Deck. Diese Werte sind im Paket berichteter Stand, keine aktuelle Ratifikation. Die Nutzerkorrektur zum explorativen Charakter ist ausdrücklich zu beachten. Verträge, Bankunterlagen oder neue Kundengespräche wurden nicht zur unabhängigen Bestätigung herangezogen.

| Thema | Berichteter Stand im August-Handover | Grenze |
|---|---|---|
| Investor-Narrativ | ein Produkt; Gewinnen, Liefern, Steuern; Firmengedächtnis | die drei Kreisläufe sind Kommunikationsverdichtung, nicht gesamte technische Architektur |
| Beachhead | IT/SAP, DACH, 20–200 Berater | Zahlenbasis im Deck verwendet andere Firmen-/Mitarbeitergrenzen; separat abgleichen |
| Betriebsmodell | historischer Entwurf im Quellenarchiv | aus der aktuellen Übernahme ausgenommen; kein festgelegter Betriebs-/Hostingansatz |
| Ask | 500.000 € für 17,5 % | ältere 200k-/250k-Stände historisch; keine neue Renditeempfehlung |
| All-in-Sitz | 149 € Standard / 189 € EU; Plattform 500 €/Monat als Annahme | Pricing ist nicht WTP-Validierung |
| Kapazitätswert | 2.275 €/Berater/Monat als Zielannahme | 3,5 h × 4 Wochen × 162,50 €; keine gemessene Einsparung |
| Markt/Plan | 14.500 Firmen, 1,63 Mrd. € EU-SAM; Jahr 3 13 Mio. € im jüngeren Pitch | Definitionen, Rohdaten und Finanzmodell bleiben zu prüfen |
| Krallmann | LOI unterschrieben laut Handover; bezahlter Pilot folgt | unterzeichneter Nachweis nicht im Paket; „LOI-Status fixieren“ ebenfalls offen |
| H&W | seit 18.08. aus Live-Pitch-Materialien genommen | historische Records bleiben erhalten |
| Compliance-Wording | keine pauschalen Compliance-Versprechen | Daten- und Modellweg konkret beschreiben |

## Lehren, die künftige Arbeit steuern sollten

1. **Jede Aussage hat Herkunft, Geltungsbereich und Status; jedes lebende Thema einen führenden Ablageort.** Mehrere Belege sind erwünscht. Pitch-Zahlen, Produktentscheidungen, Forschungsbelege und Implementierungen haben verschiedene Zuständigkeiten.
2. **Status gilt für Aussagen.** Ein offenes Ticket kann bereits ratifizierte Teilentscheidungen enthalten; ein geschlossenes Ticket kann nur eine Verschiebung dokumentieren.
3. **Breite bewahren, Tiefe verdienen.** Whole-Product-Abdeckung bleibt sichtbar. Details werden erst verbindlich, wenn sie einen realen Arbeitsfall, ein Ergebnis oder eine Grenze verändern.
4. **Erkenntnisse ins Arbeiten bringen.** Mehr Kontext oder mehr Graphknoten sind kein Kundennutzen. Ein Consultant muss ein besseres Ergebnis mit vertretbarer Nacharbeit erzeugen.
5. **Automation und Autorität trennen.** Viele technische Schritte können automatisch laufen, ohne eine kommerzielle Entscheidung oder fremde Zugriffsrechte zu erfinden.
6. **Bequemlichkeit benötigt keinen Genehmigungswald.** Proportionalität bewahren; Quellen-, Klienten- und Egress-Grenzen für die tatsächlich verarbeiteten Daten trotzdem durchsetzen.
7. **Graphnutzen messen.** Provenienz, Widersprüche und Aktualisierungen sind sinnvolle Hypothesen; eine Graph-Datenbank ist dafür noch kein Wirksamkeitsbeleg.
8. **Zustimmung ist keine Allgemeingültigkeit.** Menschen können irren; akzeptierte Ergebnisse bleiben zeit-, zweck- und quellenbezogen.
9. **Forschungswirkung ist keine Consultry-Wirkung.** BCG-/Anbieterbefunde unterstützen Hypothesen. Sie beweisen weder unsere Ersparnis noch eine Produktivitätsuntergrenze.
10. **Benutzbare Software schlägt weitere hypothetische Präzision.** Ein echter technischer Arbeitsfall kann die nächsten offenen Fragen besser schärfen als weitere hypothetische Details. Den Fall selbst wählen wir noch gemeinsam.
11. **Exploration bleibt reversibel.** Eine interessante Architektur, ein Pitch-Narrativ oder ein mehrfach wiederholtes Szenario darf den Produktkern nicht still verengen. Auch diese Konsolidierung muss ihre Empfehlungen als Empfehlungen ausweisen.

## Historische offene Arbeit bündeln

Die 32 offenen Tickets werden nicht als 32 Startblocker weitergetragen. Vorgeschlagene Einordnung, vollständige Rohdaten in [archive/migration-2026-09-10/proposal-review/WAYFINDER_TICKETS.csv](archive/migration-2026-09-10/proposal-review/WAYFINDER_TICKETS.csv):

| Gruppe | Anzahl | Behandlung |
|---|---:|---|
| Core, Record Authority, Knowledge, Model Bridge, Task/Skill, Execution/Validation, Oversight, Outcomes, MVP Boundary | 9 | nur am ersten Backend-Proof konkretisieren |
| Invariants, Core/Module/Surface, Domain/Lifecycle, Handoff/Recovery, Operating Grammar | 5 | minimal in denselben Proof-Vertrag integrieren |
| Adoption/Implementation Experience | 1 | auf die erste Quellenfamilie begrenzen |
| Paid ICP, Rollenverteilung und Persona-Reconciliation | 3 | kommerzielle Validierung parallel |
| Active Work, Corporate Alignment, Attention, Tender, Existing-Client Sensing, Reuse, residuale Journeys | 7 | Referenz; vertiefen, wenn der nächste Fall es benötigt |
| Coverage Skeleton, Traceability, Canon Reconciliation, Product Handoff | 4 | durch diese Konsolidierung verkürzen; Restumfang prüfen |
| Click Dummy, Three-Slice Contract, Three-Slice Handoff | 3 | alte Route durch aktuellen Backend-Start ersetzen |

Keine historischen Tickets wurden geschlossen oder ihre Status auf „erledigt“ gesetzt. Die vollständigen 59 Tickets sind archiviert. Die heutigen offenen Fragen werden im folgenden Register weitergeführt; alte Teilentscheidungen bleiben über SOURCES und das Ticketinventar zugänglich.

## Ergänzung 13.09.2026: Smoke-Test-Landingpages v2

Ordner: `smoketests/landingpage-positionierung/` (Elternordner `smoketests/`, ein Unterordner je Test; Ausgangsstand unter `screenshots/v1-before/`).

| ID | Aussage | Status und Grenze | Herkunft |
|---|---|---|---|
| D-0913-01 | Hero der fünf Smoke-Seiten trägt nur Eyebrow, H1, Ein-Satz-Lede, einen Gradient-CTA, einen Textlink und das Markenobjekt; kein UI-Mock im Hero. Die Produktfläche liegt in „So funktioniert es“ mit genau einer Geste | Akzeptiert (Nutzerbrief: Hero-Mocks zu komplex; Korrektur: Mock nicht im Hero) | Session 13.09. |
| D-0913-02 | Consultry-Identität bleibt Pflicht: warmer dunkler Hero (#1E1B18 mit Amber-Glow), Brand-Gradient auf CTA/Logo/zwei Trennern, Terracotta-Zahlen, warme Papierflächen. Ein heller Papier-Hero mit solidem Button wurde als „understyled, AI-generisch“ verworfen | Verworfen: heller Hero; Akzeptiert: dunkle Variante | Nutzerkorrektur 13.09. |
| D-0913-03 | Je Positionierung ein generiertes Markenobjekt (GPT Image 2.5 via Higgsfield, transparentes PNG → AVIF/WebP ≤ 30 KB) frei sichtbar als Hero-Visual; UI-Mocks dürfen Assets nicht verdecken | Akzeptiert; Rohbilder im Session-Scratch, optimierte Dateien unter `public/hero/` | Nutzerkorrektur 13.09. |
| D-0913-06 | Produktfläche nur in „So funktioniert es“ als App-Fenster in der Grammatik des implementierten App-Design-Systems (dunkle Shell, Icon-Navigation, kompakte Zeilen mit Status-Badges, Datenweg-Panel); wirkt nutzbar, ist ausdrücklich kein finales Produkt. Ein scripted Ablauf spielt die eine Geste beim Erreichen des Viewports einmal durch. Bewegtbild nur unter der Falz: Consultry-Hero-Film als lazy Loop, je Variante ein Kurzfilm als Click-to-Play | Akzeptiert (Nutzerkorrekturen: UI-Mock nicht im Hero; an Figma-Elementen orientieren, nicht textlastig; Filme lazy on play) | Session 13.09. |
| D-0913-07 | Marktrahmen: Beratungen (IT/SAP, DACH, 20–200 Berater) sind der erste Fokus für das persönliche Netzwerk-Marketing, nicht die Grenze des Marktes. Produktwording adressiert wissensintensive Unternehmen allgemein (Eyebrow „Der KI-Arbeitskern für wissensintensive Unternehmen“), der Fokus steht als Fokus im Band. TAM/SAM werden nicht mit dem ersten Marketingfokus verwechselt | Akzeptiert (Nutzerentscheidung 13.09.) | Session 13.09. |
| D-0913-08 | Smoke-Wording vereinfacht und marketingtauglich: je Konzept eine Abbildung (generiertes Objekt) und ein Satz; darunter drei KPI-artige Kacheln, deren Werte strukturelle Regeln des Produkts („Regel“) oder ausdrücklich benannte Ziele („Ziel“, z. B. < 15 min bis zum ersten Ergebnis aus dem Korpus-Ritual) sind, nie ungemessene Ergebnisse | Akzeptiert; Zahlen bleiben belegbar | Session 13.09. |
| D-0913-09 | Ledger-Positionierung im Smoke-Test: Der Ledger belegt nicht nur die Arbeit, er ist auch der vereinbarte gemeinsame Stand, den Agenten und Menschen teilen (Konsens ohne falschen Konsens, Widersprüche bleiben sichtbar). Anschluss an D-0910-03 und D-0910-04 | Akzeptiert (Nutzerentscheidung 13.09.); Mechanik der Annahme bleibt offen | Session 13.09. |
| D-0913-10 | Hotspots auf dem Hero-Objekt (zunächst Ledger): je Block ein Hotspot mit Mono-Ziffer, Neben dem Objekt steht eine persistente Eintragsleiste (die sechs Einträge des Laufs als Mono-Index und Kurztitel auf einer Haarlinie, der aktuelle Eintrag warm; Desktop oben rechts in der leeren Bildfläche, Mobil zweispaltig unterhalb), verknüpft mit den Blöcken und der Produktfläche: Hover/Fokus auf Block oder Leiste hebt beide hervor, Klick springt in die Produktfläche auf denselben Eintrag und setzt den Fokus dorthin, auf Touch erste Berührung eines Blocks Vorschau, zweite Sprung, Leisteneintrag springt sofort. Nach dem Laden wandert die Hervorhebung automatisch durch die sechs Einträge, solange das Objekt sichtbar ist, bis jemand eingreift; kein Autoplay bei reduzierter Bewegung. Keine Karte, kein Popup, nichts erscheint oder verschwindet. Präzisiert D-0913-01 und D-0913-03: kein UI-Mock im Hero, aber eine Eintragsleiste in der Bildgrammatik des Objekts; sie liegt nie über dem Objekt, nur der Glow berührt den Block | Akzeptiert (Nutzerentscheidung 13.09.) | Session 13.09. |
| D-0913-11 | Keine Karten-Boxen und keine KPI-Kacheln auf den Smoke-Pages: Der KPI-Strip unter den Konzepten (Regel/Ziel-Werte aus D-0913-08) ist gestrichen, die Konzepte stehen mit Illustration, Titel und einem Satz für sich; der Hero-Hinweis ist eine persistente Eintragsleiste statt Karte oder Popup. Ersetzt den KPI-Teil von D-0913-08. Offen: die dunklen Betriebswege-Karten über dem Film | Akzeptiert (Nutzerentscheidung 13.09.) | Session 13.09. |
| D-0913-04 | Performance-Budget: keine 3D-Laufzeit, keine Loops/Einblendungen, Prerendering der fünf Routen mit Font-/Bild-Preload; Lighthouse 97/100/100 (Perf/A11y/Best Practices) auf dem Build | Akzeptiert als Messlatte; Werte sind lokale Build-Messungen, kein Feldwert | Session 13.09. |
| D-0913-05 | `smoketests/landingpage-positionierung/src/styles/tokens.css` ist bis zur Wiederherstellung eines DS-Regeldokuments die De-facto-Token-Spezifikation der Smoke-Seiten; `design/DESIGN_SYSTEM` fehlt an HEAD | Offen/Vorschlag | DS-Audit 13.09. |

## Ergänzung 13.09.2026: Frontier-Forschung und adaptiver Harness

Anlass: ausdrücklicher Auftrag, arXiv 2609.07821, 2609.09153 und code4AI zu recherchieren und zu integrieren; gewünschte Richtung ist mehr Agentenfreiheit und weniger Overconstraining. [Forschungsbericht](archive/research-2026-09-13-harness-graph-ledger/REPORT.md) und [Quellen-/Ableitungsindex](archive/research-2026-09-13-harness-graph-ledger/EVIDENCE.json) trennen Befunde und eigene Vorschläge. Der Forschungsauftrag ratifiziert keinen vollständigen technischen Stack.

| ID | Aussage | Status und Grenze | Herkunft |
|---|---|---|---|
| D-0913-R01 | Frontier-Fähigkeiten nutzen; unnötige Vorgaben zum Lösungsweg reduzieren | **Aktuelle Nutzerrichtung.** Keine Ableitung, dass Rechte, erlaubte Wirkungen oder Ergebnisanforderungen obsolet werden | direkte Nutzeranweisung; bestehende Privacy-/Authority-Entscheidungen |
| D-0913-R02 | Ergebnisorientierter, vereinfachbarer Harness; prozedurale Sicht innerhalb des Core Skill Graph | **Forschungsinformierter Vorschlag.** Hilfe optional, keine Pflichtschrittfolge oder zusätzliche Graph-Engine; Runtime austauschbar | Research PG, H-CHANGE, H-STATE, PI |
| D-0913-R03 | Kompakter Task-Zustand, quellenbezogene Änderungssets und abrufbare Historie ergänzen sich | **Vorschlag zur Umsetzung** der bestätigten Ledger-/Kontinuitätsrichtung; Zustandsfelder und Konsistenzmechanik am Job prüfen | Research ASKS, STATE; L2–L5 |
| D-0913-R04 | Erfahrungen automatisch in getestete Skill-/Verfahrenskandidaten überführen | **Vorschlag.** Separater Lernlauf und Versionierung; keine manuelle Pattern-Pflege als Pflicht, keine Selbständerung von Rechten oder verbindlichen Erfolgskriterien | Research PG, WIKI, HOH; bestehende Nutzerkorrekturen |
| D-0913-R05 | A*-Thought-V2 als Referenz für modellinternes Latent Reasoning führen | **Rechercheeinordnung.** Kein Ledger-/Graph-Nachweis, keine direkt implementierbare Black-Box-API-Technik und keine neue Trainingsfreigabe | Research AT, AT-CODE |
| D-0913-R06 | Forschungsreferenz und nutzbare Softwareabhängigkeit unterscheiden | **Rechercheeinordnung.** ASKS v0.2.0 nichtkommerzielle Lizenzen; AStar-Thought Gesamtprojektlizenz ungeklärt; Pi Kandidat, nicht gewählt; HoH-lite noch angekündigt | Research ASKS-CODE, AT-CODE, PI, HOH |
| D-0913-R07 | Zusätzliche Harness-Komplexität durch Vergleich verdienen | **Empfohlener Nachweis:** schlanker Agent → lokales Verfahrenswissen → generierte Guidance; Lernänderungen separat und gleiche Rechte in allen Varianten | Research-Vergleich; W5 |
| D-0913-R08 | code4AI priorisiert zur Forschungsentdeckung verwenden | **Vom Nutzer gewünscht und integriert.** Sechs konkrete Video-/Paper-Zuordnungen; keine pauschale wissenschaftliche Autorität des Kanals, kein automatisches Monitoring eingerichtet | direkte Nutzeranweisung; Research YT |

Nicht aus der Recherche abgeleitet: generelles Abschaffen von Prüfungen, garantierte Verbesserung durch mehr Graphstruktur, automatische Firmenwahrheit durch Schwarmkonsens, obligatorische mehrstufige Freigabe jeder Aktion, Foundation-Model-Training oder ein eigenes allgemeines Harness-Framework. Modellhosting bleibt außerhalb dieses Auftrags. Historische Ticketstatus bleiben unverändert.

## Ergänzung 14.09.2026: breiter Arbeitskern, Grundschutz und Messaging

Quelle: [datierte Voice-Notiz mit Formulierungen, Seitenzuordnung und Story-Belegen](archive/session-2026-09-14-framing-messaging/NOTES.md). Diese Ergänzung präzisiert D-0913-07 und D-0913-09; historische Hostingentwürfe werden nicht dadurch ratifiziert.

| ID | Aussage | Status und Grenze |
|---|---|---|
| D-0914-F01 | Consultry bleibt unter gleichem Namen ein Arbeitskern für Menschen und Agents; Solo-Founder, kleine Teams und größere Organisationen gehören zum Zielbild. Beratungsqualität ist Qualitätsanspruch, keine Consulting-only-Produktgrenze | **Akzeptiert.** Beratungen bleiben wichtiger Anwendungs-/Netzwerk-Marketingkontext. Kein universelles Framework oder zusätzlicher B2C-Vertriebsplan beschlossen |
| D-0914-F02 | Gute KI-Arbeit weniger von persönlicher Konfigurationskompetenz abhängig machen; verwertbare Vorarbeit und aktuellen Stand über Agents und Sitzungen erhalten | **Akzeptierte Richtung.** Harness by default, frei wählbare Lösungswege. Keine garantierte Ergebnis- oder Tokenersparnis |
| D-0914-F03 | Grundschutz gilt für alle: Mitarbeiter können Unternehmensregeln nicht durch pauschale Agentenfreigaben ausweiten. Lesen, Schreiben, Löschen und Weitergabe außerhalb editierbarer Prompts/Skills prüfen | **Akzeptierte Kernanforderung**, ausdrücklich einschließlich klassischer Guardrails. Kein universelles Freigabegate je Schritt; Wirksamkeit noch nachzuweisen |
| D-0914-F04 | Zusätzliche Isolation, private Modellbereitstellung und gegebenenfalls Hosting als gesondertes Angebot | **Aktuelle kommerzielle Richtung.** Grundschutz nicht optional. Hosting als Option neu geöffnet; Umfang, Betrieb, Kosten und Preise offen, alte Hostingpläne nicht übernommen |
| D-0914-F05 | Ledger/Konsens auch als Grundlage regelbasierter Eingriffe bei Agenten-Grenzverletzungen untersuchen | **Explorative Hypothese.** Befugnis-/Budgetentzug und Unterbrechung denkbar; Mechanik offen. Konsens ersetzt weder Wahrheit noch präventive Durchsetzung. „Punishment macht Agents sicher“ nicht als Claim übernehmen |
| D-0914-F06 | Menschliches, emotional greifbares Marketing mit belegten viralen Geschichten; später LinkedIn-Founder-Content zu passenden Landingpages | **Gewünscht und als Briefing gesichert.** Noch keine finale Copy, Posts oder Veröffentlichung. Quellenkontext erhalten; Consultry-Wirksamkeit nicht aus fremden Vorfällen ableiten |

## Ergänzung 15.09.2026: Task-Schwarm als Arbeitsmodul

Herkunft: Der Nutzer präzisiert „Schwärme werden zur Erfüllung von task genutzt“ und bittet anschließend, dies für das Modul und seine technischen Funktionalitäten im Zusammenhang mit den anderen Consultry-Ansätzen auszuarbeiten. Zuvor wurden Minsky und nachfolgende Arbeiten als methodische Referenz vorgeschlagen. Quellenzugriff: [SOURCES](SOURCES.md#methodischer-anschluss-task-schwarm-und-situative-zusammenarbeit).

| ID | Aussage | Status und Grenze |
|---|---|---|
| D-0915-S01 | Ein Task-Schwarm erfüllt einen Arbeitsauftrag. Recherche, Analyse, Entwicklung, Erstellung und Verbesserung der Ergebnisse sind seine Arbeit; Kritik, Konsens und Veto unterstützen diese Arbeit | **Akzeptiert, direkte Nutzerpräzisierung.** Kein primär prüfendes Kontrollgremium, keine Beschränkung auf Angebotsarbeit |
| D-0915-S02 | Task-Schwarm als Modul im Zusammenhang mit bestehendem Kern, Harness, Graph, Skills, Co-Work, Model Bridge und Ledger ausarbeiten | **Gewünschte Ableitung.** Funktionsentwurf in [PRODUCT](PRODUCT.md#task-schwarm-modul-arbeitsentwurf) und [BACKEND-START](BACKEND-START.md#task-schwarm-technischer-funktionsentwurf). Modulgrenze ist noch kein Preis-/Lizenzpaket; kein neues allgemeines Agent Framework beauftragt |
| D-0915-S03 | Minsky/Singh als methodische Referenz für situative Fähigkeiten, Kritik/Methodenwechsel und wiederverwendbare Erfahrung verwenden | **Methodische Referenz vorgeschlagen.** Konkrete Umsetzung, Aktivierungslogik und Lernerfolg müssen geprüft werden; kein kognitives Modell als Sicherheitsbeweis oder verpflichtende Modellzerlegung übernehmen |
| D-0915-S04 | Fachlichen Arbeitskonsens, Protokollkonsens und technische Ausführungssperre getrennt behandeln | **Präzisierender technischer Vorschlag** im Anschluss an D-0914-F03/F05. Blockchain/P2P bleibt gewünschter Untersuchungskandidat; kein Protokoll, Quorum, Vetoalgorithmus oder Stack ratifiziert |

Der zuletzt skizzierte Enterprise-Pilot-/Angebotsfall bleibt ein illustrativer W1-Kandidat. Die Zustimmung zur Bedeutung von Schwärmen wählt diesen Fall nicht automatisch als ersten Build. Die technischen Tabellen unten bilden einen Arbeitsentwurf, keinen vollständig akzeptierten Feature-Backlog.

## Aktueller Wayfinder ab 10.09.2026

Dies ist der einzige laufend gepflegte Fragenstand. Die Reihenfolge ist eine Route zum ersten echten Durchlauf, kein vollständiger neuer Definitionszyklus. Fragen werden nur so weit geklärt, wie sie den nächsten Arbeitsschritt beeinflussen.

| ID | Offene Frage und nächstes Ergebnis | Empfehlung / Status | Historischer Anschluss |
|---|---|---|---|
| W1 | Welcher konkrete Wissens-/Arbeitsjob mit welchen zugänglichen Quellen und welchem verwendbaren Ergebnis trägt den ersten Backend-Durchlauf? | **Nächster Schritt.** Einen realen Job auswählen; Beratungsfälle bleiben Kandidaten, sind seit D-0914-F01 keine Produktgrenze. Vertrauliche Struktur zunächst mit synthetischen/freigegebenen Inhalten abbilden. Erstfall offen. | Product Horizons; Contextual Task; Adoption; Active Work |
| W2 | Wie arbeiten Menschen und Agents für W1 zusammen, und wann gilt ein neuer gemeinsamer Arbeitsstand? | Kleinen Aufgabenvertrag mit Ziel, menschlicher Verantwortung, Teilnehmern, Kontext-/Skill-Versionen, Beiträgen, Konflikten und Annahme für benannten Zweck definieren. Task-Schwarm als gemeinsame Ergebniserstellung berücksichtigen, nicht auf Review reduzieren. | Core/Surface; Human-AI Oversight; Execution/Validation; L2–L7; D-0915-S01/S02 |
| W3 | Welche Inhalte darf wer abrufen und an wen zurückgeben, auch bei Gruppenwechsel, Quellenänderung und Rechtewiderruf? | Rechte und zulässige Verarbeitung bis zum Ergebnisempfänger prüfen; fachliche Annahme und Weitergabe getrennt behandeln. Detail am gewählten Fall. | Model Bridge; Authority; Knowledge/Reuse; L8 |
| W4 | Welche minimale API-/Harness- und Graph-/Ledger-Realisierung macht W1–W3 nutzbar? | Vorhandene Ausführung mit dauerhaftem Kern verbinden; Agent entscheidet den Weg. Prozedurale Hilfe optional, Rechte außerhalb der Hilfe durchsetzen. DID/Konsens/Storage nach Nachweisbedarf. D-0914-F04 öffnet Zusatzhosting als separate Option, nicht als Startpflicht. | Harness Boundary; Kernel/Graph; D-0913-R01–R06 |
| W5 | Woran erkennen wir nützliche Arbeit, zuverlässige Kontinuität und mögliche Lernmuster? | Verifizierbare Tests, fachliche Bewertung und spätere Wirkung trennen. Wiederaufnahme/Sharing prüfen; zusätzliche Verfahrenshilfe gegen schlanken Agenten testen, Lernänderungen separat. Bei Modellwechsel unnötige Hilfen entfernen. | Outcomes; Validation; L4; D-0913-R07 |
| W6 | Welche kommerziellen Annahmen braucht der erste Pilot tatsächlich? | Käufer, Aufwand, Nutzen und Pilotcommitment parallel konkretisieren. Frühere Krallmann-/Pitch-Aussagen bleiben berichteter Stand bis zum Beleg. | Paid ICP; Archetypes; GTM |

W1 führt zu W2/W3; daraus folgen W4 und die konkreten W5-Prüfungen. W6 läuft parallel. Bei einer Antwort werden Status, Begründung und Quelle hier aktualisiert; die relevanten Auswirkungen gehen in PRODUCT, CONTEXT oder BACKEND-START. Archivierte Tickets werden dafür nicht erneut zur lebenden Map gemacht.
