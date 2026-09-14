import React from 'react';
import { motion } from 'framer-motion';
import { GUARANTEES, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';
import Button from './ui/Button';

export const Guarantees: React.FC = () => {
  return (
    <section id="guarantees" className="py-20 bg-slate-50/70 relative border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Zero Risk Partnership"
          badgeVariant="emerald"
          title="Our 4-Point Ironclad"
          highlightText="Client Assurances"
          subtitle="We eliminate all development risks. Every contract is backed by measurable milestones, fixed quotes, and guaranteed timelines."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {GUARANTEES.map((g, index) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-shadow duration-300 flex flex-col justify-between group shadow-lg shadow-slate-200/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      {g.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-brand-700 font-semibold block mb-1">
                    {g.tagline}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                    {g.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Seal Box */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-brand-50 border border-emerald-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Ready to engineer your digital growth with zero risk?
              </h4>
              <p className="text-xs text-slate-600">
                Book a 15-minute discovery consultation. Guaranteed response within 15 minutes.
              </p>
            </div>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            href={BRAND.whatsappUrl}
            external
            icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
            className="flex-shrink-0"
          >
            Start Risk-Free Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
