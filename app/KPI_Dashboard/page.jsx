'use client';

import styles from './kpi.module.scss'; // ✅ This is 100% correct
import FloatingNav from '../components/FloatingNav';
import MagneticButton from '../components/MagneticButton';

export default function KPIDashboardPage() {
  console.log('SCSS Styles:', styles); // Should log an object with class names

  return (
    <>
      <FloatingNav alwaysVisible={true} />

      <section className={styles.kpiDashboardPage}>
        <div className={styles.narrowContent}>
          <header className={styles.hero}>
            <h1>KPI Dashboard</h1>
            <p className={styles.subtitle}>
              Executive overview of bank performance across all key metrics
            </p>
          </header>

          {/* Add KPI visuals here */}

          <div className={styles.footerNav} style={{ justifyContent: 'flex-end' }}>
            <a href="/#projects" style={{ textDecoration: 'none' }}>
              <MagneticButton className={styles.magneticBtn}>Next</MagneticButton>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

