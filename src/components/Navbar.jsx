import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

export default function Navbar({ onOpenStripe, onOpenAdKit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a10]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg flex items-center gap-1.5">
                Varun Behl
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-zinc-400 font-mono tracking-wider">Software Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a href="#portfolio" className="hover:text-white transition-colors">
              Work & Sites
            </a>
            <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>$25/mo Websites</span>
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <button
              onClick={onOpenAdKit}
              className="text-indigo-400 hover:text-indigo-300 transition-colors text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 cursor-pointer"
            >
              Ad Kit (Reddit/Socials)
            </button>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenStripe}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0e101a] rounded-[10px] group-hover:bg-transparent flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />
                <span className="font-semibold">Get a Site for $25/mo</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-3 px-4 rounded-2xl glass-panel border border-white/10 space-y-4">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-white font-medium py-1"
            >
              Work & Sites
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-white font-medium py-1"
            >
              $25/mo Website Service
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-white font-medium py-1"
            >
              How It Works & Comparison
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdKit();
              }}
              className="w-full text-left text-indigo-400 hover:text-indigo-300 font-medium py-1 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Promotional Ad Kit (Reddit/Socials)</span>
            </button>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-white font-medium py-1"
            >
              Stack & Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-white font-medium py-1"
            >
              Contact
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStripe();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Site for $25/mo</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
