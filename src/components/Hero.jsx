import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Globe, ExternalLink, Code, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenStripe }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner shadow-indigo-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Accepting 3 New Monthly Website Clients this month</span>
            <span className="text-zinc-500">•</span>
            <span className="font-mono text-indigo-200 font-semibold">$25/mo</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.12]">
            I build fast, high-converting websites.
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              And I'll run yours for $25 a month.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Hey, I'm <strong className="text-white font-semibold">Varun Behl</strong> — a software engineer building real-time web apps and live event platforms in NYC. Outside of my day job, I partner with creators, local businesses, and comedians to build and maintain modern custom websites.
          </p>

          {/* Value Highlights Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero upfront agency fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Hosting & domain setup included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Monthly content updates done for you</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenStripe}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 text-indigo-200 group-hover:scale-110 transition-transform" />
              <span>Start Your Site — $25 / month</span>
              <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-zinc-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <span>Explore My Sites</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-400 uppercase tracking-widest font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>NYC Stand-Up Comedy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>149+ Live Venue Aggregators</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>Secure Stripe Subscriptions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
