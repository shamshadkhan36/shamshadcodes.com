import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BRAND, SERVICES, SOCIAL_LINKS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleIframeLoad = () => {
    if (status === 'sending') {
      setStatus('sent');
      setFormData({
        name: '',
        phone: '',
        service: 'Website Development',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 7000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#090E1A]/80 relative border-t border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Get In Touch"
          badgeVariant="emerald"
          title="Let's Build Something"
          highlightText="Exceptional Together"
          subtitle="Tell me about your project, target timeline, or requirements. I'll get back to you within 2 hours with a clear roadmap."
        />

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Card */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Quick WhatsApp Action Highlight */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Instant WhatsApp Inquiry</h3>
                  <p className="text-xs text-emerald-400 font-medium">Fastest response rate</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Prefer chatting directly? Message me on WhatsApp for quick scoping, pricing estimates, and portfolio links.
              </p>

              <Button
                fullWidth
                variant="whatsapp"
                size="md"
                href={BRAND.whatsappUrl}
                external
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Chat on WhatsApp Now
              </Button>
            </div>

            {/* Direct Information List */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                Direct Channels
              </h4>

              {/* Email */}
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-brand-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 font-medium uppercase font-mono">Email Address</p>
                  <p className="text-sm font-semibold text-white truncate">{BRAND.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-brand-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 font-medium uppercase font-mono">Phone Line</p>
                  <p className="text-sm font-semibold text-white truncate">{BRAND.phoneDisplay}</p>
                </div>
              </a>

              {/* Location & Availability */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium uppercase font-mono">Location & Base</p>
                  <p className="text-sm font-semibold text-white">{BRAND.location}</p>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                <Clock className="w-4 h-4 text-brand-400" />
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
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
              
              {/* Hidden Iframe for silent Google Form POST */}
              <iframe
                name="hidden_contact_iframe"
                id="hidden_contact_iframe"
                style={{ display: 'none' }}
                onLoad={handleIframeLoad}
                title="Google Form Target"
              />

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1.5">Start Your Project Scope</h3>
                <p className="text-sm text-slate-400">
                  Fill in your details below and I will review your requirements and provide a free estimate.
                </p>
              </div>

              {status === 'sent' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Project Inquiry Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your message and will get back to you via WhatsApp / Email within 2 hours.
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="whatsapp"
                      size="sm"
                      href={BRAND.whatsappUrl}
                      external
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Follow Up On WhatsApp
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSdeo-d0J0vsdX7lyurCFkBMmyL1gaHEgIzEaPLfv6Ygwt4H1g/formResponse"
                  method="POST"
                  target="hidden_contact_iframe"
                  onSubmit={() => setStatus('sending')}
                  className="space-y-5"
                >
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-2">
                      Your Full Name <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="entry.845771374"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-2">
                      WhatsApp / Phone Number <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="entry.1190954742"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                    />
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} (Starting {s.startingPrice})
                        </option>
                      ))}
                      <option value="Custom Software / Other">Custom Software / Enterprise System</option>
                    </select>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-2">
                      Project Details & Requirements <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="entry.71527503"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Tell me about your business goals, target timeline, or features... (Service: ${formData.service})`}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm transition-all resize-none"
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
                    {status === 'sending' ? 'Submitting Inquiry...' : 'Submit Project Request'}
                  </Button>

                  <p className="text-[11px] text-slate-500 text-center font-normal">
                    🔒 Your information is confidential. No spam, ever.
                  </p>
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