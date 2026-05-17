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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://agentechdevelopers.vercel.app'),
  title: 'School Website Development Agency Hyderabad | Agentech Developers',
  description:
    'Agentech Developers is the top school website development agency in Hyderabad. We build affordable, custom school websites in Telangana with domain setup, Google Search Console indexing, and free maintenance.',
  keywords: [
    'school website development Hyderabad',
    'school website design Telangana',
    'affordable school website India',
    'school website development agency',
    'best school website makers Hyderabad',
    'school website design packages Telangana',
    'educational website developers Hyderabad',
    'Google Business Profile for schools',
    'school website SEO Hyderabad',
    'custom school website Telangana',
    'Agentech Developers'
  ],
  authors: [{ name: 'Agentech Developers', url: 'https://agentechdevelopers.vercel.app' }],
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
    title: 'School Website Development Agency Hyderabad | Agentech Developers',
    description:
      'Professional school website design packages in Telangana at below-market rates. Domain setup, Google Search Console indexing, and 1-year maintenance included.',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Agentech Developers — School Website Development Agency Hyderabad'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Website Development Agency Hyderabad | Agentech Developers',
    description:
      'Affordable school website development in Hyderabad and Telangana. Full setup containing domain, deployment, Google indexing, and maintenance.',
    images: ['/assets/images/app_logo.png']
  },
  alternates: {
    canonical: 'https://agentechdevelopers.vercel.app'
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              'name': 'Agentech Developers',
              'url': 'https://agentechdevelopers.com',
              'logo': 'https://img.rocket.new/generatedImages/rocket_gen_img_133004601-1773386590840.png',
              'image': 'https://img.rocket.new/generatedImages/rocket_gen_img_133004601-1773386590840.png',
              'description':
                'Agentech Developers is a premier school website development agency in Hyderabad, building affordable and professional school websites with Google Search Console indexing across Telangana.',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Plot No 426, Sri Sai Nilayam, Gajularamaram',
                'addressLocality:': 'Hyderabad',
                'addressRegion': 'Telangana',
                'postalCode': '500055',
                'addressCountry': 'IN'
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': '17.5312',
                'longitude': '78.4194'
              },
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+91-91217-26765',
                'contactType': 'customer service',
                'areaServed': 'IN',
                'availableLanguage': ['English', 'Telugu', 'Hindi']
              },
              'priceRange': '$$',
              'identifier': {
                '@type': 'PropertyValue',
                'name': 'Udyam Registration Number',
                'value': 'UDYAM-TS-20-0188729'
              },
              'sameAs': ['https://agentechdevelopers.vercel.app']
            })
          }}
        />
        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fagentechde6149back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
