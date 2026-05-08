'use client';

import React, { useState } from 'react';

export default function GoogleFormEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <div className="gradient-border-card rounded-2xl overflow-hidden shadow-card-hover">
        <div className="px-8 pt-8 pb-4">
          <h2 className="text-xl font-extrabold text-foreground mb-1">Send Us an Inquiry</h2>
          <p className="text-sm text-muted-foreground">
            Fill out the form below and we will get back to you within 24 hours with a detailed proposal.
          </p>
        </div>

        {/* Loading placeholder */}
        {!loaded && (
          <div className="mx-8 mb-4 h-96 rounded-xl bg-secondary/40 animate-pulse flex items-center justify-center">
            <span className="text-sm text-muted-foreground font-medium">Loading form...</span>
          </div>
        )}

        <div className="px-4 pb-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdcLITArfkJZTBKzXF4uKJPa0R_B2vf-g5eOK_wXnj472mv0w/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Agentech Developers School Website Inquiry Form"
            onLoad={() => setLoaded(true)}
            className={`rounded-xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0 h-0'}`}
            style={{ minHeight: loaded ? '900px' : '0' }}
          >
            Loading form…
          </iframe>
        </div>
      </div>
    </div>
  );
}