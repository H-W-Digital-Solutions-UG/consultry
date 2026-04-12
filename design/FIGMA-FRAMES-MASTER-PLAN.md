# Consultry CMS — Figma Frames Master Plan

> **Comprehensive mapping of all CMS components to enterprise-ready marketing page frames.**
> **Figma File:** `ZRTge3ODEnkSDNRrcgBBvK`
> **Target Page:** `Templates (1:5)` — all frames will be created here

---

## 0. Design Inspiration Analysis

### What Makes Great Modern Product Homepages (giga.ai, dovetail.com, airbnb.com)

**Pattern 1 — Cinematic Dark Hero with Product Preview**
- Full-viewport dark hero with bold headline + gradient text accents
- Product UI screenshot "floating" with glow shadow, extending below the fold
- Two CTAs: primary gradient + secondary ghost
- Dovetail: 56px H1, -2px letter-spacing, Space Grotesk display, JetBrains Mono labels
- giga.ai: Minimalist dark hero, large centered text, animated product demo below

**Pattern 2 — Immediate Social Proof**
- Logo strip of 6-8 recognizable brands directly below hero
- G2/Capterra review badges with star ratings
- Establishes trust within the first scroll

**Pattern 3 — Numbered "How It Works" Sequence**
- Dovetail's 4-step sticky-scroll workflow (Centralize → Analyze → Query → Automate)
- Each step has: number badge, title, description, feature tags, product screenshot
- Sticky product screenshot transitions while text scrolls — most engaging pattern

**Pattern 4 — ROI/Impact Metrics with Counter Animation**
- 3-4 large numbers in a grid (e.g., "2.3x ROI", "30hrs saved/week", "66% faster")
- Counter-roll animation on scroll-into-view
- Links to a study/whitepaper for credibility

**Pattern 5 — Customer Testimonials as Narrative**
- Full-width testimonial cards with customer photo, logo, quote
- Carousel navigation (numbered dots)
- Company name and role attribution visible

**Pattern 6 — Trust & Compliance Section**
- Enterprise trust badges (SOC 2, ISO 27001, GDPR)
- Security messaging with icon grid
- Important for DACH enterprise market

**Pattern 7 — Generous Spacing & Surface Alternation**
- 96px+ between sections
- Alternating light → warm → dark surfaces for visual rhythm
- No two same-surface sections stacked

**Pattern 8 — Sticky Navigation with Theme Switching**
- Transparent on hero, frosted glass on scroll
- Theme adapts to underlying section (light nav on light, dark nav on dark)

---

## 1. Complete Component Inventory

### 1A. Atoms / Primitives (14 components)

| # | Component | Figma ID | Variants | Used On |
|---|-----------|----------|----------|---------|
| 1 | Marketing Button | `8:38` | Primary/Gradient/Secondary/Ghost × sm/md/lg (12) | ALL pages |
| 2 | Marketing Badge | `169:19` | Category/New/Enterprise/Success/Info/Danger/Recommended/Neutral/Brand Gradient (9) | Pricing, Blog, Product |
| 3 | Marketing Tooltip | `172:19` | Top/Bottom/Left/Right (4) | Product, Pricing |
| 4 | Marketing Breadcrumb | `191:9` | Light/Dark (2) | Blog Post, Customer Story |
| 5 | Marketing Toggle Switch | `297:13` | Light/Dark (2) | Pricing (Monthly/Annual) |
| 6 | Marketing Tab Bar | `299:31` | Pill/Underline × Light/Dark (4) | Product, Resources |
| 7 | Marketing Carousel Controls | `302:23` | Light/Dark (2) | Testimonials, Customer Stories |
| 8 | Marketing Avatar | `304:7` | sm/md/lg (3) | Testimonials, Team, Blog |
| 9 | Marketing Social Icon | `308:17` | Facebook/Twitter/LinkedIn/Instagram/YouTube/Email/Website (7) | Footer, Team |
| 10 | Marketing Divider | `311:7` | Horizontal/Vertical × Light/Dark (4) | ALL pages |
| 11 | Marketing Search | `364:13` | Light/Dark (2) | Blog Index, Resources |
| 12 | Marketing Pagination | `366:33` | Light/Dark (2) | Blog Index, Resources |
| 13 | Marketing Form Field | `368:37` | Input/Textarea/Select × Light/Dark (6) | Contact, Demo Form |
| 14 | Marketing Form Control | `369:33` | Checkbox/Radio × Default/Checked/Selected × Light/Dark (8) | Contact, Newsletter |

### 1B. Molecules / Cards (12 components)

| # | Component | Figma ID | Variants | Used On |
|---|-----------|----------|----------|---------|
| 15 | Marketing Section Header | `88:22` | Centered/Left × Light/Dark (4) | ALL sections |
| 16 | Marketing Testimonial Card | `89:30` | Light/Dark (2) | Homepage, About |
| 17 | Marketing Stat Counter | `90:14` | Light/Dark (2) | Homepage, Product, About |
| 18 | Marketing Integration Tile | `91:12` | Light/Dark (2) | Homepage, Product |
| 19 | Marketing Feature Card | `331:8` | Light/Dark (2) | Homepage, Product |
| 20 | Marketing Customer Story Card | `96:20` | Light/Dark (2) | Homepage, Customers |
| 21 | Marketing Pricing Card | `179:73` | Standard/Recommended × Light/Dark (4) | Pricing |
| 22 | Marketing Blog Card | `175:23` | Blog/Webinar/Resource × Light/Dark (6) | Blog, Resources |
| 23 | Marketing Solution Card | `176:15` | Light/Dark (2) | Homepage, Solutions |
| 24 | Marketing Team Card | `199:8` | Light/Dark (2) | About |
| 25 | Marketing FAQ Item | `180:11` | Collapsed/Expanded × Light/Dark (4) | Pricing, Contact |
| 26 | Marketing Metric Card | `315:61` | Light/Dark (2) | Homepage, Product |

### 1C. Organisms / Sections (25 components)

| # | Component | Figma ID | Variants | Used On |
|---|-----------|----------|----------|---------|
| 27 | Marketing Nav | `116:40` | Light/Dark (2) | ALL pages (top) |
| 28 | Marketing Hero / Primary | `329:13` | Dark/Light (2) | Homepage |
| 29 | Marketing Hero Minimal | `296:18` | Light/Warm/Dark (3) | Pricing, Blog, About, Contact |
| 30 | Marketing CTA Band | `333:10` | Gradient/Dark (2) | ALL pages (bottom) |
| 31 | Marketing Rich CTA Band | `310:48` | Gradient (1) | Homepage, Product |
| 32 | Marketing Footer | `335:29` | Dark/Light (2) | ALL pages (bottom) |
| 33 | Marketing Logo Strip | `92:2` | Light (1) | Homepage |
| 34 | Marketing Feature Showcase Row | `93:34` | Image-Left/Right × Light/Dark (4) | Product |
| 35 | Marketing Feature Showcase Step | `143:2` | Pipeline/Matching/Analytics/Knowledge × Dark/Light (8) | Homepage, Product |
| 36 | Marketing Product UI Preview | `95:47` | Dashboard/Card-Small × Dark/Light (4) | Homepage, Product |
| 37 | Marketing Newsletter Capture | `174:16` | Inline/Stacked × Light/Dark (4) | Blog, Resources |
| 38 | Marketing Comparison Table | `199:66` | Light/Dark (2) | Pricing |
| 39 | Marketing Cookie Banner | `182:21` | Light/Dark (2) | ALL pages (overlay) |
| 40 | Marketing Announcement Bar | `183:18` | Warm/Dark/Gradient (3) | ALL pages (top) |
| 41 | Marketing Video Embed | `337:15` | Light/Dark (2) | Product, About |
| 42 | Marketing Contact Form | `193:33` | Light/Dark (2) | Contact |
| 43 | Marketing Testimonial Carousel | `301:26` | Light/Dark (2) | Homepage, About |
| 44 | Marketing Feature Grid Section | `300:63` | Light/Warm (2) | Homepage, Product |
| 45 | Marketing Trust Badges | `306:59` | Light/Dark (2) | Homepage, Pricing |
| 46 | Marketing Logo Grid | `312:37` | Light/Dark (2) | Homepage, Product |
| 47 | Marketing Timeline Steps | `313:69` | Light/Dark (2) | About, Product |
| 48 | Marketing Pricing Section | `314:3` / `316:92` | Light/Dark (2) | Pricing |
| 49 | Marketing Enterprise Pricing Section | `230:93` | Dark/Light (2) | Pricing |
| 50 | Marketing Feature List Sidebar | `317:49` | Light/Dark (2) | Product |
| 51 | Marketing Modal | `375:53` | Confirm/Video × Light/Dark (4) | ALL pages (overlay) |
| 52 | Marketing Browser Showcase | `379:3` | Light/Dark (2) | Homepage, Product |
| 53 | Marketing Gradient Text | `97:12` | Light (1) | Homepage Hero |
| 54 | Marketing Skeleton | `367:35` | Card/Text-Block/List-Item × Light/Dark (6) | Loading states |

---

## 2. Page Frames — Detailed Component Mapping

### Frame Dimensions
- **Desktop:** 1440px wide (standard marketing viewport)
- **Content max-width:** 1200px centered
- **Section padding:** 96px vertical (`mktg-space-2xl`)

### Surface Alternation Pattern
```
Dark Hero → Light → Warm → Light → Dark → Warm → Light → CTA Band (Gradient) → Dark Footer
```

---

### PAGE 1: Homepage (Primary Marketing Page)

**Frame name:** `Homepage / Desktop`
**Estimated height:** ~8,500px
**Theme:** Mixed (dark hero, alternating light/warm/dark sections)

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Announcement Bar | 0 | Marketing Announcement Bar | Theme=Gradient | `183:13` | Gradient | "Neu: KI-Matching 2.0 — Jetzt entdecken" |
| Navigation | 1 | Marketing Nav | Variant=Dark | `116:2` | Transparent over hero | Fixed position, theme-switching on scroll |
| Hero | 2 | Marketing Hero / Primary | Theme=Dark | `11:2` | `mktg-surface-hero` | Gradient text headline, product screenshot floating below fold |
| — Hero Sub | 2a | Marketing Product UI Preview | Type=Dashboard, Theme=Dark | `95:2` | Embedded in hero | Dashboard screenshot with `mktg-shadow-hero` |
| Logo Strip | 3 | Marketing Logo Strip | Light | `92:2` | `mktg-surface-light` | 6-8 partner logos, "VERTRAUT VON" eyebrow |
| Feature Overview | 4a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-light` | "PLATTFORM" eyebrow + "Vom Signal zum Projekt" headline |
| Feature Grid | 4b | Marketing Feature Grid Section | Theme=Light | `300:3` | `mktg-surface-light` | 3-column feature cards with icons |
| Product Deep-Dive | 5 | Marketing Feature Showcase Step | Step=01-Pipeline, Theme=Dark | `138:2` | `mktg-surface-dark` | 4-step sticky scroll sequence |
| — Step 2 | 5b | Marketing Feature Showcase Step | Step=02-Matching, Theme=Dark | `140:2` | `mktg-surface-dark` | |
| — Step 3 | 5c | Marketing Feature Showcase Step | Step=03-Analytics, Theme=Dark | `141:2` | `mktg-surface-dark` | |
| — Step 4 | 5d | Marketing Feature Showcase Step | Step=04-Knowledge, Theme=Dark | `142:2` | `mktg-surface-dark` | |
| Metrics | 6 | Marketing Metric Card | Theme=Light | `315:3` | `mktg-surface-warm` | "500+ Beratungen", "10.000+ Matches", "95% Zeitersparnis" |
| Testimonials | 7 | Marketing Testimonial Carousel | Theme=Light | `298:3` | `mktg-surface-light` | 3 rotating testimonials |
| Integration Logos | 8a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-warm` | "Nahtlos integriert" |
| Integration Grid | 8b | Marketing Logo Grid | Theme=Light | `312:3` | `mktg-surface-warm` | Partner integration logos |
| Trust | 9 | Marketing Trust Badges | Theme=Light | `306:3` | `mktg-surface-light` | SOC 2, GDPR, ISO 27001 badges |
| CTA Band | 10 | Marketing Rich CTA Band | Theme=Gradient | `310:3` | Gradient | "Bereit, Ihre Beratung zu transformieren?" |
| Footer | 11 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | Full 4-column footer |

**Total components used:** 16 unique components, ~22 instances

---

### PAGE 2: Product / Platform Page

**Frame name:** `Product / Desktop`
**Estimated height:** ~7,200px
**Theme:** Mixed (dark hero, alternating sections)

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Navigation | 1 | Marketing Nav | Variant=Dark | `116:2` | Transparent | |
| Hero | 2 | Marketing Hero / Primary | Theme=Dark | `11:2` | `mktg-surface-hero` | Module-specific headline, product screenshot with annotations |
| — Hero Product | 2a | Marketing Browser Showcase | Theme=Dark | `378:3` | Embedded | Browser chrome frame around product screenshot |
| Feature Overview | 3a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-light` | Platform overview |
| Feature Cards | 3b | Marketing Feature Card | Theme=Light | `13:3` | `mktg-surface-light` | 3×2 grid of feature cards |
| Feature Detail 1 | 4a | Marketing Feature Showcase Row | Layout=Image-Left, Theme=Light | `93:2` | `mktg-surface-light` | Alternating image-text |
| Feature Detail 2 | 4b | Marketing Feature Showcase Row | Layout=Image-Right, Theme=Warm | `93:18` | `mktg-surface-warm` | Swap sides for rhythm |
| Feature Detail 3 | 4c | Marketing Feature Showcase Row | Layout=Image-Left, Theme=Light | `93:2` | `mktg-surface-light` | |
| Video Embed | 5 | Marketing Video Embed | Theme=Dark | `337:3` | `mktg-surface-dark` | Product demo video |
| Feature Sidebar | 6 | Marketing Feature List Sidebar | Theme=Light | `317:3` | `mktg-surface-warm` | Detailed feature checklist |
| Stats | 7 | Marketing Stat Counter | Theme=Light | `90:2` | `mktg-surface-light` | 4 counters in a row |
| Customer Story | 8 | Marketing Customer Story Card | Theme=Dark | `96:11` | `mktg-surface-dark` | Featured case study |
| Integration | 9 | Marketing Logo Grid | Theme=Light | `312:3` | `mktg-surface-warm` | "Works with your tools" |
| CTA Band | 10 | Marketing CTA Band | Theme=Gradient | `13:9` | Gradient | |
| Footer | 11 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | |

**Total components used:** 14 unique components, ~18 instances

---

### PAGE 3: Pricing Page

**Frame name:** `Pricing / Desktop`
**Estimated height:** ~5,800px
**Theme:** Light-dominant with dark pricing section option

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Navigation | 1 | Marketing Nav | Variant=Light | `116:21` → use Light variant | Solid | Light nav for minimal hero |
| Hero | 2 | Marketing Hero Minimal | Theme=Light | `296:3` | `mktg-surface-light` | "Transparente Preise" headline |
| Pricing Toggle | 3a | Marketing Toggle Switch | Theme=Light | `297:3` | `mktg-surface-light` | Monthly / Annual toggle |
| Pricing Section | 3b | Marketing Pricing Section | Light | `314:3` | `mktg-surface-light` | Standard pricing cards |
| Enterprise Pricing | 4 | Marketing Enterprise Pricing Section | Theme=Light | `230:3` | `mktg-surface-warm` | Gradient-border enterprise card |
| Comparison Table | 5a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-light` | "Funktionen im Vergleich" |
| Comparison | 5b | Marketing Comparison Table | Theme=Light | `181:3` | `mktg-surface-light` | Full feature matrix |
| FAQ | 6a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-warm` | "Häufige Fragen" |
| FAQ Items | 6b | Marketing FAQ Item | State=Collapsed, Theme=Light | `180:3` | `mktg-surface-warm` | 6-8 FAQ items, first expanded |
| Trust | 7 | Marketing Trust Badges | Theme=Light | `306:3` | `mktg-surface-light` | Enterprise trust signals |
| CTA Band | 8 | Marketing CTA Band | Theme=Dark | `333:3` | `mktg-surface-dark` | "Noch Fragen? Sprechen Sie mit uns." |
| Footer | 9 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | |

**Total components used:** 12 unique components, ~16 instances

---

### PAGE 4: About Us Page

**Frame name:** `About / Desktop`
**Estimated height:** ~7,800px
**Theme:** Warm, people-focused

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Navigation | 1 | Marketing Nav | Variant=Light | `116:21` → Light | Solid | |
| Hero | 2 | Marketing Hero Minimal | Theme=Warm | `296:8` | `mktg-surface-warm` | "Die Menschen hinter Consultry" |
| Mission Statement | 3 | Marketing Gradient Text | Light | `97:12` | `mktg-surface-light` | Large gradient text block — company mission |
| Timeline | 4 | Marketing Timeline Steps | Theme=Light | `313:3` | `mktg-surface-light` | Company milestones / history |
| Stats | 5 | Marketing Metric Card | Theme=Light | `315:3` | `mktg-surface-warm` | Company metrics (team size, clients, etc.) |
| Team Grid | 6a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-light` | "Unser Team" |
| Team Cards | 6b | Marketing Team Card | Theme=Light | `177:3` | `mktg-surface-light` | 3×2 grid of team member cards |
| Values | 7 | Marketing Feature Grid Section | Theme=Warm | `300:33` | `mktg-surface-warm` | Company values as feature cards |
| Video | 8 | Marketing Video Embed | Theme=Dark | `337:3` | `mktg-surface-dark` | Culture / behind-the-scenes video |
| Testimonial | 9 | Marketing Testimonial Carousel | Theme=Dark | `301:3` | `mktg-surface-dark` | Customer quotes about the team |
| Logo Strip | 10 | Marketing Logo Strip | Light | `92:2` | `mktg-surface-light` | Client logos |
| CTA Band | 11 | Marketing CTA Band | Theme=Gradient | `13:9` | Gradient | "Werden Sie Teil unserer Geschichte" |
| Footer | 12 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | |

**Total components used:** 13 unique components, ~18 instances

---

### PAGE 5: Contact Page

**Frame name:** `Contact / Desktop`
**Estimated height:** ~4,200px
**Theme:** Light, conversion-focused

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Navigation | 1 | Marketing Nav | Variant=Light | `116:21` → Light | Solid | |
| Hero | 2 | Marketing Hero Minimal | Theme=Light | `296:3` | `mktg-surface-light` | "Sprechen Sie mit uns" — minimal hero |
| Contact Form | 3 | Marketing Contact Form | Theme=Light | `173:3` | `mktg-surface-light` | Full demo request form |
| — side content | 3a | Marketing Stat Counter | Theme=Light | `90:2` | `mktg-surface-light` | Quick stats beside form |
| Trust Badges | 4 | Marketing Trust Badges | Theme=Light | `306:3` | `mktg-surface-warm` | Security & compliance |
| FAQ | 5a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-light` | "Häufige Fragen zum Erstgespräch" |
| FAQ Items | 5b | Marketing FAQ Item | State=Collapsed, Theme=Light | `180:3` | `mktg-surface-light` | 4-5 FAQ items |
| Testimonial | 6 | Marketing Testimonial Card | Theme=Light | `89:2` | `mktg-surface-warm` | Single featured testimonial |
| CTA Band | 7 | Marketing CTA Band | Theme=Dark | `333:3` | `mktg-surface-dark` | Fallback CTA |
| Footer | 8 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | |

**Total components used:** 10 unique components, ~13 instances

---

### PAGE 6: Customer Stories / Customers Page

**Frame name:** `Customers / Desktop`
**Estimated height:** ~6,500px
**Theme:** Mixed, story-driven

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Navigation | 1 | Marketing Nav | Variant=Light | `116:21` → Light | Solid | |
| Hero | 2 | Marketing Hero Minimal | Theme=Warm | `296:8` | `mktg-surface-warm` | "Unsere Kunden erzählen" |
| Featured Story | 3 | Marketing Customer Story Card | Theme=Light | `96:2` | `mktg-surface-light` | Full-width featured customer story |
| Logo Strip | 4 | Marketing Logo Strip | Light | `92:2` | `mktg-surface-light` | All customer logos |
| Story Grid | 5a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-light` | "Erfolgsgeschichten" |
| — Tab Filter | 5b | Marketing Tab Bar | Style=Pill, Theme=Light | `299:3` | `mktg-surface-light` | Filter by industry/use case |
| Story Cards | 5c | Marketing Customer Story Card | Theme=Light | `96:2` | `mktg-surface-light` | 3×2 grid of customer stories |
| Metrics | 6 | Marketing Metric Card | Theme=Dark | `315:32` | `mktg-surface-dark` | Aggregate customer success metrics |
| Testimonial Carousel | 7 | Marketing Testimonial Carousel | Theme=Light | `298:3` | `mktg-surface-warm` | Rotating testimonials |
| CTA Band | 8 | Marketing Rich CTA Band | Theme=Gradient | `310:3` | Gradient | "Ihre Erfolgsgeschichte beginnt hier" |
| Footer | 9 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | |

**Total components used:** 10 unique components, ~15 instances

---

### PAGE 7: Blog / Resources Index

**Frame name:** `Blog / Desktop`
**Estimated height:** ~5,500px
**Theme:** Light, content-focused

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Navigation | 1 | Marketing Nav | Variant=Light | `116:21` → Light | Solid | |
| Hero | 2 | Marketing Hero Minimal | Theme=Light | `296:3` | `mktg-surface-light` | "Ressourcen & Insights" |
| Search | 2a | Marketing Search | Theme=Light | `364:3` | `mktg-surface-light` | Search bar below hero |
| Tab Filter | 3 | Marketing Tab Bar | Style=Underline, Theme=Light | `299:17` | `mktg-surface-light` | Blog / Webinar / Leitfäden / Alle |
| Featured Article | 4 | Marketing Blog Card | Type=Blog, Theme=Light | `175:3` | `mktg-surface-light` | Full-width featured post |
| Article Grid | 5 | Marketing Blog Card | Type=Blog, Theme=Light | `175:3` | `mktg-surface-light` | 3×3 grid of blog cards |
| — Webinar Cards | 5b | Marketing Blog Card | Type=Webinar, Theme=Light | `175:11` | `mktg-surface-light` | Mixed into grid |
| — Resource Cards | 5c | Marketing Blog Card | Type=Resource, Theme=Light | `175:18` | `mktg-surface-light` | Mixed into grid |
| Pagination | 6 | Marketing Pagination | Theme=Light | `366:3` | `mktg-surface-light` | Page navigation |
| Newsletter CTA | 7 | Marketing Newsletter Capture | Layout=Stacked, Theme=Light | `174:8` | `mktg-surface-warm` | "Bleiben Sie informiert" |
| CTA Band | 8 | Marketing CTA Band | Theme=Gradient | `13:9` | Gradient | |
| Footer | 9 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | |

**Total components used:** 10 unique components, ~18 instances

---

### PAGE 8: Solutions / Use-Case Page

**Frame name:** `Solutions / Desktop`
**Estimated height:** ~6,800px
**Theme:** Mixed, warm-dominant

| Section | # | Component Instance | Variant | Node ID | Surface | Notes |
|---------|---|-------------------|---------|---------|---------|-------|
| Navigation | 1 | Marketing Nav | Variant=Light | `116:21` → Light | Solid | |
| Hero | 2 | Marketing Hero Minimal | Theme=Warm | `296:8` | `mktg-surface-warm` | "Lösungen für jede Rolle" |
| Solution Cards | 3a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-light` | "Nach Rolle" |
| — Cards | 3b | Marketing Solution Card | Theme=Light | `176:3` | `mktg-surface-light` | BD-Leiter, Partner, Berater cards |
| Use Case Cards | 4a | Marketing Section Header | Alignment=Centered, Theme=Light | `88:18` | `mktg-surface-warm` | "Nach Anwendungsfall" |
| — Cards | 4b | Marketing Solution Card | Theme=Light | `176:3` | `mktg-surface-warm` | Pipeline, Matching, Delivery cards |
| Feature Showcase | 5a | Marketing Feature Showcase Row | Layout=Image-Left, Theme=Light | `93:2` | `mktg-surface-light` | Deep-dive on key solution |
| Feature Showcase | 5b | Marketing Feature Showcase Row | Layout=Image-Right, Theme=Dark | `93:26` | `mktg-surface-dark` | Alternating |
| Customer Story | 6 | Marketing Customer Story Card | Theme=Light | `96:2` | `mktg-surface-warm` | Relevant success story |
| Integration | 7 | Marketing Integration Tile | Theme=Light | `91:2` | `mktg-surface-light` | Relevant integrations |
| CTA Band | 8 | Marketing Rich CTA Band | Theme=Gradient | `310:3` | Gradient | |
| Footer | 9 | Marketing Footer | Theme=Dark | `13:17` | `mktg-surface-hero` | |

**Total components used:** 10 unique components, ~16 instances

---

## 3. Component Usage Matrix

Shows which components appear on which pages:

| Component | Home | Product | Pricing | About | Contact | Customers | Blog | Solutions |
|-----------|:----:|:-------:|:-------:|:-----:|:-------:|:---------:|:----:|:---------:|
| Nav | D | D | L | L | L | L | L | L |
| Hero Primary | X | X | | | | | | |
| Hero Minimal | | | X | X | X | X | X | X |
| Section Header | X | X | X | X | X | X | | X |
| Feature Card | X | X | | | | | | |
| Feature Grid Section | X | | | X | | | | |
| Feature Showcase Row | | X | | | | | | X |
| Feature Showcase Step | X | | | | | | | |
| Feature List Sidebar | | X | | | | | | |
| Product UI Preview | X | | | | | | | |
| Browser Showcase | | X | | | | | | |
| Stat Counter | | X | | | X | | | |
| Metric Card | X | | | X | | X | | |
| Testimonial Card | | | | | X | | | |
| Testimonial Carousel | X | | | X | | X | | |
| Customer Story Card | | X | | | | X | | X |
| Solution Card | | | | | | | | X |
| Pricing Section | | | X | | | | | |
| Enterprise Pricing | | | X | | | | | |
| Pricing Card | | | X | | | | | |
| Comparison Table | | | X | | | | | |
| FAQ Item | | | X | | X | | | |
| Toggle Switch | | | X | | | | | |
| Blog Card | | | | | | | X | |
| Team Card | | | | X | | | | |
| Integration Tile | | | | | | | | X |
| Logo Strip | X | | | | | X | | |
| Logo Grid | X | X | | | | | | |
| Trust Badges | X | | X | | X | | | |
| Timeline Steps | | | | X | | | | |
| Video Embed | | X | | X | | | | |
| Contact Form | | | | | X | | | |
| Newsletter Capture | | | | | | | X | |
| Search | | | | | | | X | |
| Tab Bar | | | | | | X | X | |
| Pagination | | | | | | | X | |
| Gradient Text | | | | X | | | | |
| CTA Band | | | X | X | X | | X | |
| Rich CTA Band | X | X | | | | X | | X |
| Footer | X | X | X | X | X | X | X | X |
| Announcement Bar | X | | | | | | | |
| Badge | | | X | | | | X | |
| Cookie Banner | X | | | | | | | |
| Divider | X | X | X | X | X | X | X | X |

**D = Dark variant, L = Light variant, X = used**

---

## 4. Execution Order

### Phase 1: Setup & Scaffolding
1. Navigate to Templates page (`1:5`)
2. Create 8 top-level frames (1440px wide each), spaced 200px apart horizontally
3. Name each frame: `Homepage / Desktop`, `Product / Desktop`, etc.
4. Set frame backgrounds per the hero surface color

### Phase 2: Homepage Frame (Most Complex)
5. Build Homepage top-to-bottom, one section per `use_figma` call
6. Validate with `get_screenshot` after each major section
7. Start with Nav (dark) → Hero → Logo Strip → Feature Grid → Feature Steps → Metrics → Testimonials → Integrations → Trust → CTA → Footer

### Phase 3: Product Page Frame
8. Build Product page, reusing many Homepage patterns
9. Feature Showcase Rows (alternating layout) are the key differentiator

### Phase 4: Pricing Page Frame
10. Pricing section with toggle
11. Enterprise pricing with gradient border card
12. Comparison table
13. FAQ accordion

### Phase 5: About Us Frame
14. Team cards grid
15. Timeline steps (company history)
16. Mission statement with gradient text

### Phase 6: Contact Page Frame
17. Contact form as hero content
18. FAQ items
19. Trust badges

### Phase 7: Remaining Pages
20. Customer Stories page
21. Blog / Resources index page
22. Solutions page

### Phase 8: Validation & Polish
23. Screenshot all 8 frames
24. Verify spacing consistency (96px between sections)
25. Verify surface alternation (no two same-color sections adjacent)
26. Check all text is properly loaded (Inter font)
27. Ensure all component instances reference the correct source components

---

## 5. Technical Implementation Notes

### How to Create Instances from Components

```javascript
// Pattern for creating component instances
const componentsPage = figma.root.children.find(p => p.name === "Components");
await figma.setCurrentPageAsync(componentsPage);

// Find the component set
const componentSet = figma.currentPage.findOne(
  n => n.type === "COMPONENT_SET" && n.name === "Marketing Nav"
);

// Find specific variant
const variant = componentSet.children.find(
  c => c.name === "Variant=Dark"
);

// Switch to target page
const targetPage = figma.root.children.find(p => p.name === "Templates");
await figma.setCurrentPageAsync(targetPage);

// Create instance
const instance = variant.createInstance();
targetFrame.appendChild(instance);
```

### Key Figma API Considerations
- **Font loading:** `await figma.loadFontAsync({family: "Inter", style: "Regular"})` before any text ops
- **Instance resizing:** Set `layoutSizingHorizontal: 'FILL'` AFTER appending to parent
- **Page switching:** Always `await figma.setCurrentPageAsync(page)` — sync setter throws
- **Colors:** 0-1 range, not 0-255
- **Auto-layout:** Use for all section stacking (vertical, `itemSpacing` for section gaps)

### Frame Structure Pattern
```
Homepage / Desktop (1440 × auto, vertical auto-layout)
├── Announcement Bar instance (FILL width)
├── Nav instance (FILL width)
├── Hero instance (FILL width)
├── Section Spacer (96px height)
├── Logo Strip instance (FILL width)
├── Section Spacer (96px height)
├── Feature Grid wrapper (vertical auto-layout)
│   ├── Section Header instance
│   └── Feature Grid Section instance
├── Section Spacer (96px height)
├── ... more sections ...
├── CTA Band instance (FILL width)
└── Footer instance (FILL width)
```

---

## 6. Content Plan (German / DACH-First)

### Homepage Content
- **Hero headline:** "Die Intelligence Engine fur Ihre Beratung"
- **Hero subtitle:** "Pipeline. Matching. Delivery. Ein System."
- **Hero CTA:** "Kostenlos testen" / "Demo buchen"
- **Feature eyebrow:** "PLATTFORM"
- **Feature headline:** "Vom Signal zum Projekt — nahtlos"

### Pricing Content
- **Hero headline:** "Transparente Preise fur jede Beratungsgröße"
- **Tiers:** Starter / Professional / Enterprise
- **Toggle:** Monatlich / Jahrlich (-20% Ersparnis)

### About Content
- **Hero headline:** "Die Menschen hinter Consultry"
- **Mission:** "Wir glauben, dass Beratung brillant sein kann"

### Contact Content
- **Hero headline:** "Sprechen Sie mit uns"
- **Form fields:** Name, Email, Unternehmen, Rolle, Nachricht

---

## 7. Summary Statistics

| Metric | Value |
|--------|-------|
| **Total pages/frames** | 8 |
| **Total component types used** | 43 of 54 (80%) |
| **Total component instances** | ~136 across all pages |
| **Components NOT used** | Skeleton (loading state), Modal (overlay), Cookie Banner (overlay), Breadcrumb (sub-pages), Form Field (inside Contact Form), Form Control (inside forms), Carousel Controls (inside carousels), Avatar (inside cards), Social Icon (inside footer) |
| **Most-used component** | Marketing Footer (8×), Marketing Nav (8×), Marketing Divider (8×) |
| **Largest page** | Homepage (~22 instances) |
| **Smallest page** | Contact (~13 instances) |

---

*This plan serves as the definitive mapping between the Consultry CMS component library and the enterprise marketing page frames. Each component instance references specific Figma node IDs for programmatic creation via `use_figma`.*
