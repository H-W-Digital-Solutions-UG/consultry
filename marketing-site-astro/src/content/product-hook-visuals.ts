// Generated with Higgsfield Recraft V4.1. Source assets and provenance are
// retained under public/hero/hooks and copy/2026-09-16-product-hook-visuals.md.
// Keep paths independent of translated marketing copy.
export const productHookVisuals: Record<string, string[]> = {
  firmengedaechtnis: ['brain-knowledge', 'brain-changes', 'brain-reuse'],
  'corporate-alignment': ['brand-templates', 'brand-voice', 'brand-result'],
  'agenten-ledger': ['ledger-together', 'ledger-task', 'ledger-overview'],
  zugriff: ['access-control', 'access-freedom', 'access-rules'],
};

export const hookVisualsFor = (slug: string): string[] =>
  (productHookVisuals[slug] ?? []).map(name => `/hero/hooks/${name}.svg`);
