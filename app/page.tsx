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

      {/* ✅ Changed from id="projects" to id="philosophy" to match your nav link */}
      <section id="philosophy">
        <Projects />
      </section>

      {/* 🔥 The non-negotiable layout zipper reveal */}
      <ZipperReveal />

      <section id="contact">
        <Contact />
      </section>

      <FloatingNav />
    </>
  );
}