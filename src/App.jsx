import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AdShowcase from './components/AdShowcase';
import StripeServiceSection from './components/StripeServiceSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import StripeModal from './components/StripeModal';
import AdKitModal from './components/AdKitModal';

export default function App() {
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);
  const [isAdKitModalOpen, setIsAdKitModalOpen] = useState(false);
  const [stripeLink, setStripeLink] = useState(() => {
    return (
      localStorage.getItem('varun_stripe_link') ||
      import.meta.env.VITE_STRIPE_PAYMENT_LINK ||
      'https://buy.stripe.com/test_website_subscription_25'
    );
  });

  const handleUpdateStripeLink = (newLink) => {
    setStripeLink(newLink);
    localStorage.setItem('varun_stripe_link', newLink);
  };

  return (
    <div className="min-h-screen bg-[#090a10] text-zinc-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenStripe={() => setIsStripeModalOpen(true)}
        onOpenAdKit={() => setIsAdKitModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenStripe={() => setIsStripeModalOpen(true)} />
        <Portfolio />
        <AdShowcase
          onOpenStripe={() => setIsStripeModalOpen(true)}
          onOpenAdKit={() => setIsAdKitModalOpen(true)}
        />
        <StripeServiceSection
          onOpenStripe={() => setIsStripeModalOpen(true)}
          stripeLink={stripeLink}
        />
        <SkillsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenStripe={() => setIsStripeModalOpen(true)}
        onOpenAdKit={() => setIsAdKitModalOpen(true)}
      />

      {/* Stripe Modal Overlay */}
      <StripeModal
        isOpen={isStripeModalOpen}
        onClose={() => setIsStripeModalOpen(false)}
        stripeLink={stripeLink}
        setStripeLink={handleUpdateStripeLink}
      />

      {/* Promotional Ad Kit Modal */}
      <AdKitModal
        isOpen={isAdKitModalOpen}
        onClose={() => setIsAdKitModalOpen(false)}
      />
    </div>
  );
}
