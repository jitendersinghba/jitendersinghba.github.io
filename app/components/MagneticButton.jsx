'use client';
import { useRef, useEffect } from 'react';

export default function MagneticButton({ children, className = '', ...props }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const el = btnRef.current;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const resetPosition = () => {
      el.style.transform = `translate(0px, 0px)`;
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', resetPosition);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', resetPosition);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className={`magnetic-button transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
