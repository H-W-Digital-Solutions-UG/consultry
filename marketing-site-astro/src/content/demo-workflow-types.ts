export type DemoVariant = "brain" | "brand" | "ledger" | "access";
export type DemoTone = "neutral" | "ok" | "warn" | "blocked";

export interface DemoSource {
  id: string;
  title: string;
  meta: string;
  excerpt: string;
}

export interface DemoBlock {
  label: string;
  /** Source system or node class for graph and admin canvases. */
  system?: string;
  text?: string;
  before?: string;
  items?: { text: string; state: "done" | "open" | "blocked" }[];
}

export interface DemoStep {
  id: string;
  label: string;
  caption: string;
  duration: number;
  sourceIds: string[];
  activity: string;
  actionLabel?: string;
  artifact: {
    label: string;
    title: string;
    status: string;
    tone: DemoTone;
    blocks: DemoBlock[];
  };
  note?: string;
}

export interface DemoWorkflow {
  title: string;
  context: string;
  role: string;
  task: string;
  outcome: string;
  sources: DemoSource[];
  steps: DemoStep[];
  download: { filename: string; label: string; text: string };
}
