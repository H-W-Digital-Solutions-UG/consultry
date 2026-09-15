# Consultry — The Strictness Dial: what v1 actually has to do

**Status:** Decision proposal. Ratifies nothing. Written to be adopted or shot down in one sitting.
**Date:** 2026-08-07
**Origin:** Founder input 07.08.2026 — Belegbarkeit is a *quiet enabler*, not the headline; the load-bearing spine is *knowledge, and also project acquisition*; the painkiller is *"everything of the above"*; direction: **less strict, dialed to easy achievability, regulate later.**

---

## 1. Your two answers, taken seriously

### "Everything of the above" — defensible, once you see the structure

Three of the four painkillers are **one mechanism at three moments**:

| Moment | Trigger |
|---|---|
| Senior judgement unblocked | knowledge reaches you when *the person who has it can't* |
| Recall — what we already know | knowledge reaches you when *you didn't know to ask* |
| Catching what you'd have missed | knowledge reaches you when *you were about to be wrong* |

Same mechanism — **firm knowledge arrives at the moment of work** — three triggers. You can legitimately have all three, because they are one product doing its job under different conditions. You lead with whichever a given prospect names first.

The fourth — *speed to review-ready work* — is a different mechanism (production, not retrieval), and it is the commodity one. Keep it as a **consequence you demonstrate**, never as the promise you lead with. It arrives for free when the first three work.

### "Knowledge but also project acquisition" — also one spine, if you respecify acquisition

Slice 1 read as commodity in the review because it is specified as a **workflow**: extract criteria, map requirements, structure the response. Every generalist LLM does that.

Respecify it as a **knowledge application** and it becomes the same spine as everything else:

> *What have we actually done that proves we can do this? Who did it? What can we honestly claim, and what can't we?*

That is `Opportunity-to-Project` pointed at a tender — and it is exactly your own line: **„Sie verkaufen Wissen, das Sie nicht wiederfinden."** A proposal is the single most acute moment where a consultancy needs to find what it knows, under time pressure, with money attached.

**So: one spine, two moments.** Knowledge reaching a person mid-work, and knowledge reaching a person mid-bid. Not two spines to build — one to build and two fixtures to write. That is a scope *reduction* from where you were.

---

## 2. The principle that makes "less strict" safe

Every governance mechanism in the corpus exists to make a *risky action* safe. So:

> **v1 is safe by SCOPE, not by MECHANISM. Restrict the blast radius instead of building the controls.**

If v1 does not send anything externally, does not process person-sharp data, and does not move content across client boundaries, then you need **no approval gate, no WC-Mode, no AI-Act gating, no rights review, and no effect-admission machinery** — not because you cut corners, but because the actions those mechanisms govern are not in v1.

This is not deferral of a problem. It is the recognition that a bounded product does not need unbounded controls. And every control has a precise moment where it becomes necessary — which is the table below.

---

## 3. The dial

**Read the third column as the *only* thing that turns a mechanism on.** No mechanism gets built ahead of its trigger.

| # | Mechanism | v1 setting | Turns on when… |
|---|---|---|---|
| 1 | **Tenant isolation / client separation** | **FULL — non-negotiable** | Never dialed down. It is cheap, and it is the one thing a horizontal company brain structurally cannot retrofit. This is the moat; do not economise here. |
| 2 | **Source visibility** | **Display only.** Show where something came from. Never block, never require, never score. | Enforcement only when a customer's own client contract demands it in writing. |
| 3 | Provenance triad (Firm/External/Model) | A quiet label. No policy attached. | A tenant asks to gate on it. |
| 4 | Evidence / review state on claims | **One optional field:** "geprüft / offen". Human sets it or doesn't. | First external-facing artifact leaves the system. |
| 5 | Faithfulness / citation gates | **Off.** | A customer reports a materially wrong claim reaching a client. |
| 6 | Approval-Card | **None.** v1 produces drafts a human copies out. Copying *is* the approval. | First in-product external effect (send, publish, write back to a client system). |
| 7 | AuditEvent | **Log it, don't surface it.** Append-only, no UI. | First procurement or security review asks to see it. |
| 8 | Decision-and-Effect Authority Spine | **Implicit.** The person logged in is the responsible person. One name on the artifact. | First customer with genuinely separated roles — i.e. the Growing archetype at 30+. |
| 9 | Single-Human Responsible Completion | **The default and the only mode.** | A Governing Instrument or client contract demands four eyes. |
| 10 | **Reuse — light** | **ON, ungoverned.** Within-tenant, within already-permitted context: *what did we do, who did it, what did they decide, why, and what doesn't transfer.* No abstraction, no de-identification, no rights review. | — |
| 11 | Reuse — heavy (abstraction, rights review, ReusableAsset, release) | **Off entirely.** Not built. | First customer wants to move something **across a client boundary** or productise it into an offer. |
| 12 | Corpus Admission ritual | **Drop a folder.** Whatever they have, however messy. | Cold-start quality becomes the reported blocker, not before. |
| 13 | WC-Mode | **Not built.** v1 processes no person-sharp behavioural data. | First prospect with a works council asks — and then it is a conversation, not a switch. |
| 14 | AI-Act posture | **Not built as machinery.** Have the written position ready; ship nothing. | First high-risk use case or first customer legal review. |
| 15 | Claim Ceiling / Testability Profile / Outcome Tests | **One optional prompt:** "Was müsste stimmen, damit das falsch ist?" | Never as machinery. Keep it as a question, not a model. |
| 16 | Drift / revalidation | **A timestamp and a flag** when a source changed. Nothing more. | A customer asks what changed since they last looked. |
| 17 | Model policy / gateway / data zone | **One model, one region, one contract.** No `model_policy_id` indirection. | Second model or second region becomes commercially necessary. |
| 18 | Person-sharp data | **Excluded by scope.** Aggregate only, and mostly not even that. | H2 decision, gated as already ratified. |

**Net effect:** of eighteen mechanisms, **two ship at full strength** (tenant isolation, source display), **five ship as a label, a field, a flag or a log line**, and **eleven do not get built at all** — each with a named trigger that is a customer sentence, not a calendar date.

---

## 4. What that leaves you building

> A consultant opens Consultry mid-work. It shows what the firm already knows about the thing in front of them — a prior decision from another mandate, who made it, why, on what basis, and what does not transfer. They use it. Their own reasoning gets kept, attributed, and reaches the next person.
>
> The same thing, pointed at a tender: what have we actually done that proves this, who did it, what can we honestly claim.

That is the whole product. Everything else in the corpus is the **upgrade path**, not the build.

**Scope restrictions that replace the entire governance layer, and cost nothing:**
- Nothing leaves the system automatically. Drafts get copied out by a human.
- Nothing crosses a client boundary. Reuse is within-tenant only.
- No behavioural or person-sharp processing.
- One responsible person per artifact, and it is whoever is logged in.

Say these four out loud in a sales conversation and watch what happens. In a boutique they are not limitations — **they are the reason it can be adopted next week without asking anyone's permission.** That is a selling point, and it is the one thing a 15-person firm actually needs to hear.

---

## 5. Julian and Caspar change the plan

You answered the evidence question with two people, not two documents: **Julian Weber (SECUINFRA), Caspar Hertel (Krallmann).**

Two things follow, one good and one to be careful about.

**The good, and it is bigger than it looks.** That is not "no external evidence." That is **operating experience inside two real consultancies, plus warm access to both.** SECUINFRA and Krallmann are not references — they are your first two design partners, and the introduction is already made. The G6/G7 tickets that have been open for months are two conversations, not a campaign. Start there this week.

**The care.** Insider experience is *domain truth*, not *market truth*. Julian and Caspar know what hurt at their firms; that is a strong hypothesis about other firms, not evidence about them. And there is a specific trap: both are close to you, both will be generous, and generous feedback is the least useful kind. So change the question. Do not ask *"would you use this?"* Ask:

> **"What would have to be true for your firm to put €X/month on this — and what would stop it?"**

Then, harder: **"Who else would you show this to?"** A warm intro to a third firm is worth more than either of their opinions, because it is the first data point that is not yours.

**Realistic target: four conversations, not twelve.** Julian, Caspar, and two firms they introduce. That is achievable in three weeks, and it is enough to move several Low-rated claims.

---

## 6. What happens to the corpus

Not wasted. **Re-labelled.**

Every mechanism in column 3 above is already specified to a depth most companies reach in year three. When a customer asks for rights-governed cross-client reuse, or a works council raises Mitbestimmung, or procurement wants the audit trail — **you answer in the meeting, not in the next quarter.** That is a genuine competitive advantage in enterprise-adjacent sales, and it is exactly what a horizontal competitor cannot do.

The mistake was never the thinking. It was building the controls before the actions, and gating the product behind the controls.

**One line to hold onto:** *the corpus is your answer sheet, not your build plan.*

---

## 7. Three decisions to make this week

1. **Adopt or reject the dial.** One sitting. If you reject a row, name the customer sentence that justifies building it now.
2. **Rewrite the acquisition slice as a knowledge application**, not a workflow. Half a day. It merges your two spines and fixes the weakest slice at the same time.
3. **Message Julian and Caspar.** Not a demo — the two questions in §5.

Everything else waits.
