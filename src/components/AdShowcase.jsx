import React, { useState } from 'react';
import { ExternalLink, Sparkles, Copy, Check, Megaphone, ArrowUpRight, Share2, Layers } from 'lucide-react';

const adShowcaseItems = [
  {
    id: 'takahachi-bakery',
    name: 'Takahachi Bakery',
    domain: 'behlv10.github.io/takahachi-bakery',
    targetAudience: 'Artisanal Bakeries, Cafés & Patisseries',
    liveUrl: 'https://behlv10.github.io/takahachi-bakery/',
    headline: 'Tribeca Japanese bakery with interactive whole cake pre-order builder',
    keyBenefit: 'Live celebration cake calculator, custom dark chocolate message piping, café drink menus.',
    monthlyPitch: 'Want a bakery or café website with online cake ordering & menus? Built & hosted for $25/mo.',
    badge: 'Artisanal Bakery & Café',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    image: './projects/takahachi-bakery.jpg'
  },
  {
    id: 'wos-tailoring',
    name: "Wo's Custom Tailoring",
    domain: 'behlv10.github.io/wos-custom-tailoring',
    targetAudience: 'Luxury Tailors, Ateliers & Bridal Salons',
    liveUrl: 'https://behlv10.github.io/wos-custom-tailoring/',
    headline: 'Upper East Side bespoke suiting atelier with VIP fitting appointment scheduler',
    keyBenefit: 'Interactive alteration price calculator, VIP appointment booking, craftsmanship galleries.',
    monthlyPitch: 'Need a high-end luxury atelier or salon site to book appointments? Maintained for $25/mo.',
    badge: 'Luxury Atelier & Tailor',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    image: './projects/wos-tailoring.jpg'
  },
  {
    id: 'tight-pants',
    name: 'Tight Pants Comedy',
    domain: 'tightpantscomedy.com',
    targetAudience: 'Stand-up Comedians, Shows & Event Producers',
    liveUrl: 'https://tightpantscomedy.com/',
    headline: 'High-converting indie comedy showcase with instant ticket checkout',
    keyBenefit: 'Custom direct-to-fan branding, Eventbrite integration, zero Squarespace headache.',
    monthlyPitch: 'Want a custom comedy or event showcase site like tightpantscomedy.com? Get yours built and maintained for $25/mo.',
    badge: 'Live Production Client',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    image: './projects/tight-pants-live.jpg'
  },
  {
    id: 'black-sheep-bagels',
    name: 'Black Sheep Bagel Cafe',
    domain: 'behlv10.github.io/black-sheep-bagels',
    targetAudience: 'Local Eateries, Delis & Catering Businesses',
    liveUrl: 'https://behlv10.github.io/black-sheep-bagels/',
    headline: 'Harvard Square craft sourdough bagel shop with dynamic sandwich builder',
    keyBenefit: 'Interactive custom sandwich customizer, catering quote calculator, 1-tap ordering links.',
    monthlyPitch: 'Need a menu, sandwich customizer, or catering quote form for your eatery? $25/mo all-inclusive.',
    badge: 'Artisanal Deli & Café',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    image: './projects/black-sheep-bagels.jpg'
  },
  {
    id: 'wicked-boston',
    name: 'Wicked Boston Events',
    domain: 'wickedbostonevents.com',
    targetAudience: 'Nightlife, Music & City Cultural Portals',
    liveUrl: 'http://www.wickedbostonevents.com/',
    headline: 'Real-time Boston concert & nightlife discovery platform',
    keyBenefit: 'Automated venue scrapers, Google Calendar / .ics export, zero-latency static engine.',
    monthlyPitch: 'Need a local city aggregator, directory, or events calendar? Built & hosted for $25/mo.',
    badge: 'Live Custom Domain',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    image: './projects/boston-events.jpg'
  },
  {
    id: 'nyc-events',
    name: 'NYC Events Live Calendar',
    domain: 'behlv10.github.io/nyc_events',
    targetAudience: 'Event Aggregators, Map Portals & Curators',
    liveUrl: 'https://behlv10.github.io/nyc_events/',
    headline: '149+ live venue aggregator with interactive OpenStreetMap dark theme',
    keyBenefit: '2-hour epoch cutoff filter, real-time ticket price comparison, 30-min scraper cron.',
    monthlyPitch: 'Interactive map and real-time community feed apps created and kept up to date for $25/mo.',
    badge: 'Real-Time Map App',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    image: './projects/nyc-skyline.svg'
  }
];

export default function AdShowcase({ onOpenStripe, onOpenAdKit }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyPitch = (item) => {
    const text = `Need a website? Check out ${item.domain} (${item.liveUrl}). I can build and maintain a custom site like this for your project or business for just $25/month via Stripe!`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ad-showcase" className="py-24 relative border-t border-white/5 bg-gradient-to-b from-transparent via-[#0d0e18] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
            <Megaphone className="w-3.5 h-3.5 text-indigo-400" />
            <span>Proven In The Wild</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Real Websites I've Built.
            <span className="block mt-1 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Yours Can Look Just As Good for $25/mo.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            These aren't hypothetical Figma mockups. These are live, production web applications handling real NYC comedy ticket sales, live data scrapers across 149+ venues, and interactive tools.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={onOpenAdKit}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>View Marketing & Ad Copy Templates (Reddit / Socials)</span>
            </button>
          </div>
        </div>

        {/* 4 Featured Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {adShowcaseItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-indigo-500/40 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-semibold text-zinc-400 hover:text-white flex items-center gap-1 group-hover:text-indigo-400 transition-colors"
                  >
                    <span>{item.domain}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Media thumbnail */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-zinc-950 mb-5 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <h3 className="text-xl font-extrabold text-white">{item.name}</h3>
                  </div>
                </div>

                {/* Ad Pitch Body */}
                <h4 className="text-base font-bold text-zinc-100 mb-2 leading-snug">
                  "{item.headline}"
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed">
                  {item.keyBenefit}
                </p>

                {/* The Offer Callout */}
                <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 mb-5">
                  <span className="font-semibold text-white">The $25/mo Offer: </span>
                  {item.monthlyPitch}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopyPitch(item)}
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy ready-to-share pitch snippet"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Pitch Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Ad Pitch</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenStripe}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get One Like This ($25/mo)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
