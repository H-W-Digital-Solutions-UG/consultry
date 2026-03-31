# Mobile Signal Feed — Screen Spec

**Screen-ID:** MOB-01
**PRD-Modul:** 9.1 — Signal Detection & Enrichment
**Journey(s):** J1-S1 (Katrin entdeckt Signal), J15-S1 (Ausschreibungs-Feed)
**Layout-Typ:** Progressive Disclosure (Single Column Stack)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Signal-Scan unterwegs |
| **Sekundaer** | Thomas (Quick-Review) |
| **Frequenz** | Katrin: 5-10x/Tag mobil (kurze Sessions, 1-2 Min.). Thomas: 1-2x/Tag. |
| **Trigger** | Bottom Nav "Signale" (Katrin), Push Notification "Neues Signal", Copilot Briefing Link. |
| **Herkunft** | Bottom Navigation Bar (primaer), Push Notification, Copilot Briefing. |
| **Ziel** | Neue Signale scannen, vielversprechende markieren/merken, Quick-Actions ausfuehren (Brief generieren, archivieren). Detail-Ansicht im Bottom Sheet. |
| **Geraete** | Smartphone (primaer). Touch-optimiert. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | auf dem Handy neue Signale im Feed sehen | ich unterwegs keine heissen Leads verpasse |
| 2 | Katrin | per Tap ein Signal im Bottom Sheet oeffnen | ich Details sehe ohne den Feed zu verlieren |
| 3 | Katrin | per Swipe ein Signal archivieren | ich schnell aufraeuemen kann |
| 4 | Katrin | ein Signal als "Merken" markieren | ich es spaeter am Desktop weiterbearbeite |
| 5 | Thomas | nur High-Score-Signale (>80) sehen | ich unterwegs strategische Signale pruefen kann |
| 6 | Katrin | direkt aus dem Signal eine Quick-Action starten | ich z.B. einen Brief generieren lasse |

---

## 3. Layout — Mobile

**Layout-Typ: Progressive Disclosure (Single Column Stack)**
**Begruendung:** Mobile erfordert vertikalen Stack. Kein Bento Grid — Signal Feed ist eine priorisierte, chronologische Liste mit klarer L0→L1→L2 Hierarchie.

```
┌─ Status Bar ────────────────────────────────┐
│  9:41                              ■ ▶ 87%  │
├─────────────────────────────────────────────┤
│                                             │
│  Signale                    [🔍] [Filter]   │  <- Sticky Header
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─ Signal Card (L0) ─────────────────────┐ │
│  │  ⚡ Leadership-Wechsel                  │ │
│  │  RetailCorp AG · Score [87]             │ │
│  │  vor 2h · Dealfront                     │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─ Signal Card (L0) ─────────────────────┐ │
│  │  📋 Ausschreibung                      │ │
│  │  Bundesamt fuer Sicherheit · Score [72] │ │
│  │  vor 5h · TED                           │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─ Signal Card (L0) ─────────────────────┐ │
│  │  🔄 Vertrags-Renewal                   │ │
│  │  MedTech GmbH · Score [65]              │ │
│  │  vor 1d · CRM                           │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ... (Pull-to-Refresh, Infinite Scroll)     │
│                                             │
├─────────────────────────────────────────────┤
│  ◇ Signale  ◇ Pipeline  ◇ Matching  ◇ AI  │  <- Bottom Nav
└─────────────────────────────────────────────┘
```

**Signal Card (L0 — Mobile):**
- Signal-Typ-Emoji + Typ-Label
- Account-Name + Score Badge (kompakt)
- Zeitstempel + Quelle
- Farbcodierter linker Rand (wie Desktop, DS 6.2)
- Kein Action-Button sichtbar — Tap oeffnet Bottom Sheet (L1)

---

## 4. Layout — Signal Detail (Bottom Sheet L1/L2)

```
┌─────────────────────────────────────────────┐
│  [Hintergrund: Feed, abgedunkelt]           │
├─────────────────────────────────────────────┤
│          ━━━━━━━━━━━                        │  <- Drag Handle
│                                             │
│  ⚡ Leadership-Wechsel              [X]     │  <- Header
│  RetailCorp AG                              │
│                                             │
│  Score: [87]  Excellent                     │  <- Score Ring
│  ■■■■■■■■■■ Relevanz:  92                  │
│  ■■■■■■■■░░ Aktualitaet: 84                │
│  ■■■■■■■■■░ Passung: 88                    │
│                                             │
│  ─────────────────────────────────────────  │
│                                             │
│  Neuer CTO mit SAP-Hintergrund.            │
│  Vorher: Director IT bei ConsultCo.         │
│  Relevante Projekte: 3 SAP-Migrationen     │
│  in den letzten 5 Jahren.                   │
│                                             │
│  Quelle: Dealfront · 31.03.2026            │
│                                             │
├─────────────────────────────────────────────┤
│  [Merken]        [Brief generieren]         │  <- Footer Actions
└─────────────────────────────────────────────┘
```

- Bottom Sheet Variante: **Half** (50%), snap-bar zu **Expanded** (90%)
- Score Breakdown (Bar-Variante) direkt sichtbar
- Footer mit Primaer-Aktion "Brief generieren" und Sekundaer "Merken"

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Signal-Liste | API: `GET /signals?sort=score&persona={id}` | Real-time via WebSocket (neue Signale), Pull-to-Refresh |
| Signal-Detail | API: `GET /signals/{id}` | On-Demand (Bottom Sheet oeffnen) |
| Score + Breakdown | AI-Engine, vorberechnet | Bei Signal-Erstellung |
| Bookmark-Status | API: `GET /signals/{id}/bookmark` | Client-seitig gecached |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Invisible AI (Score-basierte Sortierung, keine sichtbare AI-UI) |
| **Score** | KI-Score pro Signal (0-100), farbcodierter Badge |
| **Brief generieren** | Quick-Action im Bottom Sheet Footer. Leitet zur Copilot-generierten Brief-Erstellung. |
| **Keine Voice auf Mobile Feed** | Voice Input nicht im Feed selbst — zu laut/oeffentlich fuer mobile Nutzung. |

---

## 7. Preview Panel Integration

Nicht zutreffend — Signal Feed zeigt keine Dokument-Vorschauen. Dokumente erscheinen erst im Engagement Brief (separater Screen).

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Smart-Sortierung** | Signale nach persoenlicher Relevanz sortiert (Katrin: Branchenfokus, Thomas: Umsatz-Potenzial). |
| **"Du wirst wahrscheinlich..."** | Kein Predictive Card auf Mobile — zu wenig Platz. Nur auf Desktop Signal Feed. |
| **Push-Trigger** | High-Score-Signale (>85) loesen Push Notification aus. |

---

## 9. Interaktions-Flows

### Flow 1: Signal scannen und merken
1. Katrin oeffnet Bottom Nav → "Signale"
2. Feed laedt mit KI-sortierten Signal Cards (L0)
3. Katrin scrollt, scannt Scores und Typ-Labels
4. Tap auf Signal Card → Bottom Sheet (Half, L1)
5. Katrin liest Detail, tippt "Merken"
6. Bottom Sheet schliesst, Signal zeigt Bookmark-Icon
7. Spaeter am Desktop: Bookmark-Filter im Signal Feed

### Flow 2: Brief generieren
1. Katrin oeffnet Signal im Bottom Sheet
2. Swipe up → Expanded (90%, L2)
3. Tap "Brief generieren"
4. Loading-State im Button (Spinner)
5. Redirect zu Copilot Briefing (Mobile Fullscreen)

### Flow 3: Archivieren per Swipe
1. Katrin swipet Signal Card nach links
2. Rote "Archivieren" Action erscheint
3. Loslassen: Signal wird archiviert
4. Undo-Toast (5s): "Signal archiviert. [Rueckgaengig]"

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Mobile Signal Feed | Signal Detail (Bottom Sheet) | Tap auf Signal Card | `signalId` |
| Signal Detail | Copilot Briefing (Mobile) | Tap "Brief generieren" | `signalId`, `accountId` |
| Signal Detail | Opportunity Intake (Bottom Sheet) | Tap "Opportunity erstellen" | `signalId`, Pre-Fill-Daten |
| Push Notification | Mobile Signal Feed | Tap auf Push | `signalId` (Scroll-to + Auto-Open Bottom Sheet) |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Signal Feed (Inspiration) | Stitch "Signal Hub" — Dark/Amber Theme (NUR Inspiration, nicht kanonisch) |
| Signal Cards | DS 6.2 Signal Feed Pattern, angepasst fuer Mobile Card-Stack |
| Bottom Sheet | Neues Pattern, kein Stitch-Aequivalent |

---

## 12. Akzeptanzkriterien

- [ ] Signal Feed laedt in <2s auf 4G-Verbindung
- [ ] Pull-to-Refresh aktualisiert den Feed
- [ ] Signal Cards zeigen Typ-Emoji, Account, Score Badge, Zeitstempel
- [ ] Tap auf Card oeffnet Bottom Sheet (Half) mit Detail
- [ ] Swipe up auf Bottom Sheet expanded zu 90%
- [ ] Swipe links auf Card archiviert mit Undo-Toast
- [ ] "Brief generieren" leitet zu Copilot Briefing
- [ ] Push Notification oeffnet Feed und scrollt zum Signal
- [ ] Bottom Nav zeigt Badge bei neuen Signalen
- [ ] Infinite Scroll fuer >20 Signale
- [ ] Filter (minimal: Score >= Schwellwert, Signal-Typ) als Half-Bottom-Sheet

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll Swipe-Archivieren mit Haptic Feedback begleitet werden? | Offen |
| 2 | Ab welchem Score loest Push Notification aus (85 oder 80)? | Offen — PRD 9.1 definiert 85 |
| 3 | Offline-Modus: Cached Signale anzeigen oder "Keine Verbindung"? | Offen |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Bottom Sheet Detail. Swipe-Archivieren. Push-Integration. |
