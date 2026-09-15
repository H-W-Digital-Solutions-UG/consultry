/**
 * Access model for the harness demo: the same question, answered within the
 * asker's permitted scope. Enforcement happens at retrieval, derivation and
 * egress — not at the prompt. An agent acting on someone's behalf inherits
 * exactly that person's read scope and never a write scope of its own.
 */
export type EgressDecision = "ALLOW" | "ALLOW_SANITIZED" | "REQUIRE_REVIEW" | "LOCAL_ONLY" | "BLOCK";

export type DataClass = "K1 öffentlich" | "K2 intern" | "K3 vertraulich" | "K4 kundenvertraulich";

export interface Source {
  id: string;
  name: string;
  connector: "Upload" | "SharePoint" | "CRM" | "M365 Mail" | "Git" | "Drive";
  dataClass: DataClass;
  account: string | null; // client account the source belongs to
  project: string | null;
}

export interface Principal {
  id: string;
  label: string;
  kind: "human" | "agent";
  role: "partner" | "consultant" | "sales";
  accounts: string[] | "all";
  projects: string[] | "all";
  seesCommercial: boolean;
  onBehalfOf?: string; // agent: dispatcher's principal id
}

export const SOURCES: Source[] = [
  { id: "s-rate", name: "Angebot Hansa Wave 2 (Tagessätze)", connector: "SharePoint", dataClass: "K3 vertraulich", account: "hansa", project: "hansa-w1" },
  { id: "s-hansa", name: "Lessons Learned Hansa Wave 1", connector: "Upload", dataClass: "K4 kundenvertraulich", account: "hansa", project: "hansa-w1" },
  { id: "s-crm", name: "CRM: Kontakt Bank Nord", connector: "CRM", dataClass: "K2 intern", account: "nord", project: null },
  { id: "s-method", name: "Methodenhandbuch v3", connector: "Drive", dataClass: "K2 intern", account: null, project: null },
  { id: "s-mail", name: "Mail: Kundenfreigabe Referenz Hansa", connector: "M365 Mail", dataClass: "K3 vertraulich", account: "hansa", project: "hansa-w1" },
];

export const PRINCIPALS: Principal[] = [
  { id: "p-partner", label: "Partnerin", kind: "human", role: "partner", accounts: "all", projects: "all", seesCommercial: true },
  { id: "p-consultant", label: "Consultant, Projekt Hansa", kind: "human", role: "consultant", accounts: ["hansa"], projects: ["hansa-w1"], seesCommercial: false },
  { id: "p-sales", label: "Sales, Account Bank Nord", kind: "human", role: "sales", accounts: ["nord"], projects: [], seesCommercial: true },
  { id: "a-consultant", label: "Agent im Auftrag des Consultants", kind: "agent", role: "consultant", accounts: ["hansa"], projects: ["hansa-w1"], seesCommercial: false, onBehalfOf: "p-consultant" },
];

export interface SourceVerdict {
  source: Source;
  allowed: boolean;
  reason: string;
}

/** Effective read scope of a principal; agents resolve to their dispatcher. */
export function effectiveScope(p: Principal, all: Principal[] = PRINCIPALS): Principal {
  if (p.kind === "agent" && p.onBehalfOf) {
    const dispatcher = all.find((x) => x.id === p.onBehalfOf);
    if (dispatcher) return { ...dispatcher, id: p.id, label: p.label, kind: "agent", onBehalfOf: p.onBehalfOf };
  }
  return p;
}

function inScope(list: string[] | "all", value: string | null): boolean {
  if (value === null) return true; // firm-wide source
  return list === "all" || list.includes(value);
}

/** Retrieval-time check: which sources may enter this principal's context pack. */
export function filterSources(principal: Principal, sources: Source[] = SOURCES): SourceVerdict[] {
  const scope = effectiveScope(principal);
  return sources.map((source) => {
    if (!inScope(scope.accounts, source.account)) {
      return { source, allowed: false, reason: `Account ${source.account} nicht im Zugriff` };
    }
    if (source.dataClass === "K4 kundenvertraulich" && !inScope(scope.projects, source.project)) {
      return { source, allowed: false, reason: "Kundenvertraulich, nur im Projektkontext" };
    }
    if (source.dataClass === "K3 vertraulich" && source.project && !inScope(scope.projects, source.project) && !scope.seesCommercial) {
      return { source, allowed: false, reason: "Vertraulich, außerhalb des eigenen Projekts" };
    }
    return { source, allowed: true, reason: "im Zugriff" };
  });
}

/** Capability tokens a harness job receives; agents never get write caps of their own. */
export function capabilityTokens(principal: Principal, jobId: string): string[] {
  const scope = effectiveScope(principal);
  const caps = [`cap:corpus.read:${jobId}`, `cap:memory.read:${jobId}`];
  if (scope.projects !== "all") for (const p of scope.projects) caps.push(`cap:project.read:${p}`);
  else caps.push("cap:project.read:*");
  if (principal.kind === "human") caps.push(`cap:result.write:${jobId}`);
  else caps.push(`cap:result.propose:${jobId}`);
  return caps;
}

export interface Answer {
  decision: EgressDecision;
  text: string;
  note: string;
}

/**
 * Answer to "Welche Tagessätze stehen im Angebot Hansa Wave 2?" within scope.
 * Commercial figures leave the boundary only for principals cleared to see them;
 * everyone else gets a sanitized band or a reason, never a silent omission.
 */
export function answerRateQuestion(principal: Principal): Answer {
  const scope = effectiveScope(principal);
  const rateSource = filterSources(principal).find((v) => v.source.id === "s-rate");
  if (rateSource?.allowed && scope.seesCommercial) {
    return {
      decision: "ALLOW",
      text: "Hansa Wave 2: Senior 1.450 €, Consultant 1.150 € je Tag. Quelle: Angebot Hansa Wave 2, S. 12.",
      note: "Kommerzielle Daten im Zugriff der Rolle. Verarbeitung auf dem freigegebenen Weg, Protokoll ohne Inhalte.",
    };
  }
  if (rateSource?.allowed && !scope.seesCommercial) {
    return {
      decision: "ALLOW_SANITIZED",
      text: "Bandbreite Hansa Wave 2: 1.100 bis 1.500 € je Tag (generalisiert). Exakte Sätze sind Sales und Partnern vorbehalten.",
      note: "Value Bucketing statt Rohwert: die Frage wird beantwortet, ohne die Schutzklasse zu verletzen.",
    };
  }
  return {
    decision: "BLOCK",
    text: "Keine Angebotsdaten anderer Accounts im Zugriff. Für deinen Account Bank Nord liegt noch kein Angebot vor.",
    note: "Die Quelle wurde nie in das Kontextpaket geladen. Der Filter greift beim Abruf, nicht im Prompt.",
  };
}
