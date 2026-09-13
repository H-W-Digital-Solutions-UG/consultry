import type { EgressDecision } from "@/domain/access";

/** 2026-04-15 → 15.04.2026 */
export const fmtDate = (iso: string) => iso.split("-").reverse().join(".");

/**
 * The only text transform the cards apply: strips the topic prefix
 * ("Cutover-Ansatz für S/4HANA-Migrationen: ") that the question line already carries.
 */
export const answerOf = (claim: string) => {
  const i = claim.indexOf(": ");
  const s = i < 0 ? claim : claim.slice(i + 2);
  return s[0].toUpperCase() + s.slice(1);
};

/** Plain-German rendering of the egress decision; the code stays available as a title attribute. */
export const DECISION_DE: Record<EgressDecision, string> = {
  ALLOW: "freigegeben",
  ALLOW_SANITIZED: "freigegeben, generalisiert",
  REQUIRE_REVIEW: "Prüfung erforderlich",
  LOCAL_ONLY: "nur lokal",
  BLOCK: "nicht im Zugriff",
};

/** DIN 5008: narrow no-break space before % (and units) so mono numerals don't show a hole. */
export const fmtValue = (v: string) => v.replace(/\s+%/, " %").replace(/\s+h$/, " h");
