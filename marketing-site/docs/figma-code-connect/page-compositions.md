# Page Compositions: Figma Frames to React Routes

> Maps each dark final page frame to its React route and shows the component composition.
> Figma page: `node-id=2339-1202` ("dark Website final refinement")

---

## Homepage / Desktop -- Dark

**Figma frame:** `2339:1203`
**React route:** `/` -- `src/app/page.tsx`

```
+-------------------------------------------------------+
| Marketing Announcement Bar  (2339:1204)                |  --> AnnouncementBar.tsx
+-------------------------------------------------------+
| Marketing Nav Transparent   (2339:1205)                |  --> Nav.tsx
+-------------------------------------------------------+
| Marketing Hero Showcase     (2339:1206)                |  --> HeroShowcase.tsx
|   (includes HeroShowcaseRowMotion + Product UI mockups)|      + HeroShowcaseRowMotion.tsx
+-------------------------------------------------------+
| Section -- Product Deep-Dive (2339:1207)               |
|   Marketing Section Header  (2339:1208)                |  --> SectionHeader.tsx
|   Feature Progress Stepper  (2339:1209) Step=01        |  --> FeatureShowcaseScroller.tsx
|   Feature Progress Stepper  (2339:1210) Step=02        |      + FeatureShowcaseStep.tsx (x4)
|   Feature Progress Stepper  (2339:1211) Step=03        |
|   Feature Progress Stepper  (2339:1212) Step=04        |
+-------------------------------------------------------+
| CTA -- After Deep Dive      (2369:890)                 |  --> CTABand.tsx
+-------------------------------------------------------+
| Section -- Metrics           (2339:1213)               |
|   Marketing Metric Card     (2339:1214)                |  --> MetricsBand.tsx
+-------------------------------------------------------+
| Marketing Rich CTA Band     (2339:1218)                |  --> RichCTABand.tsx
+-------------------------------------------------------+
| Marketing Footer             (2339:1219)               |  --> Footer.tsx
+-------------------------------------------------------+
```

---

## Product / Desktop -- Dark

**Figma frame:** `2339:1220`
**React route:** `/produkt` -- `src/app/produkt/page.tsx`

```
+-------------------------------------------------------+
| Marketing Nav Transparent   (2339:1221)                |  --> Nav.tsx
+-------------------------------------------------------+
| Product Page Hero / Product (2342:5342)                |  --> ProductPageHero.tsx
+-------------------------------------------------------+
| Section -- Video Demo        (2339:1223)               |
|   Marketing Video Embed     (2339:1224)                |  --> ProductDemoModule.tsx
+-------------------------------------------------------+
| Section -- Feature Detail 1  (2339:1225)               |
|   Feature Showcase Row      (2339:1226) Image-Left     |  --> FeatureShowcaseRow.tsx
+-------------------------------------------------------+
| Section -- Feature Detail 2  (2339:1227)               |
|   Feature Showcase Row      (2339:1228) Image-Right    |  --> FeatureShowcaseRow.tsx
+-------------------------------------------------------+
| Section -- Feature Detail 3  (2339:1229)               |
|   Feature Showcase Row      (2339:1230) Image-Left     |  --> FeatureShowcaseRow.tsx
+-------------------------------------------------------+
| CTA -- After Features        (2360:871)                |  --> CTABand.tsx
+-------------------------------------------------------+
| Feature List Sidebar         (2342:5278)               |  --> ProductArchitecture.tsx
+-------------------------------------------------------+
| Section -- FAQ               (2339:1235)               |
|   Section Header            (2339:1236)                |  --> SectionHeader.tsx
|   FAQ Items (x8)            (2339:1237..1244)          |  --> FAQAccordion.tsx + FAQItem.tsx
+-------------------------------------------------------+
| Marketing Rich CTA Band     (2342:3319)                |  --> RichCTABand.tsx
+-------------------------------------------------------+
| Marketing Footer             (2339:1246)               |  --> Footer.tsx
+-------------------------------------------------------+
```

---

## About / Desktop -- Dark

**Figma frame:** `2339:1247`
**React route:** `/unternehmen` -- `src/app/unternehmen/page.tsx`

```
+-------------------------------------------------------+
| Marketing Nav Transparent   (2339:1248)                |  --> Nav.tsx
+-------------------------------------------------------+
| Hero Image Placeholder      (2371:876)                 |  --> (custom frame, no component)
+-------------------------------------------------------+
| Marketing Hero Minimal      (2339:1249)                |  --> HeroMinimal.tsx
+-------------------------------------------------------+
| Section -- Team              (2339:1250)               |
|   Section Header            (2339:1251)                |  --> SectionHeader.tsx
|   Team Card (x3)            (2339:1253..1255)          |  --> TeamCard.tsx
+-------------------------------------------------------+
| Section -- Narrative + Proof (2339:1256)               |
|   Narrative Panel + Proof Rail                         |  --> AboutNarrative.tsx
+-------------------------------------------------------+
| Marketing Rich CTA Band     (2342:3335)                |  --> RichCTABand.tsx
+-------------------------------------------------------+
| Marketing Footer             (2342:5302)               |  --> Footer.tsx
+-------------------------------------------------------+
```

---

## Kontakt / Desktop -- Dark

**Figma frame:** `2374:876`
**React route:** `/kontakt` -- `src/app/kontakt/page.tsx`

```
+-------------------------------------------------------+
| Marketing Nav Transparent   (2374:877)                 |  --> Nav.tsx
+-------------------------------------------------------+
| Marketing Hero Minimal      (2374:889)                 |  --> HeroMinimal.tsx
+-------------------------------------------------------+
| Marketing Contact Form      (2374:894)                 |  --> StaticContentPage.tsx
+-------------------------------------------------------+
| Marketing Footer Modern     (2374:924)                 |  --> Footer.tsx
+-------------------------------------------------------+
```

---

## Legal Pages (shared pattern)

**Figma frames:** Datenschutz (`2339:1330`), Nutzungsbedingungen (`2339:1407`), Impressum (`2339:1487`), Copyright (`2339:1564`), Trademark (`2339:1635`), Cookie-Einstellungen (`2339:1660`)
**React routes:** `/datenschutz`, `/agb`, `/impressum`, `/cookies`

```
+-------------------------------------------------------+
| Marketing Nav Transparent                              |  --> Nav.tsx
+-------------------------------------------------------+
| Content                                                |
|   LegalPageGradient (top gradient)                     |  --> LegalPageTemplate.tsx
|   Eyebrow: "RECHTLICHES"                               |
|   Title                                                |
|   Sections (title + body pairs)                        |
|   Stand: date                                          |
+-------------------------------------------------------+
| Marketing Footer (inline or component)                 |  --> Footer.tsx
+-------------------------------------------------------+
```

All legal pages share `LegalPageTemplate.tsx` with different content from `src/lib/content/de/`.

---

## Composition Summary

| Figma Page Frame | Route | Key Sections |
|---|---|---|
| Homepage / Desktop -- Dark | `/` | Hero, Deep-Dive Stepper, Metrics, Rich CTA |
| Product / Desktop -- Dark | `/produkt` | Product Hero, Video, Feature Rows, Architecture, FAQ |
| About / Desktop -- Dark | `/unternehmen` | Hero Minimal, Team Grid, Narrative + Proof Rail |
| Kontakt / Desktop -- Dark | `/kontakt` | Hero Minimal, Contact Form |
| Legal pages (6 frames) | `/datenschutz`, `/agb`, `/impressum`, `/cookies` | Legal Page Template |
