export type { SceneVariant as SmokeObjectVariant } from './variants';
import type { SceneVariant as SmokeObjectVariant } from './variants';

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
  /** Called only after this exact progress has been successfully drawn. */
  onFrame?(progress: number): void;
  onContextLost(): void;
}
