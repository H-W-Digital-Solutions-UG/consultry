# Consultry: Integration des Agenten-Wissensledgers

Stand: 05.09.2026. **Status: gewünschte Produktidee, technische Integration als Vorschlag.** Der Nutzer ordnet das DID-DAG-Handover mit der aktuellen Übergabe ausdrücklich Consultry zu. Damit ist die frühere offene Zielprojektfrage des Handovers beantwortet. Eine konkrete Blockchain, DID-Methode, Datenbank oder Konsensimplementierung ist weiterhin nicht gewählt. Es wurde kein Ledger-Backend implementiert.

## Gemeinsames Zielbild

Wissen soll einfach über die UI in den Consultry-Kern gelangen und über API beziehungsweise Harness rollenbasiert nutzbar sein. Der graphbasierte Kern verbindet Quellen, Aussagen, fachliche Objekte und Ergebnisse. Das Wissensledger ergänzt die nachvollziehbare Entwicklung dieses Kontexts: frühere Annahmen, Begründungen, Gegenbelege, Revisionen, parallele Sichtweisen und die jeweils akzeptierten Arbeitsstände.

Eine neue Agentensitzung soll sowohl den heutigen zulässigen Wissensstand als auch dessen Entstehung nachvollziehen können. Historisch gespeicherte Information bleibt dabei an aktuelle Zugriffs- und Aufbewahrungsregeln gebunden. Das gilt innerhalb einer Beratung ebenso wie an Klienten- und Projektgrenzen.

Die aktuelle Richtung und ihre Herkunft stehen in [_CONTEXT-AND-MEMORY.md](_CONTEXT-AND-MEMORY.md). Die [Wissenskonsolidierung vom 04.09.](../../intake-2026-09-05/Consultry-Wissenskonsolidierung-2026-09-04.zip) bleibt der eingefrorene Organisationsvorschlag. Das [DID-DAG-Handover](../../intake-2026-09-05/did-dag-handover.md) liefert die neue Idee; dieses Papier beschreibt ihre Verbindung mit Consultry.

## Was übernommen wird und was offen bleibt

| Gegenstand | Einordnung nach der Zusammenführung |
|---|---|
| Integration der Ledger-Idee in Consultry | Mit dieser Nutzerübergabe gewünschte Richtung |
| Kontextentwicklung, Quellen, Revisionen und private Kontextdomänen | Kerngedanken des übergebenen Konzepts; als Anforderungen konkret zu prüfen |
| UI → gemeinsamer Kern → rollenbasierte API/Harness-Nutzung | Bereits dokumentierte direkte Nutzerpräzisierung vom 04.–05.09. |
| Graph/Brain als zentrale technische Richtung | Bestehende Priorisierung; der Graph wird nicht wieder auf einen späteren Suchindex reduziert |
| Frontier-bevorzugte sensible AI-Verarbeitung | Bestehende Richtung: berechtigter Kontext und zulässiger Verarbeitungsweg begrenzen die Modellwahl |
| Signiertes Ereignisprotokoll, private Inhaltsablage und versionierte Kontextstände | Empfohlener erster technischer Vergleichskandidat, noch keine Architekturentscheidung |
| DID, verteilte Konsensregeln, externe Checkpoint-Verankerung | Zu untersuchende Ausprägungen der blockchainnahen Idee |
| Öffentliche Chain, permissioniertes Netz, bestimmte Runtime/Graph-Datenbank | Offen; aus dem Handover folgt keine Auswahl |
| Ablösung von `latest/` durch sechs Dokumente | Weiterhin Organisationsvorschlag; diese Integration führt den Umzug nicht aus |

## Anschluss an vorhandene Consultry-Begriffe

Die folgenden Objekte stehen bereits im [Kernel-Datenmodellentwurf](Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md), insbesondere §§6.1 und 15.6. Auch dieser Entwurf ist ein technischer Kandidat. Die Zuordnung übernimmt weder seine gesamte Entity-Liste noch frühere Datenbank- und MVP-Festlegungen.

| Ledger-Bedarf | Vorhandener Anschluss | Ergänzung für die Exploration |
|---|---|---|
| Aussage und ihre Entwicklung | `ContextAssertion` / `ContextAssertionRevision` | Voraussetzungen, Bestätigung, Widerspruch, Präzisierung, Ersetzung und parallele Revisionen ausdrücklich darstellen |
| Herkunft | `SourceBinding`, `SourceSpan`, `ArtifactVersion`, Provenienzrelationen | konkrete Quellenversion und beobachtbare Begründung an der jeweiligen Revision erhalten; unbekannte Evidenz sichtbar lassen |
| Kontext eines Agentenlaufs | `ContextSnapshot` / `ContextSnapshotItem`, Run-Bezug | tatsächlich bereitgestellte Versionen binden; zusätzliche Abrufe als autorisierte Erweiterungen protokollieren |
| Änderungshistorie | `DomainEvent`, `RunEvent`, `AuditEntry`; vorhandener `previous_record_digest`-Entwurf | verzweigte Vorgängerbezüge und nachvollziehbare Annahmeentscheidungen prüfen |
| Akzeptierter Arbeitsstand | bestehende Entscheidungs-/Validierungsbezüge | neuer Kandidat `KnowledgeCheckpoint`: Scope, Heads, Regelversion, Prüfer, Annahme und verbleibende Konflikte |
| Private Kontextdomäne | Tenant-, Klienten-/Projektgrenzen, Authority-/Policy-Kontext | Inhalte, Relationen, Historie, Metadaten, Caches und Ausgänge nach demselben Schutzbedarf behandeln |

`KnowledgeCheckpoint` ist ein neuer Arbeitsbegriff in diesem Vorschlag, kein bereits ratifizierter Glossarbegriff. Das bestehende **Whole-Consultancy Coverage Ledger** ist dagegen die fachliche Abdeckungskarte des Beratungsbetriebs und bleibt ein anderer Gegenstand.

## Drei zusammenwirkende Sichten

1. **Quellen und private Inhalte:** Dokumente, Evidenz und ausführliche Beiträge liegen in einer autorisierten Inhaltsablage mit Versionen und Aufbewahrungsregeln.
2. **Historie der Kontextentwicklung:** Ereignisse verweisen auf bereits vorhandene Vorgänger. Neue Widersprüche und Korrekturen ergänzen die Historie. Diese Vorgängerstruktur kann als DAG modelliert werden.
3. **Nutzbare Wissenssicht:** Der Kern stellt daraus aufgabenbezogene Aussagen und Beziehungen bereit. Der semantische Wissensgraph darf Zyklen enthalten. Die Trennung der Sichten legt noch keine getrennten Datenbanken fest.

Ein Kontextstand braucht mindestens eine unterscheidbare Erfassungszeit und, soweit bekannt, einen fachlichen Gültigkeitszeitraum. „Was wussten wir damals?“ und „Was gilt rückblickend für damals?“ sind unterschiedliche Abfragen. Eine Korrektur darf den seinerzeit verwendeten Kontext eines Arbeitsergebnisses nicht still umschreiben.

Für einen ersten Entwurf wären an Revisionen Identität/Urheberschaft, Scope, Quellenversionen, Vorgänger, Aussageart, Evidenzstatus und Zeitbezug zu prüfen. An einem Checkpoint wären die akzeptierten Heads, die Annahmeregel, Entscheidungsbeiträge und offene Konflikte zu binden. Ein technischer Annahmestatus gilt für seinen benannten Zweck und ist keine globale Wahrheitsmarkierung.

## Agentenbeiträge und menschliche Verantwortung

Agenten können Beiträge erzeugen, prüfen und unter festgelegten Regeln einen gemeinsamen Arbeitsstand vorschlagen oder technisch akzeptieren. Konsens, unabhängige Evidenz und geschäftliche Autorität bleiben unterscheidbar: mehrere Agenten können dieselbe falsche Annahme teilen. Unterschiedliche Agentennamen belegen keine unabhängigen Prüfer.

Ein akzeptierter Checkpoint erteilt deshalb keine Opportunity-Qualifizierung, Kundenfreigabe oder klientenübergreifende Corpus Admission. Diese Wirkungen benötigen die jeweils geltende menschliche Verantwortung und Befugnis. Umgekehrt entsteht daraus kein pauschaler zusätzlicher Freigabeschritt für jede interne Agentenableitung.

Die rekonstruierbare Begründung besteht aus Quellen, expliziten Annahmen, beobachtbaren Aktionen, Prüfresultaten und dokumentierten Entscheidungen. Sie setzt keinen Zugriff auf verborgenes internes Modelldenken voraus.

## Zugriff und zulässige Verarbeitung

Ein möglicher `Context Envelope` verbindet Agent/Betreiber, Auftrag, Delegation, Scope, erlaubte Kontextversionen, Policy-Version, zulässige Tools/Empfänger und Laufzeit. Er ergänzt den Kontext-Snapshot. Das Backend prüft die aktuelle Berechtigung bei jedem Zugriff; ein alter gültiger Envelope gewährt nach Widerruf keine fortbestehenden Rechte.

UI, API, Harness, Suche, direkte Objektabfragen und Graph-Traversierung müssen dieselben Grenzen beachten. Ein zusätzlicher Kontextabruf benötigt eine erneute Prüfung und einen eigenen nachvollziehbaren Bezug zum Lauf. Die Ausgabe an einen extern modellgestützten Client ist selbst ein zu prüfender Datenweg. Auch ein Synthese- oder Prüfagent erhält nur den für seine Aufgabe zulässigen Kontext.

Sensible Inhalte und verräterische Metadaten gehören nicht ohne gesonderte Zulässigkeit in eine gemeinsam sichtbare Nachweisebene. Private Evidenz kann über einen begrenzten Prüfbeleg referenziert werden; dessen Aussage muss sichtbar machen, was tatsächlich geprüft wurde. Eine Zusammenfassung oder ein Hash ist nicht automatisch freigegeben. Fachliche Reuse-Freigabe, Informationsfreigabe zwischen Domänen und die Wahl eines zulässigen Modellwegs sind getrennte Entscheidungen.

Die aktuelle Anforderung an sensible AI-Verarbeitung gilt bereits für den Einstieg. Sie wird nicht erst durch den älteren, als Zukunftsentwurf markierten [Privacy Egress Gateway](Consultry-Privacy-Egress-Gateway-v0.1.md) wirksam; dessen konkrete Mechanik bleibt zu prüfen.

Bei Löschung oder gesperrter Evidenz muss die Rekonstruktion ihre Lücken kenntlich machen. Widerruf zukünftiger Zugriffe holt bereits ausgelieferte Kopien nicht zurück. Eine lückenlose, unbegrenzt verfügbare Historie wird daher nicht versprochen.

## Gemeinsamer Arbeitskontext für Menschen und Agents

Consultry soll mehrere menschliche und maschinelle Identitäten an demselben Projekt-, Case-, Task-, Plan- oder Artefaktkontext beteiligen können. Der kanonische Anschluss ist ein `Shared Co-Work Context`: ein langlebiger fachlicher Arbeitszusammenhang mit Ziel, Arbeitsstand, relevanten Wissensbeziehungen, Beiträgen, offenen Fragen, Resultaten und Handoffs. Ein Group Chat kann diesen Kontext darstellen und steuern, ist aber weder dessen alleiniger Speicher noch eine eigene Projektwahrheit.

Alle Beteiligten beziehen sich auf dieselben fachlichen Identitäten und Versionen, erhalten aber keine pauschal identische Datensicht. Vor jedem Abruf oder Agentenlauf wird eine identitäts-, zweck- und aufgabenbezogene Projektion beziehungsweise Context Capsule bestimmt. Ein neuer Mensch, Agent, Harness oder Service erweitert den sichtbaren Kontext nicht still; seine Teilnahme und jeder spätere Kontextabruf unterliegen der aktuellen Technical Authorization und dem zulässigen Processing Envelope.

Jeder Beitrag bleibt seinem tatsächlichen Human- oder Machine-Subject und, bei Agenten, dem konkreten Run zurechenbar. Mehrere Agenten dürfen parallel analysieren, entwerfen, challengen oder prüfen. Ihre Einigung ist weder unabhängige Evidenz noch menschliche Freigabe. Verantwortete Entscheidungen und Effects folgen weiterhin den bestehenden Responsibility-, Authority- und Human-AI-Grenzen.

Ob der Shared Co-Work Context später ein eigenes persistiertes Domain Object, eine Sicht über Case-/Task-/Artifact-Aggregate oder eine Kombination daraus wird, bleibt technische Exploration. Verbindlich ist die fachliche Kontinuität über Group Chat, App, API und Harness hinweg sowie die berechtigungsspezifische Sicht statt eines gemeinsamen unbeschränkten Prompts.

## Rolle von DID und Blockchain

Die blockchainnahe Idee bleibt im Lösungsraum: Beiträge signieren, Entwicklungszweige nachvollziehen, akzeptierte Zustände als Checkpoints festhalten und diese bei begründetem Bedarf extern verankern.

**Empfehlung für den ersten Vergleich:** Zuerst prüfen, wie weit ein privates, signiertes und verkettetes Ereignisprotokoll mit überprüfbaren Checkpoints den konkreten Consultry-Fall trägt. Änderungen sind damit nur unter definierten Schlüssel-, Verifikations- und Vertrauensannahmen nachweisbar; ein vom selben Betreiber vollständig kontrollierter Log und Prüfpunkt bieten keine unabhängige Absicherung gegen diesen Betreiber.

Ein verteiltes oder extern verankertes Ledger wird besonders dann relevant, wenn getrennte Betreiber gemeinsame Zustände prüfen müssen und keinem einzelnen Betreiber allein vertrauen sollen. Dafür sind Mitgliedschaft, Quorum, Konfliktlösung, Finalität, Schlüsselrotation und Sichtbarkeit zuerst am konkreten Fall festzulegen. Auch externe Verankerung bestätigt weder die sachliche Richtigkeit eines Inhalts noch die Vollständigkeit aller erfassten Vorgänge.

DIDs können Identitäten und Verifikationsmethoden adressierbar machen. Sie vergeben keine Consultry-Rollen oder Geschäftsautorität; DID Core sieht auch Register außerhalb einer Blockchain vor. [W3C DID Core, Architektur und Capability Invocation](https://www.w3.org/TR/did/#architecture-overview)

Auch ein verifiziertes Credential belegt nicht automatisch die Wahrheit seiner Claims; der Vertrauensrahmen bleibt gesondert zu bestimmen. [W3C VC Data Model 2.0, Trust Model](https://www.w3.org/TR/vc-data-model-2.0/#trust-model)

Merkle-Konsistenznachweise können die unveränderte Erweiterung eines Logs prüfbar machen. RFC 9162 beschreibt dafür Certificate Transparency und ist eine Referenz für den Nachweistyp, keine fertige Consultry-Architektur. Die hier empfohlene getrennte Prüfung des Blockchain-Bedarfs ist eine eigene Ableitung. [RFC 9162 §2.1.4](https://www.rfc-editor.org/rfc/rfc9162.html#section-2.1.4)

Signaturen und Merkle-Nachweise beweisen allein nicht, welchen Kontext ein Modell ausschließlich genutzt hat. TEE- und Zero-Knowledge-Verfahren bleiben spätere Optionen für einen konkret benannten Nachweisbedarf.

## Kleiner überprüfbarer Arbeitsfall — Vorschlag

Eine synthetische Projektanalyse verwendet Quelle A/v1 und eine freigegebene Firmenmethode. Ein Analyseagent formuliert eine Annahme, ein Prüfagent dokumentiert einen Gegenbeleg. Quelle A/v2 ändert eine Voraussetzung. Eine zweite Sitzung muss die Revision und den früheren Stand erklären können. Ein Agent ohne Klientenrecht darf weder Inhalt noch verräterische Graphbeziehungen abrufen. Der Fall erprobt Kontextentwicklung und nutzbare Projektarbeit zusammen; die Auswahl des ersten realen Falls bleibt offen.

| Prüffall | Erwarteter Nachweis im späteren Proof |
|---|---|
| Neue Quelle revidiert eine Annahme | alte und neue Revision mit Ursache und betroffenen Ergebnissen nachvollziehbar |
| Parallel erzeugte, widersprüchliche Beiträge | beide erhalten; keine stille Auswahl durch „letzter Schreibzugriff gewinnt“ |
| Kontextrekonstruktion zu zwei Zeitpunkten | damaliger Arbeitsstand und heutige Sicht unterscheidbar, exakte verfügbare Versionen |
| Unerlaubter Direkt-/Such-/Graph-/Historienzugriff | kein geschützter Inhalt und keine verräterischen Metadaten ausgeliefert |
| Widerruf während eines Laufs | Folgeabrufe verweigert; bereits ausgelieferter Kontext als bekannte Grenze ausgewiesen |
| Zusätzlicher erlaubter Abruf | Erweiterung mit Policy-Prüfung und Versionsbezug am Lauf sichtbar |
| Retry oder beschädigter signierter Beitrag | keine doppelte fachliche Wirkung; ungültiger Nachweis erkannt |
| Agenten einigen sich auf ungestützte Aussage | Evidenzmangel bleibt sichtbar; keine automatische Geschäftsfreigabe |
| Evidenz nicht mehr verfügbar | begrenzte Rekonstruktion ausgewiesen, fehlende Quelle nicht erfunden |

Diese Prüfungen wurden hier nicht implementiert oder ausgeführt. Vor einem Bau sind vor allem erster Job/Quellenumfang, Betreiber-/Vertrauensmodell und minimale Annahme-/Zugriffsregeln zu konkretisieren. Daraus lassen sich Daten- und API-Verträge ableiten, ohne den ganzen historischen Architekturentwurf vorab festzuschreiben.

## Herkunft und Dokumentenpflege

- **Ergänzung aus der Voice-Diskussion vom 05.09.2026:** Die [HTML-Übersicht](../../../../output/Consultry-Hybrid-AI-2026-09-05/index.html) führt Schwarmkonsens, Task-Teilgraphen, Rollen-/Skill-Kontext, beobachtbare Trajectories und geprüfte Lernmuster mit den zulässigen hybriden Datenwegen zusammen. Sie enthält auch die neue Frage nach Consultrys Datenrolle, DGX Spark/Mac mini sowie Kosten- und Messannahmen. Direkte Nutzerrichtung und noch offene technische/rechtliche Ausgestaltung sind dort getrennt gekennzeichnet; dieser erste Integrationskandidat ist entsprechend zusammen mit dieser Ergänzung zu lesen.
- [Eingangsquellen und Prüfsummen](../../intake-2026-09-05/README.md): beide unveränderten ZIPs und lesbares Ledger-Handover.
- [Abgleich und Archivierungsvoraussetzungen](../../intake-2026-09-05/RECONCILIATION.md): neuere lokale Präzisierungen, gesicherter Bestand und Grenzen des Snapshots.
- Die im Original-HTML gezeigten direkten Output→DAG-Verweise, „öffentlichen“ Metadaten und Aussagen zur vollständigen Provenienz sind nur früher Konzeptstand. Maßgeblich für das Verständnis sind die Einschränkungen des mitgelieferten Markdown-Handovers und die hier ausdrücklich markierten Vorschläge.
- Bei einer späteren Übernahme der sechs führenden Dokumente geht die fachliche Ledger-Anforderung in PRODUCT, ihr Status in DECISIONS und die technische Hypothese in BACKEND-START auf. Dieses Integrationspapier wird dann Herkunft; es soll kein dauerhaft paralleles Produktregister entstehen.
