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
          I love sales because I care about people, and this is why I sell solutions, not products. Wanna know the real meaning of the word "Sales"? <br></br>Get in touch :)
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
