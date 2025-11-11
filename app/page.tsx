'use client';

import Hero from './components/Hero';
import Intro from './components/Intro';
import Projects from './components/Services';
import Contact from './components/Contact';
import FloatingNav from './components/FloatingNav';
import ZipperReveal from './components/ZipperReveal';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Intro />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* 🔥 Clean reusable Zipper Reveal */}
      <ZipperReveal />

      <section id="contact">
        <Contact />
      </section>

      <FloatingNav />
    </>
  );
}
