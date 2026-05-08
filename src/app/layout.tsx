import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://agentechdevelopers.com'),
  title: 'AgentechDevelopers — School Websites Built to Rank',
  description:
  'Agentech Developers builds affordable, professional school websites with domain setup, Google Search Console indexing, and a year of maintenance — below market rates.',
  keywords: [
  'school website development Hyderabad',
  'school website design Telangana',
  'affordable school website India',
  'school website development agency',
  'Google Business Profile for schools',
  'school website SEO Hyderabad',
  'custom school website Telangana',
  'Agentech Developers'],

  authors: [{ name: 'Agentech Developers', url: 'https://agentechdevelopers.com' }],
  creator: 'Agentech Developers',
  publisher: 'Agentech Developers',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://agentechdevelopers.com',
    siteName: 'AgentechDevelopers',
    title: 'AgentechDevelopers — School Websites Built to Rank',
    description:
    'Professional school websites at below-market rates. Domain, deployment, Google indexing & 1-year maintenance included.',
    images: [
    {
      url: '/assets/images/app_logo.png',
      width: 1200,
      height: 630,
      alt: 'AgentechDevelopers — School Website Development Agency Hyderabad'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentechDevelopers — School Websites Built to Rank',
    description:
    'Professional school websites at below-market rates. Domain, deployment, Google indexing & 1-year maintenance.',
    images: ['/assets/images/app_logo.png']
  },
  alternates: {
    canonical: 'https://agentechdevelopers.com'
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }]
  }
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Agentech Developers',
              url: 'https://agentechdevelopers.com',
              logo: "https://img.rocket.new/generatedImages/rocket_gen_img_133004601-1773386590840.png",
              description:
              'Agentech Developers builds affordable, professional school websites with domain setup, Google Search Console indexing, and a year of maintenance.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Plot No 426, Sri Sai Nilayam, Gajularamaram',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                postalCode: '500055',
                addressCountry: 'IN'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-91217-26765',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['English', 'Telugu', 'Hindi']
              },
              identifier: {
                '@type': 'PropertyValue',
                name: 'Udyam Registration Number',
                value: 'UDYAM-TS-20-0188729'
              },
              sameAs: [
              'https://agentechdevelopers.com']

            })
          }} />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fagentechde6149back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>);

}