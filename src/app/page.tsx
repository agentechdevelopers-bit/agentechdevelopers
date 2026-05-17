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
  title: 'School Website Design Telangana & Hyderabad | Custom Solutions',
  description:
    'Affordable school website development services by Agentech Developers in Hyderabad. Explore premium website design packages for schools in Telangana complete with SEO setup.',
  alternates: {
    canonical: 'https://agentechdevelopers.com'
  }
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Agentech Developers - School Website Development Hyderabad',
              'description':
                'Professional school website development agency in Hyderabad offering affordable packages with domain, deployment, Google indexing and maintenance.',
              'url': 'https://agentechdevelopers.com',
              'breadcrumb': {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agentechdevelopers.com' }
                ]
              }
            })
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
