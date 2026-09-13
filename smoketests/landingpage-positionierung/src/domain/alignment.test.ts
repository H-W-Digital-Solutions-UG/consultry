import { describe, expect, it } from "vitest";
import { SAMPLE_FINDINGS, dispose, openByLens } from "./alignment";

describe("alignment dispositions", () => {
  it("counts every finding as open before a human disposes it", () => {
    expect(openByLens(SAMPLE_FINDINGS, {})).toEqual({ knowledge: 2, brand: 2, governance: 2 });
  });
  it("dispositions are independent across findings and lenses", () => {
    let s = dispose({}, "f-go", "angepasst");
    s = dispose(s, "f-term", "übernommen");
    expect(openByLens(SAMPLE_FINDINGS, s)).toEqual({ knowledge: 1, brand: 1, governance: 2 });
  });
  it("'offen' keeps a finding visible instead of resolving it", () => {
    const s = dispose({}, "f-ref", "offen");
    expect(openByLens(SAMPLE_FINDINGS, s).governance).toBe(2);
  });
});
