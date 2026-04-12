# Kritische Analyse: PRD v3.0 vs. Target Personas v1.0 & User Journeys v1.0

**Datum:** 31. März 2026
**Grundlage:** Consultry PRD v3.0-Final, Target Personas v1.0, User Journeys v1.0
**Autor:** Analyse-Review

---

## 1. Gesamtbewertung

Die drei Dokumente bilden ein bemerkenswert kohärentes Dokumentationspaket. PRD, Personas und Journeys erzählen dieselbe Geschichte mit dem gleichen Beispielunternehmen (mpl Consulting, 85 Berater, RetailCorp-Opportunity). Das ist eine Stärke — aber auch ein Risiko: die Dokumente validieren sich gegenseitig, statt sich gegenseitig herauszufordern.

Die kritische Analyse deckt sechs Kategorien ab: Journey-Abdeckungslücken, Persona-PRD-Inkonsistenzen, AI Experience Layer Diskrepanzen, Realitäts-Checks zur Build-Ambition, Mobile-Strategy-Widersprüche und fehlende Fehlerpfade.

---

## 2. Journey-Abdeckungslücken: Was das PRD verspricht, aber keine Journey abdeckt

Das PRD definiert 18 Module + AI Experience Layer. Die User Journeys decken 5 Journeys ab (Signal→Angebot, Staffing, Projekt-Risiko, Onboarding, Projektabschluss→Knowledge). Das bedeutet: große Teile des Produkts haben keinen validierten Nutzerfluss.

### 2.1 Fehlende Journeys mit hohem Risiko

**Financial Intelligence (Modul 15) — Keine Journey vorhanden.**
Thomas' Persona beschreibt ihn als den primären Consumer von DB-Analysen, Forecasts und Utilization-Daten. Er verbringt laut Persona 30 Min/Woche mit Financial Intelligence. Aber keine einzige Journey zeigt, wie er tatsächlich mit dem Financial-Intelligence-Modul interagiert. Die Fragen bleiben offen: Wie navigiert Thomas von einer Anomalie im Dashboard zum Drill-Down? Wie sieht der Forecast-Review-Flow aus? Wie interagiert Financial Intelligence mit dem Capacity Planner? Gerade weil Thomas der "Scan, nicht Such"-Nutzer ist, muss der Financial-Flow exakt designed werden — Anomalien müssen ihm entgegenspringen, nicht gesucht werden.

**Contract Intelligence (Modul 12) — Keine Journey vorhanden.**
Das PRD beschreibt einen Vertrags-Canvas mit Rot/Gelb/Grün-Klauselanalyse, Redlining, Verhandlungs-Tracking und einer Klausel-Bibliothek. Die Persona-Daten zeigen: Thomas reviewt Verträge 1x/Woche (15 Min), Martina koordiniert Verträge 3–5x/Woche (30 Min). Aber es gibt keine Journey, die zeigt: Wie kommt ein Kunden-Vertragsentwurf ins System? Wie sieht der Review-Flow zwischen Katrin, Thomas und ggf. externer Rechtsabteilung aus? Wie funktioniert das Redlining-Handoff? Gerade die Interaktion mit externen Parteien (Kundenvertrag kommt rein → internes Review → Gegenvorschlag → Ping-Pong) ist komplex und unvalidiert.

**Methodology & Knowledge Engine (Modul 4) — Nur fragmentarisch abgedeckt.**
Stefans Key Journey (Knowledge-Anfrage → Checkliste) und Journey 5 (Projektabschluss → Wissensrückfluss) decken den Q/A-Agent und das Upload-Szenario ab. Aber die Persona-Daten zeigen, dass Lisa ebenfalls 2–3x/Woche den Knowledge-Agent nutzt — und ihre Fragen sind anders als Stefans ("Workshop-Format für SAP-Rollout" vs. "Datenmigrations-Checkliste"). Lisas Knowledge-Nutzung hat keine Journey. Auch fehlt komplett: Wie verwaltet jemand aktiv die Knowledge-Base? Wer kuratiert, wer prüft Qualität, wer taggt?

**Events & Network Intelligence (Modul 6) — Keine Journey vorhanden.**
Das PRD beschreibt Pre-Event (Teilnehmerlisten-Matching, Briefing-Generierung, Landing-Pages), Live-Event (Badge-Scans, Mobile-First-Notizen), und Post-Event (Follow-ups, ROI). Die Personas erwähnen Events nur am Rande (Katrin ★★, Thomas ★, Stefan ★). Es fehlt eine Journey, die zeigt: Wie bereitet sich Katrin auf die Hannover Messe vor? Wie erfasst sie Live-Kontakte? Wie wird der Event-ROI sichtbar? Events sind laut PRD ein "zentraler Akquisekanal" im DACH-Markt — aber es gibt keinen einzigen Flow dafür.

**Talent Acquisition (Modul 7) — Nur Onboarding abgedeckt (Journey 4), nicht Recruiting.**
Journey 4 zeigt Martinas Admin-Onboarding-Flow und Tims Agent-Dialog. Aber der Recruiting-Funnel selbst fehlt: Wie kommt der Bedarf zustande (Skill-Gap → Recruiting-Trigger)? Wie sieht die Kandidaten-Pipeline aus? Wie interagiert das System mit StepStone/Gulp? Das PRD verspricht Integration mit Jobportalen und Kandidaten-Matching — aber kein einziger Screen zeigt das.

### 2.2 Fehlende Journeys mit mittlerem Risiko

**Market & Signal Intelligence Discovery-Engine** — Journey 1 zeigt den Signal-Feed (eingehende Signale), aber nicht den proaktiven Discovery-Run ("Finde mir 20 Unternehmen im regulierten Sektor die von NIS2 betroffen sind"). Das ist ein fundamental anderer Use Case: explorative Suche vs. reaktive Signal-Bewertung.

**Client Portal Initial Setup** — Journey 3 zeigt Dr. Müller als Empfänger, aber nicht wie Stefan den Magic Link generiert, konfiguriert (welche Infos sichtbar?) und an den Kunden sendet. Das ist ein Admin-Flow, der schiefgehen kann.

**Reporting & Dashboards** — Keine Journey für Martinas Report-Generierung (sie macht das 2–3x/Woche, 30 Min). Keine Journey für Thomas' Forecast-Review vor Board-Meetings. Das Surface-Mapping zeigt: Financial Intelligence ist ★★★ für Thomas und ★★ für Martina — ohne einen einzigen definierten Flow.

---

## 3. Persona-PRD-Inkonsistenzen

### 3.1 Martinas Rolle ist im PRD unterrepräsentiert

Die Persona definiert Martina als Daten-Garantin, die 2–4 Stunden täglich im System arbeitet. Ihre Surfaces: Settings/Admin (30 Min/Tag), Berater-Profile (60 Min/Tag), Vertragsverwaltung (30 Min, 3–5x/Woche), Reporting (30 Min, 2–3x/Woche), Angebots-Support (20 Min, 2–3x/Woche), Financial Intelligence (30 Min/Woche).

Das PRD erwähnt Martina in genau einem Satz (Persona-Abschnitt Sektion 4). Kein einziges Modul definiert einen expliziten Admin/Backoffice-Flow. Die Persona sagt: "Bulk-Operationen sind Pflicht" — das PRD erwähnt Bulk-Operationen nirgends explizit als Feature. Die Persona sagt: "Tabellen-View als Standard für Admin" — das PRD definiert keine Admin-spezifische View-Strategie. Die Persona sagt: "Export muss perfekt sein" — das PRD erwähnt Export nur am Rande (CV-Export, Report-Export).

**Bewertung:** Martina ist der unsichtbare Rückgrat-Nutzer. Wenn das Produkt für sie nicht funktioniert, erodiert die Datenqualität — und damit die Qualität aller AI-Features. Ihr Nutzungsmuster (Tabellen, Bulk-Ops, Importe, Exporte, Datenvalidierung) ist in keinem Modul als First-Class-Feature definiert.

### 3.2 Lisas Profil-Update-Flow ist unterschätzt

Die Persona definiert Lisa als Leichtnutzerin (15–30 Min/Tag), deren Kerninteraktion "Profil pflegen" und "Karriere verfolgen" ist. Die Design-Implikation #1 lautet: "Proaktive Nudges statt Pflege-Pflicht." Die Implikation #2: "Profil-Updates per Dialog, nicht per Formular."

Das PRD definiert den Consultant Knowledge Graph (8.1) mit Auto-Anreicherung und den Onboarding-Agent. Aber der laufende Profil-Pflege-Dialog nach dem Onboarding ist nicht spezifiziert. Journey 4 (Onboarding) zeigt den initialen Dialog — aber was passiert in Monat 3, wenn Lisa ein neues Zertifikat hat? Die Persona zeigt einen Flow ("Füge mein PROSCI-Zertifikat hinzu"), aber im PRD fehlt die Spezifikation eines "Profil-Update-Agent" als laufende Interaktion. Es gibt den Onboarding-Agent, aber keinen "Profil-Maintenance-Agent".

### 3.3 Thomas' Cockpit-View ist nicht in den Journeys validiert

Thomas' Persona definiert: "Cockpit muss auf einen Blick funktionieren. 4–6 KPI-Karten, Anomalie-Highlighting, keine Tabellen. Thomas scannt in 30 Sekunden." Seine Key Journey zeigt eine Morgen-Routine mit Cockpit-Check (Auslastung 78%, Pipeline +180K€, 1 Risiko gelb, 2 Berater frei).

Aber die User Journeys definieren kein Cockpit-Screen. Journey 3 zeigt Stefan im Projekt-Dashboard, nicht Thomas im Executive-Cockpit. Die Fragen bleiben: Wie sieht Thomas' Landing-Screen konkret aus? Welche 4–6 KPIs? Wie navigiert er von der Anomalie zum Detail? Das PRD beschreibt "Geschäftsführungs-Cockpit" in einer Aufzählung (Sektion 13.5) — aber ohne Flow, ohne Wireframe, ohne Interaktionsbeschreibung.

---

## 4. AI Experience Layer: Versprechen vs. validierte Flows

### 4.1 Command Bar — Definiert, aber nie in einer Journey getestet

Die Persona-Daten zeigen: Katrin nutzt die Command Bar 10–15x/Tag. Stefan nutzt sie für Navigation. Thomas nutzt sie selten. Die Design-Prioritäten sagen: "Command Bar ist Infrastruktur, nicht Feature. Muss unter 200ms reagieren."

Aber in keiner der 5 Journeys wird die Command Bar tatsächlich als primärer Interaktionspfad genutzt. Journey 1 zeigt Katrin, die durch Screens navigiert (Signal-Feed → Opportunity Detail → Matching → Canvas → Outreach). Stefans Knowledge-Journey startet mit "Command Bar: SAP Datenmigration Retail Checkliste" — aber das ist der einzige Moment. Wenn die Command Bar wirklich 10–15x/Tag genutzt werden soll, müssten die Journeys zeigen: Welche dieser Navigationsschritte werden durch Command-Bar-Befehle ersetzt? Was passiert, wenn Katrin statt durch Screens zu klicken einfach tippt: "Erstell Angebot für RetailCorp"? Welche Screens überspringt sie dann?

**Bewertung:** Die Command Bar ist als Konzept beschrieben, aber ihre Integration in die tatsächlichen Workflows ist nicht validiert. Es besteht das Risiko, dass sie ein nettes Feature bleibt, statt das primäre Navigationsparadigma zu werden.

### 4.2 AI Canvasses — Gut abgedeckt, aber nur für Angebote

Journey 1 Screen J1-S5 zeigt den Angebots-Canvas in vollem Detail: Struktur-Sidebar, Canvas-Content, Copilot, Prompt Bar, Pricing-Table, Kommentare. Das ist exzellent.

Aber das PRD definiert fünf Canvas-Typen: Angebots-Canvas, Vertrags-Canvas, Engagement-Brief-Canvas, Knowledge-Canvas und Kapazitätsplanungs-Canvas. Nur der Angebots-Canvas hat einen Journey-Screen. Die anderen vier sind im PRD beschrieben, aber in den Journeys nicht validiert. Besonders der Kapazitätsplanungs-Canvas (Drag-and-Drop, Szenario-Vergleich) und der Vertrags-Canvas (Redlining, Klausel-Analyse) haben hochkomplexe Interaktionen, die ohne Screen-by-Screen-Walkthrough schwer richtig zu bauen sind.

### 4.3 Chat-Interfaces vs. Command Bar — Grenzziehung unklar

Das PRD definiert drei Chat-Interfaces (Knowledge-Agent, Analytics-Agent, Onboarding-Agent) und eine Command Bar. Die Personas zeigen unterschiedliche Präferenzen: Katrin → Command Bar primär, Stefan → Knowledge-Agent primär, Thomas → Copilot primär, Lisa → Profil-Agent primär.

Aber wo ist die Grenze? Wenn Katrin in die Command Bar tippt "Wie war unsere Win-Rate bei Retail-Deals?" — ist das ein Command-Bar-Befehl (Direktantwort inline) oder wird sie zum Analytics-Agent weitergeleitet? Wenn Stefan "SAP Datenmigration Checkliste" in die Command Bar tippt — antwortet die Command Bar oder der Knowledge-Agent? Das PRD und die Journeys definieren diese Grenze nicht. Die Gefahr: zwei Systeme antworten unterschiedlich auf die gleiche Frage, oder der Nutzer weiß nicht, wo er fragen soll.

### 4.4 Agentic Workflows — Beschrieben, aber nie konkret gezeigt

Das PRD definiert Agentic Workflows (Sektion 7.6) mit drei Beispielen: Signal-zu-Opportunity, Projekt-Risikoerkennung, Quartals-Review. Die Journeys zeigen teilweise automatisierte Schritte (Engagement-Brief wird automatisch generiert, Agent-Run getriggert), aber den tatsächlichen mehrstufigen Workflow mit Human-in-the-Loop-Punkten sieht man nie aus Nutzersicht.

Wie sieht es aus, wenn ein Agent mitten im Workflow pausiert und den Nutzer fragt? Wo erscheint diese Frage — im Notification Center? Als Modal? Im Copilot? Was passiert, wenn der Nutzer nicht reagiert? Diese Interaktionsmuster sind unspezifiziert.

---

## 5. Build-Ambition: Realitätscheck

### 5.1 18 Module in 32 Wochen — Noch immer das größte Risiko

Das PRD ist transparent über dieses Risiko (Risiko #1: Scope-Ambition). Aber die Personas und Journeys verschärfen das Problem: Sie zeigen, wie hoch die UX-Anforderungen sind. Allein Journey 1 hat 7 Screens mit detaillierten Wireframes, Komponenten-Listen und AI-Interaktionen. Hochgerechnet auf alle fehlenden Journeys (Financial Intelligence, Contract, Events, Recruiting, Discovery, Cockpit, Admin-Flows, Client-Portal-Setup) kommen mindestens 20–30 weitere Screens hinzu.

Die Journeys zeigen auch, dass die einzelnen Screens komplex sind: der Angebots-Canvas allein hat 7 Komponenten (CanvasStructureSidebar, CanvasSection, PricingTable, CanvasPromptBar, CopilotSidebar, CanvasCommentThread, VariantSwitcher), die jeweils eigene Interaktionslogik brauchen.

### 5.2 Die Personas decken auf: Es gibt nicht "ein" UI, sondern 6 verschiedene

Die Surface-zu-Persona-Mapping-Matrix zeigt: Jede Persona hat eine fundamental andere Nutzung des Systems. Katrin lebt im Canvas und Signal-Feed. Thomas lebt im Dashboard und Notification Center. Stefan im Projekt-Dashboard und Knowledge-Agent. Lisa im Profil und Notifications. Martina in Admin-Tabellen. Dr. Müller im Client Portal.

Das bedeutet: Consultry muss nicht eine Anwendung bauen, sondern sechs verschiedene Erlebniswelten, die auf den gleichen Daten operieren. Das ist eine Design-System-Herausforderung und eine Implementierungsherausforderung, die im PRD nicht als solche benannt wird.

### 5.3 Phase-1-Scope ist bereits enorm

Phase 1 (Wochen 1–8) umfasst: AI Copilot + Command Bar, Knowledge Graph, Workforce, Client Management, Opportunity Intelligence, Staffing, CV-Generation, Collaboration, Notification Basis, Auth/RBAC/DSGVO, Core-Integrationen. Das sind 9 Module + AI-Basis + Infrastruktur in 8 Wochen. Selbst mit Claude Code MAX + Cursor + einem Senior Engineer ist das ambitioniert. Die Journeys zeigen, dass allein der Signal→Angebot-Flow (Journey 1) 7 hochdetaillierte Screens braucht — und das ist nur ein Teil von Phase 1.

---

## 6. Mobile Strategy: Versprechen vs. Persona-Realität

### 6.1 Persona-Daten zeigen klare Mobile-Muster

Die Personas definieren klare Mobile-Slots: Katrin (07:30–08:00 S-Bahn, 12:00–13:00 unterwegs), Thomas (07:00–07:30, 12:00–13:00), Stefan (12:00–13:00, 17:00–17:30), Lisa (17:00–17:30). Martina: Desktop-only. Dr. Müller: primär Laptop, Smartphone für Quick-Checks.

### 6.2 Mobile-First-Flows in Journeys sind gut definiert — aber nur für Journey 1 und 2

Journey 1 zeigt exzellente Mobile-Screens: J1-S1 (Signal-Feed Mobile mit Swipe-Gesten), J1-S2 (Bottom-Sheet für Opportunity-Konversion), J1-S3a (Thomas' Kommentar auf Mobile), J1-S6 (Approval Card Mobile). Journey 2 zeigt J2-S2 (Staffing-Anfrage Mobile für Stefan) und J2-S3 (Lisa Mobile).

Aber: Journey 3 zeigt Thomas' P0-Alert auf Mobile — gut. Was aber nicht gezeigt wird: Wie sieht der mobile Financial-Intelligence-View aus? Wie sieht Thomas' mobiles Cockpit aus? Die Persona sagt er scannt morgens 07:00–07:30 auf dem iPhone — aber es gibt keinen Mobile-Cockpit-Screen.

### 6.3 PWA-Entscheidung vs. Push-Notification-Anforderung

Das PRD definiert: "Keine Native App — responsive Web + PWA." Die Notification Engine definiert Push-Notifications als Kanal für P0 und P1. Aber PWA-Push auf iOS ist bekanntlich eingeschränkt (erst seit iOS 16.4, nur wenn als Home-Screen-App installiert). Thomas' Persona zeigt: iPhone, P0-Alerts morgens um 07:00. Wenn Thomas die PWA nicht auf seinem Home-Screen installiert hat, bekommt er keine Push-Notifications — und das P0-Alert-System bricht zusammen. Das PRD listet dies als offene Frage (#6) — aber die Persona-Daten zeigen, dass es eine kritische Produktentscheidung ist, nicht eine offene technische Frage.

---

## 7. Fehlende Fehlerpfade und Edge Cases

### 7.1 Die Journeys sind Happy-Paths

Alle 5 Journeys zeigen den Idealfall: Signal wird erkannt → Opportunity angelegt → Angebot erstellt → freigegeben → gesendet. Staffing → alle sagen zu. Risiko → wird eskaliert → Kunde wird informiert.

Die Persona-Daten definieren explizite Frustrationen und Abbruchpunkte — aber die Journeys addressieren sie nur teilweise:

Katrins Frustration "Die AI schlägt irrelevante Berater vor" → Nicht in einer Journey gezeigt: Was passiert, wenn das Matching schlecht ist? Wie gibt Katrin Feedback? Wie verbessert sich das System?

Thomas' Frustration "Die Zahlen im Dashboard stimmen nicht mit meiner Excel" → Kein Flow zeigt: Wie geht Thomas vor, wenn er einer Zahl nicht vertraut? Gibt es einen Drill-Down, eine Erklärung, eine Quellenangabe?

Stefans Frustration "Die Knowledge-Suche liefert Müll" → Journey 5 zeigt den Happy-Path (Stefan fragt, Agent antwortet mit Checkliste). Aber was wenn die Wissensbasis leer ist? Was wenn die Antwort falsch ist?

### 7.2 AI-Vertrauensproblem nicht adressiert

Martinas Persona sagt: "Sie nutzt AI indirekt, denkt nicht in AI-Features." und "Das System macht Vorschläge die ich nicht nachvollziehen kann → Ignoriert AI." Das PRD definiert keine Explainability-Strategie. Der Copilot erklärt zwar auf Nachfrage ("Warum empfiehlst du Markus?"), aber es gibt keinen systematischen Ansatz für: Confidence-Scores bei AI-Outputs, Quellenangaben bei generierten Inhalten, Feedback-Mechanismus ("Das war falsch") bei AI-Vorschlägen, Audit-Trail für AI-Entscheidungen (wer hat was vorgeschlagen, wer hat es akzeptiert/abgelehnt).

---

## 8. Positive Kohärenz: Was gut funktioniert

Nicht alles ist kritisch. Die Dokumente zeigen auch starke Kohärenz:

Journey 1 (Signal→Angebot) ist ein Meisterwerk der Cross-Persona-Dokumentation. Katrins Signal-Feed → Thomas' Kommentar → Katrins Canvas → Thomas' Approval → Katrins Outreach — das ist genau der Handoff-Flow, den die Cross-Persona-Matrix vorhersagt.

Journey 2 (Staffing) validiert Stefans und Lisas Persona-Daten perfekt: Stefan bekommt die kontextreiche Staffing-Card (seine Persona fordert "vollen Kontext inline"), Lisa sieht den Karriere-Fit (ihre Persona fokussiert auf Entwicklung).

Journey 4 (Onboarding) zeigt Martinas Admin-Perspektive zusammen mit dem Onboarding-Agent — eine seltene Multi-Persona-Journey, die Backoffice und Berater verbindet.

Das Consent-Gating in Journey 1 (Outreach) ist exakt konsistent mit dem DSGVO-Modell im PRD (Consent-State-Machine, Warm-Path als Rechtsgrundlage Art. 6(1)f).

---

## 9. Empfehlungen: Nächste Schritte

### Priorität 1 — Fehlende Journeys erstellen

1. **Journey 6: Thomas' Morgen-Cockpit → Financial Intelligence → Forecast-Review.** Validiert das Executive-Erlebnis, den Cockpit-Screen und den Financial-Intelligence-Flow.
2. **Journey 7: Vertrags-Lifecycle** (Kunden-Vertrag kommt rein → Vertrags-Canvas → Review → Verhandlung → Unterschrift). Validiert den Vertrags-Canvas und den Cross-Party-Flow.
3. **Journey 8: Martinas Admin-Tag** (Datenimport → Bulk-Edit → Report-Generierung → Export). Validiert die Backoffice-UX-Anforderungen.

### Priorität 2 — Grenzziehung AI-Interfaces

Ein separates Dokument oder ein Abschnitt im PRD, der definiert: Wann antwortet die Command Bar direkt? Wann wird an einen Chat-Agent delegiert? Wann öffnet sich ein Canvas? Entscheidungsbaum oder Routing-Logik, nicht nur Feature-Beschreibungen.

### Priorität 3 — Explainability & Trust Framework

Ergänzung im PRD unter Cross-Cutting Concerns: Wie erklärt das System seine AI-Entscheidungen? Welche Confidence-Signale gibt es? Wie gibt der Nutzer Feedback? Dies betrifft alle AI-Features und ist besonders kritisch für Martina (Misstrauen) und Thomas (braucht verlässliche Zahlen).

### Priorität 4 — Phase-1-Scope-Validierung

Die Journeys 1, 2 und 4 zusammen definieren die Minimal-Viable-Experience. Abgleich: Sind alle Screens dieser drei Journeys in Phase 1 baubar? Welche Komponenten fehlen? Ein Screen-zu-Phase-Mapping würde zeigen, wo die Phase-1-Grenze wirklich liegt.

---

*Diese Analyse ist ein lebendes Dokument und sollte nach Erstellung der fehlenden Journeys aktualisiert werden.*
