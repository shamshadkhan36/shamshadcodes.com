import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US, TRUST_METRICS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Why ShamshadCodes"
          badgeVariant="indigo"
          title="Direct Engineering,"
          highlightText="Zero Agency Fluff"
          subtitle="When you work with ShamshadCodes, you partner directly with the senior engineer building your product — ensuring faster execution and unmatched accountability."
        />

        {/* 4-Stat Proof Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {TRUST_METRICS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1 gradient-text-brand">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mb-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5 Key Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    {point.stat && (
                      <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">
                        {point.stat}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {point.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Quick Partner Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="p-7 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-brand-950/40 border border-indigo-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                100% Quality & Speed Guarantee
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Clean code, zero bloated templates, verified cross-browser compatibility, and free post-launch support on every project.
              </p>
            </div>

            <Button
              variant="primary"
              size="sm"
              href="#contact"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get Free Estimate
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
