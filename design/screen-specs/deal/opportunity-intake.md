# Opportunity Intake — Screen Spec

**Screen-ID:** DEAL-02
**PRD-Modul:** 10.1 — Opportunity & Engagement Management
**Journey(s):** J1-S2 (Katrin erstellt Opportunity aus Signal), J8-S1 (Pipeline Management)
**Layout-Typ:** Bottom Sheet (Mobile) / Modal (Desktop)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — schnelle Opportunity-Erfassung |
| **Sekundaer** | Thomas (gelegentlich, nach Kundengespraech) |
| **Frequenz** | Katrin: 2-5x/Tag. |
| **Trigger** | Signal Feed → "Opportunity erstellen", Command Bar → "Neue Opportunity", Pipeline → "+ Hinzufuegen", Account Plan → "Neue Opportunity". |
| **Herkunft** | Signal Feed (primaer), Command Bar, Pipeline-Uebersicht, Account Plan. |
| **Ziel** | Schnelle Erfassung einer neuen Opportunity (max 60 Sekunden). Weiterleitung zum Opportunity Detail. |
| **Geraete** | Desktop (Modal), Mobile (Bottom Sheet). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | in <60 Sekunden eine Opportunity erfassen | kein Lead verloren geht |
| 2 | Katrin | dass Felder aus dem Signal vorausgefuellt sind | ich nicht doppelt tippen muss |
| 3 | Katrin | nur die Pflichtfelder sehen (progressive disclosure fuer Optionales) | der Intake schnell geht |
| 4 | Thomas | unterwegs per Mobile eine Opportunity anlegen | ich nach einem Kundengespraech sofort erfasse |

---

## 3. Layout — Desktop

**Layout-Typ: Modal (560px)**
**Begruendung:** Opportunity Intake ist ein schneller, fokussierter Input-Flow. Kein neuer Screen — ein Modal ueber dem aktuellen Kontext (Signal Feed, Pipeline) reicht aus. Progressive Disclosure: Pflichtfelder sichtbar, optionale collapsed.

```
┌─ Modal (560px) ────────────────────────────────────────┐
│                                                         │
│  Neue Opportunity                                  [X]  │
│                                                         │
│  ── Pflichtfelder ──                                    │
│                                                         │
│  Kunde: [RetailCorp AG        ▾]  ← Auto-complete      │
│         ✨ KI-Vorschlag: RetailCorp (aus Signal)        │
│                                                         │
│  Titel: [SAP S/4HANA Migration    ]                     │
│         ✨ KI-Vorschlag aus Signal-Kontext               │
│                                                         │
│  Geschaetzter Wert: [340.000     ] EUR                  │
│                                                         │
│  Phase: [Qualifying ▾]                                  │
│                                                         │
│  ── Optionale Felder ──────────────── [▶ Einblenden] ── │
│                                                         │
│  │  (collapsed: Timeline, Budget, Anforderungen,        │
│  │   Entscheider, Branche, Notizen)                     │
│                                                         │
│  Signal-Verknuepfung: ⚡ Leadership-Wechsel [87] ✅     │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │        [Abbrechen]    [Opportunity erstellen]    │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Progressive Disclosure im Modal:**

| Ebene | Felder | Sichtbar |
|-------|--------|----------|
| **Pflicht** | Kunde, Titel, Wert, Phase | Immer sichtbar |
| **Optional** | Timeline, Budget-Details, Anforderungen (Skills), Entscheider, Branche, Notizen | Collapsed, per Klick einblendbar |
| **Automatisch** | Signal-Verknuepfung, Quelle, Erstelldatum | Automatisch gesetzt, read-only angezeigt |

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Modal 560px, zentriert. |
| `breakpoint-lg` | Modal 560px. |
| `breakpoint-md` | Modal 90vw. |
| `breakpoint-sm` | **Bottom Sheet** (volle Breite, von unten). Swipe-down to dismiss. Pflichtfelder + grosser "Erstellen"-Button. Optionale Felder als zweiter Schritt ("Weiter"). |

**Mobile Bottom Sheet:**

```
┌─────────────────────────────────┐
│  ── Handle ──                   │
│                                 │
│  Neue Opportunity               │
│                                 │
│  Kunde: [               ▾]     │
│  Titel: [                ]     │
│  Wert:  [          ] EUR       │
│  Phase: [Qualifying ▾]         │
│                                 │
│  [Mehr Details +]              │
│                                 │
│  [Opportunity erstellen]       │  <- Sticky, brand-primary, full width
│                                 │
└─────────────────────────────────┘
```

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Kunden-Autocomplete | CRM Service (Suchindex) | Live bei Eingabe |
| Signal-Kontext (wenn aus Signal erstellt) | Signal Service | Bei Modal-Oeffnung |
| Pipeline-Phasen | Pipeline Config | Statisch |
| KI-Vorschlaege (Titel, Wert) | AI Pre-Fill Service | Bei Modal-Oeffnung mit Signal-Kontext |
| Skill-Taxonomie (fuer Anforderungen) | Knowledge Graph | Bei "Optionale Felder" Expansion |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **Smart Pre-Fill** | Wenn aus Signal erstellt: Kunde, Titel, geschaetzter Wert aus Signal-Daten vorausgefuellt. `ai-surface` bg + "KI-Vorschlag" Label (DS 6.12). |
| **Kunden-Autocomplete** | Tippen in "Kunde" zeigt bestehende Kunden. Bei Nicht-Match: "+ Neuen Kunden anlegen" Option. |
| **Titel-Vorschlag** | KI schlaegt Titel basierend auf Signal-Typ + Firmenname vor: "SAP S/4HANA Migration — RetailCorp AG". |
| **Wert-Schaetzung** | KI schaetzt Wert basierend auf aehnlichen historischen Opportunities: "Geschaetzter Wert: 340K (basierend auf 5 aehnlichen Deals)". |

---

## 7. Preview Panel Integration

- Nicht zutreffend — Opportunity Intake ist ein Input-Modal ohne Dokument-Vorschauen.
- **Signal-Referenz:** Wenn aus Signal erstellt: Kompakte Signal-Card (L0) als read-only Referenz im Modal.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Smart Pre-Fill** | Alle KI-vorausgefuellten Felder haben `ai-surface` bg (DS 6.12). Editierbar. |
| **Duplikat-Warnung** | "Aehnliche Opportunity gefunden: 'RetailCorp SAP' (Qualifying, 300K). Zusammenfuehren?" als Warning-Card im Modal. |
| **Phase-Empfehlung** | "Basierend auf Signal-Typ 'Leadership-Wechsel': Phase 'Qualifying' empfohlen." |

---

## 9. Interaktions-Flows

### Flow 1: Signal → Opportunity (Katrin, 30 Sek)
```
Signal Feed → "Opportunity erstellen" bei RetailCorp Signal →
Modal oeffnet → Felder vorausgefuellt: Kunde, Titel, Wert →
Katrin prueft → Alles korrekt → "Opportunity erstellen" →
Modal schliesst → Opportunity Detail oeffnet
```

### Flow 2: Manuelle Erfassung (Thomas, Mobile)
```
Pipeline → "+" → Bottom Sheet →
Thomas tippt: "TechAG" (Autocomplete) → "Cloud Migration" →
Wert: "250.000" → Phase: "Qualifying" →
"Erstellen" → Success Toast → Zurueck zur Pipeline
```

### Flow 3: Duplikat erkannt
```
Katrin erstellt Opportunity "RetailCorp SAP" →
KI: "Aehnlich: RetailCorp SAP S/4HANA (Qualifying)" →
Katrin klickt "Zusammenfuehren" → Bestehende Opportunity oeffnet
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Signal Feed | Opportunity Intake (Modal) | "Opportunity erstellen" |
| **Von:** Pipeline | Opportunity Intake (Modal) | "+ Hinzufuegen" |
| **Von:** Account Plan | Opportunity Intake (Modal) | "Neue Opportunity" |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Nach Erstellung |
| **Zu:** (bestehende Opportunity) | `deal/opportunity-detail.md` | Bei Duplikat-Zusammenfuehrung |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein dediziertes Item | Opportunity Intake als Modal ist nicht in Stitch abgebildet. |
| **Figma:** Keine Frame | Kein Design vorhanden. |

---

## 12. Akzeptanzkriterien

- [ ] Modal (Desktop) oder Bottom Sheet (Mobile)
- [ ] 4 Pflichtfelder sichtbar: Kunde, Titel, Wert, Phase
- [ ] Optionale Felder collapsed (Progressive Disclosure)
- [ ] KI-Pre-Fill aus Signal-Kontext mit `ai-surface` Hintergrund
- [ ] Kunden-Autocomplete mit "+ Neuen Kunden anlegen" Option
- [ ] Signal-Verknuepfung sichtbar wenn aus Signal erstellt
- [ ] Duplikat-Erkennung mit Zusammenfuehren-Option
- [ ] Weiterleitung zu Opportunity Detail nach Erstellung
- [ ] Mobile: Bottom Sheet, Swipe-to-Dismiss, Sticky "Erstellen" Button
- [ ] Erstellung in <60 Sekunden moeglich
- [ ] Accessibility: Modal role="dialog", aria-modal, Focus Trap

---

## 13. Offene Fragen

1. **Minimal-Erfassung:** Reichen die 4 Pflichtfelder fuer sinnvolles Pipeline-Tracking? *Empfehlung: Ja. Weitere Daten werden in Opportunity Detail ergaenzt.*
2. **Offline-Erstellung:** Soll Opportunity-Erstellung offline moeglich sein (Mobile)? *Empfehlung: Phase 2. V1: Online erforderlich.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
