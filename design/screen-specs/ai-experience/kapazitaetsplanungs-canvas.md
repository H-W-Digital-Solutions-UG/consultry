# Kapazitaetsplanungs-Canvas — Screen Spec

**Screen-ID:** AI-EXP-07
**PRD-Modul:** 8.2 — Capacity & Availability
**Journey(s):** J6-S2 (Kapazitaetsplanungs-Canvas)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Strategische Kapazitaetsplanung, Engpass-Management |
| **Sekundaer** | Katrin (Team-Allokation fuer Deals, Verfuegbarkeits-Check), Martina (Export, Berichterstellung) |
| **Frequenz** | Thomas: 1-2x/Woche (30 Min, Pipeline-Review). Katrin: 3-5x/Woche (10-15 Min, Quick-Checks). |
| **Trigger** | Sidebar "Team → Kapazitaetsplanung", Cockpit Dashboard → "Auslastung" KPI-Karte, Command Bar "/ Kapazitaet", Copilot: "Zeig mir die Auslastung naechsten Monat". |
| **Herkunft** | Sidebar (primaer), Cockpit Dashboard, Command Bar, Copilot. |
| **Ziel** | KI-gestuetzte Ressourcenplanung: Team-Allokation ueber Projekte visualisieren, Luecken erkennen, Szenarien planen, Konflikte loesen. |
| **Geraete** | Desktop (ausschliesslich). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | eine Gantt-artige Uebersicht aller Berater-Allokationen sehen | ich Auslastung und Engpaesse auf einen Blick erkenne |
| 2 | Thomas | Ueberallokationen automatisch hervorgehoben bekommen | ich Konflikte sofort loese |
| 3 | Thomas | "Was-waere-wenn"-Szenarien durchspielen | ich Planungsentscheidungen datengestuetzt treffe |
| 4 | Katrin | per Drag-and-Drop Berater auf Projekte zuweisen | die Allokation schnell anpasse |
| 5 | Katrin | KI-Empfehlungen fuer Luecken und Skill-Matches sehen | ich optimale Besetzungen finde |
| 6 | Thomas | KPI-Zusammenfassungen (Auslastung %, Engpaesse, verfuegbare Berater) sehen | ich den Gesamt-Status einschaetze |
| 7 | Martina | die Kapazitaetsplanung als Report exportieren | ich sie in Partner-Meetings nutze |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure** (NICHT Bento Grid)
**Begruendung:** Kapazitaetsplanung ist ein visueller, interaktiver Prozess. Die Gantt-Ansicht erfordert horizontalen Raum fuer Zeitleisten. Progressive Disclosure: KPI-Summary → Timeline-Exploration → Szenario-Vergleich → Export.

```
┌─ Sidebar ─┬─ Canvas Toolbar ────────────────────────────────────────────┐
│            │  [KW 14-26 ▾] │ [Team ▾] │ [Skill ▾] │ [Szenario A ▾]    │
│  Team      │  [✨ Optimieren] │ [+ Szenario] │ [Export]                 │
│  > Kapaz.  ├────────────────────────────────────────────────────────────┤
│            │                                                            │
│            │  ┌─ KPI-Summary Bar ──────────────────────────────────┐   │
│            │  │  Auslastung: [87%] │ Verfuegbar: [12 Berater]     │   │
│            │  │  Engpaesse: [3] │ Ueberallokation: [2 Berater]    │   │
│            │  └────────────────────────────────────────────────────┘   │
│            │                                                            │
│            │  ┌─ Gantt Timeline (2/3) ─────────────────────────────┐   │
│            │  │         KW14  KW15  KW16  KW17  KW18  KW19  KW20  │   │
│            │  │  ───────┬─────┬─────┬─────┬─────┬─────┬─────┬──── │   │
│            │  │  Markus │████████████│     │     │█████████████████│   │
│            │  │  S.     │ RetailCorp │     │     │  MedTech AG     │   │
│            │  │         │ (80%)      │ ░░░ │ ░░░ │  (100%)         │   │
│            │  │  ───────┤            │     │     │                 │   │
│            │  │  Stefan │████████████████████████│                 │   │
│            │  │  K.     │     RetailCorp (60%)   │░░░░░░░░░░░░░░░░│   │
│            │  │  ───────┤                        │                 │   │
│            │  │  Lisa   │░░░░░░░░░░░░░░░░░░░░░░░│█████████████████│   │
│            │  │  T.     │    Verfuegbar          │ FashionGroup    │   │
│            │  │         │                        │ (80%)           │   │
│            │  │  ───────┤                        │                 │   │
│            │  │  Tim    │████████████████████████████████████[⚠️]  │   │
│            │  │  B.     │     FinanceAG (100%) + MedTech (40%)    │   │
│            │  │         │     [Ueberallokation: 140%]             │   │
│            │  │  ───────┴─────────────────────────────────────────│   │
│            │  │                                                    │   │
│            │  │  ████ = Zugewiesen  ░░░ = Verfuegbar              │   │
│            │  │  [⚠️] = Ueberallokation (semantic-danger)         │   │
│            │  └────────────────────────────────────────────────────┘   │
│            │                                                            │
│            │  ┌─ Context Rail (1/3) ───────────────────────────────┐   │
│            │  │                                                     │   │
│            │  │  ─── AI-Empfehlungen ───                           │   │
│            │  │  ┌─ ai-surface ─────────────────────────────┐      │   │
│            │  │  │  ✨ Markus hat Luecke in KW 15-18.        │      │   │
│            │  │  │  Vorschlag: MedTech vorziehen oder        │      │   │
│            │  │  │  internes Projekt zuweisen.               │      │   │
│            │  │  │  [Vorschlag anwenden]                     │      │   │
│            │  │  └───────────────────────────────────────────┘      │   │
│            │  │                                                     │   │
│            │  │  ┌─ ai-surface ─────────────────────────────┐      │   │
│            │  │  │  ✨ Lisa's Skill-Profil passt zu          │      │   │
│            │  │  │  Projekt FinanceAG (Match: 82%).          │      │   │
│            │  │  │  Tim entlasten?                           │      │   │
│            │  │  │  [Lisa zuweisen] [Details]                │      │   │
│            │  │  └───────────────────────────────────────────┘      │   │
│            │  │                                                     │   │
│            │  │  ┌─ ai-surface ─────────────────────────────┐      │   │
│            │  │  │  ⚠️ Tim B. ist ab KW 16 ueberallokiert    │      │   │
│            │  │  │  (140%). Empfehlung: MedTech-Anteil       │      │   │
│            │  │  │  auf Lisa umverteilen.                    │      │   │
│            │  │  │  [Konflikt loesen]                        │      │   │
│            │  │  └───────────────────────────────────────────┘      │   │
│            │  │                                                     │   │
│            │  │  ─── Copilot ───                                   │   │
│            │  │  "Was passiert wenn RetailCorp um 4        [→]     │   │
│            │  │   Wochen verlaengert wird?"                         │   │
│            │  └─────────────────────────────────────────────────────┘   │
└────────────┴────────────────────────────────────────────────────────────┘
```

**2/3 + 1/3 Asymmetrie:** Gantt Timeline (2/3) + Context Rail (1/3). KPI-Summary Bar spannt sich ueber die volle Breite oberhalb der Timeline.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 Gantt Timeline + 1/3 Context Rail. KPI-Summary Bar volle Breite. |
| `breakpoint-lg` | Gantt Timeline volle Breite. Context Rail als Slide-Over (Toggle). KPI-Summary weiterhin sichtbar. |
| `breakpoint-md` | Gantt Timeline horizontal scrollbar. Toolbar Compact (Filter als Dropdown). Context Rail als Bottom Sheet. |
| `breakpoint-sm` | Hinweis: "Kapazitaetsplanung am Desktop empfohlen." KPI-Summary als Read-only Stack. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Berater-Liste | API: `GET /consultants?status=active` | On-Load, Cached |
| Allokationen | API: `GET /allocations?range={start}-{end}` | On-Load, Real-time via WebSocket |
| Projekt-Zuweisungen | API: `GET /projects/allocations?range={start}-{end}` | On-Load |
| KPI-Summary | API: `GET /capacity/summary?range={start}-{end}` | On-Load, alle 60s |
| AI-Empfehlungen | API: `POST /capacity/recommendations` (Streaming) | On-Load + bei Aenderung |
| Szenario-Varianten | API: `POST /capacity/scenarios` | On-Demand |
| Skill-Match | API: `GET /consultants/{id}/match?projectId={pid}` | On-Demand |
| Berater-Verfuegbarkeit | API: `GET /consultants/{id}/availability` | Real-time |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | AI Canvas (analytisch + optimierend). KI analysiert Kapazitaeten, erkennt Muster, empfiehlt Optimierungen. |
| **Luecken-Erkennung** | KI identifiziert ungeplante Zeitraeume bei Beratern: "Markus hat Luecke KW 15-18." Proaktiv in Context Rail. |
| **Skill-Matching** | KI schlaegt Berater fuer Projekte basierend auf Skills und Verfuegbarkeit vor: "Lisa passt zu FinanceAG (82%)." |
| **Konflikt-Losung** | Ueberallokation wird automatisch erkannt. KI schlaegt Umverteilung vor. Streaming mit `ktype-ai-reveal`. |
| **Szenario-Analyse** | "Was-waere-wenn": Thomas fragt via Copilot "Was passiert wenn RetailCorp 4 Wochen laenger dauert?" → KI berechnet Auswirkungen auf alle betroffenen Berater. |
| **Copilot im Canvas** | Context Rail enthaelt Copilot-Prompt fuer ad-hoc Szenario-Fragen. Ergebnis als AI Content Card in Context Rail. |
| **Optimierung** | "Optimieren" Button: KI reorganisiert Allokationen fuer maximale Auslastung bei minimalen Konflikten. Ergebnis als neues Szenario. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Berater-Detail | Klick auf Berater-Name in Timeline → Slide-Over mit Berater-Profil (Kompakt-Ansicht: Skills, aktuelle Projekte, Verfuegbarkeit). |
| Projekt-Detail | Klick auf Projekt-Block in Timeline → Slide-Over mit Projekt-Kurzinfo (Team, Laufzeit, Budget). |
| Export-Vorschau | "Export" → Preview Panel (Fullscreen). Zeigt Kapazitaets-Report als PDF. |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Engpass-Prognose** | "In KW 22-24 sind 6 von 12 SAP-Beratern gebunden. Recruiting oder Freelancer einplanen?" Fruehwarnung 8 Wochen voraus. |
| **Auslastungs-Trend** | Trendlinie der Gesamt-Auslastung ueber 12 Wochen. Anomalien hervorgehoben. |
| **Pipeline-Impact** | "3 Opportunities in Verhandlung wuerden Auslastung auf 95% heben. 2 zusaetzliche Berater noetig." |
| **Verfuegbarkeits-Alerts** | "Stefan K. hat Projektende am 15.04. — noch keine Folge-Allokation." Automatisch in Context Rail. |

---

## 9. Interaktions-Flows

### Flow 1: Woechentlicher Kapazitaets-Check (20 Min)
1. Thomas navigiert zu "Team → Kapazitaetsplanung" (oder Cockpit KPI-Karte "Auslastung")
2. Canvas laedt mit aktueller Gantt-Ansicht (KW 14-26)
3. KPI-Summary zeigt: 87% Auslastung, 3 Engpaesse, 2 Ueberallokationen
4. Thomas sieht Tim als ueberallokiert (rot markiert, `semantic-danger`)
5. Context Rail zeigt AI-Empfehlung: "Lisa auf FinanceAG umverteilen"
6. Thomas klickt "Lisa zuweisen" → Allokation wird als Vorschlag im Gantt angezeigt (gestrichelt)
7. Thomas bestaetigt → Allokation wird gespeichert, Tim's Ueberallokation aufgeloest
8. Thomas stellt Copilot-Frage: "Was passiert wenn RetailCorp verlaengert wird?"
9. Copilot zeigt Szenario-Ergebnis als AI Content Card

### Flow 2: Katrin prueft Verfuegbarkeit fuer Deal (10 Min)
1. Katrin oeffnet Kapazitaetsplanung ueber Command Bar
2. Filtert nach Skill "SAP S/4HANA" und Zeitraum "KW 18-30"
3. Gantt zeigt gefilterte Ansicht: 4 relevante Berater
4. Katrin sieht Markus hat Luecke KW 18-22 → passt zum geplanten Projekt
5. Klick auf Markus → Slide-Over mit Profil und Match-Score
6. Katrin notiert Markus fuer Staffing-Vorschlag und wechselt zum Opportunity Detail

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Sidebar / Cockpit Dashboard | Kapazitaetsplanungs-Canvas | "Auslastung"-Karte oder Navigation | Zeitraum (optional) |
| Command Bar | Kapazitaetsplanungs-Canvas | "/ Kapazitaet" | Filter (optional) |
| Kapazitaetsplanungs-Canvas | Consultant Profile (Slide-Over) | Klick auf Berater-Name | `consultantId` |
| Kapazitaetsplanungs-Canvas | Projekt-Detail (Slide-Over) | Klick auf Projekt-Block | `projectId` |
| Kapazitaetsplanungs-Canvas | Staffing & Matching | "Berater fuer Projekt anfragen" | `consultantId`, `opportunityId` |
| Kapazitaetsplanungs-Canvas | Export (PDF) | "Export" Button | Zeitraum, Filter, Format |
| Copilot Sidebar | Kapazitaetsplanungs-Canvas | "Zeig Auslastung naechsten Monat" | Zeitraum |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Gantt Layout | Kein Stitch-Aequivalent. Eigenes Pattern basierend auf DS 1.7 Architektonische Asymmetrie. |
| KPI-Summary Bar | `component-specs/data-display/charts-kpi.md` (Compact-Variante) |
| AI-Empfehlungen | DS 6.4 AI-Generated Content Pattern |
| Canvas Toolbar | `component-specs/ai-interaction/canvas-toolbar.md` (Custom: Time Range + Filter statt Varianten) |
| Context Rail | DS 6.1 Dashboard/Cockpit Layout (1/3 Pattern) |
| Berater-Allokation-Bloecke | Eigenes Pattern. Farben: Projekt-spezifisch aus Palette, `semantic-danger` fuer Ueberallokation. |

---

## 12. Akzeptanzkriterien

- [ ] Gantt-Timeline mit Beratern als Zeilen und Wochen/Monaten als Spalten
- [ ] Farbcodierte Allokations-Bloecke pro Projekt
- [ ] Drag-and-Drop-Zuweisung von Beratern zu Zeitraeumen
- [ ] Ueberallokation visuell hervorgehoben (`semantic-danger`, Warnsymbol)
- [ ] Verfuegbare Zeitraeume als leere/gestrichelte Bloecke erkennbar
- [ ] KPI-Summary Bar mit Auslastung %, Verfuegbare Berater, Engpaesse, Ueberallokationen
- [ ] AI-Empfehlungen in Context Rail (Luecken, Skill-Matches, Konflikte)
- [ ] Streaming der AI-Empfehlungen mit `ktype-ai-reveal`
- [ ] Szenario-Planung: "Was-waere-wenn"-Varianten erstellen und vergleichen
- [ ] Filter nach Team, Skill, Zeitraum
- [ ] Copilot-Prompt in Context Rail fuer Ad-hoc-Fragen
- [ ] Klick auf Berater → Profil-Slide-Over
- [ ] Klick auf Projekt-Block → Projekt-Detail-Slide-Over
- [ ] Export als PDF-Report
- [ ] Engpass-Prognose mit 8-Wochen-Fruehwarnung

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Sollen Freelancer/Externe in der Kapazitaetsplanung sichtbar sein? | Offen — empfohlen fuer Phase 2 |
| 2 | Granularitaet: Wochen vs. Tage? Soll umschaltbar sein? | Offen — Default Wochen, Tage als Zoom-Option |
| 3 | Integration mit externen Kalender-Systemen (Outlook, Google Calendar) fuer Abwesenheiten? | Offen — Phase 2 |
| 4 | Sollen Szenarien gespeichert und benannt werden koennen? | Offen — empfohlen |
| 5 | Maximale Anzahl sichtbarer Berater ohne Scroll (Performance)? | Offen — Vorschlag: 25 Zeilen, danach virtualisiertes Scrolling |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Gantt-Timeline mit AI-Empfehlungen. Drag-and-Drop-Allokation. Szenario-Planung. KPI-Summary. Konflikt-Erkennung. |
