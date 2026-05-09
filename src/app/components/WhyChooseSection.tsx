'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    icon: 'CurrencyRupeeIcon',
    title: 'Priced Below Market',
    description:
      'Our school website packages cost significantly less than standard agency rates — without cutting corners on design, speed, or functionality.',
    highlight: true,
    size: 'large',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Custom Domain Included',
    description:
      'We purchase the exact domain your school wants — yourschoolname.in or .com — and configure it completely.',
    highlight: false,
    size: 'small',
  },
  {
    icon: 'MagnifyingGlassIcon',
    title: 'Google Indexing',
    description:
      'We add your website to Google Search Console so parents and students can find your school on Google immediately after launch.',
    highlight: false,
    size: 'small',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Full Year of Maintenance',
    description:
      'Content updates, security patches, and technical support for 12 months post-launch — no additional charges.',
    highlight: false,
    size: 'small',
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.why-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 130);
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
      id="why-choose"
      className="py-24 bg-background overflow-hidden"
      aria-label="Why choose Agentech Developers"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label text-accent">Why Choose Us</span>
          <h2 className="text-section-title font-extrabold text-foreground mt-3 mb-5">
            Everything Your School Needs.<br />
            <span className="text-gradient-gold">Nothing You Don&apos;t.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We handle the entire digital setup for your school — from building the website to making sure Google can find it.
          </p>
        </div>

        {/* Bento Grid — 4 cards */}
        {/* 
          BENTO AUDIT:
          Array: [AffordablePricing, CustomDomains, GoogleIndexed, YearMaintenance] = 4 cards
          Desktop (grid-cols-3):
          Row 1: [col-1..2: AffordablePricing cs-2 rs-1] [col-3: CustomDomains cs-1 rs-1]
          Row 2: [col-1: GoogleIndexed cs-1 rs-1] [col-2..3: YearMaintenance cs-2 rs-1]
          Placed 4/4 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 — Large, spans 2 cols */}
          {/* col-1..2: AffordablePricing cs-2 rs-1 */}
          <div
            className="why-card md:col-span-2 bg-primary rounded-2xl p-8 md:p-10 hover-lift relative overflow-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 blob-gold opacity-20 rounded-full" aria-hidden="true" />
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon name="CurrencyRupeeIcon" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-primary-foreground mb-3">Priced Below Market</h3>
                <p className="text-primary-foreground/70 text-base leading-relaxed max-w-md">
                  Our school website packages cost significantly less than standard agency rates — without cutting corners on design, speed, or functionality. Schools get more value per rupee than anywhere else.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wide">
                  Market Rate: ₹30,000+
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-primary-foreground text-xs font-bold tracking-wide">
                  Our Rate: Much Less ✓
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 — col-3: CustomDomains cs-1 rs-1 */}
          <div
            className="why-card bg-card rounded-2xl p-8 hover-lift border border-border shadow-card relative overflow-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.13s, transform 0.7s ease 0.13s' }}
          >
            <div className="flex flex-col h-full justify-between gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon name="GlobeAltIcon" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground mb-2">Custom Domain Included</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We purchase the exact domain your school wants and configure it completely — yourschoolname.in or .com.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — col-1: GoogleIndexed cs-1 rs-1 */}
          <div
            className="why-card bg-card rounded-2xl p-8 hover-lift border border-border shadow-card relative overflow-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s' }}
          >
            <div className="flex flex-col h-full justify-between gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon name="MagnifyingGlassIcon" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground mb-2">Google Indexing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We add your website to Google Search Console so parents and students can find your school on Google search results.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 — col-2..3: YearMaintenance cs-2 rs-1 */}
          <div
            className="why-card md:col-span-2 bg-secondary/60 rounded-2xl p-8 md:p-10 hover-lift border border-border shadow-card relative overflow-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.39s, transform 0.7s ease 0.39s' }}
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 blob-navy opacity-30 rounded-full" aria-hidden="true" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Icon name="WrenchScrewdriverIcon" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground mb-2">Full Year of Maintenance</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                  Content updates, maintainance and technical support for 12 months post-launch — no additional charges. Your school website stays fresh and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
