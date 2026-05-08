'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;

      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${mx * 40}px, ${my * 30}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${mx * -30}px, ${my * -20}px)`;
      }
    };

    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-24 pb-16"
      aria-label="Hero section"
    >
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0" aria-hidden="true" />

      {/* Blob 1 — gold */}
      <div
        ref={blobRef1}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blob-gold rounded-full pointer-events-none z-0 transition-transform duration-700 ease-out animate-float-slow"
        aria-hidden="true"
      />
      {/* Blob 2 — navy */}
      <div
        ref={blobRef2}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] blob-navy rounded-full pointer-events-none z-0 transition-transform duration-700 ease-out animate-float-medium"
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-accent/20 bg-white/60 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          <span className="section-label text-accent">Registered Web Development Agency · Hyderabad, India</span>
        </div>

        {/* Main headline */}
        <h1 className="text-hero-xl font-extrabold text-foreground tracking-tight">
          Your School Deserves<br />
          <span className="text-gradient-gold">A Website That Works.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          We build professional, Google-indexed school websites — complete with domain, deployment, Search Console setup, and a full year of maintenance — at prices schools can actually afford.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground text-base font-bold hover:bg-accent transition-all duration-300 shadow-navy hover:shadow-gold"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground text-base font-semibold hover:border-accent hover:text-accent transition-all duration-300"
          >
            View Services
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <span className="text-accent text-lg" aria-hidden="true">✦</span>
            <span className="text-xs font-bold text-muted-foreground tracking-wide">Udyam Registered</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-lg" aria-hidden="true">✦</span>
            <span className="text-xs font-bold text-muted-foreground tracking-wide">Google Search Console Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-lg" aria-hidden="true">✦</span>
            <span className="text-xs font-bold text-muted-foreground tracking-wide">1-Year Maintenance Included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent text-lg" aria-hidden="true">✦</span>
            <span className="text-xs font-bold text-muted-foreground tracking-wide">Below Market Rates</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" aria-hidden="true">
        <span className="text-xs text-muted-foreground tracking-widest uppercase font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  );
}