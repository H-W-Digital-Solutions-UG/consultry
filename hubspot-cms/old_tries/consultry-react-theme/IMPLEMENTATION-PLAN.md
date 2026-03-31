# Consultry Marketing Site — Screen Implementation Plan

**Date:** 31 March 2026
**Reference:** dovetail.com, airbnb.com
**Design System:** Consultry Marketing DS v1.0 (inherits App DS v1.3)
**Framework:** HubSpot CMS React + HubL, Islands Architecture

---

## Current Inventory

**30 modules** built and styled, **14 sections**, **11 templates** (7 production-ready, 4 partial).
Fonts loading via Google Fonts CDN. CSS tokens, layered shadows, hover transitions all polished.

---

## Screen-by-Screen Implementation

### Screen 1: Homepage (`home.hubl.html`) — STATUS: READY, NEEDS CONTENT POLISH

**Reference:** dovetail.com homepage (dark hero → social proof → process → metrics → testimonial → enterprise)

**Section flow (top to bottom):**

| # | Section | Module | Status | Notes |
|---|---------|--------|--------|-------|
| 1 | Announcement Bar | AnnouncementBar | Done | Dismissible, warm accent |
| 2 | Navigation | Nav (in base) | Done | Fixed, glass blur, dark variant |
| 3 | Hero | HeroPrimary | Done | Dark bg, gradient headline, dual CTAs, product screenshot |
| 4 | Logo Strip | MarqueeLogoStrip | Done | Animated marquee, grayscale→color on hover |
| 5 | Feature Overview | FeatureGrid (3-col) | Done | Icon cards with "Mehr erfahren →" links |
| 6 | Product Screenshot | ProductScreenshot | Done | Framed screenshot with shadow, optional overlay cards |
| 7 | How It Works | NumberedSteps | Done | [01]→[04] alternating layout, dark bg |
| 8 | Stats Band | StatsCounter | Done | 4-col metrics with JetBrains Mono |
| 9 | Customer Stories | CustomerStoryCards | Done | Gradient-tinted cards with stat chips |
| 10 | Testimonial Carousel | TestimonialCarousel | Done | Single rotating quote with attribution |
| 11 | Trust Badges | TrustBadges | Done | Ratings, certifications, compliance logos |
| 12 | Blog Preview | BlogCards | Done | 3-col latest posts grid |
| 13 | CTA Band | RichCTABand | Done | Dark bg, white pill CTA, ambient blobs |
| 14 | Footer | Footer (in base) | Done | 4-col layout, dark bg |

**Remaining work:**
- [ ] Add real product screenshots (placeholder images currently)
- [ ] Add real customer logos for marquee strip
- [ ] Add real trust badge images (G2, Capterra, DATEV-certified)
- [ ] Refine homepage copy for conversion (A/B test ready)

---

### Screen 2: Features (`features.hubl.html`) — STATUS: READY, NEEDS CONTENT POLISH

**Reference:** dovetail.com features (sticky scroll workflow sections, detailed breakdowns)

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroPrimary (dark, minimal) | "Alle Funktionen auf einen Blick" |
| 2 | Feature Overview | FeatureGrid (3-col) | Top-level capability cards |
| 3 | How It Works | NumberedSteps | 4-step workflow overview |
| 4 | KI-Assistent Detail | FeatureDetail | Left text + right screenshot |
| 5 | Deal Management Detail | FeatureDetail (reversed) | Right text + left screenshot |
| 6 | Zeiterfassung Detail | FeatureDetail | Left text + right screenshot |
| 7 | Integrationen Detail | FeatureDetail (reversed) | Right text + left screenshot |
| 8 | Product Screenshot | ProductScreenshot | Full-width app screenshot |
| 9 | Trust Badges | TrustBadges | Compliance & ratings |
| 10 | CTA | CTABand | "Kostenlos testen" |

**Remaining work:**
- [ ] Add real screenshots for each feature detail section (4 unique screenshots needed)
- [ ] Consider adding TabFilter module for features sub-navigation (dovetail pattern)
- [ ] Add FeatureListSidebar as an alternative deep-dive for one key feature

---

### Screen 3: Pricing (`pricing.hubl.html`) — STATUS: READY

**Reference:** dovetail.com/pricing (tier cards + comparison matrix + FAQ)

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Pricing Header | PricingTable | 3 tiers: Starter/Professional/Enterprise, monthly/annual toggle |
| 2 | Comparison Matrix | ComparisonTable | Consultry vs. Wettbewerber (highlighted column) |
| 3 | Trust Badges | TrustBadges | DATEV, G2, compliance |
| 4 | FAQ | FAQ | Billing/trial/cancellation questions |
| 5 | CTA | CTABand | "Jetzt kostenlos starten" |

**Remaining work:**
- [ ] Fix Pricing module path (preview showed "Failed to load" — module is named `PricingTable` not `Pricing`)
- [ ] Add real pricing numbers when finalized
- [ ] Add enterprise "Kontakt" CTA variant

---

### Screen 4: About (`about.hubl.html`) — STATUS: READY

**Reference:** airbnb.com about (mission-led, warm photography, stats)

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroPrimary | Mission statement hero |
| 2 | Stats | StatsCounter | Team size, customers, DACH presence |
| 3 | Mission Detail | FeatureDetail | "Beratung menschlicher machen — durch Technologie" |
| 4 | Team Testimonials | Testimonials | 3-col team quotes |
| 5 | CTA | CTABand | Career/contact CTA |

**Remaining work:**
- [ ] Add team photography (airbnb pattern: warm, authentic imagery)
- [ ] Consider adding a team grid module (NEW — see New Modules below)
- [ ] Add values/culture section

---

### Screen 5: Integrations (`integrations.hubl.html`) — STATUS: PARTIAL

**Reference:** dovetail.com integrations (grid of logos + category filtering + detailed breakdowns)

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroMinimal | "Verbinden Sie Ihre Tools" |
| 2 | Tab Filter | TabFilter | Category filters: Alle / CRM / Buchhaltung / Kommunikation |
| 3 | Integration Grid | IntegrationGrid | 4-col cards with logos, names, categories |
| 4 | Feature Sidebar | FeatureListSidebar | Deep-dive on key integrations (DATEV, HubSpot, etc.) |
| 5 | CTA | RichCTABand | "Integration vermisst? Schreiben Sie uns" |

**Remaining work:**
- [ ] Add integration logo images (DATEV, Slack, Teams, HubSpot, Personio, etc.)
- [ ] Wire TabFilter to actually filter IntegrationGrid categories
- [ ] Add detailed integration descriptions for top 5 integrations
- [ ] Consider adding a "Request Integration" form

---

### Screen 6: Competitors (`competitors.hubl.html`) — STATUS: PARTIAL

**Reference:** dovetail.com comparison (matrix with clear "us vs them" differentiation)

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroMinimal | "Warum Consultry die bessere Wahl ist" |
| 2 | Comparison Table | ComparisonTable | Consultry vs. Salesforce vs. HubSpot vs. Pipedrive |
| 3 | Feature Highlights | FeatureGrid (2-col) | Key differentiators as cards |
| 4 | Trust Badges | TrustBadges | Ratings comparison |
| 5 | Testimonial Carousel | TestimonialCarousel | Switcher testimonials |
| 6 | CTA | RichCTABand | "Überzeugen Sie sich selbst" |

**Remaining work:**
- [ ] Fill comparison table with real feature-by-feature data
- [ ] Add competitor logos
- [ ] Write differentiator copy (DACH focus, DATEV, German language AI)
- [ ] Consider adding a "Migration Guide" CTA

---

### Screen 7: Customer Stories (`customer-story.hubl.html`) — STATUS: PARTIAL

**Reference:** dovetail.com/customers (metrics-led cards, individual story pages)

**Section flow for listing page (NEW — needs template):**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroMinimal | "100+ Beratungen vertrauen Consultry" |
| 2 | Stats | StatsCounter | Aggregate metrics (avg ROI, hours saved) |
| 3 | Story Cards | CustomerStoryCards | Grid of case studies with stat chips |
| 4 | Logo Strip | MarqueeLogoStrip | All customer logos |
| 5 | CTA | RichCTABand | "Ihre Erfolgsgeschichte schreiben" |

**Section flow for individual story (existing template):**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroMinimal | Company name + one-line result |
| 2 | Story Content | FeatureDetail | Challenge → Solution → Result narrative |
| 3 | Key Metrics | StatsCounter | 3-4 headline metrics |
| 4 | CTA | CTABand | "Ähnliche Ergebnisse erzielen" |

**Remaining work:**
- [ ] **Create `customer-stories.hubl.html` listing page template** (NEW)
- [ ] Fill individual story template with real case study content
- [ ] Add real customer logos and company imagery
- [ ] Write 3-5 initial case studies

---

### Screen 8: Contact (`contact.hubl.html`) — STATUS: READY

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroPrimary | Gradient text "Schreiben Sie uns" |
| 2 | Contact Form | Custom HTML + HubSpot Form | Two-col: info + form |
| 3 | FAQ | FAQ | Common questions |

**Remaining work:**
- [ ] Connect actual HubSpot form ID
- [ ] Add office address / map for DACH presence
- [ ] Style the custom HTML section to use CSS modules instead of inline styles

---

### Screen 9: Blog Listing (`blog.hubl.html`) — STATUS: READY

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Header | HeroPrimary (minimal) | "Insights für moderne Berater" |
| 2 | Blog Grid | BlogCards | Dynamic HubSpot blog listing |
| 3 | CTA | CTABand | Newsletter signup |

**Remaining work:**
- [ ] Add category filtering (TabFilter integration)
- [ ] Add pagination for blog listing
- [ ] Add featured post hero variant (large card at top)

---

### Screen 10: Blog Post (`blog-post.hubl.html`) — STATUS: READY

**Section flow:**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Article Header | Custom HubL | Title, author, date, read time, featured image |
| 2 | Article Body | HubSpot content | Standard blog_post_body |
| 3 | Tags | Custom HubL | Tag pills |
| 4 | Related Posts | BlogCards | 3-col related articles |
| 5 | CTA | CTABand | Newsletter/demo |

**Remaining work:**
- [ ] Add social share buttons
- [ ] Add table of contents for long posts
- [ ] Style blog body content (h2, h3, blockquote, code blocks, images)

---

### Screen 11: Landing Page (`landing-page.hubl.html`) — STATUS: SKELETON

**Reference:** airbnb.com landing pages (clean, conversion-focused, minimal distraction)

**This is a reusable template for campaigns, ads, product launches.**

| # | Section | Module | Notes |
|---|---------|--------|-------|
| 1 | Hero | HeroPrimary | Configurable per campaign |
| 2 | Social Proof | LogoStrip | Quick trust signal |
| 3 | Value Props | FeatureGrid | 3 key benefits |
| 4 | Testimonial | Testimonials | Single or grid |
| 5 | CTA | RichCTABand | Email capture or demo CTA |

**Remaining work:**
- [ ] Add InlineEmailCapture as alternative CTA option
- [ ] Add variant with video embed (NEW module consideration)
- [ ] Keep template flexible — all content via HubSpot editor

---

## New Templates Needed

### 1. Customer Stories Listing (`customer-stories-listing.hubl.html`)
A dedicated listing page showing all case studies in a filterable grid. Currently `customer-story.hubl.html` is for individual stories only.

### 2. Security / Compliance (`security.hubl.html`)
For DACH market, a dedicated security/compliance page is critical (DSGVO, DATEV, ISO 27001).

**Proposed sections:**
- HeroMinimal: "Sicherheit & Compliance"
- TrustBadges: Certification logos
- FeatureGrid: Security features (encryption, SSO, audit logs)
- ComparisonTable: Compliance checklist matrix
- FAQ: Security-related questions
- CTABand: "Sicherheits-Whitepaper herunterladen"

### 3. Changelog / Updates (`changelog.hubl.html`)
Show product updates — builds trust and signals active development.

### 4. Careers (`careers.hubl.html`)
**Proposed sections:**
- HeroPrimary: "Bauen Sie die Zukunft der Beratung mit uns"
- StatsCounter: Team metrics
- FeatureGrid: Values/culture cards
- Testimonials: Team quotes
- CTABand: "Offene Stellen ansehen"

---

## New Modules Needed

### 1. VideoEmbed
Inline video player (YouTube/Vimeo) with poster image and play button overlay.
Uses: Landing pages, feature pages, about page.

### 2. TeamGrid
Grid of team member cards with photo, name, role, optional social links.
Uses: About page, careers page.

### 3. LogoGrid (static, non-marquee)
Static grid of partner/certification logos with optional labels.
Uses: Security page, integrations page.

### 4. TimelineSteps
Vertical timeline for changelog, company history, or onboarding flow.
Uses: Changelog page, about page.

### 5. MetricCards
Large-format metric cards (dovetail pattern: "2.3x ROI", "30hrs saved/week").
Uses: Customer stories listing, homepage.

---

## Implementation Priority & Phases

### Phase 1: Content & Assets (Week 1)
High-impact, no code changes needed.

- [ ] Source/create product screenshots (6-8 unique screens)
- [ ] Source customer logos (minimum 8 for marquee strip)
- [ ] Source trust badge images (G2, Capterra, DATEV, ISO)
- [ ] Write/refine German marketing copy for all pages
- [ ] Create placeholder customer case studies (3 minimum)

### Phase 2: Fix & Polish Existing (Week 1-2)
Quick wins to get existing pages production-ready.

- [ ] Fix PricingTable module preview path
- [ ] Style blog post body content (typography for article content)
- [ ] Replace contact page inline styles with CSS modules
- [ ] Wire HubSpot form IDs on contact page
- [ ] Add real content to integrations.hubl.html
- [ ] Add real content to competitors.hubl.html
- [ ] Fill customer-story.hubl.html with first case study

### Phase 3: New Templates (Week 2-3)
Build missing pages.

- [ ] Create customer-stories-listing.hubl.html
- [ ] Create security.hubl.html
- [ ] Flesh out landing-page.hubl.html with InlineEmailCapture variant
- [ ] Add blog category filtering with TabFilter

### Phase 4: New Modules (Week 3-4)
Build missing components.

- [ ] Build VideoEmbed module + island
- [ ] Build TeamGrid module
- [ ] Build MetricCards module
- [ ] Consider TimelineSteps for future changelog

### Phase 5: Interactivity & Polish (Week 4-5)
Premium interactions inspired by dovetail/airbnb.

- [ ] Wire TabFilter → IntegrationGrid filtering (island JS)
- [ ] Add scroll-triggered fade-in animations (IntersectionObserver island)
- [ ] Add blog post table of contents (auto-generated from headings)
- [ ] Add social share buttons to blog posts
- [ ] Test and refine all responsive breakpoints (767px, 1023px)
- [ ] Performance audit (Lighthouse, Core Web Vitals)

### Phase 6: Launch Prep (Week 5-6)
- [ ] SEO meta tags on all templates
- [ ] Open Graph images for social sharing
- [ ] 404/500 error pages styling
- [ ] System templates styling (login, password reset, etc.)
- [ ] Final HubSpot `hs project upload` and QA
- [ ] Analytics integration (HubSpot tracking + optional GA4)

---

## Design System Alignment

All implementation must use the existing Consultry Marketing Design System tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | #BF5347 | Buttons, links, accents |
| `--brand-warm` | #E8913A | Eyebrows, step numbers |
| `--brand-gradient` | orange→coral→purple | HERO ONLY (headline text, hero bg) |
| `--mktg-surface-hero` | #1E1B18 | Dark hero backgrounds |
| `--mktg-surface-dark` | #2C2926 | Dark sections |
| `--mktg-surface-light` | #FFFBF9 | Warm light backgrounds |
| `--neutral-*` | Warm Stone palette | Text, borders, cards |
| Shadows | Layered composites | `sm`, `md`, `lg`, `xl`, `hero`, `card-hover` |
| Font | Inter (sans), JetBrains Mono (mono) | All text |
| Radius | `sm(8)`, `md(12)`, `lg(16)`, `xl(24)`, `full` | Consistent roundness |
| Spacing | `xs(8)` → `3xl(128)` | Responsive, scales down on mobile |

**Rules:**
- Gradients are HERO-ONLY — all buttons use solid `--brand-primary`
- Dark mode surfaces use warm browns, never blue-blacks
- Professional restraint over flashy effects
- Generous whitespace (dovetail pattern)
- Card hover: `translateY(-4px)` + `shadow-card-hover` (consistent across all cards)
- Typography: tight letter-spacing on headlines (`-0.02em` to `-0.03em`)

---

## Architecture Notes

- All modules use CSS Modules (`.module.css`) — no global CSS leaks
- All modules import `tokens.css` for standalone preview rendering
- Interactive modules use Islands architecture (`?island` suffix)
- Templates extend `base.hubl.html` which provides Nav + Footer + tokens
- German copy throughout (`lang="de"` on html element)
- Responsive: single `mobile` breakpoint at 767px (HubSpot limitation)
- Additional CSS breakpoints at 1023px and 1279px via media queries
