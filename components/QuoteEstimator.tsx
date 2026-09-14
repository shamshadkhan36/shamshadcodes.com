import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ESTIMATOR_SERVICES, ESTIMATOR_ADDONS, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Zap,
  HelpCircle
} from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';

export const QuoteEstimator: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('business-web');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<'normal' | 'express'>('normal');

  const selectedService = useMemo(() => {
    return ESTIMATOR_SERVICES.find((s) => s.id === selectedServiceId) || ESTIMATOR_SERVICES[0];
  }, [selectedServiceId]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculation = useMemo(() => {
    const addonsTotal = selectedAddonIds.reduce((sum, id) => {
      const addon = ESTIMATOR_ADDONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const addonsDays = selectedAddonIds.reduce((sum, id) => {
      const addon = ESTIMATOR_ADDONS.find((a) => a.id === id);
      return sum + (addon ? addon.extraDays : 0);
    }, 0);

    let totalPrice = selectedService.basePrice + addonsTotal;
    let totalDays = selectedService.baseDays + addonsDays;

    if (urgency === 'express') {
      totalPrice = Math.round(totalPrice * 1.25);
      totalDays = Math.max(2, Math.round(totalDays * 0.6));
    }

    return {
      price: totalPrice,
      days: totalDays,
      formattedPrice: `₹${totalPrice.toLocaleString('en-IN')}`,
      formattedDays: `${totalDays} - ${totalDays + 2} Business Days`
    };
  }, [selectedService, selectedAddonIds, urgency]);

  const selectedAddonsTitles = useMemo(() => {
    return selectedAddonIds
      .map((id) => ESTIMATOR_ADDONS.find((a) => a.id === id)?.title.split('(')[0].trim())
      .filter(Boolean)
      .join(', ');
  }, [selectedAddonIds]);

  const whatsappMessage = encodeURIComponent(
    `Hi ShamshadCodes, I calculated a project estimate on your website:\n` +
    `• Service: ${selectedService.title}\n` +
    `• Add-ons: ${selectedAddonsTitles || 'None'}\n` +
    `• Pace: ${urgency === 'express' ? 'Express Delivery' : 'Standard Sprint'}\n` +
    `• Ballpark Estimate: ${calculation.formattedPrice} (~${calculation.formattedDays})\n\n` +
    `I would like to discuss this and get started!`
  );

  const directWhatsAppUrl = `https://wa.me/919370262177?text=${whatsappMessage}`;

  return (
    <section id="estimator" className="py-24 bg-white relative border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <SectionHeading
          badge="Instant Price & Timeline Estimator"
          badgeVariant="emerald"
          title="Interactive Project"
          highlightText="Cost Calculator"
          subtitle="Configure your desired website, mobile app, or automation system below to get an instant real-time cost and turnaround estimate."
        />

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Scope & Addon Selectors (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Primary Service */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-700 font-mono text-xs font-bold flex items-center justify-center border border-brand-200">
                    1
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Select Your Core Project Type
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">Choose One</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {ESTIMATOR_SERVICES.map((serv) => {
                  const Icon = serv.icon;
                  const isSelected = selectedServiceId === serv.id;
                  return (
                    <motion.button
                      key={serv.id}
                      type="button"
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedServiceId(serv.id)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-brand-50/70 border-brand-500 shadow-md shadow-brand-500/10 ring-2 ring-brand-500/30'
                          : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      {serv.popular && (
                        <span className="absolute top-3 right-3 text-[10px] font-bold text-brand-700 font-mono bg-brand-100/80 px-2 py-0.5 rounded-full border border-brand-200">
                          Popular
                        </span>
                      )}
                      <div>
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                          isSelected ? 'bg-brand-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">
                          {serv.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {serv.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/80 text-xs">
                        <span className="text-slate-600 font-mono font-medium">Base: ₹{serv.basePrice.toLocaleString('en-IN')}</span>
                        <span className="text-emerald-700 font-mono font-bold">~{serv.baseDays}d sprint</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Add-ons & Capabilities */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-700 font-mono text-xs font-bold flex items-center justify-center border border-brand-200">
                    2
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Select Add-on Features & Integrations
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">Optional Add-ons</span>
              </div>

              <div className="space-y-2.5">
                {ESTIMATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <motion.div
                      key={addon.id}
                      whileHover={{ scale: 1.01, x: 2 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl border transition-colors duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-brand-50/50 border-brand-500 shadow-sm'
                          : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                          isChecked ? 'bg-brand-600 text-white' : 'border border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                            {addon.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 truncate">
                            {addon.description}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 flex-shrink-0 font-mono text-xs font-bold text-slate-800"
                      >
                        <span>+₹{addon.price.toLocaleString('en-IN')}</span>
                        {addon.extraDays > 0 && (
                          <span className="text-[10px] text-slate-500 hidden sm:inline">
                            (+{addon.extraDays}d)
                          </span>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Speed Preference */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-amber-500" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Delivery Speed & Timeline</h4>
                  <p className="text-[11px] text-slate-500">Need it urgently? Select Express Sprint.</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                <button
                  type="button"
                  onClick={() => setUrgency('normal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    urgency === 'normal'
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Standard Sprint
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('express')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                    urgency === 'express'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Zap className="w-3 h-3 text-amber-600" />
                  Express (+25%)
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              layout
              className="p-7 rounded-3xl bg-white border-2 border-brand-500 shadow-2xl shadow-brand-500/15 relative overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-100/50 rounded-full blur-2xl pointer-events-none"></div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 font-bold bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">
                    Estimated Project Quote
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                    Scope Summary
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Price & Turnaround Summary */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-mono text-slate-500 block mb-1">
                    Total Estimated Investment:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight gradient-text-brand">
                      {calculation.formattedPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      (All-Inclusive Scope)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">Estimated Turnaround:</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-700">
                    {calculation.formattedDays}
                  </span>
                </div>
              </div>

              {/* Selected Breakdown List */}
              <div className="space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Core Platform:</span>
                  <span className="font-bold text-slate-900 truncate max-w-[200px]">
                    {selectedService.title}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Active Add-ons:</span>
                  <span className="font-mono font-bold text-brand-700">
                    {selectedAddonIds.length} Selected
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Warranty Support:</span>
                  <span className="font-mono font-bold text-emerald-700">
                    60 Days Free Included
                  </span>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="space-y-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Claim Quote on WhatsApp</span>
                </a>

                <Button
                  fullWidth
                  variant="primary"
                  size="md"
                  href={`#contact?service=${encodeURIComponent(selectedService.title)}&estimate=${encodeURIComponent(calculation.formattedPrice)}`}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Lock In Quote & Send Form
                </Button>
              </div>

              {/* Risk Reversals underneath */}
              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Zero Hidden Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>100% Code Ownership</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteEstimator;
