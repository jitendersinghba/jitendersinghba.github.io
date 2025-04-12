'use client';

import { useRouter } from 'next/navigation';
import FloatingNav from '../components/FloatingNav';
import AnimatePresenceWrapper from '../components/AnimatePresenceWrapper';

export default function AboutPage() {
  const router = useRouter();

  return (
    <AnimatePresenceWrapper>
      <div className="relative min-h-screen bg-[#5865F2] text-white px-8 py-12">
        {/* Floating Burger Menu */}
        <FloatingNav alwaysVisible={true} />

        <main className="flex flex-col justify-between min-h-[90vh]">
          {/* About Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg max-w-2xl leading-relaxed">
              I’m Jitender Singh — a Business Analyst who blends creativity, strategy, and tech to help organizations
              grow smarter and faster. With a strong foundation in IT and a sharp sense of business logic,
              I turn complex challenges into simple, scalable solutions. My mission? Deliver outcomes
              that matter.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-16">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 rounded-full text-white bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors duration-300"
            >
              ← Back
            </button>
          </div>
        </main>
      </div>
    </AnimatePresenceWrapper>
  );
}
