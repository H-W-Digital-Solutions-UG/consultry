# Consultry — Product Requirements Document v2.0

## AI-Native Consultancy CRM für den DACH-Markt

**Status:** Final Draft
**Datum:** 30. März 2026
**Produkt:** Consultry (eigenständiges Produkt)
**Autor:** Jules
**Ersetzt:** ConsultryOS Lean PRD v1.0

---

## Überblick: Was sich in v2.0 ändert

v1.0 war ein Lean PRD mit 12 MVP-Modulen. v2.0 ist das **vollständige Produkt-PRD** für Consultry mit 15 Modulen, Querschnittsthemen, und kritisch geprüftem Scope. Alle Module gehören zum Produkt — die Reihenfolge folgt Abhängigkeiten und Value-Delivery.

**Kernänderungen gegenüber v1.0:**
- **Neues Modul: Market & Signal Intelligence** — Proaktive Marktbeobachtung, Discovery-Engine und Signal-Feed. Schließt die kritische Lücke "Consultry ist rein reaktiv" und ermöglicht Outbound-Geschäftsentwicklung.
- **Neues Modul: Outreach & Campaign Engine** — Systematische Erstansprache, Multi-Step-Sequenzen, Consent-Gating. Schließt den Loop zwischen Matching und Kundengewinnung.
- **Engagement Briefs** als Konzept in Opportunity Intelligence integriert — automatisch generierte Dossiers pro Opportunity als Zwischenschritt vor der Angebotserstellung.
- **Wettbewerber-Intelligenz** in Opportunity Intelligence integriert — On-demand-Recherche pro Opportunity mit Win/Loss-Patterns.
- **Landing-Page-Generierung** in Events & Outreach integriert — kampagnenspezifische Landing-Pages mit Berater-Profilen und Case Studies.
- **DSGVO Consent-State-Machine** als konkretes Modell im Compliance-Querschnittsthema — UNKNOWN → OPT-IN PENDING → OPTED-IN → SUPPRESSED.
- **Skills-Normalisierungs-Pipeline** vertieft im Consultant Knowledge Graph — Agentic AI für Synonym-Erkennung, Hierarchie-Mapping, firmenweites Taxonomie-Modell.
- **Neues Modul: Workforce & Team Management** — Operatives Team-Management im Foundation Layer: Organisationsstruktur, Verfügbarkeits- und Abwesenheitsmanagement, Kapazitätsplanung, Workload-Monitoring, Performance-/Entwicklungszyklen, Mentoring. Schließt die strukturelle Lücke zwischen dem Berater als Kompetenzträger (Knowledge Graph) und als verwaltete Ressource innerhalb einer Organisation. Kritischer Daten-Provider für Staffing, Financial Intelligence und RBAC.
- **Umbenennung:** ConsultryOS → Consultry.
- Technische Architekturdetails bewusst ausgelagert — dieses PRD fokussiert auf Produkt und Funktionalität.

---

## 1. Vision

**Consultry macht die zentrale operative Frage jeder Beratung beantwortbar:**
*„Wer braucht gerade das, was wir besonders gut können — wer aus unserem Team passt am besten — und wie liefern wir profitabel?"*

Kein existierendes Tool beantwortet diese Frage. CRMs kennen die Pipeline, aber nicht die Berater. Workforce-Tools kennen die Berater, aber nicht den Markt. Sales-Intelligence-Plattformen kennen den Markt, aber nicht die Dienstleistungslogik. PSA-Tools tracken die Delivery, aber nicht die Akquise. Und das Firmenwissen — Frameworks, Lessons Learned, Referenzen — steckt in den Köpfen einzelner Berater.

Consultry schließt diese Lücken in einer Plattform: **Marktintelligenz** (wer braucht was), **Kompetenz-Matching** (was können wir), **Workforce-Transparenz** (wer ist verfügbar), **Firmenwissen** (was haben wir schon gelöst), **Deal Execution** (vom Angebot bis zum Vertrag) und **Delivery Intelligence** (profitabel liefern und daraus lernen).

### Das Problem in einem Szenario

> **Montag, 8:30 Uhr — Katrin, BD-Leiterin einer SAP-Beratung (85 Mitarbeiter)**
>
> Katrin hat 47 offene Tabs. In Salesforce prüft sie die Pipeline — 12 Opportunities in verschiedenen Stadien. In einer Excel-Liste pflegt sie manuell, welcher ihrer 40 Berater gerade verfügbar ist. Über LinkedIn recherchiert sie, ob der neue CTO bei RetailCorp AG einen SAP-Hintergrund hat. In einer anderen Excel-Datei kalkuliert sie Tagessätze und Deckungsbeiträge für ein laufendes Angebot. Im E-Mail-Postfach sucht sie, ob ein Kollege jemanden bei RetailCorp kennt. Gleichzeitig erstellt ihr Berater Stefan eine Checkliste für eine SAP-Datenmigration — die gleiche Checkliste, die er schon dreimal bei anderen Kunden erstellt hat, weil sie nirgends zentral verfügbar ist. Und das Angebot, das seit zwei Wochen beim Kunden liegt? Der Vertrag hängt, weil die Rechtsabteilung eine Haftungsklausel prüft — per E-Mail-Ping-Pong mit Word-Redlines.
>
> **Ergebnis nach einem Tag:** Katrin hat einen einzigen Interessenten qualifiziert, das Angebot ist noch nicht raus, der Vertrag hängt, Stefan hat 4 Stunden an einer existierenden Checkliste gearbeitet, und niemand hat gemerkt, dass das laufende Projekt bei MedTech GmbH 20% über Budget liegt.
>
> **Das gleiche mit Consultry:** Katrin startet den Tag im Cockpit. Das System hat über Nacht drei neue Signale erkannt: CTO-Wechsel bei RetailCorp, Hiring-Signal bei MedTech, eine passende öffentliche Ausschreibung. Der Signal-Feed zeigt Match-Scores gegen ihre Berater-Kompetenzen. Sie öffnet RetailCorp — das Engagement-Brief ist bereits generiert: Unternehmenskontext, Bedarfe, Entscheider mit Beziehungspfaden, Wettbewerberanalyse, und drei passende Berater mit Verfügbarkeit und Margin-Analyse. Sie startet die Angebotserstellung: Consultry generiert einen maßgeschneiderten Proposal mit Team-Aufstellung, angepassten CVs und Aufwandsschätzung in drei Varianten. Stefan fragt den Knowledge-Agenten: „SAP-Datenmigration Retail Checkliste" — und bekommt in 30 Sekunden eine synthetisierte Antwort aus drei existierenden Bausteinen. Das Projekt-Dashboard zeigt: MedTech liegt 15% über Plan — automatischer Alert mit Change-Request-Empfehlung.

### Warum Beratungen anders sind

**Expertise statt Produkte:** Das „Produkt" ist eine Kombination aus Kompetenzen, Methoden, Branchenerfahrung und Berater-Persönlichkeiten. Kein Beratungsprojekt gleicht dem anderen.

**Trigger-getrieben:** Kaufzyklen werden durch organisatorische Veränderungen ausgelöst — neuer CTO, gescheitertes Projekt, M&A, Regulierungsänderung — nicht durch langfristige Evaluierungszyklen.

**Beziehungen als Währung:** Beziehungsnähe zählt genauso wie fachliche Passung. Warm-Paths über persönliche Netzwerke sind der stärkste Akquisekanal.

**Skills-Chaos:** Jede Beratung hat ihr eigenes, unstrukturiertes Vokabular für Kompetenzen. „SAP S/4HANA Migration", „SAP-Datenmigration", „S4 HANA Rollout" — alles dieselbe Kompetenz, aber nirgends normalisiert. Kein existierendes Tool löst dieses Problem.

**Wiederkehrendes Wissen:** Berater lösen die gleichen Aufgaben immer wieder von Null — SAP-Migrationschecklisten, Stakeholder-Mapping-Templates, Compliance-Frameworks — weil das Wissen in Köpfen und lokalen Dateien steckt.

**DACH-Besonderheiten:** Events und Messen als zentraler Akquisekanal. Lokale Referenzen, deutschsprachige Ansprache und DSGVO-Konformität sind Pflicht. US-Tools bieten weder DACH-Datentiefe noch Dienstleistungslogik.

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

---

## 2. Ziele

### Nutzerziele

1. **BD-Recherchezeit um 70–80 % senken** — von 15–25 Std./Woche auf 3–5 Std./Woche
2. **Erstansprache-Glaubwürdigkeit verbessern** — Kompetenz-Matching, Berater-Referenzen, Warm-Path
3. **Signal-zu-Verfolgung-Lücke schließen** — Organisatorische Veränderungen lösen Empfehlungen in Minuten aus
4. **Tool-Wechsel eliminieren** — ein Arbeitsbereich für den gesamten Beratungs-Lifecycle
5. **Berater-Workforce transparent machen** — Kompetenzen, Verfügbarkeit, Auslastung, Forecasting
6. **Firmenwissen aktivieren** — KI-natives Wissensmanagement statt verstreute Dateien
7. **Angebotszyklen von Tagen auf Stunden verkürzen** — maßgeschneiderte Proposals mit optimalen Teams
8. **Pipeline vorhersagbar machen** — Services-spezifisches Forecasting und Deal-Management
9. **Profitabilität in Echtzeit sichtbar machen** — Deckungsbeitrag pro Projekt, Kunde, Berater, Service Line
10. **Vertrags-Durchlaufzeit halbieren** — von Wochen auf Tage durch KI-gestützte Vertragserstellung

### Geschäftsziele

11. **Lead-zu-Meeting-Konversion von ~3 % auf 15–20 % steigern**
12. **Kosten pro qualifiziertem Lead um 40–55 % senken**
13. **Berater-Utilization von 60–70 % auf 80–90 % steigern**
14. **Angebots-Win-Rate um 25–40 % steigern** durch besseres Matching und datenbasierte Kalkulation
15. **DACH-Kategorieführerschaft** — erstes AI-natives operatives System für Beratungen

---

## 3. Nicht-Ziele

| Nicht-Ziel | Begründung |
|---|---|
| Eigene Zeiterfassung | DACH-rechtliche Bedenken (BetrVG §87, DSGVO Beschäftigtendatenschutz). Integration mit bestehenden Tools statt eigener Erfassung. |
| Vollwertiges ERP (Rechnungsstellung, Mahnwesen) | Integration mit DATEV, Bexio, BMD statt Build. |
| Vollständiges HR-System | Integration mit Personio, SAP SuccessFactors etc. Consultry deckt operatives Team-Management (Org-Struktur, Verfügbarkeit, Kapazitätsplanung, Entwicklung) ab — aber keine Gehaltsplanung, disziplinarische Workflows, Krankenakten oder formale HR-Prozesse. |
| Rechtsberatung | System unterstützt bei Vertragserstellung, berät nicht. RDG-Konformität sicherstellen. |
| Event-Plattform | Consultry ist kein Eventbrite/Grip-Konkurrent. Integration ja, eigene Event-Plattform nein. |
| LinkedIn-/XING-API-Integration | LinkedIn API ist für Sales-Intelligence gesperrt. XING hat keine öffentliche API. Stattdessen: öffentlich verfügbare Daten + Enrichment über Dealfront. |
| Generalistische CRM-Funktionalität | Kein Salesforce-Klon — spezialisiert auf die Dienstleistungslogik von Beratungen. |

---

## 4. Zielsegmente

### Primär: Beratungsunternehmen im DACH-Raum

| Segment | Größe | Kernbedarf |
|---|---|---|
| **Boutique-Beratungen** | 5–30 Berater | Smarte CVs, Staffing, Angebotserstellung, Profitabilitätstransparenz |
| **Mittelständische Beratungshäuser** | 30–200 Berater | Knowledge Graph, Gap-Analyse, Market Intelligence, vollständige Deal-Machine |
| **Große Beratungen** | 200+ Berater | Multi-Entity, Chinese Walls, API-Integrationen, Enterprise Governance |

### Angrenzende Segmente (perspektivisch)

| Untersegment | Beispiele | Kernbedarf |
|---|---|---|
| IT- & Digital-Beratungen | SAP-Partner, Cloud-Migration, Software-Agenturen | Technische Kompetenzen matchen; Zertifizierungen zuordnen |
| Strategie- & Managementberatungen | Boutique-Strategiefirmen, M&A-Berater | Entscheider-Netzwerke; Veränderungssignale |
| Rechts-, Steuer- & Wirtschaftsberatung | Kanzleien, Steuerberater | Regulatorische Trigger; Fachberater matchen |
| Ingenieur- & technische Dienstleister | Industrieengineering, Zertifizierung | Projekt-Signale, Modernisierungsbedarfe |
| Personal- & Recruiting-Firmen | Executive Search, IT-Staffing | Hiring-Signale, Wachstumsmuster |

### Gemeinsame Attribute

- Umsatz kommt aus dem Verkauf von Expertise und Zeit, nicht von Produkten
- Beziehungen und Vertrauen sind die primäre Vertriebswährung
- Events und Messen sind zentrale Akquise-Kanäle
- Die Berater-Workforce ist das eigentliche „Produkt"
- DACH-spezifisch: lokale Referenzen, deutschsprachige Ansprache, DSGVO-Konformität

---

## 5. Kern-Workflow: Vom Signal zum Learning

Consultry deckt den vollständigen Lifecycle ab — von der proaktiven Markterkennung bis zum Wissensrückfluss aus abgeschlossenen Projekten.

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
└─────────────────────────────────────────────────────────────────────────────┘
```

### Konkretes Beispiel: SAP-Migration End-to-End

> **DETECT:** Consultry erkennt über Nacht ein Signal: RetailCorp AG hat einen neuen CTO mit SAP-Hintergrund eingestellt (via Enrichment-Quelle). Gleichzeitig zeigt eine Stellenanzeige "SAP Technical Architect" — klares Bedarfssignal. Match-Score gegen das eigene Kompetenzprofil: 87/100.
>
> **QUALIFY:** Das automatisch generierte Engagement-Brief zeigt: Unternehmensprofil, identifizierte Bedarfe (Legacy-SAP zu S/4HANA), 3 Entscheider mit Beziehungskontext (Partner Thomas kennt den CFO über einen BITKOM-Event), Wettbewerber-Analyse (Accenture und Capgemini wahrscheinlich im Rennen — Consultry empfiehlt Differenzierung über DACH-Nähe und Retail-Spezialisierung).
>
> **MATCH:** Berater-Matching liefert ein optimales Team: Markus S. (SAP-Retail, 12 Jahre, Score 94, frei ab Mai), Lisa T. (Change Management, Score 82, frei ab Mai), plus Junior-Berater Tim K. für Data Migration. Team-Konstellation: haben schon zweimal erfolgreich zusammengearbeitet.
>
> **OFFER:** Consultry generiert ein maßgeschneidertes Angebot in drei Varianten (Lean/Standard/Premium), mit angepassten CVs, Phasenplan, Aufwandsschätzung kalibriert an vergleichbaren Projekten, und Pricing basierend auf Markt-Benchmarks. Referenz-Matching: zwei passende SAP-Retail-Cases werden automatisch eingebunden.
>
> **OUTREACH:** Personalisierte Ansprache-E-Mail referenziert den CTO-Wechsel, betont SAP-Retail-Expertise, nennt Markus S. als verfügbaren Spezialisten. Consent ist geprüft (Kontakt über Thomas' Warm-Path). Follow-up-Sequenz nach 5 Tagen.
>
> **CONTRACT:** Nach positivem Meeting generiert Consultry einen Dienstvertragsentwurf aus der Klausel-Bibliothek. RetailCorp schickt ihren Standard-Vertrag — die KI-Analyse flaggt eine abweichende Haftungsklausel und schlägt eine Alternative vor.
>
> **DELIVER:** Projekt startet. Milestones werden aus dem Vertrag übernommen. Nach 6 Wochen zeigt das Risk-Monitoring: Data-Migration-Workstream liegt 20% hinter Plan. Automatischer Alert mit Scope-Creep-Warnung und Change-Request-Template.
>
> **CONTROL:** Deckungsbeitragsrechnung in Echtzeit: DB1 aktuell bei 28% (Ziel: 25%). Cash-Flow-Prognose zeigt: nächste Milestone-Zahlung in 3 Wochen. Auslastungsprognose: Markus wird ab August verfügbar — zwei Pipeline-Opportunities passen.
>
> **LEARN:** Nach Projektabschluss fließen Erkenntnisse zurück: Projektdokumentation wird zu querybaren Knowledge-Bausteinen. Markus' Profil wird automatisch angereichert (neues Referenzprojekt, bestätigte SAP-Retail-Expertise). Kundenfeedback (NPS 78, besonders positiv: Stakeholder-Kommunikation) wird kontextualisiert im Knowledge Graph hinterlegt.
>
> **GROW:** Skill-Gap-Analyse zeigt: 5 weitere NIS2-Anfragen in der Pipeline, aber nur 2 Berater mit Erfahrung. Recruiting-Empfehlung wird generiert. Für die nächste it-sa wird eine Landing-Page mit dem NIS2-Kompetenzprofil erstellt. Alumni-Beraterin Carla (jetzt selbständig) wird als potenzielle Subunternehmerin vorgeschlagen.

---

## 6. Plattform-Architektur (Vier-Schichten-Modell)

```
┌─────────────────────────────────────────────────────────────────────┐
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
│   DACH Regulatory  │  Reporting & Executive Dashboards               │
└─────────────────────────────────────────────────────────────────────┘
```

### AI-Prinzipien

- **AI-native, nicht AI-augmented:** AI ist kein Feature-Flag, sondern durchdringt jede Interaktion — von Datenerfassung über Matching bis Reporting.
- **Agentic Workflows:** Komplexe Aufgaben (Opportunity-Analyse, Team-Komposition, Vertrags-Review) werden durch orchestrierte Agent-Chains gelöst.
- **Continuous Learning:** Jede Nutzerinteraktion, jedes Projekt-Outcome, jeder gewonnene/verlorene Deal kalibriert das System.
- **Human-in-the-Loop:** AI empfiehlt und generiert, Menschen entscheiden und bestätigen. Kein Autopilot für kritische Geschäftsentscheidungen.

---

## 7. Module — Foundation Layer

### 7.1 Consultant Knowledge Graph

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

> *Beispiel:* Beraterin Lisa lädt ihren CV hoch (PDF, 4 Seiten). Der Onboarding-Agent extrahiert: 12 Skills (normalisiert), 8 Projekteinträge (mit Branche, Technologie, Rolle, Dauer), 3 Zertifizierungen. Er erkennt „SAP MM" und „SAP Materials Management" als Synonym und normalisiert zu `sap-mm-materials-management`. Er fragt: „Du hast ‚Change Management' erwähnt — organisatorisch oder technisch?" Lisa antwortet: „Beides, aber primär organisatorisch." Agent aktualisiert. 6 Monate später schließt Lisa ein neues Projekt ab und lädt die Projektbeschreibung hoch. Agent erkennt neue Kompetenz „Retail Supply Chain Optimization" und fügt sie normalisiert hinzu.

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

### 7.2 Client & Account Management

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

- **Relationship Strength Scoring:** Automatische Bewertung der Beziehungsqualität basierend auf Interaktionsfrequenz, Projektfeedback, Reaktionszeiten
- **Proaktive Alerts:** „Kein Kontakt mit Stakeholder X seit 90 Tagen — Risiko für Beziehungserosion"
- **Cross-/Upselling-Signale:** Basierend auf Projekthistorie, Branchentrends und Signalen aus öffentlichen Quellen (Geschäftsberichte, Pressemitteilungen, Stellenanzeigen)
- **Stakeholder Intelligence:** Automatische Anreicherung aus öffentlichen Quellen
- **Warm-Path-Erkennung:** „Partner Thomas kennt den CFO über einen gemeinsamen BITKOM-Event 2024"

---

### 7.3 Workforce & Team Management

**Problem:** Der Consultant Knowledge Graph modelliert Berater als Kompetenzträger, Financial Intelligence als Umsatzquelle — aber die dritte, operative Perspektive fehlt: der Berater als verwaltete Ressource innerhalb einer Organisation. Heute existiert Teamzugehörigkeit in Excel-Listen, Verfügbarkeitsdaten sind im Outlook-Kalender des Partners verstreut, Karrierepfade sind informelle Absprachen, und Kapazitätsplanung ist Bauchgefühl. Gleichzeitig ist dieses Modul ein kritischer Daten-Provider: Verfügbarkeitsdaten fließen ins Staffing, Kapazitätsprognosen in Financial Intelligence, Org-Strukturen definieren die Scope-Grenzen für Role-Based Access.

**Lösung:** Operatives Team-Management für Beratungsunternehmen — Organisationsstruktur, Verfügbarkeit, Kapazitätsplanung, Workload-Monitoring, Entwicklung und Mentoring. Explizit kein vollständiges HR-System: keine Gehaltsplanung, keine disziplinarischen Workflows, keine Krankenakten. Für alles jenseits dieser Grenze integriert Consultry mit Personio, SAP SuccessFactors & Co.

**Organisationsstruktur & Hierarchien:**

- **Org-Einheiten:** Practices, Teams, Standorte, Competence Centers als verwaltbare Einheiten mit zugeordneten Leads (Practice Lead, Teamlead, Standortleiter)
- **Berichtslinien:** Fachliche und disziplinarische Zuordnung (Matrix-Organisation abbildbar — ein Berater kann fachlich zur Practice „SAP" und disziplinarisch zum Standort München gehören)
- **Dynamische Zugehörigkeit:** Berater können mehreren Teams/Practices zugeordnet sein, mit primärer und sekundärer Zugehörigkeit
- **Org-Baum-Visualisierung:** Interaktive Darstellung der Organisationsstruktur mit Drill-Down auf Teamebene
- **Team-Dashboards:** Aggregierte Sicht pro Team/Practice: Kapazität, Auslastung, Skill-Landschaft, Pipeline-Exposure

**Verfügbarkeits- & Abwesenheitsmanagement:**

- **Verfügbarkeits-Datenquelle:** Zentrale Wahrheit für alle Verfügbarkeitsdaten im System — das Staffing-Modul konsumiert diese Daten, erstellt sie nicht
- **Abwesenheitstypen:** Urlaub, Weiterbildung, interne Projekte, Elternzeit, Sabbatical, Krankheit (nur Zeitraum, keine Diagnosen — Scope-Grenze HR)
- **Kalender-Sync:** Bidirektionaler Sync mit Outlook/Google Calendar für Abwesenheiten
- **Verfügbarkeits-Forecast:** Vorausschau auf Berater-Verfügbarkeit unter Berücksichtigung von laufenden Projekten (Restverlauf), geplanten Abwesenheiten, Vertragsverlängerungs-Wahrscheinlichkeiten und Pipeline-gewichteten Staffing-Szenarien
- **Team-Kalender:** Aggregierte Verfügbarkeitssicht pro Team/Practice mit Engpass-Frühwarnung: „Practice Cloud hat in KW 22–26 nur 2 von 8 Beratern verfügbar"

**Kapazitätsplanung (Team- & Practice-Ebene):**

- **Strategische Kapazitätsplanung:** Nicht nur „wer ist frei", sondern: wie viele Seniors braucht Practice X in Q3? Wo bauen wir Kapazität auf, wo ab?
- **Demand-Supply-Matching:** Pipeline-gewichteter Bedarf vs. verfügbare Kapazität pro Skill-Cluster, Senioritätslevel, Practice
- **Gap-Analyse:** „Wir haben 3 Cloud-Architekten, aber die Pipeline zeigt Bedarf für 5 in den nächsten 6 Monaten" → automatischer Trigger an Talent Acquisition
- **Szenario-Modelle:** Best Case / Expected / Worst Case Kapazitätsauslastung — integriert mit dem Revenue Forecasting aus Financial Intelligence
- **Saisonale Muster:** Berücksichtigung von DACH-spezifischen Mustern (Sommerloch, Jahresendgeschäft, Budgetzyklen)

**Workload-Monitoring & Balance:**

- **Auslastungs-Tracking:** Aktuelle und historische Auslastung pro Berater mit Zielkorridor (z.B. 75–85% fakturierbar)
- **Workload-Balance-Score:** Gleichmäßigkeit der Verteilung innerhalb eines Teams — Frühwarnung bei systematischer Über-/Unterlastung einzelner Berater
- **Reisebelastungs-Tracking:** Reisetage pro Monat/Quartal, Entfernung zum Einsatzort — „Berater X hatte in den letzten 3 Monaten 45 Reisetage, Teamdurchschnitt ist 20"
- **Burnout-Prävention:** Konfigurierbare Schwellenwerte für Kombination aus Auslastung, Reisetagen und fehlenden Urlaubstagen → Alerts an Teamlead
- **Team-Vergleich:** Anonymisierte Vergleichsdaten über Teams hinweg — welche Practices sind systematisch überlastet?

> **Compliance-Hinweis:** Workload-Monitoring und Auslastungs-Tracking fallen unter **BetrVG §87 Abs. 1 Nr. 6** (technische Einrichtungen zur Überwachung von Verhalten/Leistung). Eine **Betriebsvereinbarung ist zwingend erforderlich** vor Aktivierung dieses Feature-Bereichs. Consultry implementiert dies als **opt-in Feature-Gate**, das erst nach dokumentierter Betriebsvereinbarung freigeschaltet wird. Aggregierte Team-Daten ohne Personenbezug sind unkritisch; personenbezogene Auswertungen (Auslastung pro Berater, Reisebelastung) erfordern BR-Zustimmung.

**Performance- & Entwicklungszyklen:**

- **Zielvereinbarungen:** Strukturierte Erfassung von Jahres-/Halbjahreszielen pro Berater — nicht als Bewertungstool, sondern als Entwicklungskompass
- **Karrierepfade:** Definierbare Karrierestufen pro Practice (z.B. Junior → Consultant → Senior → Manager → Partner) mit zugeordneten Kompetenzerwartungen
- **Skill-Entwicklungspläne:** Soll-/Ist-Abgleich gegen Karrierestufen-Anforderungen — „Für den nächsten Karriereschritt fehlen Dir: Projektleitungserfahrung in der Finanzbranche und eine PRINCE2-Zertifizierung"
- **Feedback-Integration:** Kundenfeedback und Peer-Reviews fließen aus dem Knowledge Graph ein, Performance-Ziele und Entwicklungspläne leben hier
- **Entwicklungs-Dashboard (Berater-Self-Service):** Eigener Fortschritt, nächste Karrierestufe, offene Skill-Gaps, empfohlene Weiterbildungen

> **Scope-Abgrenzung:** Keine Leistungsbeurteilungen mit disziplinarischer Konsequenz, kein Performance-Ranking, keine Gehaltsempfehlungen. Die Grenze zu „echtem HR" ist hart: Consultry unterstützt Entwicklung, nicht Bewertung. Integration mit Personio/SAP SuccessFactors für formale HR-Prozesse (Gehaltsplanung, Vertragsverwaltung, disziplinarische Workflows, Krankenakten).

**Mentoring & Wissenstransfer:**

- **Systematische Mentoring-Zuordnung:** Matching basierend auf Expertise-Overlap, Karrierestufen-Differenz, Teamstruktur und Präferenzen — nicht zufällig, sondern datengetrieben
- **Mentoring-Zyklen:** Strukturierte Programme mit definierten Laufzeiten, Zielen und Check-in-Rhythmen
- **Wissenstransfer-Tracking:** Welche Senior-Berater geben Wissen an wen weiter? Wo entstehen Wissensinseln (Single Points of Knowledge)?
- **Cross-Team-Mentoring:** Förderung von Practice-übergreifendem Wissenstransfer — „Sarah (SAP-Practice) mentored Tim (Cloud-Practice) für hybride SAP-Cloud-Migrationen"
- **Alumni-Mentoring:** Ehemalige Berater als Mentoren einbinden (verknüpft mit Alumni-Netzwerk in Phase 5+)

**Integrationen:**

- **Personio / SAP SuccessFactors:** Bidirektionaler Sync für Stammdaten, Org-Zugehörigkeit, Abwesenheiten. HR-System bleibt führend für Vertrags- und Gehaltsdaten.
- **Outlook / Google Calendar:** Abwesenheits-Sync
- **Consultant Knowledge Graph:** Skills und Projekterfahrung kommen aus dem Knowledge Graph; Entwicklungsziele und Karrierepfade leben im Workforce-Modul
- **Staffing & Matching:** Verfügbarkeitsdaten und Org-Constraints als Input für das Staffing
- **Financial Intelligence:** Kapazitätsdaten als Input für Utilization Management und Revenue Forecasting
- **Talent Acquisition:** Gap-Analyse triggert Recruiting-Bedarf

---

### 7.4 Methodology & IP Asset Management

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

> *Beispiel:* Stefan schließt ein SAP-Migrationsprojekt ab und lädt Notizen hoch. Die Knowledge-Engine generiert drei Bausteine: „SAP-Datenmigration Retail Checkliste", „Go-Live-Risikomatrix", „Cutover-Planung Template". Diese werden vernetzt mit bestehendem Wissen. 3 Monate später fragt Lisa: „SAP-Migration im Retail?" — der Q/A-Agent synthetisiert eine Antwort aus mehreren Bausteinen, inklusive Experten-Empfehlung.

**Auto-Empfehlung in Proposals:**
- „Für eine IT-Strategieberatung im Gesundheitswesen eignet sich unser Healthcare-IT-Maturity-Framework — eingesetzt in 8 Projekten, Ø NPS 74"
- Einsatzhistorie & Feedback: Welches Asset wurde wo eingesetzt, mit welchem Ergebnis?
- Versionierung & Evolution: Automatische Erkennung wenn ein Framework überarbeitet werden sollte

---

## 8. Module — Growth Layer

### 8.1 Market & Signal Intelligence

**Problem:** Beratungen warten passiv auf Anfragen oder recherchieren manuell über LinkedIn, Pressemitteilungen und persönliche Netzwerke nach neuen Opportunities. Organisatorische Veränderungen bei Zielkunden — der stärkste Kaufauslöser — bleiben unsichtbar.

**Lösung:** Proaktive Marktbeobachtung und Discovery-Engine, die Veränderungssignale erkennt, gegen das eigene Kompetenzprofil matcht und qualifizierte Opportunities generiert.

**Signal-Intelligence:**

- **Signal-Feed:** Automatisch aggregierte Veränderungssignale aus dem DACH-Markt — Leadership-Wechsel, Hiring-Signale (Stellenanzeigen als Intent-Signal), Technologie-Veränderungen, M&A, Funding-Runden, regulatorische Veränderungen, Ausschreibungsveröffentlichungen
- **KI-Priorisierung:** Signale werden automatisch nach Relevanz bewertet basierend auf: Kompetenz-Match, Kundenbeziehung (Bestandskunde vs. Neukunde), Signal-Stärke, Timing
- **Automatische Verknüpfung:** Signale werden mit bestehenden Accounts, Opportunities und Beratern verknüpft

**Discovery-Engine:**

- **Proaktiver Discovery-Run:** Agent scannt und bewertet Unternehmen gegen das eigene Kompetenzprofil — Composite-Score (0–100) mit nachvollziehbarer Erklärung: Kompetenz-Match, Signal-Aktualität, Beziehungsnähe
- **Multi-Source-Recherche:** Enrichment aus DACH-Firmendatenbanken, Handelsregister, öffentlichen Quellen, Stellenanzeigen, Technologie-Signalen
- **Branchentrend-Erkennung:** „Fünf NIS2-Anfragen in drei Monaten — Marktthema. Hier sind 20 weitere Unternehmen im regulierten Sektor die betroffen sind."

**Ausschreibungs-Intelligence:**

- **Automatischer Import:** Relevante Ausschreibungen aus öffentlichen Vergabeportalen (TED, DÖE, SIMAP, bund.de, Vergabe24, DTVP)
- **KI-basiertes Matching:** Automatische Bewertung der Passung (Kompetenz-Match-Score) zwischen Ausschreibungsanforderungen und Firmenkompetenzen + verfügbaren Beratern
- **Smart-Q/A und Summary:** Bei jeder Ausschreibung: KI-Zusammenfassung (Auftraggeber, Umfang, Anforderungen, Fristen, Bewertungskriterien), Q/A für Ad-hoc-Fragen
- **Generatives Drafting:** Human-AI-kollaboratives Erstellen von Ausschreibungsantworten — KI generiert Entwürfe aus bestehenden Kompetenzprofilen, Referenz-Cases, Berater-CVs und Knowledge-Bausteinen; Berater reviewen und ergänzen

**Enrichment-Strategie (kritisch geprüft):**

| Quelle | Rolle | Bewertung |
|---|---|---|
| **Dealfront (ehem. Echobot)** | DACH-Firmendaten + Verhaltenssignale (33+ Trigger-Typen) | Empfohlen als Primär-Enrichment. Tiefste DACH-Abdeckung (34M+ Firmen, 106M+ Kontakte). |
| **North Data** | DACH-Firmen-Fundamentaldaten (Finanzen, Handelsregister, Führung) | Empfohlen als Supplement. Beste Abdeckung für deutsche Handelsregister-Daten. Schwächer bei AT/CH. |
| **Stellenanzeigen** | Intent-Signale (Hiring = Bedarf) | Via Dealfront-Signale + eigener Job-Posting-Crawler (Indeed, StepStone, kununu) |
| **Ausschreibungsportale** | Öffentliche Vergabe | TED (EU-weit, offenes API), DÖE, SIMAP, bund.de, Vergabe24 — DSGVO-konform und frei zugänglich |
| **LinkedIn/XING** | ❌ Nicht realisierbar | LinkedIn API gesperrt für Sales-Intelligence. XING hat keine API. Stattdessen: öffentlich verfügbare Daten + Enrichment via Dealfront. |

---

### 8.2 Events & Network Intelligence

**Problem:** Event-Teilnahme ist ad-hoc organisiert, Kontakte versanden nach der Messe, und der ROI von Events ist nicht messbar.

**Lösung:** End-to-End Event-Lifecycle-Management mit AI-gestütztem Networking und kampagnenspezifischer Landing-Page-Generierung.

**Pre-Event:**

- Relevante Events automatisch identifizieren basierend auf Branchenfokus, Zielkunden-Präsenz, Thementrends
- Teilnehmerlisten-Matching gegen CRM-Kontakte und Zielaccounts
- Berater-Empfehlung: „Für die Hannover Messe sollte Thomas hin — drei aktive Prospects im Maschinenbau, Speaker-Slot auf dem Industrial-AI-Panel"
- Briefing-Generierung pro Berater: relevante Kontakte, Gesprächsanlässe, aktuelle Opportunities
- **Landing-Page-Generierung:** KI-generierte, kampagnenspezifische Landing-Pages für Events — „Für die it-sa erstellen wir eine Landing-Page zu unserem NIS2-Kompetenzprofil mit Berater-Profilen, Case Studies und Kontaktformular." Template-basiert, Analytics-fähig, A/B-Testing-fähig.

**Live-Event:**

- Integration mit Event-Networking-Tools (Grip, Brella, Swapcard, b2match) — **Einschränkung:** Event-App-APIs sind für Organizer gebaut, nicht für externe Plattformen. Integration nur bei verhandelter Partnerschaft. Manueller Import als Fallback.
- Kontakterfassung: Badge-Scans, digitale Visitenkarten → automatische CRM-Einträge mit Event-Kontext
- Mobile-First: schnelle Notizen, Fotos, Voice Memos direkt zugeordnet

**Post-Event:**

- Automatisierte, kontextbezogene Follow-up-Workflows (verknüpft mit Outreach & Campaign Engine)
- Event-Debrief-Strukturierung: Welche Themen waren relevant, welche Kontakte sind vielversprechend, wo sollten wir nächstes Jahr wieder auftreten
- ROI-Tracking: Events → Kontakte → Opportunities → Deals → Revenue

**DACH-Spezifisch:**
- Integration mit Messe-Ökosystemen (Messe München, Messe Frankfurt, MCH Group Schweiz)
- IHK-Veranstaltungen, Branchenverbands-Events (BITKOM, VDMA, BDU, etc.)
- Manuell gepflegter DACH-Event-Katalog als Basis (realistischer als automatisiertes Crawling)
- Datenschutzkonformes Kontakt-Handling (DSGVO-konforme Einwilligungslogik)

---

### 8.3 Talent Acquisition & Onboarding

**Problem:** Wenn die Skill-Gap-Analyse zeigt „uns fehlen Cloud-Architekten", beginnt ein manueller Recruiting-Prozess über separate Tools. Neue Berater brauchen Monate bis sie im System „angekommen" sind.

**Lösung:** Integrierte Recruiting-Pipeline mit nahtlosem Onboarding in den Knowledge Graph.

**Recruiting-Pipeline:**

- Bedarfserkennung aus Skill-Gap-Analyse und Pipeline-Forecasting: „Wir haben 3 SAP-Berater, aber die Pipeline zeigt 5 SAP-Opportunities in den nächsten 6 Monaten — Recruiting-Bedarf"
- Integration mit Jobportalen (StepStone, LinkedIn Recruiter, XING, Gulp für Freelancer)
- Kandidaten-Matching gegen Bedarfsprofil mit dem gleichen Matching-Algorithmus wie beim Staffing
- Bewerbermanagement: Pipeline-Tracking, Interview-Koordination, Feedback-Erfassung

**Onboarding:**

- Automatischer Import von Bewerbungsunterlagen in den Knowledge Graph (KI-gestützte Skills-Normalisierung)
- Skill-Assessment und Profilvervollständigung als geführter Prozess
- Mentoring-Zuordnung basierend auf Expertise-Overlap und Teamstruktur
- Onboarding-Checklisten und Fortschritts-Tracking

**Freelancer-Sourcing:**

- Integration mit Freelancer-Plattformen (Gulp, Hays, Etengo)
- Rahmenvertragsverwaltung, ANÜ-Compliance-Monitoring
- Freelancer-Profile im gleichen Knowledge Graph wie interne Berater (mit Kennzeichnung)
- Über-Allokations-Warnung; separate Konditionen und Rate-Cards

---

## 9. Module — Deal Layer

### 9.1 Opportunity Intelligence & Tracking

**Problem:** Anfragen landen per E-Mail beim Partner, werden halbherzig in ein CRM eingetippt, und die Hälfte der Informationen bleibt in E-Mail-Threads stecken. Gleichzeitig fehlt der Kontext: Wer konkurriert mit uns? Was haben wir bei ähnlichen Projekten gelernt?

**Lösung:** Intelligentes Opportunity-Management das Anfragen automatisch durchdringt, strukturiert, anreichert und mit Engagement-Briefs und Wettbewerbsanalyse kontextualisiert.

**Opportunity-Erfassung:**

- **Multi-Channel-Intake:** E-Mail-Weiterleitung, Web-Formular, API (für Ausschreibungsplattformen), Signal-Konversion (aus Market & Signal Intelligence), manuelle Eingabe
- **Auto-Extraktion:** Aus unstrukturierten Anfragen (E-Mail, Briefing-Dokument, Ausschreibungstext) werden automatisch strukturiert: Scope & Deliverables, geforderte Skills/Zertifizierungen/Senioritätslevel, Branche & Unternehmenskontext, Technologie-Stack & Produktlandschaft, Timeline & Milestones, Budget-Signale, Compliance-Anforderungen, Standort-/Reiseanforderungen

**Engagement-Briefs:**

Automatisch generierte Dossiers pro Opportunity als Entscheidungsgrundlage vor der Angebotserstellung:

- **Unternehmenskontext:** Firmenprofil, aktuelle Situation, identifizierte Bedarfe
- **Kompetenz-Match-Analyse:** Score und Erklärung — welche eigenen Kompetenzen passen, wo gibt es Lücken
- **Entscheider & Beziehungspfade:** Relevante Ansprechpartner mit Beziehungskontext: „Partner Thomas kennt den CFO über einen BITKOM-Event 2024"
- **Berater-Vorschläge:** Vorab-Matching mit Top-3-Kandidaten inkl. Verfügbarkeit
- **Wettbewerber-Analyse:** On-demand-Recherche pro Opportunity
- **Quellenattribution:** Jede Information mit Herkunft

**Wettbewerber-Intelligenz (pro Opportunity):**

- On-demand Wettbewerber-Recherche: „Bei dieser Opportunity konkurrieren wir wahrscheinlich gegen Accenture und Capgemini"
- Win/Loss-Pattern-Analyse: „Gegen Accenture verlieren wir typischerweise bei Preis, gewinnen bei DACH-Nähe und Branchentiefe"
- Differenzierungsempfehlungen: „Betont eure SAP-Retail-Spezialisierung — das kann Accenture nicht bieten"
- Historische Daten: „Bei den letzten 5 Deals gegen Capgemini im Mittelstand hatten wir eine Win-Rate von 60% bei Festpreisangeboten"

**Pipeline-Management:**

- Dynamische Stages: Erstkontakt → Qualifizierung → Angebot → Staffing → Verhandlung → Engagement
- Win-Probability-Scoring basierend auf historischen Patterns (Kundentyp, Scope-Typ, Wettbewerbssituation)
- Automatische Stale-Detection: „Opportunity seit 3 Wochen ohne Aktivität"
- Branchentrend-Erkennung: „Fünf NIS2-Anfragen in drei Monaten — Marktthema"
- Forecasting-Integration: Pipeline → Revenue Forecast → Capacity Planning

---

### 9.2 Intelligent Staffing & Matching

**Problem:** „Wer passt auf dieses Projekt?" wird heute per Telefon, Bauchgefühl und Outlook-Kalender beantwortet. Das Ergebnis ist oft suboptimal und dauert Tage.

**Lösung:** Semantisches Multi-Faktor-Matching von Projektanforderungen gegen den Consultant Knowledge Graph — nicht für Einzelpersonen, sondern für optimale Teams.

**Matching-Dimensionen:**

- **Skills & Expertise:** Semantisches Verständnis dank normalisiertem Skill-Graph. „Erfahrung mit Post-Merger-Integration im produzierenden Gewerbe" findet auch jemanden mit Carve-Out-Begleitung in der Automobilzulieferindustrie.
- **Branchenerfahrung:** Tiefe und Breite der Branchenkenntnisse, spezifische Regulierungserfahrung
- **Senioritäts-Fit:** Geforderte Rolle vs. Erfahrungslevel und Karrierestufe
- **Verfügbarkeit:** Aktuelle Auslastung, geplante Projektenden, Urlaubsplanung
- **Standort & Reisebereitschaft:** Kundennähe, Remote-/Hybrid-Fähigkeit, Reisepräferenzen
- **Kundenhistorie:** Frühere Einsätze beim selben Kunden (positiv: Kontinuität / negativ: Konkurrenzklauseln, Ermüdung)
- **Teamkompatibilität:** Haben die vorgeschlagenen Berater schon erfolgreich zusammengearbeitet?
- **Entwicklungsziele:** Passt das Projekt zur gewünschten Karriereentwicklung des Beraters?

**Team-Komposition:**

- Nicht nur Einzelperson-Vorschläge, sondern optimale Team-Zusammenstellung
- Senioritäts-Mix, Skill-Komplementarität, Verfügbarkeits-Overlap
- Varianten-Fähigkeit: „Lean-Team (2 Berater)" vs. „Standard (4)" vs. „Premium (6 + Partner)"
- Einbeziehung von Freelancern/Subunternehmern bei internen Lücken

**Ranking & Transparenz:**

- Match-Score mit nachvollziehbarer Begründung: „87% Match: starke SAP-Expertise, Banken-Erfahrung, verfügbar ab KW 16. Abzug: keine DORA-Zertifizierung"
- Margin-Analyse im Matching: Stundensatz vs. empfohlener Kundensatz pro Berater
- Vergleichsansicht für Entscheidungsträger
- One-Click-Anfrage an Berater (mit Projektbriefing)

---

### 9.3 Smart Service Offer Composition

**Problem:** Proposal-Erstellung ist ein manueller Kraftakt: Senior-Berater schreiben von Grund auf, kalkulieren Aufwände aus dem Bauch, und basteln CVs zusammen. Durchlaufzeit: Tage bis Wochen.

**Lösung:** Eine Kompositions-Engine, die aus Opportunity-Analyse, Knowledge Graph, Projekthistorie und Matching ein maßgeschneidertes Angebot generiert.

**Angebotsstruktur-Generierung:**

- Verständnis der Ausgangslage (gespiegelt aus Engagement-Brief)
- Vorgeschlagener Beratungsansatz (basierend auf ähnlichen Projekten aus der Knowledge-Engine, einschlägigen Methodologien aus dem IP Asset Management)
- Team-Aufstellung mit maßgeschneiderten CVs
- Phasenplan mit Milestones und Deliverables
- Aufwandsschätzung (kalibriert an Erfahrungswerten aus vergangenen Projekten)
- Pricing-Vorschlag (basierend auf Tagessatz-Benchmarks, Kundensegment, Wettbewerbssituation, Margin-Ziel)
- Referenz-Matching: automatische Auswahl passender Case Studies und Referenzprojekte

**Varianten-Engine:**

- „Zeig mir das in drei Varianten — Lean, Standard, Premium"
- „Der Kunde hat Budget-Constraints: optimiere auf Kosten bei gleichem Scope"
- „Erstelle eine Variante mit Festpreis statt T&M"
- „Ersetze Berater X durch einen günstigeren Consultant und zeig die Margin-Auswirkung"

**Feedback-Loop:**

- Gewonnene und verlorene Deals fließen zurück
- System lernt: Welche Teamkonstellationen, Pricing-Modelle, Angebotsstrukturen gewinnen in welchem Segment?
- Benchmark-Daten: „Eure Win-Rate bei Festpreisangeboten im Mittelstand ist 15% höher als bei T&M"

---

### 9.4 Client-Facing Intelligence

**Problem:** Berater-CVs werden für jedes Angebot manuell in Word angepasst. Das dauert Stunden und das Ergebnis ist inkonsistent.

**Lösung:** Automatische Generierung maßgeschneiderter, kundenspezifischer Dokumente.

**Berater-CVs:**

- Automatische Generierung aus dem Knowledge Graph
- Kundenspezifisch: nur relevante Projekte, Skills und Erfahrungen für *dieses* Angebot
- Im Corporate Design des Beratungshauses (konfigurierbare Templates)
- Multi-Format: PDF, DOCX, Online-Profil
- Mehrsprachig: DE, EN (FR für Schweizer Kunden)

**Proposal-Dokumente:**

- Aus der Offer Composition generiert, in professionellem Layout
- Modulare Bausteine: Management Summary, Methodik, Teamvorstellung, Referenzen, Pricing
- Referenz-Auswahl: „Zeig nur Referenzen aus der gleichen Branche und Größenklasse"

**Credentials & Case Studies:**

- Automatisch generierte Referenz-Sheets aus der Projekthistorie
- Anonymisierung konfigurierbar (Kundenname ja/nein, Branche statt Firmenname)
- Service-Match-basierte Vorschläge: „Für dieses Angebot passen diese 3 Referenzen am besten"

**Ausschreibungs-Antwortdokumente:**

- Human-AI-kollaboratives Erstellen: KI generiert Entwürfe aus Kompetenzprofilen, Referenzen, CVs und Knowledge-Bausteinen; Berater reviewen und ergänzen
- Export als DOCX/PDF in geforderten Formaten

---

### 9.5 Contract Intelligence & Legal Automation

**Problem:** Zwischen „mündliche Zusage" und „unterschriebener Vertrag" vergehen Wochen. Vertragsverhandlung läuft über E-Mail-Ping-Pong mit Word-Redlines. Rechtliche Risiken werden zu spät erkannt.

**Lösung:** AI-gestützter Vertrags-Lifecycle von der Erstellung bis zur Unterschrift.

**Vertragsgenerierung:**

- Template-basiert: Dienstvertrag, Werkvertrag, Rahmenvertrag, ANÜ-Vertrag, Einzelabruf
- Intelligente Template-Auswahl basierend auf Projekttyp und Kundenanforderung
- Automatische Befüllung aus Opportunity-Daten und Service Offer

**Klausel-Bibliothek:**

- Standard- und Alternativklauseln für: Haftung, IP-Rechte, Geheimhaltung/NDA, Konkurrenzausschluss, Abwerbeverbot, Datenschutz/Auftragsverarbeitung, Kündigungsregelungen, Leistungsänderungen (Change Requests)
- Risiko-Scoring pro Klausel (Standard / Abweichung / Risiko)

**Vertrags-Review:**

- Automatische Analyse eingehender Kunden-Vertragsentwürfe
- Risiko-Erkennung: „Haftungsklausel in §7 weicht erheblich von eurem Standard ab"
- Redline-Vorschläge mit Alternativformulierungen
- Benchmark: „In 80% eurer Verträge habt ihr die Haftungsobergrenze auf dreifachen Auftragswert begrenzt"

**Verhandlungs-Tracking:**

- Versionierung, Redlining, Kommentare — im System statt per E-Mail
- Genehmigungs-Workflows: Welche Abweichungen müssen von wem freigegeben werden?
- Historische Analyse: „Bei Kunde X haben wir in drei Verträgen ähnliche Verhandlungspunkte gehabt — hier war das Ergebnis"

**DACH-Regulatory:**

- Scheinselbständigkeit: Automatische Prüfung der Vertragsgestaltung auf ANÜ-Risiken
- Vergaberecht: EVB-IT-konforme Vertragsgestaltung für öffentliche Auftraggeber
- Schweizer Recht (OR): Angepasste Templates und Klauseln
- Österreichisches Recht (UGB): Spezifische Regelungen
- **Hinweis:** System liefert Unterstützung, keine Rechtsberatung. RDG-Konformität sicherstellen. Empfehlung zur finalen Prüfung durch Rechtsabteilung/Kanzlei bei kritischen Klauseln.

---

### 9.6 Outreach & Campaign Engine

**Problem:** Selbst mit dem perfekten Matching und dem besten Angebot fehlt der systematische Weg zum Kunden. Erstansprache ist ad-hoc, Follow-ups gehen unter, und Consent-Management ist manuell.

**Lösung:** Systematische, DSGVO-konforme Outreach-Engine mit personalisierten Kampagnen und Multi-Step-Sequenzen.

**Personalisierte Ansprache:**

- KI-generierte E-Mails mit Kompetenz-Mapping, Berater-Referenz, Warm-Path und Timing-Empfehlung
- Kontextualisiert: referenziert Signale (CTO-Wechsel, Hiring), Branchen-Expertise, persönliche Verbindungen
- Editierbar vor Versand — Human-in-the-Loop für jede Erstansprache
- Multi-Kanal: E-Mail (primär), Event-bezogene Follow-ups, Landing-Pages

**Sequenzen & Kampagnen:**

- Multi-Step-Outreach-Sequenzen mit Timing und Bedingungen
- Automatische Follow-ups nach X Tagen
- Abbruch bei Reply, Bounce oder Abmeldung
- Kampagnen-Management: thematische Kampagnen (z.B. „NIS2-Readiness-Kampagne für Finanzsektor")

**Consent-Gating (DSGVO):**

Jede Outreach-Aktion ist an das DSGVO-Consent-Modell gebunden (siehe Querschnittsthema 10.2). Kein Versand ohne gültigen Consent. Double-Opt-In bei Kalt-Kontakten. Warm-Kontakte: Single-Opt-In + dokumentierte Rechtsgrundlage.

**Landing-Pages:**

- KI-generierte Landing-Pages für spezifische Kampagnen oder Events
- „Für die Hannover Messe generieren wir eine Landing-Page zu unserem Industrial-AI-Angebot mit Berater-Profilen und Case Studies"
- Template-basiert, Analytics-fähig (Attribution: Landing Page → Lead → Deal)
- A/B-Testing-fähig für Conversion-Optimierung

---

## 10. Module — Delivery & Performance Layer

### 10.1 Project Execution & Delivery Intelligence

**Problem:** Sobald das Projekt startet, endet die Systemunterstützung. Projektleiter managen manuell, Status-Updates per PowerPoint. Scope Creep wird zu spät erkannt, Risiken bleiben unsichtbar.

**Lösung:** Intelligentes Projekt-Monitoring mit proaktiver Risiko-Erkennung und systematischem Feedback-Loop.

**Hinweis:** Eigene Zeiterfassung ist explizit *out of scope*. Das System konsumiert Zeitdaten über Integrationen mit bestehenden Tools (Clockodo, MOCO, Harvest, SAP).

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

- Projekt-Health-Score basierend auf: Milestone-Abweichungen, Budget-Verbrauch vs. Fortschritt, Kundenfeedback-Signale, Kommunikationsfrequenz
- Proaktive Alerts: „Projekt X liegt 15% hinter dem Milestone-Plan — bei vergleichbaren Projekten war das ein Frühindikator für Scope Creep"
- Partner-Dashboard: Portfolioüberblick über alle aktiven Projekte

**Kundenfeedback-Integration:**

- Pulse-Checks an definierten Milestones (automatisch getriggert)
- NPS + qualitatives Feedback vom Kunden-Ansprechpartner
- Kontextualisiertes Feedback fließt zurück in den Consultant Knowledge Graph

**Feedback-Loops (kritisch):**

- Delivery-Erkenntnisse → Methodology & IP / Knowledge-Engine
- Kundenfeedback → Consultant Knowledge Graph
- Aufwandsdaten (aus integrierten Zeiterfassungstools) → kalibrieren Schätzungen in der Offer Composition
- Scope-Creep-Patterns → verbessern Opportunity-Analyse und Engagement-Briefs

---

### 10.2 Financial Intelligence & Controlling

**Problem:** Beratungen wissen erstaunlich schlecht, wie profitabel sie sind. Gesamt-EBITDA kennt jeder, aber DB pro Projekt, Kunde, Berater, Service Line? Das ist Excel-Artisanship.

**Lösung:** Echtzeit-Profitabilitätstransparenz auf jeder Aggregationsebene mit prädiktivem Forecasting.

**Deckungsbeitragsrechnung (Echtzeit):**

- DB1 pro Projekt: Umsatz (fakturierte Einheiten × Satz) − direkte Kosten (Berater-Kosten anteilig, Reisekosten, externe Subunternehmer, projektspezifische Lizenzen/Tools)
- Aggregation: pro Berater, pro Kunde, pro Service Line, pro Partner-Portfolio, pro Standort
- Margen-Erosion-Frühwarnung: „Projekt X — noch 60% Scope, nur 40% Budget. DB1 fällt bei gleichbleibendem Verlauf auf 12% (Ziel: 25%)"

**Utilization Management:**

- Aktuelle Auslastung pro Berater, Team, Practice, Standort
- Predictive Utilization: basierend auf laufenden Projekten, Pipeline-Wahrscheinlichkeiten, geplanten Abgängen/Zugängen
- Bench-Management: „Diese 5 Berater sind ab KW 20 verfügbar — hier sind passende Opportunities in der Pipeline"

**Revenue Forecasting:**

- Multifaktoriell: laufende Projekte (Restverlauf), Vertragsverlängerungswahrscheinlichkeit (basierend auf Kundenfeedback + Historie), Pipeline gewichtet nach Phase und historischer Conversion, saisonale Muster, Kapazitätsobergrenze
- Services-spezifisch: berücksichtigt Staffing-Constraints und Projekt-Laufzeiten (fundamental anders als SaaS-Forecasting)
- Szenario-Modelle: Best Case / Expected / Worst Case
- Capacity-constrained Forecast: „Selbst wenn wir alles gewinnen, können wir im Q3 maximal X€ Umsatz machen"

**Pricing Intelligence:**

- Tagessatz-Benchmarks: nach Senioritätslevel, Branche, Region, Projekttyp
- Rate-Cards pro Berater/Service Line
- Marktvergleich: „Eure SAP-Berater im Bankenumfeld Frankfurt liegen 8% unter Markt"
- Win-Rate-Korrelation: „Bei öffentlichen Auftraggebern werden Angebote über X€/Tag zu 70% aussortiert"

**Cash-Flow-Prognose:**

- Fakturierungszeitpunkte (Milestone vs. monatlich)
- Zahlungsziel-Analyse pro Kunde
- Zahlungsverzug-Risikobewertung

**Subcontractor-Controlling:**

- Einkaufskosten vs. Weiterfakturierung, Marge
- ANÜ-Compliance-Monitoring: Einsatzdauer, Vertragsstruktur

**DACH-Spezifika:**

- HGB vs. IFRS 15 Umsatzrealisierung (Percentage of Completion bei Werkverträgen)
- Reisekostenabrechnung nach deutschem Steuerrecht
- Schweizer MwSt.-Besonderheiten bei grenzüberschreitendem Consulting
- Österreich: UGB-Spezifika
- Konzernverrechnungspreise bei internationalen Engagements

---

## 11. Cross-Cutting Concerns

### 11.1 Multi-Entity & Governance

- **Mandantenfähigkeit:** Separate Gesellschaften pro Land/Practice abbildbar
- **Granulares Rechtekonzept:** Partner-Sichtbarkeit, Practice-Grenzen, Standort-Zugriff
- **Chinese Walls:** Information Barriers bei konkurrierenden Kundenprojekten. Wenn zwei Teams für Wettbewerber arbeiten, darf kein Informationsfluss stattfinden.
- **Role-Based Access:** Geschäftsführung, Partner, Practice Lead, Projektleiter, Berater, BD, Backoffice, HR
- **Daten-Residenz:** DACH-Hosting (EU-Datacenter zwingend)

### 11.2 DSGVO & Compliance

**Consent-State-Machine:**

| Status | Bedeutung | Outreach erlaubt |
|---|---|---|
| **UNKNOWN** | Neuer Kontakt, kein Consent | ❌ Blockiert |
| **OPT-IN PENDING** | Einladung gesendet, Bestätigung ausstehend | ❌ Blockiert (Double-Opt-In bei Kalt-Kontakt) |
| **OPTED-IN (Datum)** | Bestätigung erhalten | ✅ Erlaubt |
| **SUPPRESSED** | Bounce / Beschwerde / Widerruf | ❌ Auto-unterdrückt |

**Spezifische Anforderungen:**

| Anforderung | Detail |
|---|---|
| **Double-Opt-In** | Vor jeder Kalt-E-Mail: Bestätigungs-E-Mail → Klick. Warm-Kontakte: Single-Opt-In + dokumentierte Rechtsgrundlage. |
| **Consent-Status-Anzeige** | Jeder Kontakt: klar sichtbarer Status mit Datum |
| **Audit-Trail** | Wer hat wann auf welcher Consent-Basis genehmigt? Monatlicher Export. |
| **Erasure-Workflow** | Löschungsanfrage → alle Daten innerhalb 72h gelöscht. Anonymisierter Audit-Eintrag bleibt. |
| **Data Retention** | Konfigurierbar. Default: 24 Monate Inaktivität → Archivierung; 36 Monate → Löschung. |
| **BetrVG §87 Abs. 1 Nr. 6** | Berater-Profiling bedarf der Zustimmung des Betriebsrats. Betriebsvereinbarung als Voraussetzung dokumentieren. |
| **Beschäftigtendatenschutz** | DSGVO Art. 88: Berater-Daten besonders geschützt. Opt-in für nicht offensichtliche Anreicherung. |

**Compliance & Audit Trail:**

- Durchgängiger Audit Trail: Wer hat wann was getan/geändert/genehmigt
- Zertifizierungsmanagement: ISO 27001, TISAX, Sicherheitsüberprüfungen
- Regulierter-Kunden-Modus: Erweiterte Nachweispflichten für Banken (BAIT/DORA), Versicherungen (VAIT), Pharma (GxP), öffentliche Hand
- Löschkonzept: DSGVO-konforme Aufbewahrungsfristen und automatisierte Löschung

### 11.3 DACH Regulatory

| Bereich | Regelung | Relevanz für Consultry |
|---|---|---|
| Berater-Profiling | BetrVG §87 Abs. 1 Nr. 6 | Betriebsrat-Zustimmung bei systematischer Leistungserfassung |
| Workforce-Monitoring | BetrVG §87 Abs. 1 Nr. 6 | Workload-Tracking, Auslastungs- und Reisebelastungsdaten pro Berater erfordern Betriebsvereinbarung. Feature-Gate: opt-in nach dokumentierter BR-Zustimmung. |
| Datenschutz | DSGVO, BDSG | Consent-Modell, Erasure, Audit-Trail |
| Arbeitnehmerüberlassung | AÜG | ANÜ-Compliance bei Freelancer-Einsatz, Scheinselbständigkeit |
| Vertragsrecht DE | BGB, HGB | Dienstvertrag vs. Werkvertrag Abgrenzung |
| Vertragsrecht CH | OR | Eigene Templates und Klauseln |
| Vertragsrecht AT | UGB | Spezifische Regelungen |
| Öffentliche Vergabe | GWB, VgV, EVB-IT | Vergaberechtskonforme Verträge und Angebote |
| Rechtsdienstleistung | RDG | Vertragsmodul als Tool, nicht als Rechtsberatung |
| AI Act | EU AI Act | Transparenzpflichten bei AI-Entscheidungen (Matching, Scoring) |
| Buchhaltung | HGB, IFRS 15 | Umsatzrealisierung bei Dienst-/Werkverträgen |
| Reisekosten | EStG | Verpflegungsmehraufwand, Kilometerpauschale |
| Grenzüberschreitend | MwStSystRL | CH-MwSt. bei Cross-Border-Consulting |

### 11.4 Reporting & Executive Dashboards

- **Geschäftsführungs-Cockpit:** Umsatz, Auslastung, Pipeline, Profitabilität, Signal-Highlights
- **Partner-View:** Eigenes Portfolio, eigene Kunden, eigene Berater, eigene Opportunities
- **Practice-Lead-View:** Service-Line-Performance, Skill-Landschaft, Markttrends
- **BD-View:** Pipeline, Outreach-Performance, Event-ROI, Conversion-Funnel
- **Berater-Self-Service:** Eigenes Profil, eigene Projekte, eigene Auslastung, Entwicklungsplan, Knowledge-Beiträge
- **Drill-Down:** Von High-Level KPI bis zum einzelnen Projekt/Berater

---

## 12. Datenmodell (konzeptionell)

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
                       │
                       ├──becomes──▶ [Proposal/Offer]
                       │                 │
                       │                 ├──staffed_with──▶ [Consultant] (Team)
                       │                 └──uses──────────▶ [Methodology]
                       │
                       └──becomes──▶ [Contract]
                                        │
                                        └──becomes──▶ [Project]

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
```

---

## 13. Tiering & Pricing (Konzept)

| | **Starter** | **Professional** | **Enterprise** |
|---|---|---|---|
| **Zielgruppe** | Boutique (5–30) | Mittelstand (30–200) | Groß (200+) |
| **Berater-Profile** | bis 30 | bis 200 | unbegrenzt |
| **Foundation** | Knowledge Graph, Client Mgmt | + Methodology/IP, Knowledge Engine | + Multi-Entity, Chinese Walls |
| **Growth** | Basis-Signal-Feed, Event-Kalender | + Discovery-Engine, Talent Acquisition | + Custom Enrichment, API |
| **Deal** | Matching, CVs, Opportunity Tracking | + Offer Composition, Contracts, Outreach | + Advanced Campaigns, Landing Pages |
| **Delivery** | Basis-Milestone-Tracking | + Risk Monitoring, Financial Intelligence | + Predictive Analytics, Custom Dashboards |
| **AI-Features** | CV-Import, Basis-Matching | + Semantisches Matching, Offer-Generierung, Vertrags-Review | + Custom AI Workflows |
| **Integrationen** | Google/Microsoft Calendar & Mail | + Zeiterfassung, HR, Buchhaltung | + SAP, Custom, API-Zugang |
| **Support** | Self-Service + Chat | Dedicated Onboarding + E-Mail | Customer Success Manager + SLA |
| **Preismodell** | Ab €X/Berater/Monat | Ab €Y/Berater/Monat | Custom Pricing |

*Preispunkte erfordern Marktvalidierung. Benchmark: MOCO (ab €15/User/Monat), Productive.io (ab $17/User/Monat), Kimble (Enterprise-Pricing). Consultry positioniert sich premium wegen AI-nativer Differenzierung und vollständiger Lifecycle-Abdeckung.*

---

## 14. Integrationen

### Integrationsprinzipien

- **Adapter-Pattern:** Jede Integration austauschbar via typisierter Adapter
- **Kein Vendor-Lock-in:** Adapter-Wechsel ohne Systemänderungen
- **Daten-Qualität > Daten-Quantität:** Lieber weniger, aber verifizierte Quellen

### Integrationslandschaft

| Kategorie | Integration | Rolle | Bewertung |
|---|---|---|---|
| **Enrichment** | Dealfront | Primäres DACH-Enrichment + Signale | ✅ Empfohlen. 34M+ Firmen, 33+ Signal-Typen. |
| **Enrichment** | North Data | Handelsregister + Finanzen (Supplement) | ✅ Empfohlen als Ergänzung. |
| **Ausschreibungen** | TED, DÖE, SIMAP, bund.de | Öffentliche Vergabe | ✅ APIs verfügbar, DSGVO-konform. |
| **Kalender** | Google Calendar, Microsoft 365 | Verfügbarkeit, Meeting-Koordination | ✅ Standard-OAuth. |
| **E-Mail** | Gmail, Outlook | Opportunity-Intake, Outreach | ✅ Standard-Integration. |
| **E-Mail-Versand** | SendGrid / Resend | Outreach-Zustellung + Tracking | ✅ Industriestandard. |
| **Dokumente** | Google Drive, SharePoint, OneDrive | Wissensquellen-Sync, Knowledge Engine | ✅ |
| **Zeiterfassung** | Clockodo, MOCO, Harvest, Personio | Aufwandsdaten für Financial Intelligence | ✅ Konsumieren, nicht ersetzen. |
| **HR** | Personio, SAP SuccessFactors, Workday | Berater-Stammdaten, Onboarding | ✅ |
| **Buchhaltung** | DATEV, Lexware, Bexio (CH), BMD (AT) | Financial Intelligence | ✅ |
| **Recruiting** | LinkedIn Recruiter, StepStone, XING, Gulp | Talent Acquisition | ✅ |
| **Event-Plattformen** | Grip, Brella, Swapcard, b2match | Event-Kontakte | ⚠️ Nur bei verhandelter Partnerschaft. APIs für Organizer gebaut. |
| **CRM-Migration** | Salesforce, HubSpot, Pipedrive | Import-Pfade für Bestandsdaten | ✅ Import, kein laufender Sync. |
| **ERP** | SAP, Microsoft Dynamics | Financial-Daten | Perspektivisch. |
| **BI** | Power BI, Tableau | Export/Embedding | Perspektivisch. |
| **LinkedIn/XING API** | — | — | ❌ Nicht realisierbar. LinkedIn gesperrt, XING keine API. |

---

## 15. Erfolgsmetriken

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

### Kritische Validierungspunkte

| Metrik | Threshold | Konsequenz |
|---|---|---|
| Kompetenz-Match-Genauigkeit | <60 % nach 1 Monat | Kern-Hypothese in Frage; Matching-Engine re-evaluieren |
| Enrichment-Datenqualität | >30 % Lücken bei DACH-Firmen | Datenquellen-Mix anpassen |
| Berater-Onboarding | <50 % in 7 Tagen | Onboarding-Flow überarbeiten |
| Knowledge-Pool-Engagement | <2 Anfragen/Woche/Berater nach 2 Monaten | Q/A-Agent-Qualität verbessern |
| Angebots-Adoption | <30 % der Proposals über System generiert nach 3 Monaten | Offer Composition vereinfachen |

---

## 16. Phased Roadmap

### Phase 1 — Fundament (Wochen 1–6)
**Ziel:** Arbeitsfähige Plattform mit den Datenfundamenten und erstem Werthebel.

- Consultant Knowledge Graph (strukturierte Profile, CV-Import, KI-basierte Skills-Normalisierung)
- Workforce & Team Management (Org-Struktur, Verfügbarkeits-/Abwesenheitsmanagement, Basis-Kapazitätsplanung, Personio-Integration)
- Client & Account Management (Stammdaten, Stakeholder, Beziehungshistorie)
- Opportunity Intelligence (Intake, Auto-Extraktion, Pipeline, Basis-Engagement-Briefs)
- Intelligent Staffing & Matching (Multi-Faktor, Team-Komposition)
- Client-Facing Intelligence (CV-Generierung, Basis-Proposals)
- Auth, Multi-Tenancy, RBAC, DSGVO-Consent-Modell, Basis-Dashboard
- Core-Integrationen: Kalender, E-Mail, Dokumenten-Storage

**Meilenstein:** Beratung ongeboardet, Berater normalisiert profiliert, Org-Struktur und Verfügbarkeiten abgebildet, erste Opportunities getracked, CVs generiert.

### Phase 2 — Full Deal Machine (Wochen 7–14)
**Ziel:** Komplette Wertschöpfungskette vom Signal bis zum Vertrag.

- Market & Signal Intelligence (Signal-Feed, Discovery-Engine, Ausschreibungs-Matching)
- Smart Service Offer Composition (Angebotsgenerierung, Varianten-Engine)
- Contract Intelligence (Templates, Klausel-Bibliothek, Basis-Review)
- Outreach & Campaign Engine (personalisierte Ansprache, Consent-Gating, Sequenzen)
- Engagement-Briefs erweitert (Wettbewerber-Analyse, Warm-Paths)
- Methodology & IP Asset Management
- Erweiterte Integrationen: Enrichment (Dealfront, North Data), SendGrid

**Meilenstein:** Discovery-Runs liefern qualifizierte Prospects, Angebote werden generiert, Outreach läuft DSGVO-konform.

### Phase 3 — Delivery & Performance (Wochen 15–22)
**Ziel:** Delivery-Tracking und Profitabilitätstransparenz.

- Project Execution & Delivery (Milestones, Risk Monitoring, Kundenfeedback, Scope-Change)
- Financial Intelligence (DB-Rechnung, Utilization, Forecasting, Rate-Cards, Pricing Intelligence)
- Workforce & Team Management erweitert (Workload-Monitoring, Burnout-Prävention, Performance-/Entwicklungszyklen, Mentoring — Feature-Gate für BetrVG-pflichtige Funktionen)
- Knowledge-Engine voll aktiv (Wissensgenerierung aus Projekten, Q/A-Agent, Playbooks)
- Erweiterte Integrationen: Zeiterfassung, Buchhaltung

**Meilenstein:** Echtzeit-Profitabilität sichtbar, Projekte überwacht, Wissen fließt zurück, Berater-Entwicklung datengestützt.

### Phase 4 — Growth Engine (Wochen 23–30)
**Ziel:** Netzwerk- und Wachstumsmodule.

- Events & Network Intelligence (Pre/Live/Post, Landing-Pages, ROI-Tracking)
- Talent Acquisition & Onboarding (Recruiting-Pipeline, Freelancer-Sourcing, Mentoring)
- Advanced Analytics & Predictive Features
- Ausschreibungs-Drafting (generatives Erstellen von Antwortdokumenten)
- Landing-Page-Generierung für Kampagnen
- Erweiterte Integrationen: Recruiting-Plattformen, Event-Tools (wo Partnerschaften bestehen)

**Meilenstein:** Vollständige Growth-Engine aktiv, Event-ROI messbar, Recruiting datengetrieben.

### Phase 5+ — Strategic Platform
- Thought Leadership & Content Engine
- Competitive Intelligence (eigenständig, über Opportunity-Kontext hinaus)
- Learning & Development Engine
- Alumni & Freelancer-Netzwerk
- Partner & Subcontractor Ecosystem
- Enterprise-Features: Chinese Walls, Custom AI Workflows, API-Ecosystem

---

## 17. Risiken

| Risiko | Impact | Mitigation |
|---|---|---|
| **Scope-Ambition** (15 Module) | Hoch | Strikte Phasenplanung, iterative Tiefe pro Modul. MVP-Kern in Phase 1 ist schlank genug für schnelle Validierung. Workforce & Team Management ist Foundation-kritisch und kein Scope-Creep — es ist Daten-Provider für Staffing, Financial Intelligence und RBAC. |
| **DACH-Compliance-Komplexität** (BetrVG, DSGVO, RDG, AÜG) | Hoch | Frühzeitige juristische Beratung, Privacy-by-Design, Consent-State-Machine ab Tag 1. |
| **Datenqualität bei Erstbefüllung** | Mittel | AI-gestützter Import, geführte Onboarding-Prozesse, Skill-Normalisierung reduziert Chaos. |
| **Konkurrenz** (Salesforce + Kimble, Productive.io, MOCO) | Mittel | AI-native Differenzierung + DACH-Spezialisierung + Lifecycle-Breite. Kein Wettbewerber deckt den vollen Lifecycle ab. |
| **Vertragsmodul als Rechtsberatung** (RDG) | Mittel | Klare Positionierung als Tool. Empfehlung zur finalen Prüfung durch Rechtsabteilung bei kritischen Klauseln. |
| **Enrichment-Kosten** (Dealfront ~21-34K€/Jahr) | Mittel | Hybrid-Strategie, Adapter-Architektur erlaubt Quellenwechsel. |
| **Event-App-Integration** | Mittel | Realistische Erwartungen: APIs für Organizer gebaut. Partnerschaften verhandeln, manueller Import als Fallback. |
| **Enterprise-Readiness** (Skalierung, SLA) | Mittel | Cloud-native Architektur, frühes Performance-Testing. |
| **Skills-Normalisierungs-Genauigkeit** | Mittel | Iteratives Training, Human-in-the-Loop bei Unklarheiten, Feedback-Loops. |
| **BetrVG-Blockade bei Workforce-Features** | Mittel | Workload-Monitoring und Performance-Tracking erfordern Betriebsvereinbarung (§87 Abs. 1 Nr. 6). Feature-Gate-Architektur: personenbezogene Auswertungen erst nach dokumentierter BR-Zustimmung. Aggregierte Team-Daten ohne Personenbezug als Fallback. |
| **Scope-Creep Richtung HR** | Mittel | Harte Scope-Grenze: keine Gehaltsplanung, keine disziplinarischen Workflows, keine Krankenakten. Integration mit Personio/SAP SuccessFactors für formale HR-Prozesse. Regelmäßige Scope-Reviews. |

---

## 18. Offene Entscheidungen

| # | Frage | Status |
|---|---|---|
| 1 | **Pricing-Validierung:** Preisbereitschaft im DACH-Beratungsmarkt? | Gespräche mit 10+ Beratungen nötig |
| 2 | **Build vs. Integrate für Financials:** Eigenes Controlling oder Deep-Integration mit DATEV/Bexio? | Zu evaluieren |
| 3 | **Document Generation Stack:** Carbone, Docx-Templater, oder Custom für CV-/Proposal-/Vertragsgenerierung? | Zu evaluieren |
| 4 | **Multi-Tenancy-Architektur:** Shared Database mit Row-Level-Security oder Database-per-Tenant? | Zu evaluieren |
| 5 | **Relationship zu Institor/Cogmo:** Shared Components? Institor als Feature-Set in Consultry? Getrennte Produkte? | Strategische Entscheidung |
| 6 | **Go-to-Market:** Direktvertrieb? Partner-Kanal (BDU, Branchenverbände)? Product-Led Growth? | Zu definieren |
| 7 | **Sprach-Strategie:** Phase 1 nur Deutsch? EN-UI ab wann? FR für Schweizer Kunden? | Zu definieren |
| 8 | **Enrichment-Partnerschaft:** Dealfront vs. North Data vs. beides — Vertragsverhandlung und Preismodell | Zu verhandeln |

---

## 19. Abgrenzung / Out of Scope

- Eigene Zeiterfassung (DACH-rechtliche Bedenken)
- ERP-Funktionalität (Rechnungsstellung, Mahnwesen — Integration statt Build)
- Vollständiges HR-System (Integration mit Personio etc.)
- Rechtsberatung (System unterstützt, berät nicht)
- Event-Plattform (Integration, kein Eventbrite-Konkurrent)
- LinkedIn/XING-API-Integration (APIs nicht verfügbar)
- Generalistische CRM-Funktionalität (spezialisiert auf Beratungen)
- BYO-CRM bidirektionaler Sync (natives CRM, Import-Pfade für Migration)

---

## 20. Modul-Übersicht (Komplett)

| # | Modul | Layer | Kern-Wert |
|---|---|---|---|
| 1 | Consultant Knowledge Graph | Foundation | Lebendes Berater-Profil mit normalisierter Skill-Taxonomie |
| 2 | Workforce & Team Management | Foundation | Operatives Team-Management, Verfügbarkeit, Kapazitätsplanung, Entwicklung |
| 3 | Client & Account Management | Foundation | Strukturiertes Kundenbeziehungs-Management |
| 4 | Methodology & IP Asset Management | Foundation | Firmenwissen querybar und wiederverwendbar |
| 5 | Market & Signal Intelligence | Growth | Proaktive Marktbeobachtung und Discovery |
| 6 | Events & Network Intelligence | Growth | End-to-End Event-Lifecycle mit ROI |
| 7 | Talent Acquisition & Onboarding | Growth | Datengetriebenes Recruiting und nahtloses Onboarding |
| 8 | Opportunity Intelligence & Tracking | Deal | Intelligentes Opportunity-Management mit Engagement-Briefs |
| 9 | Intelligent Staffing & Matching | Deal | Semantisches Team-Matching |
| 10 | Smart Service Offer Composition | Deal | Maßgeschneiderte Angebote mit Varianten |
| 11 | Client-Facing Intelligence | Deal | CVs, Proposals, Case Studies auf Knopfdruck |
| 12 | Contract Intelligence & Legal Automation | Deal | AI-gestützter Vertrags-Lifecycle |
| 13 | Outreach & Campaign Engine | Deal | DSGVO-konforme Erstansprache und Kampagnen |
| 14 | Project Execution & Delivery Intelligence | Delivery | Projekt-Monitoring mit Risiko-Frühwarnung |
| 15 | Financial Intelligence & Controlling | Delivery | Echtzeit-Profitabilität und Forecasting |

**Cross-Cutting:** Multi-Entity & Governance, DSGVO & Compliance, DACH Regulatory, Reporting & Executive Dashboards

**Phase 5+ (nicht im MVP):** Thought Leadership & Content Engine, Standalone Competitive Intelligence, Learning & Development Engine, Alumni & Freelancer-Netzwerk, Partner & Subcontractor Ecosystem

---

*Consultry — PRD v2.0 — Final Draft — 30. März 2026*
