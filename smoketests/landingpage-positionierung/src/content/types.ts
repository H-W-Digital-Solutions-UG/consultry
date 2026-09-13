import type { Stat } from "@/components/Evidence";
import type { Step } from "@/components/Steps";
import type { Boundary } from "@/components/Boundaries";
import type { VariantId } from "@/lib/variants";

/**
 * A KPI-like target metric under a concept. Every value must be defensible:
 * either a structural rule of the product ("Regel") or an explicitly labelled
 * target ("Ziel") from the product definition. Never a measured result we do not have.
 */
export interface Kpi {
  value: string;
  label: string;
  kind: "Regel" | "Ziel";
}

/** Everything a smoke variant needs besides its product widget. Copy lives in German (DACH). */
export interface PageContent {
  variant: VariantId;
  meta: { title: string; description: string };
  hero: { title: string; lede: string; cta: string; secondary: string; h1MaxCh?: number };
  problem: { title: string; lede?: string; stats: Stat[] };
  how: { title: string; lede?: string; sequence: boolean; steps: Step[]; kpis: Kpi[] };
  boundaries: { title: string; lede?: string; items: Boundary[] };
  band: { title: string; text: string };
}
