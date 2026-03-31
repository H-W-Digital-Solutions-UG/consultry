# Consultry — Product Requirements Document v3.1

## AI-Native Consultancy CRM für den DACH-Markt

**Status:** Final Draft
**Datum:** 31. März 2026
**Produkt:** Consultry (eigenständiges Produkt)
**Autor:** Jules
**Ersetzt:** Consultry PRD v3.0

**Design Companions:**
- [Design System v1.3](../design/Consultry-Design-System-v1.3.md)
- [Component Specs](../design/component-specs/_COMPONENT-SPEC-INDEX.md)
- [Screen Specs](../design/screen-specs/_SCREEN-SPEC-INDEX.md)
- [User Journeys v1.1](./Consultry-User-Journeys-v1.0.md)
- [Stitch Board Mapping](../design/google-stitch/STITCH_BOARD_MAPPING.md)

---

## Überblick: Was sich in v3.1 ändert

v2.0 definierte 15 Module mit gestaffelter Roadmap. v3.0 war das **vollständige Launch-PRD**. v3.1 ergänzt die **Design-Anbindung**: Screen Inventory mit Design-Coverage-Status, Verweise auf Component Specs und Screen Specs, 2026-Design-Philosophie-Alignment.

**Kernänderungen v3.0 → v3.1:**

- **Screen Inventory (neu)** — Vollständige Auflistung aller 49 Screens mit Design-Coverage-Status, Layout-Typ-Entscheidung (Bento Grid vs. Progressive Disclosure) und Verweisen zu Screen Specs.
- **Design Companion Dokumente** — Bidirektionale Verweise zu Design System v1.3, Component Specs (35 Dokumente), Screen Specs (49 Dokumente).
- **2026 Design Philosophy** — Bestätigung: Light Theme Default (nicht Stitch Dark), Voice Input (kein Voice Output), Adaptive Bento Grids (nur Dashboards), Bottom Navigation Bar (Mobile), Kinetic Typography, Preview Panels.

**Kernänderungen v2.0 → v3.0 (Referenz):**

- **Alle Module sind Launch-Scope.** Es gibt keine "Phase 5+"-Features mehr. Was im PRD steht, wird gebaut. Die Phasen-Roadmap definiert die Build-Reihenfolge, nicht den Produktumfang.
- **Neues Querschnittsthema: AI Experience Layer** — Consultry ist nicht "ein Tool mit AI-Features", sondern eine AI-native Plattform. Das AI Experience Layer definiert die Interaktionsschichten: kontextueller Copilot, Command Bar, AI Canvasses, Chat-Interfaces und Planning-Tools. AI durchdringt jeden Workflow — nicht als Feature-Flag, sondern als Interaktionsparadigma.
- **Neue Platform Layer** mit drei Modulen: **Collaboration & Activity** (entity-basierte Zusammenarbeit mit Kommentaren, @Mentions, Aktivitäts-Feeds), **Client Portal** (Read-Only Projektzugang für Kunden via Magic Links), **Notification & Alert Engine** (einheitliches Alerting mit Priorisierung, Kanalsteuerung und Alert-Fatigue-Management).
- **Neues Querschnittsthema: Mobile Strategy** — Consultry ist mobile-compatible mit definierten mobile-first Flows für Berater unterwegs.
- **In-depth Feature-Spezifikation** — Jedes Modul beschreibt nicht nur Was, sondern konkrete Flows, User Stories und Akzeptanzkriterien.
- Technische Architektur- und Implementierungsdetails bleiben bewusst ausgelagert — dieses PRD definiert das Produkt, nicht den Tech-Stack.

---

## 1. Vision

**Consultry macht die zentrale operative Frage jeder Beratung beantwortbar:**
*„Wer braucht gerade das, was wir besonders gut können — wer aus unserem Team passt am besten — und wie liefern wir profitabel?"*

Kein existierendes Tool beantwortet diese Frage. CRMs kennen die Pipeline, aber nicht die Berater. Workforce-Tools kennen die Berater, aber nicht den Markt. Sales-Intelligence-Plattformen kennen den Markt, aber nicht die Dienstleistungslogik. PSA-Tools tracken die Delivery, aber nicht die Akquise. Und das Firmenwissen — Frameworks, Lessons Learned, Referenzen — steckt in den Köpfen einzelner Berater.

Consultry schließt diese Lücken in einer Plattform: **Marktintelligenz** (wer braucht was), **Kompetenz-Matching** (was können wir), **Workforce-Transparenz** (wer ist verfügbar), **Firmenwissen** (was haben wir schon gelöst), **Deal Execution** (vom Angebot bis zum Vertrag), **Delivery Intelligence** (profitabel liefern und daraus lernen), und **Collaboration** (alle Beteiligten im Kontext zusammenbringen).

Das Ganze ist AI-nativ: nicht ein Tool mit AI-Features, sondern eine Plattform, bei der AI das primäre Interaktionsparadigma ist. Berater sprechen mit dem System in natürlicher Sprache, AI generiert Vorschläge und Artefakte, und das System lernt aus jeder Interaktion.

### Warum Beratungen anders sind

**Expertise statt Produkte:** Das „Produkt" ist eine Kombination aus Kompetenzen, Methoden, Branchenerfahrung und Berater-Persönlichkeiten. Kein Beratungsprojekt gleicht dem anderen.

**Trigger-getrieben:** Kaufzyklen werden durch organisatorische Veränderungen ausgelöst — neuer CTO, gescheitertes Projekt, M&A, Regulierungsänderung — nicht durch langfristige Evaluierungszyklen.

**Beziehungen als Währung:** Beziehungsnähe zählt genauso wie fachliche Passung. Warm-Paths über persönliche Netzwerke sind der stärkste Akquisekanal.

**Skills-Chaos:** Jede Beratung hat ihr eigenes, unstrukturiertes Vokabular für Kompetenzen. „SAP S/4HANA Migration", „SAP-Datenmigration", „S4 HANA Rollout" — alles dieselbe Kompetenz, aber nirgends normalisiert. Kein existierendes Tool löst dieses Problem.

**Wiederkehrendes Wissen:** Berater lösen die gleichen Aufgaben immer wieder von Null — SAP-Migrationschecklisten, Stakeholder-Mapping-Templates, Compliance-Frameworks — weil das Wissen in Köpfen und lokalen Dateien steckt.

**Team-Geschäft:** Beratung ist kein Solo-Sport. Angebote werden im Team erarbeitet, Projekte im Team geliefert, Kunden im Team betreut. Jedes Tool, das diese Zusammenarbeit nicht abbildet, wird umgangen.

**DACH-Besonderheiten:** Events und Messen als zentraler Akquisekanal. Lokale Referenzen, deutschsprachige Ansprache und DSGVO-Konformität sind Pflicht. US-Tools bieten weder DACH-Datentiefe noch Dienstleistungslogik.

### Das Problem in einem Szenario

> **Montag, 8:30 Uhr — Katrin, BD-Leiterin einer SAP-Beratung (85 Mitarbeiter)**
>
> Katrin hat 47 offene Tabs. In Salesforce prüft sie die Pipeline — 12 Opportunities in verschiedenen Stadien. In einer Excel-Liste pflegt sie manuell, welcher ihrer 40 Berater gerade verfügbar ist. Über LinkedIn recherchiert sie, ob der neue CTO bei RetailCorp AG einen SAP-Hintergrund hat. In einer anderen Excel-Datei kalkuliert sie Tagessätze und Deckungsbeiträge für ein laufendes Angebot. Im E-Mail-Postfach sucht sie, ob ein Kollege jemanden bei RetailCorp kennt. Gleichzeitig erstellt ihr Berater Stefan eine Checkliste für eine SAP-Datenmigration — die gleiche Checkliste, die er schon dreimal bei anderen Kunden erstellt hat, weil sie nirgends zentral verfügbar ist. Und das Angebot, das seit zwei Wochen beim Kunden liegt? Der Vertrag hängt, weil die Rechtsabteilung eine Haftungsklausel prüft — per E-Mail-Ping-Pong mit Word-Redlines. In Slack fragt der Partner: „Status RetailCorp?" — Katrin muss drei Tools öffnen, um die Frage zu beantworten.
>
> **Ergebnis nach einem Tag:** Katrin hat einen einzigen Interessenten qualifiziert, das Angebot ist noch nicht raus, der Vertrag hängt, Stefan hat 4 Stunden an einer existierenden Checkliste gearbeitet, und niemand hat gemerkt, dass das laufende Projekt bei MedTech GmbH 20% über Budget liegt.
>
> **Das gleiche mit Consultry:** Katrin startet den Tag im Cockpit. Das System hat über Nacht drei neue Signale erkannt: CTO-Wechsel bei RetailCorp, Hiring-Signal bei MedTech, eine passende öffentliche Ausschreibung. Der Signal-Feed zeigt Match-Scores gegen ihre Berater-Kompetenzen. Sie öffnet RetailCorp — das Engagement-Brief ist bereits generiert: Unternehmenskontext, Bedarfe, Entscheider mit Beziehungspfaden, Wettbewerberanalyse, und drei passende Berater mit Verfügbarkeit und Margin-Analyse. Sie startet die Angebotserstellung auf dem AI Canvas: Consultry generiert einen maßgeschneiderten Proposal mit Team-Aufstellung, angepassten CVs und Aufwandsschätzung in drei Varianten. Katrin kommentiert direkt auf dem Canvas, tagged Partner Thomas: „@Thomas — kannst du den Pricing-Vorschlag checken?" Thomas öffnet die Notification auf seinem Handy, sieht den Kontext, gibt sein OK. Stefan fragt den Knowledge-Agenten: „SAP-Datenmigration Retail Checkliste" — und bekommt in 30 Sekunden eine synthetisierte Antwort aus drei existierenden Bausteinen. Das Projekt-Dashboard zeigt: MedTech liegt 15% über Plan — automatischer Alert an den Projektleiter mit Change-Request-Empfehlung.

### Kosten des Nicht-Lösens

| Kostenfaktor | Quantifizierung |
|---|---|
| BD-Recherchezeit | 15–25 Std./Woche pro BD-Leiter über 5–8 Tools |
| Kosten pro qualifiziertem Lead | 600–1.200 € (Branchenschnitt DACH) |
| Gewinnrate bei Kaltakquise | 2–5 % |
| Tool-Fragmentierung | ~30 % Produktivitätsverlust durch Kontext-Wechsel |
| Bench-Kosten | 5–10K € pro Berater pro Monat bei Unterauslastung |
| Spezialisierungsprämie ungenutzt | 30–40 % höhere Tagessätze — kein System matcht systematisch |
| Wissens-Redundanz | 10–20 % der Projektzeit für bereits gelöste Probleme |
| Angebotserstellungszeit | 3–10 Tage pro Proposal, obwohl 70–80 % aus Bestehendem zusammensetzbar wären |
| Margen-Blindflug | Profitabilität pro Projekt/Berater/Kunde erst im Monatsabschluss sichtbar |
| Skills-Normalisierungs-Chaos | Berater-Skills nicht standardisiert; Matching scheitert an Synonymen und Freitext |
| Verpasste Signale | Organisatorische Veränderungen bei Zielkunden bleiben unsichtbar |
| Vertrags-Bottleneck | Wochen zwischen mündlicher Zusage und Unterschrift |
| Collaboration-Overhead | Informationen über Deals/Projekte über 3–5 Tools verstreut, Kontext geht verloren |

---

## 2. Ziele

### Nutzerziele

1. **BD-Recherchezeit um 70–80 % senken** — von 15–25 Std./Woche auf 3–5 Std./Woche
2. **Erstansprache-Glaubwürdigkeit verbessern** — Kompetenz-Matching, Berater-Referenzen, Warm-Path
3. **Signal-zu-Verfolgung-Lücke schließen** — Organisatorische Veränderungen lösen Empfehlungen in Minuten aus
4. **Tool-Wechsel eliminieren** — ein Arbeitsbereich für den gesamten Beratungs-Lifecycle
5. **Berater-Workforce transparent machen** — Kompetenzen, Verfügbarkeit, Auslastung, Entwicklung, Kapazitätsplanung
6. **Firmenwissen aktivieren** — KI-natives Wissensmanagement statt verstreute Dateien
7. **Angebotszyklen von Tagen auf Stunden verkürzen** — maßgeschneiderte Proposals mit optimalen Teams
8. **Pipeline vorhersagbar machen** — Services-spezifisches Forecasting und Deal-Management
9. **Profitabilität in Echtzeit sichtbar machen** — Deckungsbeitrag pro Projekt, Kunde, Berater, Service Line
10. **Vertrags-Durchlaufzeit halbieren** — von Wochen auf Tage durch KI-gestützte Vertragserstellung
11. **Collaboration im Kontext ermöglichen** — alle Beteiligten arbeiten auf den gleichen Entitäten, nicht in parallelen Chat-Threads
12. **Kunden-Transparenz schaffen** — Kunden sehen Projektstatus und geben Feedback, ohne E-Mail-Ping-Pong

### Geschäftsziele

1. **NRR >120 %** durch Expansion innerhalb bestehender Beratungen (mehr Berater, mehr Module)
2. **Onboarding <2 Wochen** — vom Signing bis zum produktiven Einsatz
3. **Kosten pro qualifiziertem Lead um 40–55 % senken**
4. **Berater-Utilization von 60–70 % auf 80–90 % steigern**
5. **Angebots-Win-Rate um 25–40 % steigern** durch besseres Matching und datenbasierte Kalkulation
6. **DACH-Kategorieführerschaft** — erstes AI-natives operatives System für Beratungen

---

## 3. Nicht-Ziele

| Nicht-Ziel | Begründung |
|---|---|
| Eigene Zeiterfassung | DACH-rechtliche Bedenken (BetrVG §87, DSGVO Beschäftigtendatenschutz). Integration mit bestehenden Tools statt eigener Erfassung. |
| Vollwertiges ERP (Rechnungsstellung, Mahnwesen) | Integration mit DATEV, Bexio, BMD statt Build. |
| Vollständiges HR-System | Consultry deckt operatives Team-Management (Org-Struktur, Verfügbarkeit, Kapazitätsplanung, Entwicklung) — aber keine Gehaltsplanung, disziplinarische Workflows, Krankenakten oder formale HR-Prozesse. Integration mit Personio, SAP SuccessFactors etc. |
| Rechtsberatung | System unterstützt bei Vertragserstellung, berät nicht. RDG-Konformität sicherstellen. |
| Event-Plattform | Consultry ist kein Eventbrite/Grip-Konkurrent. Integration ja, eigene Event-Plattform nein. |
| LinkedIn-/XING-API-Integration | LinkedIn API ist für Sales-Intelligence gesperrt. XING hat keine öffentliche API. Stattdessen: öffentlich verfügbare Daten + Enrichment über Dealfront. |
| Generalistische CRM-Funktionalität | Kein Salesforce-Klon — spezialisiert auf die Dienstleistungslogik von Beratungen. |
| Eigene Chat/Messaging-Plattform | Collaboration ist entity-basiert (Kommentare, @Mentions auf Opportunities, Projekte). Echtzeit-Kommunikation über Slack/Teams-Integration. |
| Interaktives Client-Portal mit Schreibrechten | Client Portal ist Read-Only mit strukturierten Feedback-Formularen. Kein bidirektionales Dokumenten-Collaboration. |

---

## 4. Zielsegmente

### Primär: Beratungsunternehmen im DACH-Raum

| Segment | Größe | Kernbedarf |
|---|---|---|
| **Boutique-Beratungen** | 5–30 Berater | Smarte CVs, Staffing, Angebotserstellung, Profitabilitätstransparenz |
| **Mittelständische Beratungshäuser** | 30–200 Berater | Knowledge Graph, Gap-Analyse, Market Intelligence, vollständige Deal-Machine, Team-Management |
| **Große Beratungen** | 200+ Berater | Multi-Entity, Chinese Walls, API-Integrationen, Enterprise Governance, Client Portal |

### Angrenzende Segmente (perspektivisch)

| Untersegment | Beispiele | Kernbedarf |
|---|---|---|
| IT- & Digital-Beratungen | SAP-Partner, Cloud-Migration, Software-Agenturen | Technische Kompetenzen matchen; Zertifizierungen zuordnen |
| Strategie- & Managementberatungen | Boutique-Strategiefirmen, M&A-Berater | Entscheider-Netzwerke; Veränderungssignale |
| Rechts-, Steuer- & Wirtschaftsberatung | Kanzleien, Steuerberater | Regulatorische Trigger; Fachberater matchen |
| Ingenieur- & technische Dienstleister | Industrieengineering, Zertifizierung | Projekt-Signale, Modernisierungsbedarfe |
| Personal- & Recruiting-Firmen | Executive Search, IT-Staffing | Hiring-Signale, Wachstumsmuster |

### User Personas

**Katrin — BD-Leiterin / Business Development**
Verantwortlich für Pipeline, Neukundengewinnung, Angebotskoordination. Arbeitet heute mit 5–8 Tools gleichzeitig. Kernbedarf: Signal-Feed, Engagement-Briefs, Angebotsunterstützung, Pipeline-Transparenz. Nutzt Consultry täglich 4–6 Stunden. Mobile: prüft Signale und Pipeline unterwegs.

**Thomas — Managing Partner**
Verantwortlich für Kundenportfolio, strategische Entscheidungen, finale Angebotsfreigabe. Braucht Cockpit-View: Auslastung, Profitabilität, Pipeline, Risiken. Nutzt Consultry 1–2 Stunden täglich, primär Dashboards und Freigaben. Mobile: Freigaben und Alerts.

**Stefan — Senior Consultant / Projektleiter**
Liefert Projekte, managt Teams, pflegt Kundenbeziehungen. Braucht: Projektübersicht, Knowledge-Engine für Methoden und Templates, Profilverwaltung, Staffing-Anfragen beantworten. Nutzt Consultry 30–60 Min. täglich. Mobile: Projektstatus, Reisebuchung-Kontext, Quick-Updates.

**Lisa — Consultant**
Wird gestafft, liefert Arbeitsergebnisse, baut Expertise auf. Braucht: eigenes Profil pflegen, Entwicklungsziele verfolgen, Knowledge-Agent nutzen, Staffing-Anfragen sehen. Nutzt Consultry 15–30 Min. täglich. Mobile: Profil-Updates, Verfügbarkeit.

**Martina — Office Managerin / Backoffice**
Koordiniert operative Abläufe, pflegt Daten, unterstützt bei Angeboten und Verträgen. Braucht: saubere Datenhaltung, Berichtsexporte, Vertragsverwaltung, Onboarding-Support. Nutzt Consultry 2–4 Stunden täglich. Desktop-only.

**Dr. Müller — Kunde (externer Stakeholder)**
Auftraggeber auf Kundenseite. Bekommt Read-Only Zugriff via Magic Link auf Projekt-Dashboard: Milestones, Status, freigegebene Dokumente, Feedback-Formulare. Keine Registrierung, kein Login, kein Passwort.

---

## 5. Kern-Workflow: Vom Signal zum Learning

Consultry deckt den vollständigen Lifecycle ab — von der proaktiven Markterkennung bis zum Wissensrückfluss aus abgeschlossenen Projekten. Jede Phase wird durch AI unterstützt und ist mit den angrenzenden Phasen verknüpft.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     CONSULTRY: VOLLSTÄNDIGER LIFECYCLE                       │
│                                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  DETECT  │─▶│ QUALIFY  │─▶│  MATCH   │─▶│  OFFER   │─▶│ OUTREACH │   │
│  │          │  │          │  │          │  │          │  │          │   │
│  │Signal &  │  │Opportunity│  │Berater & │  │Angebot + │  │Ansprache │   │
│  │Discovery │  │Analyse + │  │Team-     │  │CV-Gen +  │  │+Consent  │   │
│  │Engine    │  │Engagement│  │Matching  │  │Varianten │  │+Sequenz  │   │
│  │          │  │Brief     │  │          │  │          │  │          │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ CONTRACT │─▶│ DELIVER  │─▶│ CONTROL  │─▶│  LEARN   │─▶│  GROW    │   │
│  │          │  │          │  │          │  │          │  │          │   │
│  │Vertrag + │  │Milestone │  │DB-Rech-  │  │Knowledge │  │Skill-Gap │   │
│  │Klausel-  │  │Tracking +│  │nung +    │  │Engine +  │  │Recruiting│   │
│  │Bibliothek│  │Risk-     │  │Forecast +│  │Playbooks │  │+Events + │   │
│  │          │  │Monitoring│  │Pricing   │  │          │  │Netzwerk  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                                             │
│  DURCHGÄNGIG: AI Copilot │ Collaboration │ Notifications │ Client Portal  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Konkretes Beispiel: SAP-Migration End-to-End

> **DETECT:** Consultry erkennt über Nacht ein Signal: RetailCorp AG hat einen neuen CTO mit SAP-Hintergrund eingestellt (via Enrichment-Quelle). Gleichzeitig zeigt eine Stellenanzeige "SAP Technical Architect" — klares Bedarfssignal. Match-Score gegen das eigene Kompetenzprofil: 87/100.
>
> **QUALIFY:** Das automatisch generierte Engagement-Brief zeigt: Unternehmensprofil, identifizierte Bedarfe (Legacy-SAP zu S/4HANA), 3 Entscheider mit Beziehungskontext (Partner Thomas kennt den CFO über einen BITKOM-Event), Wettbewerber-Analyse (Accenture und Capgemini wahrscheinlich im Rennen — Consultry empfiehlt Differenzierung über DACH-Nähe und Retail-Spezialisierung). Katrin öffnet das Brief auf dem AI Canvas und kommentiert: „@Thomas — kennst du den neuen CTO persönlich?" Thomas antwortet direkt auf dem Canvas.
>
> **MATCH:** Berater-Matching liefert ein optimales Team: Markus S. (SAP-Retail, 12 Jahre, Score 94, frei ab Mai), Lisa T. (Change Management, Score 82, frei ab Mai), plus Junior-Berater Tim K. für Data Migration. Team-Konstellation: haben schon zweimal erfolgreich zusammengearbeitet. Das Workforce-Modul bestätigt: alle drei haben keine Urlaubskonflikte, Markus' aktuelles Projekt endet planmäßig Ende April.
>
> **OFFER:** Katrin öffnet den AI Canvas „Angebotserstellung". Consultry generiert ein maßgeschneidertes Angebot in drei Varianten (Lean/Standard/Premium), mit angepassten CVs, Phasenplan, Aufwandsschätzung kalibriert an vergleichbaren Projekten, und Pricing basierend auf Markt-Benchmarks. Referenz-Matching: zwei passende SAP-Retail-Cases werden automatisch eingebunden. Katrin iteriert direkt auf dem Canvas: „Mach die Premium-Variante günstiger — nimm Tim raus und reduzier die Change-Management-Phase." AI passt Angebot und Kalkulation in Echtzeit an.
>
> **OUTREACH:** Personalisierte Ansprache-E-Mail referenziert den CTO-Wechsel, betont SAP-Retail-Expertise, nennt Markus S. als verfügbaren Spezialisten. Consent ist geprüft (Kontakt über Thomas' Warm-Path). Follow-up-Sequenz nach 5 Tagen. Aktivitäts-Feed zeigt: E-Mail geöffnet nach 2 Stunden.
>
> **CONTRACT:** Nach positivem Meeting generiert Consultry einen Dienstvertragsentwurf aus der Klausel-Bibliothek. RetailCorp schickt ihren Standard-Vertrag — die KI-Analyse flaggt eine abweichende Haftungsklausel und schlägt eine Alternative vor. Verhandlungs-Thread direkt auf dem Vertrag — Kommentare, Versionen, Freigaben.
>
> **DELIVER:** Projekt startet. Milestones werden aus dem Vertrag übernommen. Dr. Müller (Kunde) bekommt einen Magic Link zum Client Portal: Projektstatus, aktuelle Milestones, freigegebene Dokumente. Nach 6 Wochen zeigt das Risk-Monitoring: Data-Migration-Workstream liegt 20% hinter Plan. Automatischer Alert an Projektleiter Stefan (Push-Notification + In-App), mit Scope-Creep-Warnung und Change-Request-Template.
>
> **CONTROL:** Deckungsbeitragsrechnung in Echtzeit: DB1 aktuell bei 28% (Ziel: 25%). Cash-Flow-Prognose zeigt: nächste Milestone-Zahlung in 3 Wochen. Auslastungsprognose: Markus wird ab August verfügbar — zwei Pipeline-Opportunities passen.
>
> **LEARN:** Nach Projektabschluss fließen Erkenntnisse zurück: Projektdokumentation wird zu querybaren Knowledge-Bausteinen. Markus' Profil wird automatisch angereichert (neues Referenzprojekt, bestätigte SAP-Retail-Expertise). Kundenfeedback (NPS 78, besonders positiv: Stakeholder-Kommunikation) wird kontextualisiert im Knowledge Graph hinterlegt. Pulse-Check-Ergebnis aus dem Client Portal fließt automatisch ein.
>
> **GROW:** Skill-Gap-Analyse zeigt: 5 weitere NIS2-Anfragen in der Pipeline, aber nur 2 Berater mit Erfahrung. Recruiting-Empfehlung wird generiert. Für die nächste it-sa wird eine Landing-Page mit dem NIS2-Kompetenzprofil erstellt. Alumni-Beraterin Carla (jetzt selbständig) wird als potenzielle Subunternehmerin vorgeschlagen.

---

## 6. Plattform-Architektur (Fünf-Schichten-Modell)

```
┌─────────────────────────────────────────────────────────────────────┐
│                   AI EXPERIENCE LAYER                                │
│   Contextual Copilot  │  Command Bar  │  AI Canvasses              │
│   Chat Interfaces     │  Planning Tools │  Agentic Workflows       │
├─────────────────────────────────────────────────────────────────────┤
│                   PLATFORM LAYER                                     │
│   Collaboration & Activity  │  Client Portal  │  Notification Engine│
├─────────────────────────────────────────────────────────────────────┤
│                   DELIVERY & PERFORMANCE LAYER                       │
│      Project Execution & Delivery  │  Financial Intelligence         │
├─────────────────────────────────────────────────────────────────────┤
│                          DEAL LAYER                                  │
│   Opportunity Intelligence  │  Staffing & Matching                   │
│   Service Offer Composition │  Client-Facing Intelligence            │
│   Contract Intelligence     │  Outreach & Campaign Engine            │
├─────────────────────────────────────────────────────────────────────┤
│                         GROWTH LAYER                                 │
│   Market & Signal Intelligence  │  Events & Network Intelligence     │
│   Talent Acquisition & Onboarding                                    │
├─────────────────────────────────────────────────────────────────────┤
│                       FOUNDATION LAYER                               │
│   Consultant Knowledge Graph  │  Workforce & Team Management         │
│   Client & Account Management │  Methodology & IP Asset Management   │
├─────────────────────────────────────────────────────────────────────┤
│                     CROSS-CUTTING CONCERNS                           │
│   Multi-Entity & Governance  │  DSGVO & Compliance                   │
│   DACH Regulatory  │  Mobile Strategy │ Reporting & Dashboards       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 7. AI Experience Layer

Consultry ist kein Tool mit AI-Features — es ist eine AI-native Plattform. Das bedeutet: AI ist nicht ein Button den man klickt, sondern das primäre Interaktionsparadigma. Das AI Experience Layer definiert, wie Nutzer mit AI interagieren — und zwar nicht über ein einziges Interface, sondern über mehrere, kontextabhängige Interaktionsschichten.

### 7.1 Kontextueller Copilot

**Was es ist:** Eine AI-Seitenleiste, die sich dem aktuellen Kontext anpasst. Auf einer Opportunity zeigt sie Engagement-Brief-Vorschläge, auf einem Berater-Profil Staffing-Empfehlungen, auf einem Projekt Risiko-Analyse.

**Warum es gebraucht wird:** Nutzer sollen nicht wissen müssen, welche AI-Features existieren. Das System erkennt den Kontext und bietet proaktiv relevante Aktionen an.

**Wie der Nutzer es erlebt:**

- **Opportunity geöffnet:** Copilot zeigt: „Engagement-Brief generieren", „Ähnliche gewonnene Deals", „Berater-Vorschläge", „Wettbewerber-Analyse starten"
- **Berater-Profil geöffnet:** Copilot zeigt: „Passende Opportunities", „Skill-Gaps für nächste Karrierestufe", „Ähnliche Berater", „CV für Kontext X generieren"
- **Projekt-Dashboard geöffnet:** Copilot zeigt: „Risiko-Zusammenfassung", „Budget-Prognose", „Change-Request empfohlen", „Vergleichbare Projekte"
- **Vertrag geöffnet:** Copilot zeigt: „Abweichungen vom Standard", „Risiko-Klauseln", „Alternativformulierungen"

**Interaktionsmodus:** Der Copilot ist immer sichtbar (einblendbar), reagiert auf Kontextwechsel, und erlaubt natürlichsprachliche Follow-up-Fragen: „Warum empfiehlst du Markus statt Lisa?" → Copilot erklärt die Scoring-Logik.

### 7.2 Command Bar

**Was es ist:** Eine globale, modulübergreifende Kommandozeile (Cmd+K / Ctrl+K), die natürlichsprachliche Befehle in Aktionen übersetzt.

**Warum es gebraucht wird:** Power-User wollen schnell zwischen Kontexten wechseln und Aktionen auslösen, ohne durch Menüs zu navigieren. Die Command Bar ist die schnellste Interaktion mit dem System.

**Wie der Nutzer es erlebt:**

- `„Zeig mir alle verfügbaren SAP-Berater ab Mai"` → Staffing-Ergebnis mit gefilterten Beratern
- `„Erstell ein Angebot für RetailCorp"` → Öffnet AI Canvas mit Angebotsstruktur basierend auf der Opportunity
- `„Was ist der DB1 vom MedTech-Projekt?"` → Direktantwort mit Drill-Down-Option
- `„Wer hat Erfahrung mit DORA-Compliance?"` → Knowledge-Graph-Abfrage mit Berater-Liste
- `„Neue Opportunity: E-Mail von Müller@RetailCorp weitergeleitet"` → Opportunity-Intake mit Auto-Extraktion

**Interaktionsmodus:** Immer verfügbar. Ergebnisse inline oder als Navigation zum relevanten Kontext. Unterstützt Fuzzy-Matching und Kontext-Bewusstsein (wenn du auf einem Projekt bist, bezieht sich „Budget" auf dieses Projekt).

### 7.3 AI Canvasses

**Was es ist:** Dedizierte, interaktive Arbeitsflächen für komplexe, iterative AI-Aufgaben. Anders als der Copilot (der reagiert) und die Command Bar (die einmalige Befehle ausführt) sind Canvasses für mehrstufige, kollaborative Workflows.

**Warum es gebraucht wird:** Angebotserstellung, Vertragsprüfung, Team-Komposition — das sind keine Ein-Klick-Aktionen. Sie erfordern iteratives Arbeiten: generieren, anpassen, Feedback einarbeiten, Varianten vergleichen. Ein Canvas gibt dem Nutzer Kontrolle über den AI-Output, ohne den Kontext zu verlieren.

**Konkrete Canvasses:**

**Angebots-Canvas:**
- AI generiert Angebotsstruktur basierend auf Opportunity-Daten
- Nutzer kann jeden Abschnitt per natürlichsprachlichem Prompt anpassen: „Mach die Methodik-Sektion kürzer", „Füge eine Referenz aus dem Gesundheitswesen ein"
- Team-Aufstellung als interaktive Komponente: Berater austauschen, Varianten vergleichen, Margin-Auswirkung in Echtzeit
- Pricing-Kalkulator integriert: Tagessatz ändern → Gesamtpreis + Margin aktualisieren sich sofort
- Kollaboration: andere Nutzer können kommentieren und mitbearbeiten
- Export: PDF, DOCX in Corporate Design

**Vertrags-Canvas:**
- AI analysiert eingehenden Vertragsentwurf
- Rot/Gelb/Grün-Markierung von Klauseln mit Risiko-Scoring
- Per Klausel: natürlichsprachliche Erklärung + Alternativvorschlag
- Redline-Modus: Änderungen tracken, kommentieren, freigeben
- Vergleich mit eigenen Standard-Klauseln und historischen Verträgen

**Engagement-Brief-Canvas:**
- Automatisch generiertes Dossier pro Opportunity
- Interaktive Bearbeitung: „Recherchiere zusätzlich den IT-Stack von RetailCorp", „Zeig mir die Beziehungspfade über Events"
- Abschnitte können individuell regeneriert oder manuell überschrieben werden

**Knowledge-Canvas:**
- Synthese aus mehreren Knowledge-Bausteinen zu einem neuen Artefakt
- „Erstell eine SAP-Migrationscheckliste für Retail basierend auf unseren letzten drei Projekten"
- Ergebnis ist editierbar, speicherbar als neuer Knowledge-Baustein

**Kapazitätsplanungs-Canvas:**
- Visuelle Darstellung von Berater-Verfügbarkeit über Zeitachse
- Drag-and-Drop: Berater auf Projekte/Opportunities zuweisen
- AI-Empfehlungen: „Wenn du Markus auf RetailCorp staffst, entsteht eine Lücke im MedTech-Projekt ab KW 22. Vorschlag: Lisa als Backup."
- Szenario-Vergleich: Was passiert wenn Opportunity X gewonnen wird?

### 7.4 Chat-Interfaces

**Was es ist:** Natürlichsprachliche Konversations-Interfaces für explorative Fragen und komplexe Recherchen.

**Warum es gebraucht wird:** Nicht jede Interaktion passt in einen Canvas oder einen Command-Bar-Befehl. Manchmal will man eine explorative Konversation: „Wie haben wir bei den letzten fünf Retail-Projekten abgeschnitten?", gefolgt von „Und wie war die Kundenzufriedenheit im Vergleich zu Nicht-Retail?", gefolgt von „Zeig mir die Berater die an den besten performenden beteiligt waren."

**Konkrete Chat-Interfaces:**

**Knowledge-Agent:**
- Natürlichsprachliche Anfragen an die gesamte Wissensbasis
- „Haben wir schon mal eine DORA-Compliance-Bewertung gemacht?" → Synthetisierte Antwort mit Quellen, Expertenbenennung, verwandten Bausteinen
- Konversationell: Follow-ups ohne Kontextverlust

**Analytics-Agent:**
- Natürlichsprachliche Datenabfragen
- „Wie war unsere Win-Rate bei Festpreisangeboten im Mittelstand letztes Quartal?" → Diagramm + Drill-Down
- „Vergleich die Profitabilität der SAP-Practice mit der Cloud-Practice" → Tabelle mit Metriken

**Onboarding-Agent:**
- Begleitet neue Berater durch die Profilerstellung
- Dialog-gesteuert: „Du hast SAP-Erfahrung erwähnt — meinst du S/4HANA oder ECC? Wie viele Projekte ungefähr?"
- Kann CVs und Dokumente verarbeiten

### 7.5 Planning Tools

**Was es ist:** AI-gestützte Planungstools für strategische Entscheidungen mit Szenario-Modellierung.

**Warum es gebraucht wird:** Kapazitätsplanung, Revenue-Forecasting, Skill-Gap-Analyse — das sind keine operativen Einzelentscheidungen, sondern strategische Planungsprozesse die multiple Variablen berücksichtigen müssen.

**Konkrete Planning Tools:**

**Capacity Planner:**
- Visuelle Timeline mit Berater-Verfügbarkeit, laufenden Projekten, Pipeline-Opportunities
- What-if-Szenarien: „Was passiert wenn wir alle drei Pipeline-Deals gewinnen?"
- Gap-Erkennung: „In Q3 fehlen uns 3 Cloud-Berater" → automatischer Trigger an Recruiting

**Revenue Forecaster:**
- Pipeline-gewichteter Forecast mit historischer Kalibrierung
- Szenario-Modelle: Best/Expected/Worst Case
- Capacity-constrained: „Selbst wenn wir alles gewinnen, können wir maximal X€ Umsatz machen"

**Skill-Strategy Planner:**
- Markttrend-Daten vs. eigenes Skill-Portfolio
- „NIS2-Nachfrage steigt um 300% — wir haben 2 Berater. Empfehlung: 2 weiterbilden, 1 recruiten, 1 Freelancer"
- Investitions-Empfehlung: Weiterbildung vs. Recruiting vs. Partnering

### 7.6 Agentic Workflows

**Was es ist:** Komplexe, mehrstufige Aufgaben die automatisch orchestriert werden — Opportunity-Analyse, Team-Komposition, Vertrags-Review.

**Warum es gebraucht wird:** Viele Aufgaben in einer Beratung sind Ketten: Signal erkennen → Opportunity anlegen → Engagement Brief generieren → Team matchen → Angebot erstellen. Diese Ketten manuell zu triggern ist langsam und fehleranfällig.

**Wie es funktioniert:**

- **Trigger:** Events (neues Signal, neue Opportunity, Projekt-Milestone erreicht) oder manuelle Auslösung
- **Orchestrierung:** AI koordiniert mehrere Module-Aufrufe in Sequenz
- **Human-in-the-Loop:** Bei kritischen Entscheidungspunkten pausiert der Workflow und fragt nach — z.B. „Soll ich das Engagement-Brief an Thomas zur Review schicken?"
- **Transparenz:** Jeder Schritt ist nachvollziehbar, mit Erklärung warum und auf welcher Datenbasis

**Beispiel-Workflows:**

- **Signal-zu-Opportunity:** Signal erkannt → Enrichment → Engagement Brief generiert → Benachrichtigung an BD → nach Freigabe: Berater-Matching → Angebotsvorschlag
- **Projekt-Risikoerkennung:** Milestone-Abweichung erkannt → Root-Cause-Analyse → Change-Request-Entwurf → Alert an Projektleiter → nach Freigabe: Kunden-Kommunikation via Client Portal
- **Quartals-Review:** Profitabilität aggregiert → Utilization berechnet → Skill-Gaps identifiziert → Executive Summary generiert → auf Canvas zur Bearbeitung

---

## 8. Module — Foundation Layer

### 8.1 Consultant Knowledge Graph

**Problem:** Beraterprofile existieren als statische Word-CVs, sind nie aktuell, und enthalten nur einen Bruchteil des tatsächlichen Wissens und der Erfahrung. Jede Beratung hat ihr eigenes, unstrukturiertes Vokabular für Kompetenzen — „SAP S/4HANA Migration", „SAP-Datenmigration", „S4 HANA Rollout" sind die gleiche Kompetenz, aber nirgends normalisiert.

**Lösung:** Ein lebendiger, sich selbst anreichernder Knowledge Graph pro Berater mit KI-gestützter Skills-Normalisierung als Kern-Feature.

**Core Entities:**

- **Stammdaten:** Name, Standort, Senioritätslevel, Verfügbarkeit, Reisebereitschaft, Sprachen
- **Skills & Kompetenzen:** Technologien, Methoden, Tools, Branchen — mit Proficiency-Level und Evidenz (nicht Selbsteinschätzung, sondern abgeleitet aus Projekterfahrung). Normalisiert gegen ein firmenweites Taxonomie-Modell.
- **Projekterfahrung:** Strukturierte Projekthistorie mit Rolle, Scope, Branche, Technologien, Ergebnissen, Dauer
- **Zertifizierungen:** Mit Gültigkeitsdatum, Ausstellungsbehörde, Verifikationsstatus
- **Expert Talks & Publikationen:** Konferenzbeiträge, Fachartikel, interne Präsentationen
- **Produkt-Expertise:** Spezifische Produktkenntnisse (SAP S/4HANA, Salesforce, ServiceNow, etc.) mit Implementierungserfahrung
- **Kundenfeedback:** Kontextualisierte Bewertungen aus Projekten (nicht einfache Scores, sondern qualitative Signale: „Kunde besonders zufrieden mit Stakeholder-Kommunikation bei politisch schwieriger Transformation")

**KI-gestützte Skills-Normalisierung (Kern-Feature):**

Die Skills-Normalisierung ist Consultry's Kern-Differenzierung — keine Beratung hat die Ressourcen, ein eigenes Taxonomie-Modell zu entwickeln und zu pflegen. Consultry baut dieses Modell automatisch per Agentic AI:

- **Automatische Normalisierung:** „SAP S/4HANA Migration", „SAP Datenmigration", „S4 HANA Rollout" werden zur normalisierten Kompetenz `sap-s4hana-migration` mit Synonymen, Hierarchie (Oberkategorie: `sap-consulting` → `erp`), und Querverknüpfungen.
- **Firmenweites Kompetenzmodell:** Consultry baut automatisch ein normalisiertes Skill-Taxonomie-Modell für die gesamte Beratung auf. Das Modell wächst mit jedem ongeboardeten Berater, jedem Projekt, jedem hochgeladenen Dokument.
- **Interaktiver Dialog:** Agent fragt bei Unklarheiten nach: „Du hast ‚Projektmanagement' angegeben — meinst du agiles PM (Scrum/SAFe) oder klassisches PM (PMI/Prince2)?"
- **Prompt-basierte Anpassung:** Admin oder Berater kann Profil per Prompt anpassen: „Füge meine 3 Jahre Cloud-Migration-Erfahrung bei AWS hinzu" → Agent aktualisiert Profil mit normalisierten Skills.
- **Dokument-basierte Aktualisierung:** Berater lädt neues Projektdokument oder Zertifikat hoch → Skills werden automatisch aktualisiert und normalisiert.

> *Flow: Berater-Onboarding*
> Lisa lädt ihren CV hoch (PDF, 4 Seiten). Der Onboarding-Agent extrahiert: 12 Skills (normalisiert), 8 Projekteinträge (mit Branche, Technologie, Rolle, Dauer), 3 Zertifizierungen. Er erkennt „SAP MM" und „SAP Materials Management" als Synonym und normalisiert zu `sap-mm-materials-management`. Er fragt: „Du hast ‚Change Management' erwähnt — organisatorisch oder technisch?" Lisa antwortet: „Beides, aber primär organisatorisch." Agent aktualisiert. 6 Monate später schließt Lisa ein neues Projekt ab und lädt die Projektbeschreibung hoch. Agent erkennt neue Kompetenz „Retail Supply Chain Optimization" und fügt sie normalisiert hinzu. Ihr Profil-Completeness-Score steigt von 72% auf 85%.

**Weitere KI-Features:**

- **CV-Import & Parsing:** Bestehende CVs (Word, PDF, LinkedIn-Export) werden automatisch in den Knowledge Graph überführt — Skill-Extraktion, Projekt-Strukturierung, Deduplizierung
- **Skill-Inferenz:** Aus Projektbeschreibungen werden implizite Skills abgeleitet („drei SAP-S/4HANA-Migrationen" → SAP-Expertise Level Senior, Change Management, Data Migration)
- **Profilpflege durch Nutzung:** Der Graph reichert sich kontinuierlich an — nach jedem Projekt, jeder Zertifizierung, jedem Vortrag
- **Skill-Gap-Analyse:** Auf Unternehmensebene: „Wir haben 12 Leute mit Cloud-Expertise aber niemanden mit FinOps-Zertifizierung. Der Markt fragt das aber zunehmend nach." Wird zum strategischen Planungstool für Weiterbildung und Recruiting.

**Datenschutz & Compliance:**
- BetrVG §87 Abs. 1 Nr. 6: Profiling-Systeme bedürfen der Zustimmung des Betriebsrats — Betriebsvereinbarung als Voraussetzung
- DSGVO Art. 6, 13, 15: Rechtsgrundlage, Informationspflichten, Auskunftsrecht der Berater
- Opt-in-Modell für nicht offensichtliche Datenanreicherung

---

### 8.2 Workforce & Team Management

**Problem:** Der Consultant Knowledge Graph modelliert Berater als Kompetenzträger, Financial Intelligence als Umsatzquelle — aber die dritte, operative Perspektive fehlt: der Berater als verwaltete Ressource innerhalb einer Organisation. Heute existiert Teamzugehörigkeit in Excel-Listen, Verfügbarkeitsdaten sind im Outlook-Kalender des Partners verstreut, Karrierepfade sind informelle Absprachen, und Kapazitätsplanung ist Bauchgefühl. Gleichzeitig ist dieses Modul ein kritischer Daten-Provider: Verfügbarkeitsdaten fließen ins Staffing, Kapazitätsprognosen in Financial Intelligence, Org-Strukturen definieren die Scope-Grenzen für Role-Based Access.

**Lösung:** Operatives Team-Management für Beratungsunternehmen — Organisationsstruktur, Verfügbarkeit, Kapazitätsplanung, Workload-Monitoring, Entwicklung und Mentoring. Explizit kein vollständiges HR-System: keine Gehaltsplanung, keine disziplinarischen Workflows, keine Krankenakten. Für alles jenseits dieser Grenze integriert Consultry mit Personio, SAP SuccessFactors & Co.

**Organisationsstruktur & Hierarchien:**

- **Org-Einheiten:** Practices, Teams, Standorte, Competence Centers als verwaltbare Einheiten mit zugeordneten Leads (Practice Lead, Teamlead, Standortleiter)
- **Berichtslinien:** Fachliche und disziplinarische Zuordnung (Matrix-Organisation abbildbar — ein Berater kann fachlich zur Practice „SAP" und disziplinarisch zum Standort München gehören)
- **Dynamische Zugehörigkeit:** Berater können mehreren Teams/Practices zugeordnet sein, mit primärer und sekundärer Zugehörigkeit
- **Org-Baum-Visualisierung:** Interaktive Darstellung der Organisationsstruktur mit Drill-Down auf Teamebene
- **Team-Dashboards:** Aggregierte Sicht pro Team/Practice: Kapazität, Auslastung, Skill-Landschaft, Pipeline-Exposure

> *Flow: Practice-Lead prüft Q3-Kapazität*
> Maria, Practice Lead „Cloud & Infrastructure", öffnet ihr Team-Dashboard. Sie sieht: 8 Berater in der Practice, davon 6 aktuell auf Projekten, 1 im Urlaub, 1 auf der Bench. Pipeline zeigt 3 Cloud-Opportunities in Qualifizierung. Der Capacity Planner warnt: „Wenn Opportunity A und B gewonnen werden, fehlen ab KW 26 zwei Senior Cloud Architects." Maria öffnet den Skill-Strategy Planner: „1 Berater aus der SAP-Practice hat AWS-Zertifizierung und Interesse an Cloud — Cross-Staffing möglich. Alternativ: Freelancer über Gulp." Maria kommentiert die Empfehlung, tagged HR: „@Recruiting — bitte parallel externen Senior Cloud Architect suchen."

**Verfügbarkeits- & Abwesenheitsmanagement:**

- **Verfügbarkeits-Datenquelle:** Zentrale Wahrheit für alle Verfügbarkeitsdaten im System — das Staffing-Modul konsumiert diese Daten, erstellt sie nicht
- **Abwesenheitstypen:** Urlaub, Weiterbildung, interne Projekte, Elternzeit, Sabbatical, Krankheit (nur Zeitraum, keine Diagnosen — Scope-Grenze HR)
- **Kalender-Sync:** Bidirektionaler Sync mit Outlook/Google Calendar für Abwesenheiten
- **Verfügbarkeits-Forecast:** Vorausschau auf Berater-Verfügbarkeit unter Berücksichtigung von laufenden Projekten (Restverlauf), geplanten Abwesenheiten, Vertragsverlängerungs-Wahrscheinlichkeiten und Pipeline-gewichteten Staffing-Szenarien
- **Team-Kalender:** Aggregierte Verfügbarkeitssicht pro Team/Practice mit Engpass-Frühwarnung

**Kapazitätsplanung (Team- & Practice-Ebene):**

- **Strategische Kapazitätsplanung:** Nicht nur „wer ist frei", sondern: wie viele Seniors braucht Practice X in Q3? Wo bauen wir Kapazität auf, wo ab?
- **Demand-Supply-Matching:** Pipeline-gewichteter Bedarf vs. verfügbare Kapazität pro Skill-Cluster, Senioritätslevel, Practice
- **Gap-Analyse:** „Wir haben 3 Cloud-Architekten, aber die Pipeline zeigt Bedarf für 5 in den nächsten 6 Monaten" → automatischer Trigger an Talent Acquisition
- **Szenario-Modelle:** Best Case / Expected / Worst Case Kapazitätsauslastung — integriert mit dem Revenue Forecasting aus Financial Intelligence

**Workload-Monitoring & Balance:**

- **Auslastungs-Tracking:** Aktuelle und historische Auslastung pro Berater mit Zielkorridor (z.B. 75–85% fakturierbar)
- **Workload-Balance-Score:** Gleichmäßigkeit der Verteilung innerhalb eines Teams — Frühwarnung bei systematischer Über-/Unterlastung
- **Reisebelastungs-Tracking:** Reisetage pro Monat/Quartal — Frühwarnung bei Überschreitung
- **Burnout-Prävention:** Konfigurierbare Schwellenwerte → Alerts an Teamlead

> **Compliance-Hinweis:** Workload-Monitoring und Auslastungs-Tracking fallen unter **BetrVG §87 Abs. 1 Nr. 6**. Eine **Betriebsvereinbarung ist zwingend erforderlich** vor Aktivierung. Consultry implementiert dies als **opt-in Feature-Gate**, das erst nach dokumentierter Betriebsvereinbarung freigeschaltet wird.

**Performance- & Entwicklungszyklen:**

- **Zielvereinbarungen:** Strukturierte Erfassung von Jahres-/Halbjahreszielen pro Berater — als Entwicklungskompass, nicht als Bewertungstool
- **Karrierepfade:** Definierbare Karrierestufen pro Practice mit zugeordneten Kompetenzerwartungen
- **Skill-Entwicklungspläne:** Soll-/Ist-Abgleich gegen Karrierestufen-Anforderungen
- **Feedback-Integration:** Kundenfeedback und Peer-Reviews fließen aus dem Knowledge Graph ein
- **Entwicklungs-Dashboard (Berater-Self-Service):** Eigener Fortschritt, nächste Karrierestufe, offene Skill-Gaps, empfohlene Weiterbildungen

> **Scope-Abgrenzung:** Keine Leistungsbeurteilungen mit disziplinarischer Konsequenz, kein Performance-Ranking, keine Gehaltsempfehlungen. Integration mit Personio/SAP SuccessFactors für formale HR-Prozesse.

**Mentoring & Wissenstransfer:**

- **Systematische Mentoring-Zuordnung:** Matching basierend auf Expertise-Overlap, Karrierestufen-Differenz, Teamstruktur und Präferenzen
- **Mentoring-Zyklen:** Strukturierte Programme mit definierten Laufzeiten, Zielen und Check-in-Rhythmen
- **Wissenstransfer-Tracking:** Wo entstehen Wissensinseln (Single Points of Knowledge)?
- **Cross-Team-Mentoring:** Practice-übergreifender Wissenstransfer

---

### 8.3 Client & Account Management

**Problem:** Kundenbeziehungen leben in den Köpfen einzelner Partner. Wenn ein Partner geht, geht das Beziehungswissen mit. Cross-/Upselling-Potentiale bleiben unsichtbar.

**Lösung:** Strukturiertes Account Management mit Stakeholder Intelligence und proaktiver Beziehungspflege.

**Core Entities:**

- **Unternehmensprofil:** Stammdaten, Branche, Größe, Standorte, Organisationsstruktur, IT-Landschaft (soweit bekannt)
- **Stakeholder Map:** Entscheidungsträger, Beeinflusser, Champions, Blocker — mit Beziehungsstärke zu eigenen Beratern
- **Beziehungshistorie:** Chronologischer Log aller Interaktionen — Meetings, Anrufe, E-Mails, Events
- **Projekthistorie:** Alle bisherigen Engagements mit Outcomes, Zufriedenheit, Lessons Learned
- **Account Plan:** Strategische Ziele, Wachstumspotential, geplante Aktivitäten, Upselling-/Cross-Selling-Opportunities
- **Compliance-Flags:** Konkurrenzausschlüsse, Rahmenvertragsbedingungen, Beschaffungsregeln

**KI-Features:**

- **Auto-Enrichment:** Firmendaten werden automatisch aus Dealfront/North Data angereichert und aktuell gehalten
- **Relationship Strength Scoring:** Automatische Bewertung der Beziehungsqualität basierend auf Interaktionsfrequenz, Projektfeedback, Reaktionszeiten
- **Proaktive Alerts:** „Kein Kontakt mit Stakeholder X seit 90 Tagen — Risiko für Beziehungserosion"
- **Cross-/Upselling-Signale:** Basierend auf Projekthistorie, Branchentrends und Signalen aus öffentlichen Quellen
- **Stakeholder Intelligence:** Automatische Anreicherung aus öffentlichen Quellen
- **Warm-Path-Erkennung:** „Partner Thomas kennt den CFO über einen gemeinsamen BITKOM-Event 2024"

> *Flow: Account Review*
> Thomas öffnet das Account Dashboard für RetailCorp. Er sieht: 3 abgeschlossene Projekte (Ø NPS 74), 1 laufendes Projekt (Health: Gelb — Scope Creep erkannt), 2 offene Opportunities. Die AI empfiehlt: „RetailCorp hat gerade eine neue Compliance-Abteilung aufgebaut (Stellenanzeigen-Signal). Euer NIS2-Angebot könnte passen — Stakeholder: Dr. Weber, über Event-Kontakt erreichbar." Thomas tagged Katrin: „@Katrin — kannst du das als Opportunity qualifizieren?"

---

### 8.4 Methodology & IP Asset Management

**Problem:** Eigene Frameworks, Assessment-Tools und Vorgehensmodelle liegen verstreut auf File-Shares und in den Köpfen einzelner Berater. Im Proposal-Prozess wird das Rad neu erfunden.

**Lösung:** Strukturierte Verwaltung intellektueller Assets als wiederverwendbare, querybare Bausteine — ergänzt durch eine agenten-getriebene Knowledge-Engine, die Projektwissen automatisch in nutzbare Bausteine überführt.

**Core Entities:**

- **Methodologies:** Vorgehensmodelle, Frameworks (z.B. „DIGI-5 Digital Maturity Assessment")
- **Templates:** Dokumentvorlagen, Assessment-Bögen, Workshop-Formate
- **Tools & Accelerators:** Eigenentwickelte Software-Tools, Automatisierungen, Analysetools
- **Reference Architectures:** Technische Referenzarchitekturen für wiederkehrende Problemstellungen
- **Pricing Models:** Kalkulationsrahmen, Aufwandsschätzungs-Templates
- **Knowledge-Bausteine:** Aus Projektwissen automatisch generierte, strukturierte Wissenseinheiten (Checklisten, Lessons Learned, Best Practices)

**Knowledge-Engine (agenten-getrieben):**

Nicht als statisches Wiki, sondern als lebendige, querybare Wissensbasis:

- **Automatische Wissensextraktion:** Aus Projektdokumentation, Deliverables, Lessons Learned, Abschlussberichten werden automatisch strukturierte Knowledge-Bausteine generiert
- **Tagging & Verknüpfung:** Automatische Zuordnung zu Kompetenzen, Branchen, Methodologien. Querverweise zwischen Bausteinen werden automatisch erstellt.
- **Q/A-Agent:** Natürlichsprachliche Anfragen an die Wissensbasis: „Haben wir schon mal eine DORA-Compliance-Bewertung für eine Regionalbank gemacht?" liefert nicht nur „ja", sondern das relevante Framework, die Stolpersteine, den Zeitaufwand, und wer es gemacht hat.
- **Generative Playbooks:** KI generiert Anleitungen und Checklisten aus aggregiertem Firmenwissen
- **Proaktive Empfehlungen:** „Du arbeitest an einem Angebot für Supply-Chain-Optimierung im Pharmabereich. Team München hat Q3/2025 ein ähnliches Projekt abgeschlossen. Hier sind die relevanten Artefakte und der Projektleiter war Sarah."

> *Flow: Wissensrückfluss aus Projekt*
> Stefan schließt ein SAP-Migrationsprojekt ab und lädt Notizen hoch. Die Knowledge-Engine generiert drei Bausteine: „SAP-Datenmigration Retail Checkliste", „Go-Live-Risikomatrix", „Cutover-Planung Template". Diese werden vernetzt mit bestehendem Wissen. 3 Monate später fragt Lisa über den Knowledge-Agent: „SAP-Migration im Retail?" — der Agent synthetisiert eine Antwort aus mehreren Bausteinen, inklusive Experten-Empfehlung: „Stefan hat das zuletzt gemacht — frag ihn zur Cutover-Strategie."

**Auto-Empfehlung in Proposals:**
- Einsatzhistorie & Feedback: Welches Asset wurde wo eingesetzt, mit welchem Ergebnis?
- Versionierung & Evolution: Automatische Erkennung wenn ein Framework überarbeitet werden sollte

---

## 9. Module — Growth Layer

### 9.1 Market & Signal Intelligence

**Problem:** Beratungen warten passiv auf Anfragen oder recherchieren manuell über LinkedIn, Pressemitteilungen und persönliche Netzwerke nach neuen Opportunities. Organisatorische Veränderungen bei Zielkunden — der stärkste Kaufauslöser — bleiben unsichtbar.

**Lösung:** Proaktive Marktbeobachtung und Discovery-Engine, die Veränderungssignale erkennt, gegen das eigene Kompetenzprofil matcht und qualifizierte Opportunities generiert.

**Signal-Intelligence:**

- **Signal-Feed:** Automatisch aggregierte Veränderungssignale aus dem DACH-Markt — Leadership-Wechsel, Hiring-Signale (Stellenanzeigen als Intent-Signal), Technologie-Veränderungen, M&A, Funding-Runden, regulatorische Veränderungen, Ausschreibungsveröffentlichungen
- **KI-Priorisierung:** Signale werden automatisch nach Relevanz bewertet basierend auf: Kompetenz-Match, Kundenbeziehung (Bestandskunde vs. Neukunde), Signal-Stärke, Timing
- **Automatische Verknüpfung:** Signale werden mit bestehenden Accounts, Opportunities und Beratern verknüpft

> *Flow: Morgen-Briefing*
> Katrin öffnet den Signal-Feed. Über Nacht hat das System 12 neue Signale erkannt. Die AI hat priorisiert: #1 ist ein CTO-Wechsel bei einem Bestandskunden (Relevanz 94/100 — Kompetenz-Match hoch, bestehende Beziehung), #2 eine öffentliche Ausschreibung die zu 78% zum eigenen Profil passt, #3 ein Hiring-Signal bei einem Zielaccount. Katrin klickt auf Signal #1 → wird automatisch als Opportunity angelegt mit generiertem Engagement-Brief.

**Discovery-Engine:**

- **Proaktiver Discovery-Run:** Agent scannt und bewertet Unternehmen gegen das eigene Kompetenzprofil — Composite-Score (0–100) mit nachvollziehbarer Erklärung
- **Multi-Source-Recherche:** Enrichment aus DACH-Firmendatenbanken, Handelsregister, öffentlichen Quellen, Stellenanzeigen, Technologie-Signalen
- **Branchentrend-Erkennung:** „Fünf NIS2-Anfragen in drei Monaten — Marktthema. Hier sind 20 weitere Unternehmen im regulierten Sektor die betroffen sind."

**Ausschreibungs-Intelligence:**

- **Automatischer Import:** Relevante Ausschreibungen aus öffentlichen Vergabeportalen (TED, DÖE, SIMAP, bund.de, Vergabe24, DTVP)
- **KI-basiertes Matching:** Automatische Bewertung der Passung gegen Firmenkompetenzen + verfügbare Berater
- **Smart-Q/A und Summary:** KI-Zusammenfassung pro Ausschreibung
- **Generatives Drafting:** Human-AI-kollaboratives Erstellen von Ausschreibungsantworten

**Enrichment-Strategie:**

| Quelle | Rolle | Bewertung |
|---|---|---|
| **Dealfront (ehem. Echobot)** | Primäres DACH-Enrichment + Signale | Empfohlen. 34M+ Firmen, 33+ Signal-Typen. |
| **North Data** | Handelsregister + Finanzen (Supplement) | Empfohlen als Ergänzung. |
| **Stellenanzeigen** | Intent-Signale | Via Dealfront + eigener Crawler |
| **Ausschreibungsportale** | Öffentliche Vergabe | TED, DÖE, SIMAP — DSGVO-konform |
| **LinkedIn/XING** | ❌ Nicht realisierbar | APIs gesperrt. Enrichment via Dealfront. |

---

### 9.2 Events & Network Intelligence

**Problem:** Event-Teilnahme ist ad-hoc organisiert, Kontakte versanden nach der Messe, und der ROI von Events ist nicht messbar.

**Lösung:** End-to-End Event-Lifecycle-Management mit AI-gestütztem Networking und kampagnenspezifischer Landing-Page-Generierung.

**Pre-Event:**

- Relevante Events automatisch identifizieren basierend auf Branchenfokus, Zielkunden-Präsenz, Thementrends
- Teilnehmerlisten-Matching gegen CRM-Kontakte und Zielaccounts
- Berater-Empfehlung: „Für die Hannover Messe sollte Thomas hin — drei aktive Prospects im Maschinenbau"
- Briefing-Generierung pro Berater: relevante Kontakte, Gesprächsanlässe, aktuelle Opportunities
- **Landing-Page-Generierung:** KI-generierte, kampagnenspezifische Landing-Pages

**Live-Event:**

- Integration mit Event-Networking-Tools (Grip, Brella, Swapcard, b2match) — nur bei verhandelter Partnerschaft, manueller Import als Fallback
- Kontakterfassung: Badge-Scans, digitale Visitenkarten → automatische CRM-Einträge mit Event-Kontext
- Mobile-First: schnelle Notizen, Fotos, Voice Memos direkt zugeordnet

**Post-Event:**

- Automatisierte, kontextbezogene Follow-up-Workflows (verknüpft mit Outreach & Campaign Engine)
- Event-Debrief-Strukturierung
- ROI-Tracking: Events → Kontakte → Opportunities → Deals → Revenue

---

### 9.3 Talent Acquisition & Onboarding

**Problem:** Wenn die Skill-Gap-Analyse zeigt „uns fehlen Cloud-Architekten", beginnt ein manueller Recruiting-Prozess über separate Tools. Neue Berater brauchen Monate bis sie im System „angekommen" sind.

**Lösung:** Integrierte Recruiting-Pipeline mit nahtlosem Onboarding in den Knowledge Graph.

**Recruiting-Pipeline:**

- Bedarfserkennung aus Skill-Gap-Analyse und Pipeline-Forecasting
- Integration mit Jobportalen (StepStone, LinkedIn Recruiter, XING, Gulp für Freelancer)
- Kandidaten-Matching gegen Bedarfsprofil mit dem gleichen Matching-Algorithmus wie beim Staffing
- Bewerbermanagement: Pipeline-Tracking, Interview-Koordination, Feedback-Erfassung

**Onboarding:**

- Automatischer Import von Bewerbungsunterlagen in den Knowledge Graph (KI-gestützte Skills-Normalisierung)
- Skill-Assessment und Profilvervollständigung als geführter Prozess via Onboarding-Agent
- Mentoring-Zuordnung basierend auf Expertise-Overlap und Teamstruktur
- Onboarding-Checklisten und Fortschritts-Tracking

> *Flow: Nahtloses Onboarding*
> Tim wird eingestellt. Sein CV wird automatisch in den Knowledge Graph importiert — 8 Skills erkannt, 5 Projekte strukturiert. Der Onboarding-Agent stellt Präzisierungsfragen: „Du hast AWS-Erfahrung — welche Services genau? EC2, Lambda, EKS?" Tim antwortet, Profil wird verfeinert. Parallel wird er der Practice „Cloud" zugeordnet (Workforce-Modul), Sarah als Mentorin zugewiesen (basierend auf Skill-Overlap), und seine Verfügbarkeit für KW 20 im Team-Kalender eingetragen. Nach 7 Tagen: Profil zu 85% komplett, erste Staffing-Anfrage erhalten.

**Freelancer-Sourcing:**

- Integration mit Freelancer-Plattformen (Gulp, Hays, Etengo)
- Rahmenvertragsverwaltung, ANÜ-Compliance-Monitoring
- Freelancer-Profile im gleichen Knowledge Graph wie interne Berater (mit Kennzeichnung)

---

## 10. Module — Deal Layer

### 10.1 Opportunity Intelligence & Tracking

**Problem:** Anfragen landen per E-Mail beim Partner, werden halbherzig in ein CRM eingetippt, und die Hälfte der Informationen bleibt in E-Mail-Threads stecken. Gleichzeitig fehlt der Kontext.

**Lösung:** Intelligentes Opportunity-Management das Anfragen automatisch durchdringt, strukturiert, anreichert und mit Engagement-Briefs und Wettbewerbsanalyse kontextualisiert.

**Opportunity-Erfassung:**

- **Multi-Channel-Intake:** E-Mail-Weiterleitung, Web-Formular, API (für Ausschreibungsplattformen), Signal-Konversion (aus Market & Signal Intelligence), manuelle Eingabe, Command Bar
- **Auto-Extraktion:** Aus unstrukturierten Anfragen werden automatisch strukturiert: Scope & Deliverables, geforderte Skills/Zertifizierungen, Branche & Unternehmenskontext, Technologie-Stack, Timeline, Budget-Signale, Compliance-Anforderungen

**Engagement-Briefs:**

Automatisch generierte Dossiers pro Opportunity — der zentrale Informationshub vor der Angebotserstellung:

- **Unternehmenskontext:** Firmenprofil, aktuelle Situation, identifizierte Bedarfe
- **Kompetenz-Match-Analyse:** Score und Erklärung — welche eigenen Kompetenzen passen, wo gibt es Lücken
- **Entscheider & Beziehungspfade:** Relevante Ansprechpartner mit Beziehungskontext
- **Berater-Vorschläge:** Vorab-Matching mit Top-3-Kandidaten inkl. Verfügbarkeit
- **Wettbewerber-Analyse:** On-demand-Recherche pro Opportunity
- **Quellenattribution:** Jede Information mit Herkunft

> *Flow: Von der E-Mail zur qualifizierten Opportunity*
> Katrin leitet eine Kundenanfrage per E-Mail an Consultry weiter. Auto-Extraktion erkennt: SAP S/4HANA Migration, Retail-Branche, 6 Monate Laufzeit, Start Q3, Budget-Signal „mittleres sechsstelliges Projektvolumen". Opportunity wird angelegt, Engagement-Brief automatisch generiert. Katrin öffnet das Brief auf dem Canvas, prüft die Wettbewerber-Analyse, sieht den Warm-Path über Thomas, und gibt die Opportunity mit einem Klick zur Angebotserstellung frei. Gesamtzeit: 12 Minuten statt 4 Stunden.

**Wettbewerber-Intelligenz (pro Opportunity):**

- On-demand Wettbewerber-Recherche pro Opportunity
- Win/Loss-Pattern-Analyse aus historischen Daten
- Differenzierungsempfehlungen
- Historische Benchmarks

**Pipeline-Management:**

- Dynamische Stages: Erstkontakt → Qualifizierung → Angebot → Staffing → Verhandlung → Engagement
- Win-Probability-Scoring basierend auf historischen Patterns
- Automatische Stale-Detection
- Forecasting-Integration: Pipeline → Revenue Forecast → Capacity Planning

---

### 10.2 Intelligent Staffing & Matching

**Problem:** „Wer passt auf dieses Projekt?" wird heute per Telefon, Bauchgefühl und Outlook-Kalender beantwortet.

**Lösung:** Semantisches Multi-Faktor-Matching von Projektanforderungen gegen den Consultant Knowledge Graph — nicht für Einzelpersonen, sondern für optimale Teams.

**Matching-Dimensionen:**

- **Skills & Expertise:** Semantisches Verständnis dank normalisiertem Skill-Graph
- **Branchenerfahrung:** Tiefe und Breite der Branchenkenntnisse
- **Senioritäts-Fit:** Geforderte Rolle vs. Erfahrungslevel
- **Verfügbarkeit:** Aus dem Workforce-Modul — aktuelle Auslastung, geplante Abwesenheiten, Projektenden
- **Standort & Reisebereitschaft:** Kundennähe, Remote-/Hybrid-Fähigkeit
- **Kundenhistorie:** Frühere Einsätze beim selben Kunden
- **Teamkompatibilität:** Haben die vorgeschlagenen Berater schon erfolgreich zusammengearbeitet?
- **Entwicklungsziele:** Passt das Projekt zur gewünschten Karriereentwicklung?

**Team-Komposition:**

- Nicht nur Einzelperson-Vorschläge, sondern optimale Team-Zusammenstellung
- Senioritäts-Mix, Skill-Komplementarität, Verfügbarkeits-Overlap
- Varianten-Fähigkeit: „Lean-Team (2 Berater)" vs. „Standard (4)" vs. „Premium (6 + Partner)"
- Einbeziehung von Freelancern/Subunternehmern bei internen Lücken

> *Flow: Team-Staffing auf dem Canvas*
> Katrin öffnet den Kapazitätsplanungs-Canvas für die RetailCorp-Opportunity. AI zeigt drei Team-Varianten. Katrin sieht: Variante A hat den besten Match-Score (91) aber Markus ist erst ab KW 20 verfügbar. Variante B kann sofort starten, hat aber nur Match-Score 78. Variante C nutzt einen Freelancer für die Data-Migration-Komponente — Score 85, sofort verfügbar, aber 12% geringere Marge. Katrin fragt den Copilot: „Was passiert mit dem MedTech-Projekt wenn ich Markus zwei Wochen früher abziehe?" → Copilot zeigt die Impact-Analyse.

**Ranking & Transparenz:**

- Match-Score mit nachvollziehbarer Begründung
- Margin-Analyse im Matching: Stundensatz vs. empfohlener Kundensatz
- One-Click-Anfrage an Berater (mit Projektbriefing)

---

### 10.3 Smart Service Offer Composition

**Problem:** Proposal-Erstellung ist ein manueller Kraftakt: Senior-Berater schreiben von Grund auf, kalkulieren Aufwände aus dem Bauch. Durchlaufzeit: Tage bis Wochen.

**Lösung:** Eine Kompositions-Engine, die aus Opportunity-Analyse, Knowledge Graph, Projekthistorie und Matching ein maßgeschneidertes Angebot generiert — auf dem AI Canvas.

**Angebotsstruktur-Generierung:**

- Verständnis der Ausgangslage (aus Engagement-Brief)
- Vorgeschlagener Beratungsansatz (basierend auf ähnlichen Projekten, Methodologien)
- Team-Aufstellung mit maßgeschneiderten CVs
- Phasenplan mit Milestones und Deliverables
- Aufwandsschätzung (kalibriert an Erfahrungswerten)
- Pricing-Vorschlag (basierend auf Tagessatz-Benchmarks, Kundensegment, Margin-Ziel)
- Referenz-Matching: automatische Auswahl passender Case Studies

**Varianten-Engine:**

- „Zeig mir das in drei Varianten — Lean, Standard, Premium"
- „Der Kunde hat Budget-Constraints: optimiere auf Kosten bei gleichem Scope"
- „Erstelle eine Variante mit Festpreis statt T&M"
- „Ersetze Berater X durch einen günstigeren Consultant und zeig die Margin-Auswirkung"

> *Flow: Angebot auf dem Canvas erstellen*
> Katrin öffnet den Angebots-Canvas für RetailCorp. AI generiert die Grundstruktur in 30 Sekunden. Katrin sagt: „Die Methodik-Sektion ist zu lang — kürze auf eine halbe Seite. Und füge die Retail-Supply-Chain-Referenz ein." AI passt an. Thomas (tagged als Reviewer) öffnet den Canvas, kommentiert die Pricing-Sektion: „Tagessatz für Markus ist zu niedrig — RetailCorp zahlt Premium." Katrin passt den Satz an — Gesamtpreis und Marge aktualisieren sich in Echtzeit. Export als PDF in Corporate Design. Durchlaufzeit: 3 Stunden statt 5 Tage.

**Feedback-Loop:**

- Gewonnene und verlorene Deals fließen zurück
- System lernt: Welche Teamkonstellationen, Pricing-Modelle, Angebotsstrukturen gewinnen?
- Benchmark-Daten über Segmente

---

### 10.4 Client-Facing Intelligence

**Problem:** Berater-CVs werden für jedes Angebot manuell in Word angepasst. Stunden für inkonsistente Ergebnisse.

**Lösung:** Automatische Generierung maßgeschneiderter, kundenspezifischer Dokumente.

**Berater-CVs:**

- Automatische Generierung aus dem Knowledge Graph
- Kundenspezifisch: nur relevante Projekte, Skills und Erfahrungen für dieses Angebot
- Im Corporate Design (konfigurierbare Templates)
- Multi-Format: PDF, DOCX, Online-Profil
- Mehrsprachig: DE, EN (FR für Schweizer Kunden)

**Proposal-Dokumente:**

- Aus der Offer Composition generiert, in professionellem Layout
- Modulare Bausteine: Management Summary, Methodik, Teamvorstellung, Referenzen, Pricing

**Credentials & Case Studies:**

- Automatisch generierte Referenz-Sheets aus der Projekthistorie
- Anonymisierung konfigurierbar
- Service-Match-basierte Vorschläge

**Ausschreibungs-Antwortdokumente:**

- Human-AI-kollaboratives Erstellen auf dem Canvas
- Export als DOCX/PDF in geforderten Formaten

---

### 10.5 Contract Intelligence & Legal Automation

**Problem:** Zwischen „mündliche Zusage" und „unterschriebener Vertrag" vergehen Wochen. Vertragsverhandlung läuft über E-Mail-Ping-Pong mit Word-Redlines.

**Lösung:** AI-gestützter Vertrags-Lifecycle von der Erstellung bis zur Unterschrift — auf dem Vertrags-Canvas.

**Vertragsgenerierung:**

- Template-basiert: Dienstvertrag, Werkvertrag, Rahmenvertrag, ANÜ-Vertrag, Einzelabruf
- Intelligente Template-Auswahl basierend auf Projekttyp
- Automatische Befüllung aus Opportunity-Daten und Service Offer

**Klausel-Bibliothek:**

- Standard- und Alternativklauseln für alle gängigen Vertragsbestandteile
- Risiko-Scoring pro Klausel (Standard / Abweichung / Risiko)

**Vertrags-Review auf dem Canvas:**

- Automatische Analyse eingehender Kunden-Vertragsentwürfe
- Rot/Gelb/Grün-Markierung mit Erklärung und Alternativvorschlag
- Benchmark gegen eigene historische Verträge
- Redline-Vorschläge mit Alternativformulierungen

**Verhandlungs-Tracking:**

- Versionierung, Redlining, Kommentare — im System statt per E-Mail
- Genehmigungs-Workflows: Welche Abweichungen müssen von wem freigegeben werden?

**DACH-Regulatory:**

- Scheinselbständigkeit: Automatische Prüfung auf ANÜ-Risiken
- Vergaberecht: EVB-IT-konforme Vertragsgestaltung
- CH (OR), AT (UGB): Angepasste Templates
- **Hinweis:** System liefert Unterstützung, keine Rechtsberatung. RDG-Konformität sicherstellen.

---

### 10.6 Outreach & Campaign Engine

**Problem:** Selbst mit perfektem Matching fehlt der systematische Weg zum Kunden. Erstansprache ist ad-hoc, Follow-ups gehen unter.

**Lösung:** Systematische, DSGVO-konforme Outreach-Engine mit personalisierten Kampagnen.

**Personalisierte Ansprache:**

- KI-generierte E-Mails mit Kompetenz-Mapping, Berater-Referenz, Warm-Path und Timing-Empfehlung
- Kontextualisiert: referenziert Signale, Branchen-Expertise, persönliche Verbindungen
- Editierbar vor Versand — Human-in-the-Loop

**Sequenzen & Kampagnen:**

- Multi-Step-Outreach-Sequenzen mit Timing und Bedingungen
- Kampagnen-Management: thematische Kampagnen

**Consent-Gating (DSGVO):**

Jede Outreach-Aktion ist an das Consent-Modell gebunden. Kein Versand ohne gültigen Consent. Double-Opt-In bei Kalt-Kontakten.

**Landing-Pages:**

- KI-generierte Landing-Pages für Kampagnen oder Events
- Template-basiert, Analytics-fähig, A/B-Testing-fähig

---

## 11. Module — Delivery & Performance Layer

### 11.1 Project Execution & Delivery Intelligence

**Problem:** Sobald das Projekt startet, endet die Systemunterstützung. Status-Updates per PowerPoint. Scope Creep wird zu spät erkannt.

**Lösung:** Intelligentes Projekt-Monitoring mit proaktiver Risiko-Erkennung und systematischem Feedback-Loop.

**Hinweis:** Eigene Zeiterfassung ist explizit out of scope. Das System konsumiert Zeitdaten über Integrationen.

**Milestone & Delivery Tracking:**

- Milestones werden aus dem Angebot/Vertrag automatisch übernommen
- Deliverable-Tracking: Erstellung, Review, Abnahme
- Fortschrittsmessung gegen Plan
- Abhängigkeitsvisualisierung

**Scope & Change Management:**

- Automatische Erkennung von Scope-Veränderungen
- Change Request Management: Template-Generierung mit Aufwandsschätzung
- Impact-Analyse: Auswirkung auf Timeline, Budget, Team

**Risk & Health Monitoring:**

- Projekt-Health-Score basierend auf: Milestone-Abweichungen, Budget-Verbrauch vs. Fortschritt, Kundenfeedback-Signale
- Proaktive Alerts via Notification Engine
- Partner-Dashboard: Portfolioüberblick über alle aktiven Projekte

**Kundenfeedback-Integration:**

- Pulse-Checks an definierten Milestones (automatisch getriggert)
- NPS + qualitatives Feedback — über Client Portal oder E-Mail
- Kontextualisiertes Feedback fließt zurück in den Consultant Knowledge Graph

**Feedback-Loops (kritisch):**

- Delivery-Erkenntnisse → Methodology & IP / Knowledge-Engine
- Kundenfeedback → Consultant Knowledge Graph
- Aufwandsdaten → kalibrieren Schätzungen in der Offer Composition
- Scope-Creep-Patterns → verbessern Opportunity-Analyse

---

### 11.2 Financial Intelligence & Controlling

**Problem:** Beratungen wissen erstaunlich schlecht, wie profitabel sie sind. Gesamt-EBITDA kennt jeder, aber DB pro Projekt, Kunde, Berater, Service Line? Excel-Artisanship.

**Lösung:** Echtzeit-Profitabilitätstransparenz auf jeder Aggregationsebene mit prädiktivem Forecasting.

**Deckungsbeitragsrechnung (Echtzeit):**

- DB1 pro Projekt: Umsatz − direkte Kosten
- Aggregation: pro Berater, pro Kunde, pro Service Line, pro Partner-Portfolio, pro Standort
- Margen-Erosion-Frühwarnung

**Utilization Management:**

- Aktuelle Auslastung pro Berater, Team, Practice, Standort (Daten aus Workforce-Modul)
- Predictive Utilization basierend auf Pipeline
- Bench-Management: „Diese 5 Berater sind ab KW 20 verfügbar — hier sind passende Opportunities"

**Revenue Forecasting:**

- Multifaktoriell: laufende Projekte, Verlängerungswahrscheinlichkeiten, Pipeline gewichtet, saisonale Muster
- Services-spezifisch: berücksichtigt Staffing-Constraints und Projekt-Laufzeiten
- Szenario-Modelle: Best/Expected/Worst Case
- Capacity-constrained Forecast

**Pricing Intelligence:**

- Tagessatz-Benchmarks: nach Senioritätslevel, Branche, Region, Projekttyp
- Rate-Cards pro Berater/Service Line
- Win-Rate-Korrelation mit Pricing

**Cash-Flow-Prognose:**

- Fakturierungszeitpunkte
- Zahlungsziel-Analyse pro Kunde
- Zahlungsverzug-Risikobewertung

**Subcontractor-Controlling:**

- Einkaufskosten vs. Weiterfakturierung, Marge
- ANÜ-Compliance-Monitoring

**DACH-Spezifika:**

- HGB vs. IFRS 15 Umsatzrealisierung
- Reisekostenabrechnung nach deutschem Steuerrecht
- Schweizer MwSt.-Besonderheiten
- Österreich: UGB-Spezifika

---

## 12. Module — Platform Layer

### 12.1 Collaboration & Activity

**Problem:** Heute ist die Zusammenarbeit an Deals, Angeboten und Projekten über 3–5 Tools verstreut: Slack für schnelle Fragen, E-Mail für formelle Kommunikation, Word für Dokumente, Excel für Kalkulationen. Kontext geht verloren, Entscheidungen sind nicht nachvollziehbar, und der Partner der morgens fragt „Status RetailCorp?" muss drei Tools öffnen.

**Lösung:** Entity-basierte Collaboration — Kommentare, @Mentions, Aktivitäts-Feeds direkt auf den Geschäftsobjekten (Opportunities, Projekte, Angebote, Verträge, Berater). Keine eigene Chat-Plattform — Echtzeit-Kommunikation über Slack/Teams-Integration.

**Warum entity-basiert und nicht Chat-basiert:**
Beratungen haben bereits Slack oder Teams. Ein weiterer Chat wäre Tool-Fragmentierung, nicht Tool-Konsolidierung. Das Problem ist nicht „wir können nicht kommunizieren", sondern „die Kommunikation über Deals ist nicht an den Deal-Kontext gebunden". Wenn Thomas in Slack fragt „Wie steht's mit RetailCorp?", muss Katrin drei Systeme öffnen. Wenn Thomas stattdessen den Aktivitäts-Feed der RetailCorp-Opportunity öffnet, sieht er alles: letzte Aktion, Kommentare, Statusänderungen, AI-Empfehlungen.

**Kommentare & @Mentions:**

- Jede Entity (Opportunity, Projekt, Angebot, Vertrag, Berater, Signal) hat einen Kommentar-Thread
- @Mentions benachrichtigen den genannten Nutzer via Notification Engine
- Rich-Text-Kommentare mit Anhängen, Links, eingebetteten Entitäten
- Kommentare auf AI Canvasses: direkt auf generierten Artefakten kommentieren (z.B. auf einer Angebotssektion)

> *Flow: Angebotsfreigabe*
> Katrin generiert ein Angebot auf dem AI Canvas. Sie kommentiert die Pricing-Sektion: „@Thomas — der Tagessatz für Markus ist 1.450€. Passt das oder gehen wir höher?" Thomas bekommt eine Push-Notification, öffnet den Canvas, sieht den Kontext (Angebot, Kundeninfo, historische Rate), antwortet: „1.600€ — RetailCorp zahlt Premium. Hier ist die Benchmark-Analyse." Katrin passt an, markiert als resolved. Alles dokumentiert, alles nachvollziehbar.

**Aktivitäts-Feeds:**

- Pro Entity: chronologischer Feed aller Aktivitäten (Statusänderungen, Kommentare, AI-Aktionen, Dokumenten-Uploads, Matching-Ergebnisse)
- Globaler Feed: alle relevanten Aktivitäten über Entitäten hinweg, gefiltert nach Rolle und Zuständigkeit
- Filterbar nach Aktivitätstyp, Zeitraum, Person

**Slack/Teams-Integration:**

- Bidirektionale Benachrichtigungen: Consultry-Kommentare können optional in einen Slack-Channel gespiegelt werden
- Aus Slack heraus auf Consultry-Entitäten reagieren: „/consultry status RetailCorp" → Bot antwortet mit aktuellem Status
- Link-Unfurling: Consultry-Links in Slack zeigen Kontext-Preview

---

### 12.2 Client Portal

**Problem:** Kunden haben keinen Einblick in den Projektstatus — sie sind auf E-Mail-Updates und Status-Meetings angewiesen. Feedback wird informell gesammelt und geht verloren. Dokumentenfreigabe läuft über E-Mail-Anhänge.

**Lösung:** Read-Only Projektzugang für Kunden-Ansprechpartner via Magic Links. Kein Login, kein Passwort — maximale Reibungslosigkeit.

**Warum Read-Only und nicht interaktiv:**
Ein interaktives Client Portal (mit Dokumenten-Collaboration, Change-Request-Einreichung) verändert die Produktnatur fundamental und erhöht die Sicherheits- und Compliance-Anforderungen erheblich. Read-Only mit strukturierten Feedback-Formularen liefert 80% des Werts mit 20% der Komplexität. Kunden brauchen Transparenz und einen einfachen Feedback-Kanal — nicht ein zweites Projektmanagement-Tool.

**Magic-Link-Zugang:**

- Projektleiter generiert einen Magic Link pro Kunde/Stakeholder
- Link ist zeitlich begrenzt (konfigurierbar: 30/60/90 Tage) und jederzeit widerrufbar
- Kein Account, kein Passwort — Zugang über den Link
- Optional: E-Mail-Verifizierung als zweiter Faktor

**Projekt-Dashboard (Kunden-Sicht):**

- Projekt-Gesamtstatus: On Track / At Risk / Delayed (Ampellogik)
- Milestone-Übersicht: was ist erledigt, was steht an, was ist überfällig
- Team-Vorstellung: welche Berater sind eingesetzt (Name, Rolle, Foto — nur freigegebene Informationen)
- Nächste Schritte: was passiert als nächstes, was wird vom Kunden benötigt

**Dokumentenfreigabe:**

- Projektleiter gibt spezifische Dokumente für den Kunden frei
- Dokumente sind nur lesbar, nicht downloadbar (konfigurierbar)
- Versionierung: Kunde sieht immer die aktuelle Version

**Strukturiertes Feedback:**

- Pulse-Checks: regelmäßige, kurze Feedback-Formulare (5 Fragen, 2 Minuten)
- Milestone-Abnahme: „Milestone X ist abgeschlossen — bitte bestätigen oder Kommentar hinterlassen"
- Freitext-Feedback: offenes Feld für unstrukturiertes Feedback
- Feedback fließt automatisch in Project Execution (Risk Monitoring) und Consultant Knowledge Graph

> *Flow: Kunden-Feedback über Client Portal*
> Dr. Müller (RetailCorp) bekommt eine automatische E-Mail: „Ihr SAP-Migrationsprojekt hat Milestone 3 erreicht. Hier ist Ihr Projektupdate." Er klickt den Magic Link, sieht: Milestone 3 abgeschlossen, Milestone 4 (Data Migration) in Arbeit, eine neue Risiko-Notiz vom Projektleiter. Ein Pulse-Check fragt: „Wie zufrieden sind Sie mit der Kommunikation? Wie ist Ihre Einschätzung zum Fortschritt?" Dr. Müller gibt 4/5 für Kommunikation, 3/5 für Fortschritt und schreibt: „Data-Migration-Timeline macht mir Sorgen." Dieses Feedback erscheint sofort im Projekt-Dashboard des Projektleiters, der Copilot markiert es als Risiko-Signal.

**Datenschutz & Sicherheit:**

- Client Portal zeigt nur explizit freigegebene Informationen
- Keine internen Daten (Marge, Berater-Kosten, interne Kommentare) sichtbar
- Audit-Trail: wer hat wann was gesehen
- IP-Whitelisting optional für Enterprise-Kunden

---

### 12.3 Notification & Alert Engine

**Problem:** Proaktive Alerts werden in fast jedem Modul beschrieben — Stale-Opportunities, Margin-Erosion, Bench-Warnung, Burnout-Prävention, Scope Creep, Beziehungserosion. Aber ohne ein einheitliches System landen alle Alerts im gleichen Kanal, es gibt keine Priorisierung, und Alert-Fatigue macht das System nutzlos.

**Lösung:** Einheitliche Notification & Alert Engine als Querschnitts-Infrastruktur mit intelligenter Priorisierung, Kanalsteuerung und Alert-Fatigue-Management.

**Warum als eigenes Modul:**
Wenn jedes Modul sein eigenes Alerting baut, entsteht ein Frankenstein-System: 15 Module × 3–5 Alert-Typen = 45–75 verschiedene Alerts ohne Koordination. Die Notification Engine ist die einzige Stelle die weiß, welche Alerts ein Nutzer heute schon bekommen hat, und kann entsprechend priorisieren und zusammenfassen.

**Alert-Typen & Priorisierung:**

| Priorität | Typ | Beispiele | Kanal |
|---|---|---|---|
| **P0 — Sofort** | Kritische Geschäftsrisiken | Projekt-Eskalation, Vertragsfrist morgen, Client-Beschwerde | Push + In-App + E-Mail |
| **P1 — Heute** | Handlungsbedarf | Staffing-Anfrage, Angebotsfreigabe, Stale-Opportunity | In-App + E-Mail |
| **P2 — Diese Woche** | Informativ mit Handlungsoption | Neues Signal, Relationship-Erosion, Zertifizierung läuft ab | In-App |
| **P3 — Digest** | Informativ | Neue Knowledge-Bausteine, System-Updates, Benchmark-Änderungen | Wöchentlicher Digest |

**Kanalsteuerung:**

- **In-App:** Notification-Center mit Inbox-Metapher (ungelesen, gelesen, archiviert)
- **Push (Mobile):** Nur P0 und P1, konfigurierbar
- **E-Mail:** P0 sofort, P1 gebündelt (morgens/abends), P2 optional
- **Slack/Teams:** Konfigurierbarer Bot, der spezifische Alert-Typen in Channels postet
- **Digest:** Wöchentliche Zusammenfassung aller P3-Benachrichtigungen

**Alert-Fatigue-Management:**

- **Rate Limiting:** Maximal X Alerts pro Nutzer pro Tag (konfigurierbar, Default: 15)
- **Intelligente Aggregation:** 5 Signale vom gleichen Typ → eine zusammenfassende Notification statt fünf einzelner
- **Snooze & Mute:** Nutzer kann spezifische Alert-Typen temporär stummschalten
- **Relevanz-Scoring:** AI bewertet Relevanz pro Nutzer basierend auf Rolle, Zuständigkeiten und historischem Klickverhalten
- **Feedback-Loop:** „War dieser Alert hilfreich?" → System lernt

> *Flow: Thomas' Morgen-Briefing*
> Thomas öffnet Consultry um 8:15. Im Notification Center: 1 roter (P0) Alert — Projekt MedTech hat Scope-Creep-Warning, Change Request empfohlen. 3 orangene (P1) Alerts — eine Angebotsfreigabe wartet, zwei Staffing-Anfragen. Der Digest zeigt: letzte Woche 12 neue Signale erkannt, 3 in Opportunities konvertiert, Pipeline-Wert +180K€. Thomas bearbeitet die Alerts in Reihenfolge — jeder Alert führt direkt zur relevanten Entity mit vollem Kontext.

---

## 13. Cross-Cutting Concerns

### 13.1 Mobile Strategy

**Problem:** Berater sind unterwegs — bei Kunden, auf Reisen, auf Events. Ein Desktop-only-Tool schließt sie von zeitkritischen Interaktionen aus (Staffing-Anfragen beantworten, Alerts prüfen, Quick-Updates).

**Lösung:** Consultry ist eine responsive Web-Anwendung mit definierten mobile-first und mobile-compatible Flows.

**Mobile-First Flows** (primär für Smartphone optimiert):

- Signal-Feed prüfen und Signale bewerten
- Notification-Center und Alert-Bearbeitung
- Staffing-Anfragen beantworten (annehmen/ablehnen mit Kontext)
- Projekt-Status prüfen (Ampel, Milestones)
- Verfügbarkeit updaten
- Event-Kontakte erfassen (Badge-Scan, Quick-Notes)
- Kommentare schreiben und @Mentions beantworten
- Angebotsfreigabe erteilen
- Client Portal (für Kunden sowieso mobile-optimiert)

**Mobile-Compatible Flows** (funktionieren auf Mobile, aber Desktop ist besser):

- AI Canvasses (Angebote erstellen/bearbeiten, Verträge reviewen)
- Dashboards und Reports
- Pipeline-Management
- Berater-Profile bearbeiten

**Desktop-Only Flows:**

- Org-Struktur verwalten (Admin)
- Template-Management
- System-Administration
- Bulk-Operationen (Datenimport, Massenänderungen)

### 13.2 Multi-Entity & Governance

- **Mandantenfähigkeit:** Separate Gesellschaften pro Land/Practice abbildbar
- **Granulares Rechtekonzept:** Partner-Sichtbarkeit, Practice-Grenzen, Standort-Zugriff. Org-Struktur aus dem Workforce-Modul definiert die Scope-Grenzen.
- **Chinese Walls:** Information Barriers bei konkurrierenden Kundenprojekten
- **Role-Based Access:** Geschäftsführung, Partner, Practice Lead, Projektleiter, Berater, BD, Backoffice, HR
- **Daten-Residenz:** DACH-Hosting (EU-Datacenter zwingend)

### 13.3 DSGVO & Compliance

**Consent-State-Machine:**

| Status | Bedeutung | Outreach erlaubt |
|---|---|---|
| **UNKNOWN** | Neuer Kontakt, kein Consent | ❌ Blockiert |
| **OPT-IN PENDING** | Einladung gesendet, ausstehend | ❌ Blockiert |
| **OPTED-IN (Datum)** | Bestätigung erhalten | ✅ Erlaubt |
| **SUPPRESSED** | Bounce / Beschwerde / Widerruf | ❌ Auto-unterdrückt |

**Spezifische Anforderungen:**

| Anforderung | Detail |
|---|---|
| **Double-Opt-In** | Vor jeder Kalt-E-Mail. Warm-Kontakte: Single-Opt-In + dokumentierte Rechtsgrundlage. |
| **Consent-Status-Anzeige** | Jeder Kontakt: klar sichtbarer Status mit Datum |
| **Audit-Trail** | Durchgängig: Wer hat wann was getan/geändert/genehmigt |
| **Erasure-Workflow** | Löschung innerhalb 72h. Anonymisierter Audit-Eintrag bleibt. |
| **Data Retention** | Konfigurierbar. Default: 24 Monate Inaktivität → Archivierung; 36 Monate → Löschung. |
| **BetrVG §87 Abs. 1 Nr. 6** | Berater-Profiling und Workforce-Monitoring bedürfen der BR-Zustimmung. Feature-Gates für personenbezogene Auswertungen. |
| **Beschäftigtendatenschutz** | DSGVO Art. 88: Berater-Daten besonders geschützt. Opt-in für nicht offensichtliche Anreicherung. |

### 13.4 DACH Regulatory

| Bereich | Regelung | Relevanz für Consultry |
|---|---|---|
| Berater-Profiling | BetrVG §87 Abs. 1 Nr. 6 | Betriebsrat-Zustimmung bei systematischer Leistungserfassung |
| Workforce-Monitoring | BetrVG §87 Abs. 1 Nr. 6 | Workload-/Auslastungsdaten erfordern Betriebsvereinbarung. Feature-Gate. |
| Datenschutz | DSGVO, BDSG | Consent-Modell, Erasure, Audit-Trail |
| Arbeitnehmerüberlassung | AÜG | ANÜ-Compliance bei Freelancer-Einsatz |
| Vertragsrecht DE | BGB, HGB | Dienstvertrag vs. Werkvertrag Abgrenzung |
| Vertragsrecht CH | OR | Eigene Templates und Klauseln |
| Vertragsrecht AT | UGB | Spezifische Regelungen |
| Öffentliche Vergabe | GWB, VgV, EVB-IT | Vergaberechtskonforme Verträge |
| Rechtsdienstleistung | RDG | Vertragsmodul als Tool, nicht als Rechtsberatung |
| AI Act | EU AI Act | Transparenzpflichten bei AI-Entscheidungen (Matching, Scoring) |
| Buchhaltung | HGB, IFRS 15 | Umsatzrealisierung bei Dienst-/Werkverträgen |
| Grenzüberschreitend | MwStSystRL | CH-MwSt. bei Cross-Border-Consulting |

### 13.5 Reporting & Executive Dashboards

- **Geschäftsführungs-Cockpit:** Umsatz, Auslastung, Pipeline, Profitabilität, Signal-Highlights
- **Partner-View:** Eigenes Portfolio, eigene Kunden, eigene Berater, eigene Opportunities
- **Practice-Lead-View:** Service-Line-Performance, Skill-Landschaft, Markttrends
- **BD-View:** Pipeline, Outreach-Performance, Event-ROI, Conversion-Funnel
- **Projektleiter-View:** Projekt-Health, Budget, Milestones, Kundenfeedback, Team
- **Berater-Self-Service:** Eigenes Profil, eigene Projekte, eigene Auslastung, Entwicklungsplan, Knowledge-Beiträge
- **Drill-Down:** Von High-Level KPI bis zum einzelnen Projekt/Berater

---

## 14. Datenmodell (konzeptionell)

```
[Consultant] ──has──▶ [Skill] (normalisiert, hierarchisch)
      │                   │
      │                   │ evidenced_by
      │                   ▼
      ├──worked_on──▶ [Project] ◀──for──── [Client]
      ├──belongs_to─▶ [Team/Practice] ──led_by──▶ [Consultant] (Lead)
      │                   │
      │                   └──part_of──▶ [Location/Entity]
      ├──has_absence─▶ [Absence] (Urlaub, Weiterbildung, etc.)
      ├──has_career──▶ [CareerPath] ──targets──▶ [CareerLevel]
      ├──mentored_by─▶ [Consultant] (Mentoring-Beziehung)
      │                   │                    │
      │                   │ produced           │ has
      │                   ▼                    ▼
      │              [Deliverable]        [Stakeholder]
      │                   │
      │                   │ uses
      │                   ▼
      │              [Methodology]
      │
      ├──certified──▶ [Certification]
      ├──spoke_at───▶ [Event]
      ├──knows──────▶ [Consultant]  (internes Netzwerk)
      └──received───▶ [Feedback]    (kontextualisiert)

[Signal] ──indicates_need_at──▶ [Client]
    │      ──matches──────────▶ [Skill]
    │
    └──becomes──▶ [Opportunity] ──requires──▶ [Skill]
                       │        ──for──────▶ [Client]
                       │        ──matched──▶ [Consultant]
                       │        ──competes──▶ [Competitor]
                       │
                       ├──has──▶ [Engagement Brief]
                       ├──has──▶ [Comment/Activity] (Collaboration)
                       │
                       ├──becomes──▶ [Proposal/Offer]
                       │                 │
                       │                 ├──staffed_with──▶ [Consultant] (Team)
                       │                 └──uses──────────▶ [Methodology]
                       │
                       └──becomes──▶ [Contract]
                                        │
                                        └──becomes──▶ [Project]
                                                        │
                                                        ├──has──▶ [ClientPortalView]
                                                        └──has──▶ [PulseCheck/Feedback]

[Project] ──generates──▶ [Knowledge Asset]
     │     ──tracked_by──▶ [Milestone]
     │     ──measured_by──▶ [Financial Record]
     │     ──triggered_by──▶ [Change Request]
     └─────feedback_from──▶ [Feedback] ──enriches──▶ [Consultant]

[Outreach Campaign] ──targets──▶ [Client/Stakeholder]
        │            ──uses────▶ [Landing Page]
        │            ──requires─▶ [Consent]
        └────────────tracks────▶ [Conversion Event]

[Event] ──attended_by──▶ [Consultant]
   │    ──generated───▶ [Contact]
   │    ──has─────────▶ [Landing Page]
   └────measured_by───▶ [ROI Metric]

[Notification] ──targets──▶ [User]
      │         ──references──▶ [Any Entity]
      └─────────has_priority──▶ [P0|P1|P2|P3]
```

---

## 15. Integrationen

### Integrationsprinzipien

- **Adapter-Pattern:** Jede Integration austauschbar via typisierter Adapter
- **Kein Vendor-Lock-in:** Adapter-Wechsel ohne Systemänderungen
- **Daten-Qualität > Daten-Quantität:** Lieber weniger, aber verifizierte Quellen

### Integrationslandschaft

| Kategorie | Integration | Rolle |
|---|---|---|
| **Enrichment** | Dealfront | Primäres DACH-Enrichment + Signale |
| **Enrichment** | North Data | Handelsregister + Finanzen (Supplement) |
| **Ausschreibungen** | TED, DÖE, SIMAP, bund.de | Öffentliche Vergabe |
| **Kalender** | Google Calendar, Microsoft 365 | Verfügbarkeit, Abwesenheiten |
| **E-Mail** | Gmail, Outlook | Opportunity-Intake, Outreach, Aktivitäts-Tracking |
| **E-Mail-Versand** | SendGrid / Resend | Outreach-Zustellung + Tracking |
| **Dokumente** | Google Drive, SharePoint, OneDrive | Wissensquellen-Sync |
| **Zeiterfassung** | Clockodo, MOCO, Harvest, Personio | Aufwandsdaten für Financial Intelligence |
| **HR** | Personio, SAP SuccessFactors, Workday | Berater-Stammdaten, Org-Daten, Abwesenheiten |
| **Buchhaltung** | DATEV, Lexware, Bexio (CH), BMD (AT) | Financial Intelligence |
| **Recruiting** | LinkedIn Recruiter, StepStone, XING, Gulp | Talent Acquisition |
| **Event-Plattformen** | Grip, Brella, Swapcard, b2match | Event-Kontakte (nur bei Partnerschaft) |
| **Collaboration** | Slack, Microsoft Teams | Bidirektionale Notifications, Bot-Commands |
| **CRM-Migration** | Salesforce, HubSpot, Pipedrive | Import-Pfade für Bestandsdaten |
| **BI** | Power BI, Tableau | Export/Embedding (perspektivisch) |

---

## 16. Tiering & Pricing (Konzept)

| | **Starter** | **Professional** | **Enterprise** |
|---|---|---|---|
| **Zielgruppe** | Boutique (5–30) | Mittelstand (30–200) | Groß (200+) |
| **Berater-Profile** | bis 30 | bis 200 | unbegrenzt |
| **Foundation** | Knowledge Graph, Client Mgmt, Workforce (Basis) | + Methodology/IP, Knowledge Engine, Workforce (voll) | + Multi-Entity, Chinese Walls |
| **Growth** | Basis-Signal-Feed, Event-Kalender | + Discovery-Engine, Talent Acquisition | + Custom Enrichment, API |
| **Deal** | Matching, CVs, Opportunity Tracking | + Offer Composition, Contracts, Outreach | + Advanced Campaigns, Landing Pages |
| **Delivery** | Basis-Milestone-Tracking | + Risk Monitoring, Financial Intelligence | + Predictive Analytics |
| **Platform** | Collaboration (Basis), Notifications | + Client Portal, Slack/Teams-Integration | + Custom Dashboards, API |
| **AI-Features** | CV-Import, Basis-Matching, Copilot | + Canvasses, Semantisches Matching, Offer-Generierung | + Custom AI Workflows, Planning Tools |
| **Mobile** | Mobile-Compatible | + Mobile-First Flows | + Custom Mobile Features |
| **Support** | Self-Service + Chat | Dedicated Onboarding + E-Mail | Customer Success Manager + SLA |

*Preispunkte erfordern Marktvalidierung. Benchmark: MOCO (ab €15/User/Monat), Productive.io (ab $17/User/Monat), Kimble (Enterprise-Pricing). Consultry positioniert sich premium wegen AI-nativer Differenzierung und vollständiger Lifecycle-Abdeckung.*

---

## 17. Erfolgsmetriken

### Frühindikatoren (Monat 1 nach Go-Live)

| Metrik | Baseline | Ziel | Stretch |
|---|---|---|---|
| BD-Recherchezeit pro Interessent | 45–90 Min. | <15 Min. | <5 Min. |
| Angebotserstellungszeit | 3–10 Tage | <1 Tag | <4 Stunden |
| CV-Generierungszeit | 2–4 Stunden | <5 Min. | <1 Min. |
| Feature-Adoption (7 Tage) | n/a | 60 % | 80 % |
| Kompetenz-Match-Genauigkeit | n/a | >70 % „nützlich" | >85 % |
| Berater-Profil-Onboarding (14d) | n/a | 80 % vollständig | 95 % |
| Knowledge-Q/A-Agent-Nutzung | n/a | 3+ Anfragen/Berater/Woche | 7+ |
| AI Canvas-Adoption | n/a | 50 % der Angebote über Canvas | 75 % |
| Collaboration-Engagement | n/a | 70 % der Opportunities mit Kommentaren | 85 % |

### Spätindikatoren (Quartal 1+)

| Metrik | Baseline | Ziel | Stretch |
|---|---|---|---|
| Lead-zu-Meeting-Konversion | 2–5 % | 15 % | 20 % |
| Kosten/qualifizierter Lead | 600–1.200 € | 400 € | 300 € |
| Angebots-Win-Rate | Branchenschnitt | +25 % | +40 % |
| Berater-Utilization | 60–70 % | 80 % | 90 % |
| Wöchentlich aktive Workspaces | n/a | 70 % | 85 % |
| Forecast-Accuracy | n/a | ±20 % | ±10 % |
| Vertrags-Durchlaufzeit | 3–6 Wochen | <2 Wochen | <1 Woche |
| Knowledge-Pool-Wachstum | n/a | 20+ Bausteine/Monat | 50+ |
| Ø DB1-Verbesserung | Baseline | +3–5 PP | +8 PP |
| Client-Portal-Adoption | n/a | 60 % aktiver Projekte | 80 % |
| Alert-Actionability | n/a | 40 % der Alerts führen zu Aktion | 60 % |

### Kritische Validierungspunkte

| Metrik | Threshold | Konsequenz |
|---|---|---|
| Kompetenz-Match-Genauigkeit | <60 % nach 1 Monat | Kern-Hypothese in Frage; Matching-Engine re-evaluieren |
| Enrichment-Datenqualität | >30 % Lücken bei DACH-Firmen | Datenquellen-Mix anpassen |
| Berater-Onboarding | <50 % in 7 Tagen | Onboarding-Flow überarbeiten |
| Knowledge-Pool-Engagement | <2 Anfragen/Woche/Berater nach 2 Monaten | Q/A-Agent-Qualität verbessern |
| Angebots-Adoption | <30 % der Proposals über System generiert nach 3 Monaten | Offer Composition vereinfachen |
| Alert-Fatigue | >50 % der Alerts ignoriert nach 1 Monat | Priorisierung und Rate Limiting anpassen |
| Canvas-Abandon-Rate | >40 % der gestarteten Canvasses nicht abgeschlossen | UX-Review, Canvas-Flows vereinfachen |

---

## 18. Risiken

| Risiko | Impact | Mitigation |
|---|---|---|
| **Scope-Ambition** (18 Module + AI Layer zum Launch) | Hoch | Strikte Build-Reihenfolge. Foundation + Deal Layer zuerst validieren. Aber: alle Module sind Launch-Scope — kein Scope-Cut ohne explizite Entscheidung. |
| **DACH-Compliance-Komplexität** (BetrVG, DSGVO, RDG, AÜG) | Hoch | Frühzeitige juristische Beratung, Privacy-by-Design, Consent-State-Machine ab Tag 1. Feature-Gates für BR-pflichtige Funktionen. |
| **AI-Qualität bei Launch** | Hoch | Jedes AI-Feature hat einen Manual Fallback. Human-in-the-Loop bei allen generativen Outputs. Qualitätsmetriken ab Woche 1. |
| **Datenqualität bei Erstbefüllung** | Mittel | AI-gestützter Import, geführte Onboarding-Prozesse, Skill-Normalisierung. |
| **Konkurrenz** (Salesforce + Kimble, Productive.io, MOCO) | Mittel | AI-native Differenzierung + DACH-Spezialisierung + Lifecycle-Breite. |
| **BetrVG-Blockade bei Workforce-Features** | Mittel | Feature-Gate-Architektur. Aggregierte Team-Daten ohne Personenbezug als Fallback. |
| **Scope-Creep Richtung HR** | Mittel | Harte Scope-Grenze dokumentiert. Regelmäßige Scope-Reviews. |
| **Alert-Fatigue** | Mittel | Rate Limiting, intelligente Aggregation, Feedback-Loop ab Tag 1. |
| **Client-Portal-Sicherheit** | Mittel | Magic Links mit Ablaufdatum, Audit-Trail, nur explizit freigegebene Daten. Penetration Testing vor Launch. |
| **Enrichment-Kosten** (Dealfront ~21-34K€/Jahr) | Mittel | Hybrid-Strategie, Adapter-Architektur erlaubt Quellenwechsel. |
| **Canvas-UX-Komplexität** | Mittel | Iteratives Design, User Testing vor Launch. Canvasses können als „Advanced Feature" starten. |
| **Vertragsmodul als Rechtsberatung** (RDG) | Mittel | Klare Positionierung als Tool. Finale Prüfung durch Rechtsabteilung empfohlen. |

---

## 19. Offene Fragen

| # | Frage | Wer muss antworten | Status |
|---|---|---|---|
| 1 | **Pricing-Validierung:** Preisbereitschaft im DACH-Beratungsmarkt? AI-Premium rechtfertigt welchen Aufschlag? | Product + Sales | Gespräche mit 10+ Beratungen nötig |
| 2 | **Build vs. Integrate für Financials:** Eigenes Controlling oder Deep-Integration mit DATEV/Bexio? | Product + Engineering | Zu evaluieren |
| 3 | **Document Generation Stack:** Welches Tooling für CV-/Proposal-/Vertragsgenerierung? | Engineering | Zu evaluieren |
| 4 | **AI Canvas Framework:** Build vs. existierende Frameworks (Tiptap, ProseMirror, Custom)? Welche Interaktionspatterns funktionieren? | Engineering + Design | Prototyping nötig |
| 5 | **Client Portal Security Model:** Reicht Magic Link? Brauchen wir E-Mail-Verifizierung? Was bei Enterprise-Kunden mit Security-Anforderungen? | Engineering + Legal | Zu evaluieren |
| 6 | **Notification Channel-Strategie:** Eigene Push-Notifications (PWA) oder nur E-Mail + Slack/Teams? Native App nötig für Push? | Engineering + Product | Zu evaluieren |
| 7 | **Relationship zu Institor/Cogmo:** Shared Components? Feature-Set in Consultry? Getrennte Produkte? | Strategy | Strategische Entscheidung |
| 8 | **Go-to-Market:** Direktvertrieb? Partner-Kanal? Product-Led Growth? | Product + Sales | Zu definieren |
| 9 | **Sprach-Strategie:** Phase 1 nur Deutsch? EN-UI ab wann? FR für Schweizer Kunden? | Product | Zu definieren |
| 10 | **Enrichment-Partnerschaft:** Dealfront vs. North Data vs. beides? | Product + Procurement | Zu verhandeln |
| 11 | **Canvas-Collaboration-Modell:** Echtzeit-Collaboration (Google Docs-Style) oder sequentielles Editing mit Kommentaren? | Engineering + Design | Prototyping nötig |

---

## 20. Abgrenzung / Out of Scope

- Eigene Zeiterfassung (Integration statt Build)
- ERP-Funktionalität (Integration statt Build)
- Vollständiges HR-System (Integration mit Personio etc. — operative Team-Features in Consultry, formale HR extern)
- Rechtsberatung (System unterstützt, berät nicht)
- Event-Plattform (Integration, kein Konkurrent)
- LinkedIn/XING-API-Integration (APIs nicht verfügbar)
- Generalistische CRM-Funktionalität (spezialisiert auf Beratungen)
- Eigene Chat/Messaging-Plattform (entity-basierte Collaboration, Echtzeit über Slack/Teams)
- Interaktives Client-Portal mit Schreibrechten (Read-Only + strukturiertes Feedback)
- Native Mobile App (responsive Web + PWA, keine App-Store-App)
- BYO-CRM bidirektionaler Sync (natives CRM, Import-Pfade für Migration)

---

## 21. Modul-Übersicht (Komplett)

| # | Modul | Layer | Kern-Wert |
|---|---|---|---|
| — | AI Experience Layer | AI | Copilot, Command Bar, Canvasses, Chat, Planning, Agentic Workflows |
| 1 | Consultant Knowledge Graph | Foundation | Lebendes Berater-Profil mit normalisierter Skill-Taxonomie |
| 2 | Workforce & Team Management | Foundation | Operatives Team-Management, Verfügbarkeit, Kapazitätsplanung, Entwicklung |
| 3 | Client & Account Management | Foundation | Strukturiertes Kundenbeziehungs-Management |
| 4 | Methodology & IP Asset Management | Foundation | Firmenwissen querybar und wiederverwendbar |
| 5 | Market & Signal Intelligence | Growth | Proaktive Marktbeobachtung und Discovery |
| 6 | Events & Network Intelligence | Growth | End-to-End Event-Lifecycle mit ROI |
| 7 | Talent Acquisition & Onboarding | Growth | Datengetriebenes Recruiting und nahtloses Onboarding |
| 8 | Opportunity Intelligence & Tracking | Deal | Intelligentes Opportunity-Management mit Engagement-Briefs |
| 9 | Intelligent Staffing & Matching | Deal | Semantisches Team-Matching |
| 10 | Smart Service Offer Composition | Deal | Maßgeschneiderte Angebote mit Varianten auf dem Canvas |
| 11 | Client-Facing Intelligence | Deal | CVs, Proposals, Case Studies auf Knopfdruck |
| 12 | Contract Intelligence & Legal Automation | Deal | AI-gestützter Vertrags-Lifecycle auf dem Canvas |
| 13 | Outreach & Campaign Engine | Deal | DSGVO-konforme Erstansprache und Kampagnen |
| 14 | Project Execution & Delivery Intelligence | Delivery | Projekt-Monitoring mit Risiko-Frühwarnung |
| 15 | Financial Intelligence & Controlling | Delivery | Echtzeit-Profitabilität und Forecasting |
| 16 | Collaboration & Activity | Platform | Entity-basierte Zusammenarbeit mit Kommentaren, @Mentions, Feeds |
| 17 | Client Portal | Platform | Read-Only Projektzugang für Kunden via Magic Links |
| 18 | Notification & Alert Engine | Platform | Intelligentes Alerting mit Priorisierung und Fatigue-Management |

**Cross-Cutting:** Multi-Entity & Governance, DSGVO & Compliance, DACH Regulatory, Mobile Strategy, Reporting & Executive Dashboards

---

## 22. Phased Build-Reihenfolge

Alle Module sind Launch-Scope. Die Phasen definieren die Build-Reihenfolge basierend auf Abhängigkeiten und Value-Delivery — nicht den Produktumfang.

### Phase 1 — Foundation + Core Deal (Wochen 1–8)
**Ziel:** Arbeitsfähige Plattform mit Datenfundament, erstem AI-Werthebel und Collaboration.

- AI Experience Layer Basis (Copilot, Command Bar)
- Consultant Knowledge Graph (Profile, CV-Import, Skills-Normalisierung)
- Workforce & Team Management (Org-Struktur, Verfügbarkeit, Basis-Kapazitätsplanung)
- Client & Account Management (Stammdaten, Stakeholder, Beziehungshistorie)
- Opportunity Intelligence (Intake, Auto-Extraktion, Pipeline, Basis-Engagement-Briefs)
- Intelligent Staffing & Matching (Multi-Faktor, Team-Komposition)
- Client-Facing Intelligence (CV-Generierung, Basis-Proposals)
- Collaboration & Activity (Kommentare, @Mentions, Aktivitäts-Feeds)
- Notification Engine Basis (In-App, E-Mail)
- Auth, Multi-Tenancy, RBAC, DSGVO-Consent-Modell, Basis-Dashboard
- Core-Integrationen: Kalender, E-Mail, Dokumenten-Storage, Personio

### Phase 2 — Full Deal Machine + Growth (Wochen 9–16)
**Ziel:** Komplette Wertschöpfungskette vom Signal bis zum Vertrag.

- AI Canvasses (Angebots-Canvas, Vertrags-Canvas, Engagement-Brief-Canvas)
- Market & Signal Intelligence (Signal-Feed, Discovery-Engine, Ausschreibungen)
- Smart Service Offer Composition (Angebotsgenerierung, Varianten-Engine)
- Contract Intelligence (Templates, Klausel-Bibliothek, Review)
- Outreach & Campaign Engine (personalisierte Ansprache, Consent-Gating)
- Methodology & IP Asset Management (Knowledge-Engine, Q/A-Agent)
- Notification Engine erweitert (Priorisierung, Slack/Teams, Alert-Fatigue-Management)
- Slack/Teams-Integration
- Enrichment-Integrationen: Dealfront, North Data, SendGrid

### Phase 3 — Delivery + Performance + External (Wochen 17–24)
**Ziel:** Delivery-Tracking, Profitabilität, Client-Zugang, Mobile.

- Project Execution & Delivery (Milestones, Risk Monitoring, Kundenfeedback, Scope-Change)
- Financial Intelligence (DB-Rechnung, Utilization, Forecasting, Pricing Intelligence)
- Client Portal (Magic Links, Projekt-Dashboard, Feedback)
- Workforce erweitert (Workload-Monitoring, Performance/Entwicklung, Mentoring — mit Feature-Gates)
- Chat-Interfaces (Knowledge-Agent, Analytics-Agent)
- Mobile-First Flows
- Integrationen: Zeiterfassung, Buchhaltung

### Phase 4 — Growth Engine + Advanced AI (Wochen 25–32)
**Ziel:** Netzwerk, Recruiting, strategische Planung.

- Events & Network Intelligence (Pre/Live/Post, Landing-Pages, ROI)
- Talent Acquisition & Onboarding (Recruiting-Pipeline, Freelancer-Sourcing, Onboarding-Agent)
- Planning Tools (Capacity Planner, Revenue Forecaster, Skill-Strategy Planner)
- Knowledge-Canvas
- Advanced Analytics & Predictive Features
- Recruiting-Plattform-Integrationen, Event-Tool-Integrationen

---

## Screen Inventory & Design Coverage

Vollständige Auflistung aller identifizierten Screens mit Design-Status. Quelle: [Cross-Analyse Design vs. Product v1.0](../design/Kritische-Analyse-Design-vs-Product-v1.0.md), [Screen Spec Index](../design/screen-specs/_SCREEN-SPEC-INDEX.md).

### AI Experience Layer

| Screen | PRD-Modul | Layout-Typ | Screen Spec | Design-Status |
|--------|-----------|-----------|-------------|---------------|
| Copilot Sidebar | 7.1 | Progressive Disclosure | `ai-experience/copilot-sidebar.md` | ✅ Erstellt |
| Command Bar | 7.2 | Overlay | `ai-experience/command-bar.md` | ✅ Erstellt |
| Angebots-Canvas | 10.3 | Progressive Disclosure | `ai-experience/angebots-canvas.md` | Ausstehend (Tier 6) |
| Vertrags-Canvas | 10.5 | Progressive Disclosure | `ai-experience/vertrags-canvas.md` | Ausstehend (Tier 6) |
| Engagement-Brief-Canvas | 10.1 | Progressive Disclosure | `ai-experience/engagement-brief-canvas.md` | Ausstehend (Tier 6) |
| Knowledge Canvas | 8.4 | Progressive Disclosure | `ai-experience/knowledge-canvas.md` | Ausstehend (Tier 7) |
| Kapazitätsplanungs-Canvas | 8.2 | Progressive Disclosure | `ai-experience/kapazitaetsplanungs-canvas.md` | Ausstehend (Tier 7) |
| Knowledge Agent Chat | 8.4 | Chat | `ai-experience/knowledge-agent-chat.md` | Ausstehend (Tier 6) |
| Onboarding-Agent Dialog | 9.3 | Dialog | `ai-experience/onboarding-agent-dialog.md` | Ausstehend (Tier 7) |

### Foundation Layer

| Screen | PRD-Modul | Layout-Typ | Screen Spec | Design-Status |
|--------|-----------|-----------|-------------|---------------|
| Consultant Profile Editor | 8.1 | Progressive Disclosure | `foundation/consultant-profile-editor.md` | ✅ Erstellt |
| Consultant Profile View | 8.1, 10.4 | Progressive Disclosure | `foundation/consultant-profile-view.md` | ✅ Erstellt |
| Skill Normalization Dialog | 8.1 | Modal | `foundation/skill-normalization-dialog.md` | Ausstehend (Tier 7) |
| Team & Availability Dashboard | 8.2 | Bento Grid | `foundation/team-availability-dashboard.md` | Ausstehend (Tier 7) |
| Verfügbarkeit Update Dialog | 8.2 | Modal | `foundation/verfuegbarkeit-update-dialog.md` | Ausstehend (Tier 7) |
| Account Plan & Stakeholder Map | 8.3 | Progressive Disclosure | `foundation/account-plan-stakeholder-map.md` | ✅ Erstellt |
| Warm Path & Relationship Detail | 8.1 | Progressive Disclosure | `foundation/warm-path-relationship-detail.md` | Ausstehend (Tier 7) |

### Growth Layer

| Screen | PRD-Modul | Layout-Typ | Screen Spec | Design-Status |
|--------|-----------|-----------|-------------|---------------|
| Signal Feed | 9.1 | Progressive Disclosure | `growth/signal-feed.md` | ✅ Erstellt |
| Discovery Dashboard | 9.1 | Bento Grid | `growth/discovery-dashboard.md` | Ausstehend (Tier 7) |
| Ausschreibungs-Feed | 9.1 | Progressive Disclosure | `growth/ausschreibungs-feed.md` | Ausstehend (Tier 7) |
| Event Manager | 9.2 | Progressive Disclosure | `growth/event-manager.md` | Ausstehend (Tier 7) |
| Live Event Mobile | 9.2 | Stack (Mobile) | `growth/live-event-mobile.md` | Ausstehend (Tier 7) |
| Recruiting Pipeline | 9.3 | Progressive Disclosure | `growth/recruiting-pipeline.md` | Ausstehend (Tier 7) |
| Skill-Gap Analysis | 9.3 | Bento Grid | `growth/skill-gap-analysis.md` | Ausstehend (Tier 7) |
| Berater-Onboarding Wizard | 9.3 | Progressive Disclosure | `growth/berater-onboarding-wizard.md` | Ausstehend (Tier 7) |

### Deal Layer

| Screen | PRD-Modul | Layout-Typ | Screen Spec | Design-Status |
|--------|-----------|-----------|-------------|---------------|
| Opportunity Detail | 10.1 | Progressive Disclosure | `deal/opportunity-detail.md` | ✅ Erstellt |
| Opportunity Intake | 10.1 | Bottom Sheet / Modal | `deal/opportunity-intake.md` | ✅ Erstellt |
| Staffing & Matching | 10.2 | Progressive Disclosure | `deal/staffing-matching.md` | ✅ Erstellt |
| Offer Composer | 10.3 | Progressive Disclosure | `deal/offer-composer.md` | Ausstehend (Tier 7) |
| CV Generator | 10.4 | Progressive Disclosure | `deal/cv-generator.md` | Ausstehend (Tier 7) |
| CV Extraktion Review | 10.4 | Progressive Disclosure | `deal/cv-extraktion-review.md` | Ausstehend (Tier 7) |
| Contract Editor | 10.5 | Progressive Disclosure | `deal/contract-editor.md` | Ausstehend (Tier 7) |
| Outreach Editor | 10.6 | Progressive Disclosure | `deal/outreach-editor.md` | Ausstehend (Tier 7) |

### Delivery & Performance Layer

| Screen | PRD-Modul | Layout-Typ | Screen Spec | Design-Status |
|--------|-----------|-----------|-------------|---------------|
| Project Dashboard | 11.1 | Bento Grid | `delivery/project-dashboard.md` | Ausstehend (Tier 7) |
| Projekt-Abschluss | 11.1 | Progressive Disclosure | `delivery/projekt-abschluss.md` | Ausstehend (Tier 7) |
| Financial Dashboard | 11.2 | Bento Grid | `delivery/financial-dashboard.md` | Ausstehend (Tier 7) |

### Platform Layer

| Screen | PRD-Modul | Layout-Typ | Screen Spec | Design-Status |
|--------|-----------|-----------|-------------|---------------|
| Cockpit Dashboard | 13.5 | Bento Grid | `platform/cockpit-dashboard.md` | ✅ Erstellt |
| Notification Center | 12.3 | Progressive Disclosure | `platform/notification-center.md` | ✅ Erstellt |
| Admin Panel | 13.2 | Progressive Disclosure | `platform/admin-panel.md` | ✅ Erstellt |
| Client Portal Dashboard | 12.2 | Progressive Disclosure | `platform/client-portal-dashboard.md` | Ausstehend (Tier 7) |
| Client Portal Pulse-Check | 12.2 | Progressive Disclosure | `platform/client-portal-pulse-check.md` | Ausstehend (Tier 7) |
| Magic Link Email | 12.2 | Email Template | `platform/magic-link-email.md` | Ausstehend (Tier 7) |
| Approval Manager | 12.1 | Progressive Disclosure | `platform/approval-manager.md` | Ausstehend (Tier 7) |

### Mobile-Only Screens

| Screen | Persona | Layout-Typ | Screen Spec | Design-Status |
|--------|---------|-----------|-------------|---------------|
| Mobile Signal Feed | Katrin | Stack + Bottom Nav | `mobile/mobile-signal-feed.md` | ✅ Erstellt |
| Mobile Approval Card | Thomas | Stack + Bottom Nav | `mobile/mobile-approval-card.md` | ✅ Erstellt |
| Mobile Staffing Card | Stefan, Lisa | Stack + Bottom Nav | `mobile/mobile-staffing-card.md` | ✅ Erstellt |
| Mobile Alert Detail | Thomas | Stack + Bottom Nav | `mobile/mobile-alert-detail.md` | ✅ Erstellt |
| Mobile Copilot Briefing | Thomas | Stack + Bottom Nav | `mobile/mobile-copilot-briefing.md` | ✅ Erstellt |
| Mobile Profil-Update Nudge | Lisa | Stack + Bottom Nav | `mobile/mobile-profil-update-nudge.md` | ✅ Erstellt |
| Mobile Kommentar-Thread | Alle | Stack + Bottom Nav | `mobile/mobile-kommentar-thread.md` | Ausstehend (Tier 7) |

### Coverage Summary

| Layer | Screens | Design Specs | Coverage |
|-------|---------|-------------|----------|
| AI Experience | 9 | 2 | 22% |
| Foundation | 7 | 3 | 43% |
| Growth | 8 | 1 | 13% |
| Deal | 8 | 3 | 38% |
| Delivery | 3 | 0 | 0% |
| Platform | 7 | 3 | 43% |
| Mobile | 7 | 6 | 86% |
| **Gesamt** | **49** | **18** | **37%** |

### Design Philosophy Decisions (v3.1)

| Entscheidung | Festlegung | Begründung |
|-------------|-----------|------------|
| Theme | Light = Default, Dark = Toggle | DS v1.3 Warm Coral Light Mode ist kanonisch. Stitch Dark/Amber ist NUR Inspiration. |
| Primary Color | `brand-primary` (#BF5347) Warm Coral | DACH-professionell, vertrauenswürdig, kein Corporate-Blue. |
| Layout: Dashboards | Adaptive Bento Grid (4→2→1 Spalten) | Mehrere gleichwertige KPI-Blöcke — Grid ideal. |
| Layout: Workflows | Progressive Disclosure (L0-L3) | Lineare Hierarchie — Grid würde fragmentieren. |
| Mobile Navigation | Bottom Navigation Bar (56px + Safe Area) | 2026-Standard. Ersetzt Hamburger-Menüs. Persona-adaptive Items. |
| Voice | Input only (Speech-to-Text) | Microphone Button in Command Bar, Copilot, Search. Kein Voice Output (TTS). |
| AI Content | `ai-surface` Background + `ktype-ai-reveal` | Kinetic Typography für AI-Responses. Klar unterscheidbar von User-Content. |
| Dokument-Vorschau | Preview Panel (5 Varianten) | Inline, Slide-Over, Tooltip, Fullscreen, Split-View. Kein externer Viewer. |
| Emoji | Professional, kontextbezogen | Badges, Notifications, Empty States: erlaubt. Body Text, Labels, Buttons: verboten. |

---

*Consultry — PRD v3.1 — Final Draft — 31. März 2026*
