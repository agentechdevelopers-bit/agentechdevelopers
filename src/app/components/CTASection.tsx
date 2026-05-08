import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="py-24 bg-primary relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] blob-gold opacity-15 rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blob-navy opacity-20 rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
        <span className="section-label text-accent">Ready to Get Started?</span>

        <h2 className="text-section-title font-extrabold text-primary-foreground">
          Give Your School the Digital <br />
          <span className="text-gradient-gold">Presence It Deserves.</span>
        </h2>

        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto leading-relaxed">
          Contact us today for a free consultation. We will assess your school&apos;s needs and send you a detailed proposal within 24 hours — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-accent text-accent-foreground text-base font-bold hover:bg-white hover:text-foreground transition-all duration-300 shadow-gold"
          >
            Contact Us Now
          </Link>
          <a
            href="https://wa.me/919121726765?text=Hello%20Agentech%20Developers%2C%20I%20want%20to%20know%20more%20about%20school%20websites."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground text-base font-semibold hover:border-accent hover:text-accent transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>

        <p className="text-primary-foreground/40 text-sm">
          Based in Hyderabad, Telangana · Serving schools across India
        </p>
      </div>
    </section>
  );
}