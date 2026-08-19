import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { Check, ArrowRight, MessageSquare, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Transparent Pricing"
          badgeVariant="emerald"
          title="Clear Packages,"
          highlightText="Zero Hidden Fees"
          subtitle="Transparent starting pricing tailored for business owners who want reliable engineering without unexpected agency bills."
        />

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className={`rounded-3xl p-7 lg:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'bg-slate-900 border-2 border-brand-500 shadow-2xl shadow-brand-500/10 -translate-y-2'
                  : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Most Popular Ribbon */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ starting</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.turnaround}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included in Package:
                  </span>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <Button
                  fullWidth
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="md"
                  href={`#contact?plan=${plan.id}`}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.ctaText}
                </Button>

                <a
                  href={`https://wa.me/919137226861?text=Hi%20Shamshad,%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package%20(${plan.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs font-semibold text-slate-400 hover:text-emerald-400 py-1.5 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Enterprise Card */}
        <div className="mt-10 p-7 sm:p-9 rounded-3xl bg-slate-900/80 border border-slate-800 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 font-semibold mb-2 bg-brand-500/10 px-3 py-1 rounded-full">
              <span>Custom Software & Mobile Apps</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Need something complex, bespoke, or enterprise-grade?
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              For complex CRM systems, SaaS platforms, AI workflows, or cross-platform Flutter mobile applications, I provide an itemized custom proposal with clear milestone breakdown.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>

        {/* Important Disclaimer Note */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            * Note: Domain registration and cloud hosting fees are billed directly by your chosen provider (e.g. Hostinger, AWS, Vercel) so you retain 100% legal ownership. Complete setup and deployment are included at zero extra cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
