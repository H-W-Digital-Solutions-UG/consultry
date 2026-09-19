export type VariantId = 'brain' | 'brand' | 'ledger' | 'access';
export interface Stat { value: string; label: string; source: string }
export interface PageContent {
  variant: VariantId;
  meta: { title: string; description: string };
  hero: { title: string; titleEnd: string; lede: string; cta: string; secondary: string; h1MaxCh?: number };
  problem: { title: string; lede?: string; stats: Stat[] };
  how: { title: string; lede?: string; sequence: boolean; steps: { icon: string; title: string; text: string }[] };
  boundaries: { title: string; lede?: string; items: { claim: string; limit: string }[] };
  band: { title: string; text: string };
}
