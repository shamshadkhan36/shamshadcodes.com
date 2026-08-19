import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, BRAND } from '../constants';
import { Project, ProjectCategory } from '../types';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Cpu, 
  Bot, 
  Check,
  Laptop
} from 'lucide-react';

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Websites & E-Commerce', value: 'web' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'Custom Software & Automation', value: 'software' },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'software') {
      return p.category === 'software' || p.category === 'automation';
    }
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-[#090E1A]/60 relative border-t border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Verified Portfolio"
          badgeVariant="emerald"
          title="Featured Work &"
          highlightText="Proven Deliverables"
          subtitle="Explore client websites, scalable mobile applications, and custom business management software built with modern engineering standards."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
              >
                <div>
                  {/* Mockup Frame Header */}
                  <div className="relative bg-slate-950 border-b border-slate-800/80 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      {project.category === 'mobile' ? (
                        <Smartphone className="w-3 h-3 text-indigo-400" />
                      ) : (
                        <Laptop className="w-3 h-3 text-brand-400" />
                      )}
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Project Visual Container */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
                    {/* Realistic Visual Card */}
                    <div className="w-full h-full rounded-xl bg-slate-900/90 border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-brand-500/30 transition-colors">
                      {/* Ambient corner light */}
                      <div className="absolute top-0 right-0 w-28 h-28 bg-brand-500/10 rounded-full blur-xl pointer-events-none"></div>

                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-400 font-semibold bg-brand-500/10 px-2 py-0.5 rounded">
                            {project.categoryLabel}
                          </span>
                          <h4 className="text-base font-bold text-white mt-1.5 leading-snug">
                            {project.title}
                          </h4>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300">
                          {project.category === 'web' && <Globe className="w-4 h-4 text-brand-400" />}
                          {project.category === 'mobile' && <Smartphone className="w-4 h-4 text-indigo-400" />}
                          {project.category === 'software' && <Cpu className="w-4 h-4 text-amber-400" />}
                          {project.category === 'automation' && <Bot className="w-4 h-4 text-emerald-400" />}
                        </div>
                      </div>

                      {/* Highlighted Tagline in Visual */}
                      <p className="text-xs text-slate-400 font-medium line-clamp-2">
                        {project.tagline}
                      </p>

                      {/* Tech Chips inside Mockup */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Details Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-brand-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-brand-400/90 mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Features list if available */}
                    {project.features && (
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                        {project.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-400"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/919137226861?text=Hi%20Shamshad,%20I%20saw%20your%20${encodeURIComponent(project.title)}%20project%20and%20want%20something%20similar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 hover:text-brand-300 group/link"
                  >
                    Discuss <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Have an idea for a business website, custom mobile app, or internal automation tool?
          </p>
          <Button
            variant="primary"
            size="md"
            href="#contact"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your Custom Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;