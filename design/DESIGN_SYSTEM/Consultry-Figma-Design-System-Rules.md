# Consultry Figma Design System Rules

## Unified Token & Component Guidelines for Figma Development

**Status:** v1.0
**Date:** 31 March 2026
**Authority:** Consultry Design System v1.3 (App) is the **canonical source**. The Marketing Design System v1.0 **extends** it for public-facing pages. This document aligns both into a single Figma-optimized ruleset.
**Audience:** Figma designers, Figma-to-code agents (Claude Code, Cursor), design engineers

---

## 0. Architecture: Two Modes, One System

Consultry's Figma library operates as **one unified system** with two application modes:

| Dimension | App Mode | Marketing Mode |
|-----------|----------|----------------|
| **Figma File** | `Consultry App — Components` | `Consultry Marketing — Components` |
| **Variable Collection** | `App Tokens` (inherits from `Core Tokens`) | `Marketing Tokens` (inherits from `Core Tokens`) |
| **Purpose** | Dense CRM tool for daily use | Persuasive, cinematic public-facing website |
| **Authority** | **Primary (v1.3 canonical)** | Extension only — inherits all core tokens |

**The golden rule:** Both files share `Core Tokens`. Marketing adds `mktg-*` tokens as a **supplementary layer**, never overriding core values.

---

## 1. Figma Variable Collections

### 1.1 Collection: `Core Tokens` (Shared — Authoritative)

All variables in this collection are **inherited by both App and Marketing** Figma files. This is the single source of truth.

#### Color Variables

**Group: `brand/`**

| Variable Name | Light Value | Dark Value | Description |
|---------------|-------------|------------|-------------|
| `brand/gradient-start` | `#E8913A` | `#E8913A` | Warm amber-orange. Logo gradient start. |
| `brand/gradient-mid` | `#E8655A` | `#E8655A` | Bright coral. Logo gradient midpoint. |
| `brand/gradient-end` | `#9B59B6` | `#9B59B6` | Soft purple. Logo gradient end. |
| `brand/primary` | `#BF5347` | `#DDA49E` | **Workhorse brand color.** Buttons, links, focus rings. 4.62:1 on white. |
| `brand/primary-light` | `#CA7168` | `#E5BAB4` | Hover state. |
| `brand/primary-dark` | `#A2463C` | `#C48E87` | Active/pressed state. 6.04:1 on white (light). |
| `brand/warm` | `#E8913A` | `#F0A85E` | Secondary brand. Energy moments only — charts, progress, accents. **NEVER in status badges.** |
| `brand/warm-light` | `#F0A85E` | `#F5C08A` | Hover state for warm elements. |

**Group: `semantic/`**

| Variable Name | Light Value | Dark Value |
|---------------|-------------|------------|
| `semantic/success` | `#16A34A` | `#22C55E` |
| `semantic/success-light` | `#E8F5ED` | `#1A3D2A` |
| `semantic/warning` | `#D97706` | `#F59E0B` |
| `semantic/warning-light` | `#FEF3E0` | `#3D2E0A` |
| `semantic/danger` | `#DC2626` | `#EF4444` |
| `semantic/danger-light` | `#FEE2E2` | `#3D1A1A` |
| `semantic/info` | `#3A5DAE` | `#6B8ED6` |
| `semantic/info-light` | `#EEF2FF` | `#1A2340` |

**Group: `neutral/`**

| Variable Name | Light Value | Dark Value | Notes |
|---------------|-------------|------------|-------|
| `neutral/900` | `#3E3C3A` | `#EDE8E2` | Primary text / Warm off-white text in dark |
| `neutral/800` | `#494645` | `#D5D0CA` | Headings |
| `neutral/700` | `#605D59` | `#C0BBB5` | Secondary text, labels |
| `neutral/600` | `#7B7671` | `#B5B0AD` | Placeholders, captions. AA minimum on white. |
| `neutral/500` | `#B5B0AD` | `#8A857F` | Disabled text |
| `neutral/400` | `#DCDAD8` | `#706B65` | Inactive icons |
| `neutral/300` | `#DDDAD5` | `#65605A` | Borders, dividers |
| `neutral/200` | `#EBE9E8` | `#5A554F` | Card borders, row alternation |
| `neutral/100` | `#F6F6F6` | `#3A3833` | Page background |
| `neutral/50` | `#FBFBFA` | `#3F3C37` | Elevated surface |
| `neutral/0` | `#FFFFFF` | `#45413B` | Card surface, inputs, modals |

**Group: `surface/`**

| Variable Name | Light Value | Dark Value |
|---------------|-------------|------------|
| `surface/page` | `#F6F6F6` | `#3A3833` |
| `surface/elevated` | `#FBFBFA` | `#3F3C37` |
| `surface/card` | `#FFFFFF` | `#45413B` |
| `surface/glass` | `rgba(255, 248, 245, 0.85)` | `rgba(69, 65, 59, 0.85)` |

**Group: `ai/`**

| Variable Name | Light Value | Dark Value |
|---------------|-------------|------------|
| `ai/surface` | `#FFF8F5` | `#403D38` |
| `ai/border` | `#F0D4C8` | `#5A4F48` |
| `ai/accent` | `#BF5347` | `#DDA49E` |
| `ai/sparkle` | `#E8913A` | `#F0A85E` |

**Group: `interactive/`**

| Variable Name | Value |
|---------------|-------|
| `interactive/warm` | `rgba(232, 145, 58, 0.18)` |
| `interactive/warm-strong` | `rgba(232, 145, 58, 0.30)` |

**Group: `score/`**

| Variable Name | Value | Range |
|---------------|-------|-------|
| `score/excellent` | `#16A34A` | 80-100 |
| `score/good` | `#E8913A` | 60-79 |
| `score/moderate` | `#D97706` | 40-59 |
| `score/weak` | `#EA580C` | 20-39 |
| `score/poor` | `#DC2626` | 0-19 |

#### Number Variables

**Group: `space/`**

| Variable Name | Value | Usage |
|---------------|-------|-------|
| `space/0` | 0 | None |
| `space/1` | 4 | Tight: icon-label gaps |
| `space/2` | 8 | Compact: intra-component |
| `space/3` | 12 | Default: form field gaps |
| `space/4` | 16 | Standard: card padding |
| `space/5` | 20 | Comfortable: card groups |
| `space/6` | 24 | Section gaps |
| `space/8` | 32 | Region separation |
| `space/10` | 40 | Page margins |
| `space/12` | 48 | Major page sections |
| `space/16` | 64 | Hero/splash only |

**Group: `radius/`**

| Variable Name | Value | Usage |
|---------------|-------|-------|
| `radius/none` | 0 | Dense data tables |
| `radius/sm` | 4 | Badges, tags, chips |
| `radius/md` | 8 | **Buttons, inputs, dropdowns** (echoes octagonal logo) |
| `radius/lg` | 10 | **Cards, modals, popovers** |
| `radius/xl` | 14 | Floating panels, command palette |
| `radius/full` | 9999 | Avatars, status dots, pill badges |

**Group: `shadow/`** (use Figma Effect Variables)

| Variable Name | Value |
|---------------|-------|
| `shadow/none` | none |
| `shadow/sm` | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)` |
| `shadow/md` | `0 4px 12px rgba(0,0,0,0.06)` |
| `shadow/lg` | `0 8px 20px rgba(0,0,0,0.08)` |
| `shadow/xl` | `0 12px 32px rgba(0,0,0,0.12)` |
| `shadow/focus` | `0 0 0 3px rgba(191, 83, 71, 0.25)` |
| `shadow/warm-glow` | `0 0 0 3px rgba(232, 145, 58, 0.25)` |

---

### 1.2 Collection: `Marketing Tokens` (Extension — Marketing File Only)

These tokens exist **only** in the Marketing Figma file. They are **not used in the App**.

**Group: `mktg-surface/`**

| Variable Name | Value | Usage |
|---------------|-------|-------|
| `mktg-surface/light` | `#FFFBF9` | Warm off-white page bg |
| `mktg-surface/warm` | `#FFF5F0` | Alternating warm section bg |
| `mktg-surface/dark` | `#2C2926` | Dark feature sections |
| `mktg-surface/dark-elevated` | `#3A3833` | Cards on dark sections |
| `mktg-surface/hero` | `#1E1B18` | Hero section (deepest dark) |
| `mktg-surface/text-on-dark` | `#FAFAF9` | Primary text on dark |
| `mktg-surface/text-on-dark-muted` | `rgba(250, 250, 249, 0.65)` | Secondary text on dark |

**Group: `mktg-space/`**

| Variable Name | Value | Usage |
|---------------|-------|-------|
| `mktg-space/xs` | 8 | Tight marketing gaps |
| `mktg-space/sm` | 16 | Intra-component |
| `mktg-space/md` | 24 | Default between elements |
| `mktg-space/lg` | 40 | Between components |
| `mktg-space/xl` | 64 | Between sections (primary rhythm) |
| `mktg-space/2xl` | 96 | Between major regions |
| `mktg-space/3xl` | 128 | Hero internal padding |

**Group: `mktg-radius/`**

| Variable Name | Value | Notes |
|---------------|-------|-------|
| `mktg-radius/sm` | 8 | Same as app `radius/md` |
| `mktg-radius/md` | 12 | **Larger than app** (12 vs 10) — softer cards |
| `mktg-radius/lg` | 16 | Screenshot containers, testimonials |
| `mktg-radius/xl` | 24 | Hero product showcases |
| `mktg-radius/full` | 9999 | Pill buttons (all marketing CTAs) |

**Group: `mktg-shadow/`**

| Variable Name | Value |
|---------------|-------|
| `mktg-shadow/sm` | `0 2px 8px rgba(0,0,0,0.04)` |
| `mktg-shadow/md` | `0 4px 20px rgba(0,0,0,0.06)` |
| `mktg-shadow/lg` | `0 8px 40px rgba(0,0,0,0.08)` |
| `mktg-shadow/hero` | `0 20px 60px rgba(0,0,0,0.15)` |
| `mktg-shadow/glow` | `0 0 40px rgba(191, 83, 71, 0.12)` |

---

## 2. Figma Text Styles

### 2.1 App Text Styles (Authoritative)

All styles use **Inter**. Organize under the group `App/`.

| Style Name | Font | Weight | Size | Line Height | Letter Spacing |
|------------|------|--------|------|-------------|----------------|
| `App/display-hero` | Inter | Bold (700) | 48-56 | 1.1 | -0.02em |
| `App/display-lg` | Inter | SemiBold (600) | 32-40 | 1.2 | -0.02em |
| `App/heading-xxl` | Inter | Bold (700) | 32 | 40 (1.25) | -0.02em |
| `App/heading-xl` | Inter | Bold (700) | 24 | 32 (1.33) | -0.01em |
| `App/heading-lg` | Inter | SemiBold (600) | 20 | 28 (1.4) | -0.01em |
| `App/heading-md` | Inter | SemiBold (600) | 16 | 24 (1.5) | 0 |
| `App/heading-sm` | Inter | SemiBold (600) | 14 | 20 (1.43) | 0 |
| `App/body-lg` | Inter | Regular (400) | 16 | 24 (1.5) | 0 |
| `App/body-md` | Inter | Regular (400) | 14 | 20 (1.43) | 0 |
| `App/body-sm` | Inter | Regular (400) | 12 | 16 (1.33) | 0.01em |
| `App/body-xs` | Inter | Regular (400) | 11 | 14 (1.27) | 0.02em |
| `App/label` | Inter | Medium (500) | 12 | 16 (1.33) | 0.04em |
| `App/mono-md` | JetBrains Mono | Regular (400) | 14 | 20 (1.43) | 0 |
| `App/mono-sm` | JetBrains Mono | Regular (400) | 12 | 16 (1.33) | 0 |

### 2.2 Marketing Text Styles (Extension)

Organize under the group `Marketing/`. These exist only in the Marketing Figma file.

| Style Name | Font | Weight | Size | Line Height | Letter Spacing |
|------------|------|--------|------|-------------|----------------|
| `Marketing/display-hero` | Inter | ExtraBold (800) | 64-80 | 1.05 | -0.03em |
| `Marketing/display-lg` | Inter | Bold (700) | 48-56 | 1.1 | -0.025em |
| `Marketing/display-md` | Inter | SemiBold (600) | 36-40 | 1.15 | -0.02em |
| `Marketing/display-sm` | Inter | SemiBold (600) | 28-32 | 1.2 | -0.015em |
| `Marketing/heading-lg` | Inter | SemiBold (600) | 24 | 1.3 | -0.01em |
| `Marketing/heading-md` | Inter | SemiBold (600) | 20 | 1.4 | -0.01em |
| `Marketing/heading-sm` | Inter | Medium (500) | 16 | 1.5 | 0 |
| `Marketing/body-lg` | Inter | Regular (400) | 18 | 1.6 | 0 |
| `Marketing/body-md` | Inter | Regular (400) | 16 | 1.6 | 0 |
| `Marketing/body-sm` | Inter | Regular (400) | 14 | 1.5 | 0.01em |
| `Marketing/label` | Inter | Medium (500) | 13 | 1.3 | 0.06em |
| `Marketing/mono` | JetBrains Mono | Regular (400) | 16 | 1.5 | 0 |

**Key scale differences:**

- Marketing hero is 64-80px (vs app 48-56px) and **ExtraBold** (vs Bold)
- Marketing body default is 18px (vs app 14px) — reading at arm's length
- Marketing display letter-spacing is tighter (-0.03em vs -0.02em)
- Marketing adds `mktg-label` with uppercase + 0.06em tracking

---

## 3. Figma Component Architecture

### 3.1 App Components (Authoritative Library)

Organize components in the Figma library using the following page/section structure. All component naming follows the `Category / Component Name` Figma convention.

```
Page: Primitives
├── Button / Primary, Secondary, Ghost, Danger, Hero (Gradient)
│   ├── Size: sm (32px), md (40px), lg (48px)
│   └── State: Default, Hover, Active, Focus, Disabled, Loading
├── Input / Default, Search, AI Prompt, Numeric, Textarea, Quiet
│   └── State: Default, Hover, Focus, Error, Disabled
├── Badge / Status-Success, Status-Warning, Status-Danger, Status-Info, Status-Neutral
│   ├── Skill Tag / Default, Matched
│   ├── AI Badge
│   ├── Score Badge (uses score/* color tokens)
│   └── DSGVO Consent: Unknown, Pending, OptedIn, Suppressed
│   └── Size: sm (20px), md (24px), lg (28px)
├── Avatar / Image, Initials, Placeholder
│   └── Size: xs (24px), sm (32px), md (40px), lg (48px), xl (64px)

Page: Data Display
├── Card / Default, AI-Generated, Metric, Signal, Compact, Selected
├── Data Table / Header Row, Body Row, Alternating Row
│   └── Column Types: Text, Number, Score, Status, Date, Actions
├── Score Display / Badge, Ring, Bar, Breakdown
├── Preview Panel / Inline, Slide-Over, Tooltip, Fullscreen
├── Timeline / Activity Item, AI Event, User Event
├── Charts & KPI / Sparkline, Bar Chart, Donut, KPI Card

Page: Composition
├── Bento Grid / 4-col, 2-col, 1-col layouts
│   └── Cell variants: default, span-2, span-full, featured
├── Slide-Over Panel / default (480px), wide (640px)
├── Context Rail (1/3 width)
├── Filter Bar
├── Action Bar
├── Approval Card
├── Staffing Request Card
├── Bottom Sheet (mobile)

Page: Navigation
├── Sidebar / Expanded (240px), Collapsed (64px)
│   └── Nav Item: Default, Hover, Active
├── Top Bar (56px)
│   └── Breadcrumbs, Global Search, Notifications, User Avatar
├── Bottom Navigation Bar / 4-item, 5-item (mobile only)
│   └── Item: Active (filled + brand-primary), Inactive (outline + neutral-500)
├── Command Palette (640px max, surface-glass)
├── Tab Groups

Page: Feedback
├── Modal / Dialog (560px md, 800px lg)
├── Toast / Success, Warning, Error, Info
├── Empty State (centered, 400px max)
├── Loading / Shimmer, Logo Pulse
├── Consent Indicators

Page: AI Interaction
├── AI Content Card (ai-surface bg, 3px brand-primary left border)
├── Copilot Panel
├── Chat Interface
├── Dialog Agent
├── Canvas Toolbar
├── Smart Pre-Fill Input
├── Proactive Nudge Card
├── Completion Suggestion (inline)
```

### 3.2 Marketing Components (Extension Library)

```
Page: Marketing Primitives
├── Button / Primary (pill), Hero Gradient (pill), Secondary, Ghost, Nav CTA
│   ├── Size: sm (36px), md (44px), lg (52px)
│   └── Note: ALL marketing buttons are pill-shaped (radius-full)
├── Feature Card (mktg-radius-md: 12px, stagger-in animation)
├── Testimonial Card
├── Pricing Card / Default, Recommended (2px brand-primary border)
├── Statistics Counter (mktg-mono, counter-roll animation)
├── Product Screenshot Container (mktg-radius-xl, mktg-shadow-hero)

Page: Marketing Sections
├── Hero / Primary (Dark), Product Showcase, Minimal (Light), Customer Story
├── Feature Grid (3-col, 2-col, 1-col)
├── Logo Strip (grayscale, hover to color)
├── CTA Band (gradient or dark bg)
├── Footer (mktg-surface-hero, 4-column)
├── Navigation / Top Bar (transparent→glass on scroll)
│   └── Mega-Menu Dropdown

Page: Marketing Pages (Templates)
├── Homepage
├── Feature / Product Page
├── Pricing Page
├── Customer Story
├── Blog / Resource Page
```

---

## 4. Critical Design Rules for Figma

### 4.1 Gradient Usage (Most Important Rule)

| Context | Gradient Allowed? | Solid `brand/primary` Instead? |
|---------|:-:|:-:|
| **App** standard buttons | **NEVER** | **ALWAYS** |
| App login screen CTA | Yes | — |
| App onboarding splash | Yes | — |
| Logo mark (all contexts) | Yes | — |
| **Marketing** hero CTA | Yes (1 per hero max) | — |
| Marketing section dividers | Yes (2px line, max 2/page) | — |
| Marketing accent underlines | Yes (max 1/page outside hero) | — |
| Marketing standard buttons | **NEVER** | **ALWAYS** |
| Marketing card backgrounds | **NEVER** | — |
| Marketing body text | **NEVER** | — |

**Gradient specification:** `linear-gradient(135deg, #E8913A, #E8655A, #9B59B6)` — 135 degrees, three stops.

### 4.2 Button Shape Rule

| Context | Border Radius |
|---------|---------------|
| App buttons | `radius/md` (8px) — tool-like, precise |
| Marketing buttons | `mktg-radius/full` (9999px) — pill, inviting |

This is **intentional** — the shape difference reinforces the "same world, different mode" relationship.

### 4.3 Card Radius Rule

| Context | Border Radius |
|---------|---------------|
| App cards | `radius/lg` (10px) — precise, tool-like |
| Marketing cards | `mktg-radius/md` (12px) — softer, approachable |

### 4.4 Score Badge Text Color Rule (Hard Rule)

| Score Range | Badge Color | Text Color |
|-------------|-------------|------------|
| 80-100 Excellent | `score/excellent` green | `neutral/900` (dark) |
| 60-79 Good | `score/good` orange | `neutral/900` (dark) |
| 40-59 Moderate | `score/moderate` amber | `neutral/900` (dark) |
| 20-39 Weak | `score/weak` burnt orange | `neutral/900` (dark) |
| 0-19 Poor | `score/poor` red | `neutral/0` (white) |

**Only `score/poor` gets white text.** All others must use dark text for WCAG AA. Pair every score badge with the numerical value in `mono-md` and a text label.

### 4.5 brand-warm vs semantic-warning (Disambiguation)

| Token | Hex | Allowed Context | Forbidden Context |
|-------|-----|-----------------|-------------------|
| `brand/warm` | `#E8913A` | Chart accents, progress bars, decorative highlights | Status badges, alerts, warning indicators |
| `semantic/warning` | `#D97706` | Status badges, alert banners, pending states | Charts, decorative elements |

**Figma enforcement:** These are separate color variables. Never swap them. Warning badges must include the `AlertTriangle` Lucide icon.

### 4.6 AI Content Visual Pattern

All AI-generated content uses:
- Background: `ai/surface` (warm off-white)
- Left border: 3px `brand/primary` (`#BF5347`)
- Attribution: Sparkles icon + "KI-generiert" label in `ai/accent`
- Confidence badge: AI Badge variant

**Never place AI content on `neutral/0` (white).** The warm tint is the universal "this came from AI" signal.

### 4.7 Surface Hierarchy (Tonal Shifts > Borders)

Use surface color steps to define structural regions. Reserve borders for intra-component detail.

```
Level 0 (Page):    neutral/100  (#F6F6F6)   ← Main workspace
Level 1 (Elevated): neutral/50   (#FBFBFA)   ← Sidebar areas
Level 2 (Card):    neutral/0    (#FFFFFF)   ← Cards, inputs
Level 3 (Float):   surface/glass             ← Command palette, floating AI
```

### 4.8 Dark Mode Preparation

- NEVER hardcode hex values directly on Figma frames — always bind to variables
- Dark mode is activated via Figma variable modes on the `Core Tokens` collection
- The darkest dark-mode value is `#3A3833` — never pure black
- The lightest dark-mode text is `#EDE8E2` — never pure white
- `brand/primary` lightens to `#DDA49E` in dark mode for contrast compliance

### 4.9 Marketing Surface Alternation Rule

Never stack two same-surface sections. Follow the alternation pattern:

```
dark hero → light → warm → light → dark → light → CTA band → dark footer
```

Use `mktg-surface/light`, `mktg-surface/warm`, and `mktg-surface/dark` to create section boundaries without borders.

---

## 5. Figma MCP Integration Rules

### 5.1 Required Figma-to-Code Flow

1. Run `get_design_context` for the target node(s)
2. If output is truncated, run `get_metadata` for the node map, then re-fetch specific nodes
3. Run `get_screenshot` for visual reference
4. Download any assets from the Figma MCP localhost endpoint
5. Translate Figma output to project conventions (CSS custom properties, not Tailwind)
6. Validate against Figma screenshot for 1:1 visual fidelity

### 5.2 Token Translation (Figma → CSS)

Figma variables map to CSS custom properties with the `--consultry-` prefix:

```css
/* Brand */
--consultry-color-brand-primary: #BF5347;
--consultry-color-brand-warm: #E8913A;

/* Neutral */
--consultry-color-neutral-900: #3E3C3A;
--consultry-color-neutral-0: #FFFFFF;

/* Spacing */
--consultry-space-4: 16px;
--consultry-space-6: 24px;

/* Radius */
--consultry-radius-md: 8px;
--consultry-radius-lg: 10px;

/* Marketing-specific (marketing site only) */
--mktg-surface-light: #FFFBF9;
--mktg-surface-warm: #FFF5F0;
--mktg-radius-md: 12px;
```

### 5.3 Asset Handling

- IMPORTANT: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly
- IMPORTANT: DO NOT import new icon packages — use Lucide Icons (the canonical icon set)
- Store downloaded assets in `public/assets/` or the HubSpot theme assets folder
- All icons are Lucide: 24x24, stroke-based, `neutral/600` default, `neutral/900` active

### 5.4 Component Mapping

When implementing from Figma, map to these existing component locations:

| Figma Component | Code Location | Notes |
|-----------------|---------------|-------|
| App components | `design/component-specs/` | Detailed specs per component |
| Screen layouts | `design/screen-specs/` | Full screen specifications |
| Marketing components | HubSpot CMS modules in `hubspot-cms/` | HubL + CSS modules |

---

## 6. Iconography in Figma

### 6.1 Icon Library: Lucide Icons

| Size Token | Figma Frame Size | Stroke Width | Usage |
|------------|-----------------|--------------|-------|
| `icon-xs` | 14x14 | 1.5px | Inline with body-sm, badges |
| `icon-sm` | 16x16 | 1.5px | Inline with body-md, table rows |
| `icon-md` | 20x20 | 2px | Default: nav, card headers, buttons |
| `icon-lg` | 24x24 | 2px | Section headers, empty states |
| `icon-xl` | 32x32 | 2px | Feature illustrations, onboarding |

### 6.2 Consultry-Specific Icon Mapping

| Concept | Lucide Icon | Color |
|---------|-------------|-------|
| Signal / Alert | `Zap` | `brand/warm` |
| Match Score | `Target` | By score range |
| AI / Intelligence | `Sparkles` | `ai/sparkle` |
| Risk / Warning | `AlertTriangle` | `semantic/warning` |
| DSGVO / Consent | `ShieldCheck` | By consent state |
| Pipeline | `GitBranch` | `neutral/600` |

### 6.3 Emoji Rules in Figma

- Allowed: Status badges, empty states, notifications, signal feed categories, KPI trends
- Forbidden: Body text, button labels, form labels, headings, table cells, navigation
- Rule: If a Lucide icon serves the same purpose, prefer the icon

---

## 7. Motion Tokens for Figma Prototyping

### 7.1 App Motion (Subtle, Functional)

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `duration-instant` | 100ms | default | Button press, checkbox |
| `duration-fast` | 150ms | default | Hover, tooltip |
| `duration-normal` | 250ms | enter | Panel open, card expand |
| `duration-slow` | 400ms | enter | Modal enter, score animate |

Easing: `ease-default`: cubic-bezier(0.4, 0, 0.2, 1)

### 7.2 Marketing Motion (Cinematic, Scroll-Triggered)

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `mktg-duration-fast` | 200ms | default | Hover, micro-interactions |
| `mktg-duration-normal` | 400ms | enter | Card reveals, fade-up |
| `mktg-duration-slow` | 600ms | dramatic | Hero entrance, product reveal |
| `mktg-duration-cinematic` | 800ms | dramatic | Hero bg fade, page transition |

Easing: `mktg-ease-dramatic`: cubic-bezier(0.16, 1, 0.3, 1)

### 7.3 Motion Rules

- App: opacity + translateY only. No bounce, no spin, no parallax.
- Marketing: scroll-triggered reveals, stagger-in (80ms per child, max 5), counter-roll for stats. No looping animations. No parallax on text.
- Both: Always respect `prefers-reduced-motion: reduce`.

---

## 8. Layout & Grid in Figma

### 8.1 App Grid

| Breakpoint | Width | Columns | Gutter | Max Content |
|------------|-------|---------|--------|-------------|
| Desktop (primary) | 1280px+ | 12 | 24px | 1440px |
| Tablet landscape | 1024px | 12 | 24px | 100% |
| Tablet portrait | 768px | 8 | 24px | 100% |
| Mobile | 640px | 4 | 16px | 100% |

**Default layout:** 2/3 main content + 1/3 context rail (architectural asymmetry).

**Bento Grid (dashboards only):** 4-col desktop, 2-col tablet, 1-col mobile. Cell min-width 280px. Gap: `space/4` (16px).

### 8.2 Marketing Grid

| Breakpoint | Width | Columns | Gutter | Max Content |
|------------|-------|---------|--------|-------------|
| Desktop | 1280px+ | 12 | 32px | 1200px |
| Tablet | 768-1279px | 8 | 24px | 100% - 64px |
| Mobile | <768px | 4 | 16px | 100% - 32px |

Hero sections and dark sections are **full-bleed** (span viewport). Content inside follows the grid.

---

## 9. Accessibility Checklist for Figma

### Color Contrast (Both Modes)

- [ ] All body text: 4.5:1 minimum against background
- [ ] Large text (18px+ or 14px+ bold): 3:1 minimum
- [ ] `brand/primary` on white: 4.62:1 (passes AA)
- [ ] `brand/primary` dark-mode on `neutral/100` dark: 5.51:1 (passes AA)
- [ ] Score badges: only `score/poor` uses white text
- [ ] `interactive/warm` is NEVER used as text color
- [ ] Marketing gradient text on dark: verify per instance (orange edge may fail small text)
- [ ] Marketing `mktg-surface/text-on-dark` on `mktg-surface/dark`: 12.7:1 (passes AAA)

### Component Accessibility

- [ ] All buttons have visible focus ring: 2px `brand/primary` + `shadow/focus`
- [ ] Disabled states: opacity 0.4, no pointer events
- [ ] AI content: labeled "KI-generierter Inhalt"
- [ ] Score displays: paired with numerical value + text label
- [ ] Marketing scroll animations: degrade to instant render with `prefers-reduced-motion`

---

## 10. Naming Conventions

| Entity | Convention | Example |
|--------|-----------|---------|
| Figma variables | kebab-case with `/` groups | `brand/primary`, `space/4` |
| Figma text styles | Group/Style Name | `App/heading-lg`, `Marketing/display-hero` |
| Figma components | Category / Name | `Button / Primary`, `Card / AI-Generated` |
| Component variants | PascalCase property names | `Size=md`, `State=Hover`, `Variant=Primary` |
| CSS custom properties | `--consultry-{category}-{name}` | `--consultry-color-brand-primary` |
| CSS marketing properties | `--mktg-{category}-{name}` | `--mktg-surface-light` |

---

## 11. Alignment Summary: What Changed, What Didn't

### Shared (No Conflicts)

- All brand color hex values
- Semantic color hex values
- Primary font: Inter
- Monospace font: JetBrains Mono
- Gradient direction: 135deg with same three stops
- `brand-warm` vs `semantic-warning` disambiguation rule
- WCAG AA compliance baseline
- German-first content design principles
- Score badge text color rules

### Intentional Divergences (By Design)

| Dimension | App (Authoritative) | Marketing (Extension) | Why |
|-----------|--------------------|-----------------------|-----|
| Button radius | 8px (tool-like) | 9999px pill (inviting) | Different modes of engagement |
| Card radius | 10px | 12px | Marketing feels softer |
| Body text size | 14px | 18px | Workstation vs arm's length reading |
| Hero text size | 48-56px Bold | 64-80px ExtraBold | Cinematic impact |
| Gradient scope | Logo + login CTA only | Hero + section accents + dividers | Marketing turns up the volume |
| Motion philosophy | Subtle, functional (250ms max) | Cinematic, scroll-triggered (800ms max) | Different energy levels |
| Shadows | Tight, structural | Soft, atmospheric | Work tool vs marketing showcase |
| Dark surfaces | Sidebar only (app is light default) | Hero sections, feature showcases, footer | Full dark sections for drama |
| Surface tokens | `neutral/100` base | `mktg-surface/light` (#FFFBF9) warmer base | Marketing warmth |
| Spacing scale | 4px base, compact | Scaled-up, generous | Dense data vs expansive messaging |

### Deprecated / Superseded

- Stitch/Amber inspiration tokens — **DEPRECATED**. Do not use.
- Journey-inline tokens (`--warm-coral`, `--sidebar-dark`) — map to canonical DS v1.3 tokens.
- Former blue `brand-primary` (#3A5DAE) — retained only as `semantic/info`. No longer a brand color.

---

*This document is the canonical Figma development reference for both Consultry products. The App DS v1.3 is authoritative for all shared tokens. The Marketing DS v1.0 is authoritative only for `mktg-*` prefixed tokens and marketing-specific component variants. When in doubt, consult the app system first.*
