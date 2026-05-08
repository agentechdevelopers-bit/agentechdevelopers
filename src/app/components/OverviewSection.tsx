'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
{ value: '100%', label: 'Fully Deployed' },
{ value: '₹ Low', label: 'Below Market Rate' },
{ value: '1 Year', label: 'Maintenance Included' },
{ value: 'Google', label: 'Search Console Setup' }];


export default function OverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-init').forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove('reveal-init');
                el.classList.add('section-reveal');
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
      id="about"
      className="py-24 bg-secondary/30 overflow-hidden"
      aria-label="About Agentech Developers">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Image + floating card */}
          <div className="lg:col-span-6 relative reveal-init" style={{ transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card-hover">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d906f576-1770195175783.png"
                alt="School building with students in a bright, well-lit courtyard, open sky, clean architecture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 glass-card p-6 rounded-xl shadow-card-hover max-w-[220px] reveal-init" style={{ transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Govt. Registered</div>
              <div className="font-extrabold text-foreground text-sm leading-tight">UDYAM-TS-20-0188729</div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                <span className="text-xs text-muted-foreground font-semibold">Verified Business</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6 reveal-init" style={{ transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s' }}>
              <span className="section-label text-accent">Who We Are</span>
              <h2 className="text-section-title font-extrabold text-foreground leading-tight">
                A Hyderabad Agency <br />
                <span className="text-gradient-gold">Built for Schools.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Agentech Developers is a Udyam-registered web development agency based in Hyderabad, Telangana. We specialize in building customized, professional websites for schools — handling everything from domain purchase to Google Business Profile setup, so your school is visible where it matters most.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We believe every school — regardless of size or budget — deserves a powerful digital presence. That is why our packages are priced significantly below the market rate without compromising on quality or features.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 reveal-init" style={{ transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}>
              {stats.map((stat) =>
              <div key={stat.label} className="gradient-border-card p-5 rounded-xl shadow-card">
                  <div className="text-2xl font-extrabold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-muted-foreground tracking-wide">{stat.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}