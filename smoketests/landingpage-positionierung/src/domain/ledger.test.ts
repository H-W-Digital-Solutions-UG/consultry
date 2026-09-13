import { describe, expect, it } from "vitest";
import { SAMPLE_CLAIMS, SAMPLE_CONTRIBUTIONS, consolidate } from "./ledger";

describe("consolidate", () => {
  it("bundles three agents citing the same source into one voice-bundle with one piece of evidence", () => {
    const { bundles } = consolidate(SAMPLE_CONTRIBUTIONS);
    const b = bundles.find((x) => x.claimKey === "cutover-3-runs" && x.position === "stützt")!;
    expect(b.voices).toBe(3);
    expect(b.independentEvidence).toBe(1);
  });
  it("retains material disagreement instead of averaging it away", () => {
    const { retainedDisagreements } = consolidate(SAMPLE_CONTRIBUTIONS);
    expect(retainedDisagreements.map((d) => d.claimKey)).toEqual(["cutover-3-runs"]);
    expect(retainedDisagreements[0].dissent.lenses).toEqual(["risk"]);
  });
  it("keeps a lone contradiction visible as its own bundle", () => {
    const { bundles } = consolidate(SAMPLE_CONTRIBUTIONS);
    expect(bundles.some((b) => b.claimKey === "go-recommendation" && b.position === "widerspricht")).toBe(true);
  });
});

describe("claims", () => {
  it("every claim has a source or is explicitly an open question", () => {
    expect(SAMPLE_CLAIMS.every((c) => c.source !== null || c.text.endsWith("?"))).toBe(true);
  });
});
