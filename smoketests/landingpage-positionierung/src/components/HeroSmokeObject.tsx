import type { ReactNode } from "react";
import { SmokeObject } from "./smoke-object/SmokeObject";
import type { SmokeObjectVariant } from "./smoke-object/types";

/** Explicit product controls live in the example below. */
export function HeroSmokeObject({ variant, poster }: { variant: SmokeObjectVariant; poster: ReactNode }) {
  return <SmokeObject variant={variant} poster={poster} annotated />;
}
