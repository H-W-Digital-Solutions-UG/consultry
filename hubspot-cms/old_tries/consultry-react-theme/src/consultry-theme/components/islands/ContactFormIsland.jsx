import styles from '../../styles/contactForm.module.css';

export default function ContactFormIsland({ fieldValues }) {
  const {
    headline,
    subtitle,
    form_id,
    success_message,
    email,
    phone,
    address_line_1,
    address_line_2,
  } = fieldValues;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.headline}>{headline}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* HubSpot Form Embed */}
        <div className={styles.form}>
          {/* This will be handled by HubSpot form embedding in the contact.hubl.html template */}
          {/* The form_id is available for the template to use */}
          <div data-form-id={form_id} data-success-message={success_message} />
        </div>

        {/* Contact Information */}
        <div className={styles.infoGrid}>
          {/* Email */}
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>E-Mail</span>
            <span className={styles.infoValue}>
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          </div>

          {/* Phone */}
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Telefon</span>
            <span className={styles.infoValue}>
              <a href={`tel:${phone}`}>{phone}</a>
            </span>
          </div>

          {/* Address */}
          {(address_line_1 || address_line_2) && (
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Adresse</span>
              <span className={styles.infoValue}>
                {address_line_1 && <div>{address_line_1}</div>}
                {address_line_2 && <div>{address_line_2}</div>}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
