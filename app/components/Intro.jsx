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
          Tracking what matters, fixing what’s broken, and helping businesses understand where their marketing is actually working and where it’s not.
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
