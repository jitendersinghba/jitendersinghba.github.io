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
        <MagneticButton
          className={styles.button}
          onClick={() =>
            (window.location.href = 'mailto:jitendersingh44556@gmail.com')
          }
        >
          jitendersingh44556@gmail.com
        </MagneticButton>

        <MagneticButton
          className={styles.button}
          onClick={() => (window.location.href = 'tel:+17059884873')}
        >
          705-988-4873
        </MagneticButton>

        <MagneticButton
          className={styles.button}
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/jitender-singh-545147197',
              '_blank'
            )
          }
        >
          LinkedIn
        </MagneticButton>
      </div>
    </section>
  );
}
