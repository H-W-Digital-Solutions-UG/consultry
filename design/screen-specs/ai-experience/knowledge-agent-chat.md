# Knowledge Agent Chat — Screen Spec

**Screen-ID:** AI-EXP-08
**PRD-Modul:** 8.4 — Methodology & IP
**Journey(s):** J5-S3 (Lisa fragt Knowledge Agent), J13-S1 (Stefan: Ad-hoc Knowledge)
**Layout-Typ:** Chat
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Stefan (Senior Consultant) — Firmenwissen abfragen |
| **Sekundaer** | Lisa (Knowledge Consumption), Katrin (Deal-Recherche, selten) |
| **Frequenz** | Stefan: 2-5x/Woche (5-10 Min Sessions). Lisa: 1-2x/Woche. |
| **Trigger** | Sidebar "Wissen → Agent", Command Bar "/ Knowledge", Bottom Nav "Wissen" (Stefan/Lisa), Copilot: "Frag den Knowledge Agent". |
| **Herkunft** | Sidebar (primaer), Command Bar, Copilot, Mobile Bottom Nav. |
| **Ziel** | Firmenwissen per Freitext-Frage abrufen, Synthesen erhalten, Experten identifizieren, Dokumente finden. |
| **Geraete** | Desktop (primaer), Mobile (ad-hoc Fragen). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Stefan | eine Frage in natuerlicher Sprache stellen ("Welche Erfahrung haben wir mit SAP im Retail?") | ich eine Synthese statt Dokumenten-Links bekomme |
| 2 | Stefan | sehen welche Kollegen Expertise haben | ich sie direkt kontaktieren kann |
| 3 | Stefan | auf die zugrundeliegenden Dokumente zugreifen | ich Details nachlesen kann |
| 4 | Lisa | per Voice eine Frage stellen | ich unterwegs schnell Antworten bekomme |
| 5 | Stefan | Follow-Up-Fragen stellen | ich tiefer ins Thema einsteigen kann |
| 6 | Katrin | Account-spezifisches Wissen abfragen | ich Deals besser vorbereite |

---

## 3. Layout — Desktop

**Layout-Typ: Chat (Slide-Over Wide)**
**Begruendung:** Knowledge Agent ist ein explorativer, multi-turn Chat. Slide-Over (640px) erlaubt Nutzung neben dem aktuellen Arbeitskontext. Kein Bento Grid.

```
┌─ Hauptinhalt ─────────────────┬─ Knowledge Agent (Slide-Over 640px) ──┐
│                               │                                        │
│  [Aktueller Screen bleibt     │  ✨ Knowledge Agent              [X]  │
│   im Hintergrund sichtbar]    │  Firmenwissen durchsuchen              │
│                               │                                        │
│                               │  ┌─ Suggested Queries ──────────────┐ │
│                               │  │  [SAP Retail Erfahrung?]         │ │
│                               │  │  [Change Management Methoden?]   │ │
│                               │  │  [NIS2 Compliance Projekte?]     │ │
│                               │  └──────────────────────────────────┘ │
│                               │                                        │
│                               │  ┌─ User Bubble ────────────────────┐ │
│                               │  │  Welche Erfahrung haben wir mit  │ │
│                               │  │  SAP Migrationen im Retail?      │ │
│                               │  └──────────────────────────────────┘ │
│                               │                                        │
│                               │  ┌─ Agent Response (ai-surface) ────┐ │
│                               │  │  ✨ 4 relevante Projekte:         │ │
│                               │  │                                   │ │
│                               │  │  1. RetailCorp AG (2025)          │ │
│                               │  │     SAP S/4HANA, 7 Monate ✓      │ │
│                               │  │     Experten: Markus S., Stefan K.│ │
│                               │  │     [📄 Lessons Learned]          │ │
│                               │  │                                   │ │
│                               │  │  2. FashionGroup (2024)           │ │
│                               │  │     ERP Konsolidierung ✓          │ │
│                               │  │     [📄 Projekt-Report]           │ │
│                               │  │                                   │ │
│                               │  │  Quellen: Projekt-DB, Knowledge   │ │
│                               │  │  [Markus kontaktieren]            │ │
│                               │  └──────────────────────────────────┘ │
│                               │                                        │
│                               │  ┌─ Follow-Ups ────────────────────┐ │
│                               │  │  [Lessons Learned RetailCorp?]   │ │
│                               │  │  [Verfuegbarkeit Markus S.?]     │ │
│                               │  └──────────────────────────────────┘ │
│                               │                                        │
│                               │  ┌──────────────────────────────────┐ │
│                               │  │  Frag mich etwas...       [🎤]  │ │
│                               │  └──────────────────────────────────┘ │
└───────────────────────────────┴────────────────────────────────────────┘
```

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Slide-Over Wide (640px). Hauptinhalt bleibt sichtbar. |
| `breakpoint-lg` | Slide-Over Wide (640px). |
| `breakpoint-md` | Fullscreen. Header mit Back-Button. |
| `breakpoint-sm` | Fullscreen. Voice-Button prominent. Bottom Nav bleibt. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Knowledge Base | Vector-DB + Projekt-DB + Dokument-Repository | On-Demand (per Query) |
| Experten-Profil | API: `GET /consultants/{id}` (abgespeckt) | On-Demand |
| Dokument-Preview | API: `GET /documents/{id}/preview` | On-Demand |
| Chat-Antwort | API: `POST /knowledge-agent/chat` (Streaming) | On-Demand |
| Suggested Queries | API: `GET /knowledge-agent/suggestions?context={screen}` | On-Load |
| Voice-Transkription | Browser Speech API (on-device) | Real-time |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Chat Interface (explorativer Multi-Turn). |
| **Synthese** | Agent liefert Synthesen, nicht Dokument-Links. Strukturierte Antworten mit Projekt-Cards. |
| **Quellen-Transparenz** | Jede Aussage referenziert Quelle (Projekt, Dokument, Person). Inline-Links. |
| **Experten-Referral** | Agent identifiziert relevante Kollegen: "[Av] Markus S. — 3 SAP Retail Projekte. [Kontaktieren]". |
| **Dokument-Zugang** | Inline Preview Thumbnails fuer referenzierte Dokumente. Klick → Preview Panel. |
| **Follow-Up Suggestions** | Nach jeder Antwort: 2-3 vorgeschlagene Follow-Up-Fragen als Chips. |
| **Voice Input** | Mikrofon-Button im Chat-Input (DS 6.9). |
| **Streaming** | `ktype-ai-reveal` fuer Agent-Responses. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Dokument in Agent-Antwort | Inline Thumbnail (48px) + Dateiname. Klick → Preview Panel (Slide-Over oder Fullscreen). |
| Lessons Learned | Inline AI Content Card mit strukturierter Zusammenfassung. |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Suggested Queries** | Basierend auf aktuellem Screen-Kontext. Opportunity offen? → "Erfahrung mit [Branche]?". |
| **Experten-Ranking** | Experten nach Relevanz sortiert (Match-Score zu aktueller Frage). |
| **Kontext-Awareness** | Wenn aus Opportunity-Screen gestartet: Agent kennt Account/Branche/Anforderungen. |

---

## 9. Interaktions-Flows

### Flow 1: Knowledge-Abfrage (5 Min)
1. Stefan oeffnet Knowledge Agent (Sidebar oder Command Bar)
2. Slide-Over oeffnet sich mit Suggested Queries
3. Stefan tippt oder spricht: "Welche Erfahrung haben wir mit SAP im Retail?"
4. Agent antwortet mit Synthese (Streaming, ~10s): 4 Projekte, Experten, Dokumente
5. Stefan klickt "Lessons Learned RetailCorp?" (Follow-Up)
6. Agent liefert strukturierte Lessons Learned
7. Stefan klickt auf Dokument-Preview → Slide-Over innerhalb Slide-Over (Nested)

### Flow 2: Mobile Voice-Abfrage (2 Min)
1. Lisa tippt auf "Wissen" in Bottom Nav
2. Fullscreen Chat oeffnet sich
3. Lisa tippt 🎤 → spricht: "Wie gehen wir bei Change-Risiken vor?"
4. Transkription → Agent antwortet mit Methodik-Synthese
5. Lisa liest Antwort, schliesst Chat

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Sidebar / Command Bar | Knowledge Agent (Slide-Over) | Klick / Command | Query (optional) |
| Copilot Sidebar | Knowledge Agent | "Frag den Knowledge Agent" | Query + Kontext |
| Agent Response | Consultant Profile (Slide-Over) | Klick auf Experten-Name | `consultantId` |
| Agent Response | Document Preview | Klick auf Dokument | `documentId` |
| Agent Response | Staffing & Matching | "Markus fuer Projekt anfragen" | `consultantId`, `opportunityId` |
| Bottom Nav (Mobile) | Knowledge Agent (Fullscreen) | Tap "Wissen" | — |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Chat Layout | `component-specs/ai-interaction/chat-interface.md` |
| Agent Responses | DS 6.4 AI-Generated Content Pattern |
| Voice Input | DS 6.9 Voice Input Pattern |
| Slide-Over | `component-specs/composition/slide-over-panel.md` (Wide, 640px) |

---

## 12. Akzeptanzkriterien

- [ ] Slide-Over Wide (640px) als primaerer Container
- [ ] Freitext-Input + Voice Input (DS 6.9)
- [ ] Agent liefert Synthese (nicht nur Links)
- [ ] Strukturierte Antworten mit Projekt-Cards, Experten, Dokument-Previews
- [ ] Quellen-Transparenz mit Inline-Links
- [ ] Follow-Up Suggestions (2-3 Chips nach jeder Antwort)
- [ ] Streaming mit `ktype-ai-reveal`
- [ ] Experten-Referral mit Kontakt-Option
- [ ] Dokument-Inline-Preview mit Klick zu Preview Panel
- [ ] Kontext-Awareness (wenn aus Opportunity gestartet)
- [ ] Mobile: Fullscreen + Voice-Button prominent

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll der Chat-Verlauf persistent sein (ueber Sessions)? | Offen — empfohlen fuer haeufige Nutzer |
| 2 | Maximale Antwortlaenge (Token-Limit)? | Offen — Vorschlag: 500 Woerter |
| 3 | Kann der Agent proaktiv auf veraltetes Wissen hinweisen? | Offen — "Dieses Dokument ist >12 Monate alt" |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Slide-Over Chat. Voice Input. Synthese-Antworten. Experten-Referral. |
