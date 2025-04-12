'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Link from 'next/link';
import MagneticButton from '../components/MagneticButton'; // ✅ Add this line
import styles from './Hero.module.scss';

export default function Hero() {
  const trackRef = useRef(null);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const el = trackRef.current;
    let lastScrollY = window.scrollY;
    let currentX = 0;
    let direction = -1;
    const speed = 3;

    const updateDirection = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      if (delta > 0) direction = 1;
      else if (delta < 0) direction = -1;
      lastScrollY = scrollY;
    };

    const animate = () => {
      if (!el) return;

      currentX += direction * speed;

      const loopWidth = el.scrollWidth / 2;

      if (direction === -1 && currentX <= -loopWidth) {
        currentX = 0;
      } else if (direction === 1 && currentX >= 0) {
        currentX = -loopWidth;
      }

      el.style.transform = `translateX(${currentX}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', updateDirection);
    animate();

    return () => {
      window.removeEventListener('scroll', updateDirection);
    };
  }, []);

  return (
    <section className={styles.hero} ref={vantaRef}>
      {/* Header Section */}
      <header className={styles.navbar}>
        <div className={styles.brand}>
          <span className={styles.brandText}>Coded by JS</span>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/about">About</Link></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Location Tag */}
      <div className={styles.locationTag}>
        <div className={styles.locationText}>
          <span>Located in Canada</span>
        </div>
        <div className={styles.locationIcon}>
          <img src="https://flagcdn.com/w80/ca.png" alt="Canada Flag" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.nameScrollerWrapper}>
            <div className={styles.nameScroller}>
              <div className={styles.nameTrack} ref={trackRef}>
                <h1>Jitender Singh —</h1>
                <h1>Jitender Singh —</h1>
                <h1>Jitender Singh —</h1>
                <h1>Jitender Singh —</h1>
                <h1>Jitender Singh —</h1>
                <h1>Jitender Singh —</h1>
              </div>
            </div>
          </div>

          <MagneticButton
            className={styles.roleButton}
            onClick={() =>
              window.open(
                'https://www.iiba.org/professional-development/career-centre/what-is-business-analysis/',
                '_blank'
              )
            }
          >
            Business Analyst
          </MagneticButton>
        </div>
        <div className={styles.rightImage}></div>
      </div>
    </section>
  );
}
