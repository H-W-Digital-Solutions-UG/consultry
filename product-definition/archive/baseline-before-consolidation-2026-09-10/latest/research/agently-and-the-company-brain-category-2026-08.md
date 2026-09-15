# Consultry — Agently and the Horizontal "Company Brain" Category

**Status:** Competitive and positioning research. Informs Product/GTM decisions; ratifies nothing.
**Date:** 2026-08-07
**Decision owner:** *none yet* — proposed new Wayfinder ticket: `Position the Consultry firm-knowledge layer against the horizontal company-brain category` (see §8).
**House rules applied:** no invented metrics; competitor claims are marked as claims; assumptions marked †.

---

## 1. Question and boundary

Agently (`agently.dev`) markets a "company brain" built on a temporal knowledge graph — nominally the same primitive as the Consultry Second Brain / Consulting Context Graph. Two questions:

1. Is this a competitive threat to the Consultry backbone, and does anything in the ratified canon need revision?
2. What in their marketing is worth adopting, and what must be explicitly rejected?

This document does **not** revise the Coverage Ledger, Journey Portfolio, the three Reference Threads, or the Click Dummy Experience Contract. It produces positioning input and a proposed decision, nothing more.

---

## 2. What Agently is — verified

| Item | Status | Detail |
|---|---|---|
| Entity | Verified | "Agently, Inc." (privacy policy) |
| Founders | Verified | Omar Ghandour (CEO), Ahmad Hajj (Co-Founder & CTO) — both bylined on own blog |
| Public launch | Verified | Product Hunt 15.07.2026, #4 of day, 381 upvotes. Blog content back to 02.2026 |
| Funding / YC | **Unknown** | No announcement, no press, no YC listing found. A *testimonial* mentions a "YC alum" **customer** — that is not YC backing. Do not repeat as fact. |
| Team size / HQ | **Unknown** | Two identifiable people. No address published anywhere. |
| Customers | Claim, unsourced | "550 Teams already run on it … our one enterprise client" (RevGenius, 29.07.2026). "Team" undefined — signups, active or paying is not stated. |
| Model stack | Claim | Anthropic Claude for the orchestrator, OpenAI for embeddings/entity extraction. Stated openly in docs and privacy policy. |
| Pricing | Verified | $29 / $69 / $199 per month per **workspace**, Team tier "Unlimited team members". Enterprise custom. |

**Positioning, verbatim:** *"The company brain for startup teams."* / *"The whole stack, running itself."* / *"Agently builds a company brain across your whole stack, then spins up agents to handle the work, orchestrated by Jarvis."*

**The one genuinely well-built idea:** the brain is a temporal knowledge graph, not a document pile — *"a connected web of facts, each tagged with when it was true and where it came from"*, so that *"a stale doc doesn't quietly override current reality the way plain keyword search would."* Consultry's ratified bitemporal `ContextAssertion` core (valid time, record time, evidence state, source bindings, revision pins) is the same idea, specified more strictly. **They have weaker machinery and much better words for it.** That asymmetry is the theme of this whole document.

---

## 3. Verdict: primitive overlap, no market overlap

The overlap is real at the primitive layer and disappears entirely at the value layer. Three findings, all from their own published material.

### 3.1 They disqualify our market in writing

From `/blog/ai-work-os`, on when the value proposition weakens:

> **"If your work is highly unique and creative every time, the value proposition is weaker."**

And on who the product is not for:

> "If you're a 500-person company with deep investments in Salesforce, Jira, and Microsoft 365, ripping out those tools for an AI Work OS isn't realistic."

Their stated ROI condition is *"repeatable knowledge work"* across tools. Consulting mandates are the canonical counter-case. This is not an inference about their roadmap — it is their own qualifying criteria, published, and it excludes the Consultry ICP.

### 3.2 The brain they describe is marketing and ops context, not expertise

Their recommended first content for the brain: *"Company overview / Product / service information / Brand guidelines / Customer FAQs / Team info."* Their definition:

> "A company brain is a single, curated source of truth (your positioning, processes, facts, and connected tools) that every AI tool and agent in your business reads from, so they all respond with the same accurate context and voice."

Note what that brain is *for*: consistent voice and accurate self-description. It holds **what the company knows about itself**. The Consultry Context Graph holds **what the firm knows how to do for others** — methods, precedent, evidence, engagement history, capability. Those are different substances with different governance needs, not different sizes of the same thing.

Their storage caps make the same point structurally: 1 GB / 10 GB / 100 GB by tier. That is a positioning-and-SOP corpus, not a delivery corpus.

### 3.3 The multi-client topology is absent, and it cannot be retrofitted

Fetched their `/docs/security-and-privacy`, `/docs/brain`, `/docs/core-concepts` and `/blog/company-brain` in full. Findings:

- Isolation boundary is **the workspace, and only the workspace**: *"Workspaces are fully isolated: one can never read another's data."*
- Roles are Owner / Admin / Member, with *"Member (use all features, no configuration)"*. **No source-level or document-level permission inheritance is described anywhere.**
- Zero occurrences across all fetched pages of: SOC 2, ISO 27001, GDPR, DPA, sub-processor list, data residency, retention schedule, penetration test.
- The `/blog/company-brain` article contains **no** treatment of permissions, access control, confidentiality, or multi-client scenarios.
- They concede the gap themselves in `/blog/glean-alternative`: *"There's no 100-connector permission-mirrored index for a 1,000-person org."*

A consultancy serves multiple clients, sometimes competing ones, under confidentiality obligations, and must route client-bound material through abstraction, de-identification and a rights review before it can become firm-reusable. Consultry already has this as ratified structure — `ReuseCandidate → Abstraktion/De-Identifikation → Rights/Confidentiality Review → ReusableAsset → ReuseApplication`, with `ReusableAsset` as its own Productization Aggregate Root pinning exact versions rather than copying content.

**One brain per company is a topology assumption.** A consultancy needs client-scoped partitions plus a governed promotion path between them. That is not a feature Agently is missing; it is a different shape.

### 3.4 What this means

Agently is **not** a competitor for the Consultry ICP today. It is:

- **Partial category validation.** "Company brain" is becoming a purchasable category with published pricing and a Product Hunt top-5 launch. The concept no longer needs to be explained from zero. That is a tailwind for the Consultry backbone narrative.
- **A pricing anchor to be handled.** A 20-consultant boutique compares €50/seat × 20 = €1.000/month against a horizontal product at $199/month for unlimited members. † The delta is roughly 5×. It is justifiable — client separation, evidence/authority apparatus, reuse economics, EU posture — but the justification must be **explicit in the sales motion**, not assumed. Flagged as an open GTM point in §8.
- **A marketing benchmark.** Two people, no disclosed funding, 68 blog posts, a named category, and a memorable vocabulary. Consultry has stronger substance and markedly weaker language. §5 addresses this.

---

## 4. The asymmetry that defines the category

This is the argument the current documents do not make, and it is the sharpest differentiator available.

> **For a startup, firm knowledge is overhead. For a consultancy, firm knowledge is inventory.**
>
> Agently sells a brain so the company can spend less attention on what it knows. Consultry serves firms whose knowledge and whose people's expertise are the thing being sold, priced, warranted and legally exposed.

Five consequences follow, and each one is already built into Consultry canon — they simply have never been argued together as a differentiator:

| Consequence | Consultry's ratified position | Agently |
|---|---|---|
| **Isolation topology** | Client-scoped context + governed promotion to firm asset via rights review | One workspace = one brain. No client dimension. |
| **Accountability, not telemetry** | `Decision and Effect Authority Spine`: accountable human Responsibility, Authority basis, and actual authorizing Person, separately attributable. `Single-Human Responsible Completion` for the Boutique. AI holds no business authority. | "Receipts" = action log ("Posted to #leadership 9:24"). Records what happened, not who is answerable. |
| **Evidence obligations** | Risk-based evidence/review state on material claims; provenance triad as review signal; named human backstop for external use | *"never used to train models"* + encryption. No evidence model. |
| **Reuse rights** | Reuse permitted only where IP, client, confidentiality and usage rights allow; assets reference pinned versions rather than copying content | No concept of whether a fact may be reused. |
| **Economics of time** | *"Der wirtschaftliche Hebel ist nicht, dieselben eingesparten Stunden unter einem T&M-Vertrag fiktiv erneut abzurechnen"* — supports T&M, fixed-price, outcome and productized models | *"Run a 500-person company with five."* Labor substitution. |

That last row is the commercially decisive one. A consultancy that automates its own billable hours under T&M **destroys its own revenue**. Vision §1.6 already refutes the naive version of the reuse story before anyone can raise it. That paragraph reads as compliance caution today; it is actually a proof of P&L literacy and belongs in the first sales conversation.

### 4.1 The gap this exposes — human expertise

The document audit found something that matches the instinct behind this request exactly:

> **There is currently no sentence in any core positioning document that says consultants' expertise is the asset being amplified.**

What exists instead is three adjacent framings, none of which do the job:

1. **Consultant as sensor** (the "Krake"/octopus image) — well developed, but value flows *to* Sales/Account. The consultant is an input.
2. **Consultant as accountable approver** (`Single-Human Responsible Completion`, human backstop) — precisely specified, but framed as a governance constraint.
3. **Capability Evidence** — expertise as a modeled claim, written almost entirely defensively: *"not a scoring system," "no person ranking," "kein People Scoring."*

The docs are meticulous about what Consultry must never do **to** consultants and near-silent on why their expertise is the thing being amplified. The affirmative claim exists in exactly one place — the anchor sentence *"macht ihre kollektive Expertise und ihr Firmenwissen … handlungswirksam"* — and nowhere in customer-facing material.

Meanwhile Agently's entire frame is human substitution: "AI employees vs. hiring", "AI employees vs. freelancers", *"they're employees that use the tools on your behalf."* For a consulting audience that frame is not merely wrong, it is **hostile** — it prices the audience's product at zero.

**This is the clearest open lane in the category.** Nobody in the horizontal company-brain space can occupy "your people's expertise is the asset," because their whole pitch is that people are the cost.

---

## 5. What to adopt

Ranked by value, each with the Consultry translation. Candidate lines are marked as candidates — none is ratified.

### 5.1 Adopt the receipt — and make it carry responsibility

Their best trust device is a word: **receipts.** Concrete, everyday, non-technical, implies auditability without saying "audit trail." Rendered as minute-stamped sequential lines: *"Save email sent via Gmail 9:23 · maya@acme"*, *"ticket-127 updated 9:25 · status: in-progress"*, and the master line: *"You see the receipts."*

Consultry currently has `AuditEvent` and `Approval-Card` as feature-list items with **UI/Reporting deferred to H2** — i.e. the accountability apparatus is real and invisible to a buyer.

**Translation.** An Agently receipt answers *what did the system do*. A Consultry receipt must answer *who is answerable for this, on what authority, and what evidence stood behind it*. That is not an audit log, it is a **Verantwortungsbeleg** — and it is a stronger artifact than theirs, because a consultancy's output carries professional liability.

Directly actionable: the Systemic Platform Click Dummy is the current gate. Making the responsibility receipt a **visible, named surface** in the Click Dummy costs little and tests the single most defensible part of the product. Candidate for the Click Dummy scope conversation, not a scope change decided here.

### 5.2 Adopt the temporal-truth sentence pattern

> *"A stale doc doesn't quietly override current reality the way plain keyword search would."*

Excellent sentence. Consultry has the stronger machinery — bitemporal assertions, valid/record time, evidence state, supersedes semantics — and no sentence at all. Candidates:

- DE: **„Eine veraltete Fassung überschreibt nicht still die aktuelle Wahrheit."**
- DE, consulting-specific: **„Version 7 wusste nicht, was Version 3 des Abgleichs zeigt. Consultry schon."** *(binds directly to the ratified ERP Wave-1 / Reconciliation Report v3 anchor)*
- EN: **"What was true last quarter does not quietly speak for what is true today."**

### 5.3 Adopt the recurring-entity demo device

Their homepage traces **one incident** — Acme / `ch_8291` / $1,840 / `ticket-127` — through every panel: signal feed, brain graph, agent board, receipts, output artifact. The reader follows a single thread across surfaces. It is the strongest thing on their page and it costs nothing but discipline.

The Click Dummy Experience Contract already requires exactly this: *"Gemeinsamer deterministischer State muss über My Work, Client/Project, Co-Work, Artifact/Plan, Outcome/Test, Effect/Handoff und Knowledge-Projektionen ripplen."* Agently confirms the device works on a **landing page**, not just in a prototype. The ERP Wave-1 Readiness Recommendation v7 / Reconciliation Report v3 case is the ready-made payload.

### 5.4 Adopt "shipped, not chatted" — as "review-ready, not chatted"

> *"Shipped, not chatted." / "Not chat logs. Not 'ask me anything.' Real files. Real decisions."*

Consultry's UX Operating Model already holds this position (object-/work-centered; chat is only one control surface) with no comparably sharp line. Consultry's version must not say "shipped" — nothing at a consultancy ships without a named human. Candidates:

- DE: **„Kein Chatverlauf. Eine prüffähige Arbeitsgrundlage."**
- DE: **„Nicht beantwortet. Vorbereitet — mit Quelle und Verantwortung."**
- EN: **"Not a chat log. A reviewable basis for a decision someone signs."**

### 5.5 Adopt the self-limiting comparison table

Their Glean post concedes what they cannot do (*"Agently isn't trying to be Glean"*) and footnotes sales-gated figures as *"buyer-reported."* This is precisely the ratified Consultry house rule — no invented metrics, † for assumptions — and it demonstrates the discipline reads as **credibility, not weakness**. Direct support for the existing `T10 Deck-Ehrlichkeit` decision. Use the same device in the investor deck's competitive slide.

### 5.6 Adopt the NDA-compatible traction device

Their testimonials are anonymized but carry **cohort tags and provenance channels**: *"cohort 2 · paid pilot · slack dm · 4 may"*. Unverifiable, but it signals a structured design-partner programme rather than cherry-picked praise.

DACH consultancies will not want to be named as early adopters. This device lets real design-partner traction be shown under NDA — **provided the underlying facts are real**, which the house rules already require. Relevant to the open G6/G7 design-partner sourcing points.

### 5.7 Consider the openness claim — as an open question, not a decision

Their sharpest strategic move: expose the brain over MCP so Claude, Cursor and others can use it. *"Your knowledge is deliberately not locked inside our assistant."*

For DACH buyers with sovereignty concerns this framing is strong — the firm's context is theirs, portable, not hostage. But Consultry's instincts run the other way (bounded Harness, no free internet access, Privacy Egress Gateway). **This is a genuine open question, not an adoption recommendation:** does Consultry offer a policy-gated, tenant-scoped MCP surface onto the firm's own context? Belongs in the Technical Wayfinder after the PoC handoff, flagged now so it is not decided by default.

### 5.8 Note the category-creation play

Five-phase history narrative (individual tools → automation → assistants → copilots → **AI Work OS**) to make the category feel inevitable, plus 11 bottom-funnel `[competitor] alternative` posts. The `Beratung im KI-Zeitalter` thesis is Consultry's equivalent and is currently unpublished. No decision needed now — the wedge is not proven and GTM W6 restricts OS framing to vision/deck. Worth revisiting post-validation.

---

## 6. What to reject explicitly

| Reject | Why |
|---|---|
| **"AI employees" / labor substitution** | Prices the audience's product at zero. Directly contradicts the ratified seat-paradox answer: *"Consultry verkauft Wachstum, nicht Schrumpfung."* |
| **"Run a 500-person company with five"** | A partner reads this as "fire your consultants." The inverse is Consultry's line: *your consultants' experience works in every mandate, not only the one they are staffed on.* |
| **"Works while you sleep" / full autonomy** | Violates GI-1b human backstop and the ratified rule that AI holds no business authority. Their own FAQ says agents *"can run fully autonomously."* Consultry cannot say this and should not want to. |
| **"The layer between today's AI and tomorrow's AGI"** (their Product Hunt line) | Unfalsifiable. Fails the no-invented-claims rule on sight. |
| **Unverified quantitative hero claims** | Their "100+ connectors" appears on the homepage, FAQ and Product Hunt, while their own docs say **67** and the CTO's own August post says **25+**. One checkable inconsistency undermines every other claim. Direct cautionary support for the open action to source the deck's market placeholders and verify the Productive.io figure. |
| **A public live-metrics page before there is traffic** | Their `/live` page — *"Agently, working right now"* — renders "Connecting to the live feed…" and nothing else. A proof surface that shows nothing is worse than no proof surface. |
| **Marketing that outruns the product** | Their homepage sells six named agents and a controllable board; their docs say the named agents *"are gone"* and *"there's no sub-agent to summon or pick."* Buyers who evaluate on the homepage and onboard into the product feel the gap. |

---

## 7. Consequences for Consultry positioning

Three, in priority order.

### 7.1 Name the expertise claim (highest value, lowest cost)

The open lane in §4.1 is unoccupied and Consultry is uniquely able to occupy it. Candidate lines — none ratified, all need the usual grilling:

**On expertise as the amplified asset**
- DE: **„Die Erfahrung Ihrer besten Leute wirkt in jedem Mandat — nicht nur in dem, in dem sie gerade stehen."**
- DE: **„Consultry ersetzt keine Berater. Es lässt die Erfahrung Ihrer Berater mitarbeiten."**
- EN: **"Your best people's judgement reaches every mandate, not only the one they are staffed on."**

**On knowledge as inventory**
- DE: **„Ihr Firmenwissen ist Ihr Inventar. Consultry macht es einsatzfähig — mit Quelle, Verantwortung und Freigabe."**
- EN: **"For a consultancy, what the firm knows is not overhead. It is the inventory."**

**Against the horizontal brain**
- DE: **„Andere Systeme wissen, was in Ihrer Firma passiert. Consultry weiß, was Ihre Firma kann — und wer dafür geradesteht."**
- EN: **"A company brain knows what your company is doing. Consultry knows what your firm can do — and who answers for it."**

Note this also repairs a documented gap: the only German customer-facing phrase that ever existed for the knowledge layer — *„Das Fundament: euer Wissensspeicher"* — is already flagged for removal, and no replacement was ever adopted. There is no German name for the Second Brain, and neither "Second Brain" nor "Context Graph" appears in the ratified `CONTEXT.md` glossary.

### 7.2 The competitive frame is one wedge out of date

Named competitors across the corpus: Attio, HubSpot, Salesforce (CRM), Loopio, Responsive, AutogenAI, DeepRFP (RFP), Clay, Apollo (prospecting), Productive, MOCO (PSA), cosinex and TED aggregators (tender).

**Glean, Notion AI and Microsoft Copilot appear nowhere in the staged corpus.** That is the exact category a firm-knowledge positioning gets compared against — and it is now the category a prospect will name in the room, because horizontal company-brain products are launching with published pricing. The competitive matrix belongs in the same revision pass as §7.1.

Their Glean attack is also structurally available to Consultry, inverted: they beat Glean on **buyability** for a five-person team. Consultry's first-class archetype is the 5–30 person Partner-led Boutique — the same play works against enterprise consulting tech that will not sell to a boutique.

### 7.3 Pricing needs an explicit answer, not an implicit one

† A 20-consultant boutique sees €1.000/month for Consultry against $199/month unlimited-seat horizontal alternatives. The justification is real (client separation, authority/evidence apparatus, reuse economics, EU posture, consulting defaults rather than building blocks) but it must be **said**. Add to the open COGS/unit-economics work; do not treat as settled by the existing €50/seat decision.

---

## 8. Proposed decisions and open points

**Nothing in the ratified canon requires revision.** The backbone thesis survives contact with a real horizontal competitor — arguably strengthened, since the competitor published qualifying criteria that exclude our ICP. The current sequencing gate (Systemic Platform Click Dummy → Three-Slice Contract → PoC Handoff) is unaffected and should not be reopened.

**Proposed new Wayfinder ticket:** `Position the Consultry firm-knowledge layer against the horizontal company-brain category`, covering:

1. Ratify an affirmative human-expertise value claim (§4.1, §7.1) — currently absent from all positioning material.
2. Decide a German customer-facing name for the firm-knowledge layer, or ratify that it stays un-named and is always expressed through effect.
3. Extend the competitive matrix with the enterprise-knowledge-assistant class (§7.2).
4. Decide whether the responsibility receipt becomes a visible Click Dummy surface (§5.1) — coordinate with the Click Dummy scope contract rather than deciding here.

**Open points to route into existing work:**

- **GTM / unit economics:** the per-seat vs per-workspace price comparison (§7.3).
- **Technical Wayfinder, post-PoC-handoff:** whether Consultry exposes a policy-gated MCP surface onto tenant context (§5.7).
- **Design partner sourcing (G6/G7):** the NDA-compatible cohort-tagged traction device (§5.6).

**Monitoring posture:** Agently is worth a re-check in ~2 quarters† — specifically for any move toward client-scoped partitioning, rights-aware reuse, or professional-services language. Those would be the first real signals of convergence. Nothing observed today points that way.

---

## 9. Source register

All fetched 2026-08-07. Marketing copy quoted verbatim; claims are labeled as claims.

| Source | Used for |
|---|---|
| [agently.dev](https://agently.dev/) | Hero copy, positioning, receipts device, demo mechanics, FAQ |
| [agently.dev/pricing](https://agently.dev/pricing) | Tier structure, per-workspace pricing, storage caps |
| [agently.dev/blog/company-brain](https://agently.dev/blog/company-brain) | Brain definition, curation philosophy, first-content list; verified absence of permissions/multi-client treatment |
| [agently.dev/blog/ai-work-os](https://agently.dev/blog/ai-work-os) | Disqualifying criteria, "highly unique and creative" exclusion, category-creation narrative |
| [agently.dev/blog/ai-work-os-for-startups](https://agently.dev/blog/ai-work-os-for-startups) | ICP framing, "shared company brain" |
| [agently.dev/blog/glean-alternative](https://agently.dev/blog/glean-alternative) | Comparison table, buyability wedge, self-limiting concession, 25+ connector figure |
| [agently.dev/blog/zapier-alternative](https://agently.dev/blog/zapier-alternative) | Automation-vs-agents argument, candid weakness table |
| [agently.dev/docs/brain](https://agently.dev/docs/brain) · [/core-concepts](https://agently.dev/docs/core-concepts) · [/integrations](https://agently.dev/docs/integrations) · [/security-and-privacy](https://agently.dev/docs/security-and-privacy) · [/mcp-server](https://agently.dev/docs/mcp-server) | Temporal graph mechanics, workspace-only isolation, role model, connector count contradiction, MCP exposure, compliance absence |
| [agently.dev/live](https://agently.dev/live) | Broken proof surface |
| [Product Hunt](https://www.producthunt.com/products/agently) | Launch date, rank, upvotes, "AGI layer" claim |
| [RevGenius launch post](https://community.revgenius.com/x/chat-sales/uhcehrtn04gf/announcing-the-public-launch-of-agently-one-brain) · [intro post](https://community.revgenius.com/x/intros/iliiv7cntsig/introducing-agentlydev-an-autonomous-brain-connect) | "550 Teams" claim, founder background claim, governance pushback thread |

**Not retrievable:** LinkedIn company page, X/@Agently_AI, Crunchbase (robots-blocked). **No results:** funding announcements, YC listing, press coverage, G2/Capterra reviews for agently.dev.

> Note: `agently.tech` (Python framework) and `agently.com` (sales coaching) are **different companies**. The G2 "Agently" seller page points to `agently.tech` and is not this product.
