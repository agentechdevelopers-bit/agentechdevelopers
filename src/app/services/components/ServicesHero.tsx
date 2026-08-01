import React from 'react';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative pt-36 pb-20 bg-background overflow-hidden" aria-label="Services hero">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob-gold opacity-15 rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <span className="section-label text-accent">What We Offer</span>
        <h1 className="text-hero-lg font-extrabold text-foreground">
          Complete Bussiness Portfolio Website <br />
          <span className="text-gradient-gold">Services in One Package.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From building your custom website to setting up your Google Business Profile — we handle the entire digital setup so your Bussiness is visible, professional, and easy to find online.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-base font-bold hover:bg-accent transition-all duration-300 shadow-navy"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
