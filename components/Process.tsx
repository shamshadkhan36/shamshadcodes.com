import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50/70 relative border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Agile Sprint Framework"
          badgeVariant="brand"
          title="From Strategic Scope To Production In"
          highlightText="5 Guaranteed Steps"
          subtitle="A battle-tested engineering methodology designed to launch scalable websites and custom software with zero downtime and strict milestone accountability."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line on Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-500 via-indigo-500 to-emerald-500 -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step Card Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-lg shadow-slate-200/50 hover:shadow-xl">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-xs font-mono font-bold text-brand-700 uppercase tracking-wider">
                          Sprint Phase {step.step}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-medium text-slate-500">
                          {step.tagline}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Deliverables Chips */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {step.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg"
                          >
                            <Check className="w-3 h-3 text-emerald-600" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Step Badge */}
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-500 flex items-center justify-center text-brand-700 font-mono font-extrabold text-lg shadow-xl shadow-brand-500/20">
                      {step.step}
                    </div>
                  </div>

                  {/* Empty Spacer on Opposite Side */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="md"
            href="#contact"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Phase 01: Book Strategic Discovery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
