# Consultry — PRD v4.0

## AI-native Operating System für DACH-IT- und Digitalisierungsberatungen

**Status:** Draft  
**Datum:** 12. April 2026  
**Bezug:** Konsolidiert aus [Consultry-PRD-v3.0-Final.md](./Consultry-PRD-v3.0-Final.md), [Consultry-Module-Refinement-v1.0.md](./Consultry-Module-Refinement-v1.0.md) und offizieller EU-/DE-Recherche

---

## 1. Produktthese

Consultry ist das AI-native Operating System für Beratungen, die ihre operative Steuerung nicht aus getrennten Tools, Excel und Köpfen einzelner Partner zusammensetzen wollen.

Das Produkt verbindet fünf Dinge in einem System:

- Bestandskunden- und Account-Growth
- Berater-, Team- und Kapazitätssteuerung
- Wissensbasis und Wiederverwendung
- Opportunity, Proposal und Contracting
- Delivery-, Kosten- und Invoice-Vorbereitung

### Scharfe Positionierung

Consultry ist **nicht** ein generisches CRM, **nicht** nur ein PSA-Tool und **nicht** nur ein Wissenssystem.  
Es ist das Steuerungssystem für Beratungsarbeit.

### Primärer Wedge

Der Launch-Wedge ist DACH-IT- und Digitalisierungsberatung mit etwa **30-200 Mitarbeitenden** und starkem Bestandskundenanteil.

Begründung:

- Bestandskunden sind in DACH der wichtigste Umsatzhebel
- People-Planung, Angebot, Delivery und Billing sind dort schon groß genug, aber noch nicht enterprise-verstopft
- Compliance und Mitbestimmung sind relevant, aber handhabbar, wenn die Defaults sauber gesetzt sind

---

## 2. Harte Produktprinzipien

1. **Bestandskunden vor Neukunden**

   Das Produkt startet mit Account-Expansion, Warm Paths, Triggern und Folgeprojekten.

2. **Recommendation + Explanation + Human Approval + Audit Trail**

   Jede relevante AI-Empfehlung muss nachvollziehbar, änderbar und freigabepflichtig sein.

3. **Aggregiert statt personenbezogen, wo immer möglich**

   Team- und Practice-Sichten sind Default. Personenbezogene People-Analytics sind nur mit explizitem Gate zulässig.

4. **Integration vor Ersatz, wenn Recht oder Risiko unklar sind**

   DATEV, ELSTER, ERP, HR, Zeit- und Tender-Systeme werden eingebunden, nicht blind ersetzt.

5. **Ein Modul hat einen Job**

   Wenn ein Bereich gleichzeitig Analyse, Automation, Dokumentengenerierung und People-Management sein will, ist er zu breit.

---

## 3. Zielbild der Produktarchitektur

### Core Systems

1. **Account Growth System**
   - Bestandskunden
   - Stakeholder
   - Warm Paths
   - Trigger
   - Opportunity-Generierung

2. **Consultant, Team & Capacity System**
   - Profile
   - Skills
   - Zertifikate
   - Projekterfahrung
   - Team- und Practice-Strukturen
   - Knowledge Leadership
   - Forecasting

3. **Knowledge & Reuse System**
   - Methoden
   - Assets
   - Referenzen
   - Lessons Learned
   - Onboarding-Basics
   - Sourcing mit Quellenbindung

4. **Opportunity, Proposal & Contract System**
   - Intake
   - Qualifizierung
   - Engagement Brief
   - Teamvorschlag
   - CVs
   - Proposal
   - Contract Drafting und Review

5. **Allocation & Delivery Control System**
   - Projektbezogene Zuordnung
   - Zeitanteile
   - Konflikte
   - Leerlauf
   - Delivery Health
   - Projektabschluss
   - Lernrückfluss

6. **Commercial Control & Billing Prep System**
   - Pricing
   - Time/Expense-Bezug
   - Rebilling
   - Kostenstruktur
   - Invoice-Ready Records
   - Übergabe an DATEV/ELSTER

### Platform Backbone

- AI Workspace
- Collaboration & Approvals
- Governance & Audit
- Integrations Backbone

---

## 4. Feature-Constraints by Area

### 4.1 People Planning

**Produkt darf standardmäßig:**

- Beraterprofile mit Skills, Zertifikaten und Projekterfahrung strukturieren
- Team- und Practice-Sichten anzeigen
- Kapazität auf Projekt-Ebene prognostizieren
- Vorschläge für Staffing, Zeitblöcke und Entwicklungspläne erzeugen
- Skill-Gaps und Knowledge-Ownership sichtbar machen

**Produkt darf nur mit Freigabe / Gate:**

- personenbezogene Workload- und Auslastungsanalysen
- individualisierte Entwicklungsempfehlungen mit operativer Wirkung
- personenbezogenes Forecasting bis auf Einzelberater-Ebene
- Teamlead- oder Sales-gestützte operative Planung

**Produkt darf nicht per Default:**

- Black-Box-Rankings von Personen erzeugen
- Burnout-, Performance- oder Persönlichkeitsscoring als Standard aktivieren
- Entscheidungen ohne Begründung automatisieren
- personenscharfe Daten ohne Mitbestimmungs-/Consent-Mode ausspielen

### 4.2 AI Recommendations

**Produkt darf standardmäßig:**

- Matching-, Staffing- und Research-Vorschläge erzeugen
- Quellen, Begründung und Unsicherheit anzeigen
- Drafts für CVs, Proposals, Briefs und Follow-ups erstellen
- Handlungsoptionen priorisieren

**Produkt darf nur mit Freigabe / Gate:**

- Empfehlungen in operative Standardplanung überführen
- Vorschläge auf Personenebene ausrollen
- AI-gestützte Zusammenfassungen in externe Artefakte übertragen

**Produkt darf nicht per Default:**

- heimlich autonome Entscheidungen treffen
- mangelhaft belegte Claims als Fakt ausgeben
- Kunden- oder Mitarbeiterdaten in generischen Erinnerungsspeicher mischen
- Empfehlungen ohne Herkunft und Version ausspielen

### 4.3 Contracting

**Produkt darf standardmäßig:**

- Vertragsvorlagen verwalten
- Klauseln vergleichen
- Drafts erstellen
- Review-Workflows und Versioning abbilden
- wirtschaftliche Abweichungen sichtbar machen

**Produkt darf nur mit Freigabe / Gate:**

- Vertragsversionen intern oder extern freigeben
- riskante Klauseln markieren
- kommerzielle Auswirkungen einzelner Klauseln bewerten

**Produkt darf nicht per Default:**

- Rechtsberatung simulieren
- finale rechtliche Bewertung als Produktversprechen verkaufen
- Vertragsfinalisierung ohne menschliche Prüfung ermöglichen

### 4.4 Tenders / Ausschreibungen

**Produkt darf standardmäßig:**

- TED/eForms, service.bund und ähnliche Quellen auslesen
- CPV, Fristen, Lose, Eignungskriterien und Dokumentenanforderungen strukturieren
- Ausschreibungen gegen Firmenprofil und Kapazität matchen
- Bid-Pakete und Entwürfe vorbereiten

**Produkt darf nur mit Freigabe / Gate:**

- Ausschreibungen in Opportunities überführen
- Einreichungsunterlagen finalisieren
- formale Compliance-Checks als „vollständig“ markieren

**Produkt darf nicht per Default:**

- autonome Submission übernehmen
- vollständige Vergabesicherheit suggerieren
- formale Fehler als „nur Hinweis“ abtun

### 4.5 Time / Expense

**Produkt darf standardmäßig:**

- eigene Zeitbezüge erfassen oder aus Integrationen ingestieren
- Vorschläge für Time Entries aus Projekten, Jira, GitHub, Kalendern und Activity-Signalen erzeugen
- Reise-, Spesen- und Kostenbezüge strukturieren
- projektbezogene Vorschlagslisten für Reporting bauen

**Produkt darf nur mit Freigabe / Gate:**

- vorgeschlagene Zeiten in echte Einträge umwandeln
- billable vs. non-billable klassifizieren
- Kosten automatisch auf Projekte oder Kunden weiterreichen

**Produkt darf nicht per Default:**

- Zeit automatisch als verbindlich verbuchen
- externe Systeme unbemerkt überschreiben
- Belege oder Time Entries ohne Nutzerfreigabe inventarisieren

### 4.6 Invoice Prep / Finance Handoff

**Produkt darf standardmäßig:**

- aus freigegebenen Zeiten, Spesen, Vertragsdaten und Rebilling-Regeln invoice-ready records erzeugen
- DATEV- und ELSTER-Übergaben vorbereiten
- Rechnungsentwürfe und Abrechnungslogik auf Projekt- und Kundenebene aufbauen
- E-Rechnung-Formate validierungsfähig vorbereiten

**Produkt darf nur mit Freigabe / Gate:**

- Rechnungsentwürfe final freigeben
- steuerrelevante Übergaben auslösen
- Billing-Logik pro Mandant aktivieren

**Produkt darf nicht per Default:**

- selbst zur Steuer- oder Buchhaltungsinstanz werden
- gesetzliche Rechnungs- oder Aufbewahrungspflichten implizit „wegabstrahieren“
- unvollständige Datensätze als abrechnungsreif markieren

### 4.7 Data Governance

**Produkt darf standardmäßig:**

- Tenant-Isolation erzwingen
- Rollen- und Rechtemodelle abbilden
- Audit Trails, Versioning und Retention unterstützen
- Quellen, Labels und Datenherkunft sichtbar machen

**Produkt darf nur mit Freigabe / Gate:**

- personenbezogene Auswertungen
- AI-gestützte People-Analytics
- Cross-tenant Knowledge-Retrieval
- externe Enrichment-Quellen je Mandant

**Produkt darf nicht per Default:**

- Kundendaten, Kandidatendaten und interne Artefakte vermischen
- personenbezogene Optimierung als Standard voraussetzen
- Daten länger als nötig ohne Retention-Politik halten

---

## 5. May Do vs Must Not Do by Default

| Feature Area | May Do | Must Not Do by Default | Default Control |
|---|---|---|---|
| People Planning | Team- und Projekt-Forecast, Skill-Gaps, Entwicklungspläne | personenbezogenes Ranking, Burnout-Scoring, automatische Leistungsbeurteilung | Human Approval, Works-Council-Mode, Audit Trail |
| AI Recommendations | Matching, Briefings, Drafts, Priorisierung | autonome Entscheidungen, unklare Claims, unsourced outputs | Quellenpflicht, Versionierung, Editierbarkeit |
| Contracting | Templates, Klauseln, Review, Impact-Analyse | Rechtsberatung, Finalisierung ohne Review | Legal/Business Approval |
| Tenders | Ingest, Match, Summaries, Bid Drafts | autonome Submission, vollständige Compliance-Zusage | Formal Review, Checklist-Gates |
| Time/Expense | Native oder integrierte Erfassung, Vorschläge, Prefill | automatische Verbuchung, unbemerkte Überschreibung | User Confirmation, Source-of-Truth Rules |
| Invoice Prep | Invoice-ready records, DATEV/ELSTER handoff | steuerliche Endverarbeitung, falsche Abrechnungsreife | Approval, Validation, Export Logs |
| Data Governance | Tenant isolation, audit, retention, RBAC | cross-tenant leakage, silent enrichment, fuzzy retention | Policy by tenant, default minimization |

---

## 6. Legal and Operational Guardrails

### AI / People / Employment

- AI-Systeme im Bereich Beschäftigung, Worker Management und Task Allocation können unter den Hochrisiko-Bereich fallen, wenn sie Rekrutierung, Beförderung, Kündigung, Aufgabenverteilung oder Monitoring beeinflussen.
- Daraus folgt: People-Planung, personenbezogene Forecasts und arbeitsbezogene Empfehlungen müssen standardmäßig mit Transparenz, Human Oversight und dokumentierter Freigabe laufen.
- Bei Beschäftigtendaten gilt in Deutschland zusätzlich: Zweckbindung, Datenminimierung und Freiwilligkeit von Consent sind nicht optional.

### Works Council

- Technische Systeme zur Verhaltens- oder Leistungskontrolle sind mitbestimmungspflichtig.
- Staff questionnaires und allgemeine Beurteilungsgrundsätze benötigen Mitbestimmung.
- Für Consultry bedeutet das: `Works-Council-Mode` muss Produktfunktion sein, nicht bloße Juristen-Notiz.

### Legal Services

- Vertragsmodule dürfen strukturieren, prüfen, vergleichen und markieren.
- Sie dürfen keine individuelle Rechtsberatung simulieren.
- Finales Legal Sign-off bleibt außerhalb des Produkts.

### Procurement

- Ausschreibungen dürfen analysiert und vorbereitet werden.
- Formale Einreichung, Fristenlogik und Vollständigkeit brauchen harte Kontrollen.
- Das Produkt darf nicht suggerieren, öffentliche Vergabe sei nur ein Rechercheproblem.

### Finance / Invoicing

- E-Rechnungen zwischen inländischen Unternehmern sind seit 1. Januar 2025 regelmäßig verpflichtend.
- Für B2G und öffentliche Stellen müssen korrekte elektronische Formate, korrekte Adressierung und valide Empfängerreferenzen berücksichtigt werden.
- Consultry darf Rechnungsprozesse vorbereiten, aber nicht die steuerliche Endinstanz werden.

---

## 7. Module, die in v4.0 Core sind

1. Account Growth System
2. Consultant, Team & Capacity System
3. Knowledge & Reuse System
4. Opportunity, Proposal & Contract System
5. Allocation & Delivery Control System
6. Commercial Control & Billing Prep System
7. AI Workspace
8. Collaboration & Approvals
9. Governance & Audit
10. Integrations Backbone

### Module, die bewusst Expansion bleiben

- Events
- Recruiting als eigenständige Pipeline
- vollwertiges HR
- ERP
- Client Portal mit Schreibrechten
- autonome Tender-Submission
- vollständiges Legal Automation System

---

## 8. Kritische Pushback-Punkte

1. **Wenn ihr Forecasting bis Einzelberater macht, baut ihr ein Compliance-Produkt mit.**

   Dann braucht ihr von Anfang an klare Gate-Mechaniken, Opt-ins und Mitbestimmungsfähigkeit.

2. **Wenn Contracting sehr weit geht, steigt der Scope schneller als der Value.**

   Der Mehrwert ist real, aber der Risikoanteil ebenfalls.

3. **Wenn alles nativ sein soll, verliert ihr die Integrationsdisziplin.**

   Consultry braucht eine Source-of-Truth-Logik je Domäne.

4. **Wenn Tender, Events und Recruiting gleichrangig neben Bestandskunden stehen, verwässert die Positionierung.**

   Diese Bereiche sind relevant, aber nicht der erste Kaufgrund.

5. **Wenn die Zeitlogik nicht sauber getrennt wird, bricht Commercial Control.**

   Vorschlag, Entwurf, Freigabe und finale Buchungslogik sind unterschiedliche Zustände.

---

## 9. Offene Annahmen

- Primäre Zielgruppe ist DACH-IT- und Digitalisierungsberatung mit 30-200 Mitarbeitenden.
- Bestandskunden sind der stärkste Wachstumshebel.
- Das Produkt soll in Organisationen mit Betriebsrat einsetzbar sein.
- DATEV und ELSTER sind die relevanten Handoff-Systeme für die finanzielle Endverarbeitung.
- Tender-Intelligence ist relevant, aber nicht in allen Subsegmenten gleich wichtig.
- Native und integrierte Zeitbezüge sollen koexistieren, mit klarer Source-of-Truth-Regel pro Mandant.

---

## 10. Offene Fragen für die nächste Version

1. Was ist die verbindliche Source of Truth für Zeit je Mandant?
2. Welche Abschlussform gilt für Invoice Prep: Entwurf, Freigabe oder Export?
3. Wie weit soll Tender-Analyse für Teilmärkte nativ vs. integriert gehen?
4. Welche People-Analytics bleiben dauerhaft aggregiert?
5. Welche Contracting-Bausteine sind legal review only?
6. Welche Integrationen sind Launch-kritisch und welche nur nice-to-have?

---

## 11. Quellen und Belege

1. [Regulation (EU) 2024/1689 (AI Act)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689) — OJ 12.07.2024; High-Risk-Klassifikation für Employment, Worker Management, Task Allocation und Monitoring, plus Transparenz- und Human-Oversight-Pflichten.
2. [EUR-Lex summary of Regulation (EU) 2024/1689](https://eur-lex.europa.eu/summary/EN/legissum%3A4762484) — publiziert 2024; offizielle Zusammenfassung zu Risk-Based AI, High-Risk Systems und Transparenz.
3. [GDPR / Regulation (EU) 2016/679](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32016R0679) — 27.04.2016, anwendbar seit 25.05.2018; Transparenz, Profiling, Art. 22, Art. 15, Art. 35.
4. [BDSG § 26](https://www.gesetze-im-internet.de/bdsg_2018/__26.html) — konsolidierte Fassung, abgerufen 12.04.2026; Beschäftigtendaten nur zweckgebunden, Consent wegen Abhängigkeitsverhältnis besonders vorsichtig.
5. [BetrVG § 87](https://www.gesetze-im-internet.de/betrvg/__87.html) — konsolidierte Fassung, abgerufen 12.04.2026; technische Systeme zur Verhaltens-/Leistungskontrolle sind mitbestimmungspflichtig.
6. [BetrVG § 94](https://www.gesetze-im-internet.de/betrvg/__94.html) — konsolidierte Fassung, abgerufen 12.04.2026; Staff questionnaires und allgemeine Beurteilungsgrundsätze benötigen Zustimmung.
7. [RDG § 2](https://www.gesetze-im-internet.de/rdg/__2.html) — konsolidierte Fassung, abgerufen 12.04.2026; Rechtsdienstleistung ist konkrete fremde Angelegenheit mit rechtlicher Einzelfallprüfung.
8. [BMF FAQ zur obligatorischen E-Rechnung](https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html) — Stand März 2026; ab 1. Januar 2025 regulär E-Rechnung im inländischen B2B, XRechnung und ZUGFeRD 2.0.1 relevant.
9. [BMF Monatsbericht Januar 2025 zu steuerlichen Änderungen](https://www.bundesfinanzministerium.de/Monatsberichte/Ausgabe/2025/01/Inhalte/Kapitel-2-Fokus/die-wichtigsten-steuerlichen-aenderungen-2025.html) — Januar 2025; Pflicht zur Empfangsfähigkeit für E-Rechnungen und Übergangsregeln.
10. [§ 257 HGB](https://www.gesetze-im-internet.de/hgb/__257.html) — konsolidierte Fassung, abgerufen 12.04.2026; Aufbewahrungspflichten für Buchungsbelege, Handelsbriefe und strukturierte Archivierung.
11. [TED Developer Docs: eForms / TED API](https://docs.ted.europa.eu/home/index.html) — laufend aktualisiert, abgerufen 12.04.2026; eForms ist der EU-Standard für öffentliche Vergaben, TED API unterstützt Suche, Validierung und Submission.
12. [service.bund.de Ausschreibungsinfos](https://service.bund.de/Content/DE/Service/Ausschreibungsinfos/ausschreibungsinfos_node.html) — laufend aktualisiert, abgerufen 12.04.2026; deutscher Veröffentlichungs- und Weiterleitungsweg für öffentliche Ausschreibungen.

---

## 12. Fazit

Die neue produktive Wahrheit ist:

- Consultry ist ein Steuerungssystem, nicht nur ein Assistenzsystem.
- Bestandskunden, People, Knowledge, Proposal, Delivery und Commercial Control gehören zusammen.
- DACH-Compliance ist ein Produkt-Default, kein Zusatzkapitel.
- People Planning und Contracting sind nur dann tragfähig, wenn Freigabe, Audit und klare Source-of-Truth-Regeln eingebaut sind.

Wenn diese Linien gehalten werden, wird das Produkt schärfer, verkaufbarer und deutlich glaubwürdiger.
