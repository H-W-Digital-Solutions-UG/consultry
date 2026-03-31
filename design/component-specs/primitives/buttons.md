# Buttons

**Komponenten-Familie:** Primitives
**DS-Version:** v1.3
**DS-Referenz:** 5.1
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Buttons sind die primaeren interaktiven Elemente fuer Aktionen. Jeder Screen hat maximal einen Primary Button pro sichtbarem Bereich. Alle Buttons verwenden ausschliesslich solide Farben — der Gradient ist hero-only (Login, Onboarding).

---

## 2. Anatomie

```
┌─────────────────────────────────┐
│  [Icon]  Label  [Loading Spin]  │
└─────────────────────────────────┘
     ↑       ↑         ↑
  Optional  Required  State-dependent
```

- Icon: Links vom Label, `icon-sm`/`icon-md` je nach Button-Groesse.
- Label: Zentriert. Nie nur Icon ohne Label (Ausnahme: Icon-Button in Tabellen-Actions).
- Loading: Spinner ersetzt Label. Breite bleibt konstant.

---

## 3. Varianten

| Variante | Background | Text | Border | Verwendung |
|----------|-----------|------|--------|------------|
| **Primary** | `brand-primary` | `neutral-0` | none | Haupt-CTAs: "Angebot erstellen", "Speichern". Max 1 pro Bereich. |
| **Secondary** | `neutral-0` | `neutral-700` | `border-default` | Unterstuetzende Aktionen: "Abbrechen", "Exportieren". |
| **Ghost** | transparent | `brand-primary` | none | Tertiaere Aktionen: "Alle anzeigen", Toolbar-Links. |
| **Danger** | `semantic-danger` | `neutral-0` | none | Destruktive Aktionen: "Loeschen". Erfordert Bestaetigungs-Dialog. |
| **Hero (Gradient)** | `brand-gradient` | `neutral-0` | none | **Nur Login/Onboarding.** Nie im Standard-App-Flow. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `primary` / `secondary` / `ghost` / `danger` / `hero` | `primary` | Visuelle Variante. |
| `size` | `sm` / `md` / `lg` | `md` | Groesse (32/40/48px Hoehe). |
| `icon` | Lucide Icon Name | `null` | Optionales Icon links. |
| `iconPosition` | `left` / `right` | `left` | Icon-Position. |
| `loading` | Boolean | `false` | Zeigt Spinner, deaktiviert Interaktion. |
| `disabled` | Boolean | `false` | Visuell und funktional deaktiviert. |
| `fullWidth` | Boolean | `false` | Volle Container-Breite (Mobile CTAs). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Primary bg | `brand-primary` |
| Primary hover bg | `brand-primary-light` |
| Primary active bg | `brand-primary-dark` |
| Secondary bg | `neutral-0` |
| Secondary hover bg | `neutral-50` |
| Ghost text | `brand-primary` |
| Danger bg | `semantic-danger` |
| Text (Primary/Danger/Hero) | `neutral-0` |
| Text (Secondary) | `neutral-700` |
| Border (Secondary) | `border-default` |
| Focus ring | `border-focus` + `shadow-focus` |
| Border-radius | `radius-md` (8px) |
| Font sm | `body-sm` (12px) |
| Font md | `body-md` (14px) |
| Font lg | `body-lg` (16px) |
| Padding sm | 6px 12px |
| Padding md | 8px 16px |
| Padding lg | 12px 24px |
| Spinner | 16px, `neutral-0` (Primary/Danger) oder `brand-primary` (Secondary/Ghost) |

---

## 6. Interaktive States

| State | Primary | Secondary | Ghost | Danger |
|-------|---------|-----------|-------|--------|
| **Default** | `brand-primary` bg | `neutral-0` bg, border | transparent | `semantic-danger` bg |
| **Hover** | `brand-primary-light` | `neutral-50` bg | Underline | `semantic-danger` +8% brightness |
| **Active** | `brand-primary-dark` | brightness -5% | brightness -5% | `semantic-danger` -8% |
| **Focus** | `border-focus` + `shadow-focus` | Same | Same | Same |
| **Disabled** | Opacity 0.4, `cursor: not-allowed` | Same | Same | Same |
| **Loading** | Spinner, width preserved, non-interactive | Same | Same | Same |

Alle Hover/Active-Transitions: `duration-fast` (150ms).

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Standard-Groessen. Inline-Positionierung. |
| Mobile (`breakpoint-sm`) | `fullWidth` aktiviert fuer primaere CTAs. Mindest-Tap-Target: 44x44px. `sm`-Buttons werden zu `md`. |
| Bottom Sheet / Modal Footer | Buttons volle Breite, gestapelt: Primary oben, Secondary unten. |

---

## 8. Voice Input Integration

Nicht zutreffend — Buttons sind Klick-/Tap-Elemente.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Element** | Nativer `<button>` (nie `<div>` oder `<a>`). Link-Buttons: `<a>` mit `role="button"`. |
| **Keyboard** | `Tab` fokussiert, `Enter`/`Space` aktiviert. |
| **Screen Reader** | Label vorgelesen. Loading: `aria-busy="true"`. Disabled: `aria-disabled="true"`. |
| **Kontrast** | Primary: 4.62:1 (white on `brand-primary`). Danger: 4.5:1+. Hero: individuell pruefen. |
| **Touch Target** | Minimum 44x44px (inkl. Padding). `sm`-Buttons auf Mobile hochskaliert. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Inputs (`primitives/inputs.md`) | Buttons neben Inputs in Formularen. Gleichhoehe bei `md`. |
| Action Bar (`composition/action-bar.md`) | Gruppiert Buttons in Seiten-Level-Aktionsleisten. |
| Modals (`feedback/modals-dialogs.md`) | Footer: Secondary links, Primary rechts. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. |
