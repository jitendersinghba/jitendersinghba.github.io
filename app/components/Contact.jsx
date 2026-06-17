'use client';

import MagneticButton from '../components/MagneticButton';
import styles from './Contact.module.scss';

export default function Contact() {
  const contactLinks = [
    {
      href: "mailto:jitendersingh44556@gmail.com",
      text: "jitendersingh44556@gmail.com",
      target: "_self"
    },
    {
      href: "tel:+17059884873",
      text: "705-988-4873",
      target: "_self"
    },
    {
      href: "https://www.linkedin.com/in/jitender-singh-545147197",
      text: "LinkedIn",
      target: "_blank"
    }
  ];

  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <h2>CONTACT ME</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.right}>
        <div className={styles.buttonGroup}>
          {contactLinks.map((link, index) => (
            <MagneticButton 
              key={index} 
              className={styles.button}
              style={{ '--index': index }} 
            >
              <a
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? "noopener noreferrer" : undefined}
              >
                {link.text}
              </a>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}