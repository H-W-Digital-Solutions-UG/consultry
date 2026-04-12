# Consultry Marketing Design System v1.0

## Marketing Website for HubSpot CMS

**Status:** Draft
**Date:** 31 March 2026
**Product:** Consultry Marketing Website
**Parent System:** Consultry Design System v1.3 (App)
**Platform:** HubSpot CMS
**Audience:** Marketing, Design, Engineering (Web)

**Changelog:** v1.0 — Initial marketing design system. Derived from app DS v1.3, adapted for public-facing marketing with warmer expression, bolder typography, and cinematic hero treatment. References: Dovetail (cinematic dark heroes, editorial typography), Origin Financial (premium fintech restraint, display fonts, 3D product vis), Duna (warm compliance brand, illustration-forward, Framer-style motion).

---

## 0. Relationship to the App Design System

This marketing design system extends — not replaces — the Consultry app DS v1.3. The two share a single brand identity but serve different purposes.

| Dimension | App DS v1.3 | Marketing DS v1.0 |
|-----------|-------------|-------------------|
| **Purpose** | Daily work tool for consultants and BD leaders | Persuade, inform, and convert prospects |
| **Tone** | Restrained, dense, professional | Warmer, more expressive, editorially bold |
| **Gradient use** | Hero-only (logo, login CTA) | Permitted in hero sections, page accents, section dividers |
| **Typography** | Inter only, functional sizes | Inter + display treatment at large sizes; editorial spacing |
| **Motion** | Subtle, functional (opacity + translateY) | Cinematic — scroll-triggered reveals, parallax-lite, counter animations |
| **Color palette** | Identical tokens, conservative application | Identical tokens, expressive application (warm surfaces, gradient accents) |
| **Dark surfaces** | Sidebar only; app is light-theme default | Dark hero sections, dark feature showcases, warm dark footer |
| **Imagery** | Product screenshots, line illustrations | Product screenshots in context, lifestyle metaphors, custom illustrations |

**The golden rule:** A visitor who sees the marketing site, then signs into the app, should feel they've entered the *same world* — just a calmer, working version of it. Shared palette, shared typeface, shared warmth. The marketing site turns up the volume; the app turns it back down.

---

## 1. Design Principles (Marketing-Specific)

### 1.1 Vertrauen durch Klarheit (Trust Through Clarity)

The DACH consulting market is skeptical of hype. Every claim needs substance. No "revolutionize your workflow" without showing how. Product screenshots are real, not mocked up. Testimonials include names, roles, and company logos. Data claims cite sources.

### 1.2 Wärme mit Substanz (Warmth With Substance)

The marketing site is warmer than the app — gradients breathe, typography is bolder, whitespace is more generous. But warmth never becomes frivolous. Every visual flourish serves a purpose: the gradient draws the eye to the CTA, the large type hierarchy makes scanning effortless, the whitespace lets complex product concepts land clearly.

### 1.3 Cinematic, Not Theatrical

Inspired by Dovetail and Origin: hero sections are immersive and full-viewport. Product showcases use sticky scroll and reveal animations. But nothing bounces, nothing spins, nothing demands attention through gimmickry. Think "architectural film" — slow pans, considered reveals, quiet confidence.

### 1.4 DACH-First Content Design

German is the primary language. All layouts must accommodate compound nouns (Deckungsbeitragsrechnung, Ausschreibungsantwort) without breaking. English is a secondary locale, not the design-first language. Formal address (Sie) throughout. Swiss-German locale support for number/date formatting.

### 1.5 Conversion Without Pressure

Primary CTAs are clear and repeated, but the site never feels pushy. No countdown timers, no "only 3 spots left," no aggressive pop-ups. The CTA structure follows: inform → demonstrate → invite. The user should feel *drawn in*, not chased.

---

## 2. Design Tokens

### 2.1 Color System

The marketing site uses the **identical token set** from app DS v1.3, with expanded application rules for marketing contexts.

#### Brand Colors (Inherited — No Changes)

| Token | Hex | Marketing Usage |
|-------|-----|----------------|
| `brand-primary` | `#BF5347` | Primary CTAs, links, active states, hover accents. The anchor color. |
| `brand-primary-light` | `#CA7168` | Button hover states. |
| `brand-primary-dark` | `#A2463C` | Button pressed states, text links on hover. |
| `brand-warm` | `#E8913A` | Secondary accents: icon highlights, stat counters, decorative markers. |
| `brand-warm-light` | `#F0A85E` | Hover on warm-accented elements. |
| `brand-gradient` | `linear-gradient(135deg, #E8913A, #E8655A, #9B59B6)` | Hero backgrounds, section accent strips, CTA buttons in hero context. |

#### Marketing-Expanded Gradient Usage

In the app, the gradient is hero-only. On the marketing site, the gradient has a broader but still disciplined role:

| Context | Gradient Treatment | Rule |
|---------|-------------------|------|
| **Hero section** | Full gradient background (dark overlay for text contrast) or gradient text on dark background | One per page maximum. |
| **Hero CTA button** | Gradient fill, white text | Only in hero sections. All other CTAs use solid `brand-primary`. |
| **Section divider** | Thin gradient line (2px height, full-width) | Between major page sections. Max 2 per page. |
| **Accent underline** | Gradient underline on key headings | Sparingly — max 1 per page outside hero. |
| **Icon/stat highlights** | Small gradient fills on feature icons or stat numbers | Feature grid sections only. |
| **Standard buttons** | **Never.** Solid `brand-primary` only. | Hard rule — same as app. |
| **Card backgrounds** | **Never.** | Hard rule. |
| **Body text** | **Never.** | Hard rule. |

#### Marketing Surface Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `mktg-surface-light` | `#FFFBF9` | Warm off-white page background. Slightly warmer than app's `neutral-100`. |
| `mktg-surface-warm` | `#FFF5F0` | Alternating section background. Warm blush — creates rhythm between white and warm sections. |
| `mktg-surface-dark` | `#2C2926` | Dark section background (feature showcases, testimonials). Warm brown-black, not cold. |
| `mktg-surface-dark-elevated` | `#3A3833` | Cards and elevated elements on dark sections. Matches app dark mode base. |
| `mktg-surface-hero` | `#1E1B18` | Hero section background. Deepest warm dark. |
| `mktg-text-on-dark` | `#FAFAF9` | Primary text on dark surfaces. Warm white. |
| `mktg-text-on-dark-muted` | `rgba(250, 250, 249, 0.65)` | Secondary text on dark surfaces. |

These marketing-specific surface tokens are **not used in the app** — they exist solely for the marketing site. The warm undertone in every dark surface (`#2C2926` instead of `#1A1A1A`) ensures the dark sections feel connected to the brand's warm palette, not like a generic dark theme.

#### Semantic Colors (Inherited — No Changes)

All semantic colors (`semantic-success`, `semantic-warning`, `semantic-danger`, `semantic-info`) are inherited unchanged. Used in marketing for: pricing tier highlights, feature comparison checkmarks, trust badges.

---

### 2.2 Typography

**Primary Font:** Inter — same as app. One family, consistent brand across product and marketing.

**Display Treatment:** At marketing display sizes (40px+), Inter gains editorial character through aggressive letter-spacing, heavier weights, and generous line-height. No secondary display font needed — Inter at Bold/Black weight with tight tracking achieves the premium feel seen in the Origin and Dovetail references.

| Token | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------|--------|------|-------------|----------------|-------|
| `mktg-display-hero` | Inter | 800 (ExtraBold) | 64–80px | 1.05 | -0.03em | Hero headline. One per page. Desktop only — scales to `mktg-display-lg` on mobile. |
| `mktg-display-lg` | Inter | 700 (Bold) | 48–56px | 1.1 | -0.025em | Section headlines. The primary section divider typographically. |
| `mktg-display-md` | Inter | 600 (SemiBold) | 36–40px | 1.15 | -0.02em | Sub-section headlines, feature group titles. |
| `mktg-display-sm` | Inter | 600 (SemiBold) | 28–32px | 1.2 | -0.015em | Card headlines, testimonial pull-quotes. |
| `mktg-heading-lg` | Inter | 600 (SemiBold) | 24px | 1.3 | -0.01em | Feature titles, pricing tier names. |
| `mktg-heading-md` | Inter | 600 (SemiBold) | 20px | 1.4 | -0.01em | Card subtitles, FAQ questions. |
| `mktg-heading-sm` | Inter | 500 (Medium) | 16px | 1.5 | 0 | Eyebrow labels, meta headings. |
| `mktg-body-lg` | Inter | 400 (Regular) | 18px | 1.6 | 0 | Primary body text. Larger than app default for readability at marketing distances. |
| `mktg-body-md` | Inter | 400 (Regular) | 16px | 1.6 | 0 | Secondary body text, descriptions. |
| `mktg-body-sm` | Inter | 400 (Regular) | 14px | 1.5 | 0.01em | Captions, legal text, footer links. |
| `mktg-label` | Inter | 500 (Medium) | 13px | 1.3 | 0.06em | Eyebrow text above headlines. Uppercase. Used for section categorization ("PLATTFORM", "PREISE", "KUNDEN"). |
| `mktg-mono` | JetBrains Mono | 400 | 16px | 1.5 | 0 | Stats, metrics, code snippets in product features. |

**Key Differences from App Typography:**

- Hero text is significantly larger (64–80px vs. 48–56px in app) and heavier (ExtraBold vs. Bold).
- Body text defaults to 18px (vs. 14px in app) — marketing pages are read at arm's length, not workstation distance.
- Letter-spacing is more aggressive at display sizes — -0.03em at hero scale creates the tight, editorial quality seen in Dovetail.
- Eyebrow labels (`mktg-label`) use 0.06em tracking and uppercase — a marketing pattern not used in the app.

**German Typography (Inherited Rules):**

- Compound nouns never truncated mid-word.
- Number formatting: 1.234,56 (DE) / 1'234.56 (CH).
- Date formatting: DD.MM.YYYY.
- All hero copy reviewed for Umbruch (line breaks) at common viewport widths — German headlines wrap differently than English.

---

### 2.3 Spacing Scale

The marketing site uses a **scaled-up version** of the app's 4px-base spacing system. Marketing pages need more breathing room than dense data interfaces.

| Token | Value | Usage |
|-------|-------|-------|
| `mktg-space-xs` | 8px | Tight gaps: icon-to-label, badge padding. |
| `mktg-space-sm` | 16px | Intra-component: between heading and body in a card. |
| `mktg-space-md` | 24px | Default: between related elements within a section. |
| `mktg-space-lg` | 40px | Between components within a section (card to card, feature to feature). |
| `mktg-space-xl` | 64px | Between page sections. The primary vertical rhythm unit. |
| `mktg-space-2xl` | 96px | Between major page regions (hero-to-content, content-to-footer). |
| `mktg-space-3xl` | 128px | Hero section internal padding (top/bottom). |

**Spacing Principle:** Marketing pages should feel expansive. When in doubt, add more space. Dense information is communicated through the product itself (via screenshots and demos), not through cramming content onto the marketing page.

**Responsive Spacing:**

| Token | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| `mktg-space-xl` | 96px | 64px | 48px |
| `mktg-space-2xl` | 128px | 96px | 64px |
| `mktg-space-3xl` | 160px | 120px | 80px |

---

### 2.4 Border & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `mktg-radius-sm` | 8px | Small cards, badges, input fields. |
| `mktg-radius-md` | 12px | Standard cards, feature cards, pricing cards. |
| `mktg-radius-lg` | 16px | Product screenshot containers, testimonial cards. |
| `mktg-radius-xl` | 24px | Hero product showcases, large feature panels. |
| `mktg-radius-full` | 9999px | Pill buttons, avatar badges, logo marks. |
| `mktg-border-subtle` | 1px solid `rgba(62, 60, 58, 0.08)` | Card borders on light backgrounds. Nearly invisible. |
| `mktg-border-on-dark` | 1px solid `rgba(250, 250, 249, 0.1)` | Card borders on dark sections. |

**Radius is slightly larger than app** — 12px default vs. 10px in app. Marketing cards feel softer and more approachable; the app's tighter radii feel more precise and tool-like.

---

### 2.5 Elevation & Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `mktg-shadow-sm` | `0 2px 8px rgba(0,0,0,0.04)` | Resting cards on light background. |
| `mktg-shadow-md` | `0 4px 20px rgba(0,0,0,0.06)` | Hover state on cards, dropdown menus. |
| `mktg-shadow-lg` | `0 8px 40px rgba(0,0,0,0.08)` | Product screenshot containers, floating elements. |
| `mktg-shadow-hero` | `0 20px 60px rgba(0,0,0,0.15)` | Hero product mockup — makes the product "float" above the dark background. |
| `mktg-shadow-glow` | `0 0 40px rgba(191, 83, 71, 0.12)` | Subtle brand-primary glow behind hero CTA or product mockup. Warm, not neon. |

Shadows on the marketing site are softer and larger-radius than the app — they create atmosphere rather than structure.

---

### 2.6 Motion & Animation

Marketing motion is **cinematic** — scroll-triggered reveals, smooth transitions, and purposeful animation. This is the biggest departure from the app's "minimal, functional" motion philosophy.

#### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `mktg-duration-fast` | 200ms | Hover states, button transitions, micro-interactions. |
| `mktg-duration-normal` | 400ms | Element entrance animations, card reveals. |
| `mktg-duration-slow` | 600ms | Hero content entrance, section reveals, product mockup transitions. |
| `mktg-duration-cinematic` | 800ms | Hero background fade-in, full-page transitions. |

#### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `mktg-ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing for most transitions. |
| `mktg-ease-enter` | `cubic-bezier(0.0, 0, 0.2, 1)` | Elements entering viewport. Decelerating. |
| `mktg-ease-dramatic` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero reveals. Fast start, long ease-out. Dovetail-inspired. |

#### Scroll-Triggered Animation Patterns

| Pattern | Behavior | Usage |
|---------|----------|-------|
| **Fade-up** | Opacity 0→1, translateY(24px→0). `duration-normal`, `ease-enter`. Triggered at 15% viewport visibility. | Default entrance for cards, text blocks, feature items. |
| **Stagger-in** | Same as fade-up, but children stagger by 80ms. Max 5 children animated. | Feature grids, pricing cards, team members, logo grids. |
| **Slide-reveal** | Content slides from left or right, opacity 0→1. `duration-slow`, `ease-enter`. | Alternating image-text sections. Image slides from one side, text from the other. |
| **Scale-in** | Scale(0.95→1), opacity 0→1. `duration-slow`, `ease-dramatic`. | Product screenshots, hero product mockup. |
| **Counter-roll** | Number rolls from 0→value. `duration-slow`. Uses `mktg-mono` font. | Statistics sections ("500+ Beratungen", "10.000+ Matches"). |
| **Sticky-scroll** | Element sticks to viewport while sibling content scrolls alongside. | Product feature deep-dives: sticky product screenshot, scrolling feature descriptions. |

#### Motion Rules

- **Respect `prefers-reduced-motion`:** All scroll animations degrade to instant render. No exceptions.
- **One animation per viewport at a time.** If multiple elements enter simultaneously, stagger them. Never animate more than 5 elements in a stagger group.
- **No parallax on text.** Images may have subtle parallax (max 30px travel). Text is always static relative to its container.
- **No looping animations.** Everything plays once on scroll-into-view. No pulsing, no rotating, no infinite loops. Exception: subtle gradient shift on hero background (very slow, 15s cycle, barely perceptible).
- **No bouncing, no elastic easing, no overshoot.** Smooth, architectural motion only.

---

## 3. Layout System

### 3.1 Grid

| Property | Desktop (≥1280px) | Tablet (768–1279px) | Mobile (<768px) |
|----------|-------------------|---------------------|-----------------|
| Max content width | 1200px | 100% - 64px | 100% - 32px |
| Columns | 12 | 8 | 4 |
| Gutter | 32px | 24px | 16px |
| Margin | Auto-centered | 32px | 16px |

**Full-bleed sections:** Hero sections and dark background sections span the full viewport width. Content within them still follows the grid.

### 3.2 Section Rhythm

Every marketing page follows a predictable vertical rhythm:

```
┌──────────────────────────────────────────────┐
│  HERO (full-viewport, dark bg)               │  ← `mktg-space-3xl` internal padding
│  Headline + Sub + CTA + Product Visual       │
├──────────────────────────────────────────────┤
│  `mktg-space-2xl` gap                        │
├──────────────────────────────────────────────┤
│  SECTION (light bg: `mktg-surface-light`)    │  ← `mktg-space-xl` internal padding
│  Eyebrow + Headline + Content                │
├──────────────────────────────────────────────┤
│  `mktg-space-xl` gap                         │
├──────────────────────────────────────────────┤
│  SECTION (warm bg: `mktg-surface-warm`)      │  ← Alternating surface for rhythm
│  ...                                         │
├──────────────────────────────────────────────┤
│  SECTION (dark bg: `mktg-surface-dark`)      │  ← Used for social proof, features
│  ...                                         │
├──────────────────────────────────────────────┤
│  CTA BAND                                    │  ← Final conversion moment
├──────────────────────────────────────────────┤
│  FOOTER (dark bg)                            │
└──────────────────────────────────────────────┘
```

**Surface alternation rule:** Never stack two white sections or two dark sections back-to-back. Alternate between `mktg-surface-light`, `mktg-surface-warm`, and `mktg-surface-dark` to create clear section boundaries without relying on borders or dividers. A typical page uses: dark hero → light → warm → light → dark → light → CTA band → dark footer.

---

## 4. Components

### 4.1 Navigation (Top Bar)

| Property | Value |
|----------|-------|
| Position | Fixed top, full-width. `z-index: 100`. |
| Height | 72px desktop, 64px mobile. |
| Background | Transparent over hero. Transitions to `rgba(255, 251, 249, 0.92)` + `backdrop-filter: blur(12px)` on scroll (after hero). |
| Background (dark section) | `rgba(30, 27, 24, 0.92)` + `backdrop-filter: blur(12px)`. |
| Logo | Gradient mark + wordmark on hero/dark. Monochrome dark mark + wordmark on light. |
| Nav links | `mktg-body-md` (16px), `neutral-700` on light / `mktg-text-on-dark` on dark. Hover: `brand-primary`. |
| Active indicator | Underline 2px `brand-primary`, offset 4px below text. |
| CTA button | `brand-primary` solid fill, white text, `mktg-radius-full` (pill). "Demo buchen" or "Kostenlos testen". |
| Mobile | Hamburger icon. Full-screen overlay menu on open. `mktg-surface-hero` background. |

**Scroll behavior:** Nav begins transparent over the hero. On scroll past the hero section, it gains a frosted-glass background (à la Duna). The transition is `mktg-duration-fast` opacity fade. The CTA button is always visible in the nav — it's the persistent conversion anchor.

**Nav structure:**

```
[Logo]  Plattform ▾  Lösungen ▾  Preise  Kunden  Ressourcen ▾     [Demo buchen]
```

- **Plattform:** Product overview, feature modules, AI capabilities, integrations.
- **Lösungen:** By role (BD-Leiter, Partner, Berater), by use case (Pipeline, Matching, Delivery).
- **Preise:** Pricing page.
- **Kunden:** Customer stories, testimonials.
- **Ressourcen:** Blog, guides, webinars, documentation.

#### Mega-Menu Dropdown

| Property | Value |
|----------|-------|
| Container | `neutral-0` bg, `mktg-shadow-lg`, `mktg-radius-lg`. Full content-width (1200px max). |
| Layout | 3–4 columns. Each column: icon + heading + description. |
| Item hover | `mktg-surface-warm` background. `mktg-duration-fast`. |
| Enter | Fade-down, `mktg-duration-normal`, `mktg-ease-enter`. |
| Exit | Fade-up, `mktg-duration-fast`. |

---

### 4.2 Hero Section

The hero is the emotional apex of each page. It is the one place where the marketing site goes fully cinematic.

#### Variants

| Variant | Background | Content | Usage |
|---------|-----------|---------|-------|
| **Primary (Dark)** | `mktg-surface-hero` or gradient overlay on product visual | Headline (gradient text or white) + subtitle + CTA + product screenshot floating below | Homepage hero. |
| **Product Showcase** | `mktg-surface-hero` | Headline + subtitle + sticky product screenshot/video with scroll-triggered feature callouts | Product/feature pages. |
| **Minimal (Light)** | `mktg-surface-light` | Headline (dark text) + subtitle + CTA. No imagery. | Blog index, resource pages, pricing. |
| **Customer Story** | Dark with customer brand color accent | Quote + customer name/logo + CTA to full story | Customer stories index. |

#### Hero Anatomy (Primary)

```
┌─────────────────────────────────────────────────────────┐
│  [Nav — transparent]                                     │
│                                                          │
│        mktg-label (eyebrow, uppercase)                   │
│        mktg-display-hero headline                        │
│        (gradient text or white)                          │
│                                                          │
│        mktg-body-lg subtitle (muted white)               │
│                                                          │
│        [Primary CTA — gradient]  [Secondary CTA — ghost] │
│                                                          │
│               ┌────────────────────────┐                 │
│               │   Product Screenshot   │                 │
│               │   (mktg-shadow-hero)   │                 │
│               │   (mktg-radius-xl)     │                 │
│               └────────────────────────┘                 │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Hero product screenshot:** The product UI screenshot extends below the hero fold, partially overlapping the next section. This creates depth and a natural scroll invitation. Container: `mktg-radius-xl` (24px), `mktg-shadow-hero`, subtle `mktg-shadow-glow` behind it. Entrance: `scale-in` animation on page load.

**Gradient text:** Hero headlines can use `brand-gradient` as a text fill via `-webkit-background-clip: text`. Only on dark backgrounds. Only at `mktg-display-hero` or `mktg-display-lg` size. Fallback for non-supporting browsers: `brand-primary` solid text.

---

### 4.3 Buttons

Marketing buttons inherit all app DS v1.3 button logic but add two marketing-specific variants.

| Variant | Background | Text | Border | Radius | Usage |
|---------|-----------|------|--------|--------|-------|
| **Primary** | `brand-primary` | White | none | `mktg-radius-full` (pill) | Standard CTAs everywhere outside hero. "Demo buchen", "Mehr erfahren". |
| **Hero Gradient** | `brand-gradient` | White | none | `mktg-radius-full` (pill) | Hero CTAs only. One per hero section max. |
| **Secondary** | Transparent | `neutral-700` (light bg) / `mktg-text-on-dark` (dark bg) | 1px `neutral-300` (light) / 1px `rgba(255,255,255,0.2)` (dark) | `mktg-radius-full` (pill) | Supporting CTAs. "Preise ansehen", "Video ansehen". |
| **Ghost** | Transparent | `brand-primary` (light bg) / White (dark bg) | none | — | Tertiary links. "Alle Funktionen →", "Weiterlesen →". Arrow suffix. |
| **Nav CTA** | `brand-primary` | White | none | `mktg-radius-full` (pill) | Navigation persistent CTA. Smaller (`sm` size). |

**Key difference from app:** Marketing buttons are **pill-shaped** (`border-radius: 9999px`) while app buttons use `radius-md` (8px). This is intentional — pill buttons feel more inviting and marketing-appropriate; rectangular buttons feel more tool-like. The shape difference reinforces the "same world, different mode" relationship.

#### Sizes

| Size | Height | Font | Padding | Usage |
|------|--------|------|---------|-------|
| `sm` | 36px | `mktg-body-sm` (14px) | 8px 20px | Nav CTA, inline CTAs in cards. |
| `md` | 44px | `mktg-body-md` (16px) | 10px 28px | Default. Section CTAs, feature CTAs. |
| `lg` | 52px | `mktg-body-lg` (18px) | 14px 36px | Hero CTAs, CTA band buttons. |

#### States

| State | Visual | Duration |
|-------|--------|----------|
| Default | As defined per variant. | — |
| Hover | Primary: `brand-primary-light`. Gradient: brightness +10%. Secondary: `mktg-surface-warm` bg (light) / `rgba(255,255,255,0.08)` bg (dark). | `mktg-duration-fast`. |
| Active | Primary: `brand-primary-dark`. | 100ms. |
| Focus | `brand-primary` outline 2px, offset 3px. | Keyboard only. |

---

### 4.4 Feature Cards

| Property | Value |
|----------|-------|
| Background | `neutral-0` (on light sections) / `mktg-surface-dark-elevated` (on dark sections). |
| Border | `mktg-border-subtle` (light) / `mktg-border-on-dark` (dark). |
| Radius | `mktg-radius-md` (12px). |
| Shadow | `mktg-shadow-sm` resting, `mktg-shadow-md` on hover. |
| Padding | 32px all sides (desktop), 24px (mobile). |
| Hover | Shadow lifts to `mktg-shadow-md`. Transform: translateY(-2px). `mktg-duration-fast`. |

#### Feature Card Anatomy

```
┌────────────────────────────────────────┐
│  [Icon — 32px, brand-primary]          │
│                                        │
│  mktg-heading-lg title                 │
│                                        │
│  mktg-body-md description              │
│  (neutral-600 on light /               │
│   mktg-text-on-dark-muted on dark)     │
│                                        │
│  [Ghost CTA →]                         │
└────────────────────────────────────────┘
```

**Feature grid:** 3-column on desktop, 2-column on tablet, 1-column on mobile. Stagger-in animation with 80ms delay per card.

---

### 4.5 Testimonial / Social Proof

#### Testimonial Card

| Property | Value |
|----------|-------|
| Background | `mktg-surface-warm` (on light bg) / `mktg-surface-dark-elevated` (on dark bg). |
| Radius | `mktg-radius-lg` (16px). |
| Padding | 40px desktop, 24px mobile. |

```
┌────────────────────────────────────────┐
│  "Pull quote in mktg-display-sm        │
│   (28–32px). Italic."                  │
│                                        │
│  ┌──┐  Name — mktg-heading-sm          │
│  │AV│  Role, Company — mktg-body-sm    │
│  └──┘  [Company Logo — max 120px wide] │
└────────────────────────────────────────┘
```

#### Logo Strip (Social Proof)

| Property | Value |
|----------|-------|
| Logos | Grayscale at 50% opacity by default. Full color on hover. |
| Size | Max 120px wide, 40px tall. Constrained to maintain uniform visual weight. |
| Layout | Horizontal row, evenly spaced. 6–8 logos per row. Auto-scroll on mobile (subtle, slow). |
| Label | Eyebrow above: "VERTRAUT VON FÜHRENDEN BERATUNGEN" in `mktg-label`. |

---

### 4.6 Statistics / Metrics Section

| Property | Value |
|----------|-------|
| Layout | 3 or 4-column grid. Centered text in each cell. |
| Number | `mktg-mono` (JetBrains Mono), `mktg-display-md` size. `brand-primary` color. |
| Label | `mktg-body-md`, `neutral-600`. Below the number. |
| Animation | Counter-roll from 0→value on scroll-into-view. `mktg-duration-slow`. |
| Dividers | Vertical 1px `neutral-200` between items on desktop. None on mobile (stacked). |

Example:

```
    500+              10.000+           95%              4,8★
    Beratungen        KI-Matches        Zeitersparnis    Kundenzufriedenheit
```

---

### 4.7 Product Screenshot / Mockup

| Property | Value |
|----------|-------|
| Container | `mktg-radius-xl` (24px). `mktg-shadow-lg`. |
| Border | `mktg-border-subtle` on light bg. `mktg-border-on-dark` on dark bg. |
| Background | Match the product's actual UI — `neutral-100` app background visible. |
| Caption | Optional. Below the image, `mktg-body-sm`, `neutral-600`, centered. |

**Screenshot treatment:** Product screenshots always show the real Consultry UI — never mockups or simulations. The screenshot container has generous radius and soft shadow to lift it off the page. On dark backgrounds, add `mktg-shadow-glow` for a warm halo effect.

**Browser chrome:** Optional thin mock browser bar above the screenshot (address bar with "app.consultry.de"). Adds context without distraction. `neutral-200` background, `mktg-radius-xl` top corners only.

---

### 4.8 Pricing Card

| Property | Value |
|----------|-------|
| Background | `neutral-0`. |
| Border | `mktg-border-subtle`. Recommended tier: 2px `brand-primary` border. |
| Radius | `mktg-radius-lg` (16px). |
| Shadow | `mktg-shadow-sm` default. Recommended tier: `mktg-shadow-md`. |
| Padding | 40px desktop, 24px mobile. |
| Recommended badge | `brand-primary` bg, white text, pill shape. Positioned at top center, overlapping card border. "EMPFOHLEN". |

```
┌────────────────────────────────────────┐
│              [EMPFOHLEN]               │  ← Badge only on recommended tier
│                                        │
│  mktg-heading-lg: Tier Name            │
│  mktg-body-md: One-line description    │
│                                        │
│  mktg-display-md: €XXX                 │
│  mktg-body-sm: /Monat, pro Nutzer      │
│                                        │
│  [Primary CTA — full-width]            │
│                                        │
│  ──────────────────────────            │
│                                        │
│  ✓ Feature line                        │
│  ✓ Feature line                        │
│  ✓ Feature line                        │
│  ✓ Feature line                        │
└────────────────────────────────────────┘
```

Checkmarks use `semantic-success` (#16A34A). Feature lines in `mktg-body-md`. Missing features on lower tiers shown as `neutral-400` text with `×` prefix.

---

### 4.9 CTA Band

A full-width conversion section that appears near the bottom of every page, before the footer.

| Property | Value |
|----------|-------|
| Background | `brand-gradient` (135° direction) or `mktg-surface-dark` with gradient accent. |
| Padding | `mktg-space-2xl` vertical. |
| Content | Centered: `mktg-display-md` headline (white) + `mktg-body-lg` subtitle (muted white) + CTA button(s). |
| CTA | Primary: White bg, `brand-primary` text (inverted from usual). Secondary: Ghost white. |

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│       Bereit, Ihre Beratung zu transformieren?               │
│       Starten Sie mit einem kostenlosen Beratungsgespräch.   │
│                                                              │
│       [Demo buchen]  [Preise ansehen →]                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### 4.10 Footer

| Property | Value |
|----------|-------|
| Background | `mktg-surface-hero` (`#1E1B18`). |
| Text | `mktg-text-on-dark` (primary), `mktg-text-on-dark-muted` (secondary/links). |
| Link hover | `brand-warm` (#E8913A). |
| Padding | `mktg-space-2xl` top, `mktg-space-xl` bottom. |
| Layout | 4-column: Brand + tagline, Plattform links, Unternehmen links, Rechtliches links. |
| Logo | Monochrome white logomark + wordmark. |
| Bottom bar | Copyright + locale switcher (DE/EN) + Impressum + Datenschutz. `mktg-body-sm`. |

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [Logo]                Plattform     Unternehmen  Rechtlich  │
│  Die operative         Funktionen    Über uns     Impressum  │
│  Intelligence Engine   Preise        Karriere     Datenschutz│
│  für Beratungen.       Integrationen Blog         AGB        │
│                        Sicherheit    Kontakt      Cookie     │
│  [Social Icons]                      Partner                 │
│                                                              │
│  ─────────────────────────────────────────────────────────   │
│  © 2026 Consultry GmbH    DE | EN    Impressum · Datenschutz │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Big footer** (à la Duna): The footer is generous and content-rich. It serves as both navigation and trust signal. The dark background naturally closes the page — no ambiguity about where the content ends.

---

## 5. Page Templates

### 5.1 Homepage

```
1. Hero (Dark, Primary variant)
   - Eyebrow: "KI-NATIVE CRM FÜR BERATUNGEN"
   - Headline: "Die Intelligence Engine für Ihre Beratung" (gradient text)
   - Subtitle: Short value proposition
   - CTA: "Kostenlos testen" (gradient) + "Demo ansehen" (secondary)
   - Product screenshot floating below hero fold

2. Logo Strip — Social proof

3. Feature Overview (Light bg)
   - Eyebrow: "PLATTFORM"
   - Headline: "Vom Signal zum Projekt — nahtlos"
   - 3-column feature cards (icons + titles + descriptions)

4. Product Deep-Dive (Alternating light/warm)
   - Sticky-scroll: product screenshot left, feature descriptions scroll right
   - 3–4 feature blocks, each with icon + heading + body

5. Statistics Section (Light bg)
   - Counter-roll metrics

6. Testimonials (Dark bg)
   - 2–3 testimonial cards in a carousel or grid

7. Integration Logos (Warm bg)
   - "Nahtlos integriert" + integration partner logos

8. CTA Band (Gradient)

9. Footer
```

### 5.2 Feature / Product Page

```
1. Hero (Product Showcase variant)
   - Module-specific headline
   - Product screenshot with scroll-triggered feature annotations

2. Problem → Solution narrative (Light/Warm alternating)
   - "Without Consultry" vs. "With Consultry" comparison

3. Feature detail sections (3–4 blocks)
   - Alternating image-text layout (slide-reveal animation)
   - Real product screenshots showing the specific feature

4. Statistics / ROI (Light bg)

5. Related customer story (Dark bg)

6. CTA Band

7. Footer
```

### 5.3 Pricing Page

```
1. Hero (Minimal Light variant)
   - "Transparente Preise für jede Beratungsgröße"

2. Pricing Cards (3 tiers, centered)
   - Stagger-in animation
   - Toggle: Monatlich / Jährlich (with savings badge)

3. Feature Comparison Table (Light bg)
   - Full feature matrix with checkmarks
   - Sticky header row on scroll

4. FAQ Accordion (Warm bg)

5. CTA Band ("Noch Fragen? Sprechen Sie mit uns.")

6. Footer
```

### 5.4 Customer Story

```
1. Hero (Customer Story variant)
   - Customer logo + company name
   - Key metric ("37% mehr Auslastung in 6 Monaten")

2. Challenge section (Light bg)

3. Solution section (with product screenshots)

4. Results (Statistics section with customer-specific metrics)

5. Full testimonial quote (Dark bg)

6. Related stories (Warm bg, 3-card grid)

7. CTA Band

8. Footer
```

### 5.5 Blog / Resource Page

```
1. Hero (Minimal Light variant)
   - "Ressourcen" or category name

2. Featured article (full-width card)

3. Article grid (3-column, paginated or infinite scroll)
   - Card: Thumbnail + category badge + title + excerpt + date

4. Category filter bar (sticky below nav)

5. Newsletter CTA (Warm bg)

6. Footer
```

---

## 6. HubSpot CMS Implementation Guidance

### 6.1 Theme Structure

```
consultry-marketing-theme/
├── css/
│   ├── tokens.css          ← All design tokens as CSS custom properties
│   ├── base.css            ← Reset, typography, global styles
│   ├── components/
│   │   ├── nav.css
│   │   ├── hero.css
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── footer.css
│   │   ├── pricing.css
│   │   └── testimonials.css
│   └── utilities.css       ← Spacing, color, radius utility classes
├── modules/
│   ├── hero-primary.module/
│   ├── hero-minimal.module/
│   ├── feature-grid.module/
│   ├── feature-detail.module/
│   ├── testimonial-slider.module/
│   ├── stats-counter.module/
│   ├── pricing-table.module/
│   ├── cta-band.module/
│   ├── logo-strip.module/
│   ├── faq-accordion.module/
│   └── blog-card-grid.module/
├── templates/
│   ├── homepage.html
│   ├── feature-page.html
│   ├── pricing.html
│   ├── customer-story.html
│   ├── blog-index.html
│   └── blog-post.html
├── js/
│   ├── scroll-animations.js    ← Intersection Observer for fade-up, stagger, counter-roll
│   ├── nav.js                  ← Scroll detection, mobile menu, mega-menu
│   └── pricing-toggle.js       ← Monthly/annual toggle
└── assets/
    ├── fonts/
    │   ├── Inter-*.woff2
    │   └── JetBrainsMono-*.woff2
    └── images/
        └── logo/
```

### 6.2 CSS Custom Properties (tokens.css)

All design tokens should be declared as CSS custom properties on `:root`, allowing HubSpot's theme settings to override them if needed:

```css
:root {
  /* Brand (inherited from app DS v1.3) */
  --brand-primary: #BF5347;
  --brand-primary-light: #CA7168;
  --brand-primary-dark: #A2463C;
  --brand-warm: #E8913A;
  --brand-gradient: linear-gradient(135deg, #E8913A, #E8655A, #9B59B6);

  /* Marketing surfaces */
  --mktg-surface-light: #FFFBF9;
  --mktg-surface-warm: #FFF5F0;
  --mktg-surface-dark: #2C2926;
  --mktg-surface-dark-elevated: #3A3833;
  --mktg-surface-hero: #1E1B18;
  --mktg-text-on-dark: #FAFAF9;
  --mktg-text-on-dark-muted: rgba(250, 250, 249, 0.65);

  /* Spacing */
  --mktg-space-xs: 8px;
  --mktg-space-sm: 16px;
  --mktg-space-md: 24px;
  --mktg-space-lg: 40px;
  --mktg-space-xl: 64px;
  --mktg-space-2xl: 96px;
  --mktg-space-3xl: 128px;

  /* Radius */
  --mktg-radius-sm: 8px;
  --mktg-radius-md: 12px;
  --mktg-radius-lg: 16px;
  --mktg-radius-xl: 24px;

  /* Shadows */
  --mktg-shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
  --mktg-shadow-md: 0 4px 20px rgba(0,0,0,0.06);
  --mktg-shadow-lg: 0 8px 40px rgba(0,0,0,0.08);
  --mktg-shadow-hero: 0 20px 60px rgba(0,0,0,0.15);
  --mktg-shadow-glow: 0 0 40px rgba(191, 83, 71, 0.12);

  /* Motion */
  --mktg-duration-fast: 200ms;
  --mktg-duration-normal: 400ms;
  --mktg-duration-slow: 600ms;
  --mktg-duration-cinematic: 800ms;
  --mktg-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --mktg-ease-enter: cubic-bezier(0.0, 0, 0.2, 1);
  --mktg-ease-dramatic: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 6.3 HubSpot-Specific Considerations

**Modules vs. Templates:** Build each component as a HubSpot module with editable fields (headline, body, CTA text, CTA URL, image). This lets the marketing team assemble pages without developer intervention.

**HubL Templating:** Use HubL template tags for dynamic content (blog posts, customer stories). Design tokens should be exposed as HubSpot theme settings where appropriate (primary color, fonts) but structural tokens (spacing, radius) should remain in CSS.

**Image Optimization:** Use HubSpot's built-in `resize_image_url` filter for responsive images. All product screenshots should have `loading="lazy"` and explicit `width`/`height` attributes to prevent layout shift.

**Font Loading:** Self-host Inter and JetBrains Mono via the theme's assets folder. Use `font-display: swap` to prevent FOIT. Preload the primary weights (Inter 400, 600, 700, 800) in the theme's `<head>`.

**Scroll Animations:** Implement via Intersection Observer API (no external libraries). Each animated element gets a `data-animate="fade-up"` (or `stagger-in`, `slide-reveal`, `scale-in`, `counter-roll`) attribute. The JS file observes all `[data-animate]` elements and adds an `.is-visible` class when they enter the viewport. CSS handles the actual animation via transitions.

**Performance:** Target Lighthouse score ≥90 on all pages. Minimize CSS (one concatenated file), defer non-critical JS, use `will-change: transform, opacity` sparingly on animated elements only.

---

## 7. Accessibility

All WCAG 2.1 AA requirements from the app DS v1.3 apply to the marketing site.

### Marketing-Specific Considerations

| Concern | Requirement |
|---------|-------------|
| **Gradient text** | Always test gradient-on-dark for contrast. Fallback to solid `brand-primary` on white for users with forced-colors mode. |
| **Scroll animations** | All animations respect `prefers-reduced-motion: reduce`. Elements render in final state instantly. |
| **Dark sections** | `mktg-text-on-dark` (#FAFAF9) on `mktg-surface-dark` (#2C2926) = 12.7:1 contrast. Passes AAA. |
| **CTA buttons** | White text on `brand-primary` = 4.62:1 (AA). White text on gradient: verify each instance — orange end may fail for small text. |
| **Video/animation** | No autoplaying video with sound. All video has captions. Animated hero backgrounds have a pause control. |
| **Focus indicators** | Visible focus ring (`brand-primary` 2px outline) on all interactive elements. Never remove focus styles. |
| **Image alt text** | All product screenshots have descriptive alt text. Decorative images use `alt=""`. |
| **Skip navigation** | "Zum Inhalt springen" skip-link as first focusable element. |

---

## 8. Illustrations & Imagery (Marketing)

### 8.1 Illustration Style

Marketing illustrations extend the app's line-art style (Section 4.1 of app DS v1.3) with more warmth and scale:

| Property | App Illustrations | Marketing Illustrations |
|----------|------------------|------------------------|
| Size | 120–240px | 240–480px |
| Color palette | `neutral-700`, `neutral-400`, `brand-primary`, `brand-warm` (3 max) | Same palette + gradient fills permitted on accent elements |
| Fill | Selective flat fills | More generous fills — up to 40% of the illustration can have solid or gradient fills |
| Context | Empty states, onboarding, error pages | Hero accents, feature section backgrounds, section dividers |
| Motion | Static | Can have subtle CSS animation (fade, float, translate) on scroll |

### 8.2 Photography

Photography is used sparingly — only for customer stories and team pages.

| Rule | Detail |
|------|--------|
| **Style** | Natural, editorial. No stock-photo-feeling shots. Warm color grading consistent with brand palette. |
| **Treatment** | Light warm color overlay (`rgba(191, 83, 71, 0.05)`) to unify disparate photography styles with brand warmth. |
| **Subjects** | Real consultants, real offices, real working moments. DACH-market authenticity — European office environments, not Silicon Valley. |
| **Cropping** | 16:9 for feature sections, 1:1 for team headshots, 3:2 for blog thumbnails. |

---

## 9. Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use gradient in hero sections and accent moments | Put gradient on standard buttons or card backgrounds |
| Make dark sections feel warm (`#2C2926` not `#111`) | Use cold blue-blacks or pure black |
| Show real product screenshots | Use mockups or wireframes as final imagery |
| Use eyebrow labels to categorize sections | Use ALL CAPS for body text or headings |
| Animate on scroll-into-view, once | Loop animations or use parallax on text |
| Make CTAs clear and repeated (but not pushy) | Use aggressive urgency tactics ("Nur noch 3 Plätze!") |
| Write German-first, then translate to English | Translate English copy literally into German |
| Use `mktg-body-lg` (18px) for comfortable reading | Use app-sized body text (14px) on marketing pages |
| Make pill-shaped buttons for marketing CTAs | Use squared-off app-style buttons on marketing pages |
| Provide `prefers-reduced-motion` fallbacks | Assume all users want scroll animations |

---

## 10. Reference Alignment

This section maps how the three reference sites influenced specific decisions.

| Decision | Reference | What We Took | What We Adapted |
|----------|-----------|-------------|-----------------|
| Dark cinematic hero | Dovetail | Full-viewport dark hero, editorial typography, product screenshot floating below fold | Warm dark tones instead of cold black. Gradient text instead of blue accent. |
| Frosted-glass nav | Dovetail + Duna | Backdrop-filter nav that transitions from transparent to glass on scroll | Warm-tinted glass (#FFFBF9 base) instead of cool gray. |
| Display typography treatment | Dovetail + Origin | Tight letter-spacing at large sizes, aggressive weight hierarchy | Inter ExtraBold instead of a custom display font. Same family as app for brand continuity. |
| Pill-shaped CTAs | Origin | Rounded CTA buttons that feel approachable vs. rectangular | Kept solid `brand-primary` as default; gradient only in hero. Origin uses white-on-dark exclusively. |
| Warm surfaces | Duna | Cream/beige alternating sections that feel warm rather than sterile | Mapped to our existing Stone neutral palette. `#FFFBF9` and `#FFF5F0` as marketing-specific warm whites. |
| Counter-roll stats | Origin + Dovetail | Animated stat counters on scroll-into-view | JetBrains Mono for stats (same as app score displays). Brand-primary color for numbers. |
| Big footer | Duna | Content-rich dark footer as navigation + trust signal | Warm charcoal footer consistent with app sidebar darkness. |
| Sticky-scroll product showcase | Dovetail | Sticky product screenshot with scrolling text descriptions | Used for feature deep-dive pages. Screenshot container uses our warm shadow + glow treatment. |
| Illustration warmth | Duna | Warm-toned illustrations integrated into page flow | Extended our existing line-art style. Gradient fills permitted on marketing (not app). |

---

*This document is the canonical reference for the Consultry marketing website. For app-specific design guidance, refer to Consultry Design System v1.3. Both systems share the same brand tokens — divergence is in application, not identity.*
