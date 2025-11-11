'use client';

import FloatingNav from '../components/FloatingNav';
import AnimatePresenceWrapper from '../components/AnimatePresenceWrapper';
import MagneticButton from '../components/MagneticButton';
import styles from './About.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <AnimatePresenceWrapper>
      <div className={`${styles.pageWrapper} font-outfit`}>
        <FloatingNav alwaysVisible={true} />

        <main className="flex flex-col w-full px-4 py-12">

          {/* Section 1 — Headline & Value Proposition */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className={styles.heroHeading}>
              Clarity Over Clutter.<br />Precision Over Guesswork.
            </h1>
          </motion.div>

          <motion.div
            className={styles.sectionBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className={styles.paragraph}>
              I help businesses track what matters, fix broken analytics setups, and make confident, data backed decisions.
              Using tools like GA4, Google Tag Manager, and Looker Studio, I turn scattered marketing data into insights that actually drive growth.
              My focus is always on accuracy, simplicity, and transparency, creating systems that make sense to both marketers and decision makers.
              Every report I deliver is meant to clarify, not confuse, and every recommendation is backed by data that has been tracked, tested, and verified.
              The goal is simple, to give you a reliable picture of performance so you can scale what works and stop wasting energy on what does not.
            </p>
          </motion.div>

          {/* Section 2 — Who I Help & How I Work */}
          <motion.div
            className={`${styles.sectionBox} mt-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image 
                src="/aboutme.jpg" 
                alt="About Me" 
                width={400} 
                height={500} 
                className="rounded-xl shadow-md"
              />
              <p className={styles.paragraph}>
                I work with marketing teams, founders, and small to mid sized businesses that want clarity instead of noise.
                My focus is on clean tracking, accurate reporting, and actionable insights, not bloated dashboards.
                Every setup I build is designed to show what is working, what is not, and where to improve next.
                Whether it is a startup needing its first analytics foundation or a business looking to repair years of inconsistent data, I build systems that tell the truth.
                I approach every project with a practical mindset, listen first, identify the real issues, and simplify before scaling.
                The result is a transparent workflow where every tag, trigger, and metric serves a clear purpose and aligns with your goals.
              </p>
            </div>
          </motion.div>

          {/* Section 3 — Let’s Connect */}
          <motion.div
            className={`${styles.sectionBox} mt-12 text-left`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className={`${styles.sectionHeading} text-left`}>Let’s Connect</h2>
            <p className={styles.paragraph}>
              If you are tired of confusing reports, missing data, and dashboards that do not tell the real story, it is time to make your analytics clear, accurate, and built for growth.
              Most businesses do not struggle because they lack data, they struggle because they cannot trust it or do not know how to use it.
              I help bridge that gap by creating systems that give you full confidence in your numbers, so your decisions are based on facts, not assumptions.
              The clarity that comes from a well built analytics setup is not just technical, it is strategic. It lets you move faster, spend smarter, and focus on what truly moves your business.
              Let’s connect and make your data work the way it should.
            </p>
            <div className={styles.projectsButtonWrapper}>
              <MagneticButton
                className={styles.circleButton}
                onClick={() => window.location.href = '/#contact'}
              >
                Connect
              </MagneticButton>
            </div>
          </motion.div>

        </main>
      </div>
    </AnimatePresenceWrapper>
  );
}
