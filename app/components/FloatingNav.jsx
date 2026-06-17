'use client';

import { useEffect, useRef, useState } from 'react';
import MagneticButton from './MagneticButton';
import styles from './FloatingNav.module.scss';

export default function FloatingNav({ alwaysVisible = false }) {
  const [showNav, setShowNav] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(alwaysVisible);
  const menuRef = useRef(null);

  useEffect(() => {
    if (alwaysVisible) return;

    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.9;
      setScrolledPastHero(window.scrollY > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysVisible]);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  const handleNavClick = () => setShowNav(false);

  return (
    <>
      {(scrolledPastHero || showNav) && (
        <div className={styles.floatingWrapper} ref={menuRef}>
          <MagneticButton
            className={styles.toggleButton}
            onClick={() => setShowNav(!showNav)}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </MagneticButton>

          {showNav && (
            <div className={styles.menu}>
              <MagneticButton className={styles.menuLink} onClick={handleNavClick}>
                <a href="/#" style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}>
                  Home
                </a>
              </MagneticButton>

              <MagneticButton className={styles.menuLink} onClick={handleNavClick}>
                <a href="/about" style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}>
                  About
                </a>
              </MagneticButton>

              <MagneticButton className={styles.menuLink} onClick={handleNavClick}>
                {/* ✅ Simple HTML anchor that links seamlessly with the page ID */}
                <a href="/#philosophy" style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}>
                  My Philosophy
                </a>
              </MagneticButton>

              <MagneticButton className={styles.menuLink} onClick={handleNavClick}>
                <a href="/#contact" style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}>
                  Contact
                </a>
              </MagneticButton>
            </div>
          )}
        </div>
      )}
    </>
  );
}