'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'nav-blur shadow-sm border-b border-border py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Agentech Developers Home">
            <AppLogo size={36} />
            <span className="font-display font-800 text-lg tracking-tight text-foreground hidden sm:block">
              <span className="font-extrabold">Agentech</span>
              <span className="text-accent font-semibold">Developers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-accent transition-all duration-300 shadow-navy"
            >
              Contact Us
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`h-[2px] bg-foreground rounded transition-all duration-300 ${
                  menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
                }`}
              />
              <span
                className={`h-[2px] bg-foreground rounded transition-all duration-300 ${
                  menuOpen ? 'opacity-0 w-0' : 'w-4'
                }`}
              />
              <span
                className={`h-[2px] bg-foreground rounded transition-all duration-300 ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(250,248,243,0.97)' }}
        onClick={() => setMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10" onClick={(e) => e?.stopPropagation()}>
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-8 py-4 rounded-full bg-primary text-primary-foreground text-base font-bold hover:bg-accent transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}