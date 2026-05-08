import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AppLogo size={36} />
              <span className="font-extrabold text-lg text-foreground tracking-tight">
                Agentech<span className="text-accent">Developers</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Affordable, professional school websites — fully deployed, indexed on Google, and maintained for a year.
            </p>
            <div className="udyam-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-md">
              <span className="text-accent" aria-hidden="true">✦</span>
              <span className="text-xs font-bold text-accent tracking-wide">UDYAM-TS-20-0188729</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Home</Link>
              <Link href="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Services</Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground">Contact</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="MapPinIcon" size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Plot No 426, Sri Sai Nilayam,<br />
                  Gajularamaram, Hyderabad,<br />
                  Telangana — 500055, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="PhoneIcon" size={16} className="text-accent shrink-0" />
                <a
                  href="tel:+919121726765"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  +91 91217 26765
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="EnvelopeIcon" size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:agentechdevelopers@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-medium"
                >
                  agentechdevelopers@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date()?.getFullYear()} Agentech Developers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span className="text-xs text-muted-foreground">Hyderabad, Telangana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}