# Consultry Screen Spec Index

**Design System:** v1.3
**Stand:** 31. Maerz 2026
**Token-Quelle:** `design/Consultry-Design-System-v1.3.md`

---

## Uebersicht

Dieses Verzeichnis katalogisiert alle Screen-Spezifikationen der Consultry-Plattform. Organisation nach **PRD-Layer** plus einem separaten `mobile/`-Ordner fuer mobile-only Screens. Dual-Mode-Screens (Desktop + Mobile) haben eine integrierte "Responsive Varianten"-Sektion.

**Konventionen:**
- Alle Specs referenzieren ausschliesslich DS-v1.3-Token-Namen, nie Hex-Werte.
- Light Theme ist Standard. Dark Theme wird ueber Token-Remapping abgebildet.
- Jeder Screen referenziert die zugehoerigen Journey-IDs [J#-S#] und PRD-Module.
- Bento Grid vs. Progressive Disclosure wird pro Screen begruendet.
- Deutsche Primaersprache.

---

## AI Experience (`ai-experience/`)

| Screen | Datei | Journey(s) | PRD-Modul | Layout-Typ | Status |
|--------|-------|-----------|-----------|-----------|--------|
| Copilot Sidebar | `ai-experience/copilot-sidebar.md` | J12-S2 | 7.1 | Progressive Disclosure | Erstellt v1.0 |
| Command Bar | `ai-experience/command-bar.md` | — (global) | 7.2 | Overlay | Erstellt v1.0 |
| Angebots-Canvas | `ai-experience/angebots-canvas.md` | J1-S5, J9-S1 | 10.3 | Progressive Disclosure | Erstellt v1.0 |
| Vertrags-Canvas | `ai-experience/vertrags-canvas.md` | J10-S1 | 10.5 | Progressive Disclosure | Erstellt v1.0 |
| Engagement-Brief-Canvas | `ai-experience/engagement-brief-canvas.md` | J1-S3 | 10.1 | Progressive Disclosure | Erstellt v1.0 |
| Knowledge Canvas | `ai-experience/knowledge-canvas.md` | J16-S1 | 8.4 | Progressive Disclosure | Erstellt v1.0 |
| Kapazitaetsplanungs-Canvas | `ai-experience/kapazitaetsplanungs-canvas.md` | J6-S2 | 8.2 | Progressive Disclosure | Erstellt v1.0 |
| Knowledge Agent Chat | `ai-experience/knowledge-agent-chat.md` | J5-S3 | 8.4 | Chat | Erstellt v1.0 |
| Onboarding-Agent Dialog | `ai-experience/onboarding-agent-dialog.md` | J4-S3 | 9.3 | Dialog | Erstellt v1.0 |

## Foundation (`foundation/`)

| Screen | Datei | Journey(s) | PRD-Modul | Layout-Typ | Status |
|--------|-------|-----------|-----------|-----------|--------|
| Consultant Profile Editor | `foundation/consultant-profile-editor.md` | J4-S2, J4-S3 | 8.1 | Progressive Disclosure | Erstellt v1.0 |
| Consultant Profile View | `foundation/consultant-profile-view.md` | J5-S2 | 8.1, 10.4 | Progressive Disclosure | Erstellt v1.0 |
| Skill Normalization Dialog | `foundation/skill-normalization-dialog.md` | J4-S3 | 8.1 | Modal | Erstellt v1.0 |
| Team & Availability Dashboard | `foundation/team-availability-dashboard.md` | J2-S4, J6-S1 | 8.2 | Bento Grid | Erstellt v1.0 |
| Verfuegbarkeit Update Dialog | `foundation/verfuegbarkeit-update-dialog.md` | Stefan J-Verfuegbarkeit | 8.2 | Modal | Erstellt v1.0 |
| Account Plan & Stakeholder Map | `foundation/account-plan-stakeholder-map.md` | J7-S1 | 8.3 | Progressive Disclosure | Erstellt v1.0 |
| Warm Path & Relationship Detail | `foundation/warm-path-relationship-detail.md` | J1-S3, J7-S1 | 8.1, 8.3 | Progressive Disclosure | Erstellt v1.0 |

## Growth (`growth/`)

| Screen | Datei | Journey(s) | PRD-Modul | Layout-Typ | Status |
|--------|-------|-----------|-----------|-----------|--------|
| Signal Feed | `growth/signal-feed.md` | J1-S1, J15-S1 | 9.1 | Progressive Disclosure | Erstellt v1.0 |
| Discovery Dashboard | `growth/discovery-dashboard.md` | J1-S1, J12-S1 | 9.1 | Bento Grid | Erstellt v1.0 |
| Ausschreibungs-Feed | `growth/ausschreibungs-feed.md` | J15-S1 | 9.1 | Progressive Disclosure | Erstellt v1.0 |
| Event Manager | `growth/event-manager.md` | J11-S1, J11-S3 | 9.2 | Progressive Disclosure | Erstellt v1.0 |
| Live Event Mobile | `growth/live-event-mobile.md` | J11-S2 | 9.2 | Stack (Mobile) | Erstellt v1.0 |
| Recruiting Pipeline | `growth/recruiting-pipeline.md` | J14-S1 | 9.3 | Progressive Disclosure | Erstellt v1.0 |
| Skill-Gap Analysis | `growth/skill-gap-analysis.md` | J14-S1 | 9.3 | Bento Grid | Erstellt v1.0 |
| Berater-Onboarding Wizard | `growth/berater-onboarding-wizard.md` | J4-S1 bis S4 | 9.3 | Progressive Disclosure | Erstellt v1.0 |

## Deal (`deal/`)

| Screen | Datei | Journey(s) | PRD-Modul | Layout-Typ | Status |
|--------|-------|-----------|-----------|-----------|--------|
| Opportunity Detail | `deal/opportunity-detail.md` | J1-S3, J8-S1 | 10.1 | Progressive Disclosure | Erstellt v1.0 |
| Opportunity Intake | `deal/opportunity-intake.md` | J1-S2, J8-S1 | 10.1 | Bottom Sheet (Mobile) / Modal | Erstellt v1.0 |
| Staffing & Matching | `deal/staffing-matching.md` | J1-S4, J2-S1 | 10.2 | Progressive Disclosure | Erstellt v1.0 |
| Offer Composer | `deal/offer-composer.md` | J1-S5, J9-S1 | 10.3 | Progressive Disclosure | Erstellt v1.0 |
| CV Generator | `deal/cv-generator.md` | J9-S2 | 10.4 | Progressive Disclosure | Erstellt v1.0 |
| CV Extraktion Review | `deal/cv-extraktion-review.md` | J4-S2 | 10.4 | Progressive Disclosure | Erstellt v1.0 |
| Contract Editor | `deal/contract-editor.md` | J10-S1 | 10.5 | Progressive Disclosure | Erstellt v1.0 |
| Outreach Editor | `deal/outreach-editor.md` | J1-S7 | 10.6 | Progressive Disclosure | Erstellt v1.0 |

## Delivery (`delivery/`)

| Screen | Datei | Journey(s) | PRD-Modul | Layout-Typ | Status |
|--------|-------|-----------|-----------|-----------|--------|
| Project Dashboard | `delivery/project-dashboard.md` | J3-S1 | 11.1 | Bento Grid | Erstellt v1.0 |
| Projekt-Abschluss | `delivery/projekt-abschluss.md` | J5-S1 | 11.1 | Progressive Disclosure | Erstellt v1.0 |
| Financial Dashboard | `delivery/financial-dashboard.md` | J13-S1 | 11.2 | Bento Grid | Erstellt v1.0 |

## Platform (`platform/`)

| Screen | Datei | Journey(s) | PRD-Modul | Layout-Typ | Status |
|--------|-------|-----------|-----------|-----------|--------|
| Cockpit Dashboard | `platform/cockpit-dashboard.md` | J12-S1 | 13.5 | Bento Grid | Erstellt v1.0 |
| Notification Center | `platform/notification-center.md` | — (global) | 12.3 | Progressive Disclosure | Erstellt v1.0 |
| Admin Panel | `platform/admin-panel.md` | J4-S1 | 13.2 | Progressive Disclosure | Erstellt v1.0 |
| Client Portal Dashboard | `platform/client-portal-dashboard.md` | J3-S3 | 12.2 | Progressive Disclosure | Erstellt v1.0 |
| Client Portal Pulse-Check | `platform/client-portal-pulse-check.md` | J17-S1 | 12.2 | Progressive Disclosure | Erstellt v1.0 |
| Magic Link Email | `platform/magic-link-email.md` | Dr. Mueller Login | 12.2 | Email Template | Erstellt v1.0 |
| Approval Manager | `platform/approval-manager.md` | J1-S6, J2-S4 | 12.1 | Progressive Disclosure | Erstellt v1.0 |

## Mobile (`mobile/`)

| Screen | Datei | Journey(s) | Persona | Layout-Typ | Status |
|--------|-------|-----------|---------|-----------|--------|
| Mobile Signal Feed | `mobile/mobile-signal-feed.md` | J1-S1 | Katrin | Stack + Bottom Nav | Erstellt v1.0 |
| Mobile Approval Card | `mobile/mobile-approval-card.md` | J1-S6 | Thomas | Stack + Bottom Nav | Erstellt v1.0 |
| Mobile Staffing Card | `mobile/mobile-staffing-card.md` | J2-S2, J2-S3 | Stefan, Lisa | Stack + Bottom Nav | Erstellt v1.0 |
| Mobile Alert Detail | `mobile/mobile-alert-detail.md` | J3-S2 | Thomas | Stack + Bottom Nav | Erstellt v1.0 |
| Mobile Copilot Briefing | `mobile/mobile-copilot-briefing.md` | J12-S2 | Thomas | Stack + Bottom Nav | Erstellt v1.0 |
| Mobile Profil-Update Nudge | `mobile/mobile-profil-update-nudge.md` | LISA-J1-S1 | Lisa | Stack + Bottom Nav | Erstellt v1.0 |
| Mobile Kommentar-Thread | `mobile/mobile-kommentar-thread.md` | — | Alle | Stack + Bottom Nav | Erstellt v1.0 |

---

## Abdeckungs-Statistik

| Layer | Screens | Erstellt | Abdeckung |
|-------|---------|---------|-----------|
| AI Experience | 9 | 9 | 100% |
| Foundation | 7 | 7 | 100% |
| Growth | 8 | 8 | 100% |
| Deal | 8 | 8 | 100% |
| Delivery | 3 | 3 | 100% |
| Platform | 7 | 7 | 100% |
| Mobile | 7 | 7 | 100% |
| **Gesamt** | **49** | **49** | **100%** |

---

## Cross-Referenz

- **Token-Quelle:** `design/Consultry-Design-System-v1.3.md`
- **Komponenten-Specs:** `design/component-specs/_COMPONENT-SPEC-INDEX.md`
- **User Journeys:** `product-definition/Consultry-User-Journeys-v1.0.md`
- **Persona Journeys:** `product-definition/user-journeys/*.md`
- **PRD:** `product-definition/Consultry-PRD-v3.0-Final.md`
- **Stitch Mapping:** `design/google-stitch/STITCH_BOARD_MAPPING.md`

---

*Index erstellt am 31. Maerz 2026. Status wird mit jeder erstellten Screen-Spec aktualisiert.*
