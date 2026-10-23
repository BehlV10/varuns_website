import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CreditCard,
  ShieldCheck,
  Zap,
  Globe,
  RefreshCw,
  Palette,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { serviceFeatures, faqItems } from '../data/projects';
import IntakeWizard from './IntakeWizard';
import { GooglePayIcon, ApplePayIcon, StripeLinkIcon, VenmoIcon, PayPalIcon } from './Icons';

export default function StripeServiceSection({ onOpenStripe, stripeLink }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Turnkey Website Partnership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            A Custom Website That Works.
            <span className="block mt-1 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Built & Maintained for $25 / month.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Skip the massive agency invoices and stop losing weekends fighting slow DIY website builders. I will build your custom website, host it on high-speed infrastructure, and handle all your monthly updates for a flat $25/mo.
          </p>
        </div>

        {/* Feature Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {serviceFeatures.map((feat, i) => (
            <div
              key={i}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(feat.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* The Core Pricing & Stripe Checkout Card */}
        <div className="mb-24">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 glass-panel border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/40 bg-gradient-to-b from-indigo-950/40 via-zinc-900/80 to-[#0c0d16]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Offer Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Simple Flat Subscription</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Everything you need to launch and grow online.
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Whether you're a comedian wanting to sell tickets, a restaurant displaying menus, a contractor needing quote inquiries, or a creator showcasing work — I handle the code, domains, mobile styling, and updates.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Custom design & modern code',
                    'High-speed CDN hosting & SSL',
                    'Custom domain setup (.com / .org)',
                    'Monthly text & photo updates',
                    'Stripe payment / booking setup',
                    'Direct communication with Varun',
                    'Cancel anytime with 1 click',
                    'Zero setup or cancellation fees'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Pricing Box & Stripe Button */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10 text-center">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Full Service Plan
                </span>

                <div className="my-4">
                  <span className="text-5xl sm:text-6xl font-black text-white font-mono">$25</span>
                  <span className="text-zinc-400 text-sm font-medium"> / month</span>
                </div>

                <p className="text-xs text-zinc-400 mb-6 max-w-xs">
                  Simple monthly billing • Venmo, PayPal, Apple Pay, Google Pay, or Card. No contracts, cancel anytime.
                </p>

                <button
                  onClick={onOpenStripe}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-extrabold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Get Started ($25 / month)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Flexible Payment Methods Supported */}
                <div className="mt-4 w-full pt-3 pb-1 border-t border-white/10 flex flex-col items-center gap-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                    Pay With Any Method You Prefer
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <div className="px-2 py-0.5 rounded bg-white/10 flex items-center" title="Google Pay">
                      <GooglePayIcon className="h-3.5 w-auto" />
                    </div>
                    <div className="px-2 py-0.5 rounded bg-white/10 flex items-center" title="Apple Pay">
                      <ApplePayIcon className="h-3.5 w-auto" />
                    </div>
                    <div className="px-2 py-0.5 rounded bg-[#008CFF]/20 text-[#008CFF] font-bold text-xs flex items-center gap-1 font-mono" title="Venmo">
                      <span>venmo</span>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-white/10 flex items-center text-xs font-bold text-[#0079C1] font-mono" title="PayPal">
                      <span>PayPal</span>
                    </div>
                    <span className="text-[11px] text-zinc-300 font-mono">Cards & Bank</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Stripe PCI Certified</span>
                  </div>
                  <a
                    href="https://billing.stripe.com/p/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 underline transition-colors"
                  >
                    Client Billing Portal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div id="how-it-works" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why $25 / month Beats Every Alternative
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Compare hiring a traditional agency, wrestling with DIY builders, or partnering with me.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 font-semibold text-zinc-400">Feature</th>
                  <th className="py-4 px-4 font-semibold text-zinc-400">Traditional Agency</th>
                  <th className="py-4 px-4 font-semibold text-zinc-400">Squarespace / Wix</th>
                  <th className="py-4 px-4 font-bold text-indigo-400 bg-indigo-950/40 rounded-t-xl">
                    Varun Behl ($25/mo)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Upfront Cost</td>
                  <td className="py-4 px-4 text-rose-400">$3,000 – $7,000+</td>
                  <td className="py-4 px-4 text-zinc-300">$0 (but weeks of your time)</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-indigo-950/20">$0 upfront</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Monthly Fee</td>
                  <td className="py-4 px-4 text-zinc-400">$100 – $250 / mo maintenance</td>
                  <td className="py-4 px-4 text-zinc-400">$23 – $36 / mo just for software</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-indigo-950/20">
                    $25 / mo all-inclusive
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Who Builds It?</td>
                  <td className="py-4 px-4 text-zinc-400">Junior agency staff</td>
                  <td className="py-4 px-4 text-rose-400">You do (frustrating templates)</td>
                  <td className="py-4 px-4 font-bold text-white bg-indigo-950/20">
                    Varun (experienced software engineer)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Speed & Performance</td>
                  <td className="py-4 px-4 text-zinc-400">Hit or miss WordPress bloat</td>
                  <td className="py-4 px-4 text-rose-400">Slow load times on mobile</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-indigo-950/20">
                    Lightning fast, custom coded
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Updates & Edits</td>
                  <td className="py-4 px-4 text-zinc-400">Billed at $125/hr</td>
                  <td className="py-4 px-4 text-zinc-400">You must log in and tweak yourself</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-indigo-950/20">
                    Included! Just send a message
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Intake Wizard */}
        <div className="mb-24">
          <IntakeWizard onOpenStripe={onOpenStripe} />
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-mono font-medium mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Everything You Need to Know</h3>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="font-semibold text-white text-sm sm:text-base">{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-indigo-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
