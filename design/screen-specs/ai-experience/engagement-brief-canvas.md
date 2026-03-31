# Engagement-Brief-Canvas — Screen Spec

**Screen-ID:** AI-EXP-05
**PRD-Modul:** 10.1 — Opportunity Intelligence
**Journey(s):** J1-S3 (Katrin qualifiziert Opportunity mit Brief)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Engagement Brief erstellen |
| **Sekundaer** | Thomas (Review), Stefan (fachlicher Input) |
| **Frequenz** | Katrin: 5-10x/Woche (Quick-Briefs, 5-10 Min). |
| **Trigger** | Signal Detail → "Brief generieren", Opportunity Detail → "Brief aktualisieren", Copilot: "Erstelle Brief fuer RetailCorp". |
| **Herkunft** | Signal Feed / Signal Detail (primaer), Opportunity Detail, Copilot. |
| **Ziel** | KI-generierten Engagement Brief erstellen, pruefen, anpassen, als Gespraechsvorbereitung nutzen. |
| **Geraete** | Desktop (primaer), Mobile (Read-only im Copilot Briefing). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | aus einem Signal automatisch einen Engagement Brief generieren | ich in 30 Sekunden ein Erstgespraech vorbereiten kann |
| 2 | Katrin | den Brief um Account-Kontext anreichern (Historie, Beziehungen, Projekte) | mein Gespraech fundiert ist |
| 3 | Katrin | einzelne Abschnitte regenerieren oder manuell anpassen | der Brief meinen Stil hat |
| 4 | Thomas | den Brief reviewen und Kontext beisteuern (Warm Path, strategische Hinweise) | Katrin die beste Gespraechsbasis hat |
| 5 | Katrin | den Brief als Talking Points exportieren (Bullet-Format) | ich ihn im Meeting schnell scannen kann |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure**
**Begruendung:** Brief-Erstellung ist ein linearer, dokumentenzentrierter Flow. Canvas mit Abschnitten, Context Rail mit Quellen und Copilot.

```
┌─ Sidebar ─┬─ Canvas Toolbar (Compact) ───────────────────────────────┐
│            │  [↶] [↷]  │ [✨ Regenerieren] │ [Bearbeiten] │ [Export] │
│  Growth    ├──────────────────────────────────────────────────────────┤
│  > Signale │                                                          │
│            │  ┌─ Brief Content (2/3) ────────────────────────────────┐│
│            │  │                                                       ││
│            │  │  Engagement Brief: RetailCorp AG                      ││
│            │  │  Generiert: 31.03.2026 · Confidence: 87%             ││
│            │  │                                                       ││
│            │  │  ┌─ Kontext (ai-surface) ────────────────────────┐   ││
│            │  │  │  RetailCorp AG hat einen neuen CTO mit SAP-    │   ││
│            │  │  │  Hintergrund eingestellt. Dies signalisiert...  │   ││
│            │  │  │  ¹ Dealfront, 28.03.2026                       │   ││
│            │  │  └────────────────────────────────────────────────┘   ││
│            │  │                                                       ││
│            │  │  ┌─ Unser Fit (ai-surface) ──────────────────────┐   ││
│            │  │  │  mpl Consulting hat 4 erfolgreiche SAP-        │   ││
│            │  │  │  Migrationen im Retail-Bereich durchgefuehrt.  │   ││
│            │  │  │  Relevant: Markus S. (96 Match), Stefan K.     │   ││
│            │  │  └────────────────────────────────────────────────┘   ││
│            │  │                                                       ││
│            │  │  ┌─ Gespraechsstrategie (ai-surface) ────────────┐   ││
│            │  │  │  1. Warm Path: Stefan kennt den CTO            │   ││
│            │  │  │  2. Referenz: RetailCorp-aehnliches Projekt    │   ││
│            │  │  │  3. Einstieg: NIS2-Compliance als Aufhaenger   │   ││
│            │  │  └────────────────────────────────────────────────┘   ││
│            │  └───────────────────────────────────────────────────────┘│
│            │  ┌─ Context Rail (1/3) ─────────────────────────────────┐│
│            │  │  ─── Quellen ───                                      ││
│            │  │  [📄] Dealfront Signal                                ││
│            │  │  [📄] Account-Historie (3 Projekte)                   ││
│            │  │  [📄] LinkedIn CTO-Profil                             ││
│            │  │                                                       ││
│            │  │  ─── Beziehungen ───                                  ││
│            │  │  Stefan K. → CTO (LinkedIn, 2. Grad)                 ││
│            │  │  Thomas → CFO Dr. Weber (direkt)                     ││
│            │  │                                                       ││
│            │  │  ─── Copilot ───                                     ││
│            │  │  "Finde aehnliche Deals"                      [→]    ││
│            │  └───────────────────────────────────────────────────────┘│
└────────────┴──────────────────────────────────────────────────────────┘
```

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 Brief + 1/3 Context Rail. |
| `breakpoint-lg` | Brief volle Breite. Context Rail als Toggle-Panel. |
| `breakpoint-md` | Brief volle Breite. Compact Toolbar. |
| `breakpoint-sm` | Read-only Brief im Copilot Briefing (Mobile). Kein Canvas-Editing. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Signal-Daten | API: `GET /signals/{id}` | On-Load |
| Account-Kontext | API: `GET /accounts/{id}` (Historie, Beziehungen) | On-Load |
| AI-Brief | API: `POST /briefs/generate` (Streaming) | On-Demand |
| Warm Paths | API: `GET /accounts/{id}/warm-paths` | On-Load |
| Aehnliche Deals | API: `GET /opportunities/similar?accountId={id}` | On-Demand (Copilot) |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | AI Canvas (generativ + iterativ) |
| **Brief-Generierung** | 3 Abschnitte: Kontext, Unser Fit, Gespraechsstrategie. Streaming mit `ktype-ai-reveal`. ~15s. |
| **Quellen-Transparenz** | Nummerierte Fussnoten pro Aussage. Quellen in Context Rail verlinkt. |
| **Abschnitt-Iteration** | Einzelne Abschnitte regenerierbar mit Prompt ("kuerzer", "mit Referenz-Projekt"). |
| **Warm Path Integration** | Beziehungs-Daten aus Account Plan fliessen in Gespraechsstrategie ein. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Quellen-Dokumente | In Context Rail: Inline Preview (Thumbnail) fuer referenzierte Quellen. Klick → Slide-Over Preview. |
| Export-Vorschau | "Export als PDF" → Preview Panel (Fullscreen). |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Warm Path Priorisierung** | Staerkste Beziehung zuerst in Gespraechsstrategie. |
| **Aehnliche Deals** | "3 aehnliche Deals: 2 gewonnen, 1 verloren." Learnings fliessen in Brief ein. |
| **Timing-Empfehlung** | "Optimaler Kontakt-Zeitpunkt: innerhalb 48h (CTO ist neu)." |

---

## 9. Interaktions-Flows

### Flow 1: Quick Brief aus Signal (5 Min)
1. Katrin klickt "Brief generieren" im Signal Detail (oder Mobile Bottom Sheet)
2. Canvas laedt, KI generiert Brief (Streaming, ~15s)
3. Katrin scannt 3 Abschnitte
4. Katrin sieht Warm Path in Gespraechsstrategie → "Stefan kennt CTO"
5. Katrin exportiert als Talking Points → geht zum Telefonat

### Flow 2: Detaillierter Brief mit Iteration (15 Min)
1. Katrin oeffnet Brief aus Opportunity Detail
2. KI generiert basierend auf vollstaendigem Opportunity-Kontext
3. Katrin klickt "Regenerieren" auf "Unser Fit" mit Prompt "mit konkreten Zahlen"
4. KI regeneriert Abschnitt (~10s)
5. Katrin fuegt manuell einen Absatz zu "Gespraechsstrategie" hinzu
6. Thomas kommentiert im Context Rail: "CFO Dr. Weber ist preissensitiv — betone ROI"
7. Katrin passt an, exportiert

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Signal Detail / Feed | Brief-Canvas | "Brief generieren" | `signalId`, `accountId` |
| Opportunity Detail | Brief-Canvas | "Brief aktualisieren" | `opportunityId` |
| Brief-Canvas | Talking Points (Export) | "Export" | `briefId`, Format |
| Brief-Canvas | Copilot Briefing (Mobile) | Auto-Sync | `briefId` (Read-only) |
| Brief-Canvas | Outreach Editor | "Kontakt aufnehmen" | `briefId`, `accountId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Brief Layout | DS 6.4 AI-Generated Content Pattern |
| Canvas Toolbar | `component-specs/ai-interaction/canvas-toolbar.md` (Compact) |
| Context Rail | DS 6.1 Dashboard/Cockpit Layout (1/3 Pattern) |

---

## 12. Akzeptanzkriterien

- [ ] Brief-Generierung aus Signal oder Opportunity in <30s
- [ ] 3 Abschnitte: Kontext, Unser Fit, Gespraechsstrategie
- [ ] Streaming mit `ktype-ai-reveal`
- [ ] Quellen-Fussnoten mit Verlinkung
- [ ] Warm Path Integration in Gespraechsstrategie
- [ ] Abschnitt-Regenerierung mit Prompt
- [ ] Manuelle Bearbeitung aller Abschnitte
- [ ] Context Rail mit Quellen, Beziehungen, Copilot
- [ ] Export als PDF und Talking Points (Bullet-Format)
- [ ] Read-only Sync zu Mobile Copilot Briefing

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll der Brief automatisch aktualisiert werden wenn sich Signal-Daten aendern? | Offen |
| 2 | Talking Points Format: nummeriert oder Bullet? | Offen — UX-Testing |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 3-Abschnitt-Brief. Warm Path. Context Rail. Quick-Brief-Flow. |
