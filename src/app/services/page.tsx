import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ServicesHero from './components/ServicesHero';
import ServicesBentoGrid from './components/ServicesBentoGrid';
import FAQSection from './components/FAQSection';
import CTASection from '@/app/components/CTASection';

export const metadata: Metadata = {
  title: 'Services — School Website Development | AgentechDevelopers',
  description:
    'Agentech Developers offers custom school website development, domain purchase, deployment, Google Search Console setup, Google Business Profile, and 1-year maintenance — all in one affordable package.',
  keywords: [
    'school website services',
    'school website development Hyderabad',
    'Google Business Profile for schools',
    'school website maintenance Telangana',
    'domain purchase for school',
    'Google Search Console school India',
  ],
  alternates: {
    canonical: 'https://agentechdevelopers.com/services',
  },
  openGraph: {
    title: 'Services — School Website Development | AgentechDevelopers',
    description:
      'Complete school website services: custom development, domain, deployment, Google indexing, maintenance, and Google Business Profile.',
    url: 'https://agentechdevelopers.com/services',
  },
};

export default function ServicesPage() {
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
              '@type': 'WebPage',
              name: 'Services — AgentechDevelopers',
              description:
                'Complete school website services including custom development, domain, deployment, Google Search Console, maintenance, and Google Business Profile.',
              url: 'https://agentechdevelopers.com/services',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agentechdevelopers.com' },
                  { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://agentechdevelopers.com/services' },
                ],
              },
            }),
          }}
        />
        <ServicesHero />
        <ServicesBentoGrid />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}