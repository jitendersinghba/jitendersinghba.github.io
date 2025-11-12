'use client';

import MagneticButton from '../components/MagneticButton';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <h2>CONTACT ME</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.right}>
        {/* ✅ Email button now uses <a> so GTM detects mailto clicks */}
        <MagneticButton className={styles.button}>
          <a
            href="mailto:jitendersingh44556@gmail.com"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            jitendersingh44556@gmail.com
          </a>
        </MagneticButton>

        {/* ✅ Phone button now uses <a> so GTM can track tel clicks if needed */}
        <MagneticButton className={styles.button}>
          <a
            href="tel:+17059884873"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            705-988-4873
          </a>
        </MagneticButton>

        {/* ✅ LinkedIn button opens new tab as before */}
        <MagneticButton className={styles.button}>
          <a
            href="https://www.linkedin.com/in/jitender-singh-545147197"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
        </MagneticButton>
      </div>
    </section>
  );
}
