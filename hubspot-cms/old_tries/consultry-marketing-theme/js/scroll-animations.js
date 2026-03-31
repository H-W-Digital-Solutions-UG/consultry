/* ==========================================================================
   Consultry Marketing — Scroll-Triggered Animations
   Intersection Observer + counter-roll for stats
   ========================================================================== */

(function () {
  'use strict';

  // Bail early if user prefers reduced motion
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     1. Scroll-reveal (fade-up, scale-in, slide-left, slide-right)
     ------------------------------------------------------------------ */
  function initScrollReveal() {
    var animatedEls = document.querySelectorAll('[data-animate]');
    if (!animatedEls.length) return;

    if (prefersReducedMotion) {
      // Instantly show everything
      animatedEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
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

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     2. Counter roll-up (stats section)
     Usage: <span data-counter="1200" data-counter-suffix="+"></span>
     ------------------------------------------------------------------ */
  function initCounterRoll() {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    // Detect locale for number formatting (DACH-friendly)
    var locale = document.documentElement.lang || 'de-DE';

    function formatNumber(value, decimals) {
      return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value);
    }

    function animateCounter(el) {
      var target = parseFloat(el.getAttribute('data-counter'));
      var suffix = el.getAttribute('data-counter-suffix') || '';
      var prefix = el.getAttribute('data-counter-prefix') || '';
      var duration = parseInt(el.getAttribute('data-counter-duration'), 10) || 2000;
      var decimals = (String(target).split('.')[1] || '').length;

      if (prefersReducedMotion) {
        el.textContent = prefix + formatNumber(target, decimals) + suffix;
        return;
      }

      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = eased * target;

        el.textContent = prefix + formatNumber(current, decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = prefix + formatNumber(target, decimals) + suffix;
        }
      }

      requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) {
      el.textContent = el.getAttribute('data-counter-prefix') || '';
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     3. Sticky nav background on scroll
     ------------------------------------------------------------------ */
  function initStickyNav() {
    var nav = document.querySelector('.mktg-nav');
    if (!nav) return;

    var scrollThreshold = 20;

    function onScroll() {
      if (window.scrollY > scrollThreshold) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check initial state
  }

  /* ------------------------------------------------------------------
     4. Smooth scroll for anchor links
     ------------------------------------------------------------------ */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;

      var targetId = link.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function init() {
    initScrollReveal();
    initCounterRoll();
    initStickyNav();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
