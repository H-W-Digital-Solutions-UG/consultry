# Notification Center — Screen Spec

**Screen-ID:** PLT-02
**PRD-Modul:** 12.3 — Notification Center
**Journey(s):** Global (alle Journeys mit Benachrichtigungen)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Personas** | Thomas (Approvals), Katrin (Signale, Matching), Stefan/Lisa (Staffing) |
| **Sekundaer** | Martina (Admin-Notifications), Dr. Mueller (Client Portal — via E-Mail) |
| **Frequenz** | Thomas: 5-10x/Tag. Katrin: 10-20x/Tag. Stefan: 3-5x/Tag. |
| **Trigger** | Klick auf Bell-Icon in Topbar, Bottom Nav Item "Benachrichtigungen" (Mobile), Push-Notification Tap (Mobile). |
| **Herkunft** | Jeder Screen (Bell-Icon ist global in Topbar). |
| **Ziel** | Uebersicht ueber alle Benachrichtigungen, filtern, priorisieren, einzelne Notification oeffnen → zum verlinkten Screen navigieren. |
| **Geraete** | Desktop (Popover + Slide-Over), Tablet (Slide-Over), Mobile (Fullscreen). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | Approval-Anfragen sofort sehen und entscheiden | das Team nicht blockiert wird |
| 2 | Katrin | neue Signal-Alerts filtern und nach Score sortieren | ich die wichtigsten Signale zuerst bearbeite |
| 3 | Stefan | Staffing-Anfragen fuer meine Person sehen | ich schnell antworten kann |
| 4 | Lisa | Profil-Update-Erinnerungen sehen | ich weiss, was noch zu tun ist |
| 5 | Martina | Admin-Benachrichtigungen (neue CVs, Compliance-Alerts) filtern | ich meine Arbeitsliste priorisieren kann |
| 6 | Alle | alle Notifications als gelesen markieren | mein Inbox-Count zurueckgesetzt wird |
| 7 | Thomas | kritische P0-Alerts sofort erkennen | ich Eskalationen nicht verpasse |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure**
**Begruendung:** Die Notification Inbox ist eine lineare Liste mit Filter-Tabs. Kein Bento Grid noetig — die Informationsarchitektur ist chronologisch/priorisiert, nicht gleichwertige Kacheln.

**Stufe 1 — Popover (Schnellansicht):**

```
┌─ Bell Icon [3] ──────────────────────┐
│                                      │
│  Benachrichtigungen         [Alle →] │  <- Header + Link zu voller Inbox
│                                      │
│  ● P0-Alert: RetailCorp     12 Min   │  <- Max 5 Items, neueste zuerst
│  ● Freigabe: SAP-Angebot    1 Std    │
│    Matching abgeschlossen    3 Std    │
│                                      │
│  [Alle anzeigen (12)]               │  <- Link oeffnet Slide-Over
│                                      │
└──────────────────────────────────────┘
```

**Stufe 2 — Slide-Over (Volle Inbox):**

```
┌─ Slide-Over Panel (480px) ────────────────────┐
│                                               │
│  Benachrichtigungen                [Alle lesen]│
│                                               │
│  [Alle (12)] [Aktionen (3)] [Signale (5)]     │  <- Filter Tabs
│  [KI (2)] [System (2)]                        │
│                                               │
│  HEUTE                                        │  <- Zeitgruppe
│  ┌─ Critical ────────────────────────────────┐│
│  │  ● ⚠️ P0-Alert: RetailCorp Projekt        ││
│  │    Budget +15%. [Details]       12 Min     ││
│  └───────────────────────────────────────────┘│
│  ┌─ High ────────────────────────────────────┐│
│  │  ● [Avatar] Katrin: Freigabe RetailCorp   ││
│  │    340.000 EUR [Freigeben] [Ablehnen] 1h  ││
│  └───────────────────────────────────────────┘│
│  ┌─ Medium ──────────────────────────────────┐│
│  │  ✨ Matching: 5 Berater gefunden           ││
│  │    SAP-Migration [Ergebnisse]     3 Std   ││
│  └───────────────────────────────────────────┘│
│                                               │
│  GESTERN                                      │
│  ┌─────────────────────────────────────────┐  │
│  │  📈 Signal: TechAG CTO-Wechsel    [87] │  │
│  │    [Signal anzeigen]           gestern   │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  [Aeltere laden...]                           │
│                                               │
└───────────────────────────────────────────────┘
```

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Bell-Icon in Topbar → Popover (Schnell). "Alle anzeigen" → Slide-Over (480px). |
| `breakpoint-lg` | Bell-Icon → direkt Slide-Over (kein Popover). |
| `breakpoint-md` | Bell-Icon → Fullscreen-Ansicht. Scroll-Liste. |
| `breakpoint-sm` | Bottom Nav Item "Benachrichtigungen" mit Badge-Count. Fullscreen-Liste. Swipe-to-Dismiss pro Item. Pull-to-Refresh. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Notification-Liste | Notification Service (Server) | Real-time via WebSocket / SSE |
| Unread Count | Notification Service | Real-time (Badge-Update) |
| Notification-Detail (Titel, Beschreibung, Sender, Aktion) | Notification Service | Bei Erstellung |
| Persona-Priorisierung | User-Profil + Notification-Typ | Serverseitig berechnet |
| Filter-Counts | Aggregation ueber Notification-Typen | Bei Oeffnung + Tab-Wechsel |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | Keine direkte AI-Interaktion. KI erzeugt Notifications (z.B. "Matching abgeschlossen", "Profil-Update vorgeschlagen"). |
| **KI-Notifications** | Verwenden `ai-surface` bg + Sparkles-Icon. Visuell unterscheidbar von manuellen Notifications. |
| **Intelligente Gruppierung** | KI gruppiert verwandte Notifications: "3 neue Signale zu Retail-SAP" statt 3 einzelne Notifications. |
| **Priority-Scoring** | KI bestimmt Prioritaet (critical/high/medium/low) basierend auf Kontext und Nutzerverhalten. |

---

## 7. Preview Panel Integration

- **Inline-Preview bei Hover (Desktop):** Hover auf einer Notification mit Dokument-Bezug (Angebot, Vertrag, CV) zeigt Tooltip-Preview (DS 6.10, 320x200px).
- **Nicht bei allen Notifications:** Nur bei Typen mit Dokument-Kontext. Signal-Notifications zeigen keinen Preview.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Prioritaets-Sortierung** | Notifications sind nach KI-berechneter Prioritaet sortiert, nicht rein chronologisch. Kritische Alerts immer oben. |
| **Smart-Gruppierung** | "3 neue Signale zu deinem Top-Account RetailCorp" statt 3 einzelne Notifications. Expandierbar. |
| **Tageszeit-Anpassung** | Morgens: Approvals und Briefing-Notifications priorisiert. Nachmittags: Projekt-Updates priorisiert. |
| **Abwesenheits-Zusammenfassung** | Nach >24h ohne Login: "12 Benachrichtigungen waehrend deiner Abwesenheit" mit KI-Zusammenfassung der wichtigsten 3. |

---

## 9. Interaktions-Flows

### Flow 1: Schnellansicht (Thomas, Desktop)
```
Thomas sieht Bell-Icon mit Badge [3] → Klickt Bell →
Popover zeigt 3 neueste: P0-Alert, Approval, Signal →
Thomas klickt "Details" bei P0-Alert → Popover schliesst →
Project Dashboard oeffnet
```

### Flow 2: Volle Inbox mit Filter (Katrin)
```
Katrin klickt Bell → Popover → "Alle anzeigen" →
Slide-Over oeffnet → Klickt Tab "Signale (5)" →
5 Signal-Notifications sichtbar → Klickt auf Top-Signal →
Slide-Over schliesst → Signal Feed oeffnet mit Pre-Filter
```

### Flow 3: Mobile Swipe (Stefan)
```
Stefan oeffnet Benachrichtigungen via Bottom Nav →
Fullscreen-Liste → Sieht Staffing-Anfrage von Katrin →
Klickt [Verfuegbarkeit bestaetigen] → Inline-Aktion →
Notification wird als gelesen markiert
```

### Flow 4: Bulk Read (Thomas, Ende des Tages)
```
Thomas oeffnet Inbox → 8 Notifications → Klickt "Alle lesen" →
Confirmation Toast: "Alle als gelesen markiert" →
Badge verschwindet
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Jeder Screen (Topbar) | Notification Center | Bell-Icon Klick |
| **Von:** Bottom Nav (Mobile) | Notification Center | Nav-Item Tap |
| **Zu:** Approval Manager | `platform/approval-manager.md` | Klick auf Approval-Notification |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Klick auf Opportunity-Notification |
| **Zu:** Signal Feed | `growth/signal-feed.md` | Klick auf Signal-Notification |
| **Zu:** Project Dashboard | `delivery/project-dashboard.md` | Klick auf P0-Alert-Notification |
| **Zu:** Staffing & Matching | `deal/staffing-matching.md` | Klick auf Staffing-Notification |
| **Zu:** Consultant Profile | `foundation/consultant-profile-editor.md` | Klick auf Profil-Update-Notification |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** (kein dediziertes Item) | Notification Center hat kein eigenes Stitch-Board-Item. Gap identifiziert in Stitch Board Mapping. |
| **Figma:** Keine Frame | Kein Design vorhanden. |
| **Empfehlung** | Neues Stitch-Item generieren: "Notification Inbox — Slide-Over + Popover". |

---

## 12. Akzeptanzkriterien

- [ ] Bell-Icon in Topbar zeigt Unread-Count-Badge (real-time via WebSocket)
- [ ] Popover (Desktop) zeigt die neuesten 5 Notifications
- [ ] "Alle anzeigen" oeffnet Slide-Over mit voller Inbox
- [ ] Filter-Tabs (Alle, Aktionen, Signale, KI, System) filtern korrekt
- [ ] Notifications sind nach KI-Prioritaet sortiert (Critical > High > Medium > Low)
- [ ] Zeitgruppen (Heute, Gestern, Aelter) strukturieren die Liste
- [ ] "Alle lesen" setzt alle Notifications auf gelesen und entfernt Badge
- [ ] Klick auf Notification oeffnet den verlinkten Screen
- [ ] Critical Notifications haben `semantic-danger-light` Hintergrund
- [ ] KI-Notifications haben `ai-surface` Hintergrund + Sparkles-Icon
- [ ] Mobile: Fullscreen, Swipe-to-Dismiss, Pull-to-Refresh
- [ ] Mobile: Badge-Count am Bottom Nav Item
- [ ] Accessibility: role="dialog" (Slide-Over), role="list", aria-live fuer neue Notifications

---

## 13. Offene Fragen

1. **Push-Notifications (Mobile):** Werden native Push-Notifications unterstuetzt? *Empfehlung: Ja, fuer Critical und High Priority. Medium/Low nur in-app.*
2. **E-Mail-Digest:** Erhalten Nutzer auch E-Mail-Zusammenfassungen? *Empfehlung: Konfigurierbar. Default: Taeglich fuer Thomas, Woechentlich fuer andere.*
3. **Notification-Retention:** Wie lange werden Notifications gespeichert? *Empfehlung: 90 Tage. Aeltere werden archiviert.*
4. **Mute-Funktion:** Koennen einzelne Notification-Typen stummgeschaltet werden? *Empfehlung: Ja, in den Einstellungen (Admin Panel).*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
