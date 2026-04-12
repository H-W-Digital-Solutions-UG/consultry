# Consultry Next.js Marketing Website — Implementation Plan

**Version:** 2.3
**Date:** 12 April 2026
**Status:** Revised after direct Figma MCP validation
**Author:** Claude (implementation planning), amended by Codex after Figma validation
**Supersedes:** v1.0 (11 April 2026), v2.0 (12 April 2026), v2.1 (12 April 2026)

---

## Context & Objectives

Consultry is an **AI-native operative System** ("Betriebssystem fuer Beratungen") for DACH consulting firms. **NOT a CRM** — "CRM" only appears in competitive positioning ("kein umfunktioniertes CRM", "kein Salesforce-Klon").

### What We Have

| Asset | Details |
|-------|---------|
| **Figma designs** | File `ZRTge3ODEnkSDNRrcgBBvK` — 10 finalized dark page frames on "dark Website final" (node `2177:865`), 54 marketing components on "Components" (node `1:4`), plus Mobile Components page |
| **Design system docs** | `Consultry-Figma-Design-System-Rules.md` (unified token & component rules), `App-Consultry-Design-System-v1.3.md` (canonical app DS), `FIGMA-FRAMES-MASTER-PLAN.md` (component-to-page mapping) |
| **Design tokens** | 933-line `tokens.css` with brand, neutral, semantic, marketing surfaces, spacing, radius, shadows, borders, layout, motion tokens |
| **Marketing copy** | `Consultry-Website-Copy-DACH-v1.0.md` (v1.1, 1224 lines, SEO/GEO/AEO-optimized German, all pages) |
| **Homepage content** | `HOMEPAGE-DARK-CONTENT-FINAL.md` (supplementary SEO keyword strategy, dashboard mockup specifics) |
| **Component handover** | `HANDOVER-FIGMA-COMPONENTS.md` (31+ component IDs with variant details, token quick reference) |
| **Mobile components** | ~50 mobile-responsive components at 375px on Figma page `1082:3134` (mirrors desktop library) |
| **Old React implementation** | 30+ HubSpot CMS React components at `hubspot-cms/old_tries/consultry-react-theme/` |
| **Animations** | `StepperBar.lottie`, `dark_stepper_bar.json` for homepage deep-dive stepper |
| **Fonts** | Sora font files in `design/fonts/` (variable weight), Inter via `next/font` |
| **Logos** | Brand logos in `design/logos/` (web logo, slogan variants) |

### What Changed in v2.0

1. **Canonical Figma source is now "dark Website final" (node `2177:865`)** — not the old "Dark Website Pages" (`633:9456`). This page has 10 finalized frames at 1440px width.
2. **New transparent navbar** — `Marketing Nav Transparent` component set (`2185:375`) with State=Default (transparent) and State=Scrolled (frosted glass with backdrop blur). Three-column layout: Logo+Wordmark | Centered NavLinks | CTA pill.
3. **Announcement bar fixed** — Now in auto-layout flow (not absolute positioned), stacks above navbar without overlap.
4. **All 10 page frames updated** with new navbar and proper vertical stacking.
5. **Component inventory expanded** to 54 components based on `FIGMA-FRAMES-MASTER-PLAN.md` audit.
6. **Legal pages included** — 7 legal/policy pages (Datenschutz, Nutzungsbedingungen, Impressum, Copyright, Trademark, Cookie-Erklaerung, Cookie-Einstellungen) now part of scope.

### What Changed in v2.2

1. **Plan revalidated against live Figma MCP output** for `dark Website final` (`2177:865`) plus homepage, product, and about screenshots.
2. **Homepage scope tightened to the actual final frame**: AnnouncementBar, Transparent Nav, Hero Showcase, 4-step deep dive, Metrics, Rich CTA email capture, Footer.
3. **Product page corrected**: the final frame uses `Marketing Product Page Hero / Aircover`, 3 feature rows, `FeatureListSidebar`, FAQ, CTA band, and footer. The old BrowserShowcase / CustomerStory assumptions are not part of the visible final frame.
4. **About page content downgraded from canonical to layout-only**: team section is usable, but the long "Alienkrieg von 2019" story text is placeholder/non-shippable and must not be treated as launch-ready copy.
5. **Footer assumptions corrected**: no newsletter variant appears in the validated dark frames; implement a data-driven dark footer with brand block + nav columns.
6. **Frame-first build order is now preferred over full-library-first delivery**: implement the components visible in finalized dark frames before expanding to the broader 54-component library.

### What Changed in v2.3

1. **Implementation scope reduced to 3 launch pages only**: Homepage / Landingpage, Product page, About us.
2. **Out of scope for the current build**: product sub-pages, Funktionen, Preise, Kontakt, legal pages, i18n, English locale, light theme, and the broader component-library backlog not needed by the 3 validated frames.
3. **Plan sequence simplified**: foundation -> homepage -> product -> about -> launch QA.

---

## Content Source Priority

| Document | Path | Role |
|----------|------|------|
| **v1.1 Copy (CANONICAL)** | `design/marketing-copy/Consultry-Website-Copy-DACH-v1.0.md` | Primary source — all page content, correct positioning |
| **Homepage Content (SUPPLEMENTARY)** | `design/HOMEPAGE-DARK-CONTENT-FINAL.md` | SEO keyword strategy, dashboard mockup specifics only |
| **Figma Frames Master Plan** | `design/FIGMA-FRAMES-MASTER-PLAN.md` | Component-to-page mapping, section ordering, surface alternation |
| **Figma DS Rules** | `design/Consultry-Figma-Design-System-Rules.md` | Token values, component architecture, critical design rules |

**Key positioning rules:**
- Self-description: "AI-native Plattform", "operatives System", "Betriebssystem fuer Beratungen"
- CRM only in competitive context: "kein umfunktioniertes CRM"
- Tone: Professional, direct, slightly provocative. No fluff. Consulting language.

---

## Current Delivery Scope

**In scope now**
- `/` — Homepage / landing page (`2177:866`)
- `/produkt` — Product page (`2177:932`)
- `/unternehmen` — About us (`2177:1970`)

**Explicitly out of scope for this implementation**
- `/produkt/*` sub-pages
- `/funktionen`
- `/preise`
- `/kontakt`
- all legal pages
- English locale / i18n rollout
- light theme parity
- components that do not appear in the 3 in-scope frames

---

## Architecture

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 15, App Router, TypeScript strict | Latest stable, best SEO/SSG |
| Styling | Tailwind CSS v4 + CSS custom properties from `tokens.css` | v4 CSS-first `@theme` consumes tokens directly |
| Animation | Framer Motion v12 | Scroll hooks, AnimatePresence, orchestration |
| Fonts | `next/font` — Inter (variable 100-900), JetBrains Mono | Self-hosted, zero CLS |
| i18n | `next-intl` | German default (no prefix), English `/en/` |
| Theme | Dark-first via `[data-theme]` + CSS custom properties | Matches Figma dark-first design |
| Content | TypeScript content files in `lib/content/de/` | Type-safe, future CMS extraction path |
| Package manager | pnpm | Fast, disk-efficient |
| Lottie | `@lottiefiles/dotlottie-react` | Stepper bar animations |
| Icons | `lucide-react` | 24x24 default, stroke-based, matches app DS |
| Structured data | `schema-dts` | Type-safe JSON-LD generation |

**Project location:** `/Users/jules/dev/consultry/marketing-site/`

---

## Directory Structure

```
marketing-site/
├── app/
│   ├── layout.tsx                      # Root: <html lang="de" data-theme="dark">
│   ├── globals.css                     # Tailwind + tokens + theme imports
│   ├── page.tsx                        # Homepage
│   ├── produkt/
│   │   └── page.tsx                    # Product overview
│   ├── unternehmen/page.tsx            # About us
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                             # Primitive components (14 from Figma)
│   │   ├── Button.tsx                  # 12 variants: Primary/Gradient/Secondary/Ghost x sm/md/lg
│   │   ├── Badge.tsx                   # 9 types: Category/New/Enterprise/Success/Info/Danger/Recommended/Neutral/BrandGradient
│   │   ├── ToggleSwitch.tsx            # Light/Dark — pricing monthly/annual
│   │   ├── TabBar.tsx                  # Pill/Underline x Light/Dark
│   │   ├── FormField.tsx               # Input/Textarea/Select x Light/Dark
│   │   ├── FormControl.tsx             # Checkbox/Radio x Default/Checked x Light/Dark
│   │   ├── Tooltip.tsx                 # Top/Bottom/Left/Right
│   │   ├── Avatar.tsx                  # sm/md/lg
│   │   ├── Breadcrumb.tsx              # Light/Dark
│   │   ├── CarouselControls.tsx        # Light/Dark
│   │   ├── SocialIcon.tsx              # 7 platforms
│   │   ├── Divider.tsx                 # Horizontal/Vertical x Light/Dark
│   │   ├── Search.tsx                  # Light/Dark
│   │   ├── Pagination.tsx              # Light/Dark
│   │   ├── Skeleton.tsx                # Card/TextBlock/ListItem x Light/Dark
│   │   └── Modal.tsx                   # Confirm/Video x Light/Dark
│   ├── marketing/                      # Section-level marketing components (40 from Figma)
│   │   ├── AnnouncementBar.tsx         # Warm/Dark/Gradient — dismissible, stacks above nav
│   │   ├── Nav.tsx                     # NEW: Transparent + Scrolled states, 3-column layout
│   │   ├── Footer.tsx                  # Dark footer, data-driven nav columns, no newsletter in validated dark frames
│   │   ├── HeroShowcase.tsx            # Dark hero with browser mockup, chart bars, stats
│   │   ├── HeroMinimal.tsx             # Light/Warm/Dark text-only hero
│   │   ├── ProductPageHero.tsx         # Aircover variant with product screenshot
│   │   ├── SectionHeader.tsx           # Centered/Left x Light/Dark
│   │   ├── LogoStrip.tsx               # Marquee animation
│   │   ├── LogoGrid.tsx                # Static logo grid, Light/Dark
│   │   ├── FeatureShowcaseStep.tsx     # Pipeline/Matching/Analytics/Knowledge x Dark/Light
│   │   ├── FeatureStepper.tsx          # Step navigation + Lottie stepper bar
│   │   ├── FeatureShowcaseRow.tsx      # Image-Left/Right x Light/Dark
│   │   ├── FeatureCard.tsx             # Light/Dark
│   │   ├── FeatureGrid.tsx             # Light/Warm — 3-column feature cards with icons
│   │   ├── FeatureListSidebar.tsx      # Light/Dark checklist
│   │   ├── PricingCard.tsx             # Standard/Recommended x Light/Dark
│   │   ├── PricingSection.tsx          # Cards + toggle wrapper
│   │   ├── EnterprisePricing.tsx       # Gradient-border card, 3-layer glow
│   │   ├── ComparisonTable.tsx         # Light/Dark — responsive sticky first col
│   │   ├── FAQItem.tsx                 # Collapsed/Expanded x Light/Dark, AnimatePresence
│   │   ├── CTABand.tsx                 # Gradient/Dark
│   │   ├── RichCTABand.tsx             # Gradient background with glow
│   │   ├── StatCounter.tsx             # Light/Dark — animated number + label
│   │   ├── MetricCard.tsx              # Light/Dark — large metric cards
│   │   ├── TeamCard.tsx                # Light/Dark
│   │   ├── TestimonialCard.tsx         # Light/Dark
│   │   ├── TestimonialCarousel.tsx     # Light/Dark with CarouselControls
│   │   ├── CustomerStoryCard.tsx       # Light/Dark
│   │   ├── SolutionCard.tsx            # Light/Dark
│   │   ├── IntegrationTile.tsx         # Light/Dark
│   │   ├── VideoEmbed.tsx              # Light/Dark with custom play overlay
│   │   ├── BrowserShowcase.tsx         # Light/Dark chrome-frame mockup
│   │   ├── ContactForm.tsx             # Light/Dark
│   │   ├── TimelineSteps.tsx           # Light/Dark vertical timeline
│   │   ├── TrustBadges.tsx             # Light/Dark — DSGVO, EU Hosting, SOC2
│   │   ├── CookieBanner.tsx            # Light/Dark overlay
│   │   ├── NewsletterCapture.tsx       # Inline/Stacked x Light/Dark
│   │   ├── GradientText.tsx            # Large gradient text with ambient glow
│   │   ├── ProductUIPreview.tsx        # Dashboard/Card-Small x Dark/Light
│   │   ├── BlogCard.tsx                # Blog/Webinar/Resource x Light/Dark
│   │   └── LegalPageTemplate.tsx       # Shared template for 7 legal pages
│   ├── marketing/templates/
│   │   └── ProductSubpageTemplate.tsx  # Shared layout for 4 product sub-pages
│   └── motion/
│       ├── ScrollReveal.tsx            # useInView + motion.div wrapper
│       ├── StaggerChildren.tsx         # Staggered entrance for card grids
│       ├── ParallaxSection.tsx         # Scroll-linked parallax
│       ├── CountUp.tsx                 # Animated number counting
│       └── PageTransition.tsx          # AnimatePresence page transitions
├── lib/
│   ├── motion.ts                       # Centralized variants + transitions
│   ├── seo.ts                          # generateMetadata helpers, JSON-LD builders
│   └── content/
│       ├── de/
│       │   ├── homepage.ts
│       │   ├── product.ts
│       │   ├── product-sub/
│       │   │   ├── market-intelligence.ts
│       │   │   ├── matching-staffing.ts
│       │   │   ├── deal-execution.ts
│       │   │   └── knowledge-engine.ts
│       │   ├── funktionen.ts
│       │   ├── pricing.ts
│       │   ├── about.ts
│       │   ├── contact.ts
│       │   ├── legal.ts                # All 7 legal page contents
│       │   └── shared.ts              # Nav, footer, CTA, trust badges
│       └── en/                         # Phase 8 (future)
├── styles/
│   ├── tokens.css                      # Ported from old_tries (no HubSpot deps)
│   ├── dark-theme.css                  # Default: semantic vars -> dark values
│   └── light-theme.css                 # Toggle: semantic vars -> light values
├── public/
│   ├── fonts/                          # Inter-Variable.woff2, JetBrainsMono.woff2
│   ├── images/                         # Product screenshots, team, logos
│   ├── animations/                     # StepperBar.lottie, dark_stepper_bar.json
│   └── og/                             # Pre-rendered OG images per page
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Figma Source of Truth

### Launch Frames in Scope: "dark Website final" (node `2177:865`)

| Frame ID | Frame Name | Dimensions | Sections |
|----------|-----------|------------|----------|
| `2177:866` | Homepage / Desktop — Dark | 1440 x 6384 | AnnouncementBar, Nav Transparent, HeroShowcase, ProductDeepDive (4 steps), Metrics, RichCTABand, Footer |
| `2177:932` | Product / Desktop — Dark | 1440 x 6554 | Nav Transparent, ProductPageHero/Aircover, Video, 3 FeatureShowcaseRows, FeatureListSidebar, FAQ, CTABand, Footer |
| `2177:1970` | About / Desktop — Dark | 1440 x 3965 | Nav Transparent, HeroMinimal, TeamGrid, long-form story section, CTABand, Footer |

**Deferred Figma frames for later phases:** legal/policy pages remain available in the file, but are not part of the current 3-page implementation.

### Component Library: "Components" (node `1:4`)

**54 components** organized into 5 categories:

#### Primitives (14 components)
| Component | Figma ID | Variants |
|-----------|----------|----------|
| Marketing Button | `8:38` | Primary/Gradient/Secondary/Ghost x sm/md/lg (12) |
| Marketing Badge | `169:19` | 9 types |
| Marketing Tooltip | `172:19` | Top/Bottom/Left/Right (4) |
| Marketing Breadcrumb | `191:9` | Light/Dark (2) |
| Marketing Toggle Switch | `297:13` | Light/Dark (2) |
| Marketing Tab Bar | `299:31` | Pill/Underline x Light/Dark (4) |
| Marketing Carousel Controls | `302:23` | Light/Dark (2) |
| Marketing Avatar | `304:7` | sm/md/lg (3) |
| Marketing Social Icon | `308:17` | 7 platforms |
| Marketing Divider | `311:7` | Horizontal/Vertical x Light/Dark (4) |
| Marketing Search | `364:13` | Light/Dark (2) |
| Marketing Pagination | `366:33` | Light/Dark (2) |
| Marketing Form Field | `368:37` | Input/Textarea/Select x Light/Dark (6) |
| Marketing Form Control | `369:33` | Checkbox/Radio x states x Light/Dark (8) |

#### Cards / Molecules (12 components)
| Component | Figma ID | Variants |
|-----------|----------|----------|
| Marketing Section Header | `88:22` | Centered/Left x Light/Dark (4) |
| Marketing Testimonial Card | `89:30` | Light/Dark (2) |
| Marketing Stat Counter | `90:14` | Light/Dark (2) |
| Marketing Integration Tile | `91:12` | Light/Dark (2) |
| Marketing Feature Card | `331:8` | Light/Dark (2) |
| Marketing Customer Story Card | `96:20` | Light/Dark (2) |
| Marketing Pricing Card | `179:73` | Standard/Recommended x Light/Dark (4) |
| Marketing Blog Card | `175:23` | Blog/Webinar/Resource x Light/Dark (6) |
| Marketing Solution Card | `176:15` | Light/Dark (2) |
| Marketing Team Card | `199:8` | Light/Dark (2) |
| Marketing FAQ Item | `180:11` | Collapsed/Expanded x Light/Dark (4) |
| Marketing Metric Card | `315:61` | Light/Dark (2) |

#### Sections / Organisms (25 components)
| Component | Figma ID | Variants |
|-----------|----------|----------|
| Marketing Nav Transparent | `2185:375` | State=Default / State=Scrolled (2) — **NEW** |
| Marketing Nav | `116:40` | Light/Dark (2) — legacy, replaced by transparent |
| Marketing Hero / Primary | `329:13` | Dark/Light (2) |
| Marketing Hero Minimal | `296:18` | Light/Warm/Dark (3) |
| Marketing CTA Band | `333:10` | Gradient/Dark (2) |
| Marketing Rich CTA Band | `310:48` | Gradient (1) |
| Marketing Footer | `335:29` | Dark/Light (2) |
| Marketing Logo Strip | `92:2` | Light (1) |
| Marketing Logo Grid | `312:37` | Light/Dark (2) |
| Marketing Feature Showcase Row | `93:34` | Image-Left/Right x Light/Dark (4) |
| Marketing Feature Showcase Step | `143:2` | 4 steps x Dark/Light (8) |
| Marketing Product UI Preview | `95:47` | Dashboard/Card-Small x Dark/Light (4) |
| Marketing Newsletter Capture | `174:16` | Inline/Stacked x Light/Dark (4) |
| Marketing Comparison Table | `199:66` | Light/Dark (2) |
| Marketing Cookie Banner | `182:21` | Light/Dark (2) |
| Marketing Announcement Bar | `183:18` | Warm/Dark/Gradient (3) |
| Marketing Video Embed | `337:15` | Light/Dark (2) |
| Marketing Contact Form | `193:33` | Light/Dark (2) |
| Marketing Testimonial Carousel | `301:26` | Light/Dark (2) |
| Marketing Feature Grid Section | `300:63` | Light/Warm (2) |
| Marketing Trust Badges | `306:59` | Light/Dark (2) |
| Marketing Timeline Steps | `313:69` | Light/Dark (2) |
| Marketing Pricing Section | `314:3` | Light/Dark (2) |
| Marketing Enterprise Pricing | `230:93` | Dark/Light (2) |
| Marketing Feature List Sidebar | `317:49` | Light/Dark (2) |

#### Showcase / Media (3 components)
| Component | Figma ID | Variants |
|-----------|----------|----------|
| Marketing Browser Showcase | `379:3` | Light/Dark (2) |
| Marketing Gradient Text | `97:12` | Light (1) |
| Marketing Skeleton | `367:35` | Card/TextBlock/ListItem x Light/Dark (6) |
| Marketing Modal | `375:53` | Confirm/Video x Light/Dark (4) |

---

## Figma Audit Findings & Gaps

Based on comprehensive audit of the Figma file (12 April 2026):

### What is Complete
- ✅ Full desktop component library: **49 component sets** on Components page (`1:4`)
- ✅ Full mobile component library: **~50 components** at 375px on Mobile Components page (`1082:3134`)
- ✅ Variable system: 38 color variables, 7 spacing variables, 5 radius variables
- ✅ Homepage and Product pages are fully laid out in the validated dark frame set
- ✅ All validated dark pages use the transparent/scrolled nav pattern
- ✅ Legal page layout pattern is consistent across all 7 legal frames
- ✅ Footer structure is consistent as a dark brand block + nav columns + social row

### Gaps to Address During Implementation

| Gap | Impact | Resolution |
|-----|--------|------------|
| **7 legal pages have placeholder text** | Content needed | "Hier kommt der Inhalt..." placeholder — must source real German legal texts before launch |
| **About page body copy is not launch-ready** | High | The validated About frame contains long joke/placeholder prose ("Alienkrieg von 2019"). Use Figma for layout only and source final copy from content docs before implementation. |
| **No Figma text styles defined** | Low | Typography applied inline in Figma; implement from Marketing typography scale in design system docs |
| **No Figma effect styles** | Low | Shadows/effects inline; implement from token system |
| **Variable scopes are ALL_SCOPES** | Figma only | Should be scoped (FRAME_FILL, TEXT_FILL, GAP) but doesn't affect code implementation |
| **Single color mode ("Light")** | Medium | Dark theme colors not expressed as separate Figma mode — dark values must be sourced from `tokens.css` and DS rules doc |
| **Social Icon component incomplete** | Low | Only "Icon=Facebook" variant; LinkedIn/YouTube/Instagram used in footer — implement all 7 in code |
| **Hidden sections exist in final frames** | Medium | Homepage Integrations (`2177:880`) and Product Customer Story (`2177:968`) are hidden in the validated frame set. Exclude them from v1 unless re-enabled in Figma. |
| **Missing pages in Figma** | Medium | No Pricing, Contact, Solutions, Integrations, Security pages designed — implement from v1.1 copy + FIGMA-FRAMES-MASTER-PLAN.md component mapping |
| **Hero Showcase split** | Low | Dark/Light are separate components instead of single component set with Theme variant — unify in code |
| **Nav transparent missing Default variant** | Fixed | Was missing, recreated as `2215:350` during this session |
| **Typography/Spacing pages empty** | Low | Pages `1:2` and `1:3` have 0 children — not blocking, tokens documented in DS rules |
| **8+ deprecated backup pages** | None | File clutter only, doesn't affect implementation |

### Deferred Routes (not part of current build)

| Route group | Status |
|------------|--------|
| `/produkt/*` sub-pages | Deferred |
| `/funktionen` | Deferred |
| `/preise` | Deferred |
| `/kontakt` | Deferred |
| legal / policy routes | Deferred |

---

## Design Token System

### Core Tokens (shared App + Marketing)

```css
/* Brand */
--brand-primary: #BF5347;          /* Workhorse brand color. Buttons, links, focus. */
--brand-primary-light: #CA7168;     /* Hover */
--brand-primary-dark: #A2463C;      /* Active/pressed */
--brand-warm: #E8913A;              /* Decorative ONLY — charts, progress. NEVER status badges */
--brand-gradient: linear-gradient(135deg, #E8913A, #E8655A, #9B59B6);

/* Neutrals (Warm Stone palette) */
--neutral-900: #3E3C3A;  --neutral-800: #494645;  --neutral-700: #605D59;
--neutral-600: #7B7671;  --neutral-500: #B5B0AD;  --neutral-400: #DCDAD8;
--neutral-300: #DDDAD5;  --neutral-200: #EBE9E8;  --neutral-100: #F6F6F6;
--neutral-50: #FBFBFA;   --neutral-0: #FFFFFF;
```

### Marketing Tokens (extension)

```css
/* Surfaces */
--mktg-surface-light: #FFFBF9;              /* Warm off-white page bg */
--mktg-surface-warm: #FFF5F0;               /* Alternating warm section bg */
--mktg-surface-dark: #2C2926;               /* Dark feature sections */
--mktg-surface-dark-elevated: #3A3833;      /* Cards on dark sections */
--mktg-surface-hero: #1E1B18;               /* Hero section (deepest dark) */
--mktg-text-on-dark: #FAFAF9;               /* Primary text on dark */
--mktg-text-on-dark-muted: rgba(250,250,249,0.65);

/* Spacing */
--mktg-space-xs: 8px; --mktg-space-sm: 16px; --mktg-space-md: 24px;
--mktg-space-lg: 40px; --mktg-space-xl: 64px; --mktg-space-2xl: 96px; --mktg-space-3xl: 128px;

/* Radius — all marketing buttons are pill (9999) */
--mktg-radius-sm: 8px; --mktg-radius-md: 12px; --mktg-radius-lg: 16px;
--mktg-radius-xl: 24px; --mktg-radius-full: 9999px;

/* Shadows */
--mktg-shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
--mktg-shadow-md: 0 4px 20px rgba(0,0,0,0.06);
--mktg-shadow-lg: 0 8px 40px rgba(0,0,0,0.08);
--mktg-shadow-hero: 0 20px 60px rgba(0,0,0,0.15);
--mktg-shadow-glow: 0 0 40px rgba(191,83,71,0.12);

/* Motion */
--mktg-duration-fast: 200ms; --mktg-duration-normal: 400ms;
--mktg-duration-slow: 600ms; --mktg-duration-cinematic: 800ms;
--mktg-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--mktg-ease-dramatic: cubic-bezier(0.16, 1, 0.3, 1);

/* Layout */
--mktg-content-max: 1200px; --mktg-page-padding: 120px;
```

### Typography Scale

| Style | Font | Weight | Size | Line Height | Letter Spacing |
|-------|------|--------|------|-------------|----------------|
| Marketing/display-hero | Inter | ExtraBold (800) | 64-80px | 1.05 | -0.03em |
| Marketing/display-lg | Inter | Bold (700) | 48-56px | 1.1 | -0.025em |
| Marketing/display-md | Inter | SemiBold (600) | 36-40px | 1.15 | -0.02em |
| Marketing/display-sm | Inter | SemiBold (600) | 28-32px | 1.2 | -0.015em |
| Marketing/heading-lg | Inter | SemiBold (600) | 24px | 1.3 | -0.01em |
| Marketing/heading-md | Inter | SemiBold (600) | 20px | 1.4 | -0.01em |
| Marketing/heading-sm | Inter | Medium (500) | 16px | 1.5 | 0 |
| Marketing/body-lg | Inter | Regular (400) | 18px | 1.6 | 0 |
| Marketing/body-md | Inter | Regular (400) | 16px | 1.6 | 0 |
| Marketing/body-sm | Inter | Regular (400) | 14px | 1.5 | 0.01em |
| Marketing/label | Inter | Medium (500) | 13px | 1.3 | 0.06em (uppercase) |
| Marketing/mono | JetBrains Mono | Regular (400) | 16px | 1.5 | 0 |

### Critical Design Rules

1. **Gradient usage:** Hero CTA (1/page max), section dividers (2px, max 2/page), accent underlines. **NEVER** on standard buttons, card backgrounds, body text.
2. **Button shape:** ALL marketing buttons = pill (`border-radius: 9999px`). App = `8px`.
3. **Card radius:** Marketing = `12px` (`mktg-radius-md`). App = `10px`.
4. **`brand-warm` (#E8913A):** Decorative only. **NEVER** in status badges — use `semantic-warning` (#D97706).
5. **Surface alternation:** `dark hero -> light -> warm -> light -> dark -> light -> CTA band (gradient) -> dark footer`. Never stack same-surface sections.
6. **Dark mode text:** Darkest dark = `#3A3833`. Lightest text = `#EDE8E2`. Brand primary lightens to `#DDA49E` in dark.
7. **Icons:** Lucide only. 24x24 default, stroke-based, `neutral/600` default color.

---

## Phase 1: Scaffolding & Design System Foundation (3 days)

### 1.1 Project Init
- `pnpm create next-app@latest marketing-site --typescript --app --tailwind --eslint`
- Install: `framer-motion@12`, `lucide-react`, `@lottiefiles/dotlottie-react`, `next-intl`, `schema-dts`
- Configure `tsconfig.json` with `@/` path alias

### 1.2 Port Design Tokens
- Copy `tokens.css` from `hubspot-cms/old_tries/.../styles/tokens.css`
- **Remove:** `@import url(...)` for Google Fonts, `@font-face` declarations, body/a/img reset rules
- **Keep:** All CSS custom properties, responsive `@media` overrides, typography scale, gradient utilities
- Register in Tailwind v4 via `@theme` in `globals.css`

### 1.3 Theme System

```css
/* dark-theme.css — DEFAULT */
:root, [data-theme="dark"] {
  --surface-primary: var(--mktg-surface-hero);           /* #1E1B18 */
  --surface-secondary: var(--mktg-surface-dark);          /* #2C2926 */
  --surface-elevated: var(--mktg-surface-dark-elevated);  /* #3A3833 */
  --text-primary: var(--mktg-text-on-dark);               /* #FAFAF9 */
  --text-muted: var(--mktg-text-on-dark-muted);           /* rgba(250,250,249,0.65) */
  --border-default: rgba(250, 250, 249, 0.1);
}

/* light-theme.css */
[data-theme="light"] {
  --surface-primary: var(--mktg-surface-light);   /* #FFFBF9 */
  --surface-secondary: var(--neutral-50);          /* #FBFBFA */
  --surface-elevated: var(--neutral-0);            /* #FFFFFF */
  --text-primary: var(--neutral-900);              /* #3E3C3A */
  --text-muted: var(--neutral-600);                /* #7B7671 */
  --border-default: rgba(62, 60, 58, 0.08);
}
```

**FOUC prevention:** Inline `<script>` in `<head>`:
```js
(function(){var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t)})()
```

### 1.4 Motion & Animation System

#### 1.4.1 Framer Motion Configuration

`lib/motion.ts` — Centralized presets consuming design tokens:

```typescript
// ── Transition presets (mapped to --mktg-duration-* and --mktg-ease-*) ──
export const transitions = {
  fast:     { duration: 0.2, ease: [0.4, 0, 0.2, 1] },     // --mktg-duration-fast + --mktg-ease-default
  normal:   { duration: 0.4, ease: [0.4, 0, 0.2, 1] },     // --mktg-duration-normal
  slow:     { duration: 0.6, ease: [0.0, 0, 0.2, 1] },     // --mktg-duration-slow + --mktg-ease-enter
  dramatic: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },    // --mktg-duration-cinematic + --mktg-ease-dramatic
  spring:   { type: 'spring', stiffness: 260, damping: 20 }, // For bouncy micro-interactions
};

// ── Entrance animation variants ──
export const variants = {
  fadeUp:     { hidden: { opacity: 0, y: 24 },  visible: { opacity: 1, y: 0 } },
  fadeDown:   { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
  fadeIn:     { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  scaleIn:    { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  scaleUp:    { hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } },
  slideLeft:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
  // Stagger container — wraps children with sequential entrance
  stagger:    { visible: { transition: { staggerChildren: 0.08 } } },
  staggerSlow:{ visible: { transition: { staggerChildren: 0.15 } } },
  // Chart bars — sequential height animation
  barGrow: {
    hidden: { scaleY: 0, originY: 1 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: { delay: i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  },
};

// ── Scroll-triggered animation defaults ──
export const scrollTrigger = {
  once: true,           // Animate only on first scroll into view
  amount: 0.3,          // Trigger when 30% visible
  margin: '-80px',      // Start slightly before entering viewport
};
```

#### 1.4.2 Motion Component Library (`components/motion/`)

| Component | File | Purpose | Framer Motion API |
|-----------|------|---------|-------------------|
| `ScrollReveal` | `ScrollReveal.tsx` | Generic scroll-triggered entrance wrapper | `useInView` + `motion.div` with `variants` prop |
| `StaggerChildren` | `StaggerChildren.tsx` | Container that staggers child entrances | `motion.div` with `stagger` variant + child `fadeUp` |
| `CountUp` | `CountUp.tsx` | Animated number counting (stats/metrics) | `useMotionValue` + `useTransform` + `animate()` |
| `ParallaxSection` | `ParallaxSection.tsx` | Scroll-linked parallax for backgrounds/images | `useScroll` + `useTransform` for `y` offset |
| `PageTransition` | `PageTransition.tsx` | Page-level enter/exit animations | `AnimatePresence` + `motion.div` wrapping `{children}` |
| `TypewriterText` | `TypewriterText.tsx` | Character-by-character text reveal | `motion.span` per character with stagger |
| `GradientShift` | `GradientShift.tsx` | Animated gradient background shift | CSS `background-position` animation via `motion.div` |

#### 1.4.3 ScrollReveal Implementation

```typescript
// components/motion/ScrollReveal.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { transitions, scrollTrigger } from '@/lib/motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight' | 'scaleUp';
  transition?: keyof typeof transitions;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children, variant = 'fadeUp', transition = 'dramatic', delay = 0, className
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: scrollTrigger.once, amount: scrollTrigger.amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ ...transitions[transition], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

#### 1.4.4 CountUp Implementation

```typescript
// components/motion/CountUp.tsx
'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion';

interface CountUpProps {
  target: number;
  prefix?: string;   // e.g., "+" or "-"
  suffix?: string;   // e.g., "%", "x", " EUR"
  duration?: number;  // seconds
  decimals?: number;
  className?: string;
}

export function CountUp({ target, prefix = '', suffix = '', duration = 2, decimals = 0, className }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, target, count, duration]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
```

#### 1.4.5 Lottie Animation Integration

**Files:** `design/animations/StepperBar.lottie` (28KB), `dark_stepper_bar.json` (231KB)

```typescript
// components/motion/LottiePlayer.tsx
'use client';
import dynamic from 'next/dynamic';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Lazy-load Lottie player — SSR disabled (canvas-based)
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then(mod => mod.DotLottieReact),
  { ssr: false }
);

interface LottiePlayerProps {
  src: string;           // Path to .lottie or .json file
  activeStep?: number;   // 0-3 for stepper bar sync
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

export function LottiePlayer({ src, activeStep, autoplay = false, loop = false, className }: LottiePlayerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [dotLottie, setDotLottie] = useState<any>(null);

  // Sync stepper bar to active step (each step = 25% of animation)
  useEffect(() => {
    if (dotLottie && activeStep !== undefined) {
      const totalFrames = dotLottie.totalFrames;
      const targetFrame = (activeStep / 4) * totalFrames;
      dotLottie.setFrame(targetFrame);
    }
  }, [activeStep, dotLottie]);

  // Play/pause based on visibility
  useEffect(() => {
    if (dotLottie && autoplay) {
      isInView ? dotLottie.play() : dotLottie.pause();
    }
  }, [isInView, dotLottie, autoplay]);

  return (
    <div ref={ref} className={className}>
      <DotLottieReact
        src={src}
        autoplay={autoplay && isInView}
        loop={loop}
        dotLottieRefCallback={setDotLottie}
      />
    </div>
  );
}
```

#### 1.4.6 Per-Component Animation Spec

| Component | Animation Type | Trigger | Details |
|-----------|---------------|---------|---------|
| **HeroShowcase** | Staggered entrance | Page load | Eyebrow (0ms) -> H1 (80ms) -> body (160ms) -> CTAs (240ms) -> browser mockup scaleIn (400ms) |
| **HeroShowcase chart bars** | Sequential scaleY | Page load + delay | 20 bars, 30ms stagger each, `originY: bottom`, dramatic ease |
| **HeroShowcase stats** | CountUp | In viewport | 4 stat numbers animate from 0 to target, 2s duration |
| **HeroShowcase feature cards** | slideLeft / slideRight | Page load + delay | Left card slides in from left, right card from right |
| **AnnouncementBar** | fadeDown + height collapse | Dismiss click | `AnimatePresence` for exit: fade out + height to 0 |
| **Nav scroll state** | backdrop-blur transition | Scroll position | CSS transition on `background-color` and `backdrop-filter` (200ms) |
| **SectionHeader** | fadeUp | Scroll into view | Eyebrow first, then headline, then body |
| **FeatureShowcaseStep** | fadeUp + scaleIn | Scroll into view | Text fades up, screenshot scales in with 200ms delay |
| **FeatureStepper** | Lottie sync | Step navigation | StepperBar.lottie synced to active step (0-3), scrubs to 25% per step |
| **FeatureCard** | stagger fadeUp | Scroll into view | Cards stagger in with 80ms delay between each |
| **MetricCard** | fadeUp + CountUp | Scroll into view | Card fades up, then number counts up from 0 |
| **StatCounter** | CountUp | Scroll into view | Number animates from 0, suffix appears after count completes |
| **TestimonialCarousel** | slideLeft / slideRight | Carousel navigation | `AnimatePresence` with directional slide, 400ms |
| **PricingCard** | stagger scaleIn | Scroll into view | Cards scale in with 100ms stagger, recommended card gets extra glow pulse |
| **FAQItem** | height animation | Click/keyboard | `AnimatePresence` for answer reveal: `height: 0 -> auto`, 300ms dramatic ease |
| **ComparisonTable** | fadeUp | Scroll into view | Rows stagger in with 40ms delay |
| **CTABand / RichCTABand** | fadeUp + gradient shift | Scroll into view | Content fades up, background gradient slowly shifts position |
| **TimelineSteps** | scroll-linked reveal | Scroll position | Vertical line "draws" as user scrolls, events fade in sequentially |
| **TeamCard** | stagger scaleIn | Scroll into view | Cards scale in with 120ms stagger |
| **BrowserShowcase** | scaleUp | Scroll into view | Browser frame scales from 0.9 to 1.0 with shadow expansion |
| **LogoStrip** | infinite marquee | Always | CSS `@keyframes` infinite horizontal scroll, pauses on hover |
| **Footer** | fadeUp | Scroll into view | Staggered column entrance |
| **CookieBanner** | slideUp from bottom | Timer (2s delay) | Slides up from bottom of viewport |
| **GradientText** | ambient glow pulse | Always (subtle) | Radial gradient glow behind text pulses opacity 0.5-1.0 over 4s |
| **VideoEmbed** | scaleIn | Scroll into view | Play button pulses, frame scales in |
| **ContactForm** | stagger fadeUp | Page load | Form fields stagger in top to bottom |

#### 1.4.7 `prefers-reduced-motion` Fallback

All motion components must respect the user's system preference:

```typescript
// lib/motion.ts — add reduced motion support
import { useReducedMotion } from 'framer-motion';

export const reducedMotionVariants = {
  fadeUp: { hidden: { opacity: 0 }, visible: { opacity: 1 } },    // No Y transform
  scaleIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },   // No scale
  slideLeft: { hidden: { opacity: 0 }, visible: { opacity: 1 } },  // No X transform
  slideRight: { hidden: { opacity: 0 }, visible: { opacity: 1 } }, // No X transform
};
```

**Rules for reduced motion:**
- All `transform` animations → opacity-only fade
- Parallax sections → static (no scroll offset)
- CountUp → show final number immediately
- Marquee → static row of logos (no scroll)
- Lottie StepperBar → show final frame of active step
- Chart bar growth → bars appear at full height
- `AnimatePresence` exit → instant removal (no exit animation)
- Page transitions → instant swap

### 1.5 Root Layout Shell (`app/layout.tsx`)
- `<html lang="de" data-theme="dark">` + inline theme script
- `next/font` for Inter (variable) + JetBrains Mono
- Skip-to-content link
- `<AnnouncementBar />` (conditionally shown, dismissible via localStorage)
- `<Nav />` (transparent default, frosted glass on scroll — **3-column layout**)
- `<main id="main">{children}</main>`
- `<Footer />`
- `<CookieBanner />` (DSGVO-required)

### 1.6 Nav Component (NEW — Transparent Design)

**Based on Figma component `2185:375` — Marketing Nav Transparent**

**Structure:** Three-column horizontal layout with SPACE_BETWEEN:
```
[Logo + "Consultry" (HUG)] | [NavLinks centered (FILL)] | ["Demo anfragen ->" pill (HUG)]
```

**States:**
- **Default (State=Default):** Fully transparent background, no border. CTA = outline-only pill (`border: 1px solid rgba(255,255,255,0.2)`)
- **Scrolled (State=Scrolled):** `background: rgba(30,27,24,0.85)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(255,255,255,0.08)`. CTA = frosted glass pill (`background: rgba(255,255,255,0.1)`, `backdrop-filter: blur(12px)`)

**Nav links:** Produkt, Funktionen, Preise, Unternehmen (15px Regular, `#D9D4CF`)
**Height:** 64px, padding 0 40px
**Mobile (<768px):** Hamburger -> full-height slide-down menu

### 1.7 Footer Component

**Layout:** data-driven dark footer (from validated Figma footers `2177:884`, `2177:971`, `2177:2361`):
- Brand column: Logo + "Consultry" + tagline + "DSGVO KONFORM" badge
- Nav columns on the right: Plattform/Produkt, Unternehmen, Rechtliches
- Bottom row: copyright + 3 social links

Important:
- No newsletter block is present in the validated dark frames
- The exact first nav column differs slightly by page; implement footer links via content data rather than hardcoding a single static variant

---

## Phase 2: Homepage (4 days)

**Figma frame:** `2177:866` — Homepage / Desktop — Dark (1440 x 6344px)
**Content source:** v1.1 Copy doc, Seite 1

### Section Implementation Order

#### 2.1 AnnouncementBar
- Text: "Exklusiver Fruehzugang fuer DACH-Beratungen — Jetzt Platz sichern ->"
- Gradient theme variant (orange -> coral -> purple)
- Dismissible (localStorage persists dismissal)
- **Stacks above nav in auto-layout flow** (not absolute positioned)

#### 2.2 HeroShowcase (most complex component)
**Port from:** `hubspot-cms/old_tries/.../HeroShowcase/index.jsx`

Content (from Figma `2177:869` + v1.1 copy):
- Eyebrow: "DAS KI-NATIVE BERATUNGS-CRM"
- H1: "Vom Signal zum Projekt — in einer Plattform."
- Body: "Consultry ersetzt Salesforce, Excel und LinkedIn-Recherche durch einen KI-nativen Workspace — gebaut fuer DACH-Beratungen."
- Primary CTA: "Fruehzugang sichern"
- Secondary CTA: "Demo ansehen" (ghost button)
- Centerpiece: product screenshot card (`520 x 380`) with ambient glow behind the hero
- Left card: "Ein Workspace. Null Silos."
- Right card: "KI, die Beratung versteht"
- Tagline: "Eine Plattform. Vier Workflows. Null Datensilos."

**Motion:**
- Hero content: staggered fadeUp entrance (eyebrow -> headline -> body -> CTAs)
- Product screenshot: scaleIn with delay
- Feature cards: slideLeft / slideRight

#### 2.3 Product Deep-Dive (SectionHeader + 4 FeatureShowcaseSteps)
**Figma:** `2177:872` — Section — Product Deep-Dive (1440 x 3183px)

- Section overline: "SO FUNKTIONIERT CONSULTRY"
- H2: "Vom Signal zum Projekt — nahtlos"
- 4 steps with FeatureStepper + Lottie StepperBar:
  1. **Erkennen** — Marktsignale erkennen, bevor der Wettbewerb reagiert
  2. **Matchen** — Das perfekte Team zusammengestellt in Sekunden
  3. **Gewinnen** — Echtzeit-Einblick in jedes Projekt
  4. **Liefern** — Wissen bewahren. Wissen nutzen. Wissen monetarisieren.
- Each step: headline + body + product UI screenshot mockup
- Motion: Steps reveal on scroll, stepper bar progresses, screenshots scale in

#### 2.4 Metrics Section
**Figma:** `2177:878` — Section — Metrics (1440 x 765px)

- Overline: "Beratungen, die Consultry nutzen, berichten"
- Single large metric surface containing 4 inset stats: 70-80%, 2x, 40-55%, 80-90%
- Motion: section fadeUp on scroll; CountUp optional, but only for the 4 visible numeric values inside the card

#### 2.5 RichCTABand
**Figma:** `2177:883` (1440 x 678px)

- H2: "Bereit, Ihre Beratung auf das naechste Level zu bringen?"
- Supporting line: "Sichern Sie sich fruehen Zugang zum ersten KI-nativen CRM fuer DACH-Beratungen."
- Pill email capture form with placeholder "Ihre geschaeftliche E-Mail-Adresse"
- Submit CTA: "Fruehzugang sichern"
- Trust row: "Keine Kreditkarte noetig · Exklusiv fuer DACH-Beratungen · Begrenzte Plaetze"
- Dark gradient background with ambient glow effect

#### 2.6 Footer
**Figma:** `2177:884` (1440 x 516px)

---

## Phase 3: Product Page (3 days)

### 3.1 Product Overview (`app/produkt/page.tsx`)
**Figma frame:** `2177:932` — Product / Desktop — Dark (1440 x 6554px)

Sections: Nav -> ProductPageHero/Aircover -> Video -> 3 FeatureShowcaseRows -> FeatureListSidebar -> FAQ -> CTABand -> Footer

### 3.2 Product Sub-pages (4 pages)

**Deferred in v2.3.** Keep this as reference only; do not implement these routes now.

Create `ProductSubpageTemplate.tsx` accepting content props:
```typescript
interface ProductSubpageContent {
  hero: { overline: string; h1: string; body: string; };
  valueProps: FeatureCardProps[];
  featureRows: FeatureShowcaseRowProps[];
  browserShowcase: BrowserShowcaseProps;
  stats: StatCounterProps[];
}
```

| Route | Product |
|-------|---------|
| `/produkt/market-intelligence` | Signal-Erkennung, Marktanalyse, Engagement-Briefs |
| `/produkt/matching-staffing` | Berater-Matching, Team-Komposition, Verfuegbarkeit |
| `/produkt/deal-execution` | AI Canvas, Angebotserstellung, Vertragsmanagement |
| `/produkt/knowledge-engine` | Wissensmanagement, Projekthistorie, Best Practices |

---

## Deferred Scope Reference

The sections below remain in the document as future reference only. They are not part of the current 3-page delivery.

## Phase 4: Funktionen + Pricing (deferred)

### 4.1 Funktionen (`app/funktionen/page.tsx`)
Simple page: Text hero -> 4 FeatureCards -> CTABand -> Footer

### 4.2 Pricing (`app/preise/page.tsx`)
Sections: HeroMinimal -> ToggleSwitch -> 3 PricingCards -> EnterprisePricing (gradient border + 3-layer glow) -> ComparisonTable -> FAQItems -> TrustBadges -> CTABand -> Footer

**Interactive elements:**
- ToggleSwitch: monthly/annual with price recalculation
- FAQItem: accordion with AnimatePresence height animation
- ComparisonTable: responsive with sticky first column on mobile
- PricingCard "Recommended": highlighted border, "Empfohlen" badge
- EnterprisePricing: gradient border (2.5px stroke, `GRADIENT_LINEAR` orange->coral->purple), 3-layer `DROP_SHADOW` glow

---

## Phase 5: About + Contact (partially deferred)

### 5.1 About (`app/unternehmen/page.tsx`)
**Figma frame:** `2177:1970` — About / Desktop — Dark (1440 x 3965px)

Sections: Nav -> HeroMinimal ("Wir bauen das Betriebssystem fuer moderne Beratungshaeuser") -> TeamGrid (3 cards: Julian Weber, Caspar Hartel, Paul Hannemann) -> long-form story/proof section -> CTABand -> Footer

Important: The current long story block in Figma is not shippable source copy. Use the frame for layout, spacing, and hierarchy only, then replace the placeholder/joke prose with approved About content before implementation.

### 5.2 Contact (`app/kontakt/page.tsx`)
**Deferred in v2.3.** Do not implement this route in the current build.

Layout: HeroMinimal -> ContactForm + StatCounters sidebar -> TrustBadges -> FAQItems -> CTABand -> Footer

---

## Phase 6: Legal Pages (deferred)

### 7 Legal Pages (shared template)

Create `LegalPageTemplate.tsx` — consistent layout: Nav -> title + last-updated -> prose content -> Footer

| Route | Frame | Content |
|-------|-------|---------|
| `/datenschutz` | `2177:2033` | Datenschutzerklaerung |
| `/nutzungsbedingungen` | `2177:2110` | Allgemeine Nutzungsbedingungen |
| `/impressum` | `2177:2190` | Impressum |
| `/copyright` | `2177:2267` | Copyright |
| `/markenrecht` | `2177:2338` | Trademark |
| `/cookie-erklaerung` | `2177:2409` | Cookie-Erklaerung |
| `/cookie-einstellungen` | `2177:2486` | Cookie-Einstellungen |

---

## Phase 7: SEO, GEO & AEO Infrastructure (2 days)

### 7.1 Per-Page Metadata

Each page exports `generateMetadata()` using helpers from `lib/seo.ts`:

| Page | Title | Focus Keywords |
|------|-------|---------------|
| Homepage | Consultry — Das AI-native operative System fuer Beratungsunternehmen \| DACH | AI operatives System Beratung, Software fuer Beratungsunternehmen |
| Produkt | Consultry Plattform — AI-gestuetzter Beratungs-Lifecycle | Consulting Plattform DACH, KI Beratungsmanagement |
| Unternehmen | Ueber Consultry — Mission, Team und Vision | Consultry Team, Beratungsbranche Innovation |

Each page also includes:
- `openGraph`: locale `de_DE`, type `website`, pre-rendered image from `/public/og/`
- `alternates.canonical`: absolute URL
- `alternates.languages`: deferred until i18n is reintroduced

### 7.2 JSON-LD Structured Data

| Page | Schema Types |
|------|-------------|
| Homepage | `Organization` + `WebSite` (with `SearchAction`) + `SoftwareApplication` |
| Product page | `SoftwareApplication` with features list |
| About | `Organization` (foundingDate, founders, address: Berlin) |

### 7.3 GEO Optimization Checklist
- Strict H1-H6 hierarchy on every page (no heading level skips)
- Named entities prominently placed: DACH, DSGVO, DATEV, SAP, Berlin, EU
- FAQ sections as direct Q&A pairs (parseable by AI engines)
- Long-tail German keywords in H2/H3 subheadings
- `Speakable` structured data on key paragraphs
- Internal linking between related product pages
- Breadcrumb navigation with `BreadcrumbList` schema

### 7.4 Technical SEO Files
- `app/sitemap.ts`: 3 launch pages with `lastModified`, `changeFrequency`, `priority`
- `app/robots.ts`: Allow all, reference sitemap URL
- OpenGraph images: Pre-rendered per page in `/public/og/` (1200x630px)

---

## Phase 8: Full Responsive Implementation (3 days)

**Figma reference:** Mobile Components page (`1082:3134`) — ~50 mobile-responsive components at 375px width

### 8.1 Responsive Breakpoints & Token Overrides

From `tokens.css` responsive `@media` overrides:

| Breakpoint | Token Override | Page Padding | Grid | Typography |
|------------|---------------|-------------|------|------------|
| **Desktop** >1280px | Default values | `--mktg-page-padding: 120px` | 3-4 col, `max-width: 1200px` | Full scale |
| **Tablet** 768-1279px | `--mktg-space-3xl: 120px`, `--mktg-page-padding: 32px` | 32px | 2 col | `clamp()` scales down |
| **Mobile** <768px | `--mktg-space-xl: 48px`, `--mktg-space-2xl: 64px`, `--mktg-space-3xl: 80px`, `--mktg-page-padding: 16px` | 16px | 1 col | `clamp()` minimum values |

**Typography responsive scaling** (from `tokens.css`):
```css
.display-hero { font-size: clamp(40px, 5vw, 80px); }   /* 80px desktop -> 40px mobile */
.display-lg   { font-size: clamp(36px, 4vw, 56px); }   /* 56px -> 36px */
.display-md   { font-size: clamp(28px, 3vw, 40px); }   /* 40px -> 28px */
.display-sm   { font-size: clamp(24px, 2.5vw, 32px); }  /* 32px -> 24px */
h1 { font-size: clamp(36px, 4vw, 56px); }
h2 { font-size: clamp(28px, 3vw, 40px); }
```

### 8.2 Per-Component Responsive Behavior

#### Navigation
| Viewport | Behavior |
|----------|----------|
| Desktop (>768px) | 3-column: Logo \| NavLinks (centered) \| CTA pill. Full horizontal links. |
| Mobile (<768px) | Logo + hamburger icon. NavLinks hidden. CTA hidden. |
| Mobile menu | Full-height slide-down overlay: `AnimatePresence` + `motion.div` with `slideDown` variant. Links stacked vertically, large touch targets (48px min). CTA at bottom. Close button top-right. |

#### HeroShowcase
| Viewport | Layout |
|----------|--------|
| Desktop | Side-by-side: [Left card] [Browser mockup (center, 60%)] [Right card]. Stats row below. |
| Tablet | Browser mockup full-width. Feature cards below in 2-col row. Stats in 2x2 grid. |
| Mobile (375px) | Stacked: H1 -> body -> CTAs -> browser mockup (full-width, horizontal scroll for overflow) -> feature cards (stacked) -> stats (2x2). Browser mockup gets `overflow-x: auto` with snap scrolling. |

#### Feature Showcase Steps (Product Deep-Dive)
| Viewport | Layout |
|----------|--------|
| Desktop | Side-by-side: text (40%) + screenshot (60%), alternating left/right. Stepper bar horizontal. |
| Tablet | Side-by-side maintained, narrower. Screenshot scales to 55%. |
| Mobile | Stacked: step number + title + body above, screenshot below (full-width). Stepper bar becomes vertical progress indicator. Lottie animation hidden on mobile (static step indicator instead). |

#### Feature Showcase Row
| Viewport | Layout |
|----------|--------|
| Desktop | Two-column: image-left/text-right or text-left/image-right (alternating). |
| Tablet | Same layout, compressed. |
| Mobile | Stacked: image always above text (regardless of desktop order). Image full-width with `border-radius: 12px`. |

#### Feature Cards / Feature Grid
| Viewport | Grid |
|----------|------|
| Desktop | 3-4 column grid, `gap: 24px` |
| Tablet | 2 column grid |
| Mobile | Single column stack |

#### Pricing Cards
| Viewport | Layout |
|----------|--------|
| Desktop | 3-column horizontal: Standard \| Recommended (elevated) \| Enterprise |
| Tablet | 2 + 1: first two side-by-side, Enterprise below full-width |
| Mobile | Single column stack: Recommended first (reordered via `order: -1`), then Standard, then Enterprise |

#### Enterprise Pricing Section
| Viewport | Layout |
|----------|--------|
| Desktop | Starter (1/3 width, FIXED) + Enterprise (2/3 width, FILL). Gradient border + 3-layer glow. |
| Tablet | Same proportions, narrower. |
| Mobile | Stacked: Starter full-width above, Enterprise full-width below. Both get `border-radius: 12px`. |

#### Comparison Table
| Viewport | Behavior |
|----------|----------|
| Desktop | Full table, all columns visible |
| Tablet | Horizontal scroll with `position: sticky; left: 0` on first column (feature names). Scroll indicator shadow on right edge. |
| Mobile | Same sticky-column scroll behavior. First column = 140px fixed. `font-size: 14px`. Touch-friendly row height (48px min). |

#### FAQ Items
| Viewport | Behavior |
|----------|----------|
| Desktop | Max-width 800px centered. Click/keyboard to expand. |
| Mobile | Full-width minus padding. Larger touch target for trigger (min 48px). `font-size: 16px` body. |

#### Footer
| Viewport | Layout |
|----------|--------|
| Desktop | 4-column: Brand (50%) + 3 nav columns (50%) |
| Tablet | 2x2 grid: Brand top-left, nav columns wrap |
| Mobile | Single column stack: Brand -> Plattform -> Unternehmen -> Rechtliches -> social icons -> copyright |

#### Testimonial Carousel
| Viewport | Behavior |
|----------|----------|
| Desktop | 1 card visible, prev/next arrows on sides |
| Tablet | Same, arrows closer to card |
| Mobile | Swipe gesture (touch), dots indicator below. No arrows. `overflow: hidden` with `scroll-snap-type: x mandatory`. |

#### Team Cards
| Viewport | Grid |
|----------|------|
| Desktop | 3-column row |
| Tablet | 3-column maintained (smaller cards) |
| Mobile | Single column stack, centered |

#### Contact Form
| Viewport | Layout |
|----------|--------|
| Desktop | 2-column: Form (60%) + Stat counters sidebar (40%) |
| Tablet | Same, compressed |
| Mobile | Stacked: Form full-width above, stat counters horizontal scrolling row below |

#### Browser Showcase
| Viewport | Behavior |
|----------|----------|
| Desktop | Chrome frame at ~80% width, centered, with shadow |
| Mobile | Chrome frame full-width, `border-radius: 8px`, traffic lights smaller (8px). No horizontal padding. |

#### Video Embed
| Viewport | Behavior |
|----------|----------|
| Desktop | 16:9 aspect ratio at max-width 960px, centered |
| Mobile | Full-width, 16:9 maintained via `aspect-ratio: 16/9`. Custom play button scales down. |

#### Metric Cards
| Viewport | Grid |
|----------|------|
| Desktop | 4-column horizontal row |
| Tablet | 2x2 grid |
| Mobile | 2x2 grid maintained (compact) |

#### Logo Strip
| Viewport | Behavior |
|----------|----------|
| Desktop | Infinite marquee, ~6-8 logos visible |
| Mobile | Same marquee, fewer logos visible at once, slower speed |

#### Announcement Bar
| Viewport | Behavior |
|----------|----------|
| Desktop | Single row: text + CTA link + dismiss X. `font-size: 14px`. |
| Mobile | Text wraps to 2 lines. Dismiss X stays visible. `font-size: 13px`. |

#### Cookie Banner
| Viewport | Behavior |
|----------|----------|
| Desktop | Fixed bottom bar: text (left) + Accept/Decline buttons (right) |
| Mobile | Full-width bottom sheet: text above, buttons below (stacked, full-width). |

#### Legal Pages
| Viewport | Behavior |
|----------|----------|
| Desktop | Prose content max-width 720px centered, `padding: 96px 120px` |
| Mobile | Full-width minus 16px padding, `padding: 48px 16px`. Headings scale down. |

### 8.3 Mobile-First CSS Strategy

```css
/* Tailwind v4 responsive approach — mobile-first */

/* Base = mobile (375px) */
.hero-grid { @apply grid grid-cols-1 gap-6; }
.feature-grid { @apply grid grid-cols-1 gap-6; }
.pricing-grid { @apply grid grid-cols-1 gap-8; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .hero-grid { @apply grid-cols-1; }  /* Still stacked on tablet for hero */
  .feature-grid { @apply grid-cols-2 gap-8; }
  .pricing-grid { @apply grid-cols-2 gap-8; }
}

/* Desktop (1280px+) */
@media (min-width: 1280px) {
  .hero-grid { @apply grid-cols-[1fr_2fr_1fr]; }  /* 3-col hero with browser center */
  .feature-grid { @apply grid-cols-3 gap-8; }
  .pricing-grid { @apply grid-cols-3 gap-8; }
}
```

### 8.4 Responsive Motion Adjustments

| Viewport | Motion Change |
|----------|--------------|
| Desktop | Full animations: parallax, stagger, countUp, chart bar growth, Lottie |
| Tablet | Reduce parallax offset by 50%. Keep all other animations. |
| Mobile | Disable parallax entirely. Reduce stagger delay to 40ms. Simpler chart animation (fade-in instead of bar growth). Hide Lottie stepper (show static indicator). Disable marquee infinite scroll on `prefers-reduced-motion`. |

### 8.5 Touch & Interaction Patterns (Mobile)

- **Minimum touch target:** 48x48px (WCAG 2.5.5)
- **Carousel:** Swipe gestures with `scroll-snap-type: x mandatory`
- **FAQ:** Full-row tap target for expand/collapse
- **Nav menu:** Tap outside to close, swipe down to close
- **Comparison table:** Horizontal swipe with momentum scrolling (`-webkit-overflow-scrolling: touch`)
- **Form fields:** `font-size: 16px` minimum to prevent iOS zoom on focus

### 8.6 Testing Viewports

| Viewport | Device | Width | Purpose |
|----------|--------|-------|---------|
| Mobile S | iPhone SE | 375px | Minimum supported width |
| Mobile L | iPhone 14 Pro | 393px | Most common mobile |
| Tablet | iPad | 768px | Tablet breakpoint |
| Tablet L | iPad Pro | 1024px | Large tablet |
| Desktop | Standard | 1440px | Design target (Figma) |
| Desktop XL | Ultrawide | 1920px | Max-width cap verification |

---

## Phase 9: Accessibility & Performance (2 days)

### 9.1 Accessibility (WCAG 2.1 AA)
- Skip-to-content link (`<a href="#main" class="sr-only focus:not-sr-only">`)
- Focus visible: `outline: 2px solid var(--brand-primary)` with 3px offset
- Color contrast: dark theme #FAFAF9 on #1E1B18 = 15.3:1 (exceeds AAA)
- `prefers-reduced-motion`: all transforms -> opacity-only (see Phase 1.4.7)
- Semantic HTML with ARIA landmarks: `<nav>`, `<main>`, `<section>`, `<footer>`
- Forms: `<label>` elements, `aria-describedby` for errors, `aria-required`, `aria-invalid`
- FAQ accordion: `aria-expanded`, `aria-controls`, `role="region"`, Enter/Space toggle
- Carousel: `role="tablist"` for dots, `aria-live="polite"` for current slide
- Images: descriptive `alt` text; decorative images `aria-hidden="true"` + `role="presentation"`
- Keyboard navigation: all interactive elements reachable via Tab, visible focus ring
- Color: no information conveyed by color alone (icons + text for all states)
- Language: `lang="de"` on `<html>`, inline `lang="en"` on English terms

### 9.2 Performance
- **Static generation** for homepage, product, and about (no runtime data fetching)
- `next/image` with AVIF/WebP, `blur` placeholders, explicit `width`/`height` (no CLS)
- Heavy components lazy-loaded:
  - `dynamic(() => import('./VideoEmbed'), { ssr: false })`
  - `dynamic(() => import('./LottiePlayer'), { ssr: false })`
  - `dynamic(() => import('./ComparisonTable'), { ssr: false })` (large DOM)
- Framer Motion: tree-shake unused features with `import { motion } from 'framer-motion'` (not `*`)
- Font subsetting: Inter Variable (latin + latin-ext only, ~100KB)
- CSS: Tailwind v4 automatic tree-shaking, no unused styles shipped
- **Targets:** LCP <2.5s, CLS <0.1, INP <200ms, FID <100ms, Lighthouse Performance >90, Total JS <150KB initial

### 9.3 Light Theme Toggle
- Theme toggle in Nav (sun/moon icon from lucide-react)
- `localStorage` persistence + `prefers-color-scheme` system detection
- All components use semantic `var(--surface-*)` / `var(--text-*)` tokens — zero component changes needed
- Verify contrast ratios in light theme: neutral-900 on FFFBF9 = 13.6:1 (exceeds AAA)

---

## Phase 10: i18n — English Support (2 days)

- `next-intl` middleware with `defaultLocale: 'de'`, `locales: ['de', 'en']`
- German: no URL prefix (SEO-optimal for DACH market)
- English: `/en/` prefix
- Translate all content files from `lib/content/de/` to `lib/content/en/`
- Locale switcher in Nav (DE | EN)
- `hreflang` tags on all pages
- German typography rules (`hyphens: auto`) only applied when `lang="de"`

---

## Component Reuse Map

Components adaptable from `hubspot-cms/old_tries/consultry-react-theme/src/consultry-theme/`:

| Component | Source File | Adaptation |
|-----------|-----------|------------|
| HeroShowcase | `modules/HeroShowcase/index.jsx` | Remove HubSpot fields, add Framer Motion |
| Nav | **NEW DESIGN** — build from scratch | 3-column transparent layout per Figma `2185:375` |
| Footer | `modules/Footer/index.jsx` | Adapt to 4-column dark variant |
| Button | `modules/Button/index.jsx` | Convert to Tailwind + CSS vars |
| Badge | `modules/Badge/index.jsx` | Minimal adaptation |
| SectionHeader | `modules/SectionHeader/index.jsx` | Remove HubSpot fields |
| FAQ | `modules/FAQ/index.jsx` | Add AnimatePresence |
| PricingTable | `modules/PricingTable/index.jsx` | Restructure to card-based |
| ContactForm | `modules/ContactForm/index.jsx` | Add validation, remove HubSpot |
| ComparisonTable | `modules/ComparisonTable/index.jsx` | Add responsive sticky column |
| TeamGrid | `modules/TeamGrid/index.jsx` | Minimal adaptation |
| TrustBadges | `modules/TrustBadges/index.jsx` | Minimal adaptation |
| TimelineSteps | `modules/TimelineSteps/index.jsx` | Add scroll-linked animation |
| CTABand | `modules/CTABand/index.jsx` | Minimal adaptation |
| RichCTABand | `modules/RichCTABand/index.jsx` | Add gradient glow effect |
| LogoStrip | `modules/MarqueeLogoStrip/index.jsx` | Port marquee animation |
| MetricCards | `modules/MetricCards/index.jsx` | Add CountUp animation |

---

## Critical Reference Files

| File | Path | Purpose |
|------|------|---------|
| Design tokens | `hubspot-cms/old_tries/.../styles/tokens.css` | 933-line token source — port to new project |
| Canonical copy | `design/marketing-copy/Consultry-Website-Copy-DACH-v1.0.md` | All page content (v1.1) |
| Homepage SEO | `design/HOMEPAGE-DARK-CONTENT-FINAL.md` | Keyword strategy, dashboard mockup data |
| Design system rules | `design/Consultry-Figma-Design-System-Rules.md` | Unified Figma tokens, component architecture |
| App design system | `design/App-Consultry-Design-System-v1.3.md` | Canonical app DS (inherited tokens) |
| Figma frames plan | `design/FIGMA-FRAMES-MASTER-PLAN.md` | Component-to-page mapping for all pages |
| Component handover | `design/HANDOVER-FIGMA-COMPONENTS.md` | 31+ component IDs, token quick reference |
| Figma->React plan | `design/IMPLEMENTATION-PLAN-FIGMA-TO-REACT.md` | Old HubSpot CMS plan (reference only) |
| Hero reference | `hubspot-cms/old_tries/.../modules/HeroShowcase/index.jsx` | Most complex component implementation |
| Stepper Lottie | `design/animations/StepperBar.lottie` | Homepage deep-dive stepper |
| Dark stepper | `design/animations/dark_stepper_bar.json` | Dark variant stepper |
| Logos | `design/logos/consultry_final_weblogo.png` | Brand web logo |

---

## Verification Plan

| Check | Method | Target |
|-------|--------|--------|
| Visual fidelity | Compare against Figma frame screenshots (3 launch frames) | Pixel-accurate match |
| SEO score | Lighthouse SEO audit | 100 |
| Performance | Lighthouse Performance | >90, LCP <2.5s, CLS <0.1 |
| Accessibility | Lighthouse Accessibility + manual keyboard test | >95 |
| Structured data | Google Rich Results Test for each page | All schemas valid |
| **Responsive 375px** | Preview homepage, product, about at 375px (iPhone SE) | No overflow, no horizontal scroll, all content readable |
| **Responsive 768px** | Preview homepage, product, about at 768px (iPad) | 2-col grids, proper stacking |
| **Responsive 1440px** | Preview homepage, product, about at 1440px (design target) | Matches Figma exactly |
| **Responsive 1920px** | Preview at 1920px (ultrawide) | Content centered, max-width cap works |
| **Motion: scroll reveals** | Scroll through all pages, verify each section animates in | All ScrollReveal, StaggerChildren, CountUp trigger correctly |
| **Motion: CountUp** | Verify homepage metrics and product hero stats if animated | Numbers animate cleanly without layout shift |
| **Motion: Lottie stepper** | Validate only if used for the 4-step homepage deep-dive | Step indicator matches Figma and does not feel ornamental |
| **Motion: FAQ accordion** | Click FAQ items on product page | AnimatePresence height animation, smooth expand/collapse |
| **Motion: nav scroll** | Scroll down on any page | Nav transitions from transparent to frosted glass (backdrop-blur) |
| **Motion: reduced motion** | Enable `prefers-reduced-motion: reduce` in OS settings | All transforms disabled, opacity-only fades, no parallax, static logos |
| **Motion: mobile** | Test all animations on 375px viewport | Parallax disabled, stagger reduced, optional Lottie simplified |
| **Touch: nav menu** | Tap hamburger on mobile | Full-height slide-down menu, tap outside to close |
| Theme | Verify dark-first shell, verify no FOUC | Clean transitions |
| Build | `pnpm build` (static export) | Zero errors, JS <150KB initial |
| Content | Cross-check all page text against v1.1 copy doc | Exact match |
| Nav | Transparent on load, frosted glass on scroll, centered links | Matches Figma `2185:375` |
| **Lottie files** | Verify both `StepperBar.lottie` (28KB) and `dark_stepper_bar.json` (231KB) load | Correct theme variant plays per data-theme |
| **Announcement bar** | Dismiss and reload page | Stays dismissed via localStorage, doesn't overlap nav |

---

## Sprint Summary

| Sprint | Days | Deliverable |
|--------|------|-------------|
| 1 | 3 | Scaffolding, tokens, fonts, Tailwind, layout shell (AnnouncementBar + Nav + Footer), dark-first theme, motion foundation |
| 2 | 4 | Homepage / landing page (Hero, 4-step deep dive, metrics, Rich CTA email capture) |
| 3 | 3 | Product page (Aircover hero, video, feature rows, feature list sidebar, FAQ) |
| 4 | 2 | About page (hero, team grid, story/proof layout, CTA) |
| 5 | 2 | Responsive QA, SEO/JSON-LD for 3 pages, accessibility, reduced-motion verification |
| **Total** | **14 days** | **3-page marketing launch (homepage, product, about), responsive and Figma-validated** |
