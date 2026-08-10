---
title: Confirm the Reusable Asset boundary
status: closed
order: 30
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by: []
closed: 2026-08-01
---

# Confirm the Reusable Asset boundary

## Question

Soll `ReusableAsset` eine eigene Productization Aggregate Root mit Rights, Applicability, Governance und Lifecycle sein, die Content ausschließlich über exakte `KnowledgeAssetVersion`- oder `SkillRelease`-Referenzen pinnt, statt eine zweite Content-Hierarchie zu bilden?

## Resolution comment

Ja. `ReusableAsset` ist die stabile Productization Aggregate Root. Immutable `ReusableAssetVersion`s halten Productization-Metadaten, Applicability Rules und typisierte Content Bindings; jedes Binding pinnt exakt eine `KnowledgeAssetVersion` oder einen `SkillRelease` einschließlich Digest. Ein governed `ReusableAssetRelease` bindet die freigegebene Version an Rights Assessment, gegebenenfalls De-Identification Review und Approval Decision.

Das Aggregat kopiert weder Dokumentinhalt noch ausführbare Skill-Definitionen. Eine inhaltliche Ableitung erzeugt eine neue `KnowledgeAssetVersion` beziehungsweise einen neuen `SkillRelease` mit Lineage. `ReuseApplication`s und Service-Bundle-Mitglieder referenzieren für Reproduzierbarkeit den exakten `ReusableAssetRelease`, nicht nur die stabile Asset-Identität.
