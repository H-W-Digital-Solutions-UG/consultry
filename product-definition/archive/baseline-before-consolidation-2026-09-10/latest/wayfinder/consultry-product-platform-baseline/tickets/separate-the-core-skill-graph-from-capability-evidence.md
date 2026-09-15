---
title: Separate the Core Skill Graph from capability evidence
status: closed
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: prior-session
blocked_by: []
closed: 2026-08-01
---

# Separate the Core Skill Graph from capability evidence

## Question

Welche Semantik besitzt der unqualifizierte Begriff Skill Graph, und wie bleibt die evidenzbasierte Menschen-/Firmen-Capability-Sicht erhalten, ohne beide Systeme zu vermischen?

## Resolution comment

Skill Graph bezeichnet exklusiv den first-class Core Skill Graph des Platform Kernel. Eine contextual task wählt nie direkt Prompt, Modell oder Tool, sondern löst über einen versionierten Graph Release eine evaluierte Skill Release Closure auf. Human-, Team- und Firm-Capabilities bleiben evidence-backed in der getrennten `CapabilityEvidenceView` beziehungsweise einem qualifizierten Capability Evidence Graph.

## Context pointers

- [Core Skill Graph UML](../../../Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md#6-uml--context-graph-und-core-skill-graph)
- [Locked Graph-Taxonomie](../../../_CONTEXT-AND-MEMORY.md#2-locked-decisions-verbindlich)
