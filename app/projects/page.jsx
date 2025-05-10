'use client';

import FloatingNav from '../components/FloatingNav';
import MagneticButton from '../components/MagneticButton';
import styles from './page.module.scss';

export default function ProjectsPage() {
  return (
    <div className={styles.pageWrapper}>
      <FloatingNav alwaysVisible={true} />

      <main className={styles.mainContent}>
        <h1 className={styles.heading}>My Projects</h1>
        <p className={styles.introText}>
          This is where I showcase the work I’ve done, practical, focused, and aligned with what today’s businesses really need.
          Every project reflects my mindset as a Business Analyst: clear goals, smart data, and clean execution.
        </p>
        <p className={styles.comingSoon}>More coming soon...</p>

        <MagneticButton
          className={styles.backButton}
          onClick={() => (window.location.href = '/#projects')}
        >
          Back
        </MagneticButton>
      </main>
    </div>
  );
}
