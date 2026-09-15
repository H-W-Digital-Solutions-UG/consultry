export type SmokeObjectVariant = "corpus" | "brand" | "ledger";

export interface SmokeScene {
  setVisible(visible: boolean): void;
  setReducedMotion(reduced: boolean): void;
  setScrollProgress(progress: number): void;
  dispose(): void;
}

export interface SmokeSceneOptions {
  variant: SmokeObjectVariant;
  reducedMotion: boolean;
  visible: boolean;
  onReady(): void;
  onContextLost(): void;
}
