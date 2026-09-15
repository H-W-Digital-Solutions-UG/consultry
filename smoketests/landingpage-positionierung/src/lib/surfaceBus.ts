/**
 * Page-local channel from the hero object to the product surface: a hotspot asks
 * the widget to show one entry. No window events, no global state, so SSR and
 * hydration stay untouched; the widget subscribes in an effect.
 */
type Listener = (id: string) => void;
const listeners = new Set<Listener>();

export function emitSurfaceSelect(id: string): void {
  listeners.forEach((l) => l(id));
}

export function onSurfaceSelect(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
