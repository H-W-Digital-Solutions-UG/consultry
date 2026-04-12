# Bottom Navigation Bar

**Komponenten-Familie:** Navigation
**DS-Version:** v1.3
**DS-Referenz:** 5.12
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Bottom Navigation Bar ist das primaere mobile Navigations-Element. Sie ersetzt Hamburger-Menues und bietet daumenfreundliche, konstante Navigation zu den wichtigsten Bereichen. Nur auf mobilen Breakpoints sichtbar (`breakpoint-sm`, `breakpoint-md`). Ab `breakpoint-lg` wird die Desktop-Sidebar verwendet.

**Persona-adaptiv:** Die sichtbaren Items werden pro Persona angepasst — Katrin sieht Signale + Pipeline, Thomas sieht Cockpit + Approvals, Stefan sieht Projekte + Wissen.

---

## 2. Anatomie

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [Content Area — scrollbar, padding-bottom: 72px]       │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ◇         ◆         ◇         ◇         ◇            │
│  Signale  Pipeline  Matching  Copilot    Mehr           │ <- Bottom Nav
│              •2                                         │ <- Badge (optional)
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [Safe Area Inset — iOS Home Indicator]                 │
└─────────────────────────────────────────────────────────┘
```

**Elemente:**
- **Icon:** `icon-md` (20px), Outline (inaktiv) oder Filled (aktiv)
- **Label:** `body-xs` (11px), unter dem Icon
- **Badge:** Dot (8px) oder Zahlen-Badge bei 2+ Notifications
- **Aktiv-Indikator:** Pill-Hintergrund `interactive-warm` (24x4px) zentriert unter Icon
- **Safe Area:** `env(safe-area-inset-bottom)` fuer iOS Home-Indikator

---

## 3. Varianten

| Variante | Items | Verwendung |
|----------|-------|------------|
| **Katrin (BD)** | Signale, Pipeline, Matching, Copilot, Mehr | BD-fokussierter Workflow. Signale als Startpunkt. |
| **Thomas (MP)** | Cockpit, Approvals, Pipeline, Berichte, Mehr | Management-Uebersicht. Approvals prominent. |
| **Stefan (SC)** | Projekte, Wissen, Profil, Team | 4 Items, kein "Mehr". Projekt-fokussiert. |
| **Lisa (C)** | Profil, Aufgaben, Wissen | 3 Items. Minimaler Scope. |
| **Martina (Admin)** | — | Admin nutzt nur Desktop. Keine Bottom Nav. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `items` | Array of NavItem | persona-abhaengig | Navigation-Items (max 5). |
| `activeItem` | String | aktuelle Route | Aktives Item (Route-basiert). |
| `persona` | String | aktueller Nutzer | Bestimmt Default-Items. |
| `badges` | Map of `{ itemId: count }` | `{}` | Badge-Zaehler pro Item. |
| `onNavigate` | Function | erforderlich | Navigation-Handler. |

**NavItem:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `id` | String | erforderlich | Eindeutige Item-ID (Route). |
| `label` | String | erforderlich | Anzeige-Label (`body-xs`). |
| `icon` | String | erforderlich | Lucide-Icon-Name (Outline-Variante). |
| `iconActive` | String | `null` | Filled-Variante fuer aktiven State. |
| `badge` | Number | `0` | Badge-Count. `0` = kein Badge. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Bar Hoehe | 56px + `env(safe-area-inset-bottom)` |
| Bar bg | `neutral-0` |
| Bar border | `border-subtle` top |
| Bar position | `fixed`, bottom 0, `z-index: 50` |
| Icon inaktiv | `icon-md` (20px), `neutral-500`, Outline |
| Icon aktiv | `icon-md` (20px), `brand-primary`, Filled |
| Label inaktiv | `body-xs` (11px), `neutral-600` |
| Label aktiv | `body-xs` (11px), `brand-primary` |
| Aktiv-Indikator | Pill 24x4px, `interactive-warm`, `radius-full`, zentriert unter Icon |
| Badge dot | 8px, `semantic-danger`, `radius-full`, oben-rechts am Icon |
| Badge count | 16px min-width, `body-xs`, `neutral-0` auf `semantic-danger`, `radius-full` |
| Content padding-bottom | 72px (56px Bar + 16px Breathing Room) |
| Tap target | Min 44x44px pro Item (Accessibility) |
| Haptik | iOS: `UIImpactFeedbackGenerator.style.light`. Android: leichtes Vibrations-Feedback. |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Inaktiv** | Outline Icon, `neutral-500`. Label `neutral-600`. | — |
| **Aktiv** | Filled Icon, `brand-primary`. Label `brand-primary`. Pill-Indikator. | Route-basiert. Genau 1 Item aktiv. |
| **Tap** | Kurzes Scale (0.95→1.0), `duration-instant` | Haptik-Feedback. Navigation ausloesen. |
| **Badge (Dot)** | Roter Dot 8px oben-rechts am Icon | Bei 1 ungelesenen Notification. |
| **Badge (Count)** | Rote Pill mit Zahl oben-rechts | Bei 2+ ungelesenen Notifications. "99+" bei >99. |
| **Hidden** | Nicht gerendert | Auf `breakpoint-lg`+ (Desktop-Sidebar stattdessen). |
| **Scroll-Verhalten** | Immer sichtbar (fixed) | Kein Hide-on-Scroll — konstante Navigation. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-sm` (< 640px) | Bottom Nav sichtbar. 3-5 Items je Persona. Content padding-bottom: 72px. |
| `breakpoint-md` (< 768px) | Bottom Nav sichtbar. Wie `breakpoint-sm`. |
| `breakpoint-lg` (>= 1024px) | Bottom Nav AUSGEBLENDET. Desktop-Sidebar uebernimmt. |
| `breakpoint-xl`+ | Bottom Nav AUSGEBLENDET. |

**Regel:** Bottom Nav und Desktop-Sidebar werden NIEMALS gleichzeitig angezeigt.

---

## 8. Voice Input Integration

Nicht zutreffend — Navigation-Element. Voice Input ist in den Ziel-Screens verfuegbar (Copilot, Command Bar).

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="navigation"`, `aria-label="Hauptnavigation"`. |
| **Items** | `<a>` oder `<button>` mit `aria-label` (z.B. "Signale, 3 neue"). |
| **Aktiv** | `aria-current="page"` auf aktivem Item. |
| **Badge** | Badge-Count in `aria-label` integriert: "Approvals, 2 ausstehend". |
| **Keyboard** | Nicht primaer relevant (Touch-only Breakpoints), aber `Tab`-navigierbar fuer externe Keyboards. |
| **Reduced Motion** | Tap-Scale-Animation entfaellt. Sofortiger State-Wechsel. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Sidebar (`navigation/sidebar.md`) | Desktop-Aequivalent. Mutual exclusive Sichtbarkeit. |
| Toasts & Notifications (`feedback/toasts-notifications.md`) | Toasts erscheinen UEBER der Bottom Nav (`z-index: 60`). |
| Bottom Sheet (`composition/bottom-sheet.md`) | Bottom Sheet schiebt sich ueber die Bottom Nav. |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Auf Mobile: Fullscreen statt Slide-Over. Bottom Nav bleibt sichtbar. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Persona-adaptive Items. Safe-Area-Integration. Badge-System. |
