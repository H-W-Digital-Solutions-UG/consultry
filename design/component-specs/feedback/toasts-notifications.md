# Toasts & Notifications

**Komponenten-Familie:** Feedback
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Toasts und Notifications informieren den Nutzer ueber Systemereignisse, Aktionsbestaetigung und Status-Updates. Toasts sind fluechtige, automatisch verschwindende Meldungen. Notifications sind persistente Eintraege in der Notification Inbox.

**Alle Personas:** Jeder Nutzer erhaelt Toasts und Notifications, aber Frequenz und Prioritaet variieren nach Rolle.

**Verwendung in Screens:**
- Global: Toasts erscheinen auf allen Screens
- Notification Center (`screen-specs/platform/notification-center.md`)
- Copilot Panel (Inline-Toasts fuer Fehler)
- Mobile: Toasts erscheinen ueber der Bottom Navigation Bar

---

## 2. Anatomie

### Toast

```
┌─ Toast ──────────────────────────────────────┐
│ ┃  [Icon]  Titel der Meldung          [X]   │  <- Left border 4px (semantic color)
│ ┃          Optionale Beschreibung            │
│ ┃          [Aktion]               [Dismiss]  │  <- Optional Action Button
└──────────────────────────────────────────────┘
```

### Notification Item (in Inbox)

```
┌─ Notification ───────────────────────────────┐
│  [Avatar/Icon]  Titel                 3 Min  │  <- Header: Absender + Zeitstempel
│                 Beschreibung                 │
│                 [Primaere Aktion]             │  <- Optional CTA
│  ● Ungelesen                                 │  <- Unread-Indikator
└──────────────────────────────────────────────┘
```

---

## 3. Varianten

### Toast-Varianten

| Variante | Left Border | Icon | Auto-Dismiss | Verwendung |
|----------|------------|------|-------------|------------|
| **Success** | `semantic-success` (4px) | `CheckCircle` | 5s | Deal gewonnen, Profil gespeichert, Brief generiert. |
| **Warning** | `semantic-warning` (4px) | `AlertTriangle` | 8s | Consent ausstehend, Deadline naht, Score gesunken. |
| **Error** | `semantic-danger` (4px) | `XCircle` | Manuell | API-Fehler, Speichern fehlgeschlagen, Copilot nicht erreichbar. |
| **Info** | `semantic-info` (4px) | `Info` | 5s | Neues Signal, Enrichment-Update, System-Info. |
| **AI** | `ai-border` (4px) | `Sparkles` | 8s | KI-generierter Inhalt fertig, Matching abgeschlossen. |

### Notification-Varianten

| Variante | Icon/Avatar | Prioritaet | Verwendung |
|----------|------------|-----------|------------|
| **Approval Request** | Absender-Avatar | Hoch | Thomas: Neue Freigabe-Anfrage von Katrin. |
| **Signal Alert** | `icon-signal` (Zap) | Mittel | Neues Signal erkannt: Leadership-Wechsel. |
| **Staffing Request** | Absender-Avatar | Hoch | Stefan/Lisa: Staffing-Anfrage fuer Opportunity. |
| **System Update** | `icon-ai` (Sparkles) | Niedrig | Profil-Update vorgeschlagen, Enrichment fertig. |
| **Project Alert** | `icon-risk` (AlertTriangle) | Kritisch | P0-Alert: Projekt-Risiko erkannt. |
| **Client Feedback** | `icon-client` (Building2) | Mittel | Dr. Mueller hat Pulse-Check ausgefuellt. |

---

## 4. Props / Konfiguration

### Toast

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `type` | `success` / `warning` / `error` / `info` / `ai` | `info` | Bestimmt Farbe, Icon und Auto-Dismiss. |
| `title` | String | erforderlich | Kurzer Titel (max 60 Zeichen). |
| `description` | String | `null` | Optionale Beschreibung (max 120 Zeichen). |
| `action` | `{ label: String, onClick: Function }` | `null` | Optionaler Action-Button. |
| `duration` | Number (ms) | Typ-abhaengig | Auto-Dismiss-Dauer. `0` fuer persistent. |
| `dismissable` | Boolean | `true` | Zeigt/verbirgt X-Button. Error ist immer dismissable. |

### Notification

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `type` | String | erforderlich | Variante (siehe Tabelle oben). |
| `priority` | `critical` / `high` / `medium` / `low` | `medium` | Bestimmt Sortierung und visuelle Hervorhebung. |
| `title` | String | erforderlich | Titel. |
| `description` | String | `null` | Detail-Text. |
| `sender` | `{ name: String, avatar: URL }` | `null` | Absender fuer persoenliche Notifications. |
| `action` | `{ label: String, href: String }` | `null` | CTA-Link. |
| `read` | Boolean | `false` | Gelesen/Ungelesen-Status. |
| `timestamp` | DateTime | erforderlich | Erstellungszeitpunkt. |

---

## 5. Design Tokens

### Toast

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Position | Top-right, 16px vom Rand | Stack mit 8px Gap. |
| Container | `neutral-0` bg, `shadow-md`, `radius-lg` | Max-width 400px. |
| Left Border | 4px, farbig nach Typ | `semantic-*` oder `ai-border`. |
| Title | `heading-sm`, `neutral-900` | |
| Description | `body-sm`, `neutral-700` | |
| Icon | `icon-md` (20px), Farbe nach Typ | |
| Close Button | `neutral-500`, hover: `neutral-700` | 16px X-Icon. |
| Action Button | Ghost-Button, `brand-primary` | `body-sm`. |
| Entry Animation | Slide from right + fade, `duration-normal`, `easing-enter` | |
| Exit Animation | Fade + slide right, `duration-fast`, `easing-exit` | |
| Emoji | Erlaubt im Titel (DS 1.10): `🎉`, `📋`, `⚡` | Konsistent pro Typ. |

### Notification Item

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Container | `neutral-0` bg (gelesen), `neutral-50` bg (ungelesen) | |
| Unread Indicator | `brand-primary` Dot, 8px, `radius-full` | Links vom Avatar/Icon. |
| Avatar | 32px, `radius-full` | Oder Icon 20px fuer System-Notifications. |
| Title | `body-md`, `neutral-900` (ungelesen: `font-weight: 600`) | |
| Description | `body-sm`, `neutral-700` | Max 2 Zeilen, truncated. |
| Timestamp | `body-xs`, `neutral-600` | Relativ: "vor 3 Min", "gestern". |
| Action | Ghost-Button, `brand-primary`, `body-sm` | |
| Hover | `interactive-warm` bg | `duration-fast`. |
| Critical Priority | `semantic-danger-light` bg | Dezenter roter Hintergrund. |
| Border | `border-subtle` bottom | Zwischen Notifications. |

---

## 6. Interaktive States

### Toast

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Entering** | Slide from right, fade in | `duration-normal`. |
| **Visible** | Standard | Auto-Dismiss-Timer laeuft. |
| **Hover** | Timer pausiert | Nutzer liest — nicht wegfaden. |
| **Dismissing** | Fade out + slide right | `duration-fast`. Naechster Toast rueckt nach. |
| **Stacked** | Max 3 sichtbar. 4+ werden queued. | Stack-Gap: `space-2`. |

### Notification

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Unread** | `neutral-50` bg, Bold-Titel, Unread-Dot | |
| **Read** | `neutral-0` bg, Regular-Titel, kein Dot | |
| **Hover** | `interactive-warm` bg | `duration-fast`. |
| **Active** | Klick oeffnet verlinkten Screen oder Slide-Over | |
| **Dismissed** | Swipe-left (Mobile) oder X-Button | Notification wird als gelesen markiert und entfernt. |

---

## 7. Responsive Verhalten

| Breakpoint | Toast | Notification |
|-----------|-------|-------------|
| `breakpoint-xl`+ | Top-right, 16px offset | Notification Inbox im Slide-Over Panel (480px). |
| `breakpoint-lg` | Top-right, 16px offset | Slide-Over Panel. |
| `breakpoint-md` | Top-center, 16px offset | Fullscreen Notification Inbox. |
| `breakpoint-sm` | Top-center, 8px offset, max-width 90vw. Ueber Bottom Nav. | Fullscreen. Swipe-to-dismiss fuer einzelne Notifications. |

**Mobile Toast Z-Index:** Toasts erscheinen UEBER der Bottom Navigation Bar (`z-index: 60`, Bottom Nav ist `z-index: 50`).

---

## 8. Voice Input Integration

Nicht zutreffend — Toasts und Notifications sind Output-Komponenten ohne eigene Voice-Interaktion.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Toast Rolle** | `role="alert"` (Error, Warning), `role="status"` (Success, Info, AI) |
| **Live Region** | `aria-live="assertive"` (Error), `aria-live="polite"` (alle anderen) |
| **Screen Reader** | Toast-Inhalt wird automatisch vorgelesen. Typ wird angesagt: "Erfolg: Deal gewonnen." |
| **Keyboard** | `Tab` fokussiert Toast-Actions. `Escape` dismissed den fokussierten Toast. |
| **Focus** | Error-Toasts stehlen KEINEN Fokus. Sie erscheinen als Benachrichtigung. |
| **Notification Inbox** | `role="list"`. Jede Notification ist `role="listitem"`. Ungelesen-Status: `aria-label="ungelesen"`. |
| **Reduced Motion** | Slide-Animation deaktiviert. Sofortige Anzeige/Entfernung. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Notification Inbox (`composition/notification-inbox.md`) | Container fuer persistente Notifications. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Inline-Toasts fuer Copilot-Fehler. |
| Badges & Tags (`primitives/badges-tags.md`) | Notification-Count-Badge im Topbar Bell-Icon. |
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Badge-Count auf Mobile-Navigation. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Toast-Varianten, Notification-Varianten, Mobile-Verhalten, Emoji-Regeln. |
