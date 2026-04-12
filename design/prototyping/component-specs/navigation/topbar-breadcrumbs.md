# Topbar & Breadcrumbs

**Komponenten-Familie:** Navigation
**DS-Version:** v1.3
**DS-Referenz:** 5.6 (Top Bar)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Topbar ist die persistente horizontale Leiste oberhalb des Content-Bereichs. Sie bietet kontextuelle Navigation (Breadcrumbs), globale Suche und Schnellzugriff auf Notifications und Nutzer-Einstellungen. In Kombination mit der Sidebar bildet sie das vollstaendige Desktop-Navigationsgeruest.

**Primaere Funktionen:**
- **Breadcrumbs:** Zeigen den aktuellen Standort in der Informationsarchitektur. Ermoeglichen Ruecknavigation.
- **Suche:** Trigger fuer die Command Palette (`Cmd+K`).
- **Notifications:** Glocken-Icon mit Badge-Count. Oeffnet Notification-Inbox.
- **User Avatar:** Dropdown mit Profil, Einstellungen, Theme-Toggle und Logout.

**Verwendung in Screens:** Alle Desktop-Screens. Persistent (sticky top).

---

## 2. Anatomie

```
┌── Topbar (56px, full width minus Sidebar) ─────────────────────────────────────────────┐
│                                                                                         │
│  Home > Growth > Signal Feed > RetailCorp          [🔍 Suche]   [🔔 3]   [Avatar ▾]   │
│  ↑                                                     ↑          ↑          ↑          │
│  Breadcrumbs (links)                             Search Trigger  Bell    User Dropdown   │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

**Breadcrumb-Detail:**

```
  Home  >  Growth  >  Signal Feed  >  RetailCorp
  ─────    ──────     ───────────     ──────────
  neutral-500         neutral-500     neutral-900 bold
  hover: underline    hover: underline  (aktuelle Seite, nicht klickbar)
```

**Truncation bei > 4 Ebenen:**

```
  Home  >  ...  >  Signal Feed  >  RetailCorp
               ↑
         Klickbar: zeigt Dropdown mit ausgelassenen Ebenen
```

**Rechter Bereich:**

```
  ┌──────────────┐  ┌──────┐  ┌────────────────┐
  │ 🔍 Suche...  │  │ 🔔 3 │  │ [Av] Max M. ▾  │
  └──────────────┘  └──────┘  └────────────────┘
       ↑                ↑            ↑
  Command Bar       Notification   User Dropdown
  Trigger           Inbox Trigger
```

**User Dropdown (geoeffnet):**

```
  ┌──────────────────────┐
  │  [Avatar] Max Mueller │
  │  max@consultry.de     │
  ├──────────────────────┤
  │  ◇ Profil             │
  │  ◇ Einstellungen      │
  │  ◇ Theme: [☀/🌙]     │  <- Toggle Light/Dark
  ├──────────────────────┤
  │  ◇ Abmelden           │
  └──────────────────────┘
```

**Elemente:**
- **Breadcrumb-Segment:** `body-sm`, klickbar (ausser letztes Segment).
- **Separator:** `>` Zeichen, `neutral-400`, `body-sm`.
- **Search Trigger:** Input-artige Flaeche, oeffnet Command Palette bei Klick oder `Cmd+K`.
- **Notification Bell:** Lucide `Bell` Icon, `icon-md`, mit optionalem Badge-Count.
- **User Avatar:** `avatar-sm` (32px) + Name (`body-sm`) + Chevron-Down.
- **User Dropdown:** Popover mit Profil-Info, Navigationspunkten und Theme-Toggle.

---

## 3. Varianten

| Variante | Beschreibung |
|----------|-------------|
| **Standard** | Breadcrumbs + Search + Notifications + User. Default auf allen Desktop-Screens. |
| **Ohne Breadcrumbs** | Nur auf Top-Level-Seiten (Cockpit, Dashboard). Breadcrumb-Bereich zeigt Seitentitel statt Trail. |
| **Mobile** | Breadcrumbs kollabieren zu Zurueck-Pfeil + aktuelle Seite. Search-Trigger entfaellt (Command Bar via Bottom Nav "Mehr" erreichbar). |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `breadcrumbs` | Array of Breadcrumb | aktuelle Route | Breadcrumb-Segmente (max 4 sichtbar). |
| `showSearch` | Boolean | `true` | Search-Trigger sichtbar. |
| `notificationCount` | Number | `0` | Badge-Count auf Notification-Bell. `0` = kein Badge. |
| `user` | Object | aktueller Nutzer | Name, E-Mail, Avatar-URL fuer User-Dropdown. |
| `onSearch` | Function | oeffnet Command Palette | Handler fuer Search-Trigger. |
| `onNotificationClick` | Function | oeffnet Notification-Inbox | Handler fuer Bell-Klick. |

**Breadcrumb:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `label` | String | erforderlich | Anzeige-Label des Segments. |
| `href` | String | erforderlich | Navigations-Ziel. Letztes Segment: `null` (aktuelle Seite). |
| `icon` | String | `null` | Optionales Lucide-Icon (nur fuer "Home" empfohlen). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Topbar Hoehe | 56px |
| Topbar bg | `neutral-0` |
| Topbar border | `border-default` bottom |
| Topbar position | `sticky`, top 0, `z-index: 30` |
| Topbar padding | `space-3` (12px) vertikal, `space-4` (16px) horizontal |
| Breadcrumb Segment (vorig) | `body-sm`, `neutral-500` |
| Breadcrumb Segment (vorig) Hover | `neutral-700`, text-decoration underline |
| Breadcrumb Segment (aktuell) | `body-sm`, `neutral-900`, font-weight 600 (SemiBold) |
| Breadcrumb Separator | `>`, `body-sm`, `neutral-400`, `space-2` (8px) horizontal padding |
| Truncation "..." | `body-sm`, `neutral-500`, klickbar (zeigt Dropdown) |
| Truncation Dropdown | `neutral-0` bg, `shadow-md`, `radius-md`, `border-default` |
| Search Trigger | `neutral-100` bg, `radius-md`, `body-sm`, `neutral-500` Placeholder, max-width 240px |
| Search Trigger Hover | `neutral-200` bg |
| Search Trigger Shortcut | `body-xs`, `neutral-500`, `neutral-200` bg, `radius-sm`, "Cmd+K" |
| Notification Bell | `icon-md` (20px), `neutral-600` |
| Notification Bell Hover | `neutral-900` |
| Notification Badge | `body-xs`, `neutral-0` auf `semantic-danger`, `radius-full`, min-width 18px |
| User Avatar | 32px, `radius-full` |
| User Name | `body-sm`, `neutral-700` |
| User Chevron | `icon-sm` (16px), `neutral-500` |
| User Dropdown | `neutral-0` bg, `shadow-md`, `radius-lg`, `border-default`, min-width 240px |
| User Dropdown Item | `body-md`, `neutral-700`, `space-2` (8px) vertikal, `space-3` (12px) horizontal Padding |
| User Dropdown Item Hover | `neutral-100` bg |
| User Dropdown Divider | `border-subtle` |
| Theme Toggle | Inline-Toggle (`icon-sm`), Sonne/Mond Icons |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Breadcrumbs sichtbar. Search-Trigger neutral. Bell ruhig. Avatar mit Name. | — |
| **Breadcrumb Hover** | Vorige Segmente: `neutral-700` + Underline. | `duration-fast`. Cursor pointer. |
| **Breadcrumb Truncation Hover** | "..." wird `neutral-700`. Dropdown mit ausgelassenen Ebenen. | `duration-fast`. |
| **Search Trigger Hover** | `neutral-200` bg. | `duration-fast`. |
| **Search Trigger Focus/Click** | Oeffnet Command Palette. Search Trigger selbst bleibt visuell zurueckgesetzt. | Keine eigene Eingabe — Weiterleitung an Command Palette. |
| **Notification Bell Hover** | Icon wird `neutral-900`. | `duration-fast`. |
| **Notification Bell Badge** | Roter Badge mit Count. "99+" bei > 99. | Badge erscheint mit `duration-instant` Scale (0.9→1.0). |
| **Notification Bell Click** | Oeffnet Notification-Inbox (Slide-Over oder Popover). | — |
| **User Dropdown Open** | Avatar-Bereich bekommt `neutral-100` bg. Dropdown erscheint darunter. | Fade + translateY(-4px→0), `duration-fast`, `easing-enter`. |
| **User Dropdown Item Hover** | `neutral-100` bg. | `duration-fast`. |
| **Theme Toggle** | Switch zwischen Sonne (Light) und Mond (Dark) Icon. Sofortiger Theme-Wechsel via Token-Remapping. | `duration-fast` Icon-Crossfade. |

**Entry/Exit:**
- Dropdown Open: Fade + translateY, `duration-fast`, `easing-enter`.
- Dropdown Close: Fade, `duration-instant`, `easing-exit`.
- Dismiss: Click outside, `Escape`, oder erneuter Klick auf Avatar.

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-sm` (< 640px) | Topbar: 48px Hoehe. Breadcrumbs kollabieren zu Zurueck-Pfeil (`icon-md` ChevronLeft) + aktuelle Seite (`heading-sm`). Search-Trigger entfaellt. Bell + Avatar bleiben. |
| `breakpoint-md` (< 768px) | Wie `breakpoint-sm`. Breadcrumbs kollabiert. |
| `breakpoint-lg` (>= 1024px) | Topbar: 56px. Volle Breadcrumbs (max 4 Segmente). Search-Trigger sichtbar. |
| `breakpoint-xl`+ | Wie `breakpoint-lg`. Search-Trigger breiter (max 320px). |

**Mobile Zurueck-Navigation:**

```
  [←]  RetailCorp
  ↑       ↑
  Back   Aktueller Seitentitel
```

Der Zurueck-Pfeil navigiert zum vorigen Breadcrumb-Segment (nicht Browser-Zurueck).

---

## 8. Voice Input Integration

Nicht zutreffend — die Topbar selbst bietet keinen Voice Input. Der Search-Trigger leitet an die Command Palette weiter, die Voice Input unterstuetzt (siehe `navigation/command-palette.md`, Abschnitt 8).

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Topbar: `<header>` mit `role="banner"`. Breadcrumbs: `<nav>` mit `aria-label="Breadcrumb"`. |
| **Breadcrumbs** | `<ol>` mit `<li>` pro Segment. Aktuelles Segment: `aria-current="page"`. Separator `>` ist dekorativ (`aria-hidden="true"`). |
| **Truncation** | "..."-Button hat `aria-label="Weitere Navigationsstufen anzeigen"`. Dropdown-Items als `<a>` in einer Liste. |
| **Search** | `aria-label="Suche oeffnen, Cmd+K"`. |
| **Notifications** | `aria-label="Benachrichtigungen, 3 ungelesen"` (dynamisch mit Count). |
| **User Dropdown** | Button: `aria-haspopup="true"`, `aria-expanded="true/false"`. Dropdown: `role="menu"` mit `role="menuitem"` pro Eintrag. |
| **Keyboard** | `Tab` navigiert durch Breadcrumbs → Search → Bell → Avatar. `Enter`/`Space` aktiviert. `Escape` schliesst Dropdown. Innerhalb Dropdown: `Arrow Down`/`Arrow Up`. |
| **Focus Ring** | `shadow-focus` (`brand-primary` Glow) auf allen fokussierbaren Elementen. |
| **Reduced Motion** | Dropdown erscheint sofort ohne Animation. |
| **Skip Link** | Vor der Topbar: "Zum Hauptinhalt springen" Link (`body-sm`, nur bei Focus sichtbar). |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Sidebar (`navigation/sidebar.md`) | Vertikale Ergaenzung. Sidebar links, Topbar oben. Topbar beginnt rechts neben der Sidebar. |
| Command Palette (`navigation/command-palette.md`) | Search-Trigger in der Topbar oeffnet die Command Palette. |
| Notification Inbox (`composition/notification-inbox.md`) | Bell-Klick in der Topbar oeffnet die Notification-Inbox. |
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Auf Mobile uebernimmt die Bottom Nav primaere Navigation. Topbar bleibt sichtbar mit reduziertem Breadcrumb. |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Notification-Inbox kann als Slide-Over geoeffnet werden. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Breadcrumbs mit Truncation. Search-Trigger. Notification-Bell. User-Dropdown mit Theme-Toggle. Mobile Zurueck-Navigation. |
