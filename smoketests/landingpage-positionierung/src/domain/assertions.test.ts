import { describe, expect, it } from "vitest";
import { SAMPLE_ASSERTIONS, resolveAsOf, successorOf } from "./assertions";

describe("resolveAsOf", () => {
  it("answers with the method that was valid in March 2026", () => {
    const r = resolveAsOf(SAMPLE_ASSERTIONS, "cutover", "2026-03-01");
    expect(r.map((a) => a.id)).toEqual(["cutover-v2"]);
  });
  it("answers with the successor today", () => {
    const r = resolveAsOf(SAMPLE_ASSERTIONS, "cutover", "2026-09-12");
    expect(r.map((a) => a.id)).toEqual(["cutover-v3"]);
  });
  it("keeps open (unapproved) assertions visible as open, not as approved", () => {
    const r = resolveAsOf(SAMPLE_ASSERTIONS, "referenz", "2026-09-12");
    expect(r.find((a) => a.id === "ref-nord")?.state).toBe("open");
  });
});

describe("successorOf", () => {
  it("links a superseded assertion to its successor", () => {
    const old = SAMPLE_ASSERTIONS.find((a) => a.id === "cutover-v2")!;
    expect(successorOf(SAMPLE_ASSERTIONS, old)?.id).toBe("cutover-v3");
  });
});
