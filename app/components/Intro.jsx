'use client';

import { useRouter } from 'next/navigation';
import MagneticButton from '../components/MagneticButton'; // adjust path if needed
import styles from './Intro.module.scss';

export default function Intro() {
  const router = useRouter();

  return (
    <section className={styles.intro}>
      <div className={styles.left}>
        <h1>
          Helping businesses understand what works, what doesn't, and how to fix it. So they can grow with clarity and confidence.
        </h1>
      </div>
      <div className={styles.right}>
        <MagneticButton
          className={styles.aboutButton}
          onClick={() => router.push('/about')}
        >
          About Me
        </MagneticButton>
      </div>
    </section>
  );
}
