# Notification Inbox

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Notification Inbox ist der persistente Container fuer alle Benachrichtigungen. Sie sammelt Approvals, Alerts, KI-Vorschlaege, Staffing-Anfragen und System-Updates an einem zentralen Ort. Erreichbar ueber das Bell-Icon in der Topbar.

**Alle Personas** nutzen die Inbox, aber mit unterschiedlicher Frequenz:
- Thomas: 5-10x/Tag (Approvals, Pipeline-Alerts)
- Katrin: 10-20x/Tag (Signale, Matching-Ergebnisse)
- Stefan/Lisa: 3-5x/Tag (Staffing-Anfragen, Profil-Updates)
- Martina: 2-3x/Tag (Admin-Benachrichtigungen)
- Dr. Mueller: 1x/Woche (Client Portal Notifications via E-Mail)

**Verwendung in Screens:**
- Notification Center (`screen-specs/platform/notification-center.md`)
- Topbar (Bell-Icon mit Count-Badge)
- Mobile: Fullscreen-Ansicht via Bottom Navigation Bar

---

## 2. Anatomie

```
┌─ Notification Inbox (Slide-Over Panel) ──────┐
│                                              │
│  Benachrichtigungen              [Alle lesen]│  <- Header: heading-lg + Bulk Action
│                                              │
│  ┌─ Filter Tabs ───────────────────────────┐ │
│  │  [Alle (12)] [Aktionen (3)] [Signale (5)]│ │  <- Tab-Filter nach Kategorie
│  │  [KI (2)] [System (2)]                   │ │
│  └──────────────────────────────────────────┘ │
│                                              │
│  HEUTE                                       │  <- Zeitgruppe: label token
│  ┌─ Notification (ungelesen, critical) ────┐ │
│  │  ● [⚠️ AlertTriangle]                    │ │
│  │    P0-Alert: RetailCorp Projekt           │ │  <- Critical: semantic-danger-light bg
│  │    Budget-Ueberschreitung erkannt. 15%    │ │
│  │    ueber Plan.                            │ │
│  │    [Details anzeigen]         vor 12 Min  │ │
│  └──────────────────────────────────────────┘ │
│  ┌─ Notification (ungelesen, high) ────────┐ │
│  │  ● [Avatar: Katrin]                      │ │
│  │    Freigabe-Anfrage: RetailCorp Angebot   │ │  <- Ungelesen: neutral-50 bg, bold
│  │    Angebotswert: 340.000 EUR              │ │
│  │    [Freigeben] [Ablehnen]     vor 1 Std  │ │
│  └──────────────────────────────────────────┘ │
│  ┌─ Notification (gelesen) ────────────────┐ │
│  │    [✨ Sparkles]                          │ │
│  │    Matching abgeschlossen                 │ │  <- Gelesen: neutral-0 bg, regular
│  │    5 Berater fuer SAP-Migration gefunden  │ │
│  │    [Ergebnisse anzeigen]      vor 3 Std  │ │
│  └──────────────────────────────────────────┘ │
│                                              │
│  GESTERN                                     │
│  ┌─ Notification (gelesen) ────────────────┐ │
│  │    [📈 TrendingUp]                        │ │
│  │    Neues Signal: TechAG CTO-Wechsel       │ │
│  │    Score: 87/100                          │ │
│  │    [Signal anzeigen]          gestern     │ │
│  └──────────────────────────────────────────┘ │
│                                              │
│  [Aeltere Benachrichtigungen laden...]       │  <- Pagination: Load More
│                                              │
└──────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Container | Verwendung |
|----------|-----------|------------|
| **Slide-Over** | Slide-Over Panel (DS 5.11), 480px | Desktop: Standard-Ansicht. Oeffnet von rechts. |
| **Fullscreen** | Dedizierte Seite, max-width 720px zentriert | Mobile und Tablet. Zugang ueber Bottom Nav oder Bell-Icon. |
| **Popover** | 400px Dropdown unter Bell-Icon, `shadow-lg` | Schnellansicht: Zeigt nur die neuesten 5 Notifications + "Alle anzeigen"-Link. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `slide-over` / `fullscreen` / `popover` | `slide-over` | Layout-Variante. |
| `filter` | `all` / `actions` / `signals` / `ai` / `system` | `all` | Aktiver Tab-Filter. |
| `unreadOnly` | Boolean | `false` | Zeigt nur ungelesene Notifications. |
| `maxItems` | Number | `20` | Items pro Seite (Pagination). |
| `persona` | String | aktueller Nutzer | Bestimmt Priorisierung und Filterung. |

---

## 5. Design Tokens

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Container (Slide-Over) | `neutral-0` bg, `shadow-xl` | Slide-Over Panel Tokens (DS 5.11). |
| Container (Popover) | `neutral-0` bg, `shadow-lg`, `radius-lg` | Max-width 400px. |
| Header | `heading-lg`, `neutral-900` | "Benachrichtigungen". |
| "Alle lesen" Button | Ghost-Button, `brand-primary` | `body-sm`. |
| Filter Tabs | Tab-Group Pattern | Aktiv: `brand-primary` + Underline. Inaktiv: `neutral-600`. |
| Tab Count Badge | `body-xs`, `neutral-600` | In Klammern nach Tab-Label. |
| Zeitgruppe Header | `label` token, `neutral-600` | "HEUTE", "GESTERN", "AELTER". Sticky on scroll. |
| Notification Item | Siehe `feedback/toasts-notifications.md` Notification-Tokens | |
| Load More | Ghost-Button, zentriert, `body-sm` | |
| Empty State | DS 6.7 + Illustration (DS 4.1): Briefkasten-Line-Art | "Keine neuen Benachrichtigungen." |
| Bell Icon (Topbar) | `icon-md`, `neutral-700` | |
| Bell Badge | `semantic-danger` bg, `neutral-0` text, `radius-full` | Min 16px. Zahlen-Badge ab 1. "9+" bei 10+. |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Bell Icon — No Notifications** | `neutral-700` Bell-Icon, kein Badge | — |
| **Bell Icon — Unread** | `neutral-700` Bell-Icon + `semantic-danger` Count-Badge | Badge pulsiert einmalig bei neuer Notification. |
| **Popover Open** | Dropdown unter Bell, max 5 Items | Klick auf Bell-Icon. Schliesst bei Click-Outside. |
| **Slide-Over Open** | Panel von rechts, Overlay 30% | "Alle anzeigen" aus Popover oder direkter Klick. |
| **Tab Switch** | Filter wechselt, Liste aktualisiert | `duration-fast` Fade-Transition. |
| **Notification Hover** | `interactive-warm` bg | `duration-fast`. |
| **Notification Click** | Oeffnet verlinkten Screen (z.B. Opportunity Detail) | Notification wird als gelesen markiert. |
| **Swipe to Dismiss (Mobile)** | Swipe links: Notification wird entfernt | Undo-Toast: "Benachrichtigung entfernt. [Rueckgaengig]" |
| **Bulk "Alle lesen"** | Alle Unread-Dots + Bold-Titel verschwinden | Confirmation-Toast: "Alle als gelesen markiert." |
| **Empty** | Illustration + Text | "Keine neuen Benachrichtigungen. Du bist auf dem Laufenden." |
| **Loading** | Shimmer-Placeholders fuer 3 Items | Bei initialem Laden oder Tab-Wechsel. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Popover (schnell) oder Slide-Over (voll). Bell-Icon in Topbar. |
| `breakpoint-lg` | Slide-Over. |
| `breakpoint-md` | Fullscreen-Ansicht. Bell-Icon in Topbar. |
| `breakpoint-sm` | Fullscreen. Zugang ueber Bottom Nav Bar (Badge-Count am Nav-Item). Swipe-to-Dismiss. |

---

## 8. Voice Input Integration

Nicht zutreffend — die Notification Inbox ist eine Lese-/Aktions-Oberflaeche ohne eigene Eingabe.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Slide-Over: `role="dialog"`. Liste: `role="list"`. Items: `role="listitem"`. |
| **Bell Icon** | `aria-label="Benachrichtigungen, 3 ungelesen"` (dynamisch). |
| **Keyboard** | `Tab` navigiert zwischen Notifications. `Enter` oeffnet Detail. `Delete` dismisst. |
| **Screen Reader** | Ungelesen-Status angesagt. Prioritaet angesagt: "Kritisch: P0-Alert RetailCorp Projekt". |
| **Focus** | Neue Notifications stehlen KEINEN Fokus. Nur Badge-Update + `aria-live="polite"` Ansage. |
| **Reduced Motion** | Slide-Over-Animation deaktiviert. Sofortige Anzeige. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Toasts & Notifications (`feedback/toasts-notifications.md`) | Toast = fluechtig, Notification = persistent. Gleiche semantische Typen. |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Notification Inbox nutzt Slide-Over als Container. |
| Badges & Tags (`primitives/badges-tags.md`) | Count-Badge am Bell-Icon. |
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Badge-Count am Mobile Nav-Item. |
| Approval Card (`composition/approval-card.md`) | Approval-Notifications verlinken zur Approval Card. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Slide-Over + Popover + Fullscreen-Varianten. Filter-Tabs, Swipe-to-Dismiss, Persona-Priorisierung. |
