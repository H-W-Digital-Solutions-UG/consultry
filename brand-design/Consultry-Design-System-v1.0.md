# Consultry Design System v1.1

## AI-Native Consultancy CRM for the DACH Market

**Status:** Revised — Branding Reconciliation
**Date:** 30 March 2026
**Product:** Consultry
**Audience:** Design, Engineering, Product
**Changelog:** v1.1 integrates the Consultry Complete Branding System, resolves contradictions from v1.0, adds QA notes throughout.

---

## 1. Design Principles

### 1.1 Vertrauenswürdig (Trustworthy)

Consultry handles sensitive business intelligence — consultant profiles, financial data, client relationships, legal documents. Every visual decision must reinforce trust. Clean lines, generous whitespace, precise typography. The interface should feel like a well-run consultancy itself: competent, discreet, reliable.

> **QA NOTE (v1.1 — Gradient vs. "No flashy gradients"):** v1.0 stated "no flashy gradients." The branding system defines a teal→blue gradient as the hero identity. **Resolution:** The gradient is permitted for the logo mark, primary CTA buttons (subtle, not full-bleed), and isolated hero moments (login screen, onboarding). It is NOT permitted as page backgrounds, card fills, or decorative stripes. This keeps the product feeling professional while the brand mark carries the visual energy. The gradient is a *brand signature*, not a UI surface treatment.

### 1.2 Informationsdichte mit Klarheit (Dense but Clear)

BD leaders, partners, and consultants work with complex, multi-dimensional data — match scores, pipeline stages, financial margins, skill taxonomies. The system must present rich information without overwhelming. Use progressive disclosure: summaries first, details on demand. Every screen should answer "what matters right now?" within 2 seconds.

### 1.3 AI-Transparent (AI as Partner, Not Black Box)

Consultry is AI-native. Every AI-generated insight — match scores, engagement briefs, signal priorities, contract risk flags — must show its reasoning. Scores always come with explanations. Recommendations always cite sources. The user must feel in control: AI recommends, humans decide.

### 1.4 DACH-Professionell (Professional for DACH)

The DACH market expects understated professionalism. Formal but warm typography. German-language-first content design (longer words, compound nouns, formal address). Respect for data privacy is not just a feature — it's a visual signal (consent badges, audit indicators, data-source attributions visible throughout).

### 1.5 Lifecycle-Durchgängig (End-to-End Continuity)

From signal detection to project delivery to knowledge capture, the UI must feel like one continuous workflow. Consistent navigation patterns, shared visual language across modules, and seamless transitions between lifecycle stages. A user moving from the Signal Feed to an Engagement Brief to a Proposal should never feel like they've switched applications.

### 1.6 Brand Voice (from Branding System)

| Attribute | Meaning |
|-----------|---------|
| **Strategic** | Language implies forward-thinking, data-driven decisions. Not reactive. |
| **Clear** | No jargon for jargon's sake. German precision in every label. |
| **Intelligent** | The system knows things — surface that knowledge confidently. |
| **Calm authority** | Never urgent or panicked. Even alerts are composed. |

**Messaging principle:** "We design narratives that drive decisions" — not "We help you tell stories." Apply this to all microcopy, empty states, onboarding text, and error messages.

---

## 2. Logo & Brand Mark

### The Consultry Mark

The Consultry logo consists of two elements:

**Logomark:** A geometric, octagonal "C" shape with an open right side and a small circle positioned at the upper right. The "C" represents Consultry as a platform, while the circle represents the human consultant — intelligence, the individual, the expert. Together they suggest "people-powered intelligence within a structured system." The geometric facets (octagonal rather than perfectly round) convey precision and engineered quality.

**Wordmark:** "Consultry" set in a bold, geometric sans-serif typeface (Sora Bold for brand/marketing contexts; Inter Bold for in-app UI). Clean, high-x-height, with even letter spacing.

**Tagline:** "das operative Betriebssystem für deine Consultancy" — set in lighter weight, below the wordmark. Used in marketing contexts, omitted in-app.

### Logo Color Modes

| Mode | Mark Treatment | Wordmark Color | Background | Usage |
|------|---------------|----------------|------------|-------|
| **Gradient (Primary)** | Teal→Blue→Purple gradient (`#3FB7A8` → `#3A5DAE` → `#9B59B6`) | `neutral-900` (`#0F172A`) | White / light surface | Hero usage: login screen, marketing site, documentation covers. |
| **Gradient on Dark** | Same gradient | `neutral-0` (`#FFFFFF`) | Dark / `#0F172A` backgrounds | App icon, dark marketing materials, splash screens. |
| **Monochrome Black** | `neutral-900` (`#0F172A`) | `neutral-900` | White / light surface | In-app sidebar, documents, email headers. Professional contexts. |
| **Monochrome White** | `neutral-0` (`#FFFFFF`) | `neutral-0` | Dark surfaces | Sidebar (dark variant), footer, dark-mode contexts. |

> **QA NOTE (v1.1 — Logo gradient direction):** The uploaded SVG logo shows a blue→purple gradient (top-left to bottom-right). The branding doc specifies teal→deep blue. The actual colored logo image uses a more blue→magenta spectrum. **Resolution:** Canonicalize the gradient as a diagonal (135°) from `#3FB7A8` (teal, top-left) through `#3A5DAE` (deep blue, center) to `#9B59B6` (soft purple, bottom-right). This matches the visual evidence from the colored logo. The gradient is only ever applied to the logomark itself — never to the wordmark.

### Logo Sizing

| Context | Format | Min Size |
|---------|--------|----------|
| **App Sidebar (collapsed)** | Logomark only (monochrome white) | 24px |
| **App Sidebar (expanded)** | Logomark (32px) + Wordmark | Wordmark 14px |
| **Login / Onboarding** | Full logo (gradient mark + wordmark + tagline) | Wordmark 20px |
| **Favicon / App Icon** | Logomark only (gradient on dark bg) | 16px |
| **Email / Documents** | Logomark (monochrome) + Wordmark (no tagline) | Wordmark 12px |
| **App Store** | Logomark gradient on `#0F172A` bg, 512px | 512px |

### Clear Space & Minimum Margins

Clear space around the logo equals the height of the circle element (the "dot") on all sides. No other elements, text, or visual noise may intrude into this zone.

### Design Language from the Mark

The mark's geometric, faceted shape should influence the broader design language: favour `radius-md` (8px) and `radius-lg` (10px) for component corners — rounded enough to feel modern, angular enough to echo the octagonal mark. Avoid fully rounded containers (except avatars/status dots/pill badges).

---

## 3. Design Tokens

### 3.1 Color System

#### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-gradient-start` | `#3FB7A8` | Teal. Start of the hero gradient. Also usable as standalone brand teal. |
| `brand-gradient-mid` | `#3A5DAE` | Deep blue. Midpoint of gradient. Usable as standalone primary blue for solid-color contexts. |
| `brand-gradient-end` | `#9B59B6` | Soft purple. End of gradient. Rarely used standalone. |
| `brand-gradient` | `linear-gradient(135deg, #3FB7A8, #3A5DAE, #9B59B6)` | The full hero gradient. Logo, primary CTA buttons, selected/active highlights. |
| `brand-primary` | `#3A5DAE` | **Solid primary.** When gradient is inappropriate (text, borders, small UI elements), use this blue. Navigation active states, link color, primary button fallback. |
| `brand-primary-light` | `#4A6DBE` | Hover states on primary elements. |
| `brand-primary-dark` | `#2A4D9E` | Active/pressed states. |
| `brand-teal` | `#3FB7A8` | Secondary brand color. Can be used for secondary highlights, chart accents, progress indicators. |
| `brand-teal-light` | `#5DC7BA` | Hover state for teal elements. |

> **QA NOTE (v1.1 — Amber accent removed):** v1.0 used amber/gold (`#D4872C`) as the accent. The branding system replaces this entirely with the teal→blue gradient identity + soft cyan (`#22D3EE`) for micro-interactions. **Resolution:** Amber is fully removed from the token system. All former amber references now map to either `brand-teal` or `interactive-cyan`. This is a breaking change from v1.0.

#### Interactive Accent

| Token | Hex | Usage |
|-------|-----|-------|
| `interactive-cyan` | `#22D3EE` | Hover states, link underlines, focus glow, micro-interaction highlights. Controlled use only — never as backgrounds or large fills. |
| `interactive-cyan-subtle` | `rgba(34, 211, 238, 0.12)` | Subtle hover backgrounds, selected row tints. |
| `interactive-cyan-glow` | `rgba(34, 211, 238, 0.25)` | Focus ring glow, loading pulse. |

> **QA NOTE (v1.1 — Cyan accessibility):** `#22D3EE` on white has a contrast ratio of ~2.3:1 — **fails WCAG AA for text.** **Resolution:** `interactive-cyan` is NEVER used for text or as a text color. It is only used for: borders, focus rings, background tints, icon fills (on dark backgrounds), and decorative elements. For clickable text (links), use `brand-primary` (`#3A5DAE`) which passes AA at 4.9:1 on white.

#### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `semantic-success` | `#16A34A` | Won deals, high match scores, on-track projects, opted-in consent. |
| `semantic-success-light` | `#E8F5ED` | Success backgrounds, badges. |
| `semantic-warning` | `#D97706` | Stale opportunities, margin erosion, approaching deadlines, consent pending. |
| `semantic-warning-light` | `#FEF3E0` | Warning backgrounds. |
| `semantic-danger` | `#DC2626` | Lost deals, blocked consent, contract risk flags, budget overruns. |
| `semantic-danger-light` | `#FEE2E2` | Error backgrounds. |
| `semantic-info` | `#3A5DAE` | Informational: new signals, AI suggestions. Maps to `brand-primary` for visual cohesion. |
| `semantic-info-light` | `#EEF2FF` | Info backgrounds, notification badges. |

> **QA NOTE (v1.1 — info = brand-primary):** Merging `semantic-info` with `brand-primary` creates tight visual cohesion but risks ambiguity: is a blue badge "informational" or "brand-active"? **Resolution:** Acceptable. Context (badge label text + icon) disambiguates. Blue is the dominant brand hue, so informational states should feel "native" rather than foreign.

#### Neutral Palette (from Branding System)

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-900` | `#0F172A` | Primary text. Midnight navy from branding system (replaces v1.0's `#1A1A1A`). |
| `neutral-800` | `#1E293B` | Headings, strong emphasis. |
| `neutral-700` | `#334155` | Secondary text, labels. |
| `neutral-600` | `#64748B` | Placeholder text, captions, metadata. Maps to branding "Cool Gray." |
| `neutral-500` | `#94A3B8` | Disabled text, subtle dividers. |
| `neutral-400` | `#AAB4C3` | Icons (inactive), soft slate. Maps to branding "Soft Slate." |
| `neutral-300` | `#CBD5E1` | Borders, dividers. |
| `neutral-200` | `#E5E7EB` | Table row alternation, card borders. Maps to branding "Light Gray." |
| `neutral-100` | `#F1F5F9` | Page backgrounds. |
| `neutral-50` | `#F8FAFC` | Elevated surface backgrounds. Maps to branding "Off White." |
| `neutral-0` | `#FFFFFF` | Card surfaces, input fields, modals. |

> **QA NOTE (v1.1 — Neutral palette shift):** v1.0 used pure gray neutrals. The branding system uses cool blue-gray (Tailwind Slate scale). **Resolution:** Adopt the branding system's cool-gray palette entirely. This creates better harmony with the blue-dominant brand colors. Pure grays looked disconnected.

#### AI-Specific Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `ai-surface` | `#F0F7FF` | Cool-tinted off-white background for AI-generated content. Distinguishes AI outputs from user data while staying in the blue family. |
| `ai-border` | `#BFDBFE` | Border around AI-generated cards, briefs, suggestions. Light blue. |
| `ai-accent` | `#3A5DAE` | AI attribution text, "Generiert von Consultry KI" labels. Uses brand-primary. |
| `ai-sparkle` | `#22D3EE` | AI "intelligence" indicator (sparkle icon, confidence bar glow). Interactive cyan. |

> **QA NOTE (v1.1 — AI surface redesign):** v1.0 used warm beige (`#F0EDE8`) for AI surfaces — this made sense with amber accent but clashes with the new cool blue palette. **Resolution:** Switched to a cool blue-tinted white that feels cohesive. AI content now reads as "enriched system content" rather than "warm foreign element."

#### Score & Match Colors (Gradient Scale)

| Token | Hex | Score Range | Usage |
|-------|-----|-------------|-------|
| `score-excellent` | `#16A34A` | 80–100 | Excellent match, healthy project. |
| `score-good` | `#3FB7A8` | 60–79 | Good fit, on track. Uses brand teal for cohesion. |
| `score-moderate` | `#D97706` | 40–59 | Moderate match, needs attention. |
| `score-weak` | `#EA580C` | 20–39 | Weak match, at risk. |
| `score-poor` | `#DC2626` | 0–19 | Poor fit, critical. |

> **QA NOTE (v1.1 — score-good = brand-teal):** Using brand teal for the 60-79 range creates brand reinforcement in the most common score zone (most matches land here). This is intentional — the "good" state should feel native and positive, not merely passing.

---

### 3.2 Typography

**Primary Font:** Inter — clean, highly legible at small sizes, excellent number rendering (critical for financial data), strong multi-language support including German umlauts and Swiss-French characters. Used for all body text, labels, data, and in-app headings.

**Display/Brand Font:** Sora — slightly more personality than Inter. Used for marketing headings, landing pages, onboarding hero text, and the wordmark in brand/marketing contexts. NOT used inside the app for functional headings.

> **QA NOTE (v1.1 — Sora scope):** The branding system lists Sora as "optional / editorial." **Resolution:** Sora is strictly marketing/brand. In-app, Inter handles everything. Mixing two sans-serif fonts in the app UI would create subtle visual inconsistency for minimal gain. Sora shines in large display sizes (32px+) where its geometric personality is visible.

**Monospace Font:** JetBrains Mono — for scores, IDs, financial figures, code in knowledge assets.

| Token | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------|--------|------|-------------|----------------|-------|
| `display-hero` | Sora | 700 (Bold) | 48–56px | 1.1 | -0.02em | Marketing hero text, login screen headline. **Not in-app.** |
| `display-lg` | Sora | 600 (SemiBold) | 32–40px | 1.2 | -0.02em | Onboarding headings, marketing subheads. **Not in-app.** |
| `heading-xxl` | Inter | 700 (Bold) | 32px / 2rem | 40px / 1.25 | -0.02em | Page titles (Dashboard, Pipeline, Cockpit). |
| `heading-xl` | Inter | 700 (Bold) | 24px / 1.5rem | 32px / 1.33 | -0.01em | Section headers (Module titles). |
| `heading-lg` | Inter | 600 (SemiBold) | 20px / 1.25rem | 28px / 1.4 | -0.01em | Card headers, dialog titles. |
| `heading-md` | Inter | 600 (SemiBold) | 16px / 1rem | 24px / 1.5 | 0 | Sub-section headers, table group headers. |
| `heading-sm` | Inter | 600 (SemiBold) | 14px / 0.875rem | 20px / 1.43 | 0 | Small card headers, sidebar section titles. |
| `body-lg` | Inter | 400 (Regular) | 16px / 1rem | 24px / 1.5 | 0 | Primary body text, descriptions. |
| `body-md` | Inter | 400 (Regular) | 14px / 0.875rem | 20px / 1.43 | 0 | Default body text, table cells, form labels. |
| `body-sm` | Inter | 400 (Regular) | 12px / 0.75rem | 16px / 1.33 | 0.01em | Captions, timestamps, metadata, badges. |
| `body-xs` | Inter | 400 (Regular) | 11px / 0.6875rem | 14px / 1.27 | 0.02em | Fine print, legal references, tooltip text. |
| `label` | Inter | 500 (Medium) | 12px / 0.75rem | 16px / 1.33 | 0.04em | Form labels, data labels (uppercased). |
| `mono-md` | JetBrains Mono | 400 | 14px / 0.875rem | 20px / 1.43 | 0 | Match scores, IDs, financial figures. |
| `mono-sm` | JetBrains Mono | 400 | 12px / 0.75rem | 16px / 1.33 | 0 | Small scores, code, metadata IDs. |

**German Typography Notes:**
- Compound nouns (e.g., "Deckungsbeitragsrechnung", "Ausschreibungsantwort") require generous horizontal space. Never truncate German compound nouns mid-word — use ellipsis only at morpheme boundaries or wrap fully.
- Number formatting: German locale (1.234,56 instead of 1,234.56). Swiss locale supported (1'234.56).
- Date formatting: DD.MM.YYYY (German standard). ISO 8601 for technical contexts.

---

### 3.3 Spacing Scale

Based on a 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0px | No spacing. |
| `space-1` | 4px | Tight: icon-to-label gaps, badge padding. |
| `space-2` | 8px | Compact: intra-component spacing. |
| `space-3` | 12px | Default: form field gaps, list item padding. |
| `space-4` | 16px | Standard: card internal padding, section gaps within a card. |
| `space-5` | 20px | Comfortable: between related card groups. |
| `space-6` | 24px | Section: between distinct content sections on a page. |
| `space-8` | 32px | Region: between major page regions. |
| `space-10` | 40px | Large: page-level top/bottom margins. |
| `space-12` | 48px | Extra large: between major page sections. |
| `space-16` | 64px | Maximum: hero/splash spacing (onboarding screens only). |

**Component Padding Defaults:**
- Cards: `space-4` (16px) all sides.
- Buttons: `space-2` (8px) vertical, `space-4` (16px) horizontal.
- Inputs: `space-2` (8px) vertical, `space-3` (12px) horizontal.
- Table cells: `space-2` (8px) vertical, `space-3` (12px) horizontal.
- Modal: `space-6` (24px) all sides.

---

### 3.4 Border & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | No rounding (dense data tables). |
| `radius-sm` | 4px | Badges, tags, small chips. |
| `radius-md` | 8px | Buttons, inputs, dropdowns, tooltips. |
| `radius-lg` | 10px | Cards, modals, popovers. |
| `radius-xl` | 14px | Floating panels, feature highlights. |
| `radius-full` | 9999px | Avatars, status dots, pill badges. |
| `border-default` | 1px solid `neutral-200` (`#E5E7EB`) | Card borders, input borders, table borders. |
| `border-subtle` | 1px solid `neutral-100` (`#F1F5F9`) | Dividers within cards, section separators. |
| `border-strong` | 1px solid `neutral-300` (`#CBD5E1`) | Emphasized boundaries. |
| `border-focus` | 2px solid `brand-primary` | Focus ring for keyboard navigation. |

> **QA NOTE (v1.1 — Radius increased):** v1.0 had `radius-md: 6px`, `radius-lg: 8px`. Branding system specifies 6–10px. **Resolution:** Bumped to 8px / 10px. This matches the Stripe/Linear aesthetic inspiration and feels more modern while still echoing the octagonal mark. The v1.0 4px→8px range was too tight.

> **QA NOTE (v1.1 — Focus ring color):** v1.0 used amber for focus. Now uses `brand-primary` (blue). The branding system's `interactive-cyan` was considered but fails contrast requirements for focus indicators. Blue is the safer, more accessible choice.

---

### 3.5 Elevation & Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | none | Flat elements, elements resting on a surface. |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)` | Cards resting on the page. Very subtle — per branding "soft shadows." |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` | Dropdowns, popovers, floating action menus. Blur 12px per branding. |
| `shadow-lg` | `0 8px 20px rgba(0,0,0,0.08)` | Modals, dialogs, notification toasts. Blur 20px per branding. |
| `shadow-xl` | `0 12px 32px rgba(0,0,0,0.12)` | Command palettes, overlay panels. |
| `shadow-focus` | `0 0 0 3px rgba(58, 93, 174, 0.25)` | Focus ring shadow (brand-primary blue glow). |
| `shadow-cyan-glow` | `0 0 0 3px rgba(34, 211, 238, 0.20)` | Input focus glow (teal tint). Used on AI prompt fields. |

> **QA NOTE (v1.1 — Shadow softness):** Branding system says "very light (blur 12–20px)." v1.0 shadows were slightly heavier. **Resolution:** Reduced opacity across the board. Consultry cards should barely lift off the page — the hierarchy comes from spacing and borders, not shadows. Aligned with Stripe/Linear inspiration.

---

### 3.6 Motion & Animation

| Token | Value | Usage |
|-------|-------|-------|
| `duration-instant` | 100ms | Micro-interactions: button press, checkbox toggle, badge appear. |
| `duration-fast` | 150ms | Hover states, tooltip show/hide, tab switches. Branding: 150–250ms range. |
| `duration-normal` | 250ms | Panel open/close, card expand/collapse, dropdown reveal. |
| `duration-slow` | 400ms | Modal enter/exit, page transitions, data loading shimmer. |
| `easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing. |
| `easing-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the viewport. |
| `easing-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving. |

**Motion Principles:**
- Prefer opacity + transform transitions over layout shifts.
- AI-generated content uses a subtle "reveal" animation (250ms stagger per paragraph).
- Score bars animate from 0 to value (400ms, easing-enter) when first rendered.
- Never animate more than 3 elements simultaneously — sequential stagger preferred.
- **Gradient hover (from branding):** Primary gradient buttons shift hue slightly on hover (brightness +8%). Subtle, not flashy. `duration-fast`.
- **Logo pulse (optional):** For loading states, the logomark can have a gentle opacity pulse (0.6→1.0, 1.5s cycle). Do NOT use on every loading spinner — reserved for full-page loads and login.
- Motion is SUBTLE, not flashy — per branding system directive.

---

## 4. Iconography

### Icon Style

Use **Lucide Icons** (open-source, MIT licensed) as the primary icon set. Clean, consistent 24×24 stroke-based icons aligned with Consultry's professional aesthetic.

### Icon Sizes

| Token | Size | Stroke | Usage |
|-------|------|--------|-------|
| `icon-xs` | 14px | 1.5px | Inline with `body-sm`, badge icons. |
| `icon-sm` | 16px | 1.5px | Inline with `body-md`, table row icons, button icons (sm). |
| `icon-md` | 20px | 2px | Default: navigation, card headers, button icons (md). |
| `icon-lg` | 24px | 2px | Section headers, empty states, prominent actions. |
| `icon-xl` | 32px | 2px | Feature illustrations, onboarding, large empty states. |

### Custom Icon Tokens (Consultry-Specific)

| Concept | Lucide Icon | Token |
|---------|-------------|-------|
| Signal / Alert | `Zap` | `icon-signal` |
| Match Score | `Target` | `icon-match` |
| Consultant | `UserCircle` | `icon-consultant` |
| Client / Account | `Building2` | `icon-client` |
| Opportunity | `TrendingUp` | `icon-opportunity` |
| Engagement Brief | `FileText` | `icon-brief` |
| Proposal / Offer | `FileCheck` | `icon-proposal` |
| Contract | `FileSignature` | `icon-contract` |
| Project | `FolderKanban` | `icon-project` |
| Knowledge Asset | `BookOpen` | `icon-knowledge` |
| Skill / Competency | `Puzzle` | `icon-skill` |
| Financial / Margin | `PiggyBank` | `icon-financial` |
| Event | `Calendar` | `icon-event` |
| Outreach / Campaign | `Send` | `icon-outreach` |
| DSGVO / Consent | `ShieldCheck` | `icon-consent` |
| AI / Intelligence | `Sparkles` | `icon-ai` |
| Discovery Run | `Radar` | `icon-discovery` |
| Risk / Warning | `AlertTriangle` | `icon-risk` |
| Pipeline | `GitBranch` | `icon-pipeline` |

---

## 5. Core Components

### 5.1 Button

#### Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| **Primary (Gradient)** | `brand-gradient` (teal→blue→purple) | `neutral-0` | none | Main CTAs: "Angebot erstellen", "Discovery starten", "Jetzt matchen". One per section max. |
| **Primary (Solid)** | `brand-primary` (`#3A5DAE`) | `neutral-0` | none | Fallback primary when gradient is inappropriate (e.g., inside tables, dense forms). |
| **Secondary** | `neutral-0` | `neutral-700` | `border-default` | Supporting actions: "Abbrechen", "Filter anwenden", "Exportieren". |
| **Ghost** | transparent | `brand-primary` | none | Tertiary actions: "Alle anzeigen", inline links, toolbar actions. |
| **Danger** | `semantic-danger` | `neutral-0` | none | Destructive actions: "Löschen", "Archivieren", "Consent widerrufen". Requires confirmation dialog. |

> **QA NOTE (v1.1 — Gradient button accessibility):** The gradient spans from teal (#3FB7A8) to blue (#3A5DAE) to purple (#9B59B6). White text on teal has a contrast ratio of ~3.2:1 — **fails AA for normal text but passes for large text (3:1).** White on deep blue passes at 5.8:1. White on purple is ~4.1:1 — borderline. **Resolution:** The gradient button must be minimum `md` size (40px, 14px font = not "large text" per WCAG). To ensure compliance: the gradient should be weighted toward the blue center (teal and purple are at the far edges, occupying <25% of the button surface). Test each gradient button with a contrast tool. Alternatively, consider making the gradient darker overall. **This requires visual testing with real button widths before shipping.**

#### Sizes

| Size | Height | Font | Padding | Icon Size | Usage |
|------|--------|------|---------|-----------|-------|
| `sm` | 32px | `body-sm` (12px) | 6px 12px | 14px | Table row actions, inline. **Use Solid primary only, not gradient.** |
| `md` | 40px | `body-md` (14px) | 8px 16px | 16px | Default. Forms, cards, dialogs. |
| `lg` | 48px | `body-lg` (16px) | 12px 24px | 20px | Page-level primary actions, hero CTAs. Gradient shines here. |

#### States

| State | Visual Change | Behavior |
|-------|--------------|----------|
| Default | As defined per variant. | — |
| Hover | Gradient: brightness +8%. Solid: uses `*-light` token. | `duration-fast`. Subtle gradient shift per branding. |
| Active/Pressed | Brightness -5% from default. | `duration-instant`. |
| Focus | `border-focus` ring (2px `brand-primary`) + `shadow-focus`. | Keyboard-triggered. |
| Disabled | Opacity 0.4. No pointer events. | `cursor: not-allowed`. |
| Loading | Text replaced by spinner (16px). Width preserved. | Non-interactive during loading. |

#### Accessibility

- **Role:** `button` (native `<button>` element preferred).
- **Keyboard:** `Tab` to focus, `Enter` or `Space` to activate.
- **Screen reader:** Label announced. Loading state via `aria-busy="true"`.
- **Contrast:** All variants must meet WCAG AA (4.5:1 for text). See QA note on gradient.

---

### 5.2 Input / Text Field

#### Variants

| Variant | Usage |
|---------|-------|
| **Default** | Standard text input for forms. Rounded corners (`radius-md`). |
| **Search** | Prefixed with search icon. Used in signal feed filters, consultant search, knowledge Q/A. |
| **AI Prompt** | `ai-surface` background, sparkle icon prefix, `shadow-cyan-glow` on focus. "Beschreibe deine Anforderung..." |
| **Numeric** | Right-aligned text, monospace font. For financial figures, scores, quantities. |
| **Textarea** | Multi-line. For descriptions, notes, brief content, outreach message editing. |

#### States

| State | Border | Background | Focus Effect |
|-------|--------|-----------|-------------|
| Default | `neutral-200` | `neutral-0` | — |
| Hover | `neutral-300` | `neutral-0` | — |
| Focus | `brand-primary` (2px) | `neutral-0` | `shadow-focus` (blue glow). AI Prompt variant: `shadow-cyan-glow`. |
| Error | `semantic-danger` (2px) | `semantic-danger-light` | — |
| Disabled | `neutral-200` | `neutral-100` | — |

---

### 5.3 Card

#### Variants

| Variant | Visual | Usage |
|---------|--------|-------|
| **Default** | `neutral-0` bg, `border-default`, `shadow-sm`, `radius-lg`. | Consultant profile, client account, opportunity. |
| **AI-Generated** | `ai-surface` bg, `ai-border` border, `radius-lg`. Sparkles icon + "KI-generiert" label. | Engagement briefs, AI recommendations, match explanations. |
| **Metric** | `neutral-0` bg, no border, `shadow-sm`. Large number prominent. | Dashboard KPI cards: revenue, utilization, pipeline value. |
| **Signal** | Left border (4px) colored by signal type. `neutral-0` bg. | Signal feed items: leadership changes, hiring signals, tenders. |
| **Compact** | `neutral-0` bg, `border-subtle`, no shadow. Reduced padding (`space-3`). | Dense list items: search results, pipeline items. |
| **Selected** | `brand-primary` left border (3px) + `interactive-cyan-subtle` bg. | Multi-select: team composition, skill selection. |

#### Card Anatomy

```
┌─────────────────────────────────────────┐
│  [Icon/Avatar]  Title          [Badge]  │  ← Header: `space-4` padding
│                 Subtitle                │
├─────────────────────────────────────────┤  ← Divider: `border-subtle`
│                                         │
│  Content area                           │  ← Body: `space-4` padding
│  (Text, scores, tags, mini-charts)      │
│                                         │
├─────────────────────────────────────────┤  ← Divider (optional)
│  [Action Button]       [Secondary Btn]  │  ← Footer: `space-3` padding
└─────────────────────────────────────────┘
```

Shadow: `shadow-sm` (very light, blur 12px per branding). Cards should barely lift off `neutral-100` page background. Border: `neutral-200`. Clean like Stripe.

---

### 5.4 Badge / Tag

#### Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| **Status — Success** | `semantic-success-light` | `semantic-success` | none | Won deal, opted-in, on-track. |
| **Status — Warning** | `semantic-warning-light` | `semantic-warning` | none | Pending consent, at-risk, stale. |
| **Status — Danger** | `semantic-danger-light` | `semantic-danger` | none | Lost deal, suppressed, overdue. |
| **Status — Info** | `semantic-info-light` | `brand-primary` | none | New signal, enrichment update. |
| **Status — Neutral** | `neutral-200` | `neutral-700` | none | Default/unknown, inactive. |
| **Skill Tag** | `neutral-100` | `neutral-800` | `neutral-300` 1px | Normalized skill tags. |
| **Skill Tag — Matched** | `interactive-cyan-subtle` | `brand-primary` | `brand-teal` 1px | Skills matching opportunity requirements. |
| **AI Badge** | `ai-surface` | `ai-accent` | `ai-border` 1px | "KI-generiert", "Confidence: 87%." |
| **Score Badge** | Colored by score range | `neutral-0` | none | Match scores. Uses `score-*` tokens. Mono font. |
| **DSGVO Consent** | Colored by state | Per state | none | UNKNOWN/PENDING/OPTED-IN/SUPPRESSED. |

#### Sizes

| Size | Height | Font | Padding | Usage |
|------|--------|------|---------|-------|
| `sm` | 20px | `body-xs` (11px) | 2px 6px | Inline in tables. |
| `md` | 24px | `body-sm` (12px) | 3px 8px | Default. Cards, profile views. |
| `lg` | 28px | `body-md` (14px) | 4px 10px | Prominent: page-level status. |

---

### 5.5 Data Table

#### Structure

| Element | Token | Notes |
|---------|-------|-------|
| Header row | `neutral-50` bg, `heading-sm` font, `neutral-600` text | Sticky on scroll. |
| Body row | `neutral-0` bg | `body-md`. |
| Alternating rows | `neutral-50` bg | Optional. Default for financial tables. |
| Row hover | `interactive-cyan-subtle` bg | `duration-fast`. |
| Row selected | `brand-primary` 5% bg + left border 3px `brand-primary` | Multi-select. |
| Borders | `border-subtle` between rows | No vertical borders (clean). |

#### Column Types

| Type | Alignment | Font | Notes |
|------|-----------|------|-------|
| Text | Left | `body-md` | Truncate with ellipsis. |
| Number / Currency | Right | `mono-md` | German: 1.234,56 €. |
| Score | Center | `mono-md` inside Score Badge | Color-coded by range. |
| Status | Center | Badge component | Semantic variants. |
| Date | Left | `body-md` | DD.MM.YYYY. |
| Actions | Right | Icon buttons (`sm`) | Max 3 visible → overflow "…" menu. |

---

### 5.6 Navigation

#### Sidebar (Primary Navigation)

| Property | Value |
|----------|-------|
| Width (expanded) | 240px |
| Width (collapsed) | 64px |
| Background | `neutral-900` (`#0F172A` — midnight navy from branding) |
| Text | `neutral-0` at 70% opacity (inactive), 100% (active) |
| Active indicator | Left border 3px `brand-teal` + bg `rgba(63,183,168,0.12)` |
| Hover | bg `rgba(255,255,255,0.06)` |
| Icons | `icon-md` (20px), `neutral-0` |
| Sections | Grouped by platform layer: Cockpit, Foundation, Growth, Deal, Delivery, System |
| Logo | Monochrome white mark. Expanded: mark + "Consultry" wordmark. Collapsed: mark only. |
| Collapse toggle | Bottom of sidebar, chevron icon. |

> **QA NOTE (v1.1 — Sidebar color):** v1.0 used `brand-primary` (#1B2A4A, old navy). Branding system uses midnight navy (#0F172A). **Resolution:** Adopt `#0F172A`. It's darker, more modern, and creates stronger contrast with the page content. Active state uses teal rather than amber — this is a stronger choice because the teal left-border on midnight navy is highly visible and brand-cohesive.

#### Top Bar

| Property | Value |
|----------|-------|
| Height | 56px |
| Background | `neutral-0` |
| Border | Bottom `border-default` |
| Content (left) | Breadcrumb navigation (`body-sm`, `neutral-600`, separator `/`) |
| Content (center) | Global search (Input `search` variant, 480px max width) |
| Content (right) | Notifications bell (with count badge), User avatar + dropdown |

---

### 5.7 Score Display

| Variant | Visual | Usage |
|---------|--------|-------|
| **Badge** | Compact score inside colored pill. `mono-sm`. | Tables, lists, cards. "87/100". |
| **Ring** | Circular progress ring (48px/64px). Score centered. Color by range. | Card headers, dashboard KPIs. |
| **Bar** | Horizontal bar, filled proportionally. Color by range. | Skill proficiency, match dimensions. |
| **Breakdown** | Stacked bars with labels. Each dimension scored. | Match explanation view. |

---

### 5.8 Modal / Dialog

| Property | Value |
|----------|-------|
| Overlay | `neutral-900` at 50% opacity. |
| Container | `neutral-0` bg, `radius-lg` (10px), `shadow-lg`. Max-width 560px (md) / 800px (lg). |
| Header | `heading-lg` title + X close button. `space-6` padding. |
| Footer | Right-aligned: Secondary (left), Primary (right). `border-subtle` top. |
| Enter | Fade + scale (0.95→1), `duration-normal`, `easing-enter`. |
| Exit | Fade + scale down, `duration-fast`, `easing-exit`. |

---

### 5.9 Toast / Notification

| Property | Value |
|----------|-------|
| Position | Top-right, 16px from edge. Stack with 8px gap. |
| Container | `neutral-0` bg, `shadow-md`, `radius-lg`. Left border 4px by type. Max-width 400px. |
| Types | Success / Warning / Error / Info — using `semantic-*` tokens. |
| Auto-dismiss | Success/Info: 5s. Warning: 8s. Error: manual only. |

---

## 6. Patterns

### 6.1 Dashboard / Cockpit Layout

```
┌──────────────────────────────────────────────────────┐
│  KPI Strip (4 Metric Cards in a row)                  │
│  [Umsatz MTD] [Auslastung] [Pipeline-Wert] [Signale] │
├──────────────────────┬───────────────────────────────┤
│  Primary Content     │  Activity Feed / Alerts       │
│  (Chart, Table,      │  (Signal cards, stacked)      │
│   Pipeline view)     │                               │
│  — 2/3 width —       │  — 1/3 width —                │
├──────────────────────┴───────────────────────────────┤
│  Secondary Content (Full width table or list)         │
└──────────────────────────────────────────────────────┘
```

**KPI Cards:** Metric card variant. Large number (`heading-xxl`, `mono-md`), label below (`body-sm`), trend indicator (up/down + %, colored green/red). Sparkline optional. Clean like Linear dashboards — lots of whitespace, clear hierarchy, no visual clutter.

---

### 6.2 Signal Feed Pattern

```
┌─ Filter Bar ─────────────────────────────────────────┐
│  [Signal-Typ ▾] [Branche ▾] [Score ≥ ___] [Zeitraum] │
├──────────────────────────────────────────────────────┤
│ ┌─ Signal Card (left-border: brand-primary) ────────┐ │
│ │  ⚡ Leadership-Wechsel · RetailCorp AG             │ │
│ │  Neuer CTO mit SAP-Hintergrund           [87/100] │ │
│ │  vor 2 Stunden · Dealfront                         │ │
│ │  [Brief generieren]  [Archivieren]                 │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌─ Signal Card (left-border: semantic-warning) ─────┐ │
│ │  📋 Ausschreibung · Bundesamt für Sicherheit       │ │
│ │  NIS2-Readiness Assessment Frist: 15.04.2026 [72] │ │
│ │  vor 5 Stunden · TED                              │ │
│ │  [Details & Matching]  [Merken]                    │ │
│ └────────────────────────────────────────────────────┘ │
```

---

### 6.3 Matching & Team Composition Pattern

```
┌─ Opportunity Context ────────────────────────────────┐
│  RetailCorp AG · SAP S/4HANA Migration               │
│  Gefordert: SAP-Migration, Change Mgmt, Retail       │
│  Timeline: Mai–Nov 2026 · Budget: ~500K              │
├──────────────────────────────────────────────────────┤
│ ┌─ Match Result Card (Selected) ────────────────────┐ │
│ │  [Avatar] Markus S.  Senior SAP Consultant  [94]  │ │
│ │  ■■■■■■■■■■ Skills: 96  ■■■■■■■■░░ Verfügb: 82   │ │
│ │  ■■■■■■■■■░ Branche: 91  ■■■■■■■■■■ Team: 95     │ │
│ │  Frei ab: KW 18 · Tagessatz: €1.450 · DB1: 32%   │ │
│ │  ✓ 2x erfolgreich mit Lisa T.                     │ │
│ │  [Zum Team hinzufügen ✓]                          │ │
│ └────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────┤
│  Team: 3 Berater · Ø Score: 88 · DB1: 28%           │
│  [Team bestätigen]  [Variante: Premium-Team]         │
└──────────────────────────────────────────────────────┘
```

Score bars in the 60–79 range render in `brand-teal` — reinforcing the brand in the most common score zone.

---

### 6.4 AI-Generated Content Pattern

```
┌─ AI Content Card (ai-surface bg: #F0F7FF) ──────────┐
│  ✨ KI-generiert · Confidence: 87% · 30.03.2026      │
├──────────────────────────────────────────────────────┤
│                                                      │
│  [Structured content with source annotations]        │
│                                                      │
│  ─ Quellen ──────────────────────────────────────    │
│  ¹ North Data · Handelsregister · 12.01.2026         │
│  ² Dealfront · Unternehmensmonitor · 28.03.2026      │
│                                                      │
├──────────────────────────────────────────────────────┤
│  [✏️ Bearbeiten]  [📄 Als PDF]  [🔄 Neu generieren]   │
└──────────────────────────────────────────────────────┘
```

**Key rules:**
- Always use `ai-surface` (cool blue-white) background.
- Always show confidence score as AI Badge.
- Always attribute sources with numbered footnotes.
- Always provide "Bearbeiten" action — AI content is a starting point.
- Always show generation timestamp.

---

### 6.5 DSGVO Consent Indicator Pattern

| State | Badge | Visual | Tooltip |
|-------|-------|--------|---------|
| UNKNOWN | `Unbekannt` | Neutral badge + shield | "Kein Consent. Outreach blockiert." |
| OPT-IN PENDING | `Ausstehend` | Warning badge + clock | "Double-Opt-In gesendet am DD.MM.YYYY." |
| OPTED-IN | `Eingewilligt` | Success badge + check | "Consent erteilt am DD.MM.YYYY." |
| SUPPRESSED | `Unterdrückt` | Danger badge + ban | "Bounce/Widerruf am DD.MM.YYYY." |

---

### 6.6 Form Layout Pattern

- Two-column on desktop (>1024px), single column on tablet/mobile.
- Section labels: `label` token (12px, uppercased, `neutral-600`).
- Required: `*` + `aria-required`.
- Inline validation on blur.
- Rounded inputs per branding (`radius-md`: 8px).
- Focus: teal glow (low opacity) per branding system.

---

### 6.7 Empty State Pattern

- Centered, max-width 400px.
- Lucide icon `icon-xl` (32px), `neutral-400`.
- Title: `heading-md`, `neutral-800`.
- Description: `body-md`, `neutral-600`. Max 2 lines.
- CTA: Primary button (gradient for hero empty states, solid for module-level).

---

## 7. Layout & Grid

### Breakpoints

| Token | Width | Columns | Usage |
|-------|-------|---------|-------|
| `breakpoint-sm` | 640px | 4 | Mobile (limited — desktop-first). |
| `breakpoint-md` | 768px | 8 | Tablet portrait. |
| `breakpoint-lg` | 1024px | 12 | Tablet landscape. |
| `breakpoint-xl` | 1280px | 12 | Standard desktop (primary target). |
| `breakpoint-2xl` | 1536px | 12 | Wide monitors. |

### Grid

| Property | Value |
|----------|-------|
| Columns | 12 (at `breakpoint-lg`+) |
| Gutter | 24px (`space-6`) |
| Margin | 24px at lg, 32px at xl |
| Max width | 1440px (centered) |

### Key UI Principles (from Branding System)

- **Lots of whitespace.** When in doubt, add more space, not more content.
- **Clear hierarchy.** One primary action per view. Progressive disclosure for details.
- **No visual clutter.** If it doesn't serve the current task, hide it.
- **Motion is subtle.** No bouncing, no spinning, no parallax. Opacity + transform only.
- **Dashboard feel:** Clean like Stripe, Linear. Data-rich but never crowded.

---

## 8. Accessibility

### Standards

WCAG 2.1 AA compliance minimum. Required for DACH enterprise (BAIT/DORA, public sector).

### Color Contrast

- All text: 4.5:1 minimum against background.
- Large text (18px+ / 14px+ bold): 3:1 minimum.
- Score badges: white on color must meet 4.5:1.
- **Gradient buttons:** verify each rendered gradient meets AA. Blue zone is safe; teal/purple edges require testing.
- `interactive-cyan` (`#22D3EE`): NEVER used as text color (fails AA on white). Decorative/border only.

### Keyboard Navigation

- All interactive elements reachable via `Tab`.
- Logical tab order: left→right, top→bottom.
- Arrow keys for complex components (tables, dropdowns, tabs).
- `Escape` closes modals, dropdowns, popovers.
- Skip-to-content link on every page.

### Screen Reader Support

- Semantic HTML5 (`<nav>`, `<main>`, `<aside>`, `<section>`).
- ARIA landmarks for all regions.
- `aria-live` for dynamic content (signal feed, toasts, scores).
- Scores announced as text: "Match-Score: 87 von 100, ausgezeichnet."
- AI sections: `aria-label="KI-generierter Inhalt"`.

### Internationalization

- Primary: `de-DE`. Supported: `de-AT`, `de-CH`, `en-US`, `fr-CH`.
- RTL: not required.
- Number/date formatting per locale.
- All UI strings externalized. German is default.

---

## 9. Dark Mode

The colored logo (blue→purple gradient on dark background) and the branding system's midnight navy (#0F172A) establish a strong dark-mode foundation. Token remapping:

| Light Token | Dark Value |
|------------|------------|
| `neutral-0` (surfaces) | `#1E293B` |
| `neutral-50` (elevated) | `#0F172A` |
| `neutral-100` (page bg) | `#0B1120` |
| `neutral-900` (text) | `#E2E8F0` |
| `brand-primary` | Same `#3A5DAE` (works on dark) |
| `brand-gradient` | Same gradient (designed for dark — see logo) |
| `brand-teal` | `#5DC7BA` (lightened for dark bg contrast) |
| `interactive-cyan` | Same `#22D3EE` (excellent on dark) |
| `ai-surface` | `#162032` |
| `ai-border` | `#1E3A5F` |
| Semantic colors | Same hues, lightened 10–15% for dark bg readability. |

Dark mode is not Phase 1 scope. Use tokens exclusively — never hardcode hex values.

---

## 10. QA Reconciliation Summary

This section documents all contradictions found between the v1.0 design system and the Consultry Complete Branding System, and how each was resolved.

| # | Contradiction | v1.0 (Old) | Branding System (New) | Resolution |
|---|--------------|-----------|----------------------|------------|
| 1 | **Brand colors** | Navy #1B2A4A + Amber #D4872C | Teal→Blue gradient + Cyan accent | Adopted branding. Amber fully removed. Gradient is hero identity; blue solid is fallback. |
| 2 | **Neutral palette** | Pure gray scale (#1A1A1A → #FFFFFF) | Cool blue-gray / Slate scale (#0F172A → #F8FAFC) | Adopted branding. Cool grays harmonize with blue brand. |
| 3 | **Primary text** | #1A1A1A (neutral black) | #0F172A (midnight navy) | Adopted branding. Navy text is subtler and more cohesive. |
| 4 | **Accent color** | Amber #D4872C | Soft Cyan #22D3EE | Adopted branding. Cyan for micro-interactions only. NEVER as text (fails AA). |
| 5 | **AI surfaces** | Warm beige #F0EDE8 | — (not specified) | Redesigned to cool blue-white #F0F7FF to match new palette. |
| 6 | **Typography** | Inter only (+ JetBrains Mono) | Inter + Sora | Added Sora for display/marketing ONLY. Inter stays primary in-app. |
| 7 | **Border radius** | 4px sm / 6px md / 8px lg | "6–10px" | Adjusted to 4px sm / 8px md / 10px lg. More rounded per branding. |
| 8 | **Shadows** | Moderate opacity | "Very light, blur 12–20px" | Reduced opacity across the board. Barely-there lift. |
| 9 | **Button primary** | Solid navy | "Gradient (teal→blue)" | Gradient for hero CTAs. Solid blue as fallback for dense contexts. |
| 10 | **Focus ring** | Amber glow | — (not specified) | Changed to blue (brand-primary). Cyan fails AA for focus indicators. |
| 11 | **Sidebar bg** | #1B2A4A (old navy) | #0F172A (midnight navy) | Adopted branding. Darker, more contrast. |
| 12 | **Active nav indicator** | Amber left border | — (not specified) | Changed to teal left border. Teal on midnight navy is highly visible. |
| 13 | **"No flashy gradients" principle** | v1.0 principle 1.1 | Gradient is the hero identity | Reconciled: gradient is brand signature for logo + CTAs, not a surface treatment. |
| 14 | **Gradient accessibility** | N/A | Teal end fails AA for white text | Flagged. Gradient must be blue-weighted on buttons. Requires visual testing. |
| 15 | **Dashboard inspiration** | Not specified | "Clean like Stripe, Linear" | Added explicit UI principles section. Whitespace, hierarchy, no clutter. |
| 16 | **Logo wordmark font** | Inter Bold | Sora (implied by branding) | Sora for brand/marketing wordmark. Inter for in-app. |
| 17 | **Score "good" range** | Generic green #5A9E3E | — | Changed to brand-teal #3FB7A8. Brand reinforcement in common score range. |

### Open Questions (Require Design Review)

1. **Gradient button contrast at small sizes:** Does the teal edge of the gradient maintain 4.5:1 against white text at 14px? Requires rendered pixel testing across all target browsers.

2. **Sora font loading:** Sora is only used for marketing/onboarding display text. Is the added font download (~40–80KB) justified for login + onboarding screens only? Consider: subset the font to display weights only, or load it asynchronously so it doesn't block app rendering.

3. **Brand teal vs. semantic success:** `brand-teal` (#3FB7A8) and `semantic-success` (#16A34A) could be confused in dense data views (both are "green-ish positive" signals). In score bars, teal = "good" (60–79) while green = "excellent" (80–100). Is the hue difference sufficient at small sizes? Consider adding a secondary visual differentiator (e.g., icon or pattern) for colorblind users.

4. **Cyan hover on light backgrounds:** `interactive-cyan-subtle` (12% opacity) is very faint on `neutral-50` (#F8FAFC). Is the row-hover state perceptible enough for users? May need to increase to 18–20% opacity. Test on low-contrast monitors.

5. **Dark mode gradient:** The logo gradient works beautifully on dark. But will the gradient primary button also work on dark surfaces (dark card, dark modal)? The gradient may need a slight luminance boost for dark contexts.

---

## 11. Design System Governance

### Naming Convention

- Tokens: kebab-case (`brand-primary`, `space-4`, `heading-lg`).
- Components: PascalCase (`ScoreBadge`, `SignalCard`, `ConsultantAvatar`).
- Variants: camelCase within components (`variant="aiGenerated"`, `size="md"`).
- CSS custom properties: `--consultry-{category}-{name}` (e.g., `--consultry-color-brand-primary`).

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 30.03.2026 | Initial design system based on Consultry PRD v2.0. Navy + amber palette. |
| 1.1 | 30.03.2026 | **Branding reconciliation.** Integrated Complete Branding System. New color palette (teal→blue gradient, cool-gray neutrals, cyan accent). Added Sora as display font. Adjusted radii, shadows, sidebar. Added QA notes throughout. 17 contradictions resolved. 5 open questions flagged. |

---

*This design system is a living document. When in doubt, refer to the design principles and brand voice — strategic, clear, intelligent, calm authority — and make the choice that reinforces trust and professionalism for the DACH market.*
