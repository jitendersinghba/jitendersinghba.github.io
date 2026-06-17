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

          {/* Section 1 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className={styles.heroHeading}>
              I view sales as a process of elimination.
            </h1>
          </motion.div>

          <motion.div
            className={styles.sectionBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className={styles.paragraph}>
              Most people think it is about adding more. They want more calls, more pitches, and more noise. I have found that the best results come from stripping away the nonsense. I do not believe in being an extrovert, being aggressive, or playing a numbers game just for the sake of activity. I believe in being the person who actually understands the mechanics of the problem, and then having the technical and operational confidence to fix it.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className={`${styles.sectionBox} mt-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className={styles.paragraph}>
              I do not play the closer role. I have learned that if you have to force a deal, you have already failed. I look at sales the way a researcher does. I do not want to sell something that is not needed, and I certainly do not want to work with someone who is not a fit for the systems I build. I spend my time digging into how things are currently running, identifying where the friction is, and deciding if I am the right person to clear it out. If I am not, I will tell you. That kind of blunt honesty is the only way I know how to build a reputation that lasts.
            </p>
          </motion.div>

          {/* Wide Image Block - Centered */}
          <motion.div
            className="flex justify-center my-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Image 
              src="/aboutme.jpg" 
              alt="Work environment" 
              width={1200} 
              height={400} 
              className="rounded-xl shadow-md object-cover"
            />
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className={`${styles.sectionBox} mt-12 text-left`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className={`${styles.sectionHeading} text-left`}>Let us talk</h2>
            <p className={styles.paragraph}>
              I am not here to be a growth hacker or to promise a miracle. I am here to build a reliable, logical path to the bottom line. I focus on the basics. I listen, I identify the bottleneck, I build a solution that functions, and I make sure it is scalable. If you are looking for someone to run a generic playbook, keep looking. If you want someone to look at your operations and build a system that actually produces results, let us talk.
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