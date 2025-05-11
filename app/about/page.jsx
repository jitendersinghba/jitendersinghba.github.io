'use client';

import FloatingNav from '../components/FloatingNav';
import AnimatePresenceWrapper from '../components/AnimatePresenceWrapper';
import styles from './About.module.scss';
import Image from 'next/image';          // ✅ import stays here
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <AnimatePresenceWrapper>
      <div className={`${styles.pageWrapper} font-outfit`}>
        <FloatingNav alwaysVisible={true} />

        <main className="flex flex-col w-full px-4 py-12">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className={styles.heroHeading}>
              Creating Clarity<br />in Chaos 
            </h1>
          </motion.div>

          <motion.div className={styles.sectionBox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <p className={styles.paragraph}>
              It’s funny how the small things you enjoy early on end up shaping your path without you even realizing it. In school, I found a strange kind of happiness in balancing spreadsheets, matching both sides of a balance sheet, getting the numbers just right. That feeling, when everything clicked, stuck with me more than I realized. There was something calming about it, the quiet focus, the small victories of solving tiny puzzles that added up to something bigger. I didn't think much of it back then. It was just another school task. But looking back, I know now that sense of order, of bringing structure to chaos, would keep pulling me forward.
            </p>
          </motion.div>

          <motion.div className={`${styles.sectionBox} mt-10`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image 
                src="/aboutme.jpg" 
                alt="About Me" 
                width={400}                      // ✅ safe width
                height={500}                     // ✅ safe height
                className="rounded-xl shadow-md"
              />
              <p className={styles.paragraph}>
                But numbers weren't the whole story. I've always been naturally curious, curious about people, decisions, systems, and why things work (or don't). That curiousity led me to philosophy, where I didn't just seek answers but learned to ask better questions. It taught me to think deeply about the underlying structures of ideas, to analyze concepts critically, and to appreciate the complexity of human thought and behavior. This philosophical lens has become integral to how I approach problems, enabling me to navigate ambiguity and uncover insights that aren't immediately apparent.
              </p>
            </div>
          </motion.div>

          <motion.div className={`${styles.sectionBox} mt-10`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <p className={styles.paragraph}>
              Fast forward to now, Business Analysis feels less like a skill and more like second nature to me. I catch myself doing it without even thinking, pulling things apart, tracing how they work, spotting what slows them down, and wondering how they could run better. It's never about chasing perfect answers, it's the small wins I enjoy most. Making something a little clearer. Helping a process flow smoother. Turning a messy idea into something real that actually works. That's what keeps me hooked. That quiet, steady feeling that I've helped make things better, even just a little bit.
            </p>
          </motion.div>

          <motion.div className={`${styles.sectionBox} mt-14`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <h2 className={styles.sectionHeading}>How I Approach My Work</h2>
            <p className={styles.paragraph}>
              When I'm faced with a problem, I start by stepping back to understand how everything fits together. I like to map out the steps, spot where things get stuck, and talk with the people involved to see the full picture. I've learned how important it is to listen carefully, ask the right questions, and document what's really needed, not just what seems obvious at first. I work through the details to break big problems into smaller, manageable pieces. I always try to ground my recommendations in facts, using data when I can to make sure we're solving the right problem and not just the loudest one. I know I'm still growing in this field, but that's what I enjoy the most, helping teams work a little smoother, removing small frustrations from day-to-day processes, and knowing I've played a part in making things better. 
            </p>
          </motion.div>

          <motion.div className={`${styles.sectionBox} mt-14`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <h2 className={styles.sectionHeading}>Skills Snapshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={styles.subSectionHeading}>Business Analysis Core Skills</h3>
                <ul className={styles.skillsList}>
                  <li>Communication</li>
                  <li>Critical Thinking</li>
                  <li>Stakeholder Management</li>
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                  <li>Facilitation</li>
                </ul>
              </div>
              <div>
                <h3 className={styles.subSectionHeading}>Technical and Analytical Tools</h3>
                <ul className={styles.skillsList}>
                  <li>SQL</li>
                  <li>Excel</li>
                  <li>Power BI</li>
                  <li>Tableau</li>
                  <li>JIRA</li>
                  <li>Confluence</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className={`${styles.sectionBox} mt-12 text-left`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <p className={`${styles.paragraph} italic`}>
              Outside of work, I like chess, riding bikes, and exploring the world of finance. I also enjoy being out in nature, the open air, the fields, animals, and the quiet feeling of being surrounded by something real. If you want to check out some of the work I've done, just click the Projects button below.
            </p>
            <div className={styles.projectsButtonWrapper}>
              <a href="/#projects" className={styles.circleButton}>Projects</a>
            </div>
          </motion.div>
        </main>
      </div>
    </AnimatePresenceWrapper>
  );
}
