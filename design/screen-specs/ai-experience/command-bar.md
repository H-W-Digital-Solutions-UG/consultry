# Command Bar — Screen Spec

**Screen-ID:** AI-EXP-02
**PRD-Modul:** 7.2 — Command Bar
**Journey(s):** Global (alle Journeys)
**Layout-Typ:** Overlay
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — 10-15x/Tag |
| **Sekundaer** | Thomas (3-5x/Tag), Stefan (2-3x/Tag), Martina (5-8x/Tag fuer Admin-Suche) |
| **Frequenz** | Katrins meistgenutzte Interaktion. Ersetzt Menue-Navigation fuer Power-User. |
| **Trigger** | `Cmd+K` / `Ctrl+K` (global), Klick auf Suchfeld in Topbar |
| **Herkunft** | Jeder Screen — Command Bar ist global verfuegbar. |
| **Ziel** | Navigation zu Screen/Entitaet, Suche nach Berater/Kunde/Opportunity, KI-Aktion ausloesen. Zurueck zum Ergebnis-Screen. |
| **Geraete** | Desktop (primaer), Tablet. Mobile: eingeschraenkt (Fullscreen-Suche). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | per Cmd+K sofort suchen und navigieren | ich keine Zeit mit Menue-Klicks verliere |
| 2 | Katrin | Berater nach Name, Skill oder Verfuegbarkeit suchen | ich in <3 Sekunden den richtigen Berater finde |
| 3 | Katrin | KI-Aktionen direkt starten ("Brief generieren fuer RetailCorp") | ich nicht erst zum richtigen Screen navigieren muss |
| 4 | Thomas | per Voice eine Frage stellen | ich unterwegs schnell Antworten bekomme |
| 5 | Martina | Berater-Datensaetze per Name suchen | ich den Admin-Bereich schnell erreiche |
| 6 | Katrin | nach einem Kunden suchen und dessen Pipeline sehen | ich den Gesamtkontext in einem Schritt erhalte |

---

## 3. Layout — Desktop

**Layout-Typ: Overlay** (Command Palette ist ein modaler Overlay, kein eingebetteter Screen)
**Begruendung:** Die Command Palette ueberlagert den aktuellen Screen. Der Nutzer bleibt im Kontext und kehrt nach der Aktion zurueck.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌─ Overlay: neutral-900 40% ────────────────────┐   │
│  │                                                │   │
│  │         ┌─ Command Palette ──────────┐         │   │
│  │         │                            │         │   │
│  │         │  [🔍] Suchen...     [🎤]   │         │   │
│  │         │                            │         │   │
│  │         │  NAVIGATION                │         │   │
│  │         │  Cockpit           Cmd+1   │         │   │
│  │         │  Pipeline          Cmd+2   │         │   │
│  │         │                            │         │   │
│  │         │  BERATER                   │         │   │
│  │         │  [Av] Markus S.      [94]  │         │   │
│  │         │  [Av] Lisa T.        [78]  │         │   │
│  │         │                            │         │   │
│  │         │  KI-AKTIONEN         ✨     │         │   │
│  │         │  Brief generieren          │         │   │
│  │         │  Matching starten          │         │   │
│  │         │                            │         │   │
│  │         │  ── Letzte Aktionen ──     │         │   │
│  │         │  Signal-Feed · 5 Min       │         │   │
│  │         │                            │         │   │
│  │         └────────────────────────────┘         │   │
│  │                                                │   │
│  └────────────────────────────────────────────────┘   │
│                                                      │
│  [Vorheriger Screen bleibt sichtbar dahinter]        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Positionierung:** Zentriert, 20% von oben. Max-width 640px. `surface-glass` Container.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 640px max-width, zentriert, Overlay 40%. |
| `breakpoint-lg` | 600px max-width, zentriert. |
| `breakpoint-md` | 90vw, zentriert. |
| `breakpoint-sm` | Fullscreen. Kein Overlay. Input am oberen Rand, volle Breite. Ergebnisse darunter scrollbar. Close via `X` oder Back-Geste. Bottom Navigation Bar ausgeblendet waehrend Command Bar aktiv. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung | Performance |
|-------|--------|---------------|-------------|
| Navigation-Items | Statisch (Sidebar-Struktur) | App-Start | Instant (<10ms) |
| Berater (Name, Skills, Score) | Suchindex (Elasticsearch/Meilisearch) | Near-realtime | <100ms fuer Top-10 |
| Kunden (Name, Opportunities) | Suchindex | Near-realtime | <100ms |
| Opportunities | Suchindex | Near-realtime | <100ms |
| KI-Aktionen | Kontextabhaengig (aktueller Screen + letzte Aktionen) | Bei Oeffnung berechnet | <200ms |
| Letzte Aktionen | Local Storage + Server (letzte 20) | Bei Oeffnung geladen | Instant (local) |

**Performance-Anforderung (Katrin):** Gesamte Pipeline von Tastendruck → sichtbare Ergebnisse: **<200ms**. Dies erfordert:
- Client-seitigen Suchindex fuer Navigation + Letzte Aktionen
- Debounce von nur 50ms fuer Server-Suche
- Optimistisches Rendering (Navigation-Ergebnisse sofort, Server-Ergebnisse nachladen)

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Command Bar** — schnelle, task-orientierte KI-Interaktion. Kein Konversations-Flow. |
| **AI Prompt Mode** | Aktiviert durch "/" als erstes Zeichen oder Klick auf "KI fragen...". Input wechselt zu `ai-surface` bg. |
| **KI-Aktionen** | Kontextbezogene Vorschlaege: "Brief generieren fuer [aktueller Kunde]", "Matching starten fuer [aktuelle Opportunity]". |
| **Inline-Antwort** | Bei AI Prompt Mode: Ergebnisliste wird durch Copilot-Antwort ersetzt. `ktype-ai-reveal` fuer die Antwort. |
| **Uebergang zu Copilot** | Bei komplexen Fragen: "Fuer eine ausfuehrliche Analyse, [Copilot oeffnen]" als Link unter der Kurzantwort. |
| **Voice Input** | Mikrofon-Button im Input (DS 6.9). Transkription → Live-Filterung → Ergebnisse. Bei Frage-Erkennung: automatischer AI Prompt Mode. |

---

## 7. Preview Panel Integration

- **Entity-Vorschau:** Hover (Desktop, 500ms Delay) auf Berater/Kunden-Ergebnis zeigt Tooltip-Preview (DS 6.10, Variante "Tooltip", 320x200px).
- **Berater-Tooltip:** Avatar, Name, Top-3-Skills, Score, Verfuegbarkeit.
- **Kunden-Tooltip:** Name, Branche, Anzahl Opportunities, letzter Kontakt.
- **Kein Preview fuer Navigation-Items** — diese sind Sofort-Aktionen.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Intelligente Reihenfolge** | Navigation-Items sortiert nach Nutzungshaeufigkeit der letzten 7 Tage (DS 6.11). |
| **KI-Aktionen priorisiert** | Die wahrscheinlichste KI-Aktion steht oben. Basiert auf aktuellem Screen-Kontext. |
| **Kontext-Vorfuellung** | Wenn Cmd+K auf dem Opportunity-Detail-Screen: Vorgefiltert auf "[Opportunity-Name]". Filter-Chip sichtbar. |
| **Letzte Aktionen intelligent** | Nicht chronologisch, sondern gewichtet: haeufig wiederkehrende Aktionen priorisiert. |

---

## 9. Interaktions-Flows

### Flow 1: Navigation (Katrin, 80% der Nutzung)
```
Katrin drueckt Cmd+K → Palette oeffnet (<100ms) →
Tippt "Pipe" → "Pipeline" erscheint sofort → Enter →
Palette schliesst → Pipeline-Screen oeffnet
```

### Flow 2: Entity-Suche
```
Katrin drueckt Cmd+K → Tippt "Markus" →
Berater "Markus Schneider" erscheint mit Score [94] →
Hover zeigt Tooltip-Preview → Enter →
Palette schliesst → Consultant Profile oeffnet
```

### Flow 3: KI-Aktion
```
Katrin drueckt Cmd+K → Tippt "/" →
AI Prompt Mode aktiviert (ai-surface bg) →
Tippt "Brief fuer RetailCorp" → Copilot generiert Kurzantwort →
"Brief erstellen" Button → Engagement Brief Canvas oeffnet
```

### Flow 4: Voice-Suche
```
Katrin drueckt Cmd+K → Klickt Mic →
Spricht "SAP Berater verfuegbar KW 18" →
Transkription erscheint live → Ergebnisse filtern →
3 Berater erscheinen → Katrin waehlt per Arrow+Enter
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Jeder Screen | Command Bar (Overlay) | `Cmd+K`, Topbar-Suchfeld |
| **Zu:** Jeder Navigation-Screen | Sidebar-Ziele | Enter auf Navigation-Ergebnis |
| **Zu:** Consultant Profile | `foundation/consultant-profile-view.md` | Enter auf Berater-Ergebnis |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Enter auf Opportunity-Ergebnis |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | Enter auf Kunden-Ergebnis |
| **Zu:** Copilot Sidebar | `ai-experience/copilot-sidebar.md` | "Copilot oeffnen" aus AI Prompt Mode |
| **Zu:** Engagement Brief Canvas | `ai-experience/engagement-brief-canvas.md` | "Brief erstellen" aus KI-Aktion |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** (kein dediziertes Item) | Command Bar hat kein eigenes Stitch-Board-Item. Empfehlung: Neues Item generieren ("Cmd+K Command Bar Overlay"). |
| **Figma:** Keine Frame | Kein Figma-Design vorhanden. |
| **DS-Referenz:** 5.10 | Command Palette Spezifikation in Design System v1.3. |

---

## 12. Akzeptanzkriterien

- [ ] `Cmd+K` / `Ctrl+K` oeffnet die Command Palette von jedem Screen aus
- [ ] Oeffnungszeit: <100ms vom Tastendruck bis sichtbare Palette
- [ ] Suchergebnisse erscheinen <200ms nach Tastendruck
- [ ] Navigation-Items, Berater, Kunden und KI-Aktionen werden korrekt kategorisiert
- [ ] Arrow-Key-Navigation durch Ergebnisse funktioniert
- [ ] `Enter` selektiert und schliesst die Palette
- [ ] `Escape` schliesst die Palette ohne Aktion
- [ ] AI Prompt Mode wechselt bei "/" oder "KI fragen..." Klick
- [ ] Voice-Input transkribiert und filtert live
- [ ] Tooltip-Preview bei Hover auf Entity-Ergebnisse
- [ ] Kontextfilter zeigt Filter-Chip bei Oeffnung innerhalb eines Moduls
- [ ] Mobile: Fullscreen-Suche mit X-Close
- [ ] Accessibility: Focus Trap, aria-modal, Keyboard-Navigation, Live Regions

---

## 13. Offene Fragen

1. **Shortcut-Konflikte:** `Cmd+K` kollidiert mit Browser-Suchleiste in einigen Browsern. Alternativer Shortcut noetig? *Empfehlung: `Cmd+K` als Standard, `Cmd+/` als Alternative.*
2. **Offline-Faehigkeit:** Sollen Navigation + Letzte Aktionen offline funktionieren? *Empfehlung: Ja, via lokalen Cache. Server-Suche zeigt "Offline — lokale Ergebnisse" Info.*
3. **Suchalgorithmus:** Fuzzy-Search oder exakter Match? *Empfehlung: Fuzzy mit Gewichtung (Name > Skill > Beschreibung).*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
