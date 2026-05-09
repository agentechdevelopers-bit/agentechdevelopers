'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const services = [
  {
    id: 'custom-dev',
    icon: 'ComputerDesktopIcon',
    title: 'Custom Website Development',
    description:
      'We design and develop a completely custom website tailored to your school — not a generic template. Your website will reflect your school\'s identity, values, and offerings with dedicated pages for admissions, faculty, events, gallery, and more.',
    features: ['Custom UI design', 'Mobile-responsive', 'Fast loading', 'SEO-ready structure'],
    span: 'large',
  },
  {
    id: 'domain',
    icon: 'GlobeAltIcon',
    title: 'Domain Purchase',
    description:
      'We purchase the exact domain name your school wants — yourschoolname.in, .com, or .org — and configure all DNS settings. No technical knowledge needed from your side.',
    features: ['.in / .com / .org available', 'DNS configured', 'SSL certificate included'],
    span: 'small',
  },
  {
    id: 'deployment',
    icon: 'ServerIcon',
    title: 'Website Deployment',
    description:
      'We deploy your website on fast, reliable hosting infrastructure — ensuring high uptime, quick load times, and professional performance for parents and students visiting your site.',
    features: ['Fast hosting', '99.9% uptime', 'Professional infrastructure'],
    span: 'small',
  },
  {
    id: 'search-console',
    icon: 'MagnifyingGlassIcon',
    title: 'Google Search Console Setup',
    description:
      'We add your school\'s website to Google Search Console and submit your sitemap — so Google can crawl, index, and rank your pages. Your school will start appearing in search results from day one.',
    features: ['Sitemap submitted', 'Pages indexed', 'Search performance tracked'],
    span: 'small',
  },
  {
    id: 'maintenance',
    icon: 'WrenchScrewdriverIcon',
    title: '1-Year Website Maintenance',
    description:
      'For a full 12 months after launch, we handle all content updates and technical fixes at no additional cost. Your website stays current, secure, and working perfectly.',
    features: ['Content updates', 'Security patches', 'Technical support', '12-month coverage'],
    span: 'large',
  },
  {
    id: 'gbp',
    icon: 'BuildingOfficeIcon',
    title: 'Google Business Profile Setup',
    description:
      'We create and verify your school\'s Google Business Profile — so your school appears on Google Maps, in local search results, and in the Google knowledge panel when parents search for your school by name.',
    features: ['Google Maps listing', 'Local search visibility', 'Knowledge panel setup', 'Verified profile'],
    span: 'full',
  },
];

export default function ServicesBentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.service-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-detail"
      className="py-20 bg-background"
      aria-label="Services detail"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-label text-accent">All Services</span>
          <h2 className="text-section-title font-extrabold text-foreground mt-3">
            Six Services. <span className="text-gradient-gold">One Complete Package.</span>
          </h2>
        </div>

        {/*
          BENTO AUDIT:
          Array: [CustomDev, Domain, Deployment, SearchConsole, Maintenance, GBP] = 6 cards
          Desktop (grid-cols-3):
          Row 1: [col-1..2: CustomDev cs-2] [col-3: Domain cs-1]
          Row 2: [col-1: Deployment cs-1] [col-2: SearchConsole cs-1] [col-3: (already filled by Domain? No — Domain is rs-1)]
                 Wait — re-audit:
          Row 1: [col-1..2: CustomDev cs-2 rs-1] [col-3: Domain cs-1 rs-1]
          Row 2: [col-1: Deployment cs-1 rs-1] [col-2..3: Maintenance cs-2 rs-1]  ← SearchConsole needs placement
          
          Re-plan for 6 cards in 3-col grid:
          Row 1: [col-1..2: CustomDev cs-2] [col-3: Domain cs-1]
          Row 2: [col-1: Deployment cs-1] [col-2: SearchConsole cs-1] [col-3: empty] ← FAIL
          
          Fix: Use 2-col grid for middle row:
          Row 1 (grid-cols-3): [CustomDev cs-2] [Domain cs-1]
          Row 2 (grid-cols-3): [Deployment cs-1] [SearchConsole cs-1] [Maintenance cs-1]
          Row 3 (grid-cols-1): [GBP cs-full]
          Placed 6/6 ✓
        */}

        <div className="space-y-5">
          {/* Row 1: CustomDev (large) + Domain */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* col-1..2: CustomDev cs-2 */}
            <div
              className="service-card md:col-span-2 bg-primary rounded-2xl p-8 md:p-10 hover-lift relative overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 blob-gold opacity-15 rounded-full" aria-hidden="true" />
              <div className="relative z-10 flex flex-col h-full gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Icon name="ComputerDesktopIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-primary-foreground mb-3">Custom Website Development</h3>
                  <p className="text-primary-foreground/70 text-base leading-relaxed max-w-lg">
                    We design and develop a completely custom website tailored to your school — not a generic template. Your website will reflect your school&apos;s identity, values, and offerings with dedicated pages for admissions, faculty, events, gallery, and more.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Custom UI design', 'Mobile-responsive', 'Fast loading', 'SEO-ready structure'].map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full bg-white/10 text-primary-foreground/80 text-xs font-semibold">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* col-3: Domain cs-1 */}
            <div
              className="service-card bg-card rounded-2xl p-8 hover-lift border border-border shadow-card"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.12s, transform 0.7s ease 0.12s' }}
            >
              <div className="flex flex-col h-full gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name="GlobeAltIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">Domain Purchase</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We purchase the exact domain name your school wants — .in, .com, or .org — and configure all DNS settings and SSL certificate.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['.in / .com / .org', 'DNS configured', 'SSL included'].map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Deployment + SearchConsole + Maintenance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* col-1: Deployment cs-1 */}
            <div
              className="service-card bg-card rounded-2xl p-8 hover-lift border border-border shadow-card"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.24s, transform 0.7s ease 0.24s' }}
            >
              <div className="flex flex-col h-full gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name="ServerIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">Website Deployment</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We deploy your website on fast, reliable hosting — ensuring high uptime and quick load times for parents and students.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Fast hosting', '99.9% uptime', 'Professional infra'].map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* col-2: SearchConsole cs-1 */}
            <div
              className="service-card bg-card rounded-2xl p-8 hover-lift border border-border shadow-card"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.36s, transform 0.7s ease 0.36s' }}
            >
              <div className="flex flex-col h-full gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name="MagnifyingGlassIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">Google Search Console</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We add your school&apos;s website to Google Search Console and submit your sitemap so Google starts ranking your pages from day one.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Sitemap submitted', 'Pages indexed', 'Search tracked'].map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* col-3: Maintenance cs-1 */}
            <div
              className="service-card bg-secondary/60 rounded-2xl p-8 hover-lift border border-border shadow-card"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.48s, transform 0.7s ease 0.48s' }}
            >
              <div className="flex flex-col h-full gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name="WrenchScrewdriverIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">1-Year Maintenance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Content updates, security patches, and technical support for 12 months post-launch at no additional cost.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Content updates', 'Security patches', '12 months'].map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: GBP — full width */}
          <div className="grid grid-cols-1 gap-5">
            {/* col-1 full: GBP cs-full */}
            <div
              className="service-card bg-card rounded-2xl p-8 md:p-10 hover-lift border border-border shadow-card relative overflow-hidden"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s' }}
            >
              <div className="absolute top-0 right-0 w-80 h-80 blob-gold opacity-10 rounded-full" aria-hidden="true" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon name="BuildingOfficeIcon" size={28} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-foreground mb-3">Google Business Profile Setup</h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                    We create and verify your school&apos;s Google Business Profile — so your school appears on Google Maps, in local search results, and in the Google knowledge panel when parents search for your school by name. This is the single most important step for local discoverability.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:flex-col md:items-end shrink-0">
                  {['Google Maps listing', 'Local search visibility', 'Knowledge panel', 'Verified profile'].map((f) => (
                    <span key={f} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground text-base font-bold hover:bg-accent transition-all duration-300 shadow-navy hover:shadow-gold"
          >
            Get All Six Services — Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
