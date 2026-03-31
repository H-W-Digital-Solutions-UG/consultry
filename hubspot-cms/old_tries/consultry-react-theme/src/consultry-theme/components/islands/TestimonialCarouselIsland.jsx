import { useState, useEffect, useCallback } from 'react';
import styles from '../../styles/testimonialCarousel.module.css';

export default function TestimonialCarouselIsland({ fieldValues }) {
  const { eyebrow, headline, testimonials, auto_play, dark_mode } = fieldValues;
  const [activeIndex, setActiveIndex] = useState(0);
  const count = testimonials?.length || 0;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (!auto_play || count <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [auto_play, count, next]);

  if (!testimonials || count === 0) return null;
  const t = testimonials[activeIndex];

  const sectionClasses = [
    styles.section,
    !dark_mode ? styles.sectionLight : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      <div className={styles.inner}>
        {(eyebrow || headline) && (
          <div className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
          </div>
        )}

        <div className={styles.quoteContainer}>
          <blockquote className={styles.quote}>
            „{t.quote}"
          </blockquote>
        </div>

        <div className={styles.divider} />

        <div className={styles.author}>
          {t.avatar?.src && (
            <img src={t.avatar.src} alt={t.author_name} className={styles.authorAvatar} loading="lazy" />
          )}
          <div className={styles.authorInfo}>
            <p className={styles.authorName}>{t.author_name}</p>
            <p className={styles.authorRole}>{t.author_role}{t.company_name ? `, ${t.company_name}` : ''}</p>
          </div>
          {t.company_logo?.src && (
            <img src={t.company_logo.src} alt={t.company_name || ''} className={styles.companyLogo} loading="lazy" />
          )}
        </div>

        {count > 1 && (
          <div className={styles.pagination}>
            <button className={styles.navBtn} onClick={prev} aria-label="Vorheriges Zitat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="10,2 4,8 10,14" /></svg>
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Zitat ${i + 1}`}
              />
            ))}
            <button className={styles.navBtn} onClick={next} aria-label="Nächstes Zitat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6,2 12,8 6,14" /></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
