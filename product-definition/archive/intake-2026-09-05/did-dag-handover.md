# Handover: DID-DAG-Wissensledger für AI-Agent-Swarms

Stand: Zusammenfassung des vorliegenden Chatverlaufs. Sprache: Deutsch.

Status: konzeptioneller Entwurf mit HTML-Visualisierung. Keine implementierte Ledger-, Konsens-, Berechtigungs- oder Agentenlaufzeit. Kein ausgewähltes Zielprojekt und keine extern recherchierte oder experimentell validierte Architektur.

## 1. Ziel und Kernidee

Die Idee ist ein gemeinsamer, nachvollziehbarer Wissens- und Kontextpool für AI-Agent-Swarms. Er soll festhalten, welche Aussagen der Schwarm unter welchen Voraussetzungen akzeptiert, wie sich dieser Stand entwickelt und welche Informationen einzelne Agenten lesen oder weitergeben dürfen.

Der wesentliche Anspruch des Nutzers ist die **Rekonstruktion der Kontextentwicklung**: Neben dem aktuellen Ergebnis sollen frühere Annahmen, Begründungen, Gegenbelege, Revisionen und parallele Sichtweisen erhalten bleiben. Ein gemeinsamer Faktenbestand allein erfüllt diesen Anspruch nicht.

Als Arbeitsbezeichnung entstand ein **DID-signierter epistemischer DAG mit konsensierten Checkpoints** beziehungsweise ein **Context Ledger**. „Epistemisch“ bezeichnet hier die Entwicklung von Wissen, Annahmen und begründeten Aussagen. „DID-DAG“ ist eine Bezeichnung für die diskutierte Kombination, keine im Gespräch ausgewählte fertige Technologie oder verbindliche Standardspezifikation.

Die zwei zusammenhängenden Bausteine sind:

1. Ein versionierter Wissens- und Provenienzgraph mit Identitäten und einer Regelung für akzeptierte Zustände.
2. Private Kontextdomänen mit technisch durchgesetzten Zugriffs- und Freigabegrenzen.

## 2. Wie sich die Idee im Gespräch entwickelt hat

| Schritt | Beitrag des Nutzers | Daraus entwickelte Richtung |
| --- | --- | --- |
| Ausgangspunkt | Blockchain als Storage für einen konsensbestätigten Fakten- und Kontextpool für AI Agents. | Diskussion über Herkunftsnachweise und gemeinsam akzeptierten Zustand. |
| Erste Präzisierung | Die Betrachtung soll Agent-Swarms einschließen, die innerhalb des Schwarms Konsens finden. | Vorläufig akzeptierte Arbeitsannahmen und Entscheidungen als Gegenstand des Konsenses. |
| Zentrale Korrektur | Ein bloßer Konsensstand bildet die Kontextentwicklung nicht ausreichend ab; diese ist essenziell. | Versionierte Aussagen, Historie, Abhängigkeiten, Widersprüche und parallele Zweige. |
| Architekturidee | DID-DAG als möglicher Ansatz. | Verbindung überprüfbarer Identitäten mit einem nachvollziehbaren Graphen von Zustandsänderungen. |
| Sicherheitsanforderung | Rollen und Identitäten sollen Grenzen bilden; bestimmte Inhalte dürfen andere Agenten nicht lesen und sollten gar nicht auf der gemeinsam sichtbaren Chain stehen. | Trennung zwischen eingeschränkt sichtbaren Nachweisen und privaten Inhaltsbeständen. |
| Ergebniswunsch | Eine HTML-Datei mit visueller Darstellung, anschließend Erläuterung. | Die beigefügte Konzeptansicht zeigt Architektur und autorisierten Zugriff. |
| Aktueller Auftrag | Bestehende Chat-Einsichten als herunterladbares Handover sichern. | Dieses Dokument; eine Projektanpassung wurde noch nicht vorgenommen. |

Der Nutzer wollte die Idee zwischenzeitlich für ein konkretes Zielsystem schärfen. Der Projektname blieb unklar. Consultry wurde lediglich in einer Rückfrage des Assistenten genannt und vom Nutzer nicht bestätigt. Daraus lässt sich keine Projektentscheidung ableiten.

## 3. Wissensmodell und Kontextentwicklung

Ein vorgeschlagenes Wissensobjekt enthält eine Behauptung oder Hypothese mit Quellen beziehungsweise Evidenz, Urheber, Version, Gültigkeitsbereich, Zeitbezug und gegebenenfalls einer Konfidenzangabe. Zu seinem Kontext gehören die Voraussetzungen und Vorgängerversionen, auf denen es aufbaut.

Neue Erkenntnisse ergänzen die Historie. Denkbare Relationen sind „bestätigt“, „widerspricht“, „präzisiert“, „ersetzt“ und „gilt nur unter dieser Annahme“. Verworfene Hypothesen und Minderheitspositionen bleiben als historische Information erhalten, soweit dies mit den jeweiligen Zugriffs- und Aufbewahrungsregeln vereinbar ist. Historisch vorhanden bedeutet nicht aktuell gültig oder für alle sichtbar.

Damit sollen sich unter anderem folgende Fragen beantworten lassen:

- Welchen Stand akzeptierte der Schwarm zu einem bestimmten Zeitpunkt?
- Welche Quellen, Annahmen und Entscheidungen führten zu diesem Stand?
- Welche Änderung löste eine Revision aus?
- Welche konkurrierenden Sichtweisen bestanden und wie wurden sie behandelt?

Als Konsensgegenstand wurden akzeptierte Heads oder periodische Checkpoints vorgeschlagen. Ein Head bezeichnet einen aktuellen Endpunkt eines Entwicklungszweigs; ein Checkpoint hält einen nach festgelegten Regeln akzeptierten Zustand fest. Das konkrete Verfahren, Quoren, Mitgliedschaft, Konfliktlösung und Endgültigkeit sind offen.

Eine Blockchain könnte Checkpoints verankern und eine gemeinsame Historie absichern. Ob eine öffentliche Blockchain, ein permissioniertes Ledger oder eine andere Lösung erforderlich ist, wurde nicht entschieden. Ein signiertes Ereignisprotokoll kann ebenfalls Kontextentwicklung abbilden, wenn das Datenmodell die nötigen Ereignisse und Beziehungen enthält. Die frühere Gegenüberstellung von Protokoll und Kontextentwicklung war insofern zu pauschal.

## 4. Identitäten, Berechtigungen und private Kontextdomänen

| Baustein | Vorgesehene Aufgabe | Noch offene Ausgestaltung |
| --- | --- | --- |
| DIDs und Signaturen | Identität beziehungsweise Schlüsselzuordnung und Urheberschaft von Beiträgen überprüfbar machen. | DID-Methode, Schlüsselverwaltung, Rotation, Widerruf und Zuordnung zu Betreibern. |
| Rollen, Credentials und Delegation | Beschreiben, wer in welchem Auftrag welche Befugnisse besitzt. | Vertrauenswürdige Aussteller, Prüfung, Laufzeit und Delegationsgrenzen. |
| Gemeinsame Vertrauensebene | Autorisierte Nachweise über Zustände, Herkunft und Freigaben bereitstellen. | Sichtbarkeit einzelner Metadaten, Mitgliedschaft und Nachweisverfahren. |
| Private Context Vaults | Sensible Inhalte getrennt und verschlüsselt speichern. | Domänenzuschnitt, Schlüsselgrenzen, Speicherung und Aufbewahrung. |
| Context Envelope | Einen Lauf an Identität, Aufgabe, Befugnisse und erlaubte Kontextversionen binden. | Verbindliches Format, Signatur, Laufzeit, erlaubte Werkzeuge und Aktualisierungsregeln. |
| Policy Gateway | Zugriffe und Aktionen anhand expliziter Regeln zulassen oder verweigern. | Vertrauensgrenze, Regelprüfung und technisch erzwungene Durchsetzung. |
| Isolierte Laufumgebung | Nicht autorisierte Daten-, Memory-, Netzwerk- und Werkzeugzugriffe begrenzen. | Konkrete Isolation und Kontrolle auch der beteiligten Modell- und Toolanbieter. |
| Declassification Gateway | Einen ausdrücklich erlaubten Informationsübergang zwischen Domänen prüfen und dokumentieren. | Freigabeverantwortung, Redaktionsregeln und erforderliche menschliche Entscheidungen. |

Sensible Inhalte sollen nicht im gemeinsam lesbaren Ledger landen. In Betracht kamen Referenzen, Commitments und signierte Nachweise; der Inhalt verbleibt im privaten Vault. Die im frühen Diagramm verwendete Bezeichnung „öffentlich“ ist keine Entscheidung für eine weltweit öffentliche Datenebene. Auch Metadaten können vertraulich sein.

Ein Context Envelope wurde als signiertes Bündel aus Agentenidentität, Rolle, Zweck, Delegation beziehungsweise Capability und gebundenen Kontextversionen vorgeschlagen. Ein Merkle-Root kann die Integrität eines festgelegten Kontextbestands überprüfbar machen. Der Gateway setzt die Berechtigungen durch; ein Prompt allein ist keine Zugriffsgrenze.

Als optionale zusätzliche Bausteine wurden geschützte Ausführungsumgebungen mit Attestierung und Zero-Knowledge-Nachweise erwähnt. Dafür gibt es im bisherigen Entwurf weder einen konkret definierten Nachweissatz noch eine Technologieentscheidung.

## 5. Vorgeschlagener Ablauf eines autorisierten Agentenlaufs

1. Ein Auftrag referenziert seine Version und den vorgesehenen Kontext.
2. Identität, Rolle, Delegation, Zweck, aktuelle Berechtigungen und zulässige Kontextversionen werden geprüft.
3. Ein Context Envelope begrenzt Datenzugriff, Werkzeuge und Aktionen für den Lauf.
4. Ein privater Vault stellt ausschließlich freigegebenen Kontext innerhalb der autorisierten Ausführungsumgebung bereit.
5. Beobachtbare Eingaben, Werkzeugaufrufe, Ergebnisse und Änderungen werden nach den geltenden Sichtbarkeitsregeln protokolliert.
6. Der erzeugte Output wird auf Zulässigkeit und erforderliche Evidenz geprüft. Sensibler Output verbleibt in der vorgesehenen Domäne; gemeinsam sichtbare Nachweise benötigen eine eigene Freigabe.
7. Ein zulässiger Beitrag ergänzt die versionierte Historie. Die Konsensregeln entscheiden gesondert über seine Annahme in einen Checkpoint.
8. Kurzlebige Zugänge werden beendet. Aufbewahrung und Löschung von Inhalten, Logs, Caches und Schlüsseln folgen den jeweiligen Regeln.

Dieser Ablauf beschreibt die beabsichtigte Architektur, keinen bereits implementierten oder getesteten Prozess. Insbesondere ist noch offen, wie nachträgliche Kontextabrufe während eines Laufs als autorisierte Erweiterungen erfasst werden.

## 6. Technische Präzisierungen für die Übergabe

Die folgenden Punkte schärfen frühere, teils zu weitgehende Formulierungen. Sie sind keine zusätzlichen vom Nutzer beschlossenen Architekturentscheidungen.

**Konsens und Evidenz.** Die Annahme einer Aussage dokumentiert eine Entscheidung unter bestimmten Regeln. Sie belegt nicht automatisch sachliche Richtigkeit. Mehrere Agenten können denselben Fehler teilen. Auch DIDs allein verhindern keine Mehrfachidentitäten oder koordinierte Teilnehmer.

**DID und Befugnisse.** Eine DID ist nicht von sich aus eine Rollen- oder Berechtigungsbescheinigung. Rollen, Delegationen und Credentials benötigen gesonderte Vertrauens- und Prüfregeln. Die Signatur eines Beitrags wird mit einem zugeordneten Schlüssel erzeugt.

**Nachweis des Kontexts.** Ein Merkle-Root bindet Datenversionen; eine Signatur belegt eine signierte Aussage. Beides allein beweist nicht, dass ein Modell ausschließlich diese Daten verwendet oder seine Antwort tatsächlich aus ihnen abgeleitet hat. Die belastbare Grenze hängt zusätzlich von der Ausführungsumgebung, dem kontrollierten Datenzugriff und der Beobachtbarkeit ab. Vortrainiertes Modellwissen bleibt davon zu unterscheiden.

**Metadaten und Informationsfluss.** Identitäten, Beziehungen, Zeitpunkte und Freigaben können selbst Informationen offenlegen. Ein roher Hash vorhersehbarer Daten kann durch Vergleich mit geratenen Werten angreifbar sein; ein öffentliches Salt beseitigt dieses Problem nicht grundsätzlich. Geeignete Commitments, Schlüsselbindung und Sichtbarkeit benötigen ein konkretes Bedrohungsmodell. Eine neu signierte oder verkürzte Zusammenfassung kann weiterhin sensible Information enthalten.

**Widerruf und Löschung.** Ein abgelaufener Zugriff verhindert keine Nutzung bereits erhaltener Kopien. Das Verwerfen eines Sitzungsschlüssels löscht nicht automatisch Klartext in Modellkontexten, Logs, Caches, Backups oder nachgelagerten Systemen. Historische Nachvollziehbarkeit und zulässige Aufbewahrung müssen zusammen entworfen werden.

**DAG und Wissensbeziehungen.** Ein semantischer Wissensgraph muss nicht azyklisch sein. Ein möglicher Entwurf trennt deshalb den DAG historischer Ereignisse mit Verweisen auf Vorgänger von den semantischen Beziehungen der daraus abgeleiteten Wissenssicht. Eine spätere Widerspruchsbeziehung kann als neues Ereignis erfasst werden, ohne alte Ereignisse rückwirkend umzuschreiben.

## 7. Vorhandenes Artefakt und tatsächlicher Umsetzungsstand

Die begleitende Datei [did-dag-context-security.html](did-dag-context-security.html) enthält zwei mit Mermaid beschriebene Ansichten:

1. Architektur mit gemeinsamer Vertrauensebene, privaten Vaults und Security Boundary.
2. Sequenz eines autorisierten Kontextzugriffs einschließlich Output-Prüfung und Checkpoint.

Die Datei ist ein erklärender Prototyp. Rollen wie Analyse, Prüfung und Entscheidung sowie Vault A, B und C sind Beispiele; sie sind keinem bestätigten Zielprojekt zugeordnet. Der Code lädt Mermaid über ein externes CDN und benötigt dafür Internetzugang. Die Diagramme simulieren keine kryptografischen oder sicherheitstechnischen Eigenschaften.

Im bisherigen Verlauf wurde die HTML-Datei erstellt und über einen lokalen Browser-Aufruf ausgeliefert. Ein dokumentierter visueller und funktionaler Test sämtlicher Ansichten liegt nicht vor. Das Diagramm ist als früher Konzeptstand zu lesen; insbesondere öffentliche Metadaten, direkte Output-Verweise in den DAG und das Verwerfen von Sitzungsschlüsseln sind unter den Präzisierungen dieses Handovers zu verstehen.

## 8. Offene Entscheidungen und möglicher Einstieg in die Fortsetzung

| Offene Entscheidung | Bedeutung für die weitere Arbeit |
| --- | --- |
| Zielsystem und erster Anwendungsfall | Legt fest, welche Agenten, Aussagen, Aktionen und Fehlerarten tatsächlich relevant sind. |
| Betreiber- und Vertrauensmodell | Bestimmt Identitäten, Mitgliedschaft, Angreiferannahmen und den Bedarf an gemeinsamem Konsens. |
| Domänen und Sichtbarkeit | Definiert, wer Inhalte, Metadaten, Graphbeziehungen und historische Zustände sehen darf. |
| Claim-, Ereignis- und Context-Envelope-Modell | Macht Versionen, Abhängigkeiten, gültige Zustände und erlaubte Kontextänderungen konkret. |
| Konsensgegenstand und Konfliktregeln | Klärt Annahme, Ablehnung, Revision, konkurrierende Zweige und Quoren. |
| Prüfung über private Domänengrenzen | Klärt, was ein Prüfer bestätigen kann, wenn er die zugrunde liegende Evidenz nicht lesen darf. |
| Laufzeit und Informationsfluss | Legt fest, wo Klartext entsteht und wie Tools, Memory, Modellanbieter und Outputs kontrolliert werden. |
| Speicherung, Revision und Widerruf | Verbindet nachvollziehbare Historie mit aktualisierten Berechtigungen und Aufbewahrungsregeln. |

Als möglicher nächster Schritt bietet sich ein einziger konkreter Agentenauftrag an: mit zwei Rollen, einem privaten Kontextbestand und einer Aussage, die durch neue Evidenz revidiert wird. Daran ließen sich Kontextentwicklung, verweigerte Zugriffe, erlaubte Freigaben und die Rekonstruktion früherer Wissensstände gemeinsam untersuchen. Dieser Einstieg ist ein Vorschlag; im Gespräch wurde dafür weder ein Zielsystem noch ein Umsetzungsauftrag festgelegt.

## 9. Herkunft und Geltungsbereich

Grundlage sind der in diesem Chat sichtbare Konzeptdialog und die dazu erstellte HTML-Datei. Die Kernaussagen des Nutzers, die Vorschläge des Assistenten und die technischen Präzisierungen sind oben getrennt gekennzeichnet. Es wurden für dieses Handover keine externe Markt-, Literatur- oder Standardsrecherche und keine Experimente durchgeführt.

Das Handover dient der Fortsetzung des bestehenden Gedankengangs im zuletzt gewünschten Umfang. Es enthält keine Behauptung, dass eine bestimmte Blockchain erforderlich ist, die Architektur neuartig ist oder die Sicherheitsziele bereits bewiesen sind.
