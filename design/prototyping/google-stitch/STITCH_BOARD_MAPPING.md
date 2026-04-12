# Consultry — Stitch Inspiration Board Mapping

## Board → User Journeys → UI Screens

**Stitch Board:** [Consultry-Inspiration](https://stitch.withgoogle.com/projects/9527822144861630979)
**Design Token Set:** Consultry Amber
**Datum:** 31. März 2026

---

## Board Inventory

24 Design-Referenzen auf dem Stitch Board, katalogisiert und den 17 User Journeys zugeordnet.

---

## Stitch Board Items → Journey Screen Mapping

| # | Stitch Board Item | Vollständiger Name (identifiziert) | Zugeordnete Journey(s) | Screen-ID(s) | Kategorie |
|---|---|---|---|---|---|
| 1 | **Pipeline/Opportunity List** | Pipeline- / Opportunitäts-Auflistung | J1, J8 | J1-S3, J8-S1 | Deal Layer |
| 2 | **Opportunity Detail** | Opportunity-Detailansicht | J1 | J1-S3 | Deal Layer |
| 3 | **Outreach Editor** | Outreach-/E-Mail-Editor | J1 | J1-S7 | Deal Layer |
| 4 | **Approval Manager** | Freigabe-/Approval-Workflow | J1, J2, J10 | J1-S6, J2-S4, J10-S1 | Platform |
| 5 | **Account Plan & Stakeholder** | Account Plan & Stakeholder-Map | J7 | J7-S1 | Foundation |
| 6 | **Discovery Dashboard** | Discovery-/Signal-Dashboard | J1, J12 | J1-S1, J12-S1 | Growth |
| 7 | **Signal Feed (Amber)** | Signal-Feed im Consultry-Amber-Stil | J1 | J1-S1 | Growth |
| 8 | **Event Manager** | Event-Management-View | J11 | J11-S1, J11-S2, J11-S3 | Growth |
| 9 | **Knowledge Q/A Interface** | Knowledge-Agent Q/A Chat | J5, J16 | J5-S3, J16-S1 | Foundation |
| 10 | **Financial Dashboard** | Financial Intelligence Dashboard | J13 | J13-S1 | Delivery |
| 11 | **Berater-Profil-Anpassung** | Berater-Profil Bearbeitung | J4 | J4-S3 | Foundation |
| 12 | **Angebots-Vorschau** | Angebotsvorschau / Offer Composition | J1, J9 | J1-S5, J9-S1, J9-S2 | Deal Layer |
| 13 | **Cockpit (Dashboard)** | Thomas' Cockpit / Morgen-Briefing | J12 | J12-S1, J12-S2 | Platform |
| 14 | **Partner & Practice View** | Partner & Practice Lead Dashboard | J6 | J6-S1 | Delivery |
| 15 | **Admin Panel** | Admin/Settings View | J4 | J4-S1, J4-S2 | Platform |
| 16 | **Consultant Profile** | Consultant Profile Detail | J4, J5 | J4-S3, J5-S2 | Foundation |
| 17 | **Team & Availability** | Team & Verfügbarkeits-Timeline | J2, J6 | J2-S4, J6-S1 | Foundation |
| 18 | **Skill-Gap Analysis** | Skill-Gap Analyse View | J14 | J14-S1 | Growth |
| 19 | **Matching View / Team** | Matching/Team-Matching View (2 Varianten) | J1, J2 | J1-S4, J2-S1 | Deal Layer |
| 20 | **Mentoring & Wissenstransfer** | Mentoring & Wissenstransfer View | J5 | J5-S1 | Foundation |
| 21 | **Karrierepfad & Performance** | Karrierepfad & Entwicklungs-Dashboard | J4 | J4-S3 (Lisa's Entwicklungs-View) | Foundation |
| 22 | **Kapazitäts-Szenario** | Kapazitäts-Szenario Planner | J6 | J6-S2 | Delivery |
| 23 | **Warm Path & Relationship** | Warm Path & Beziehungsnetzwerk | J1, J7 | J1-S3, J7-S1 | Foundation |
| 24 | **Contract Editor** | Vertrags-Canvas/Editor | J10 | J10-S1 | Deal Layer |
| 25 | **Recruiting Pipeline** | Recruiting-Pipeline View | J14 | J14-S1 | Growth |
| 26 | **Outreach Sequence** | Outreach-Sequenz-Übersicht | J1 | J1-S7 | Deal Layer |

---

## Umgekehrtes Mapping: Journey Screen → Stitch Reference

### Journey 1: Signal → Angebot → Outreach

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J1-S1 | Signal-Feed (Mobile) | Signal Feed (Amber), Discovery Dashboard |
| J1-S2 | Signal → Opportunity Conversion | — (kein direktes Board-Item, Bottom-Sheet-Pattern) |
| J1-S3 | Opportunity Detail + Engagement-Brief | Opportunity Detail, Warm Path & Relationship |
| J1-S4 | Staffing & Matching | Matching View / Team (2 Varianten) |
| J1-S5 | Angebots-Canvas | Angebots-Vorschau |
| J1-S6 | Thomas Approval Card | Approval Manager |
| J1-S7 | Outreach Composer | Outreach Editor, Outreach Sequence |

### Journey 2: Staffing-Anfrage → Team-Lock

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J2-S1 | Staffing-Anfrage senden | Matching View / Team |
| J2-S2 | Stefan antwortet (Mobile) | — (Mobile Card, kein Board-Item) |
| J2-S3 | Lisa antwortet (Mobile) | — (Mobile Card) |
| J2-S4 | Staffing-Status Übersicht | Team & Availability |

### Journey 3: Projekt-Risiko → Eskalation

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J3-S1 | Projekt-Dashboard | — (kein dediziertes Board-Item) |
| J3-S2 | P0-Alert Thomas | Approval Manager (Alert-Pattern) |
| J3-S3 | Client Portal Update | — (Client Portal, kein Board-Item) |

### Journey 4: Berater-Onboarding

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J4-S1 | Admin Berater anlegen | Admin Panel |
| J4-S2 | CV-Extraktion Review | Berater-Profil-Anpassung, Consultant Profile |
| J4-S3 | Onboarding-Agent Dialog | Consultant Profile, Karrierepfad & Performance |
| J4-S4 | Tim im Matching | Matching View / Team |

### Journey 5: Projektabschluss → Knowledge

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J5-S1 | Projekt abschließen + Upload | Mentoring & Wissenstransfer |
| J5-S2 | Automatisches Profil-Update | Consultant Profile |
| J5-S3 | Knowledge-Agent Anfrage | Knowledge Q/A Interface |
| J5-S4 | Aktualisierte Profile im Matching | Matching View / Team |

### Journey 6: Practice-Lead Kapazitätsplanung

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J6-S1 | Practice Team-Dashboard | Partner & Practice View, Team & Availability |
| J6-S2 | Capacity Planner | Kapazitäts-Szenario |

### Journey 7: Account Review & Beziehungspflege

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J7-S1 | Account-Dashboard | Account Plan & Stakeholder, Warm Path & Relationship |

### Journey 8: E-Mail → Opportunity

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J8-S1 | Auto-Extraktion aus E-Mail | Pipeline/Opportunity List, Opportunity Detail |

### Journey 9: Offer Composition Canvas

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J9-S1 | Varianten-Engine | Angebots-Vorschau |
| J9-S2 | CV-Generierung | Consultant Profile, Berater-Profil-Anpassung |

### Journey 10: Vertragsverhandlung

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J10-S1 | Vertrags-Canvas AI-Analyse | Contract Editor |

### Journey 11: Event-Lifecycle

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J11-S1 | Pre-Event Briefing | Event Manager |
| J11-S2 | Live-Event Kontakterfassung | Event Manager (Mobile-Variante) |
| J11-S3 | Post-Event Follow-up + ROI | Event Manager |

### Journey 12: Thomas' Morgen-Briefing

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J12-S1 | Cockpit | Cockpit (Dashboard), Discovery Dashboard |
| J12-S2 | Copilot-Briefing | — (Copilot Sidebar, kein dediziertes Board-Item) |

### Journey 13: Financial Review

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J13-S1 | Financial Intelligence Dashboard | Financial Dashboard |

### Journey 14: Skill-Gap → Recruiting

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J14-S1 | Skill-Strategy Planner | Skill-Gap Analysis, Recruiting Pipeline |

### Journey 15: Ausschreibungs-Intelligence

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J15-S1 | Ausschreibungs-Feed | Signal Feed (Amber), Discovery Dashboard |

### Journey 16: Knowledge-Canvas Playbook

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J16-S1 | Knowledge-Canvas | Knowledge Q/A Interface |

### Journey 17: Client Feedback-Loop

| Screen | Screen-Titel | Stitch Reference(s) |
|---|---|---|
| J17-S1 | Pulse-Check → Internes Routing | — (Client Portal + Notification, keine Board-Items) |

---

## Abdeckungs-Analyse

### Screens MIT Stitch-Referenz: 30 von 39 (77%)

### Screens OHNE Stitch-Referenz (Gaps):

| Screen | Beschreibung | Empfehlung |
|---|---|---|
| J1-S2 | Signal → Opportunity Bottom-Sheet (Mobile) | Neues Stitch-Item generieren: Mobile Bottom-Sheet Pattern |
| J2-S2/S3 | Staffing-Anfrage Mobile Card | Neues Stitch-Item: Mobile Staffing Request Card |
| J3-S1 | Projekt-Dashboard (PL-View) | Neues Stitch-Item: Project Health Dashboard |
| J3-S3 | Client Portal (Kunden-Sicht) | Neues Stitch-Item: Client Portal — White-Label |
| J12-S2 | Copilot-Briefing (Sidebar) | Neues Stitch-Item: AI Copilot Sidebar |
| J17-S1 | Pulse-Check Feedback Routing | Neues Stitch-Item: Notification → Feedback Card |

**Empfehlung:** 6 weitere Stitch-Items generieren um 100% Abdeckung zu erreichen.

---

## Stitch Board Item → PRD Module Mapping

| Stitch Item | PRD Modul | Layer |
|---|---|---|
| Signal Feed, Discovery Dashboard | Market & Signal Intelligence (9.1) | Growth |
| Event Manager | Events & Network Intelligence (9.2) | Growth |
| Recruiting Pipeline, Skill-Gap Analysis | Talent Acquisition & Onboarding (9.3) | Growth |
| Opportunity Detail, Pipeline List | Opportunity Intelligence & Tracking (10.1) | Deal |
| Matching View | Intelligent Staffing & Matching (10.2) | Deal |
| Angebots-Vorschau | Smart Service Offer Composition (10.3) | Deal |
| Consultant Profile, Berater-Profil | Client-Facing Intelligence (10.4) | Deal |
| Contract Editor | Contract Intelligence & Legal Automation (10.5) | Deal |
| Outreach Editor, Outreach Sequence | Outreach & Campaign Engine (10.6) | Deal |
| Financial Dashboard | Financial Intelligence & Controlling (11.2) | Delivery |
| Approval Manager | Collaboration & Activity (12.1) | Platform |
| Cockpit | Reporting & Dashboards (13.5) | Cross-Cutting |
| Admin Panel | Settings / Multi-Entity (13.2) | Cross-Cutting |
| Account Plan & Stakeholder | Client & Account Management (8.3) | Foundation |
| Knowledge Q/A | Methodology & IP Asset Management (8.4) | Foundation |
| Team & Availability, Kapazitäts-Szenario | Workforce & Team Management (8.2) | Foundation |
| Warm Path & Relationship | Consultant Knowledge Graph (8.1) | Foundation |
| Mentoring & Wissenstransfer | Workforce — Mentoring (8.2) | Foundation |
| Karrierepfad & Performance | Workforce — Entwicklung (8.2) | Foundation |
| Partner & Practice View | Workforce — Team Dashboards (8.2) | Foundation |

---

## Noch fehlende Module auf dem Stitch Board

| PRD Modul | Noch kein Stitch-Item | Priorität |
|---|---|---|
| Project Execution & Delivery (11.1) | Kein Projekt-Dashboard, kein Milestone-Tracker | HOCH |
| Client Portal (12.2) | Kein White-Label Portal, kein Pulse-Check | HOCH |
| AI Copilot Sidebar (7.1) | Kein Copilot-Panel als eigenes Item | MITTEL |
| Command Bar (7.2) | Kein Cmd+K Overlay | MITTEL |
| Notification Center (12.3) | Kein Notification-Inbox | MITTEL |
| Mobile Flows (13.1) | Keine Mobile-spezifischen Referenzen | MITTEL |
| Onboarding-Agent Dialog (9.3) | Kein Chat-basierter Onboarding-Flow | NIEDRIG |

---

*Mapping erstellt am 31. März 2026. Stitch Board: Consultry-Inspiration, 26 Items identifiziert, 30/39 Journey-Screens abgedeckt (77%).*
