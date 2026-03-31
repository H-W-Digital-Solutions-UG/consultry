import { Island } from '@hubspot/cms-components';
import { ModuleFields, BooleanField } from '@hubspot/cms-components/fields';
import ScrollObserverIsland from '../../islands/ScrollObserverIsland.jsx?island';

/**
 * ScrollObserver Module
 *
 * Drop this module into any template to enable scroll-triggered
 * animations for all [data-animate] elements on the page.
 *
 * Supported animations (set via data-animate attribute):
 *   - fade-up: Fade in + slide up
 *   - scale-in: Fade in + scale from 95%
 *   - slide-left: Slide in from right
 *   - slide-right: Slide in from left
 *   - slide-up: Slide in from bottom
 *   - stagger-in: Stagger children with delays
 *
 * Example usage in a template:
 *   <section data-animate="fade-up">...</section>
 *
 * Respects prefers-reduced-motion.
 */
export function Component() {
  return <Island module={ScrollObserverIsland} />;
}

export const fields = (
  <ModuleFields>
    <BooleanField name="enabled" label="Enable Scroll Animations" default={true} />
  </ModuleFields>
);

export const meta = {
  label: 'Scroll Observer',
  icon: 'visibility',
};
