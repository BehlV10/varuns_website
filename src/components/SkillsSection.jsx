import React from 'react';
import { Cpu, Terminal, Layout, Server, Database, Sparkles, Check } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend & UI Performance',
    icon: Layout,
    skills: ['React 18', 'JavaScript / TypeScript', 'Tailwind CSS v4', 'Vite', 'Responsive UX / Mobile-First', 'Semantic HTML5']
  },
  {
    title: 'Backend, APIs & Scraping',
    icon: Server,
    skills: ['Python 3', 'REST API Architecture', 'Automated Web Scrapers (Asyncio / BS4)', 'Stripe API & Checkout', 'Eventbrite Integrations']
  },
  {
    title: 'DevOps & Tooling',
    icon: Terminal,
    skills: ['GitHub Actions CI/CD', 'Git Workflows', 'Static Site Generators', 'OpenStreetMap / Leaflet GIS', 'Cloudflare DNS & SSL']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Depth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built With Modern, High-Velocity Tech
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            No sluggish page builders, bloated themes, or fragile plugins. Every site is built using the same modern tech stack used by industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.skills.map((s, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
