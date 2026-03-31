import { useState, useEffect } from 'react';
import styles from '../../styles/nav.module.css';

export default function NavIsland({ fieldValues }) {
  const { logo, logo_text, nav_links, cta, dark_mode } = fieldValues;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = [
    styles.nav,
    dark_mode && styles.navDark,
    isScrolled && styles.navScrolled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClasses}>
      <div className={styles.inner}>
        {/* Logo */}
        <a
          href="/"
          className={`${styles.logo} ${dark_mode ? styles.logoDark : ''}`}
        >
          {logo?.src && (
            <img
              src={logo.src}
              alt={logo.alt || 'Consultry'}
              className={styles.logoMark}
            />
          )}
          <span>{logo_text || 'Consultry'}</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {nav_links?.map((item, i) => (
            <li key={i}>
              <a
                href={item.url?.href || '#'}
                className={`${styles.link} ${dark_mode ? styles.linkDark : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          {cta?.url?.href && (
            <li>
              <a href={cta.url.href} className={styles.cta}>
                {cta.label || 'Demo buchen'}
              </a>
            </li>
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`${styles.mobileToggle} ${dark_mode ? styles.mobileToggleDark : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
      >
        {nav_links?.map((item, i) => (
          <a key={i} href={item.url?.href || '#'} className={styles.mobileLink}>
            {item.label}
          </a>
        ))}
        {cta?.url?.href && (
          <a href={cta.url.href} className={styles.cta}>
            {cta.label || 'Demo buchen'}
          </a>
        )}
      </div>
    </nav>
  );
}
