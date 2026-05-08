import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import WhyChooseSection from './components/WhyChooseSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'AgentechDevelopers — School Websites Built to Rank | Hyderabad',
  description:
    'Agentech Developers builds professional school websites in Hyderabad at below-market rates — domain, deployment, Google Search Console, Google Business Profile & 1-year maintenance included.',
  alternates: {
    canonical: 'https://agentechdevelopers.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* JSON-LD for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'AgentechDevelopers Homepage',
              description:
                'Professional school website development agency in Hyderabad offering affordable packages with domain, deployment, Google indexing and maintenance.',
              url: 'https://agentechdevelopers.com',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agentechdevelopers.com' },
                ],
              },
            }),
          }}
        />
        <HeroSection />
        <OverviewSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}