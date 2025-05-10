'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="transition-zipper"
            initial={{ scale: 0 }}
            animate={{ scale: 20 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              width: '100px',
              height: '100px',
              backgroundColor: '#3D5A40', // Change this color to match your theme
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999,
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
