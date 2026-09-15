/** One object family and enhancement contract across every product hero. */
export const sceneVariants = ['brain', 'corpus', 'brand', 'ledger', 'access', 'logo'] as const;
export type SceneVariant = typeof sceneVariants[number];
export const isSceneVariant = (value: string | undefined): value is SceneVariant =>
  sceneVariants.some(variant => variant === value);
export const sceneArtwork = (variant: SceneVariant) => `${variant}-scene`;
