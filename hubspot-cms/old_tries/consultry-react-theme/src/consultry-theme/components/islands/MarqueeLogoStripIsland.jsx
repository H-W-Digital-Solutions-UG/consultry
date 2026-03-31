import { useRef, useEffect } from 'react';
import styles from '../../styles/marqueeLogoStrip.module.css';

export default function MarqueeLogoStripIsland({ fieldValues }) {
  const { label, logos, dark_mode, speed } = fieldValues;
  const trackRef = useRef(null);

  const speedMap = { slow: '50s', medium: '30s', fast: '18s' };
  const duration = speedMap[speed] || '30s';

  const sectionClasses = [
    styles.section,
    dark_mode ? styles.sectionDark : '',
  ].filter(Boolean).join(' ');

  if (!logos || logos.length === 0) return null;

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className={sectionClasses}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.track} ref={trackRef} style={{ '--marquee-duration': duration }}>
        {duplicatedLogos.map((logo, i) => (
          <div className={styles.logoItem} key={i}>
            {logo.image?.src ? (
              <img src={logo.image.src} alt={logo.name || ''} loading="lazy" />
            ) : (
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--neutral-500)',
                  whiteSpace: 'nowrap',
                }}
              >
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
