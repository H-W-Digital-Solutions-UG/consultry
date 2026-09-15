const smooth = (value: number) => {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
};

/** Open, give the three arguments a stable stage, then return to the exact poster pose. */
export const sceneExpansion = (progress: number) =>
  smooth(progress / .38) * (1 - smooth((progress - .72) / .28));
