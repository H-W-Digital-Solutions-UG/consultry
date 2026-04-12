# Dovetail.com Homepage Design Analysis
## Structured Reference for Figma Page Layout Planning

---

## 1. HERO SECTION -- Layout and Messaging

**Pattern:** Full-viewport dark hero with animated background and centered content.

**Content hierarchy:**
- **Headline (H1):** "Get total clarity from scattered user feedback"
  - Style: 56px, line-height 64px, letter-spacing -2px, weight 500
  - Centered alignment, max-width constrained for readability
- **Subheadline (body):** One long sentence expanding the value prop with specifics (AI, customer data, usage and revenue, team confidence)
  - Style: 20px, line-height 28px, weight 400, secondary text color (#A7A7A7)
- **Dual CTA row:** Primary "Contact sales" (white bg, dark text) + Secondary "Try Dovetail free" (ghost/outline style)
- **Background:** Animated product imagery with gradient overlays fading to the base dark color (#0A0A0A)

**Key takeaways for Figma:**
- The headline is benefit-driven, not feature-driven. It names the pain ("scattered feedback") and the outcome ("total clarity").
- The subheadline does the heavy lifting on specifics -- AI, revenue, confidence. The headline stays clean.
- Two CTAs with clear visual weight hierarchy (solid vs ghost).
- No hero image in the traditional sense; the product UI itself is the visual, layered behind text with fade overlays.

**Promotional banner above nav:** A thin strip across the top with a campaign message ("The best never guess") and a CTA link. This is a common SaaS pattern for time-limited offers or launches.

---

## 2. NAVIGATION STRUCTURE

**Layout:** Sticky top nav, dark background, horizontal bar.

**Left cluster:**
- Logo (home link)
- Product (dropdown)
- Resources (dropdown)
- Enterprise
- Customers
- Pricing

**Right cluster:**
- Log in (text link)
- Contact sales (text link or secondary button)
- Go to app (primary button, white bg)

**Behavior:**
- Sticky positioning on scroll
- Theme switching capability (dark/light depending on section)
- Mobile: collapses to hamburger menu

**Key takeaways for Figma:**
- Standard SaaS nav pattern. Nothing exotic, which is intentional -- navigation should be invisible.
- The "Go to app" button in the nav signals existing users are a priority audience (retention, not just acquisition).
- Dropdowns for Product and Resources suggest deep content architecture without cluttering the top bar.

---

## 3. SECTION TYPES AND ORDERING (Top to Bottom)

### Section 1: Promotional Banner
- Thin bar, full width, campaign messaging
- Pattern: Urgency/offer strip

### Section 2: Navigation
- Sticky, dark, horizontal

### Section 3: Hero
- Full viewport, centered text, animated background
- Pattern: Value prop + dual CTA

### Section 4: Logo Bar (Social Proof)
- Heading: "Connecting the world's leading companies to their customers"
- 6 logos in a grid row: Shopify, AWS, Atlassian, Notion, Canva, Lovable
- Review badges: G2 (4.5/5), Capterra (4.6/5)
- Pattern: Authority transfer via brand association

### Section 5: How It Works (4-Step Feature Walkthrough)
- Sticky image carousel with scroll-triggered transitions
- Four numbered steps: Centralize, Analyze, Query and Act, Automate
- Each step has: number label, title, description, feature tags, and a corresponding product screenshot
- Pattern: Progressive disclosure via scroll. User scrolls through steps while the visual panel updates.

### Section 6: ROI / Impact Metrics
- Grid of 3 stats: 2.3x ROI, 30hrs saved/week, 66% faster shipping
- Anchored by a Forrester study download CTA
- Pattern: Quantified proof. Third-party validation (Forrester) adds credibility.

### Section 7: Customer Testimonial Carousel
- Large quote card with customer photo
- Company logo (Breville), attribution (name + title)
- Numbered pagination (01, 02, 03)
- Pattern: Named, titled, real-company testimonials. Not anonymous praise.

### Section 8: Trust and Compliance
- Heading: "Built for trust at scale"
- Compliance badges: SOC 2 Type II, ISO 27001, HIPAA, GDPR
- Sub-features: Templates/best practices, privacy/permissions
- Pattern: Enterprise reassurance. Removes buying friction for security-conscious orgs.

### Section 9: Footer
- Standard multi-column footer (exact structure not fully captured)

**Key takeaway on ordering:**
The flow follows a classic persuasion arc:
1. Promise (hero)
2. Authority (logos)
3. Proof of mechanism (how it works)
4. Quantified results (ROI stats)
5. Social proof (testimonials)
6. Objection handling (trust/security)
7. Final CTA / navigation (footer)

This is textbook SaaS landing page sequencing -- each section answers the next logical question a skeptical buyer would ask.

---

## 4. VISUAL DESIGN PATTERNS

### Color System
| Role | Value | Notes |
|---|---|---|
| Background | #0A0A0A | Near-black, not pure black |
| Surface/Card | #1E1E1E | Slightly elevated dark |
| Text Primary | #FFFFFF | White |
| Text Secondary | #A7A7A7 | Muted gray |
| Accent | #0044FF | Strong blue, used sparingly |
| Accent Light | #6798FF | Lighter blue for hover/secondary |
| Borders | #1E1E1E or rgba(255,255,255,0.24) | Subtle, low contrast |
| Gradient overlays | rgba(10,10,10,0) to #0A0A0A | Used to fade images into background |

**Key insight:** The palette is extremely restrained. Dark mode throughout, with blue as the only real accent. This forces content (especially product screenshots) to be the visual focus. No competing colors.

### Typography System
| Level | Font | Size | Line Height | Weight | Extras |
|---|---|---|---|---|---|
| H1 | Inter / Space Grotesk | 56px | 64px | 500 | letter-spacing: -2px |
| H2 | Inter / Space Grotesk | 40px | 48px | 500 | letter-spacing: -1px |
| H3 | Inter | 24px | 32px | 500 | -- |
| Body | Inter | 20px | 28px | 400 | -- |
| Label/Caption | JetBrains Mono | 14px | -- | 400 | uppercase, letter-spacing: 1px |
| Serif accent | EB Garamond | varies | -- | -- | Used for editorial/quote moments |

**Key insight:** Four font families is unusually high for a SaaS site, but each serves a distinct role: Inter for UI, Space Grotesk for display impact, JetBrains Mono for technical/label credibility, EB Garamond for warmth in testimonials. The negative letter-spacing on headlines is critical for that modern, tight feel.

### Spacing System
| Context | Desktop | Tablet | Mobile |
|---|---|---|---|
| Container padding | 124px | 64px | 16px |
| Section gap | 96px | 48px | -- |
| Grid gap | 32px | 24px | -- |
| Card internal padding | 24px | -- | -- |
| Button padding | 10px 16px | -- | -- |

**Key insight:** The 124px container padding on desktop creates generous whitespace margins. This is a luxury spacing pattern -- it signals premium positioning.

### Button Styles
| Type | Background | Text | Border | Radius | Hover |
|---|---|---|---|---|---|
| Primary | #FFFFFF | #0A0A0A | none | 8px | bg: #CECECE |
| Secondary/Ghost | rgba(255,255,255,0.08) | #FFFFFF | 1px solid rgba(255,255,255,0.24) | 8px | bg: #313131 |

### Card and Surface Treatments
- Standard border-radius: 8px
- Large/featured cards: 66px border-radius (pill-like, distinctive)
- Borders: 1px solid #1E1E1E (very subtle)
- Backdrop blur: 8px on overlay elements (glassmorphism-lite)
- No heavy drop shadows; depth created through background color stepping

### Responsive Breakpoints
| Breakpoint | Max Width | Notes |
|---|---|---|
| Desktop | 1512px | Full 12-column grid |
| Tablet | 1280px | 5-6 columns |
| Mobile | 799-850px | 3-4 columns, stacked layout |

---

## 5. WHAT MAKES IT FEEL LIKE A MODERN PRODUCT LAUNCH PAGE

**A. Dark mode as default.** This is the defining aesthetic choice. It positions the product as technical, premium, and current. Light-mode SaaS pages now read as "2020."

**B. Negative letter-spacing on headlines.** The -2px tracking on H1 creates visual density and urgency. Combined with 56px size, it feels authoritative without being aggressive.

**C. Product UI as hero visual.** Instead of illustrations or stock photos, the actual product interface serves as the background imagery. This signals confidence in the product itself.

**D. Monospace labels.** Using JetBrains Mono for section labels and step numbers (01, 02, 03, 04) adds a technical, engineering-forward aesthetic. It says "built by serious people."

**E. Scroll-driven storytelling.** The sticky How It Works section transforms scrolling into a narrative device. The user does not click tabs -- they scroll, and the content transitions. This is the dominant interaction pattern in 2025-2026 SaaS sites.

**F. Restrained color.** One accent color (blue) on a black/white base. No gradients on UI elements, no multi-color palettes. The restraint signals taste and focus.

**G. Quantified social proof.** Not just "our customers love us" -- specific numbers (2.3x ROI, 30hrs saved, 66% faster) backed by a named third-party study (Forrester). This is enterprise-grade credibility.

**H. Generous whitespace.** 124px container padding, 96px section gaps. The page breathes. Content does not compete for attention.

**I. Ghost buttons as secondary CTAs.** The semi-transparent secondary button is a 2025-2026 staple. It provides a second action without visually competing with the primary CTA.

**J. Compliance section placement.** Trust/security near the bottom is intentional -- it catches enterprise buyers who scrolled past the emotional pitch and need rational reassurance before converting.

---

## 6. UNIQUE INTERACTIVE AND LAYOUT PATTERNS

### A. Sticky Scroll Carousel (How It Works)
The most distinctive pattern on the page. A two-column layout where the left column has text content for 4 steps, and the right column has a sticky product screenshot that transitions/fades as the user scrolls through the steps. This replaces traditional tab interfaces and creates a cinematic feel.

**Implementation notes for Figma:**
- Design as a tall scrollable frame with a fixed-position image panel
- Each step should have clear visual state (active vs inactive, controlled by opacity)
- Transitions: 300ms ease-out fade between screenshots
- Step numbers in monospace, 14px, uppercase

### B. Gradient Fade Overlays
Product screenshots and background imagery are not hard-cropped. Instead, they fade into the background using CSS gradients (transparent to #0A0A0A). This creates seamless visual flow between sections.

**Implementation notes for Figma:**
- Use gradient fills on rectangles overlaying images
- Direction varies: bottom-to-top for hero, edges-to-center for feature images
- This is the single most impactful visual trick on the page

### C. Numbered Step System
Steps labeled 01, 02, 03, 04 in JetBrains Mono create a visual rhythm and give users a sense of progress. The numbering is zero-padded, which is a subtle design detail that reinforces the technical aesthetic.

### D. Testimonial Carousel with Numbered Pagination
Instead of dots or arrows, the testimonial carousel uses numbered navigation (01, 02, 03) in the same monospace style as the How It Works section. This creates visual consistency across interaction patterns.

### E. Review Badge Integration
G2 and Capterra scores are displayed inline with the logo bar, not in a separate section. This bundles two types of social proof (brand logos + review scores) into one compact section, avoiding redundancy.

### F. Beta Tags on Features
Several features are tagged "(Beta)" which serves dual purpose: it signals active development/innovation, and it sets expectations. In a Figma layout, these would be small pill badges next to feature names.

---

## SUMMARY: Figma Planning Checklist

When building Consultry page layouts inspired by this analysis, prioritize:

1. **Dark background (#0A0A0A or similar near-black) as the base**
2. **Single accent color, used sparingly, for primary actions only**
3. **Tight letter-spacing (-1px to -2px) on display headlines**
4. **Monospace font for labels, step numbers, and category tags**
5. **Gradient fade overlays on all product imagery (never hard crop)**
6. **Generous container padding (100px+ on desktop)**
7. **Section gaps of 80-96px to let content breathe**
8. **Sticky scroll interactions for multi-step feature explanations**
9. **Dual CTA pattern: solid primary + ghost secondary**
10. **Social proof ordered as: logos first, stats second, testimonials third**
11. **Compliance/trust section near the bottom, before footer**
12. **Persuasion arc ordering: Promise > Authority > Mechanism > Proof > Objection handling**
