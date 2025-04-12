'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AnimatePresenceWrapper({ children }) {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isHome = pathname === '/';
  const shouldAnimate = hasMounted && !isHome;

  // 👇 If first load and it's home — just render raw content, no animation
  if (!shouldAnimate && isHome) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100vh',
          height: '100%',
          zIndex: 100,
          backgroundColor: '#5865F2',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
