import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, ArrowRight, ArrowLeft, Mail, MessageSquare } from 'lucide-react';

const websiteTypes = [
  { id: 'comedy', name: 'Comedy Show / Artist', desc: 'Ticket links, roster, video clips' },
  { id: 'business', name: 'Local Business / Service', desc: 'Services, quote requests, hours, maps' },
  { id: 'portfolio', name: 'Portfolio / Creator', desc: 'Visual work showcase, bio, resume' },
  { id: 'restaurant', name: 'Restaurant / Bar / Cafe', desc: 'Menu, reservations, location, hours' },
  { id: 'event', name: 'Event / Community Aggregator', desc: 'Schedules, calendar, RSVP, guestlist' },
  { id: 'other', name: 'Custom Concept', desc: 'Unique idea or custom web application' }
];

const featureOptions = [
  'Custom Domain (.com / .org)',
  'Stripe Payments / Checkouts',
  'Event / Ticket Links (Eventbrite/DICE)',
  'Interactive Photo / Video Gallery',
  'Contact / Lead Capture Form',
  'Google Calendar / .ics Sync',
  'Interactive Maps (OpenStreetMap/Google)',
  'SEO & Google Search Indexing'
];

export default function IntakeWizard({ onOpenStripe }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('comedy');
  const [selectedFeatures, setSelectedFeatures] = useState([
    'Custom Domain (.com / .org)',
    'Event / Ticket Links (Eventbrite/DICE)',
    'Contact / Lead Capture Form'
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: '',
    budget: '$25/month subscription'
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoSubject = encodeURIComponent(`Website Project Inquiry - ${selectedType} ($25/mo)`);
  const mailtoBody = encodeURIComponent(
    `Hi Varun,\n\nI'm interested in the $25/month website service!\n\nWebsite Type: ${selectedType}\nFeatures Needed:\n- ${selectedFeatures.join(
      '\n- '
    )}\n\nMy Details:\nName: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nProject Notes & Vision:\n${
      formData.notes || 'None provided'
    }\n\nLooking forward to getting this started!`
  );

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/20 shadow-2xl shadow-indigo-950/30">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
            Interactive Project Builder
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Build Your $25/mo Site Brief
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step === num
                  ? 'bg-indigo-600 text-white ring-2 ring-indigo-400/50'
                  : step > num
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-zinc-800 text-zinc-500'
              }`}
            >
              {step > num ? '✓' : num}
            </div>
          ))}
        </div>
      </div>

      {!submitted ? (
        <div>
          {/* Step 1: Website Type */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-zinc-300 font-medium">
                Step 1 of 3: What type of website do you need built?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {websiteTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedType(t.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedType === t.id
                        ? 'bg-indigo-950/50 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-zinc-900/60 border-white/10 text-zinc-300 hover:border-white/20 hover:bg-zinc-900'
                    }`}
                  >
                    <div className="font-bold text-sm text-white flex items-center justify-between">
                      <span>{t.name}</span>
                      {selectedType === t.id && (
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      )}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">{t.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Next: Select Features</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Features */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-sm text-zinc-300 font-medium">
                Step 2 of 3: Which features do you need included? (Select all that apply)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {featureOptions.map((feat) => {
                  const active = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? 'bg-indigo-950/60 border-indigo-500/80 text-white'
                          : 'bg-zinc-900/40 border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-900'
                      }`}
                    >
                      <span>{feat}</span>
                      <span
                        className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] border ${
                          active
                            ? 'bg-indigo-600 border-indigo-400 text-white'
                            : 'border-zinc-700 bg-zinc-800'
                        }`}
                      >
                        {active ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white text-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Next: Details & Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact & Vision */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-zinc-300 font-medium">
                Step 3 of 3: Tell me a bit about yourself and your website ideas
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Tell me about what you want on the site (or link your current Instagram / site):
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. I need a site for my comedy open mic in Brooklyn with show dates, photos, and links for performers to sign up..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ></textarea>
              </div>

              {/* Pricing confirmation badge */}
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-indigo-300">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Website Build, Hosting & Updates:</span>
                </div>
                <span className="font-bold text-white font-mono bg-indigo-600/30 px-2.5 py-1 rounded-lg border border-indigo-500/30">
                  $25 / month
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white text-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Brief & Proceed</span>
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        /* Submitted Confirmation State */
        <div className="space-y-6 text-center py-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-bold text-white">Project Brief Ready!</h4>
            <p className="text-zinc-300 text-sm max-w-md mx-auto">
              Thanks {formData.name || 'friend'}! Your project brief has been compiled. You can send it directly to Varun and start your $25/mo Stripe subscription below.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-left text-xs space-y-2 font-mono text-zinc-300 max-w-md mx-auto">
            <p><strong className="text-indigo-400">Type:</strong> {selectedType}</p>
            <p><strong className="text-indigo-400">Selected Features:</strong> {selectedFeatures.join(', ')}</p>
            <p><strong className="text-indigo-400">Contact:</strong> {formData.name} ({formData.email})</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`mailto:varunbehl10@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all border border-white/10"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Email Brief to Varun</span>
            </a>

            <button
              onClick={onOpenStripe}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/25 cursor-pointer hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Subscribe & Launch Site ($25/mo)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
