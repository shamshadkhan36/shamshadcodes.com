import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US, TRUST_METRICS, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';


export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Why Partner With Us"
          badgeVariant="indigo"
          title="Direct Senior Engineering,"
          highlightText="Zero Agency Fluff"
          subtitle="When you partner with ShamshadCodes, you work directly with our Lead Software Architect — ensuring faster execution, unmatched code quality, and fixed pricing."
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
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 text-center hover:border-slate-300 transition-colors shadow-lg shadow-slate-200/50"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1 gradient-text-brand font-mono">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mb-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6 Key Pillars Grid */}
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
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-indigo-400 transition-all flex flex-col justify-between group shadow-lg shadow-slate-200/50 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    {point.stat && (
                      <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                        {point.stat}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-indigo-700 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
