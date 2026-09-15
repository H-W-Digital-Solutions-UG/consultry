import { SAMPLE_STEPS } from "@/domain/ledger";
import { STEP_SHORT } from "@/widgets/RunLedger";
import type { Hotspot } from "@/components/ObjectHotspots";

/**
 * Block centres of the ledger object (public/hero/ledger-*.png), measured from
 * the alpha mask of the square canvas, in %. Six blocks, six ledger entries:
 * the hero object doubles as the table of contents of one run.
 */
const CENTRES: Record<string, { x: number; y: number }> = {
  pack: { x: 13.4, y: 36.1 },
  draft: { x: 28.1, y: 42.3 },
  challenge: { x: 41.8, y: 50.6 },
  consolidate: { x: 57.2, y: 57.9 },
  decide: { x: 73.5, y: 63.3 },
  result: { x: 89.1, y: 65.7 },
};

export const LEDGER_HOTSPOTS: Hotspot[] = SAMPLE_STEPS.map((s, i) => ({
  id: s.id,
  index: i + 1,
  short: STEP_SHORT[s.id] ?? s.label,
  label: s.label,
  detail: s.detail,
  ...(CENTRES[s.id] ?? { x: 50, y: 50 }),
}));
