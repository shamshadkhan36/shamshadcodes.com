import React from 'react';
import { motion } from 'framer-motion';
import { COMPARISON_ROWS, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { Check, X, ShieldCheck, ArrowRight, Zap, Sparkles } from 'lucide-react';
import Button from './ui/Button';

export const AgencyComparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Side-By-Side Comparison"
          badgeVariant="indigo"
          title="Why Leading Businesses Choose"
          highlightText="ShamshadCodes Studio"
          subtitle="Compare the engineering standard, cost structure, and delivery speed of our studio against traditional bloated agencies and inexperienced freelancers."
        />

        {/* Comparison Table Container */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              
              {/* Header */}
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-5 px-6 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    Evaluation Factor
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-brand-700 bg-brand-50/80 border-x border-brand-200 w-1/3 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                      <span>ShamshadCodes Studio</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-slate-600 w-1/6 text-center">
                    Traditional Agency
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-slate-600 w-1/6 text-center">
                    Random Freelancer
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, index) => (
                  <tr 
                    key={row.feature}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    {/* Feature Label */}
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {row.feature}
                    </td>

                    {/* ShamshadCodes Column (Highlighted) */}
                    <td className="py-4 px-6 bg-brand-50/30 border-x border-brand-200 text-center">
                      <div className="inline-flex items-center gap-2 text-slate-900 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-left text-xs sm:text-sm font-semibold">{row.shamshadcodes.text}</span>
                      </div>
                    </td>

                    {/* Agency Column */}
                    <td className="py-4 px-6 text-slate-500 text-center">
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span className="text-left">{row.agency.text}</span>
                      </div>
                    </td>

                    {/* Freelancer Column */}
                    <td className="py-4 px-6 text-slate-500 text-center">
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span className="text-left">{row.freelancer.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Card */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-700">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Get premium agency architecture with agile developer speed and zero markups.</span>
            </div>

            <Button
              size="sm"
              variant="primary"
              href="#contact"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="flex-shrink-0"
            >
              Start Direct Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyComparison;
