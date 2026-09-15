---
title: Choose Context Assertion temporality for the MVP
status: closed
order: 50
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by: []
closed: 2026-08-01
---

# Choose Context Assertion temporality for the MVP

## Question

Soll das MVP `ContextAssertion` bereits als immutable bitemporale Revision mit Valid Time, Record Time, Participants, Evidence State und optionalen Source Bindings physisch anlegen, oder zunächst einen kompatiblen Minimalvertrag implementieren und die vollständige bitemporale Persistenz aufschieben?

## Resolution comment

Das MVP legt einen **schlanken bitemporalen Assertion-Kern physisch an**. `ContextAssertion` besitzt eine stabile tenant-gebundene Identität; jede Änderung erzeugt eine immutable `ContextAssertionRevision` mit optionalem fachlichem `valid_from`/`valid_to`, verpflichtendem `recorded_at`, `supersedes_revision_id`, Predicate-/Schema-Version, State, Confidence und Digest. Das Ende der Record Time wird aus der nächsten Revision abgeleitet, nicht durch Überschreiben der alten Revision erzeugt.

Jede Revision besitzt mindestens die für den MVP benötigten typisierten Participant Roles und einen expliziten `EvidenceState`; exakte `SourceBinding`s sind optional und folgen Risk-/Tenant-Policy. Ein Participant verweist XOR auf eine tenant-konsistente Domain-/Context-Entity oder einen typisierten Literalwert. `ContextSnapshot`s pinnen die verwendeten Revision IDs und Digests, sodass ein späterer Run reproduzierbar bleibt.

Der MVP verdoppelt **nicht** jedes operative Domainobjekt als Assertion. Typed Domain Aggregates bleiben Write Authority; die Assertion-Spine wird nur für source-übergreifende, semantische oder AI-/entscheidungsrelevante Aussagen verwendet. Aufgeschoben werden eine universelle Assertion-Autorierungsoberfläche, unbegrenzte Ontologie-/Hyperedge-Semantik, allgemeine temporale Query-/Reasoning-Infrastruktur und ein dedizierter Graph Store.

## Context pointers

- [Platform Kernel Data Model Concept](../../../Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md#154-bitemporale-context-assertions)
- [Virtual Harness / Second Brain Refinement](../../../Consultry-MVP-Virtual-Harness-Second-Brain-Refinement-v1.0.md#31-semantic-graph--triples--hypergraph)
