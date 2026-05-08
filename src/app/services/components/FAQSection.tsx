'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    question: 'How long does it take to build a school website?',
    answer:
      'Typically 7 to 14 working days from the time we receive all required content (school name, logo, photos, text). Simple websites can be ready in under a week. We keep you updated at every stage.',
  },
  {
    question: 'What information do we need to provide?',
    answer:
      'We need your school name, logo (if available), a brief description of your school, information about your programs and facilities, contact details, and any photos you want on the website. We guide you through exactly what is needed.',
  },
  {
    question: 'Do we need any technical knowledge to maintain the website?',
    answer:
      'No technical knowledge is required. Our 1-year maintenance package means we handle all updates, fixes, and changes on your behalf. Just send us an email or WhatsApp message and we will take care of it.',
  },
  {
    question: 'What happens after the 1-year maintenance period ends?',
    answer:
      'After the first year, we offer affordable annual renewal packages for continued maintenance and support. We will contact you well in advance before the maintenance period ends.',
  },
  {
    question: 'Will our school appear on Google after the website is launched?',
    answer:
      'Yes. We set up Google Search Console and submit your sitemap so Google indexes your pages. We also create your Google Business Profile so your school appears on Google Maps and local search results. Results typically appear within a few days to a few weeks.',
  },
  {
    question: 'Can we choose our own domain name?',
    answer:
      'Absolutely. You choose the domain name you want — yourschoolname.in, .com, .org, or any other extension. We purchase it on your behalf and configure everything. The domain belongs to your school.',
  },
  {
    question: 'Is the website mobile-friendly?',
    answer:
      'Yes, every website we build is fully mobile-responsive — it looks and works perfectly on smartphones, tablets, and desktop computers. Most parents search for schools on their phones, so this is a priority.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Simply fill out our inquiry form, send us a WhatsApp message, or give us a call at +91 91217 26765. We will schedule a free consultation, understand your requirements, and send you a detailed proposal within 24 hours.',
  },
  {
    question: 'Are you a registered business?',
    answer:
      'Yes. Agentech Developers is a Udyam-registered business (UDYAM-TS-20-0188729) based in Hyderabad, Telangana. You can verify our registration on the Udyam portal.',
  },
  {
    question: 'Do you serve schools outside Hyderabad?',
    answer:
      'Yes, we serve schools across Telangana and all of India. Our services are fully remote — we can build, deploy, and maintain your website without needing to visit your school in person.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-secondary/30"
      aria-label="Frequently asked questions"
    >
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="section-label text-accent">FAQ</span>
          <h2 className="text-section-title font-extrabold text-foreground mt-3">
            Questions School Administrators <br />
            <span className="text-gradient-gold">Ask Us Most.</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            Everything you need to know before getting started. Can&apos;t find your answer? Contact us directly.
          </p>
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="gradient-border-card rounded-xl overflow-hidden shadow-card"
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-secondary/40 transition-colors"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-foreground text-base leading-snug pr-4">{faq.question}</span>
                <div
                  className="shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  <Icon name="PlusIcon" size={16} className="text-accent" />
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`faq-answer px-6 ${openIndex === index ? 'open' : ''}`}
                role="region"
                aria-label={`Answer to: ${faq.question}`}
              >
                <div className="pb-6 pt-2">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-2xl bg-primary">
          <p className="text-primary-foreground/80 text-base mb-4">Still have questions? We are happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919121726765"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-bold hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919121726765"
              className="px-6 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground text-sm font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Call +91 91217 26765
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}