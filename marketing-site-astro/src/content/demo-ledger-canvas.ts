/** Compact canvas framing for the illustrative ledger and access workspaces. */
export const ledgerCanvases = {
  ledger: {
    kind: "swarm",
    title: "Orchestrierung · Hansa Wave 2",
    prompt: "Lass Delivery, Daten und Risiko den Cutover-Plan auf Stand 07 prüfen. Auditiere jeden Beitrag und führe einen Arbeitsstand zusammen.",
    scope: "Hansa Wave 2 · Lauf 08",
    versions: ["Lauf gestartet", "Audit", "Stand 08 · Arbeitskonsens", "Übergabe · Protokoll"],
    focusBlocks: [0, 0, 0, 0],
  },
  access: {
    kind: "admin",
    title: "Zugriffsverwaltung · Hansa",
    prompt: "Richte den Zugriff für das Hansa-Team ein: SSO, Rollen, Integrationen und den Rahmen für Agenten.",
    scope: "Hansa · Workspace-Verwaltung",
    versions: ["Identität", "Rollen & Rechte", "Integrationen", "Agentenrahmen"],
    focusBlocks: [0, 1, 0, 0],
  },
} as const;
