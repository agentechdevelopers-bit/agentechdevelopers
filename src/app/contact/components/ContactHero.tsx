import React from 'react';

export default function ContactHero() {
  return (
    <section
      className="relative pt-36 pb-16 bg-background overflow-hidden"
      aria-label="Contact hero"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blob-gold opacity-15 rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="section-label text-accent">Get in Touch</span>
        <h1 className="text-hero-lg font-extrabold text-foreground">
          Let&apos;s Build Your Bussiness&apos;s <br />
          <span className="text-gradient-gold">Digital Presence.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Fill out the form below, send us a WhatsApp message, or give us a call. We will respond within 24 hours with a detailed proposal for your Bussiness.
        </p>
      </div>
    </section>
  );
}
