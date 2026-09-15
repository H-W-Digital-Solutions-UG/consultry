# Organisationsvorschlag zur gemeinsamen Durchsicht

Stand: 04.09.2026. **Noch nicht ausgeführt.** Dieses Paket ist eine gesonderte Konsolidierung mit Quellkopien. Bestehende Produkttexte, Tickets, Pitchdateien und Code wurden nicht verschoben, gelöscht oder umbenannt.

## Warum es derzeit schwer ist, den Stand zu erkennen

- `product-definition/latest/` enthält gleichzeitig Produktvision, frühe Architektur, Mock-Handovers, Forschung, 59 Tickets und mehrere Kontext-/Indexdateien. „Latest“ bezeichnet keinen einheitlich bestätigten Stand.
- `_CONTEXT-AND-MEMORY.md`, `CONTEXT.md`, `README.md`, `MANIFEST.yaml`, Wayfinder-Map und Root-`CLAUDE.md` überschneiden sich. Einzelne Wegweiser zeigen noch auf frühere Produkt-/Mock-Einstiege oder nicht mehr vorhandene Pfade.
- Die jüngere Pitch-Basis liegt im extern angelieferten August-ZIP; im Root und in `presentation/` liegen ältere Decks mit anderen Namen.
- Es gibt bereits einen verbundenen UI-Dummy. Gleichzeitig beschreiben einige Dokumente diesen noch als Zukunft. Website-/Waitlist-Code ist wiederum kein Produktbackend.
- Manche geschlossenen Tickets dokumentieren eine Verschiebung; manche offenen Tickets enthalten bereits bestätigte Teilentscheidungen. Der Gesamtstatus allein führt in die Irre.

Die Bestandsaufnahme ergab rund 9,7 GB belegten Repo-Platz einschließlich Git und Dependencies. Große Anteile sind Präsentationen, Website-/Medienprojekte und deren Abhängigkeiten. Das CSV erfasst separat 16.582 Dateien mit rund 5,33 GB logischer Größe außerhalb ausgeschlossener Verzeichnisse. Diese unterschiedlichen Größen sind nicht direkt vergleichbar. Keine davon bedeutet, dass jede Medien-/Quellcodedatei inhaltlich geprüft wurde.

## Empfohlene Zielstruktur

```text
consultry/
  CLAUDE.md                       kurzer Wegweiser, keine zweite Produktdefinition
  product-definition/
    INDEX.md                      einziger Produkteinstieg und Lesepfade
    CONTEXT.md                    heutiger Stand / aktuelle Richtung
    PRODUCT.md                    Whole Product und Grenzen
    DECISIONS.md                  Entscheidungen, Optionen, Ablehnungen, Lehren
    BACKEND-START.md               zeitlich begrenzte technische Orientierung
    SOURCES.md                    interne + externe Belegkarte
    archive/
      ...                         vorhandene historische Archive erhalten
      baseline-before-consolidation-2026-09-04/
        latest/                   bisherigen Baum als zusammenhängende Quelle einfrieren
        entrypoints/              ersetzte Wegweiser und Herkunft
      handover-2026-08-26/         einmalig importierte Pitch-/Architekturquelle
  presentation/                   eigener Pitch-/Kommunikationstrack
  design/                         bestehendes Designsystem und Assets
  marketing-site/                 eigener implementierter Website-Track
  ...                             weitere Projekte zunächst unverändert
```

Das ist ein Zielbild, kein bereits ausgeführtes Layout. Die sechs Dokumente im Paket sind die vorgeschlagenen neuen lebenden Inhalte. `review/` und `MANIFEST.json` werden bei einer Übernahme als datierter Migrationsnachweis abgelegt, nicht als weitere täglich gepflegte Produktspezifikation. BACKEND-START kann später vom echten Implementierungsstand abgelöst werden; keine zusätzliche parallele Langzeit-Roadmap.

## Konkret: behalten, zusammenführen oder archivieren?

| Bestehender Bereich | Vorschlag | Was erhalten bleibt / vor Umsetzung prüfen |
|---|---|---|
| `product-definition/latest/` fachliche Definitionen | Inhalte in PRODUCT/DECISIONS bündeln, Originalbaum danach einfrieren | Domain-, Journey-, Coverage- und Outcome-Details bleiben referenzierbare Quellen, keine zweite live gepflegte Definition |
| `latest/README.md`, `CONTEXT.md`, `_CONTEXT-AND-MEMORY.md`, `MANIFEST.yaml` | durch INDEX + CONTEXT + generiertes Manifest ersetzen | alte Fassungen archivieren; aktive Verweise und Root-Routing aktualisieren |
| `latest/wayfinder/` | Status/Herkunft sichern, alte Map und Tickets zusammenhängend einfrieren | keine pauschale Schließung offener Tickets; wenige wirklich relevante Fragen ins neue Register übernehmen |
| `latest/research/` und historische Fact-/Logic-Maps | einfrieren; thematisch über SOURCES erschließen | Studienkontext, Gegenbefunde und unsichere Annahmen bleiben sichtbar |
| `latest/*Architecture*`, `*Technical*`, Kernel-/Harness-/Privacy-Entwürfe | Quellenarchiv, ausgewählte Prinzipien nach Produktstatus übernehmen | keine Technologieauswahl aus Dokumenttiteln ableiten; konkrete Designs erst beim gewählten Arbeitsfall reaktivieren |
| Mock-Handovers, Slice-WBS, UX-Blueprint und `latest/prototypes/` | als UI-/Explorationsreferenz parken | Designsystem, Co-Work-/Journey-Erkenntnisse und spätere Nutzbarkeit bewahren; kein verpflichtendes Gate mehr |
| `product-definition/archive/` | vorhandene Archivstruktur zunächst beibehalten | keine zweite Massenumsortierung oder Löschen „veralteter“ Entscheidungen |
| August-ZIP in Downloads | eine unveränderte Eingangsquelle mit Hash plus lesbare Schlüsseldokumente | im Paket bereits vorhanden; keine doppelte live gepflegte Kopie der Architekturtexte |
| Root-Pitch und ältere Pitch-Handovers | als Vorgänger markieren, später in Pitch-Historie verschieben | erst Quellverweise und verwendete Präsentationsdatei bestätigen; August-Deck ist explorative Referenz, nicht automatische Produktkanonisierung |
| `presentation/` | ein bewusst gewählter aktiver Pitch, übrige Varianten historisch | Auswahl gemeinsam; Medien-Abhängigkeiten und relative Asset-Pfade vor jeder Verschiebung prüfen |
| `design/` und `Consultry APP UI Mockups/` | eigenständige Ressourcen zunächst unangetastet lassen | bestehende Komponenten/Designsystem und funktionierender Dummy; nicht mit Backend verwechseln |
| `marketing-site/` | unabhängig weiterführen | vorhandener Code und Waitlist bleiben erhalten; keine Produktbackend-Vollständigkeit unterstellen |
| `papers/`, Benchmarks | über SOURCES indexieren, bei Bedarf nachladen | Forschungs-/Kostenexploration ist keine Providerfreigabe |
| `KFW_utils/` und Finanzdateien | separater Finanz-/Fördertrack | keine Umorganisation aus einem Produktwissensauftrag ableiten |
| Hypermock, Motion-Teaser, Ausgaben, AI-Audits | zweiter, späterer Medien-/Output-Archivdurchgang | vorerst kein ganzer Projektordner verschoben; wertvolle Originale und wiederherstellbare Build-Artefakte unterscheiden |
| `.git`, `.claude`, `.codex`, Dependencies, Caches | außerhalb dieser Konsolidierung | weder löschen noch in Wissensarchiv aufnehmen; keine pauschale „Speicherbereinigung“ |

## Wayfinder: 32 offene Tickets sind nicht 32 Startblocker

Die komplette Zuordnung steht in [WAYFINDER_TICKETS.csv](WAYFINDER_TICKETS.csv), mit ursprünglichem Status und vorgeschlagener Behandlung pro Ticket.

| Gruppe | Anzahl offen | Vorgeschlagener Umgang |
|---|---:|---|
| Core und technische Produktverträge | 9 | beim gewählten technischen Arbeitsfall auf notwendige Fragen reduzieren; kein allgemeiner Vorab-Grill |
| gemeinsame Begriffe / Invarianten / Handoffs | 5 | in denselben kleinen Vertrag integrieren, nicht fünf eigene Großspezifikationen |
| Adoption / Quellenanbindung | 1 | am ersten echten Onboarding konkretisieren |
| ICP / Rollen / Persona-Abgleich | 3 | kommerziell parallel; kein Architekturblocker |
| Journey- und UX-Vertiefungen | 7 | fachliche Referenz; Details erst bei realer Nutzung |
| Coverage / Traceability / Reconciliation / Handoff | 4 | durch Konsolidierung verkürzen; verbleibende Lücke prüfen |
| alte Mock-/Three-Slice-Route | 3 | als alte Route kennzeichnen; neue Richtung nicht als automatische Ticket-Resolution behaupten |

Von 27 geschlossenen Tickets wurden drei als out-of-scope geschlossen; zwei technische Beschlüsse später zur Revalidierung gestellt. Die übrigen sind ebenfalls aussagebezogen zu lesen. „Closed“ wird nicht in „alles weiterhin Accepted“ umgeschrieben. Das offene Active-Work-Ticket enthält fünf bestätigte Teilentscheidungen, die nicht verloren gehen dürfen.

## Sichere Reihenfolge der späteren Übernahme

1. **Produktwahrheit gegenlesen:** Trifft PRODUCT den belastbaren Kern? Sind explorative Szenarien in DECISIONS tatsächlich als solche erkennbar? Keine Architekturentscheidung erforderlich.
2. **Sechs führende Dateien übernehmen:** neue kurze Einstiegspunkte festlegen. Vorherige Dateien und uncommittete Nutzerarbeit erhalten; Manifest und Quellbezüge überprüfen.
3. **Alte lebende Produkttexte einfrieren:** bisherigen `latest/`-Baum zusammenhängend archivieren, Links umstellen und die Archivrolle deutlich markieren. Nicht mehrere konkurrierende `latest`-Bäume zurücklassen.
4. **Pitch-Historie separat ordnen:** aktiven Pitch bewusst wählen; relative Assets und Weiterverweise testen. Zahlen-/Marktannahmen nicht durch Dateiverschiebung ratifizieren.
5. **Medien/Outputs nur bei Bedarf:** eigener enger Bereinigungsdurchgang nach Prüfung der konkreten Ziele. Nicht notwendig für den technischen Start.

Vor jeder tatsächlichen Verschiebung: Arbeitsstand sichern, Zielpfade prüfen, Hashes vergleichen, Rückweg dokumentieren, interne Links aktualisieren. Das ZIP ersetzt keine vollständige Repo-Sicherung: Codeprojekte, Bilder und Videos wurden überwiegend inventarisiert, nicht komplett eingepackt.

## Erste Frage für unsere gemeinsame Durchsicht

Sollen diese sechs Dateien künftig der einzige lebende Produktstand sein und der bisherige `latest/`-Baum nach Inhaltsabgleich als zusammenhängende Historie eingefroren werden?

Damit entscheiden wir nur über die Ablage und Pflege, nicht über Codex, Graph-Technologie, Betriebsmodell, festen Erstfall oder vollständigen MVP-Scope.
