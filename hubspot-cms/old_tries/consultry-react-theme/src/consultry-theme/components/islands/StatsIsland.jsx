import { useState, useEffect, useRef } from 'react';
import styles from '../../styles/stats.module.css';

function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  // Detect locale for DACH number formatting
  const locale =
    typeof document !== 'undefined'
      ? document.documentElement.lang || 'de-DE'
      : 'de-DE';

  const decimals = (String(value).split('.')[1] || '').length;

  function formatNum(val) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(val);
  }

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setDisplayValue(eased * value);
            if (progress < 1) requestAnimationFrame(step);
            else setDisplayValue(value);
          }

          requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={styles.value}>
      {prefix}
      {formatNum(displayValue)}
      {suffix}
    </span>
  );
}

export default function StatsIsland({ fieldValues }) {
  const { stats } = fieldValues;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats?.map((stat, i) => (
          <div className={styles.stat} key={i}>
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
