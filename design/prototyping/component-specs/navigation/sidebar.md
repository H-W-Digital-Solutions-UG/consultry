# Sidebar

**Komponenten-Familie:** Navigation
**DS-Version:** v1.3
**DS-Referenz:** 5.6
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Sidebar ist das primaere Desktop-Navigationselement. Sie bietet persistente, vertikale Navigation zu allen Plattform-Modulen. Die Sidebar ist persona-adaptiv — sichtbare Navigationsgruppen werden basierend auf der Rolle des Nutzers gefiltert. Sie ist nur auf Desktop-Breakpoints (`breakpoint-lg`+) sichtbar und wird auf mobilen Geraeten durch die Bottom Navigation Bar ersetzt.

**Primaere Personas:**
- **Katrin (BD-Leiterin):** Sieht Growth + Deal. Power-User, alle Sektionen offen.
- **Thomas (Managing Partner):** Sieht alle Module. Cockpit als Startpunkt.
- **Stefan (Senior Consultant):** Sieht Delivery + Wissen. Projekt-fokussiert.
- **Lisa (Junior Consultant):** Sieht minimalen Scope (Profil, Aufgaben, Wissen).
- **Martina (Office-Managerin):** Sieht Admin + Deal. Tabellen-zentrierter Workflow.

**Verwendung in Screens:** Alle Desktop-Screens. Persistent, nicht kontextabhaengig.

---

## 2. Anatomie

```
┌── Sidebar (240px / 64px collapsed) ─────────────────┐
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │  [Logo Mark]  Consultry                      │    │  <- Logo-Bereich
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  GROWTH                                              │  <- Gruppen-Header
│  ┌──────────────────────────────────────────────┐    │
│  │  ▎ ◆  Signal-Feed                        12  │    │  <- Aktives Item (3px left border)
│  │    ◇  Discovery                              │    │  <- Inaktives Item
│  │    ◇  Pipeline                            3  │    │  <- Item mit Badge
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  DEAL                                                │
│  ┌──────────────────────────────────────────────┐    │
│  │    ◇  Opportunities                          │    │
│  │    ◇  Matching                               │    │
│  │    ◇  Angebote                               │    │
│  │       └─ Entwuerfe                           │    │  <- Sub-Item (indent 16px)
│  │       └─ Gesendet                            │    │  <- Sub-Item (indent 16px)
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  DELIVERY                                            │
│  ┌──────────────────────────────────────────────┐    │
│  │    ◇  Projekte                               │    │
│  │    ◇  Staffing                               │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  WISSEN                                              │
│  ┌──────────────────────────────────────────────┐    │
│  │    ◇  Knowledge Base                         │    │
│  │    ◇  CV-Verwaltung                          │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  ADMIN                                               │
│  ┌──────────────────────────────────────────────┐    │
│  │    ◇  Einstellungen                          │    │
│  │    ◇  Nutzerverwaltung                       │    │
│  │    ◇  Compliance                             │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  ──────────────────────────────────────────────      │
│  [◁ Collapse]                                        │  <- Collapse-Toggle
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Collapsed (64px):**

```
┌── 64px ──┐
│          │
│  [Logo]  │  <- Nur Logo-Mark
│          │
│   ◆      │  <- Nur Icons, kein Label
│   ◇      │
│   ◇      │
│          │
│   ◇      │
│   ◇      │
│          │
│   [▷]    │  <- Expand-Toggle
└──────────┘
```

**Elemente:**
- **Logo-Bereich:** Expanded: Logo-Mark (32px) + Wordmark (`heading-sm`). Collapsed: Logo-Mark only (24px).
- **Gruppen-Header:** `label` Token (12px, uppercased), Gruppenname.
- **Nav-Item:** Icon (`icon-md`, 20px) + Label (`body-md`) + optionaler Badge-Count.
- **Aktiv-Indikator:** 3px linker Border `brand-primary` + Hintergrund-Tint.
- **Badge:** Zahlen-Badge rechtsbuendig, `body-xs`, `radius-full`.
- **Sub-Item:** 1 Ebene tief, Einrueckung `space-4` (16px), kein eigenes Icon.
- **Collapse-Toggle:** Chevron-Icon am unteren Rand der Sidebar.

---

## 3. Varianten

| Variante | Sichtbare Gruppen | Beschreibung |
|----------|-------------------|-------------|
| **Katrin (BD-Leiterin)** | Growth, Deal | BD-fokussiert. Signal-Feed und Pipeline im Vordergrund. |
| **Thomas (Managing Partner)** | Growth, Deal, Delivery, Wissen, Admin | Vollzugriff auf alle Module. Cockpit als erstes Item. |
| **Stefan (Senior Consultant)** | Delivery, Wissen | Projekt- und Wissens-fokussiert. |
| **Lisa (Junior Consultant)** | Minimal: Profil, Aufgaben, Wissen | Gefuehrter Scope. Wenige Navigationsoptionen. |
| **Martina (Office-Managerin)** | Admin, Deal | Administration und Deal-Management. |

| Variante | Breite | Beschreibung |
|----------|--------|-------------|
| **Expanded** | 240px | Standard. Logo + Wordmark, Icons + Labels, Badge-Counts, Sub-Items sichtbar. |
| **Collapsed** | 64px | Nur Icons. Labels als Tooltip bei Hover. Sub-Items nicht sichtbar. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `persona` | String | aktueller Nutzer | Bestimmt sichtbare Navigationsgruppen. |
| `collapsed` | Boolean | `false` | Sidebar eingeklappt (64px Icon-Only). |
| `activeItem` | String | aktuelle Route | Aktives Nav-Item (Route-basiert). |
| `groups` | Array of NavGroup | persona-abhaengig | Navigationsgruppen mit Items. |
| `badges` | Map of `{ itemId: count }` | `{}` | Badge-Zaehler pro Item. |
| `onNavigate` | Function | erforderlich | Navigation-Handler. |
| `onToggleCollapse` | Function | erforderlich | Collapse/Expand-Handler. |

**NavGroup:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `id` | String | erforderlich | Eindeutige Gruppen-ID. |
| `label` | String | erforderlich | Gruppen-Header-Label (wird uppercased). |
| `items` | Array of NavItem | erforderlich | Nav-Items in dieser Gruppe. |

**NavItem:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `id` | String | erforderlich | Eindeutige Item-ID (Route-Pfad). |
| `label` | String | erforderlich | Anzeige-Label (`body-md`). |
| `icon` | String | erforderlich | Lucide-Icon-Name. |
| `badge` | Number | `0` | Badge-Count. `0` = kein Badge. |
| `children` | Array of NavItem | `[]` | Sub-Items (max 1 Ebene). Kein eigenes Icon. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Sidebar Breite (expanded) | 240px |
| Sidebar Breite (collapsed) | 64px |
| Sidebar bg | `neutral-900` |
| Sidebar position | `fixed`, left 0, top 0, height 100vh, `z-index: 40` |
| Logo-Mark (expanded) | 32px, monochrom `neutral-0` |
| Logo-Mark (collapsed) | 24px, monochrom `neutral-0` |
| Wordmark | `heading-sm`, `neutral-0` |
| Gruppen-Header | `label` (12px, uppercased), `neutral-0` bei 50% Opacity |
| Gruppen-Header Abstand | `space-6` (24px) oben, `space-2` (8px) unten |
| Nav-Item Hoehe | 40px |
| Nav-Item Padding | `space-2` (8px) vertikal, `space-3` (12px) horizontal |
| Nav-Item Icon | `icon-md` (20px), `neutral-0` |
| Nav-Item Label (inaktiv) | `body-md`, `neutral-0` bei 70% Opacity |
| Nav-Item Label (aktiv) | `body-md`, `neutral-0` bei 100% Opacity |
| Aktiv-Indikator Border | 3px links, `brand-primary` |
| Aktiv-Indikator bg | `brand-primary` bei 12% Opacity |
| Hover bg | `neutral-0` bei 6% Opacity |
| Badge | `body-xs`, `neutral-0` auf `semantic-danger`, `radius-full`, min-width 20px |
| Sub-Item Einrueckung | `space-4` (16px) links zusaetzlich |
| Sub-Item Label | `body-sm`, `neutral-0` bei 70% Opacity |
| Divider | `border-subtle`, `neutral-0` bei 10% Opacity |
| Collapse-Toggle | `icon-md`, `neutral-0` bei 70% Opacity, am unteren Rand |
| Scrollbar | Thin, `neutral-0` bei 15% Opacity, nur bei Hover sichtbar |

**Hinweis:** Die Sidebar verwendet einen dunklen Hintergrund (`neutral-900`) als bewusste Design-Entscheidung — dies ist KEIN Dark Theme, sondern ein strukturelles Element, das einen visuellen Rahmen fuer den hellen Content-Bereich bildet. Token-Werte beziehen sich auf das Light-Theme-Token `neutral-900`.

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Inaktiv** | Icon `neutral-0`, Label `neutral-0` bei 70% Opacity. Kein Hintergrund. | — |
| **Hover** | bg `neutral-0` bei 6% Opacity. Label Opacity erhoet sich auf 90%. | `duration-fast`. |
| **Aktiv** | 3px `brand-primary` linker Border + bg `brand-primary` bei 12% Opacity. Label 100% Opacity. | Route-basiert. Genau 1 Item aktiv. |
| **Sub-Item Aktiv** | Wie Aktiv, aber Eltern-Item zeigt ebenfalls erhoehte Opacity. Sub-Items-Liste geoeffnet. | — |
| **Collapsed Hover** | Tooltip mit Label erscheint rechts neben dem Icon. | `duration-fast` Delay. `surface-glass` bg Tooltip. |
| **Collapsed Aktiv** | `brand-primary` linker Border (3px). Icon `neutral-0` bei 100%. | Kein Label sichtbar. |
| **Badge Pulse** | Badge erscheint mit kurzem Scale (0.9→1.0) bei neuem Count. | `duration-instant`. |
| **Collapse Animation** | Breite animiert 240px → 64px. Labels faden aus. Icons zentrieren sich. | `duration-normal`, `easing-default`. |
| **Expand Animation** | Breite animiert 64px → 240px. Labels faden ein. | `duration-normal`, `easing-default`. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-sm` (< 640px) | Sidebar NICHT SICHTBAR. Bottom Navigation Bar uebernimmt. |
| `breakpoint-md` (< 768px) | Sidebar NICHT SICHTBAR. Bottom Navigation Bar uebernimmt. |
| `breakpoint-lg` (>= 1024px) | Sidebar sichtbar. Collapsed-Modus empfohlen (64px) fuer mehr Content-Bereich. |
| `breakpoint-xl` (>= 1280px) | Sidebar sichtbar. Expanded (240px) als Default. |
| `breakpoint-2xl` (>= 1536px) | Sidebar sichtbar. Expanded (240px). |

**Regel:** Sidebar und Bottom Navigation Bar werden NIEMALS gleichzeitig angezeigt.

**Content-Bereich:** Der Hauptinhalt bekommt `margin-left: 240px` (expanded) bzw. `margin-left: 64px` (collapsed). Uebergang ist animiert (`duration-normal`).

---

## 8. Voice Input Integration

Nicht zutreffend — reines Navigations-Element. Voice Input ist in den Ziel-Screens verfuegbar (Copilot, Command Bar).

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `<nav>` Element mit `aria-label="Hauptnavigation"`. |
| **Items** | `<a>` oder `<button>` mit `aria-label`. Gruppen als `<ul>` mit `role="group"` und `aria-labelledby` (Gruppen-Header). |
| **Aktiv** | `aria-current="page"` auf aktivem Item. |
| **Collapsed** | `aria-expanded="false"` auf dem Container. Tooltip-Labels werden als `aria-label` beibehalten. |
| **Sub-Items** | Eltern-Item hat `aria-expanded="true/false"`. Sub-Items als verschachtelte `<ul>`. |
| **Badge** | Badge-Count in `aria-label` integriert: "Signal-Feed, 12 neue". |
| **Keyboard** | `Tab` navigiert durch Items. `Enter`/`Space` aktiviert. `Arrow Down`/`Arrow Up` innerhalb einer Gruppe. `Home`/`End` springt zu erstem/letztem Item der Gruppe. |
| **Kontrast** | `neutral-0` auf `neutral-900`: 13.5:1 — deutlich ueber WCAG AAA. `brand-primary` auf `neutral-900`: 3.2:1 — erfuellt WCAG AA fuer grosse/fettgedruckte Elemente (3px Border als dekorativer Indikator, nicht text-tragend). |
| **Reduced Motion** | Collapse/Expand-Animation entfaellt. Sofortiger Wechsel zwischen 240px und 64px. |
| **Focus Ring** | `border-focus` (2px `brand-primary`) auf dem fokussierten Item. Innerhalb der dunklen Sidebar gut sichtbar. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Mobiles Aequivalent. Mutual exclusive Sichtbarkeit per Breakpoint. |
| Command Palette (`navigation/command-palette.md`) | Keyboard-getriebene Navigation als Alternative zur Sidebar. `Cmd+K` von ueberall. |
| Topbar & Breadcrumbs (`navigation/topbar-breadcrumbs.md`) | Horizontale Ergaenzung. Topbar sitzt rechts neben der Sidebar, oberhalb des Contents. |
| Tab Groups (`navigation/tab-groups.md`) | Intra-Screen-Navigation. Sidebar navigiert zwischen Screens, Tabs innerhalb eines Screens. |
| AI-Adaptive Layout (`ai-interaction/ai-adaptive-layout.md`) | Persona-adaptive Sidebar-Konfiguration wird durch das Adaptive Layout System gesteuert. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Persona-adaptive Gruppen. Collapsed/Expanded-Modi. Sub-Item-Support. Badge-System. z-index 40. |
