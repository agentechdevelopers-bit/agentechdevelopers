import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactInfo() {
  return (
    <aside
      className="space-y-8"
      aria-label="Contact information"
    >
      {/* Quick contact */}
      <div className="gradient-border-card rounded-2xl p-8 shadow-card">
        <h2 className="text-xl font-extrabold text-foreground mb-6">Contact Details</h2>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <Icon name="PhoneIcon" size={18} className="text-accent" />
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Phone / WhatsApp</div>
              <a
                href="tel:+919121726765"
                className="text-base font-bold text-foreground hover:text-accent transition-colors"
              >
                +91 91217 26765
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <Icon name="EnvelopeIcon" size={18} className="text-accent" />
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email</div>
              <a
                href="mailto:agentechdevelopers@gmail.com"
                className="text-base font-bold text-foreground hover:text-accent transition-colors break-all"
              >
                agentechdevelopers@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <Icon name="MapPinIcon" size={18} className="text-accent" />
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Address</div>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                Plot No 426, Sri Sai Nilayam,<br />
                Gajularamaram, Hyderabad,<br />
                Telangana — 500055, India
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Quick action buttons */}
      <div className="space-y-3">
        <a
          href="https://wa.me/919121726765?text=Hello%20Agentech%20Developers%2C%20I%20am%20interested%20in%20a%20school%20website.%20Please%20send%20me%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full px-6 py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] shadow-lg"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Chat on WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-sm">Chat on WhatsApp</span>
        </a>

        <a
          href="tel:+919121726765"
          className="flex items-center gap-4 w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:bg-accent hover:scale-[1.02] shadow-navy"
          aria-label="Call Agentech Developers"
        >
          <Icon name="PhoneIcon" size={20} className="text-primary-foreground" />
          <span className="text-sm">Call +91 91217 26765</span>
        </a>
      </div>

      {/* Udyam badge */}
      <div className="udyam-badge rounded-xl p-5 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-accent text-base" aria-hidden="true">✦</span>
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Udyam Registered Business</span>
        </div>
        <div className="text-sm font-bold text-foreground">UDYAM-TS-20-0188729</div>
        <div className="text-xs text-muted-foreground">Ministry of MSME, Government of India</div>
        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
          <span className="text-xs text-muted-foreground font-semibold">Verified · Hyderabad, Telangana</span>
        </div>
      </div>

      {/* Business hours */}
      <div className="gradient-border-card rounded-xl p-6">
        <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
          <Icon name="ClockIcon" size={16} className="text-accent" />
          Response Times
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>WhatsApp / Phone</span>
            <span className="font-semibold text-foreground">Mon–Sat, 9am–7pm</span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span className="font-semibold text-foreground">Within 24 hours</span>
          </div>
          <div className="flex justify-between">
            <span>Proposal</span>
            <span className="font-semibold text-foreground">Within 24 hours</span>
          </div>
        </div>
      </div>
    </aside>
  );
}