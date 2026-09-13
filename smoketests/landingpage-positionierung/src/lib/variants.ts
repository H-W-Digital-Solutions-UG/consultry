/**
 * Registry of the smoke-test variants. Each variant is one positioning of the
 * same product; the URL path is the attribution key.
 */
export const VARIANTS = [
  { id: "brain", path: "/firmengedaechtnis", label: "Firmengedächtnis" },
  { id: "corpus", path: "/korpus", label: "Korpus und Abgleich" },
  { id: "brand", path: "/corporate-alignment", label: "Marke und CD" },
  { id: "ledger", path: "/agenten-ledger", label: "Agenten und Ledger" },
  { id: "access", path: "/zugriff", label: "Zugriff und Harness" },
] as const;

export type VariantId = (typeof VARIANTS)[number]["id"];

export function variantByPath(path: string) {
  return VARIANTS.find((v) => v.path === path) ?? VARIANTS[0];
}
