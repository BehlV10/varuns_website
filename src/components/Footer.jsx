import React from 'react';
import { Mail, ShieldCheck, Heart, ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer({ onOpenStripe, onOpenAdKit }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#07080d] py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-white text-lg">Varun Behl</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Software engineer based in New York City crafting production web apps, real-time data pipelines, and custom websites for independent creators and businesses.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/BehlV10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:varunbehl10@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Email Varun"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Featured Sites & Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  $25/mo Website Service
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works & Comparison
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Engineering Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Service & Stripe Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Services & Billing</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={onOpenStripe}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer text-left"
                >
                  Start a Site ($25/mo)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdKit}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Client Ad Kit & Reddit Drafts
                </button>
              </li>
              <li>
                <a
                  href="https://billing.stripe.com/p/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Manage Stripe Subscription
                </a>
              </li>
              <li>
                <a
                  href="mailto:varunbehl10@gmail.com?subject=Website%20Consultation%20Inquiry"
                  className="hover:text-white transition-colors"
                >
                  Free 15-Min Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Varun Behl. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Payments powered by Stripe
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
