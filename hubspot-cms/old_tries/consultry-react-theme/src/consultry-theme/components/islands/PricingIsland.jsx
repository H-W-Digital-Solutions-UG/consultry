import { useState } from 'react';
import styles from '../../styles/pricing.module.css';

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={styles.featureCheck}
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingIsland({ fieldValues }) {
  const {
    eyebrow,
    headline,
    subtitle,
    show_toggle,
    annual_discount,
    plans,
  } = fieldValues;

  const [isAnnual, setIsAnnual] = useState(false);

  const locale =
    typeof document !== 'undefined'
      ? document.documentElement.lang || 'de-DE'
      : 'de-DE';

  function formatPrice(monthly) {
    const price = isAnnual
      ? Math.round(monthly * (1 - annual_discount / 100))
      : monthly;
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{headline}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {show_toggle && (
          <div className={styles.toggle}>
            <span
              className={`${styles.toggleLabel} ${!isAnnual ? styles.toggleLabelActive : ''}`}
            >
              Monatlich
            </span>
            <button
              className={`${styles.toggleSwitch} ${isAnnual ? styles.toggleSwitchActive : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label={
                isAnnual
                  ? 'Zu monatlicher Abrechnung wechseln'
                  : 'Zu jährlicher Abrechnung wechseln'
              }
              role="switch"
              aria-checked={isAnnual}
            >
              <span
                className={`${styles.toggleKnob} ${isAnnual ? styles.toggleKnobActive : ''}`}
              />
            </button>
            <span
              className={`${styles.toggleLabel} ${isAnnual ? styles.toggleLabelActive : ''}`}
            >
              Jährlich
            </span>
            {annual_discount > 0 && (
              <span className={styles.badge}>-{annual_discount}%</span>
            )}
          </div>
        )}

        <div className={styles.cards}>
          {plans?.map((plan, i) => (
            <div
              className={`${styles.card} ${plan.featured ? styles.cardFeatured : ''}`}
              key={i}
            >
              {plan.featured && plan.featured_badge && (
                <span className={styles.cardFeaturedBadge}>
                  {plan.featured_badge}
                </span>
              )}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>
              <div className={styles.price}>
                <span className={styles.priceAmount}>
                  {formatPrice(plan.monthly_price)}
                </span>
                <span className={styles.pricePeriod}>/ Monat</span>
              </div>
              <ul className={styles.features}>
                {plan.features?.map((f, j) => (
                  <li className={styles.feature} key={j}>
                    <CheckIcon />
                    {f.text}
                  </li>
                ))}
              </ul>
              {plan.cta?.url?.href && (
                <a
                  href={plan.cta.url.href}
                  className={`${styles.cardCta} ${plan.featured ? styles.cardCtaPrimary : styles.cardCtaSecondary}`}
                >
                  {plan.cta.label || 'Auswählen'}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
