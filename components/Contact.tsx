import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BRAND, SERVICES, SOCIAL_LINKS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import Badge from './ui/Badge';
import WhatsAppIcon from './ui/WhatsAppIcon';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Lock 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'High-Converting Business Websites',
    budget: '₹10,000 - ₹20,000 (Starter / Pro)',
    timeline: 'Standard Sprint (1 - 2 Weeks)',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    // Check hash/search query params to prefill from pricing/estimator
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const queryStr = hash.split('?')[1];
      const params = new URLSearchParams(queryStr);
      const pkg = params.get('package');
      const srv = params.get('service');
      const est = params.get('estimate');

      if (srv) {
        setFormData((prev) => ({
          ...prev,
          service: srv,
          message: est ? `I calculated an estimate of ${est} for ${srv}. Let's discuss details.` : prev.message
        }));
      } else if (pkg) {
        setFormData((prev) => ({
          ...prev,
          message: `I am interested in starting the "${pkg}" package.`
        }));
      }
    }
  }, []);

  const handleIframeLoad = () => {
    if (status === 'sending') {
      setStatus('sent');
      setFormData({
        name: '',
        phone: '',
        service: 'High-Converting Business Websites',
        budget: '₹10,000 - ₹20,000 (Starter / Pro)',
        timeline: 'Standard Sprint (1 - 2 Weeks)',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 relative border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Start Your Project"
          badgeVariant="emerald"
          title="Schedule A Strategic"
          highlightText="Technical Discovery"
          subtitle="Tell us about your project goals, target timeline, and feature requirements. We'll review and respond with a clear blueprint within 15 minutes."
        />

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Studio Channels & WhatsApp Quick Connect */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Quick WhatsApp Action Highlight */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-slate-50 border border-emerald-200 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200 shadow-sm">
                  <WhatsAppIcon className="w-6 h-6 fill-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Instant WhatsApp Inquiry</h3>
                  <p className="text-xs text-emerald-700 font-semibold">Average reply time: Under 5 mins</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Prefer chatting directly? Message our Lead Architect on WhatsApp for immediate project scoping, ballpark estimates, and live demos.
              </p>

              <Button
                fullWidth
                variant="whatsapp"
                size="md"
                href={BRAND.whatsappUrl}
                external
                icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
              >
                Chat on WhatsApp Now
              </Button>
            </div>

            {/* Direct Information List */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 space-y-5 shadow-lg shadow-slate-200/50">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
                Studio Channels & Office
              </h4>

              {/* Email */}
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-brand-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 font-medium uppercase font-mono">Official Email</p>
                  <p className="text-sm font-semibold text-slate-900 truncate">{BRAND.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-indigo-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 font-medium uppercase font-mono">Direct Studio Line</p>
                  <p className="text-sm font-semibold text-slate-900 truncate">{BRAND.phoneDisplay}</p>
                </div>
              </a>

              {/* Location & Availability */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase font-mono">Headquarters</p>
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">{BRAND.location}</p>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-700">
                <Zap className="w-4 h-4 text-brand-600" />
                <span>{BRAND.responseGuarantee}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact & Project Request Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/80 relative">
              
              {/* Hidden Iframe for silent Google Form POST */}
              <iframe
                name="hidden_contact_iframe"
                id="hidden_contact_iframe"
                style={{ display: 'none' }}
                onLoad={handleIframeLoad}
                title="Google Form Target"
              />

              <div className="mb-6">
                <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full mb-2">
                  <Sparkles className="w-3 h-3 text-brand-600" />
                  <span>Free Scoping & Architecture Blueprint</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1.5">Request Project Estimate</h3>
                <p className="text-sm text-slate-600">
                  Fill in your details below and our Lead Software Architect will review your scope and provide a fixed estimate.
                </p>
              </div>

              {status === 'sent' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Project Inquiry Received!</h4>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to ShamshadCodes Studio. Our Lead Architect is reviewing your requirements and will reach out via WhatsApp / Email within 15 minutes.
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="whatsapp"
                      size="sm"
                      href={BRAND.whatsappUrl}
                      external
                      icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
                    >
                      Follow Up Instantly On WhatsApp
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdeo-d0J0vsdX7lyurCFkBMmyL1gaHEgIzEaPLfv6Ygwt4H1g/formResponse"
                  method="POST"
                  target="hidden_contact_iframe"
                  onSubmit={() => setStatus('sending')}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Name & Phone Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                        Your Full Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="entry.845771374"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 text-sm transition-all shadow-sm"
                      />
                    </div>

                    {/* Phone / WhatsApp Input */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                        WhatsApp / Phone Number <span className="text-brand-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="entry.1190954742"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 text-sm transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                      Practice Area / Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 text-sm transition-all shadow-sm"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} (Starting {s.startingPrice})
                        </option>
                      ))}
                      <option value="Custom Enterprise Software / Portal">Custom Enterprise Software / Internal Portal</option>
                      <option value="Dedicated Sprint Team">Dedicated Full-Stack Sprint Team</option>
                    </select>
                  </div>

                  {/* Budget & Timeline Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                        Target Budget Bracket
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm transition-all shadow-sm"
                      >
                        <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000 (Starter / Pro Web)</option>
                        <option value="₹20,000 - ₹40,000">₹20,000 - ₹40,000 (E-com / App)</option>
                        <option value="₹40,000 - ₹80,000+">₹40,000 - ₹80,000+ (Custom Portal)</option>
                        <option value="Enterprise / Custom Quote">Enterprise / Custom Proposal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm transition-all shadow-sm"
                      >
                        <option value="Urgent Sprint (< 5 Days)">Urgent Sprint (&lt; 5 Days)</option>
                        <option value="Standard Sprint (1 - 2 Weeks)">Standard Sprint (1 - 2 Weeks)</option>
                        <option value="Flexible / 2 - 4 Weeks">Flexible (2 - 4 Weeks)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                      Project Requirements & Features <span className="text-brand-600">*</span>
                    </label>
                    <textarea
                      rows={3}
                      name="entry.71527503"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your business goals, required features, or reference links..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 text-sm transition-all resize-none shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="primary"
                    size="lg"
                    disabled={status === 'sending'}
                    icon={status === 'sending' ? undefined : <Send className="w-4 h-4" />}
                  >
                    {status === 'sending' ? 'Transmitting Scope...' : 'Submit Scope For Free Blueprint'}
                  </Button>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 font-normal pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-slate-400" />
                      100% Confidential & Secure
                    </span>
                    <span>•</span>
                    <span>No spam, guaranteed</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;