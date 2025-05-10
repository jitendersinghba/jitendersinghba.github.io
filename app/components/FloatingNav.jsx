'use client';

import { useEffect, useRef, useState } from 'react';
import MagneticButton from '../components/MagneticButton';
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
              <MagneticButton
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick();
                  window.location.href = '/';
                }}
              >
                Home
              </MagneticButton>

              <MagneticButton
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick();
                  window.location.href = '/about';
                }}
              >
                About
              </MagneticButton>

              <MagneticButton
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick();
                  window.location.href = '/#projects'; // ✅ fixed
                }}
              >
                Projects
              </MagneticButton>

              <MagneticButton
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick();
                  window.location.href = '/#contact'; // ✅ fixed
                }}
              >
                Contact
              </MagneticButton>
            </div>
          )}
        </div>
      )}
    </>
  );
}
