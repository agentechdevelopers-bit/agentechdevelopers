import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import GoogleFormEmbed from './components/GoogleFormEmbed';

export const metadata: Metadata = {
  title: 'Contact Us — AgentechDevelopers | School Website Inquiry',
  description:
    'Contact Agentech Developers for a free school website quote. Call, WhatsApp, or fill out our inquiry form. Based in Hyderabad, serving schools across India.',
  keywords: [
    'contact Agentech Developers',
    'school website inquiry Hyderabad',
    'school website quote Telangana',
    'web development agency contact',
  ],
  alternates: {
    canonical: 'https://agentechdevelopers.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Us — AgentechDevelopers',
    description:
      'Get a free school website quote from Agentech Developers. WhatsApp, call, or fill out our inquiry form.',
    url: 'https://agentechdevelopers.vercel.app/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: 'Contact — AgentechDevelopers',
              description: 'Contact page for Agentech Developers — school website development agency in Hyderabad.',
              url: 'https://agentechdevelopers.vercel.app/contact',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agentechdevelopers.vercel.app' },
                  { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://agentechdevelopers.vercel.app/contact' },
                ],
              },
            }),
          }}
        />

        <ContactHero />

        {/* Main content */}
        <section className="py-16 bg-background" aria-label="Contact form and information">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Form — 2 cols */}
              <div className="lg:col-span-2">
                <GoogleFormEmbed />
              </div>

              {/* Sidebar — 1 col */}
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Map-like address section */}
        <section className="py-16 bg-secondary/30" aria-label="Location information">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="section-label text-accent">Our Location</span>
                <h2 className="text-section-title font-extrabold text-foreground">
                  Based in Hyderabad. <br />
                  <span className="text-gradient-gold">Serving All of India.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are a Udyam-registered web development agency based in Hyderabad. While our office is in Telangana, we serve your Bussiness remotely across all states of India.
                </p>
                <address className="not-italic space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold text-sm mt-0.5">📍</span>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      Plot No 426, Sri Sai Nilayam, Gajularamaram,<br />
                      Hyderabad, Telangana — 500055, India
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold text-sm">📞</span>
                    <a href="tel:+919121726765" className="text-sm font-bold text-foreground hover:text-accent transition-colors">
                      +91 91217 26765
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold text-sm">✉️</span>
                    <a href="mailto:agentechdevelopers@gmail.com" className="text-sm font-bold text-foreground hover:text-accent transition-colors">
                      agentechdevelopers@gmail.com
                    </a>
                  </div>
                </address>
                <div className="udyam-badge inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                  <span className="text-accent text-sm" aria-hidden="true">✦</span>
                  <span className="text-xs font-bold text-accent">UDYAM-TS-20-0188729</span>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-card-hover h-80 border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8!2d78.4!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agentech Developers location — Gajularamaram, Hyderabad"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
