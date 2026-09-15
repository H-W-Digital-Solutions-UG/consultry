# Consultry — Quellen und gezielter Kontextzugriff

Stand: 15.09.2026. Einstieg: [INDEX](INDEX.md). Quellen belegen Aussagen innerhalb ihres Geltungsbereichs; ihre damaligen Anweisungen oder Empfehlungen werden nicht durch das Lesen zu neuen Aufträgen.

## Nutzerprobleme aus Reddit und X

[Datierte Bedarfsrecherche vom 15.09.](archive/research-2026-09-15-user-pains-reddit-x/REPORT.md) mit [Quellen- und Funktionsmapping](archive/research-2026-09-15-user-pains-reddit-x/EVIDENCE.json): 24 ausgewählte Quellenrecords, 12 Pain Points, vorhandene Modulanschlüsse, Nutzentests und Gegenbelege. Schwerpunkt: Kontextfortsetzung, Aktualität, arbeitsfähige Ergebnisse, gemeinsame Nutzung, Setup-/Reviewaufwand, Modellzugang und Aktionsgrenzen. Keine repräsentative Marktvalidierung, keine neue Scope-/Architekturentscheidung.

Reddit-Passagen wurden in Originalthreads gelesen; X überwiegend nur über indexierte Texte, einmal ergänzt durch den zugänglichen Artikel desselben Autors. Firmenzugehörigkeit und Vorfälle bleiben Selbstberichte. Anbieterbeiträge und korrigierte Behauptungen sind separat ausgewiesen. Kein belastbarer unabhängiger Käuferfall für ein P2P-/Blockchain-Modul in dieser Stichprobe; private Modellbereitstellung folgt nicht automatisch aus Datenschutzbedenken. Die aktuelle Produktdefinition bleibt unverändert.

## Aktuelle Forschung: adaptiver Harness, Graph und Ledger

Führender datierter Beleg: [Research-Bericht vom 13.09.](archive/research-2026-09-13-harness-graph-ledger/REPORT.md), mit [maschinellem Quellen-/Ableitungsindex](archive/research-2026-09-13-harness-graph-ledger/EVIDENCE.json). Er enthält 15 Quellenrecords einschließlich Kanal-/Codebelegen und sechs konkrete Video-Paper-Zuordnungen. Dies ist keine Zahl unabhängig replizierter Studien. Produktableitung: D-0913-R01–R08 in [DECISIONS](DECISIONS.md).

| Frage | Geprüfte Primärquelle / gezielter Einstieg |
|---|---|
| Flexible prozedurale Orientierung | [Procedural Graphs, v1](https://arxiv.org/html/2609.09153v1) — PG im Research-Index |
| Modellinternes Reasoning, nicht externer Ledger | [A*-Thought-V2, v1](https://arxiv.org/html/2609.07821v1) — AT; Vergleichsbaselines unterscheiden |
| Quellenbezogener Aufbau des Wissensgraphen | [ASKS, v1](https://arxiv.org/html/2608.29612v1) — ASKS; Code-Release nichtkommerziell lizenziert |
| Kompakter laufender Arbeitszustand | [SKILL.state, v3](https://arxiv.org/html/2608.26263v3) — STATE; kein pauschaler Ersatz für Historie oder Mehragentenkonsistenz |
| Bestehenden Harness um Ergebnisfortschreibung ergänzen | [Harness-of-Harness, v1](https://arxiv.org/html/2609.01481v1) — HOH; Forschungsreferenz, HoH-lite noch angekündigt |
| Erfahrung zu versionierten Lernhilfen verdichten | [WikiSkill, v1](https://arxiv.org/html/2608.27454v1) — WIKI |
| Modellfortschritt und entfernbares Scaffolding | H-CHANGE, H-STATE und CONTEXT im Research-Index; Engineering-Berichte, keine universellen Wirkungsgesetze |
| Konkrete OSS-Anschlusspunkte | PI im Research-Index; Version vor Integration pinnen, kein gewählter Stack |

[Discover AI / code4AI](https://www.youtube.com/@code4AI) ist auf Nutzerwunsch priorisierte **Entdeckungsquelle**. Titel, Daten und Beschreibungen wurden über den öffentlichen Feed geprüft; Videos/Transkripte nicht vollständig konsumiert. Technische Aussagen zum jeweiligen Originalpapier verfolgen. Neue Videos werden nicht automatisch überwacht. Die zusätzliche ältere Zep-Referenz sowie Eval-Praxis sind ebenfalls im Bericht eingeordnet. Modellhosting wurde nicht neu ausgewählt.

## Methodischer Anschluss: Task-Schwarm und situative Zusammenarbeit

In der Session vom 15.09. wurden Minsky und nachfolgende Arbeiten auf Wunsch des Nutzers geprüft. Transfer: [Task-Schwarm-Modul in PRODUCT](PRODUCT.md#task-schwarm-modul-arbeitsentwurf), [technischer Funktionsentwurf](BACKEND-START.md#task-schwarm-technischer-funktionsentwurf), D-0915-S01–S04 in [DECISIONS](DECISIONS.md). Historische Theorie, moderne Empirie und unsere technische Ableitung bleiben unterscheidbar. Keine zusätzliche lebende Forschungsdefinition.

| Primärquelle | Nützlicher Anschluss und Grenze |
|---|---|
| [Minsky: Erläuterung der Society of Mind](https://web.mit.edu/dxh/www/marvin/web.media.mit.edu/~minsky/papers/SymbolicVs.Connectionist.html) | Zusammenarbeit spezialisierter Prozesse; keine direkte Gleichsetzung seiner kleinen „Agents“ mit vollständigen heutigen LLM-Agents |
| [Minsky: K-Lines, 1980](https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog0402_1) | Erinnerung als Wiederaktivierung hilfreicher Konstellationen; unser Anschluss sind wiederauffindbare Problem-/Methoden-/Kontextbeziehungen, nicht Zugriff auf verborgene Modellzustände |
| [Minsky: Critics und Selectors, Kapitelentwurf 2005](https://web.mit.edu/dxh/www/marvin/web.media.mit.edu/~minsky/eb7.html) | erkannte Schwierigkeit kann eine geeignetere Bearbeitungsweise aktivieren; keine Pflicht, starre Auswahlregeln oder zusätzliche LLM-Kritiker für jeden Schritt zu bauen |
| [Minsky: Correctors, Suppressors und Censors, Kapitelentwurf](https://web.mit.edu/dxh/www/marvin/web.media.mit.edu/~minsky/eb3.html) | negative Expertise und gezielte Unterbrechung; der Text benennt auch übermäßige Hemmung. Kein Sicherheitsbeweis für ein Veto-Protokoll |
| [Push Singh: EM-ONE, MIT 2005](https://www.media.mit.edu/events/thesis-push.html) | narrative Erfahrungsfälle, problembezogene Critics und Meta-Critics; direkter methodischer Anschluss, damals in einer simulierten Welt demonstriert |
| [Towards a Science of Scaling Agent Systems, v3](https://arxiv.org/abs/2512.08296v3) | empirischer Vergleich von Einzel-/Mehragentensystemen: Nutzen abhängig von Aufgabe, Modell und Koordination; keine universellen Schwellenwerte oder Consultry-Leistungszusagen |
| [Hyperledger Fabric: Endorsement Policies](https://hyperledger-fabric.readthedocs.io/en/latest/endorsement-policies.html) | Referenz für organisations-/objektbezogene Bestätigungsregeln eines angenommenen Zustands; kein fachlicher LLM-Konsens und keine ausgewählte Consultry-Blockchain |

Minsky/Singh liefern Anregungen für die Organisation der Problemlösung. Der P2P-/Blockchain-Ansatz stammt aus der eigenen Produktdiskussion, nicht aus diesen kognitiven Theorien. Für semantische Wiederverwendung und Verfahrenswissen gelten zusätzlich die Quellen-/Versions-/Eval-Grenzen der Harness-Recherche oben.

## Aktuelle Gesprächsquellen

Neu am 14.09.: [Arbeitskern, Grundschutz und Messaging](archive/session-2026-09-14-framing-messaging/NOTES.md) — breiteres Framing bei gleichem Namen, Grundschutz versus optionale Isolation/Modellbereitstellung, aufbewahrte Formulierungen mit Astro-Seitenzuordnung und spätere belegte Founder-Stories. Führende Entscheidungen: D-0914-F01–F06. Das ist ein datierter Beleg, keine zweite Produktdefinition. Die Hostingoption wurde neu geöffnet, nicht aus der alten Session ungeprüft übernommen.

| Quelle | Wofür verwenden? | Grenze |
|---|---|---|
| [Wissensledger integrieren — Insights L1–L8](archive/session-2026-09-05-wissensledger/INSIGHTS.md) | Ledger, Schwarm-Wissensstand, Task-Teilgraphen, Rollen/Skills, Trajectories, vertrauliche Arbeit | Modellhosting ausgenommen; Assistentenvorschläge getrennt gekennzeichnet |
| [Ausgewählte Originalnachrichten](archive/session-2026-09-05-wissensledger/EXCERPTS.json) | konkrete Nutzeräußerung und Kontext über Turn-/Message-ID prüfen | 11 ausgewählte von 15 gelesenen Turns; kein vollständiger Tool-/Reasoning-Export |
| [Archivierter Kontextanker](archive/baseline-before-consolidation-2026-09-10/latest/_CONTEXT-AND-MEMORY.md) | jüngere UI-/API-/Harness-, Graph-/Privacy- und Shared-Co-Work-Präzisierungen aus dieser Session | historischer Stand mit älteren Abschnitten; Hostingnotizen werden nicht in die neue Produktbasis übernommen |
| [Archiviertes Glossar](archive/baseline-before-consolidation-2026-09-10/latest/CONTEXT.md) | ursprüngliche Begriffe und Beziehungen | heutige Kurzfassung in CONTEXT; historische Begriffe sind keine vollständige neue Entity-Liste |
| [Intake und Abgleich vom 05.09.](archive/intake-2026-09-05/README.md) | unveränderte Eingangs-ZIPs und Ledger-Handover | damaliges „Migration noch offen“ wurde am 10.09. durch Umsetzung abgelöst |

Die aktuelle Anweisung vom 10.09. autorisiert die Sessionübernahme ohne Modellhosting und den Abschluss der Dateirestrukturierung. Shared-Co-Work stammt aus dieser Session; die andere Session ergänzt die task-/projektbezogene Zusammenarbeit und gemeinsame Wissensentwicklung.

## Fachliche Quellenkarte

Alle folgenden Produktquellen liegen in der [eingefrorenen Baseline](archive/baseline-before-consolidation-2026-09-10/README.md). Historische Inhalte bleiben erhalten; relative Dateiverweise wurden bei Bedarf neu berechnet. Die unveränderten Originalbytes liegen zusätzlich im Migrations-Rückweg.

| Kürzel | Quelle | Gezielt verwenden für |
|---|---|---|
| PV | [Product Vision](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Product-Vision-v1.0.md) | Whole Product und Nutzen, soweit später nicht geändert |
| COV | [Coverage Ledger](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Whole-Consultancy-Coverage-Ledger-v0.1.md) | fachliche Breite; keine technische Modulgrenze |
| JP | [Journey Portfolio](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Canonical-User-Journey-Portfolio-v0.1.md) | Jobs, Ergebnisse und Handoffs |
| WF | [alte Wayfinder-Map](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/map.md), [59 Ticketstände](archive/migration-2026-09-10/TICKETS-BEFORE.json) | Ursprung und Status früherer Entscheidungen; aktuelle Fragen stehen in DECISIONS |
| KD | [Kernel-Datenmodell](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md) | Domain-, Provenienz- und Graphbegriffe; technischer Kandidat |
| HR | [Harness und Second Brain](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-MVP-Virtual-Harness-Second-Brain-Refinement-v1.0.md) | Kontextpakete, Arbeitsausführung, Ergebnisprüfung |
| LD | [Ledger-Integration](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Agent-Knowledge-Ledger-Integration-v0.1.md) | damalige Anschlussanalyse, Checks, DID-/Blockchain-Optionen; Vorschlagsstatus bewahren |
| PR | [Privacy Egress Gateway](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Privacy-Egress-Gateway-v0.1.md) | Datenwege und Ableitungen; konkrete Mechanik neu prüfen |
| UX | [Co-Work Experience](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Systemic-Platform-Click-Dummy-Experience-Contract-v0.1.md), [dynamische Interaktion](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Dynamic-CoWork-Surface-Moment-Map-v0.1.md) | Artefaktflächen, Fragen, Few Shots, Child-Prüfungen; alte Mock-Pflicht abgelöst |
| O2P | [Opportunity-to-Project](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Opportunity-to-Project-Representative-Business-Thread-v0.1.md) | Bestands- und Ausschreibungsanker, Commitment-/Handoff-Grenzen |
| REUSE | [Knowledge Reuse und Corporate Alignment](archive/baseline-before-consolidation-2026-09-10/latest/Consultry-Knowledge-Reuse-and-Corporate-Artifact-Alignment-Reference-Thread-v0.1.md) | Artefakterzeugung, Firmenwissen, CD und Wiederverwendung |
| RD | [Research-Quellenregister](archive/baseline-before-consolidation-2026-09-10/latest/research/wayfinder-deep-audit-2026-08/source-register.md) | Forschungsbefunde, Studiendesign und Übertragungsgrenzen |
| LOGIC | [Fact–Logic–Decision Graph](archive/baseline-before-consolidation-2026-09-10/latest/research/wayfinder-deep-audit-2026-08/fact-logic-decision-graph.yaml), [Relationship Maps](archive/baseline-before-consolidation-2026-09-10/latest/research/wayfinder-deep-audit-2026-08/relationship-maps.md) | historische Argumentketten |
| QUESTIONS | [Deep-Grill-Fragenbank](archive/baseline-before-consolidation-2026-09-10/latest/research/wayfinder-deep-audit-2026-08/deep-grill-question-bank.md) | einzelne frühere Fragen nachladen; kein abzuarbeitender Gesamtbacklog |

## Direkte Wayfinder-Belege

- [Problem-/Outcome-Hierarchie](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/ratify-the-product-problem-and-outcome-hierarchy.md), [Archetypen](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/define-the-first-consultancy-operating-archetypes.md) und [Actors](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/define-product-actors-role-compression-jobs-and-authority.md).
- [Authority und Verantwortung](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/define-case-participation-authority-delegation-and-separation-of-duties.md) sowie [Active Work mit fünf Teilentscheidungen](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/define-the-active-client-work-journey-anatomy-and-ux-mode-coverage.md).
- [Harness-Integrationsgrenze](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/define-the-harness-framework-product-boundary.md), [Core Skill Graph](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/separate-the-core-skill-graph-from-capability-evidence.md) und [wiederverwendbare Assets](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/confirm-the-reusable-asset-boundary.md).
- [Human-AI-Ticket mit Shared-Co-Work-Ergänzung](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/define-the-human-ai-responsibility-and-meaningful-oversight-contract.md) und [Core-/Surface-Ticket](archive/baseline-before-consolidation-2026-09-10/latest/wayfinder/consultry-product-platform-baseline/tickets/define-the-core-module-and-surface-contract.md). Ihre offenen Rohstatus bleiben erhalten.
- [Mock-WBS-Handover](archive/baseline-before-consolidation-2026-09-10/latest/handoffs/Consultry-Three-Slice-Mock-UI-Implementation-Handover-v0.1.md): frühere Anforderungen an kleine WBS-Items, Worktrees und Tests; keine fertige Backend-WBS.

## Pitch, Produktbelege und weitere Arbeitsbereiche

- [August-Handover](archive/handover-2026-08-26/00_START_HIER/Consultry_Handover_Final.md), [damaliges Deck](archive/handover-2026-08-26/01_Deck_fuehrend/Consultry_Pitchdeck_v10.html) und [Original-ZIP](archive/handover-2026-08-26/original/Consultry_Handover_Paket_2026-08-26.zip) bewahren den berichteten Pitch-/Business-Stand.
- [v10.185-Pitch-Kritik/Handover](archive/baseline-before-consolidation-2026-09-10/latest/handoffs/Consultry-Pitchdeck-v10.185-Foerderung-Investoren-Handover-v0.1.md) und [extrahierter Decktext](archive/migration-2026-09-10/proposal-review/PITCH_TEXT_NEU_EXTRAHIERT.txt) sind Referenzen. Eine heute führende Präsentationsdatei wurde durch diese Migration nicht neu gewählt.
- [Mock-Zustand](<../Consultry APP UI Mockups/state.js>) und [Website-Paket](../marketing-site/package.json) sind konkrete Code-Einstiege. Die Website ist ein eigener Implementierungstrack.
- [KnowledgeSources](../papers/KnowledgeSources.md) erschließt weitere Forschung. Modellhosting und Benchmark-Verzeichnisse werden für den aktuellen Produktfokus nicht standardmäßig geladen.
- Design und Medien bleiben in ihren bestehenden Arbeitsbereichen. Der frühere Vision-One-Pager liegt jetzt im [Baseline-Archiv](archive/baseline-before-consolidation-2026-09-10/supplemental/Consultry_Vision.html).

Pitchzahlen sind Annahmen oder berichteter Stand. Insbesondere sind 2.275 € pro Monat ein kalkulierter Kapazitätswert und kein gemessener Consultry-Einspareffekt. Ein im Handover berichteter unterschriebener LOI ist ohne das entsprechende Dokument kein unabhängiger Nachweis. Vor externer Verwendung werden die konkrete Quelle, Gültigkeit und Kalkulation geprüft.

## Externe Quellen und Research-Routing

Das [URL-Inventar](archive/migration-2026-09-10/proposal-review/EXTERNE_QUELLEN_INVENTAR.csv) enthält 376 damals extrahierte URLs mit Fundstellen. Diese Anzahl ist kein Nachweis von 376 online verifizierten Aussagen. Die damaligen Pfade bleiben über [PATH-MAP.csv](archive/migration-2026-09-10/PATH-MAP.csv) und den archivierten Ausgangsbestand auflösbar.

| Frage | Gezielter Einstieg |
|---|---|
| Consulting-Arbeit, IT-/Prozessberatung | RD S-E01–10 und S-E27–33; entsprechende Work-Primitives-Research |
| Menschliche Expertise und AI | RD S-E11–16 und S-E34–35; Wirkung und Übertragbarkeit getrennt betrachten |
| Agentenloops, Graphen, Reliability | RD S-E17–22 und S-E36–39; technische Hypothesen und Benchmarks |
| Validation, Authority und Oversight | RD S-E23–26 und S-E40–43 |
| Graph-/Ledger-Unterscheidung | LD, L1–L8; semantischer Graph, Ereignishistorie und akzeptierter Stand |

Primärreferenzen, die im früheren Material verwendet wurden: [Codex/MCP](https://developers.openai.com/codex/mcp/), [MCP-Sicherheitsreferenz](https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices), [Microsoft Graph Selected Permissions](https://learn.microsoft.com/en-us/graph/permissions-selected-overview), [GraphRAG](https://microsoft.github.io/graphrag/), [W3C DID Core](https://www.w3.org/TR/did/), [W3C VC Trust Model](https://www.w3.org/TR/vc-data-model-2.0/#trust-model) und [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162.html#section-2.1.4). Die ersten vier wurden laut Konsolidierungsbericht am 04.09. eng geprüft; die Ledger-Referenzen im Integrationspapier vom 05.09. verwendet. Am 10.09. erfolgte eine lokale Quellen- und Gesprächskonsolidierung, keine erneute Online-Verifikation.

Für sensible Verarbeitung wurden [DSGVO](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) und [EU AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) als fallbezogen zu prüfende Rahmen genannt. Hieraus wird keine neue Rechtsbewertung abgeleitet. Vor einer operativen Technologie-, Rechts- oder Marktbehauptung die konkrete aktuelle Primärquelle gezielt nachprüfen.

## Bestands- und Migrationsbelege

[Migrationsbericht](archive/migration-2026-09-10/REPORT.md), [Prüfergebnis](archive/migration-2026-09-10/VERIFICATION.json), [Pfadzuordnung](archive/migration-2026-09-10/PATH-MAP.csv), [Original-Ticketstände](archive/migration-2026-09-10/TICKETS-BEFORE.json) und [ursprünglicher Organisationsvorschlag](archive/migration-2026-09-10/proposal-review/ARCHIVPLAN.md). Der Vorschlag trägt seinen damaligen Status; die Umsetzung wird durch den neuen Migrationsbericht belegt.
