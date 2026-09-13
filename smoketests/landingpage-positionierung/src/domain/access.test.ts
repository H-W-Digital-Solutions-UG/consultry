import { describe, expect, it } from "vitest";
import { PRINCIPALS, answerRateQuestion, capabilityTokens, filterSources } from "./access";

const by = (id: string) => PRINCIPALS.find((p) => p.id === id)!;

describe("filterSources", () => {
  it("partner sees every source", () => {
    expect(filterSources(by("p-partner")).every((v) => v.allowed)).toBe(true);
  });
  it("sales on Bank Nord cannot read the Hansa offer (other account)", () => {
    const v = filterSources(by("p-sales")).find((x) => x.source.id === "s-rate")!;
    expect(v.allowed).toBe(false);
  });
  it("agent acting for the consultant gets exactly the consultant's sources", () => {
    const human = filterSources(by("p-consultant")).map((v) => v.allowed);
    const agent = filterSources(by("a-consultant")).map((v) => v.allowed);
    expect(agent).toEqual(human);
  });
});

describe("capabilityTokens", () => {
  it("agents may propose results but never write them", () => {
    const caps = capabilityTokens(by("a-consultant"), "hj-1");
    expect(caps).toContain("cap:result.propose:hj-1");
    expect(caps.some((c) => c.startsWith("cap:result.write"))).toBe(false);
  });
});

describe("answerRateQuestion", () => {
  it("partner receives the exact figures", () => {
    expect(answerRateQuestion(by("p-partner")).decision).toBe("ALLOW");
  });
  it("consultant on Hansa gets a sanitized band, not the raw rates", () => {
    expect(answerRateQuestion(by("p-consultant")).decision).toBe("ALLOW_SANITIZED");
  });
  it("sales on another account is blocked with a reason, not silently", () => {
    const a = answerRateQuestion(by("p-sales"));
    expect(a.decision).toBe("BLOCK");
    expect(a.text.length).toBeGreaterThan(0);
  });
  it("agent for the consultant gets the same decision as the consultant", () => {
    expect(answerRateQuestion(by("a-consultant")).decision).toBe(answerRateQuestion(by("p-consultant")).decision);
  });
});
