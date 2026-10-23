import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ExternalLink, CreditCard, Sparkles, Copy, Check, Lock, Settings } from 'lucide-react';
import { GooglePayIcon, ApplePayIcon, StripeLinkIcon } from './Icons';

export default function StripeModal({ isOpen, onClose, stripeLink, setStripeLink }) {
  const [copied, setCopied] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [tempLink, setTempLink] = useState(stripeLink || 'https://buy.stripe.com/test_website_subscription_25');
  const [simulatedSuccess, setSimulatedSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(stripeLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveCustomLink = (e) => {
    e.preventDefault();
    setStripeLink(tempLink);
    setShowConfig(false);
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSimulatedSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0f111d] border border-white/10 shadow-2xl shadow-indigo-950/60 overflow-hidden">
        {/* Top Header / Modal Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-indigo-900/50 via-purple-900/30 to-zinc-900 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              STRIPE SECURE CHECKOUT
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">
            Subscribe for $25 / month
          </h3>
          <p className="text-sm text-zinc-300 mt-1">
            Custom website design, managed hosting, domain connection, and continuous updates.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {simulatedSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Subscription Confirmed!</h4>
              <p className="text-sm text-zinc-300 max-w-sm mx-auto">
                Your $25/month subscription is activated. Varun will review your intake details and be in touch within 24 hours to begin building your site!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSimulatedSuccess(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product Card Summary */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Website Creation & Maintenance</h4>
                  <p className="text-xs text-zinc-400">Billed monthly • Cancel anytime</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-indigo-400 font-mono">$25.00</div>
                  <div className="text-[11px] text-zinc-500 uppercase font-mono">USD / month</div>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom code & design tailored to your brand</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Managed high-speed CDN hosting & SSL certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ongoing monthly content updates & maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct 1-on-1 contact with Varun (NYC engineer)</span>
                </div>
              </div>

              {/* Supported Payment Methods Badge Bar */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>1-CLICK EXPRESS CHECKOUT</span>
                  <span className="text-emerald-400 font-semibold">Stripe Dynamic Pay</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  <div className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <GooglePayIcon className="h-4 w-auto" />
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <ApplePayIcon className="h-4 w-auto" />
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 flex items-center gap-1.5">
                    <StripeLinkIcon />
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-black/80 border border-white/10 text-[11px] text-zinc-300 font-mono">
                    💳 Cards & Bank
                  </div>
                </div>
              </div>

              {/* Primary Stripe Button */}
              <div className="space-y-3 pt-1">
                <a
                  href={stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Continue to Checkout ($25/mo)</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>

                {/* Secondary: Test Simulator */}
                <button
                  onClick={handleSimulatePayment}
                  disabled={isProcessing}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer border border-white/5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{isProcessing ? 'Processing simulated payment...' : 'Simulate Test Checkout (Demo)'}</span>
                </button>
              </div>

              {/* Stripe Trust & Customer Portal */}
              <div className="pt-2 flex items-center justify-between text-xs text-zinc-400 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>256-bit Stripe Encryption</span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowConfig(!showConfig)}
                  className="flex items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors text-[11px] cursor-pointer"
                >
                  <Settings className="w-3 h-3" />
                  <span>Configure Link</span>
                </button>
              </div>

              {/* Configuration drawer for setting your own Stripe link */}
              {showConfig && (
                <div className="p-4 rounded-xl bg-black/50 border border-indigo-500/30 space-y-3 text-xs">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Set Your Stripe Payment Link</span>
                  </div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    Create a recurring $25/month product on your Stripe Dashboard (<a href="https://dashboard.stripe.com/products" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">stripe.com</a>), generate a Payment Link, and paste it here:
                  </p>
                  <form onSubmit={handleSaveCustomLink} className="flex gap-2">
                    <input
                      type="url"
                      value={tempLink}
                      onChange={(e) => setTempLink(e.target.value)}
                      placeholder="https://buy.stripe.com/..."
                      className="flex-1 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 cursor-pointer text-xs"
                    >
                      Save
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
