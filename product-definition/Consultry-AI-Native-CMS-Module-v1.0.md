# Consultry - AI-Native CMS / Brand & Page Generation Module v1.0

**Status:** Source-Candidate / Strategic Suite Idea, nicht MVP-locked  
**Datum:** 27.06.2026  
**Rolle im Doc-Stack:** Ergaenzt die Product Vision um einen spaeteren Suite-Baustein: ein AI-natives Brand-, Offer- und Page-Generation-Modul fuer Landingpages und Angebotsseiten.  
**Bezug:** [Product Vision](./Consultry-Product-Vision-v1.0.md), [Virtual Harness & Second Brain Refinement](./Consultry-MVP-Virtual-Harness-Second-Brain-Refinement-v1.0.md), [Idea Presentation Baseline](./Consultry-Idea-Presentation-Baseline-v1.0.md).

> **Kurzfassung.** Nicht "noch ein CMS", sondern ein **AI-native Brand & Page System**: Consultry kennt Marke, Tonalitaet, Sprachen, Design-Ansatz, Produkte, Offers, Referenzen und Proofs. Daraus entstehen editierbare, stark anpassbare Landingpages und Page-Varianten, die per LLM verfeinert werden koennen - auf Wunsch on the fly, aber immer mit Brand-Gates, Proof-Gates und menschlicher Freigabe.

---

## 1. Strategische These

Beratungen haben nicht nur ein Proposal-Problem. Sie haben auch ein **Offer-Clarity- und Go-to-Market-Content-Problem**:

- Angebote, Use Cases, Referenzen und Methodik leben in Slides, Docs, alten Webseiten, Partnerwissen und Delivery-Artefakten.
- Landingpages sind oft generisch, veraltet oder schwer auf Branche, Persona, Sprache und konkretes Angebot zuzuschneiden.
- Klassische CMS speichern Seiten. Sie verstehen aber selten Brand Voice, Beratungsangebote, Proofs, Zielgruppen, Compliance-Grenzen und Design-System als zusammenhaengendes Arbeitsmodell.

Consultry kann hier spaeter stark sein, weil der Work Harness ohnehin Korpus, Angebote, Referenzen, Skill Graph, Brand-Artefakte, Sprache und Approval kennt. Das CMS-Modul waere die **publizierende Kante des Second Brain**.

---

## 2. Was Das Modul Ist

**Name-Kandidat:** AI-native Brand & Page CMS  
**Alternative kurz:** Page Harness  
**Interne Kategorie:** Brand/Offer/Page Generation Layer

Das Modul buendelt:

| Baustein | Zweck |
|---|---|
| `BrandMemory` | Markenversprechen, Positionierung, verbotene Claims, bevorzugte Begriffe, Tonalitaet |
| `LanguageProfile` | DE/EN/weitere Sprachen, formell/nahbar, regionale Varianten, Glossar |
| `DesignSystemProfile` | Farben, Typografie, Komponenten, Layout-Regeln, Bildstil, Interaction-Stil |
| `ProductOfferCatalog` | Leistungen, Pakete, Zielgruppen, Outcomes, Proof-Anforderungen |
| `ProofLibrary` | Referenzen, Case Studies, Zitate, Zahlen, Zertifikate, SourceBindings |
| `PageBlueprint` | Ziel, Zielgruppe, Funnel-Stufe, Seitenstruktur, Conversion-Ziel |
| `PageVariant` | konkrete generierte oder manuell verfeinerte Variante |
| `PageSection` | editierbare, belegbare Sektion mit Style- und Claim-Metadaten |
| `PublicationTarget` | Export nach Next.js, statischem HTML, Webflow/Headless-CMS oder Preview |

Die zentrale Idee: Eine Page ist kein freier Textblob. Sie ist ein **strukturierter, versionierter, source-aware Arbeitsgegenstand**.

---

## 3. Scope-Grenze

### Drin

- Landingpages fuer Angebote, Branchen, Use Cases, Events, Kampagnen und Proof-Seiten.
- LLM-editierbare Page-Sections: "mach es konkreter", "mehr DACH-tonal", "weniger Buzzwords", "fuer CIO statt CEO", "auf Deutsch/Englisch".
- Hohe Customization ueber Page Intent, Audience Segment, Sprache, Design Tokens, Offer-Modul und Proof-Auswahl.
- On-the-fly Page Generation fuer Preview, Kampagnenvarianten oder Sales-Kontexte.
- Human Approval vor Veroeffentlichung.
- Export/Publish-Gates statt autonomem Live-Publish.

### Nicht drin im MVP

- Kein Ersatz fuer den aktuellen `marketing-site/` Workstream.
- Kein H1-MVP-Modul.
- Kein autonomes SEO-Spam-/Programmatic-Page-System.
- Keine unbelegte Case-Study- oder Kundenclaim-Generierung.
- Keine personenbezogene Dynamic-Personalization ohne Consent und klare Rechtsgrundlage.
- Kein vollwertiger Webflow/Contentful/Sanity-Ersatz als Day-1-Versprechen.

**Revision zur alten CMS-Grenze:** Klassisches Marketing-CMS bleibt out-of-MVP und out-of-Core. Das neue Modul ist nur dann strategisch sinnvoll, wenn es AI-native ist: Brand Memory + Offer Catalog + Proof Library + Page Compiler + Approval.

---

## 4. Harness-Architektur

Das Modul nutzt keinen freien Generator, sondern einen begrenzten `BrandPageHarnessPack`.

```json
{
  "brand_memory_pack": "brandpack_tenant_123_v8",
  "language_policy": "de_formal_near_v3",
  "design_system_profile": "design_consultry_like_v5",
  "offer_pack": "cyber_security_advisory_offers_v4",
  "proof_pack": "approved_cases_and_evidence_v12",
  "page_intent": "landingpage_industry_cio_conversion",
  "publication_policy": "preview_only_until_human_approval",
  "claim_policy": "factual_claims_require_source_binding",
  "output_schema": "page_blueprint_and_sections_v1"
}
```

### Flow

1. User waehlt Ziel: Angebot, Persona, Branche, Sprache, Conversion-Ziel.
2. `PageOrchestrator` baut ein `BrandPageHarnessPack`.
3. `PageCompiler` erzeugt `PageBlueprint`, Sections, Claims, CTAs und Design-Anweisungen.
4. `ClaimVerifier` prueft faktische Aussagen gegen `ProofLibrary` und SourceBindings.
5. `BrandVerifier` prueft Ton, verbotene Claims, Terminologie und Design-Regeln.
6. Mensch editiert per UI oder LLM-Anweisung.
7. Freigabe erzeugt `PublishedPageVersion` oder Export-Artefakt.

---

## 5. On-The-Fly Generation

On-the-fly ist erlaubt, aber nicht als unkontrollierte Live-Magie.

| Modus | Beschreibung | Grenze |
|---|---|---|
| Preview Generation | sofortige Seitenvariante im Editor | nicht oeffentlich, Wasserzeichen/Preview |
| Sales Context Page | temporare, freigegebene Seite fuer konkreten Account-Kontext | Ablaufdatum, keine sensiblen Daten ohne Grant |
| Campaign Variant | A/B- oder Persona-Variante aus approved Blocks | nur approved Proofs und approved Claims |
| Runtime Assembly | Seite wird aus aktuellen Offer-/Proof-Bloecken zusammengesetzt | Cache, Version Pinning, Audit |

MVP-nah waere nur Preview/Export. Runtime-Publishing ist H3+ und braucht starke Observability, Caching, Abuse-Schutz und rechtliche Freigaben.

---

## 6. UX-Prinzipien

- **Editieren statt prompten:** Nutzer bearbeiten Page-Objekte, nicht rohe Prompts.
- **Section Locks:** Belegte Claims, juristische Hinweise und CI-kritische Sektionen koennen gesperrt werden.
- **Brand Controls:** Tonalitaet, Sprache, Formalitaet, Zielgruppe, Offer-Schwerpunkt, Proof-Tiefe als Controls.
- **Design Controls:** Layout-Dichte, Bildstil, CTA-Prominenz, Komponentenfamilie, Theme.
- **Proof Visibility:** Jede starke Aussage zeigt, ob sie aus Brand, Offer, Proof, externem Fakt oder Model-Expertise kommt.
- **Variant Compare:** Varianten nebeneinander vergleichen: Message, Proof, CTA, Laenge, Sprache.

---

## 7. Datenmodell-Erweiterung

| Entity | Zweck |
|---|---|
| `brand_profiles` | tenant-spezifische Brand Memory |
| `tone_guides` | Tonalitaet, Worte, Do/Don'ts, Sprachvarianten |
| `language_profiles` | Lokalisierungsregeln, Glossar, Zielmarkt |
| `design_system_profiles` | Tokens, Komponenten, Layout-Regeln, Assets |
| `offer_catalog_items` | Produkte, Services, Pakete, Outcomes |
| `proof_assets` | Cases, Referenzen, Zertifikate, Zahlen, Quellen |
| `page_blueprints` | Ziel, Zielgruppe, Struktur, Conversion Intent |
| `page_sections` | strukturierte Content-Abschnitte mit Claim-Metadaten |
| `page_variants` | generierte und manuell verfeinerte Varianten |
| `publication_targets` | Export-/Publish-Ziele und Policies |
| `published_page_versions` | freigegebene, versionierte Artefakte |

Diese Entities sollten an SourceBinding, AuditEvent, Approval und Second-Brain-Graph anschliessen, nicht als separater Website-Silo entstehen.

---

## 8. Positionierung In Der Product Suite

| Horizont | Rolle |
|---|---|
| H1 MVP | Nicht bauen. Hoestens intern/dogfood als einfache Export-Experimentstrecke, wenn es die Hauptvalidierung nicht stoert. |
| H2 | Strategic Suite Candidate nach Win/Work-Proof: Offer-Pages, Case Pages, Campaign Pages aus approved Brand/Offer/Proof Memory. |
| H3+ | Dynamische Page Assembly, Multi-site Governance, Publish-Integrationen, Experimentation, Kunden-/Account-spezifische Microsites. |

**Warum spaeter wertvoll:** Das Modul macht den Work Harness sichtbarer nach aussen. Was intern als Evidence Pack, Offer Catalog und Skill Graph gepflegt wird, kann kontrolliert in Marktkommunikation uebersetzt werden.

---

## 9. Risiken Und Guardrails

| Risiko | Guardrail |
|---|---|
| Scope-Creep in generisches CMS | nur Brand/Offer/Proof/Page-Generation, keine breite CMS-Administration als MVP |
| Unbelegte Marketingclaims | factual claims require SourceBinding oder werden markiert/blockiert |
| Brand Drift | BrandVerifier + locked brand tokens + approval |
| SEO-Spam | keine autonome Massenpublikation, Rate Limits, human approval |
| Datenschutz | keine Account-/Personalisierungsseiten ohne Consent, TTL und Grant |
| Design-Beliebigkeit | DesignSystemProfile statt freier CSS-Generierung |
| Wartungschaos | PublishedPageVersion pinnt Pack-Versionen und Claims |

---

## 10. WBS-Skizze Fuer Spaeter

| ID | Paket | Inhalt | Max LOC | Akzeptanz |
|---|---|---|---:|---|
| CMS-01 | Brand Memory schema | brand profiles, tone guides, language profiles | 800 | fixtures validate |
| CMS-02 | Offer Catalog | offers, outcomes, audiences, proof requirements | 900 | offer fixture creates valid pack |
| CMS-03 | Page object model | blueprint, sections, variants, publication targets | 1000 | section graph roundtrip |
| CMS-04 | BrandPageHarnessPack | pack builder for brand, language, design, offer, proof | 900 | missing proof blocks claim |
| CMS-05 | PageCompiler v0 | blueprint + section generation against schema | 1000 | deterministic fixture output |
| CMS-06 | ClaimVerifier | SourceBinding and claim classification for page sections | 900 | unsupported factual claim rejected |
| CMS-07 | BrandVerifier | tone, banned words, terminology, design rule checks | 900 | banned claim/style fixture fails |
| CMS-08 | Page editor alpha | section edit, LLM-refine, variant compare | 1000 | human approval required |
| CMS-09 | Static export | HTML/MDX/JSON export for approved page version | 800 | exported artifact hash stored |

---

## 11. Decision Needed Later

1. Ist das Modul ein Consultry-eigenes Dogfood-Tool zuerst oder ein Kundenmodul?
2. Soll Publishing in Consultry passieren oder nur Export zu bestehendem Marketing-Stack?
3. Welche Publish-Ziele sind realistisch zuerst: Next.js/MDX, Webflow, Headless CMS, statisches HTML?
4. Wie streng muss die Trennung zwischen Sales-Microsites und oeffentlichen Marketingpages sein?
5. Welche Brand-/Design-Inputs sind Pflicht im Onboarding, bevor Page Generation freigeschaltet wird?

---

*Ende v1.0 - Source-Candidate. Nicht in H1-MVP ziehen, bevor Opportunity-to-Concept und Work-Hero validiert sind.*
