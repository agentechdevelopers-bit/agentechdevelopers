'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const included = [
  'Custom website design tailored for your school',
  'Domain name purchase (your choice of .in / .com)',
  'Full website deployment on professional hosting',
  'Google Search Console setup & sitemap submission',
  'Google Business Profile creation & verification',
  '12 months of website maintenance & updates',
  'Mobile-responsive design for all devices',
  'Basic SEO setup for local search visibility',
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.price-reveal').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 bg-secondary/30 overflow-hidden"
      aria-label="Pricing highlights"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div
              className="price-reveal"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
            >
              <span className="section-label text-accent">Pricing</span>
              <h2 className="text-section-title font-extrabold text-foreground mt-3 mb-5">
                Powerful Websites. <br />
                <span className="text-gradient-gold">Prices Schools Can Afford.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Most web agencies charge ₹30,000 to ₹80,000+ for a school website — and then charge extra for every small update. We do it differently. Our complete package is priced to be accessible for schools of all sizes across Telangana and India.
              </p>
            </div>

            {/* Market comparison */}
            <div
              className="price-reveal space-y-4"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s' }}
            >
              <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 border border-red-100">
                <div className="flex items-center gap-3">
                  <span className="text-red-400 text-lg" aria-hidden="true">✕</span>
                  <div>
                    <div className="font-bold text-foreground text-sm">Other Agencies</div>
                    <div className="text-xs text-muted-foreground">Basic website only, maintenance extra</div>
                  </div>
                </div>
                <div className="font-extrabold text-red-500 text-base">₹30,000+</div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg" aria-hidden="true">✓</span>
                  <div>
                    <div className="font-bold text-foreground text-sm">Agentech Developers</div>
                    <div className="text-xs text-muted-foreground">Complete package, everything included</div>
                  </div>
                </div>
                <div className="font-extrabold text-accent text-base">Contact for Price</div>
              </div>
            </div>

            <div
              className="price-reveal"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground text-base font-bold hover:bg-accent transition-all duration-300 shadow-navy hover:shadow-gold"
              >
                Get Your Custom Quote
                <Icon name="ArrowRightIcon" size={18} className="text-primary-foreground" />
              </Link>
            </div>
          </div>

          {/* Right: What's included card */}
          <div
            className="price-reveal gradient-border-card rounded-2xl p-8 shadow-card-hover"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s' }}
          >
            <div className="mb-6">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Complete Package Includes</div>
              <h3 className="text-xl font-extrabold text-foreground">Everything from Day 1</h3>
            </div>
            <ul className="space-y-3" role="list">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="CheckIcon" size={12} className="text-accent" variant="solid" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-xl udyam-badge">
              <div className="text-xs font-bold text-accent tracking-wide">Udyam Registered Business</div>
              <div className="text-xs text-muted-foreground mt-1">UDYAM-TS-20-0188729 · Hyderabad, Telangana</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}