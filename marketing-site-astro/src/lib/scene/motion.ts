const smooth = (value: number) => {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
};

/** Open in the first third, then seat the parts slowly across the rest of the
 *  sequence: the reassembly is the story, and it returns to the exact poster pose. */
export const sceneExpansion = (progress: number) =>
  smooth(progress / .34) * (1 - smooth((progress - .4) / .6));
