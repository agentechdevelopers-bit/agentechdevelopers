'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    step: 'Step 01',
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Tell Us About Your School',
    description:
      'Contact us via WhatsApp, call, or our inquiry form. Share your school name, preferred domain, and what you want on the website. We will send you a detailed proposal within 24 hours.',
    cta: 'Start with a free consultation',
    offset: false,
  },
  {
    step: 'Step 02',
    icon: 'ComputerDesktopIcon',
    title: 'We Build & You Review',
    description:
      'Our team designs and develops your custom school website. You get to review it, request changes, and approve before anything goes live. No surprises.',
    cta: 'See our past work',
    offset: true,
  },
  {
    step: 'Step 03',
    icon: 'RocketLaunchIcon',
    title: 'We Launch & You Rank',
    description:
      'We deploy your website, set up Google Search Console, configure your Google Business Profile, and submit your sitemap — so your school starts ranking on Google from day one.',
    cta: 'Get launched in days',
    offset: false,
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.step-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 180);
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
      id="how-it-works"
      className="py-24 bg-primary overflow-hidden relative"
      aria-label="How it works"
    >
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-gold opacity-10 rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-navy opacity-20 rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="section-label text-accent">How It Works</span>
            <h2 className="text-section-title font-extrabold text-primary-foreground mt-3">
              From Inquiry to <br />
              <span className="text-gradient-gold">Live on Google.</span>
            </h2>
          </div>
          <p className="text-primary-foreground/60 text-base max-w-xs leading-relaxed md:text-right">
            A simple, transparent process — no tech knowledge required from your side.
          </p>
        </div>

        {/* Process cards — staggered offsets (NOT a numbered timeline) */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="step-card glass-dark rounded-2xl p-8 hover-lift relative overflow-hidden"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `opacity 0.7s ease, transform 0.7s ease`,
                marginTop: step.offset ? '3rem' : '0',
              }}
            >
              <div className="absolute top-4 right-6 text-primary-foreground/5 font-extrabold text-7xl leading-none select-none pointer-events-none" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Icon name={step.icon as 'ChatBubbleLeftRightIcon'} size={22} className="text-accent" />
                  </div>
                  <span className="section-label text-accent/70">{step.step}</span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-primary-foreground mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.description}</p>
                </div>

                <div className="flex items-center gap-2 text-accent text-xs font-bold">
                  <span>{step.cta}</span>
                  <Icon name="ArrowRightIcon" size={14} className="text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}