'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ZipperReveal.module.scss';

export default function ZipperReveal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 1], ['150%', '0%']);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['0 0 50% 50%', '0 0 0 0']);

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div
        className={styles.zipper}
        style={{ height, borderRadius }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </div>
  );
}

