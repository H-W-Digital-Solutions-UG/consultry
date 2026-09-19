export type { SceneVariant as SmokeObjectVariant } from './variants';
import type { SceneVariant as SmokeObjectVariant } from './variants';

export interface SmokeScene {
  setVisible(visible: boolean): void;
  setReducedMotion(reduced: boolean): void;
  setScrollProgress(progress: number): void;
  /** 0–1 after the pinned sequence: the object is carried along, turning and receding. */
  setCarry(carry: number): void;
  /** Development aid: renders the resting pose square and returns a PNG data URL. */
  snapshot(size?: number): string | null;
  dispose(): void;
}

export interface SmokeSceneOptions {
  variant: SmokeObjectVariant;
  /** Scales the whole-object turn during the carry (default 1). */
  carryStrength?: number;
  reducedMotion: boolean;
  visible: boolean;
  onReady(): void;
  /** Called only after this exact progress has been successfully drawn. */
  onFrame?(progress: number): void;
  onContextLost(): void;
}
