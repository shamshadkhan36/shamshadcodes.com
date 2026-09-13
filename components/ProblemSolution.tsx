import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_SOLUTIONS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-slate-50/80 relative border-y border-slate-200/80">
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
              className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-6 lg:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-xl transition-all shadow-md shadow-slate-200/50"
            >
              {/* Problem Part */}
              <div className="pb-5 mb-5 border-b border-slate-100">
                <div className="flex items-start gap-3 mb-2.5">
                  <div className="p-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 mt-0.5 flex-shrink-0">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-600 font-bold">The Common Problem</span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">{item.problem.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-10">
                  {item.problem.description}
                </p>
              </div>

              {/* Solution Part */}
              <div>
                <div className="flex items-start gap-3 mb-2.5">
                  <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold">The ShamshadCodes Solution</span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">{item.solution.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed pl-10">
                  {item.solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Solution Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-md max-w-xl mx-auto">
            <span className="text-sm text-slate-700 font-medium">
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
