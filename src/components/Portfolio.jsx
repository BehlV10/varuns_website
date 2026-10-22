import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'client') return project.categoryType === 'client';
    if (filter === 'app') return project.categoryType === 'app';
    return true;
  });

  return (
    <section id="portfolio" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Proven In Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured Websites & Live Apps
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Real products built for NYC comedy producers, live music fans, and community organizers. Fast, responsive, and built to convert.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: '⭐ Featured' },
              { id: 'client', label: 'Production Sites' },
              { id: 'app', label: 'Live Data Platforms' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col group border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Media Preview Container */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-zinc-950 flex items-center justify-center border-b border-white/10">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-950/80 via-zinc-900 to-purple-950/80 flex items-center justify-center p-8">
                    <span className="text-5xl font-mono font-black text-indigo-400/40">
                      {project.title.substring(0, 2)}
                    </span>
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-black/75 backdrop-blur-md text-white border border-white/15">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400/90 text-black flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Quick Link Overlay */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-black/50 transition-all hover:scale-105"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-indigo-400 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights / Impact Points */}
                  {project.impact && (
                    <div className="space-y-2 mb-6 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                      <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                        Key Features & Architecture:
                      </p>
                      {project.impact.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Explore Live Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-500 font-mono">Internal / Open Source</span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
