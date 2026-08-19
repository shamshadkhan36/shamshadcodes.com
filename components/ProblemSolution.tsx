import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_SOLUTIONS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-[#0A0F1D]/60 relative border-y border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Problem & Solution"
          badgeVariant="amber"
          title="Stop Losing Clients To"
          highlightText="Outdated Systems"
          subtitle="Most businesses lose revenue due to slow websites, manual processes, and rigid off-the-shelf software. Here is how we fix it."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PROBLEM_SOLUTIONS.map((item, index) => (
            <motion.div
              key={item.problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70 p-6 lg:p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
            >
              {/* Problem Part */}
              <div className="pb-5 mb-5 border-b border-slate-800/80">
                <div className="flex items-start gap-3 mb-2.5">
                  <div className="p-1 rounded-full bg-rose-500/10 text-rose-400 mt-0.5 flex-shrink-0">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold">The Common Problem</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{item.problem.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-8">
                  {item.problem.description}
                </p>
              </div>

              {/* Solution Part */}
              <div>
                <div className="flex items-start gap-3 mb-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">The ShamshadCodes Solution</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{item.solution.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-8">
                  {item.solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Solution Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl mx-auto">
            <span className="text-sm text-slate-300 font-medium">
              Ready to upgrade your business technology?
            </span>
            <Button
              size="sm"
              variant="primary"
              href="#contact"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
