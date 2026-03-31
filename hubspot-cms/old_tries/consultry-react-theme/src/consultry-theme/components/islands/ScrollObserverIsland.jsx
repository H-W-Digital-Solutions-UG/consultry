import { useEffect } from 'react';

/**
 * ScrollObserverIsland
 *
 * Global IntersectionObserver that watches all [data-animate] elements
 * and adds the .is-visible class when they scroll into the viewport.
 * Works with the animation CSS utilities in tokens.css.
 *
 * This island renders nothing — it's a side-effect-only component.
 */
export default function ScrollObserverIsland() {
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // If reduced motion, make everything visible immediately
      document.querySelectorAll('[data-animate]').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe all existing [data-animate] elements
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    // Also watch for dynamically added elements (HubSpot modules load async)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            if (node.hasAttribute && node.hasAttribute('data-animate')) {
              observer.observe(node);
            }
            // Also check children of added nodes
            if (node.querySelectorAll) {
              node.querySelectorAll('[data-animate]').forEach((el) => {
                observer.observe(el);
              });
            }
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Render nothing — this is a side-effect-only island
  return null;
}
