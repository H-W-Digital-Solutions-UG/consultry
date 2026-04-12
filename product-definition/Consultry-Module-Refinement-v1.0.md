# Consultry — Module Refinement v1.0

## Optimierung der Modulkonzepte als Vorstufe zur PRD-Schärfung

**Status:** Working Draft  
**Datum:** 11. April 2026  
**Bezug:** [Consultry PRD v3.1](./Consultry-PRD-v3.0-Final.md)

---

## 1. Ausgangspunkt

Das aktuelle PRD ist inhaltlich stark, aber die Modularchitektur ist noch nicht sauber genug für harte Produktentscheidungen.

Das Hauptproblem ist nicht, dass Features fehlen.  
Das Hauptproblem ist, dass **zu viele unterschiedliche Dinge als "Module" behandelt werden**, obwohl sie in Wahrheit:

- ein **Kernprodukt-Modul**
- eine **Plattform-Fähigkeit**
- ein **AI-Interaktionsmuster**
- oder ein **adjazentes Erweiterungsmodul**

sind.

Dadurch entstehen drei Risiken:

1. **Scope-Inflation**  
   18 Module wirken wie 18 gleichwertige Baupakete, obwohl sie das nicht sind.

2. **Unscharfe Produktdefinition**  
   Das Produkt wirkt gleichzeitig wie CRM, Staffing-Tool, Knowledge-System, Delivery-Tool, Financial Suite, Recruiting-Plattform und Event-OS.

3. **Falsche Priorisierung**  
   UI-Schichten, Plattform-Services und Differenzierungs-Features werden zu früh auf die gleiche Ebene gehoben wie die eigentlichen Kaufgründe.

---

## 2. Leitentscheidung

Consultry sollte **nicht** als Liste von 18 gleichrangigen Modulen geführt werden.

Die bessere Struktur ist:

- **6 Kernmodule**
- **4 Plattform- und Interaktionssysteme**
- **6 Erweiterungsmodule**

Das macht die Produktlogik schärfer:

- Kernmodule = Warum kauft jemand Consultry?
- Plattformsysteme = Was macht das Produkt benutzbar, steuerbar und AI-nativ?
- Erweiterungsmodule = Was erhöht ARPU, Tiefe und Lock-in, ist aber nicht der primäre Kaufgrund

---

## 3. Prinzipien für gute Modulkonzepte

### 3.1 Ein Modul folgt einem Nutzer-Job, nicht der internen Architektur

Ein gutes Modul beschreibt einen echten Arbeitsauftrag:

- "eine Opportunity qualifizieren"
- "das richtige Team finden"
- "ein Angebot erstellen"

Ein schlechtes Modul beschreibt nur Technik, UI oder Sammellogik:

- "AI Experience Layer"
- "Client-Facing Intelligence"
- "Notification Engine"

### 3.2 Ein Modul braucht einen klaren Input und einen klaren Output

Wenn ein Modul nicht sagen kann:

- was reinkommt
- was es verarbeitet
- was am Ende herauskommt

dann ist es kein Modul, sondern ein Capability-Bundle.

### 3.3 Plattform-Fähigkeiten sind keine Produktmodule

Collaboration, Notifications, Governance, Mobile, Integrationen und AI-Interaktionsmuster sind kritisch.  
Aber sie sind **Enablement**, nicht der eigentliche Kaufjob.

### 3.4 Dokument-Generierung ist keine eigene Produktdomäne

CVs, Proposals, Case Sheets und Vertragsentwürfe sind **Artefakte**, keine Domäne.  
Sie sollten dort hängen, wo der Nutzer sie erzeugt:

- im Staffing- und Angebotsprozess
- später im Contracting

### 3.5 People-Operations ist nicht gleich HR

Beraterdaten, Skills, Erfahrung und Verfügbarkeit sind Kernprodukt.  
Karrierepfade, Mentoring, Workload-Balance und Entwicklung sind wertvoll, aber kein Day-1-Kern.

### 3.6 Der Demand-Side und der Supply-Side müssen getrennt sein

Consultry wird nur scharf, wenn klar getrennt wird:

- **Demand-Side:** Markt, Accounts, Stakeholder, Signale, Opportunities
- **Supply-Side:** Berater, Skills, Verfügbarkeit, Wissen, Assets

Der eigentliche Produktwert entsteht in der **Übersetzung zwischen beiden Seiten**.

---

## 4. Empfohlene Zielarchitektur

## 4.1 Kernmodule

### 1. Client & Market Graph

**Job:** Relevante Zielkunden, Stakeholder, Beziehungen und Marktveränderungen sichtbar machen.

**Enthält:**

- Account-Stammdaten
- Stakeholder-Map
- Beziehungshistorie
- Warm Paths
- Signale und Enrichment
- einfache Opportunity-nahe Marktqualifizierung

**Ergebnis:**  
Aus einem Unternehmen wird ein bewertbarer Ziel-Account mit aktuellem Bedarfskontext.

### 2. Consultant Graph

**Job:** Berater als einsetzbare Expertise-Träger mit belastbarem Profil abbilden.

**Enthält:**

- Profilstammdaten
- Skills und Skill-Normalisierung
- Projekterfahrung
- Zertifizierungen
- Verfügbarkeit
- CV-Readiness

**Ergebnis:**  
Aus statischen Lebensläufen wird ein strukturiertes Angebots- und Staffing-Inventar.

### 3. Knowledge & Asset System

**Job:** Wiederverwendbares Beratungswissen in Angeboten und Projekten nutzbar machen.

**Enthält:**

- Methodologien
- Templates
- Referenzbausteine
- Playbooks
- Lessons Learned
- querybare Wissensbausteine

**Ergebnis:**  
Wissen ist nicht nur archiviert, sondern im Deal- und Delivery-Kontext einsetzbar.

### 4. Opportunity Workspace

**Job:** Anfragen und Signale schnell in qualifizierte Verkaufschancen übersetzen.

**Enthält:**

- Intake
- Auto-Extraktion
- Opportunity-Struktur
- Engagement Brief
- Pipeline-Status
- interne Kollaboration und Freigaben

**Ergebnis:**  
Aus E-Mail, Signal oder Ausschreibung wird eine qualifizierte, bearbeitbare Opportunity.

### 5. Staffing & Proposal Studio

**Job:** Das richtige Team zusammenstellen und daraus ein überzeugendes Angebot erzeugen.

**Enthält:**

- Team-Matching
- Variantenbildung
- Verfügbarkeitsabgleich
- CV-Auswahl und Anpassung
- Proposal-Struktur
- Pricing auf Angebotsniveau

**Ergebnis:**  
Aus einer Opportunity wird ein teambasiertes, plausibles und sendefähiges Angebot.

### 6. Delivery & Learning Loop

**Job:** Aus laufenden Projekten Risiken erkennen und verwertbares Wissen zurückführen.

**Enthält:**

- Milestones
- Health und Risikoindikatoren
- Kundenfeedback
- Projektabschluss
- Rückfluss in Knowledge und Consultant Graph

**Ergebnis:**  
Aus Delivery wird kein Datengrab, sondern ein Lern- und Qualitätskreislauf.

---

## 4.2 Plattform- und Interaktionssysteme

Diese Punkte bleiben wichtig, werden aber **nicht mehr als Produktmodule gezählt**.

### A. AI Interaction System

**Enthält:**

- Copilot
- Command Bar
- Canvasses
- Agenten-Dialoge

**Rolle:**  
Interaktionssystem über allen Kernmodulen, nicht eigenes Modul.

### B. Collaboration System

**Enthält:**

- Kommentare
- @Mentions
- Activity Feeds
- Freigaben

**Rolle:**  
Querschnittsfähigkeit für Opportunity, Angebot, Vertrag und Projekt.

### C. Notification System

**Enthält:**

- Alerts
- Priorisierung
- Inbox
- Kanalsteuerung

**Rolle:**  
Steuerung von Aufmerksamkeit, nicht eigener Kaufgrund.

### D. Governance & Integration System

**Enthält:**

- RBAC
- Multi-Entity
- Audit
- DSGVO/Consent
- Integrationen
- Datenresidenz

**Rolle:**  
Betriebsvoraussetzung und Enterprise-Enabler.

---

## 4.3 Erweiterungsmodule

Diese Themen sind sinnvoll, aber sollten in der Produktkommunikation nicht auf derselben Ebene wie die Kernmodule stehen.

### E1. Contracting & Legal Support

- Vertragsvorlagen
- Klausel-Bibliothek
- Review
- Redlining

### E2. Outreach & Campaigns

- personalisierte Ansprache
- Consent-Gating
- Sequenzen
- Landing Pages

### E3. Financial Intelligence

- DB-Sichten
- Forecasting
- Utilization-Betrachtung
- Pricing Intelligence

### E4. Client Portal

- Read-Only Projekttransparenz
- Dokumentfreigaben
- Pulse Checks

### E5. Recruiting & Onboarding

- Skill-Gap zu Hiring-Bedarf
- Kandidaten-Pipeline
- Onboarding-Agent

### E6. Events & Network Ops

- Event-Vorbereitung
- Kontaktcapture
- Post-Event-Follow-up
- ROI

---

## 5. Mapping vom aktuellen PRD auf die Zielarchitektur

| Aktuelles PRD-Modul | Empfohlene Zuordnung |
|---|---|
| 8.1 Consultant Knowledge Graph | Consultant Graph |
| 8.2 Workforce & Team Management | Consultant Graph |
| 8.3 Client & Account Management | Client & Market Graph |
| 8.4 Methodology & IP Asset Management | Knowledge & Asset System |
| 9.1 Market & Signal Intelligence | Client & Market Graph / Opportunity Workspace |
| 9.2 Events & Network Intelligence | Erweiterungsmodul E6 |
| 9.3 Talent Acquisition & Onboarding | Erweiterungsmodul E5 |
| 10.1 Opportunity Intelligence & Tracking | Opportunity Workspace |
| 10.2 Intelligent Staffing & Matching | Staffing & Proposal Studio |
| 10.3 Smart Service Offer Composition | Staffing & Proposal Studio |
| 10.4 Client-Facing Intelligence | Capability im Staffing & Proposal Studio |
| 10.5 Contract Intelligence & Legal Automation | Erweiterungsmodul E1 |
| 10.6 Outreach & Campaign Engine | Erweiterungsmodul E2 |
| 11.1 Project Execution & Delivery Intelligence | Delivery & Learning Loop |
| 11.2 Financial Intelligence & Controlling | Erweiterungsmodul E3 |
| 12.1 Collaboration & Activity | Collaboration System |
| 12.2 Client Portal | Erweiterungsmodul E4 |
| 12.3 Notification & Alert Engine | Notification System |
| 7. AI Experience Layer | AI Interaction System |

---

## 6. Was dadurch besser wird

### 6.1 Weniger Überschneidung

Aktuell verteilen sich dieselben Objekte über zu viele Module:

- Berater in 8.1, 8.2, 10.2, 10.4, 11.2
- Kunden in 8.3, 9.1, 10.1, 10.6
- Wissen in 8.4, 10.3, 11.1

Die Zielarchitektur reduziert diese Streuung.

### 6.2 Klare Produktbotschaft

Statt:

"Wir sind ein AI-native Consultancy CRM mit 18 Modulen"

wird die Botschaft:

"Wir verbinden Marktchancen, Berater-Expertise und Angebotsproduktion in einem System."

Das ist schärfer, verkaufbarer und besser merkbar.

### 6.3 Härtere Priorisierung

Die neue Struktur zwingt zu klaren Entscheidungen:

- Was ist Kern?
- Was ist Enablement?
- Was ist Expansion?

Genau das fehlt im aktuellen PRD noch.

---

## 7. Refinement der Kernmodule

Die folgenden Moduldefinitionen sind absichtlich strenger formuliert als im PRD.

Für jedes Modul werden festgelegt:

- Kernproblem
- Kernjob
- Primäre Nutzer
- Muss-in-V1
- Später / V2+
- Harte Nicht-Ziele

---

## 7.1 Client & Market Graph

### Kernproblem

Beratungen haben kein belastbares Bild darüber:

- bei welchen Accounts gerade echter Bedarf entsteht
- wer dort relevant ist
- ob ein belastbarer Zugang besteht

### Kernjob

`Relevante Zielaccounts mit aktuellem Bedarfskontext sichtbar machen.`

### Primäre Nutzer

- Katrin
- Thomas

### Muss in V1

- Account-Stammdaten
- Stakeholder-Erfassung
- Beziehungskontext
- Signaleingang
- einfache Priorisierung
- Warm-Path-Sicht
- Verlinkung zur Opportunity

### Später / V2+

- tiefe Discovery-Runs
- Wettbewerbslandschaften
- Branchensignal-Cluster
- Event-Teilnehmer-Matching
- automatische Relationship-Strength-Modelle

### Harte Nicht-Ziele

- vollwertiges Marketing-Automation-System
- Social-Selling-Plattform
- Event-Operating-System

### Modulurteil

Dieses Modul ist **Demand-Side-Grundlage**.  
Es darf nicht mit Outreach, Events und Campaigning aufgebläht werden.

---

## 7.2 Consultant Graph

### Kernproblem

Beraterprofile sind statisch, unvollständig und nicht staffing-tauglich.

### Kernjob

`Berater strukturiert, aktuell und staffing-fähig abbilden.`

### Primäre Nutzer

- Martina
- Katrin
- Stefan
- Lisa

### Muss in V1

- Profilstammdaten
- Skill-Normalisierung
- Projekterfahrung
- Zertifizierungen
- Verfügbarkeitsstatus
- CV-Import
- CV-Readiness

### Später / V2+

- Entwicklungspläne
- Karrierepfade
- Mentoring
- teamweite Kapazitätssimulation
- Workload-Balance
- Burnout-Frühwarnung

### Harte Nicht-Ziele

- Leistungsbewertung
- Gehaltslogik
- disziplinarische HR-Prozesse
- People-Analytics mit Ranking-Logik

### Modulurteil

Das ist **kein HR-Modul**.  
Es ist ein **Angebots-, Staffing- und Expertise-Modul**.

---

## 7.3 Knowledge & Asset System

### Kernproblem

Beratungswissen ist vorhanden, aber nicht in einer Form, die in echten Workflows wiederverwendbar ist.

### Kernjob

`Wissen so strukturieren, dass es im Deal- und Delivery-Kontext direkt nutzbar wird.`

### Primäre Nutzer

- Stefan
- Lisa
- Katrin

### Muss in V1

- Methodologien
- Templates
- Referenzbausteine
- einfache Knowledge-Suche
- AI-gestützte Retrieval-Antworten mit Quellen
- Verknüpfung zu Opportunities und Projekten

### Später / V2+

- automatische Wissensextraktion aus Deliverables
- generative Playbooks
- Qualitäts-Scoring von Wissensbausteinen
- proaktive Asset-Empfehlungen

### Harte Nicht-Ziele

- generisches Unternehmenswiki
- Dokumentenablage ohne Arbeitskontext
- vollautomatische Wissensproduktion ohne Review

### Modulurteil

Der Kern ist nicht "mehr Dokumente", sondern **weniger Neuerfinden**.

---

## 7.4 Opportunity Workspace

### Kernproblem

Anfragen und Signale werden zu spät, zu manuell und ohne belastbaren Kontext in Opportunities übersetzt.

### Kernjob

`Aus einem Eingangssignal schnell eine qualifizierte Verkaufschance machen.`

### Primäre Nutzer

- Katrin
- Thomas
- Martina

### Muss in V1

- Multi-Channel-Intake
- Auto-Extraktion
- Opportunity-Struktur
- Engagement Brief
- Statusführung
- Kommentare und Freigaben
- Übergabe an Staffing & Proposal

### Später / V2+

- Wettbewerbsrecherche on demand
- erweiterte Win-Probability
- Ausschreibungs-spezifische Flows
- tiefer Forecast-Input

### Harte Nicht-Ziele

- Salesforce-Ersatz für alle CRM-Jobs
- Marketing-Funnel-Plattform
- BI-Cockpit für alle Vertriebskennzahlen

### Modulurteil

Das ist wahrscheinlich das **wichtigste Kaufmodul**.  
Hier entscheidet sich, ob Consultry als Deal-Maschine verstanden wird.

---

## 7.5 Staffing & Proposal Studio

### Kernproblem

Das passende Team und ein plausibles Angebot entstehen heute zu langsam und zu personenabhängig.

### Kernjob

`Die beste Teamkonstellation in ein überzeugendes Angebot übersetzen.`

### Primäre Nutzer

- Katrin
- Thomas
- Stefan

### Muss in V1

- Matching auf Team-Ebene
- Verfügbarkeitsabgleich
- Variantenbildung
- CV-Selektion und Anpassung
- Proposal Draft
- Angebotsreview
- einfache Pricing-Betrachtung

### Später / V2+

- tiefe Margenoptimierung
- Benchmarks nach Segment
- komplexe Festpreis-/T&M-Szenarien
- Ausschreibungsantworten
- automatisierte Referenzkomposition

### Harte Nicht-Ziele

- vollwertiges PSA-Kalkulationstool
- komplexes Pricing-System für jede Vertragsart
- Dokumentenerstellung losgelöst vom Deal-Kontext

### Modulurteil

Hier liegt der **sichtbarste ROI**.  
Wenn dieser Bereich nicht hervorragend ist, wird der Rest des Produkts nicht tragen.

---

## 7.6 Delivery & Learning Loop

### Kernproblem

Nach dem Deal bricht die Produktlogik oft ab. Dadurch gehen Risikofrüherkennung und Lernrückfluss verloren.

### Kernjob

`Delivery-Signale sichtbar machen und verwertbares Lernen zurückführen.`

### Primäre Nutzer

- Stefan
- Thomas
- Dr. Mueller

### Muss in V1

- Milestone-Struktur
- einfache Health-Sicht
- Risikoindikatoren
- Kundenfeedback
- Projektabschluss-Review
- Rückfluss in Knowledge und Consultant Graph

### Später / V2+

- tiefes Scope-Change-Management
- Client Portal
- prädiktive Delivery-Risiken
- DB- und Forecast-Einbindung

### Harte Nicht-Ziele

- vollwertiges Projektmanagement-System
- vollständiges ERP/PSA
- eigene Zeiterfassung

### Modulurteil

Dieses Modul ist wichtig für Lock-in und Lernschleife, aber **nicht euer primärer Erstkaufgrund**.

---

## 8. Was aus den Erweiterungsmodulen werden sollte

## 8.1 Contracting & Legal Support

Wichtig, aber nicht Kern des Erstversprechens.  
Sollte als Erweiterungsmodul geführt werden mit enger Bindung an Opportunity und Angebot.

## 8.2 Outreach & Campaigns

Nicht als Day-1-Kern verkaufen.  
Viele Beratungen leben zunächst auch mit manuellem Versand, wenn Briefing, Team und Angebot schon stark besser sind.

## 8.3 Financial Intelligence

Strategisch hochrelevant, aber integrations- und datenqualitätskritisch.  
Sollte erst dann hart positioniert werden, wenn ihr belastbare Datenpipelines habt.

## 8.4 Client Portal

Guter Differenzierer, aber kein Kernjob für den initialen Kauf.  
Eher Lock-in und Qualitätswahrnehmung im späteren Ausbau.

## 8.5 Recruiting & Onboarding

Nur dann stark machen, wenn ihr zuerst Skill-Gaps und Kapazitätslogik überzeugend löst.  
Sonst wirkt es wie ein zweites Produkt.

## 8.6 Events & Network Ops

DACH-relevant, aber hoch optional.  
Das gehört klar in eine spätere Expansion und nicht in die Kernbotschaft.

---

## 9. Empfohlene V1-Grenze

Wenn Consultry im Markt scharf starten soll, sollte V1 in der Außenwirkung nur um sechs Dinge kreisen:

1. Accounts und Signale verstehen  
2. Berater-Expertise strukturiert erfassen  
3. Wissen wiederverwendbar machen  
4. Opportunities qualifizieren  
5. Teams und Angebote erzeugen  
6. Delivery-Learnings zurückführen

Alles andere sollte in V1 entweder:

- unsichtbare Infrastruktur sein
- bewusst leichtgewichtig bleiben
- oder klar als nächster Ausbau benannt werden

---

## 10. Harte Empfehlungen für das PRD-Refinement

### Empfehlung 1

Die Formulierung **"18 Module"** aus der Primärkommunikation entfernen.

### Empfehlung 2

`AI Experience Layer`, `Collaboration`, `Notifications`, `Governance` nicht mehr als gleichrangige Produktmodule behandeln.

### Empfehlung 3

`Client-Facing Intelligence` als eigenes Modul auflösen und in `Staffing & Proposal Studio` integrieren.

### Empfehlung 4

`Consultant Knowledge Graph` und `Workforce & Team Management` in ein gemeinsames Kernkonzept überführen:

`Consultant Graph`

mit klarer V1/V2-Trennung.

### Empfehlung 5

`Client & Account Management` und die Opportunity-nahe Teile von `Market & Signal Intelligence` als gemeinsame Demand-Side-Domäne denken.

### Empfehlung 6

`Financial Intelligence`, `Client Portal`, `Contracting`, `Recruiting`, `Events`, `Outreach` in der Produktbotschaft als **Expansion** statt **Kern** markieren.

---

## 11. Endurteil

Die aktuelle PRD-Struktur ist zu breit, aber nicht falsch.  
Sie enthält die richtigen Bausteine, nur in der falschen Hierarchie.

Die zentrale Produktdefinition sollte künftig nicht lauten:

`Consultry hat 18 Module entlang des gesamten Beratungs-Lifecycles.`

Sondern:

`Consultry verbindet Marktchancen, Berater-Expertise, wiederverwendbares Wissen und Angebotsproduktion in einem AI-nativen System für Beratungen.`

Das ist der schärfere Kern.  
Von dort aus kann der Rest wachsen.

---

## 12. Interaktives Refinement — Runde 1 Entscheidungen

Stand: basierend auf Nutzerentscheidungen vom 12. April 2026.

### 12.1 Getroffene Richtungsentscheidungen

1. **Bestandskunden sind primär.**  
   Der Kern von Demand ist nicht generisches Lead-Gen, sondern:

   - Account-Expansion
   - Warm Paths
   - Folgeprojekte
   - Cross-Sell / Upsell
   - Trigger bei bestehenden Kunden

2. **Forecasting geht bis auf Berater-Ebene.**  
   Forecasting ist nicht nur Practice- oder Team-Planung, sondern soll einzelne Berater, individuelle Verfügbarkeit, Leerstände, Überschneidungen und Ineffizienzen sichtbar machen.

3. **Allocation endet nicht bei Staffing.**  
   Das Produkt soll nicht nur beantworten:

   `Wer passt auf welches Projekt?`

   sondern auch:

   `Wer arbeitet wann woran, mit welcher voraussichtlichen Dauer, mit welchen Konflikten und welcher Vorbereitung?`

4. **Commercial Control soll tief sein.**  
   Gewünscht ist nicht nur Pricing oder DB-light, sondern ein vollständiger kommerzieller Steuerungsbereich:

   - T&M / Zeitbezug
   - Spesen / Reisekosten
   - Vertragsbezug
   - Rechnungsbezug
   - Fremdleistungen
   - Subscription- und Infrastrukturkosten
   - mögliche Kostenweitergabe an Kunden

5. **Ausschreibungen sollen intelligent company-knowledge-basiert verarbeitet werden.**  
   Nicht als isolierter Tender-Scanner, sondern als qualifizierte Opportunity-Klasse, die gegen Angebotswissen, Referenzen, Skills und Delivery-Historie bewertet wird.

6. **Contracting ist Kernbestandteil.**  
   Verträge sind nicht nur administratives Add-on, sondern Teil des Operating Models.

7. **Practice Leads sind echte Steuerungsrollen.**  
   Sie verantworten nicht nur Forecasting, sondern auch:

   - Skill-Entwicklungspläne
   - Staffing-Freigaben
   - Kapazität
   - teilweise Wissensverantwortung

8. **Knowledge Ownership ist verteilt.**  
   Wissen wird nicht zentral redaktionell „besessen", sondern liegt bei den fachlich passendsten Experten oder bei den aktuell relevant allokierten Beratern.

---

## 13. Konsequenz: Consultry ist mehr als ein Deal-System

Mit diesen Entscheidungen verschiebt sich Consultry klar von:

`Demand + Staffing + Proposal`

zu:

`Operating System für Demand, Expertise, Allocation, Delivery und Commercial Control`

Das ist strategisch stark, erhöht aber drei Risiken sofort:

### 13.1 Scope-Risiko

Wenn Commercial Control, Contracting und beratergenaues Forecasting Kern werden, wächst das Produkt faktisch in Richtung:

- PSA
- Resource Management
- Vertrags- und Angebotssteuerung
- Project Control
- Finance Ops

Das ist machbar, aber nicht mehr „leichte CRM-Erweiterung mit AI".

### 13.2 Compliance-Risiko

Forecasting und Allocation bis auf Personenebene liegen nah an:

- Leistungs- und Verhaltensmonitoring
- Mitarbeiterprofiling
- erklärungsbedürftigen AI-Empfehlungen
- Mitbestimmungspflichten

Das muss produktseitig von Anfang an so modelliert werden, dass Empfehlungen erklärbar, korrigierbar und freigabepflichtig sind.

### 13.3 Source-of-Truth-Risiko

Sobald ihr „alles" im Commercial-Bereich wollt, müsst ihr beantworten:

- Was ist führendes System?
- Was kommt aus Integration?
- Was wird in Consultry originär erzeugt?
- Was darf niemals doppelt gepflegt werden?

Ohne diese Klarheit baut ihr Datenkonflikte statt Operating System.

---

## 14. Modularchitektur v2

Basierend auf den Antworten ergibt sich folgende schärfere Modulstruktur.

## 14.1 Core Systems

### 1. Account Growth System

**Kernjob:**  
Bestehende Kunden systematisch auf Folgegeschäft, Cross-Sell, Trigger und passende nächste Initiativen auswerten.

**Enthält:**

- Account-Stammdaten
- Stakeholder
- Warm Paths
- Relationship History
- Trigger bei Bestandskunden
- Value Proposition je Account
- Opportunity-Anlage aus Bestand

**Wichtig:**  
Net-New-Discovery bleibt möglich, aber nicht Kern der Positionierung.

### 2. Consultant & Team System

**Kernjob:**  
Berater, Teams, Verfügbarkeit, Skills, Zertifikate und Knowledge Leadership so abbilden, dass Staffing, Forecasting und Entwicklung steuerbar werden.

**Enthält:**

- Profile
- Skills
- Zertifikate
- Projekterfahrung
- Teamzugehörigkeiten
- Practice-Strukturen
- Knowledge Leadership
- Skill-Entwicklungspläne

**Wichtig:**  
Persönlichkeitsmodelle oder „People Scoring" sind davon getrennt zu halten.

### 3. Knowledge System

**Kernjob:**  
Wiederverwendbares Beratungswissen in Angebot, Delivery, Onboarding und Ausschreibungen einsetzbar machen.

**Enthält:**

- Assets
- Methoden
- Referenzen
- Lessons Learned
- Expertenwissen
- Onboarding-Grundlagen
- Retrieval und Sourcing

**Wichtig:**  
Knowledge Ownership ist verteilt, aber Governance bleibt nötig.

### 4. Opportunity, Proposal & Contract System

**Kernjob:**  
Aus Anfrage, Trigger oder Ausschreibung eine belastbare Opportunity, ein plausibles Angebot und einen verhandelbaren Vertrag machen.

**Enthält:**

- Intake
- Qualifizierung
- Engagement Brief
- Teamvorschlag
- CVs
- Proposal
- Pricing im Deal-Kontext
- Vertrags-Templates
- Vertragsanalyse
- Vertragsstatus

**Wichtig:**  
Contracting gehört in diese Kette und nicht in ein isoliertes Nebenmodul.

### 5. Allocation & Delivery Control System

**Kernjob:**  
Nicht nur Projekte staffen, sondern laufende Arbeit, Zeitfenster, Konflikte, Leerlauf und Delivery-Risiken aktiv steuern.

**Enthält:**

- Soft vs. Hard Allocation
- Timeline-Sicht
- Projekt- und Work-Package-Zuordnung
- Konflikt- und Überlappungserkennung
- empfohlene Zeitblöcke
- Delivery Health
- Reporting
- Projektabschluss und Lernrückfluss

**Wichtig:**  
Hier beginnt das echte Operating-System-Versprechen.

### 6. Commercial Control System

**Kernjob:**  
Kommerzielle Realität von Beratungsarbeit steuerbar machen: Preise, Zeiten, Spesen, Rechnungsbezug, Fremdleistungen und kundenbezogene Kostenstruktur.

**Enthält:**

- Pricing
- T&M
- Festpreisbezug
- Reise- und Spesenlogik
- Rechnungsbezug
- Kostenstellen- und Projektbezug
- Fremdleistungen / Subcontractors
- Subscription- und Infrastrukturkosten
- Kostenweitergabe / Rebilling-Logik

**Wichtig:**  
Das ist kein vollwertiges ERP, aber deutlich mehr als ein Dashboard.

---

## 14.2 Platform Systems

### A. AI Workspace System

- Copilot
- Command Bar
- Canvasses
- Agentenläufe
- Erklärungen / Quellen / Review

### B. Collaboration & Approval System

- Kommentare
- Freigaben
- Handoffs
- Aktivitätsverlauf

### C. Governance & Compliance System

- Rollen und Rechte
- Audit Trail
- Tenant-Grenzen
- Works-Council-Mode
- DSGVO / Retention / Export
- AI-Transparenz

### D. Integration System

- Kalender
- E-Mail
- HR
- Finance
- DMS
- Ausschreibungsquellen
- Cloud- / Subscription-Quellen

---

## 15. Harte Strukturentscheidungen

### 15.1 Bestandskunden vor Neukunden

Das Demand-Modell muss standardmäßig so aufgebaut sein:

- bestehender Kunde
- bekannte Stakeholder
- neue Trigger
- White-Space-Analyse
- nächstbeste Initiative

Nicht so:

- große Net-New-Lead-Datenbank
- generischer Prospecting-Flow

### 15.2 Allocation ist ein eigenständiger Kern

`Staffing` reicht als Begriff nicht mehr.

Sobald ihr beantworten wollt:

- wer wann woran arbeitet
- wo Konflikte entstehen
- wo Leerlauf entsteht
- wie Zeit realistisch auf mehrere Projekte verteilt wird

braucht ihr ein eigenes `Allocation & Delivery Control System`.

### 15.3 Commercial Control braucht klare Systemgrenzen

Wenn „alles" gewünscht ist, muss explizit getrennt werden zwischen:

- **steuernder Logik in Consultry**
- **ursprünglicher Erfassung in Drittsystemen**
- **abrechnungs- und buchhaltungsrelevanter Endverarbeitung**

Sonst entsteht ein inkonsistentes Halbsystem.

### 15.4 Contracting bleibt Kern, aber nicht Rechtsberatung

Verträge sind Kernbestandteil der Opportunity-to-Delivery-Kette.  
Trotzdem muss produktseitig gelten:

- Review statt Rechtsrat
- Vorschlag statt autonomer Finalisierung
- Freigabepflicht statt automatischer Verhandlung

---

## 16. Was weiterhin kritisch bleibt

Die Antworten machen das Produkt schärfer, aber nicht kleiner.

Das heißt:

- Die Positionierung wird besser
- Der tatsächliche Build-Scope wird härter

Wenn diese Linie beibehalten wird, muss die spätere Roadmap nicht auf „weniger wichtig" fokussieren, sondern auf:

- welches System zuerst als führende Steuerung funktioniert
- welche Bereiche zunächst nur integriert, nicht nativ gebaut werden

---

## 17. Nächste Klärungsrunde

Um aus dieser Struktur eine belastbare PRD-v2-Modellierung zu machen, müssen als Nächstes fünf Architekturfragen entschieden werden:

1. **Was ist das führende System für Zeitdaten?**  
   Consultry selbst oder ausschließlich Ingest aus Drittsystemen?

2. **Was ist das führende System für Rechnungen?**  
   Drafting und Steuerung in Consultry oder nur Übergabe an DATEV/Buchhaltung?

3. **Wie fein soll Allocation modelliert sein?**  
   Projekt-Ebene, Work-Package-Ebene oder echte Task-Ebene?

4. **Wie stark dürfen AI-Empfehlungen auf Personenebene wirken?**  
   Nur Vorschlag oder operative Standardplanung mit menschlicher Freigabe?

5. **Wie weit ist Contracting Kernprozess?**  
   Nur Review und Drafting oder auch Approval Routing, Versioning und wirtschaftliche Auswirkungsanalyse?

---

## 18. Interaktives Refinement — Runde 2 Entscheidungen

Stand: basierend auf Nutzerentscheidungen vom 12. April 2026.

### 18.1 Getroffene Architekturentscheidungen

1. **Zeitdaten können nativ oder integriert entstehen.**

   Consultry soll Zeitbezug nicht nur konsumieren, sondern optional selbst erfassen können.

   Gleichzeitig sollen Integrationen möglich sein, u. a. mit:

   - bestehenden Zeitsystemen
   - Jira
   - GitHub
   - weiteren operativen Quellen

   Ziel ist nicht nur Erfassung, sondern:

   - intelligent vorbereitete Time Entries
   - kontextbezogene Vorschläge
   - bessere Reportings
   - bessere Delivery- und Abrechnungslogik

2. **Rechnungslogik bleibt angebunden, nicht führend.**

   Rechnungs- und steuerrelevante Endverarbeitung soll über:

   - DATEV
   - ELSTER

   laufen.

   Consultry steuert also vorbereitend, aber ist nicht das finale steuerrechtliche Hauptsystem.

3. **Allocation bleibt auf Projekt-Ebene.**

   Keine echte Task-Engine als Kern.

   Das System soll steuern:

   - welcher Berater auf welchem Projekt
   - mit welchem erwarteten Zeitanteil
   - in welchem Zeitraum
   - mit welchen Konflikten oder Lücken

   aber nicht als generisches Task-Management-System modelliert werden.

4. **Personenplanung darf Vorschlag und operative Standardplanung sein.**

   Gewünscht ist:

   - Entscheidungsunterstützung
   - aber auch operative Planungslogik

   allerdings immer mit menschlicher Freigabe und Nachvollziehbarkeit.

5. **Contracting soll maximal intelligent sein, aber approval-pflichtig bleiben.**

   Gewünscht ist:

   - Review
   - Drafting
   - Versioning
   - Routing
   - wirtschaftliche Auswirkungsanalyse
   - möglichst tiefe Unterstützung

   aber kein autonomer Finalprozess ohne Freigabe.

---

## 19. Konsequenzen aus Runde 2

### 19.1 Die bisherige PRD-Nichtziel-Definition zur Zeiterfassung ist nicht mehr haltbar

Das bisherige PRD sagt:

- eigene Zeiterfassung ist out of scope

Diese Aussage ist mit der neuen Zielrichtung nicht mehr konsistent.

Die neue konsistente Formulierung wäre eher:

`Consultry ist nicht primär ein generisches Zeiterfassungssystem, unterstützt aber native und integrierte Zeitbezüge dort, wo sie für Allocation, Reporting, Commercial Control und Billing relevant sind.`

Das ist ein fundamentaler Unterschied.

### 19.2 Consultry wird zu einem System mit eigenem Transaktionskern

Spätestens mit:

- optional nativer Zeiterfassung
- projektbezogener Allocation
- Contracting-Core
- Commercial Control
- Approval-Flows

ist Consultry nicht nur Analyse- oder Assistenzsystem, sondern teilweise operatives Ursprungssystem.

Das hat Folgen für:

- Datenmodell
- Audit
- Rechtekonzept
- Prozessverbindlichkeit
- Integrationsdesign

### 19.3 Projekt-Ebene ist ein guter Schnitt

Die Entscheidung gegen Task-Ebene ist sinnvoll.

Warum:

- deutlich geringerer Scope
- näher am echten Beratungssteuerungsmodell
- weniger Konflikt mit Jira/Asana/ClickUp-artigen Tools
- bessere Passung zu Forecasting, T&M, Billing und Auslastung

Das Produkt sollte deshalb mit folgender Einheit rechnen:

- Projekt
- Teilprojekt / Workstream optional
- Zeitanteil / Zuordnung

aber nicht mit atomaren Aufgaben als Kernobjekt.

### 19.4 Personenplanung braucht harte Produktleitplanken

Wenn Consultry nicht nur Vorschläge macht, sondern operative Standardplanung erlaubt, müssen als Defaults gelten:

- keine Black Box
- jede Empfehlung mit Erklärung
- menschliche Freigabe
- Audit Trail
- Änderbarkeit
- klare Trennung zwischen Empfehlung und Entscheidung

Gerade im DACH-Kontext ist das nicht optional.

### 19.5 Contracting gehört jetzt in den transaktionalen Kern

Contracting ist mit dieser Entscheidung kein „smartes Nebenmodul" mehr, sondern Teil des wirtschaftlichen Backbone.

Es sollte daher funktional gekoppelt sein an:

- Opportunity
- Angebot
- Pricing
- Freigaben
- Risiko- und Abweichungsanalyse
- Billing- und Leistungslogik

---

## 20. Modularchitektur v3

Basierend auf Runde 1 und 2 ergibt sich folgende robustere Zielarchitektur.

## 20.1 Core Operating Systems

### 1. Account Growth & Opportunity System

**Zweck:**  
Bestandskunden, Trigger, Stakeholder, Warm Paths und neue Chancen in qualifizierte Opportunities überführen.

**Kernobjekte:**

- Account
- Stakeholder
- Relationship
- Trigger
- Opportunity
- Ausschreibung optional als Opportunity-Typ

### 2. Consultant, Team & Capacity System

**Zweck:**  
Berater, Teams, Skills, Zertifikate, Knowledge Leadership, Verfügbarkeit und Forecasting steuerbar machen.

**Kernobjekte:**

- Consultant
- Team
- Practice
- Skill
- Certification
- Availability
- Capacity Forecast

### 3. Knowledge & Reuse System

**Zweck:**  
Beratungswissen, Referenzen, Methoden und Onboarding-Grundlagen nutzbar und wiederverwendbar machen.

**Kernobjekte:**

- Asset
- Method
- Reference
- Lesson
- Expert Ownership

### 4. Proposal & Contract System

**Zweck:**  
Opportunitys in Angebot, Vertragsvorschlag, Vertragsreview und genehmigungsfähige kommerzielle Entscheidungen überführen.

**Kernobjekte:**

- Engagement Brief
- Proposal
- CV Package
- Pricing Draft
- Contract Draft
- Clause
- Approval

### 5. Allocation & Delivery System

**Zweck:**  
Projektbezogene Zuordnung, Zeitanteile, Konflikte, Leerlauf, Delivery Health und Lernrückfluss steuern.

**Kernobjekte:**

- Project
- Workstream optional
- Allocation
- Time Share
- Delivery Health
- Milestone
- Project Feedback

### 6. Commercial Control & Billing Prep System

**Zweck:**  
Zeit-, Spesen-, Leistungs-, Vertrags- und Kostenbezüge für Reporting, Rebilling und Rechnungsübergabe vorbereiten.

**Kernobjekte:**

- Time Entry
- Expense
- Billable Item
- Subscription Cost
- Infra Cost
- Rebilling Rule
- Invoice Preparation Record

---

## 20.2 Platform Backbone

### A. AI Workspace

- Copilot
- Command Bar
- Canvasses
- agentische Recherchen
- Erklärungen und Quellen

### B. Collaboration & Approvals

- Kommentare
- Erwähnungen
- Routing
- Freigaben
- Verlauf

### C. Governance, Compliance & Audit

- Rollen
- Rechte
- Audit Trail
- Works-Council-Mode
- AI-Labeling
- Retention
- Tenant Isolation

### D. Integration Backbone

- Zeitquellen
- Jira
- GitHub
- Kalender
- HR
- DATEV / ELSTER
- DMS / E-Mail
- Tender-Quellen
- optionale Cloud-/Subscription-Quellen

---

## 21. Neue harte Scope-Grenzen

Damit das Produkt trotz Tiefe kontrollierbar bleibt, müssen die Grenzen explizit so gesetzt werden:

### 21.1 Was Consultry ist

- Operating System für Beratungssteuerung
- projektbezogene Allocation-Steuerung
- Angebots- und Vertragssteuerung
- vorbereitendes Commercial Control
- Wissens- und Beratersteuerung

### 21.2 Was Consultry nicht ist

- vollwertiges ERP
- Payroll-System
- generische Task-Management-Suite
- autonomer Legal Counsel
- finale Steuer- oder Buchhaltungsinstanz

### 21.3 Was „beides" bei Zeitdaten praktisch heißen muss

Wenn native und integrierte Zeiterfassung beide unterstützt werden, braucht ihr ein klares Prioritätsmodell:

- welches System erzeugt den Primärdatensatz?
- wie werden Konflikte aufgelöst?
- welche Quelle ist abrechnungsrelevant?
- wie werden Vorschläge von echten Einträgen getrennt?

Ohne diese Regeln wird das Produkt unzuverlässig.

---

## 22. Kritischer Produktkommentar

Die Entscheidungen aus Runde 2 machen das Produkt strategisch stärker, aber operativ anspruchsvoller.

Positiv:

- Operating-System-These wird glaubwürdig
- Projekt- und Commercial-Nutzen werden deutlich konkreter
- DACH-Beratungsrealität wird besser getroffen

Negativ:

- Scope steigt nochmals
- Daten- und Rechtekonflikte steigen
- das Produkt braucht früher robuste System-of-Record-Entscheidungen

Das bedeutet:

Die nächste PRD-Version darf nicht mehr primär feature-orientiert geschrieben werden.  
Sie muss von **Systemen, führenden Datenquellen, Freigabepunkten und Verantwortungsgrenzen** ausgehen.

---

## 23. Nächste Klärungsrunde

Die nächste sinnvolle Runde sollte genau diese fünf Punkte entscheiden:

1. **Was ist der Primärdatensatz für Zeit je Projekt?**
2. **Wie werden manuelle, vorgeschlagene und integrierte Zeitdaten zusammengeführt?**
3. **Welche Vertragsarten sind wirklich Kern in V1?**
4. **Welche Commercial-Control-Daten werden nativ geführt und welche nur importiert?**
5. **Welche Berater-bezogenen Ansichten sind standardmäßig individuell sichtbar und welche nur aggregiert?**
