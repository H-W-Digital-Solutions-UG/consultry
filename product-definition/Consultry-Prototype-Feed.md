# Consultry — Design Prototype Generator Feed

**Source:** Consultry PRD v2.0 Final (30. März 2026)
**Purpose:** Structured extraction of all prototype-relevant product information, excluding design system tokens/styles.

---

## 1. Product Identity

**Name:** Consultry
**Tagline:** AI-Native Consultancy CRM für den DACH-Markt
**Language:** German-first UI (EN planned later, FR for Swiss customers perspektivisch)
**Core Promise:** "Wer braucht gerade das, was wir besonders gut können — wer aus unserem Team passt am besten — und wie liefern wir profitabel?"

---

## 2. User Roles & Personas

### Primary Personas

| Role | German Label | Key Responsibilities | Primary Surfaces |
|---|---|---|---|
| **BD-Leiter/in** | Geschäftsentwicklung | Lead qualification, outreach, pipeline management, event strategy | Cockpit, Signal-Feed, Discovery, Outreach, Pipeline |
| **Partner** | Partner/Geschäftsführer | Portfolio oversight, approvals, key relationships, strategy | Partner-View Dashboard, Opportunity detail, Approvals |
| **Practice Lead** | Practice-/Service-Line-Leiter | Service line performance, skill landscape, market trends | Practice-Lead-View, Skill-Gap, Matching |
| **Projektleiter/in** | Projektmanagement | Delivery, milestones, risk monitoring, scope management | Project Dashboard, Milestone Tracking, Change Requests |
| **Berater/in** | Consultant | Own profile, projects, knowledge contributions, availability | Self-Service Profile, Knowledge Q/A, Project View |
| **Backoffice / HR** | Administration | Onboarding, compliance, financials, reporting | Admin Panel, Onboarding Flows, Financial Reports |

### Hero Persona (for scenario-driven prototyping)

**Katrin — BD-Leiterin einer SAP-Beratung (85 Mitarbeiter)**
- Has 47 open tabs across Salesforce, Excel, LinkedIn, email
- Manages 12 opportunities, 40 consultants
- Pain: 15–25h/week on research across 5–8 tools
- Goal: Qualify leads in minutes, not hours; generate proposals in hours, not days

---

## 3. Core Workflow — 10-Stage Lifecycle

```
DETECT → QUALIFY → MATCH → OFFER → OUTREACH → CONTRACT → DELIVER → CONTROL → LEARN → GROW
```

### Stage Details (for screen flow mapping)

| Stage | Action | Key UI Surface | AI Involvement |
|---|---|---|---|
| **DETECT** | Signal recognition, discovery runs | Signal-Feed, Discovery Dashboard | Auto-aggregation, scoring, prioritization |
| **QUALIFY** | Opportunity analysis, engagement brief | Opportunity Detail, Engagement Brief | Auto-generated dossier, competitor analysis |
| **MATCH** | Consultant/team matching | Matching View, Team Composer | Multi-factor semantic matching, team optimization |
| **OFFER** | Proposal generation, variants | Offer Composer, Variant Engine | AI-generated proposals, pricing calibration |
| **OUTREACH** | Personalized outreach, campaigns | Outreach Editor, Campaign Manager | AI-drafted emails, consent gating |
| **CONTRACT** | Contract creation, review, negotiation | Contract Editor, Clause Library | Risk detection, redline suggestions |
| **DELIVER** | Milestone tracking, risk monitoring | Project Dashboard, Risk Monitor | Proactive alerts, scope creep detection |
| **CONTROL** | Financial tracking, forecasting | Financial Dashboard, Utilization View | Real-time DB calculation, cash flow forecast |
| **LEARN** | Knowledge extraction, feedback loop | Knowledge Library, Q/A Interface | Auto-extraction, tagging, linking |
| **GROW** | Skill gaps, recruiting, events | Skill-Gap View, Event Manager, Recruiting | Gap analysis, recruiting recommendations |

---

## 4. Scenario Walkthrough (End-to-End Prototype Script)

**SAP Migration at RetailCorp AG — Katrin's Day**

1. **Morning — Cockpit:** 3 overnight signals displayed. CTO change at RetailCorp, hiring signal at MedTech, matching public tender.
2. **Signal Detail:** Match scores against consultant competencies. RetailCorp signal score: 87/100.
3. **Engagement Brief (auto-generated):** Company context, identified needs (Legacy SAP → S/4HANA), 3 decision-makers with relationship paths ("Partner Thomas knows CFO from BITKOM event"), competitor analysis (Accenture/Capgemini likely — differentiate on DACH proximity + retail specialization).
4. **Matching View:** Optimal team: Markus S. (SAP-Retail, 12yr, score 94, free from May), Lisa T. (Change Mgmt, score 82, free May), Tim K. (Junior, Data Migration). Note: Markus + Lisa collaborated successfully twice before.
5. **Offer Composer:** 3 variants generated (Lean/Standard/Premium), with customized CVs, phase plan, effort estimates calibrated against comparable projects, pricing based on market benchmarks. 2 matching SAP-Retail case studies auto-included.
6. **Outreach Editor:** Personalized email references CTO change, emphasizes SAP-Retail expertise, names Markus as available specialist. Consent checked (warm path via Thomas). Follow-up sequence set for 5 days.
7. **Contract View:** After positive meeting — contract draft from clause library. Customer sends their standard contract → AI flags deviating liability clause, suggests alternative.
8. **Project Dashboard:** Project starts. After 6 weeks: data migration workstream 20% behind plan. Auto-alert with scope creep warning + change request template.
9. **Financial View:** DB1 at 28% (target: 25%). Next milestone payment in 3 weeks. Utilization forecast: Markus available from August — two pipeline opportunities match.
10. **Knowledge Engine:** Post-project: documentation → queryable knowledge blocks. Markus' profile auto-enriched (new reference project, confirmed SAP-Retail expertise). Customer feedback (NPS 78) contextualized.
11. **Growth View:** Skill gap: 5 NIS2 inquiries in pipeline, only 2 consultants with experience. Recruiting recommendation generated. Landing page for it-sa with NIS2 competency profile. Alumni consultant Carla suggested as subcontractor.

---

## 5. Module Architecture (4 Layers + Cross-Cutting)

### Foundation Layer
| Module | Key Screens/Views |
|---|---|
| **Consultant Knowledge Graph** | Profile editor, CV import wizard, Skills normalization dialog, Skill taxonomy browser, Certification tracker, Skill-gap analysis dashboard |
| **Client & Account Management** | Company profile, Stakeholder map, Relationship timeline, Account plan, Compliance flags |
| **Methodology & IP Asset Management** | Asset library, Template browser, Knowledge Q/A interface, Playbook generator, Reference architecture catalog |

### Growth Layer
| Module | Key Screens/Views |
|---|---|
| **Market & Signal Intelligence** | Signal feed (prioritized list), Discovery dashboard (composite scores), Tender radar (Ausschreibungs-Intelligence), Enrichment source indicators |
| **Events & Network Intelligence** | Event calendar, Pre-event briefings, Contact capture, Landing page builder, Post-event debrief, ROI tracker |
| **Talent Acquisition & Onboarding** | Recruiting pipeline, Candidate matching, Onboarding wizard (guided profile completion), Freelancer sourcing, Mentoring assignment |

### Deal Layer
| Module | Key Screens/Views |
|---|---|
| **Opportunity Intelligence & Tracking** | Opportunity intake (multi-channel), Auto-extraction preview, Engagement brief, Competitor analysis card, Pipeline kanban/list, Win probability scores, Stale detection alerts |
| **Intelligent Staffing & Matching** | Multi-factor matching results, Team composer (drag-drop or AI-suggested), Match score breakdown (transparent reasoning), Margin analysis per consultant, Comparison view, One-click consultant inquiry |
| **Smart Service Offer Composition** | Offer builder, Variant engine (Lean/Standard/Premium), Phase planner, Effort estimator (calibrated), Pricing configurator, Reference matcher |
| **Client-Facing Intelligence** | CV generator (per-client customization), Proposal document preview, Case study selector, Credential sheets, Tender response drafter |
| **Contract Intelligence & Legal** | Contract generator (template selection), Clause library browser, Risk scoring display, Redline viewer, Negotiation tracker (version history), Approval workflows |
| **Outreach & Campaign Engine** | Email editor (AI-drafted, human-editable), Sequence builder (multi-step), Campaign manager, Consent status display, Landing page editor, A/B test configurator |

### Delivery & Performance Layer
| Module | Key Screens/Views |
|---|---|
| **Project Execution & Delivery** | Milestone tracker, Deliverable checklist, Scope change manager, Risk/health score dashboard, Pulse check (customer feedback), Alert feed |
| **Financial Intelligence & Controlling** | DB1 calculator (real-time, multi-level aggregation), Utilization heatmap, Revenue forecast (3 scenarios), Rate card manager, Pricing intelligence, Cash flow projection, Subcontractor controlling |

### Cross-Cutting
| Concern | Key Screens/Views |
|---|---|
| **Multi-Entity & Governance** | Entity switcher, RBAC configuration, Chinese Walls settings, Data residency settings |
| **DSGVO & Compliance** | Consent state display (per contact: UNKNOWN/PENDING/OPTED-IN/SUPPRESSED), Audit trail viewer, Erasure workflow, Data retention settings, BetrVG documentation |
| **Reporting & Executive Dashboards** | Geschäftsführungs-Cockpit, Partner-View, Practice-Lead-View, BD-View, Berater-Self-Service, Drill-down capability |

---

## 6. Role-Based Dashboard Views

| Dashboard | Owner | Key Widgets/Cards |
|---|---|---|
| **Geschäftsführungs-Cockpit** | C-Level | Revenue, utilization, pipeline value, profitability, signal highlights |
| **Partner-View** | Partner | Own portfolio, own clients, own consultants, own opportunities |
| **Practice-Lead-View** | Practice Lead | Service line performance, skill landscape, market trends |
| **BD-View** | BD Team | Pipeline funnel, outreach performance, event ROI, conversion funnel |
| **Berater-Self-Service** | Consultant | Own profile, own projects, own utilization, development plan, knowledge contributions |

---

## 7. Data Model (Conceptual — Entity Relationships)

### Core Entities for UI
- **Consultant** → has Skills (normalized, hierarchical), Certifications, Project history, Feedback
- **Client** → has Stakeholders, Relationship history, Account plan, Compliance flags
- **Signal** → indicates need at Client, matches Skills, becomes Opportunity
- **Opportunity** → requires Skills, for Client, matched to Consultants, has Engagement Brief, competes with Competitors
- **Proposal/Offer** → staffed with Consultant team, uses Methodologies, has Variants
- **Contract** → from Proposal, has Clauses (from library), versioned
- **Project** → from Contract, tracked by Milestones, measured by Financial Records, generates Knowledge Assets, triggers Change Requests
- **Outreach Campaign** → targets Client/Stakeholder, uses Landing Pages, requires Consent, tracks Conversions
- **Event** → attended by Consultants, generates Contacts, has Landing Pages, measured by ROI
- **Knowledge Asset** → tagged to Skills, Industries, Methodologies; queryable via Q/A agent

### Key Relationship Patterns (for UI cards/connections)
- Consultant ↔ Consultant: internal network ("knows")
- Consultant → Client Stakeholder: warm paths ("Partner Thomas knows CFO via BITKOM 2024")
- Signal → Opportunity: conversion path
- Project → Knowledge Asset: learning loop
- Feedback → Consultant: profile enrichment

---

## 8. AI-Driven UI Patterns

These are recurring interaction patterns the prototype should support:

| Pattern | Description | Example |
|---|---|---|
| **Auto-Generated Dossier** | AI compiles multi-source information into a structured brief | Engagement Brief for an opportunity |
| **Match Score with Explanation** | Transparent scoring with breakdown dimensions | "87% Match: strong SAP expertise, banking experience, available KW16. Deduction: no DORA certification" |
| **Variant Generation** | AI generates multiple options the user can compare | Offer in Lean/Standard/Premium variants |
| **AI Draft → Human Edit** | AI generates first draft, human reviews and adjusts before action | Outreach email, contract clause, tender response |
| **Proactive Alert** | System surfaces time-sensitive insights without user request | "Project X 15% behind milestone plan — at comparable projects this was an early indicator for scope creep" |
| **Interactive Dialog** | AI agent asks clarifying questions during data entry | Skills normalization: "You mentioned 'Projektmanagement' — do you mean agile PM (Scrum/SAFe) or classic PM (PMI/Prince2)?" |
| **Prompt-Based Action** | Natural language commands trigger structured updates | "Add my 3 years of AWS cloud migration experience" → agent updates profile with normalized skills |
| **Q/A Agent** | Natural language queries against the knowledge base | "Have we ever done a DORA compliance assessment for a regional bank?" → synthesized answer with sources |
| **Auto-Enrichment** | Background enrichment from external sources displayed on entity cards | Company profile enriched with Dealfront data, financial info from North Data |
| **Feedback Loop Indicator** | Visual cue showing data flowing back to improve the system | Won/lost deal outcomes calibrating future win probability scores |

---

## 9. Consent State Machine (Critical UI Component)

Every contact must display consent status prominently:

```
UNKNOWN ─────→ OPT-IN PENDING ─────→ OPTED-IN (+ Datum)
    │                │                       │
    │                │                       │
    └────────────────┴───────────────→ SUPPRESSED
                                    (Bounce / Beschwerde / Widerruf)
```

**UI Rules:**
- UNKNOWN / OPT-IN PENDING / SUPPRESSED → Outreach BLOCKED (visually disabled + explanation)
- OPTED-IN → Outreach ALLOWED
- Cold contacts require Double-Opt-In flow
- Warm contacts: Single-Opt-In + documented legal basis
- Every contact card shows status badge + date

---

## 10. Tiering (Affects Feature Visibility)

| Tier | Target | Consultants | Key Differentiators |
|---|---|---|---|
| **Starter** | Boutique (5–30) | up to 30 | Knowledge Graph, Client Mgmt, Basis-Signal-Feed, Matching, CVs, Opportunity Tracking |
| **Professional** | Mittelstand (30–200) | up to 200 | + Methodology/IP, Discovery Engine, Offer Composition, Contracts, Outreach, Risk Monitoring, Financial Intelligence |
| **Enterprise** | Large (200+) | unlimited | + Multi-Entity, Chinese Walls, Custom AI Workflows, API, Advanced Campaigns, Landing Pages, Predictive Analytics |

---

## 11. Key Metrics to Surface in UI

### Real-Time Dashboard Metrics
- BD research time per prospect (target: <15 min from 45–90 min baseline)
- Proposal creation time (target: <1 day from 3–10 days)
- CV generation time (target: <5 min from 2–4 hours)
- Lead-to-meeting conversion (target: 15–20% from 2–5%)
- Cost per qualified lead (target: €400 from €600–1200)
- Consultant utilization (target: 80–90% from 60–70%)
- Forecast accuracy (target: ±20%)
- Contract throughput time (target: <2 weeks from 3–6 weeks)
- Knowledge pool growth (target: 20+ blocks/month)
- Avg. DB1 improvement (target: +3–5 percentage points)

### Health Indicators
- Competency match accuracy (critical: >60% after 1 month or re-evaluate)
- Enrichment data quality (critical: <30% gaps for DACH companies)
- Consultant onboarding rate (critical: >50% in 7 days)
- Knowledge pool engagement (critical: >2 queries/week/consultant after 2 months)
- Proposal adoption (critical: >30% of proposals via system after 3 months)

---

## 12. Integration Touchpoints (UI Indicators)

The prototype should show integration states/data sources where relevant:

| Integration | Where Visible in UI |
|---|---|
| **Dealfront** | Company profiles (enrichment badge), Signal feed (source attribution), Contact enrichment |
| **North Data** | Company profiles (Handelsregister data), Financial Intelligence |
| **Tender Portals** (TED, bund.de, etc.) | Ausschreibungs-Radar, Signal feed |
| **Calendar** (Google/MS365) | Consultant availability, meeting coordination |
| **Email** (Gmail/Outlook) | Opportunity intake, outreach tracking |
| **SendGrid** | Outreach delivery status, bounce tracking |
| **Document Storage** (Drive/SharePoint) | Knowledge Engine sources, methodology assets |
| **Time Tracking** (Clockodo/MOCO/Harvest) | Financial Intelligence (consumed, not owned) |
| **HR** (Personio etc.) | Consultant master data sync |

---

## 13. Navigation Architecture (Implied from Modules)

### Primary Navigation (suggested top-level)
1. **Cockpit** — Role-based dashboard (entry point)
2. **Pipeline** — Opportunities, stages, pipeline management
3. **Berater** — Consultant Knowledge Graph, profiles, matching
4. **Kunden** — Client & Account Management
5. **Signale** — Market & Signal Intelligence, Discovery, Tender Radar
6. **Angebote** — Offer Composition, Proposals, CVs
7. **Verträge** — Contract Intelligence
8. **Outreach** — Campaigns, sequences, landing pages
9. **Projekte** — Delivery tracking, milestones
10. **Finanzen** — DB calculation, utilization, forecasting
11. **Wissen** — Knowledge Engine, Methodology/IP, Q/A
12. **Events** — Event lifecycle, networking
13. **Recruiting** — Talent acquisition, onboarding
14. **Einstellungen** — Admin, RBAC, compliance, integrations

### Contextual Navigation
- From any **Client** → their Opportunities, Projects, Stakeholders, Relationship history
- From any **Consultant** → their Skills, Availability, Projects, Match history
- From any **Opportunity** → Engagement Brief, Matching, Offer, Contract
- From any **Signal** → Source, matched Skills, convertible to Opportunity
- From any **Project** → Milestones, Financials, Knowledge output, Team

---

## 14. Phased Build Roadmap (Prototype Scoping)

### Phase 1 — Fundament (Weeks 1–6): PROTOTYPE PRIORITY
- Consultant Knowledge Graph (profiles, CV import, skills normalization)
- Client & Account Management (master data, stakeholders, relationship history)
- Opportunity Intelligence (intake, auto-extraction, pipeline, basic engagement briefs)
- Intelligent Staffing & Matching (multi-factor, team composition)
- Client-Facing Intelligence (CV generation, basic proposals)
- Auth, Multi-Tenancy, RBAC, DSGVO consent model, basic dashboard

### Phase 2 — Full Deal Machine (Weeks 7–14)
- Market & Signal Intelligence (signal feed, discovery, tender matching)
- Offer Composition (generation, variants)
- Contract Intelligence (templates, clause library, basic review)
- Outreach & Campaign Engine (personalization, consent gating, sequences)
- Enhanced Engagement Briefs (competitor analysis, warm paths)
- Methodology & IP Asset Management

### Phase 3 — Delivery & Performance (Weeks 15–22)
- Project Execution & Delivery (milestones, risk, feedback, scope change)
- Financial Intelligence (DB calculation, utilization, forecasting, rate cards)
- Full Knowledge Engine (auto-generation from projects, Q/A agent, playbooks)

### Phase 4 — Growth Engine (Weeks 23–30)
- Events & Network Intelligence
- Talent Acquisition & Onboarding
- Advanced Analytics & Predictive Features
- Tender Drafting, Landing Pages

---

## 15. DACH-Specific UI Considerations

- All UI labels, microcopy, and system messages in German
- Currency: EUR (CHF for Swiss entities)
- Date format: DD.MM.YYYY
- Number format: 1.234,56 (German decimal comma)
- Calendar weeks (KW) used for scheduling/availability
- Seniority labels: Junior, Professional, Senior, Principal, Partner
- Legal framework badges: DSGVO, BetrVG, AÜG, RDG, EVB-IT visible where relevant
- Consent status is a first-class UI citizen — visible on every contact
- "Betriebsrat-relevant" flag on features involving consultant profiling

---

## 16. Key Differentiating UI Moments

These are the "wow" moments the prototype should nail:

1. **Skills Normalization Dialog** — AI asking clarifying questions during profile creation ("Projektmanagement — agil oder klassisch?")
2. **Engagement Brief** — Auto-generated dossier with company context, needs, decision-makers, warm paths, competitor analysis, and consultant recommendations all in one view
3. **Team Composer** — Visual team assembly with match scores, margin analysis, availability overlay, and collaboration history
4. **Variant Engine** — Side-by-side comparison of Lean/Standard/Premium offers with instant margin impact
5. **Signal-to-Opportunity Conversion** — One-click conversion from a market signal to a qualified opportunity with pre-filled data
6. **Knowledge Q/A** — Natural language query returning synthesized answers from firm knowledge with source attribution
7. **Contract Risk Flagging** — Incoming customer contract analyzed with flagged deviations and suggested alternatives
8. **Proactive Alerts in Cockpit** — Overnight signals, project risks, relationship erosion warnings, stale opportunities surfaced without user action

---

*Generated from Consultry PRD v2.0 Final — 30. März 2026*
