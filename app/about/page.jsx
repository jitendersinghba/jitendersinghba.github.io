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

          <motion.div
            className={styles.sectionBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className={styles.paragraph}>
              It’s funny how the small things you enjoy early on end up shaping your path without you even realizing it. In school, I found a strange kind of happiness in balancing spreadsheets, matching both sides of a balance sheet, getting the numbers just right. That feeling, when everything clicked, stuck with me more than I realized. There was something calming about it, the quiet focus, the small victories of solving tiny puzzles that added up to something bigger. I didn't think much of it back then. It was just another school task. But looking back, I know now that sense of order, of bringing structure to chaos, would keep pulling me forward.
            </p>
          </motion.div>

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
                But numbers weren't the whole story. I've always been naturally curious, curious about people, decisions, systems, and why things work (or don't). That curiousity led me to philosophy, where I didn't just seek answers but learned to ask better questions. It taught me to think deeply about the underlying structures of ideas, to analyze concepts critically, and to appreciate the complexity of human thought and behavior. This philosophical lens has become integral to how I approach problems, enabling me to navigate ambiguity and uncover insights that aren't immediately apparent.
              </p>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.sectionBox} mt-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className={styles.paragraph}>
              Fast forward to now, Business Analysis feels less like a skill and more like second nature to me. I catch myself doing it without even thinking, pulling things apart, tracing how they work, spotting what slows them down, and wondering how they could run better. It's never about chasing perfect answers, it's the small wins I enjoy most. Making something a little clearer. Helping a process flow smoother. Turning a messy idea into something real that actually works. That's what keeps me hooked. That quiet, steady feeling that I've helped make things better, even just a little bit.
            </p>
          </motion.div>

          <motion.div
            className={`${styles.sectionBox} mt-14`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className={styles.sectionHeading}>How I Approach My Work</h2>
            <p className={styles.paragraph}>
              When I'm faced with a problem, I start by stepping back to understand how everything fits together. I like to map out the steps, spot where things get stuck, and talk with the people involved to see the full picture. I've learned how important it is to listen carefully, ask the right questions, and document what's really needed, not just what seems obvious at first. I work through the details to break big problems into smaller, manageable pieces. I always try to ground my recommendations in facts, using data when I can to make sure we're solving the right problem and not just the loudest one. I know I'm still growing in this field, but that's what I enjoy the most, helping teams work a little smoother, removing small frustrations from day-to-day processes, and knowing I've played a part in making things better.
            </p>
          </motion.div>

          <motion.div
            className={`${styles.sectionBox} mt-14`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className={styles.sectionHeading}>Things I’m Good At</h2>
            <p className={styles.paragraph}>
              I’ve always been quick to spot what’s really going on beneath the surface, the patterns, the pain points, and the deeper needs. As a Business Analyst, I bring structure when things feel messy and help teams move forward with clarity. I grasp complex ideas quickly and tend to see both the data and the people behind it. I’m deeply empathetic, highly adaptable, and driven by a belief that everything is always evolving, and that’s exactly where I thrive. For me, learning fast and staying curious are core to how I work and grow. On the technical side, I’m confident with tools like SQL, Excel, Tableau, and Power BI to uncover insights and build impactful dashboards. I manage collaboration with JIRA and Confluence, and map out processes using Lucidchart and Draw.io. I’ve also worked with APIs and light scripting when needed. Tools evolve and I’m always ready to learn new ones. I see them as extensions of a deeper mindset of sharp thinking, clear problem-solving, and meaningful impact.
            </p>
          </motion.div>

          <motion.div
            className={`${styles.sectionBox} mt-12 text-left`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className={`${styles.sectionHeading} text-left`}>Outside the Office</h2>
            <p className={`${styles.paragraph} italic`}>
              I enjoy chess, biking, and diving into the world of finance, especially exploring how markets behave and what drives long-term value. I find calm in being outdoors, whether it's riding through open fields, spending time with animals, or simply taking in the stillness of nature. These moments help me reset, reflect, and stay grounded. I believe good work starts with a clear mind and that balance matters. If you're curious to see what I’ve been working on professionally, just click the Projects button below.
            </p>
            <div className={styles.projectsButtonWrapper}>
              <MagneticButton
                className={styles.circleButton}
                onClick={() => window.location.href = '/#projects'}
              >
                Projects
              </MagneticButton>
            </div>
          </motion.div>

        </main>
      </div>
    </AnimatePresenceWrapper>
  );
}
