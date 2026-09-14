import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle, Clock } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Transparent Sprint Pricing"
          badgeVariant="emerald"
          title="Predictable Packages,"
          highlightText="Zero Hidden Markups"
          subtitle="Fixed-price development packages tailored for businesses and startups that require rapid, high-converting engineering without surprise agency bills."
        />

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }}
              className={`rounded-3xl p-7 lg:p-8 flex flex-col justify-between relative transition-shadow duration-300 ${
                plan.popular
                  ? 'bg-white border-2 border-brand-500 shadow-2xl shadow-brand-500/20'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/50'
              }`}
            >
              {/* Most Popular Ribbon */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  Most Popular For Businesses
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono text-brand-700 font-bold block mb-1">
                    {plan.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ fixed sprint</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-emerald-700 font-bold">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{plan.turnaround}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
                    Included in Deliverables:
                  </span>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <Button
                  fullWidth
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="md"
                  href={`#contact?package=${encodeURIComponent(plan.name)}`}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.ctaText}
                </Button>

                <a
                  href={`https://wa.me/919370262177?text=Hi%20ShamshadCodes,%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package%20(${plan.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs font-semibold text-slate-600 hover:text-emerald-700 py-1.5 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Enterprise Card */}
        <div className="mt-10 p-7 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-700 font-bold mb-2 bg-brand-100/80 border border-brand-200 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Custom Software, Mobile Apps & Enterprise SaaS</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Need custom enterprise architecture or a dedicated engineering sprint?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              For complex CRM systems, SaaS platforms, AI workflows, or cross-platform Flutter mobile apps, we provide an itemized custom proposal with clear milestone breakdown.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="primary"
              size="md"
              href="#estimator"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Use Price Calculator
            </Button>
          </div>
        </div>

        {/* Important Disclaimer Note */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            * Note: Domain registration and cloud hosting fees are paid directly to your chosen provider (e.g. Hostinger, AWS, Vercel) so you retain 100% legal ownership. Complete setup, DNS mapping, and deployment are handled by us for free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
