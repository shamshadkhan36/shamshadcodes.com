import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { Star, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';
import Button from './ui/Button';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Verified Client Reviews"
          badgeVariant="emerald"
          title="Proven Track Record &"
          highlightText="Client Results"
          subtitle="Read how business owners, agency founders, and product teams scaled their digital revenue with ShamshadCodes."
        />

        {/* Aggregate Review Rating Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto text-center sm:text-left shadow-md shadow-slate-200/50">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-base font-extrabold text-slate-900 font-mono">{BRAND.rating}</span>
          </div>

          <div className="h-4 w-[1px] bg-slate-200 hidden sm:block"></div>

          <div className="text-xs sm:text-sm text-slate-700 font-medium">
            <span className="text-emerald-700 font-bold">100% Verified Reviews</span> from {BRAND.deliveredProjects} projects
          </div>

          <div className="h-4 w-[1px] bg-slate-200 hidden sm:block"></div>

          <div className="text-xs text-slate-500 font-mono">
            Direct Tech Delivery
          </div>
        </div>

        {/* Testimonials 6-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-3xl bg-white border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/70 transition-all relative group shadow-lg shadow-slate-200/50"
            >
              <div>
                {/* Metric Badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {t.metric && (
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-600" />
                      {t.metric}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                  "{t.content}"
                </p>
              </div>

              {/* Client Info Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-100 to-indigo-100 border border-brand-200 text-brand-700 font-bold font-mono text-xs flex items-center justify-center shadow-sm">
                    {t.avatarText || t.clientName.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      {t.clientName}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </h4>
                    <p className="text-xs text-slate-600">{t.role}, <span className="text-slate-800 font-medium">{t.company}</span></p>
                    <p className="text-[10px] text-slate-400 font-mono">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Proof Action */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Want to see how we can drive similar conversion results for your brand?
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Free Project Scope
            </Button>
            <Button
              variant="whatsapp"
              size="md"
              href={BRAND.whatsappUrl}
              external
              icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
