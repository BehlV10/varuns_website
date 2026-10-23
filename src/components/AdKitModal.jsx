import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Share2, Megaphone, Sparkles, MessageSquare } from 'lucide-react';

const adTemplates = [
  {
    platform: 'Reddit (r/forhire & r/freelance)',
    title: '[For Hire] NYC Software Engineer — I will build and maintain your custom website for $25/month via Stripe (No $3k agency fees)',
    badge: 'Reddit Post Draft',
    description: 'High-converting text post with live portfolio proof links and clear pricing.',
    body: `Hey everyone! I'm Varun, an NYC-based software engineer. Outside of my day job, I partner with independent comedians, creators, event organizers, and local businesses to design, build, host, and maintain custom websites for a flat **$25 / month** via Stripe.

### 🌐 Live Websites I've Built (Check Them Out):
1. **[tightpantscomedy.com](https://tightpantscomedy.com/)** — NYC indie stand-up comedy showcase at St. Marks Comedy Club with live Eventbrite checkouts.
2. **[Takahachi Bakery](https://behlv10.github.io/takahachi-bakery/)** — Tribeca NYC Japanese artisanal bakery with interactive cake pre-order builder.
3. **[Wo's Custom Tailoring](https://behlv10.github.io/wos-custom-tailoring/)** — Upper East Side bespoke tailoring salon with VIP appointment scheduler.
4. **[Black Sheep Bagel Cafe](https://behlv10.github.io/black-sheep-bagels/)** — Harvard Square craft sourdough bagel shop with dynamic sandwich customizer.
5. **[Japonaise Bakery & Cafe](https://behlv10.github.io/japonaise-bakery/)** — Historic French-Japanese bakery in Brookline, MA.
6. **[NYC Events Aggregator](https://behlv10.github.io/nyc_events/)** — 149+ venue real-time event aggregator with interactive OpenStreetMap dark map.
7. **[Wicked Boston Events](http://www.wickedbostonevents.com/)** — Curated live Boston concert and nightlife discovery calendar.

Portfolio: https://behlv10.github.io/varuns_website/

### 💡 What's Included in the $25/month Plan:
- **100% Custom Design & Fast Code** (React / Tailwind / Static — no sluggish WordPress or clunky page builders)
- **High-Speed CDN Hosting & Free SSL** (HTTPS)
- **Domain Connection** (hooked up directly to your .com / .org)
- **Ongoing Maintenance & Content Updates** (need text, photo, event, or menu changes? Just send a message and it's updated in 24–48 hours)
- **Stripe Payments / Ticket Checkout Setup** (if you sell services, products, or tickets)
- **Zero Lock-in Contracts** — Cancel anytime with 1 click via your Stripe Customer Portal.

If you or someone you know needs a sharp, fast website without paying an agency $3,000 upfront, check out my portfolio or shoot me a DM!`,
    redditSubmitUrl: `https://www.reddit.com/r/forhire/submit?title=${encodeURIComponent(
      '[For Hire] NYC Software Engineer — I will build and maintain your custom website for $25/month via Stripe'
    )}`
  },
  {
    platform: 'Twitter / X & LinkedIn Announcement',
    title: 'Website Design & Managed Hosting Partnership for $25/mo',
    badge: 'Social Media Ad Copy',
    description: 'Punchy social media post optimized for Twitter/X, Threads, or LinkedIn.',
    body: `Most small businesses and creators don't need a $4,000 agency website, and don't have 40 hours to fight Squarespace templates.

I'm taking on 3 new clients to build & maintain custom websites for $25/month:

✅ Custom code (fast, mobile-first, Google SEO)
✅ Domain setup & CDN hosting included
✅ Monthly updates done for you (text, photos, dates)
✅ Stripe recurring subscription (cancel anytime)

Live sites I've built:
• tightpantscomedy.com (NYC comedy showcase)
• behlv10.github.io/takahachi-bakery (Tribeca bakery)
• behlv10.github.io/wos-custom-tailoring (Upper East Side tailor)
• behlv10.github.io/black-sheep-bagels (Harvard Square bagels)
• wickedbostonevents.com (Boston live event feed)
• behlv10.github.io/nyc_events (149+ venue aggregator)

DM me or reply if you want a custom site launched this month! 🚀`,
    twitterShareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `Most small businesses and creators don't need a $4,000 agency website. I build & maintain custom websites for $25/month with ongoing updates included!\n\nRecent sites I've built:\n• tightpantscomedy.com\n• behlv10.github.io/takahachi-bakery\n• behlv10.github.io/wos-custom-tailoring\n• wickedbostonevents.com\n\nDM me to get yours live!`
    )}`
  },
  {
    platform: 'Direct Outreach / Cold Email Pitch',
    title: 'Personalized Pitch for Local Businesses, Bakeries & Salons',
    badge: 'Email / DM Template',
    description: 'Friendly, zero-pressure pitch to send to local businesses, eateries, performers, or organizers.',
    body: `Subject: Quick idea for your website (plus examples: takahachi-bakery / tightpantscomedy.com)

Hi [Name],

I came across [business name] and loved what you're doing with [specific detail].

I'm an NYC software engineer and web developer. I noticed your website could use a refresh / you don't have a modern mobile-optimized site set up yet, and wanted to reach out with a straightforward offer:

Outside of my day job, I build and maintain custom websites for local businesses, artisanal bakeries, tailors, and creators for a flat $25/month via Stripe. No upfront thousands in agency fees, no DIY builder headaches. I handle the design, mobile optimization, domain setup, online menus/booking, and all your monthly updates.

Here are a few live sites I've built recently:
• behlv10.github.io/takahachi-bakery — Tribeca Japanese bakery with interactive celebration cake pre-orders
• behlv10.github.io/wos-custom-tailoring — Upper East Side bespoke master tailoring atelier
• tightpantscomedy.com — East Village comedy club showcase with live ticket checkouts
• behlv10.github.io/black-sheep-bagels — Harvard Square craft sourdough bagel shop
• wickedbostonevents.com — Curated Boston events and nightlife platform
• behlv10.github.io/nyc_events — Real-time 5-borough calendar with 149+ venue feeds

If you'd like to get a clean, high-speed website live without paying an agency $3,000 upfront, I'd be happy to put together a free quick preview!

Best,
Varun Behl
Software Engineer | NYC
varunbehl10@gmail.com`
  }
];

export default function AdKitModal({ isOpen, onClose }) {
  const [copiedIdx, setCopiedIdx] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0f111d] border border-white/10 shadow-2xl shadow-indigo-950/60 overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-950 via-purple-950 to-zinc-900 border-b border-white/10 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                PROMOTIONAL AD KIT
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Client Acquisition Ad Campaigns
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Ready-to-post ad copy and outreach templates featuring your 4 live websites.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {adTemplates.map((ad, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {ad.platform}
                </span>
                <span className="text-xs text-zinc-400">{ad.description}</span>
              </div>

              <h4 className="text-sm font-bold text-white">{ad.title}</h4>

              {/* Pre-formatted ad copy text box */}
              <div className="relative p-4 rounded-xl bg-black/60 border border-white/5 text-xs text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto select-all">
                {ad.body}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  onClick={() => handleCopy(ad.body, idx)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-indigo-600/20"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Ad Text</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  {ad.redditSubmitUrl && (
                    <a
                      href={ad.redditSubmitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-[#ff4500]/20 hover:bg-[#ff4500]/30 text-[#ff4500] border border-[#ff4500]/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>1-Click Post on Reddit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {ad.twitterShareUrl && (
                    <a
                      href={ad.twitterShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 border border-sky-500/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>1-Click Post on X</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
