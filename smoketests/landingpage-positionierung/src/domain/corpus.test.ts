import { describe, expect, it } from "vitest";
import { TIERS, capabilityStatus } from "./corpus";

describe("capabilityStatus", () => {
  it("tier 0 unlocks only existing-client signals", () => {
    const active = capabilityStatus(0).filter((c) => c.active).map((c) => c.id);
    expect(active).toEqual(["signals"]);
  });
  it("tier 2 unlocks all four capabilities", () => {
    expect(capabilityStatus(2).every((c) => c.active)).toBe(true);
  });
  it("every tier makes at least one gap visible", () => {
    expect(TIERS.every((t) => t.visibleGaps.length > 0)).toBe(true);
  });
});
