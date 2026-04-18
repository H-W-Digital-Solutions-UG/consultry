# Consultry — PRD v4.1

## AI-native Operating System für DACH-IT- und Digitalisierungsberatungen

**Status:** Draft  
**Datum:** 18. April 2026  
**Bezug:** Konsolidiert aus [Consultry-PRD-v3.0-Final.md](./Consultry-PRD-v3.0-Final.md), [Consultry-Module-Refinement-v1.0.md](./Consultry-Module-Refinement-v1.0.md) und offizieller EU-/DE-Recherche  
**Änderungen v4.0 → v4.1:** Einführung einer expliziten Phasen-Roadmap (neues Kapitel 7), Ergänzung eines Phase-2-Moduls für compliance-native Neukunden-Akquise (Kapitel 4.8 und 8.2), Umstrukturierung der Modulliste nach Phasen (Kapitel 8), Erweiterungen in May-Do-Tabelle, Guardrails, Pushback-Punkten, Annahmen, offenen Fragen und Quellen.

---

## 1. Produktthese

Consultry ist das AI-native Operating System für Beratungen, die ihre operative Steuerung nicht aus getrennten Tools, Excel und Köpfen einzelner Partner zusammensetzen wollen.

Das Produkt verbindet in Phase 1 fünf Dinge in einem System:

- Bestandskunden- und Account-Growth
- Berater-, Team- und Kapazitätssteuerung
- Wissensbasis und Wiederverwendung
- Opportunity, Proposal und Contracting
- Delivery-, Kosten- und Invoice-Vorbereitung

In Phase 2 wird dasselbe System um ein sechstes, compliance-natives Modul erweitert: Neukunden-Akquise als strukturierte Fortsetzung der Bestandskunden-Logik, nicht als Ersatz. Weitere Phasen werden nach demselben Muster ergänzt (siehe Kapitel 7).

### Scharfe Positionierung

Consultry ist **nicht** ein generisches CRM, **nicht** nur ein PSA-Tool und **nicht** nur ein Wissenssystem.  
Es ist das Steuerungssystem für Beratungsarbeit.

### Primärer Wedge

Der Launch-Wedge (Phase 1) ist DACH-IT- und Digitalisierungsberatung mit etwa **30-200 Mitarbeitenden** und starkem Bestandskundenanteil.

Begründung:

- Bestandskunden sind in DACH der wichtigste Umsatzhebel
- People-Planung, Angebot, Delivery und Billing sind dort schon groß genug, aber noch nicht enterprise-verstopft
- Compliance und Mitbestimmung sind relevant, aber handhabbar, wenn die Defaults sauber gesetzt sind

Die Wedge-Erweiterung in Phase 2 adressiert dieselbe Zielgruppe und öffnet den Neukunden-Funnel innerhalb desselben Steuerungssystems, ohne die Launch-Priorität zu verwässern.

---

## 2. Harte Produktprinzipien

1. **Bestandskunden vor Neukunden (Phasenreihenfolge)**

   Das Produkt startet in Phase 1 mit Account-Expansion, Warm Paths, Triggern und Folgeprojekten. Neukunden-Akquise ist explizit Phase 2: eine Erweiterung, kein Ersatz. Das Prinzip gilt dauerhaft als Reihenfolge- und Priorisierungslogik, auch wenn beide Bereiche parallel produktiv sind.

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

Die Core Systems sind nach Phasen markiert. Phase-1-Systeme sind Launch-kritisch, Phase-2-Systeme erweitern das Zielbild, ohne die Phase-1-Architektur zu brechen. Die detaillierte Phasen-Roadmap steht in Kapitel 7.

### Core Systems — Phase 1 (Launch)

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

### Core Systems — Phase 2 (Erweiterung)

7. **New Client Acquisition System** (Phase 2)
   - Signal- und Firmographic-Intelligence
   - ICP- und Fit-Matching
   - Trigger-Events (Funding, Hires, Tech-Stack, Regulierung, Tender)
   - Warm Paths und Referral Mining aus dem Bestandskunden-Graphen
   - Outreach-Sequenzen und personalisierte Drafts
   - Do-not-contact-, Bounce- und Consent-Register
   - Handoff in das Opportunity-System

### Platform Backbone (phasenübergreifend)

- AI Workspace
- Collaboration & Approvals
- Governance & Audit
- Integrations Backbone

### Spätere Phasen

Weitere Core Systems werden erst nach definierten Phase-Gates aufgenommen (siehe Kapitel 7 und 8.3). Kandidaten für Phase 3 und später sind u.a. ein eigenständiges Events-, Recruiting- oder HR-System. Bis dahin bleiben sie bewusst Expansion, nicht Core.

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

### 4.8 New Client Acquisition (Phase 2)

**Einordnung:** Compliance-native Outbound- und Lead-Intelligence für Beratungen. Funktional vergleichbar mit Apollo, Clay, UpLead und Instantly, jedoch zugeschnitten auf Beratungs-GTM und konsequent EU-native: tenant-isolierter Signal-Store, Quellenbindung pro Empfehlung, Rechtsgrundlage pro Kampagne, Human-Approval-Gate vor Versand und volle Integration in Account Growth und Opportunity-System statt Outreach-Silo.

**Produkt darf standardmäßig:**

- Firmographic- und Tech-Signale (Funding, Hires, Tech-Stack-Änderungen, Tender, Regulierungs-Events, Management-Wechsel) aggregieren und mandantenspezifisch speichern
- ICP-Matching gegen Referenzen, Cases, Practice-Areas und vergangene Staffings rechnen
- Account- und Kontakt-Discovery-Listen mit Quelle, Begründung und Unsicherheit erzeugen
- Warm-Path- und Referral-Vorschläge aus dem bestehenden Bestandskunden-Stakeholder-Graphen ableiten
- personalisierte Outreach-Drafts (E-Mail, LinkedIn-Message, Follow-up-Sequenzen) mit Quellenbezug und Claims-Herkunft erstellen
- Do-not-contact-, Bounce- und Consent-Register pro Mandant führen
- Tender-Treffer aus 4.4 zusätzlich als Neukunden-Signal interpretieren
- qualifizierte Leads strukturiert an das Opportunity-, Proposal- und Contract-System übergeben

**Produkt darf nur mit Freigabe / Gate:**

- Outreach-Sequenzen in echten Versand überführen
- externe Enrichment-Quellen und Datenbroker je Mandant aktivieren
- Kontaktdaten aus öffentlichen Quellen in persistente Mandanten-Datensätze überführen
- personenbezogene Prospect-Profile anreichern oder aktualisieren
- Cross-tenant-Signale, Benchmarks oder Lookalike-Modelle aktivieren
- AI-generierte Aussagen über Ziel-Accounts in externe Artefakte (Nachrichten, Briefings, CRM-Exports) übernehmen

**Produkt darf nicht per Default:**

- autonom Nachrichten versenden oder Sequenzen aktivieren
- Prospects ohne tragfähige Rechtsgrundlage tracken oder persistieren
- personenbezogene Daten aus Fremdquellen ohne Consent oder dokumentierte Interessenabwägung verarbeiten
- Kaltakquise ohne funktionierenden Opt-out- und Widerspruchspfad aktivieren
- Bestandskunden-, Prospect- und Mitarbeiterdaten in einem gemeinsamen Speicher vermischen
- Scraping-Quellen ohne Nutzungsrechts- und AGB-Prüfung einbinden
- Ausschreibungen oder Neukunden-Leads als „qualifiziert" markieren, ohne Quelle und Grundlage sichtbar zu machen

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
| New Client Acquisition (Phase 2) | Signal- und Firmographic-Intelligence, ICP-Matching, Referral- und Warm-Path-Vorschläge, Outreach-Drafts, Lead-Handoff ins Opportunity-System | autonomer Versand, unrechtmäßiges Tracking, Scraping ohne Nutzungsrechtsbasis, Vermischung von Prospect- und Bestandskundendaten | Send-Approval, Consent- und Do-not-contact-Register, dokumentierte Rechtsgrundlage pro Kampagne, Tenant-Isolation |

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

### Outbound & Contact Data (relevant ab Phase 2)

- Unerbetene Kaltakquise an Geschäftspartner ist nur in den engen Schranken von §7 UWG zulässig; mutmaßliche Einwilligung ist kein Freibrief.
- Die Verarbeitung personenbezogener Prospect-Daten (Name, Geschäfts-E-Mail, Funktion, Signalhistorie) braucht eine tragfähige Rechtsgrundlage nach DSGVO Art. 6, in der Regel berechtigtes Interesse mit dokumentierter Interessenabwägung.
- Betroffene haben jederzeit Auskunfts- und Widerspruchsrechte (Art. 15 DSGVO, Art. 21 DSGVO). Das Produkt muss diese Rechte mandantenseitig einlösen können.
- Consultry betreibt deshalb ein mandantenspezifisches Consent- und Do-not-contact-Register, dokumentiert die Rechtsgrundlage je Kampagne und hält Enrichment-Quellen inklusive Nutzungsrechten nachweisbar vor.

---

## 7. Phasen-Roadmap

Consultry rollt sich in klar getrennten Phasen aus. Jede Phase hat einen scharf abgegrenzten Wedge, klare Module und definierte Phase-Gates. Das Dokument ist so aufgebaut, dass weitere Phasen nach demselben Muster ergänzt werden können, ohne die Launch-Priorität zu verwässern.

### 7.1 Phase 1 — Launch: Bestandskunden-OS

**Wedge:** DACH-IT- und Digitalisierungsberatung mit 30-200 Mitarbeitenden und starkem Bestandskundenanteil.

**Ziel:** Das operative Steuerungssystem für Bestandskunden-Wachstum, Staffing, Knowledge, Proposal, Delivery und Billing-Prep in einem System.

**Core-Module:** Account Growth, Consultant/Team/Capacity, Knowledge & Reuse, Opportunity/Proposal/Contract, Allocation & Delivery Control, Commercial Control & Billing Prep, AI Workspace, Collaboration & Approvals, Governance & Audit, Integrations Backbone.

**Erfolgskriterium:**

- Bestandskunden-Expansion ist im Produkt messbar und reproduzierbar
- Staffing, Proposal und Billing-Prep laufen ohne Excel-Krücken
- Compliance-Defaults (DSGVO, BetrVG, AI Act, E-Rechnung, DATEV/ELSTER) sind produktiv
- dokumentierter Audit-Trail und belastbare Tenant-Isolation sind standardmäßig aktiv

### 7.2 Phase 2 — Compliance-native Neukunden-Akquise

**Wedge-Erweiterung:** Dieselbe Zielgruppe, jetzt mit einem Modul, das Neukunden-Akquise im gleichen System hält. Positionierung: Apollo, Clay, UpLead und Instantly für Beratungen — aber EU-datenhoheitlich, tenant-isoliert, mit Quellenbindung und Freigabe-Gates.

**Ziel:** Neukunden-Pipeline als strukturierte, nachvollziehbare Erweiterung der Bestandskunden-Logik, nicht als Ersatz.

**Neues Core-System:**

- New Client Acquisition System (siehe 4.8 und 8.2)

**Erweiterungen bestehender Module:**

- Account Growth: Stakeholder-Graph wird um externe ICP- und Prospect-Kontakte erweitert, klar abgegrenzt von Bestandskunden-Datensätzen
- Tenders (4.4): Tender-Discovery zusätzlich als Neukunden-Lead-Quelle, nicht nur als Opportunity-Match
- Opportunity/Proposal/Contract: Übernahme qualifizierter Leads aus Outreach-Sequenzen
- Governance & Audit: Consent- und Do-not-contact-Register, Rechtsbasis-Dokumentation, Enrichment-Quellen mit Nutzungsrechten

**Erfolgskriterium:**

- Neukunden-Generierung ist im gleichen System messbar, ohne Bestandskunden-Priorität zu verdrängen
- Outreach läuft compliance-nativ (§7 UWG, DSGVO Art. 6(1)(f), Art. 21, Do-not-contact-Register)
- Prospect- und Bestandskundendaten sind datentechnisch sauber getrennt
- AI-Outputs im Outreach sind quellengebunden, versioniert und editierbar

### 7.3 Phase 3 und später — Erweiterungs-Hypothesen

In Phase 3 und darüber hinaus werden bewusst zunächst ausgeschlossene Bereiche produktseitig geprüft. Der Einbau folgt denselben Prinzipien wie Phase 1 und 2: ein Modul hat einen Job, Gates by default, keine Kompetenz-Überlappung, Integration vor Ersatz bei unklarem Rechtsrahmen.

**Kandidaten (nicht verbindlich, nicht priorisiert):**

- Events-Modul für Account- und Brand-Events
- Recruiting als eigenständige Pipeline
- vollwertiges HR
- ERP-Funktionen jenseits des Handoffs
- Client Portal mit Schreibrechten
- autonome Tender-Submission
- vollständiges Legal Automation System

Diese Bereiche sind explizit nicht Teil von Phase 1 oder Phase 2. Ob und wann sie produktisiert werden, hängt von Phase-Gate-Kriterien, Kundenreife und regulatorischen Rahmenbedingungen ab.

### 7.4 Phase-Gates

Phasenübergänge sind nicht Kalender-getrieben, sondern Kriterien-getrieben. Ein Übergang wird erst freigegeben, wenn die jeweiligen Gates belegt sind.

**Gate Phase 1 → Phase 2:**

- Bestandskunden-Kernflows bei Referenzkunden produktiv
- belastbare Telemetrie über Account Growth, Staffing, Proposal und Billing-Prep
- dokumentierter AI-Audit-Trail inklusive Quellen-, Versions- und Freigabehistorie
- Compliance-Defaults im Live-Betrieb validiert (DSGVO, BetrVG, AI Act, E-Rechnung)
- Werks- und Betriebsrats-Mode als Produktfunktion erprobt

**Gate Phase 2 → Phase 3+:**

- Neukunden-Pipeline mit belastbarem Compliance-Record (Rechtsgrundlagen, Consent-Historie, Widerspruchshandling)
- Multi-Mandanten-Reife des Outreach-Stacks
- Prospect- und Bestandskunden-Datenmodell sauber getrennt
- keine offenen Major-Findings aus Datenschutz-, AI- oder UWG-Perspektive

### 7.5 Erweiterungsprinzip für neue Phasen

Neue Phasen werden nach folgendem Muster ergänzt, damit das Dokument konsistent wachsen kann:

1. Wedge-Erweiterung klar benennen (welche Zielgruppe, welche neue Realität, welcher Kaufgrund).
2. Neues Core-System oder Modul-Erweiterung in Kapitel 3 verorten.
3. May-Do / Nur-mit-Gate / Must-Not-by-Default-Constraints formulieren (neues Unterkapitel in Kapitel 4).
4. Eintrag in der May-Do-Tabelle (Kapitel 5) ergänzen, mit Phasen-Marker.
5. Spezifische Legal- und Operational-Guardrails in Kapitel 6 ergänzen.
6. Neues Unterkapitel in Kapitel 8 (Module pro Phase) einfügen.
7. Phase-Gate in 7.4 definieren, bevor die nächste Phase begonnen werden kann.
8. Relevante Annahmen, offene Fragen und Quellen in Kapitel 10-12 ergänzen.

---

## 8. Module pro Phase

### 8.1 Phase 1 — Launch (Core)

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

### 8.2 Phase 2 — Compliance-native Neukunden-Akquise

11. New Client Acquisition System

**Zweck:** Neukundenakquise im gleichen operativen System, EU-native, compliance-nativ. Deckt Outbound-Intelligence, Warm-Path- und Referral-Mining aus dem Bestandskunden-Graphen, Tender-basierte Neukunden-Leads und Outreach-Sequenzen ab.

**Abgrenzung:** New Client Acquisition ersetzt Account Growth nicht, sondern ergänzt es. Account Growth bleibt Bestandskunden-fokussiert; New Client Acquisition arbeitet auf klar markierten Prospect-Datensätzen und übergibt qualifizierte Leads ans Opportunity-System.

**Erweiterungen der Phase-1-Module:**

- Account Growth: optionaler Prospect-Layer, datentechnisch getrennt von Bestandskunden
- Tenders (4.4): zusätzlicher Ingest-Pfad als Neukunden-Lead-Quelle
- Opportunity/Proposal/Contract: Aufnahme qualifizierter Leads aus Outreach-Sequenzen
- Governance & Audit: Consent- und Do-not-contact-Register, Rechtsbasis-Dokumentation, Enrichment-Quellen-Register

### 8.3 Phase 3 und später — Erweiterungs-Kandidaten

Diese Bereiche sind explizit nicht für Phase 1 oder Phase 2 vorgesehen. Sie bleiben so lange Expansion, bis ein Phase-Gate und ein konkreter Wedge sie in Core überführt.

- Events (Account- und Brand-Events, Einladungslogik)
- Recruiting als eigenständige Pipeline
- vollwertiges HR
- ERP-Funktionen jenseits des Handoffs
- Client Portal mit Schreibrechten
- autonome Tender-Submission
- vollständiges Legal Automation System

Ob und wann Einzelne in Core überführt werden, hängt von den Phase-Gates in 7.4, von Kundenreife und von regulatorischen Rahmenbedingungen ab.

---

## 9. Kritische Pushback-Punkte

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

6. **Wenn Neukunden-Akquise zu früh in Phase 1 kommt, verwässert der Launch-Fokus.**

   Phase 2 erweitert, ersetzt aber nicht. Die Reihenfolge ist bewusst: erst Bestandskundensystem produktiv, dann Neukunden. Andernfalls steht am Ende ein generisches Outbound-Tool neben einem halbfertigen Kernsystem.

7. **Wenn Neukunden-Akquise als reine Apollo-/Clay-Kopie gedacht wird, fehlt die Compliance-Tiefe.**

   Der Unterschied zum US-Outbound-Stack liegt in Datenhoheit, Consent-Disziplin und sauberer Rechtsbasis je Kampagne. Ohne diese drei Linien ist der Mehrwert gegenüber bestehenden Tools nicht verteidigbar.

---

## 10. Offene Annahmen

### Phasenübergreifend

- Primäre Zielgruppe ist DACH-IT- und Digitalisierungsberatung mit 30-200 Mitarbeitenden.
- Bestandskunden sind der stärkste Wachstumshebel.
- Das Produkt soll in Organisationen mit Betriebsrat einsetzbar sein.
- DATEV und ELSTER sind die relevanten Handoff-Systeme für die finanzielle Endverarbeitung.
- Tender-Intelligence ist relevant, aber nicht in allen Subsegmenten gleich wichtig.
- Native und integrierte Zeitbezüge sollen koexistieren, mit klarer Source-of-Truth-Regel pro Mandant.

### Phase 1 (Launch)

- Bestandskunden-Flows sind der Kaufgrund; Neukunden-Features wären in dieser Phase ein Positionierungsverlust.
- Compliance-Defaults (DSGVO, BetrVG, AI Act, E-Rechnung) werden schon in der Launch-Version produktiv erwartet.

### Phase 2 (Neukunden-Akquise)

- Phase 2 setzt produktive Phase-1-Nutzung mit belastbarem Audit-Trail bei Referenzkunden voraus.
- Neukunden-Akquise bleibt EU-datenhoheitlich: Enrichment nur aus mandantenspezifisch freigegebenen Quellen, keine stille Cross-tenant-Anreicherung.
- §7 UWG, DSGVO Art. 6(1)(f) und Art. 21 sind belastbar im Produkt abbildbar, ohne dass Beratungen eine eigene Rechtsabteilung bauen müssen.
- Prospect- und Bestandskundendaten bleiben im gesamten System technisch getrennt.

---

## 11. Offene Fragen für die nächste Version

### Phasenübergreifend

1. Was ist die verbindliche Source of Truth für Zeit je Mandant?
2. Welche Abschlussform gilt für Invoice Prep: Entwurf, Freigabe oder Export?
3. Wie weit soll Tender-Analyse für Teilmärkte nativ vs. integriert gehen?
4. Welche People-Analytics bleiben dauerhaft aggregiert?
5. Welche Contracting-Bausteine sind legal review only?
6. Welche Integrationen sind Launch-kritisch und welche nur nice-to-have?

### Phase 2 (Neukunden-Akquise)

7. Welche Phase-Gates machen den Übergang Phase 1 → Phase 2 produktiv messbar — quantitativ und qualitativ?
8. Welche Enrichment-Quellen sind EU-datenschutzrechtlich Default-tauglich, welche nur mit explizitem Tenant-Opt-in?
9. Wie wird §7 UWG (mutmaßliche Einwilligung) im Outreach-Default operationalisiert, ohne Beratungen in eine Grauzone zu schicken?
10. Wie weit greift der Bestandskunden-Stakeholder-Graph als Referral-Quelle, bevor Datenschutz-Grenzen berührt werden?
11. Welche Outreach-Kanäle (E-Mail, LinkedIn, Telefon) gehören in Phase 2 in den Produktscope und welche bleiben Integration?

### Phase 3 und später

12. Welche der Expansion-Kandidaten aus 8.3 haben einen eigenen Wedge, der Core-Promotion rechtfertigt?

---

## 12. Quellen und Belege

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
13. [§ 7 UWG (Unzumutbare Belästigungen)](https://www.gesetze-im-internet.de/uwg_2004/__7.html) — konsolidierte Fassung, abgerufen 18.04.2026; Grenzen unerbetener Werbung per E-Mail, Telefon und automatisierten Mitteln, einschließlich der Schranke mutmaßlicher Einwilligung im B2B-Kontext.
14. [DSGVO Art. 6 Abs. 1 lit. f (Berechtigtes Interesse)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679) — 27.04.2016, anwendbar seit 25.05.2018; Rechtsgrundlage für Prospect-Datenverarbeitung unter Interessenabwägung, relevant für Phase 2.
15. [DSGVO Art. 21 (Widerspruchsrecht)](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679) — 27.04.2016, anwendbar seit 25.05.2018; Grundlage für Do-not-contact-Register und Widerspruchshandling im Outreach.

---

## 13. Fazit

### Phasenübergreifende Wahrheit

- Consultry ist ein Steuerungssystem, nicht nur ein Assistenzsystem.
- Bestandskunden, People, Knowledge, Proposal, Delivery und Commercial Control gehören zusammen.
- DACH-Compliance ist ein Produkt-Default, kein Zusatzkapitel.
- People Planning und Contracting sind nur dann tragfähig, wenn Freigabe, Audit und klare Source-of-Truth-Regeln eingebaut sind.

### Phasenlogik

- Phase 1 bleibt der Launch-Wedge: Bestandskunden-OS mit produktiven Compliance-Defaults.
- Phase 2 erweitert das System um compliance-native Neukunden-Akquise — EU-datenhoheitlich, mit Consent-Register, Rechtsbasis-Dokumentation und Freigabe-Gates; nicht als Ersatz, sondern als Fortsetzung.
- Weitere Phasen werden nach demselben Muster ergänzt (Kapitel 7.5), ohne die Launch-Priorität zu verwässern.

Wenn diese Linien gehalten werden, wird das Produkt schärfer, verkaufbarer und deutlich glaubwürdiger — auch dann, wenn der Scope über Bestandskunden hinaus wächst.
