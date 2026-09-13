import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, SKILL_CATEGORIES } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { 
  User, 
  MapPin, 
  Calendar, 
  Mail, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/70 relative border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Studio & Leadership"
          badgeVariant="brand"
          title="About ShamshadCodes &"
          highlightText="Our Engineering Standard"
          subtitle="Combining senior full-stack architectural depth with the agility and responsiveness of a high-performance boutique studio."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Portrait & Credentials */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-300/30 to-indigo-300/30 rounded-3xl blur-xl opacity-70"></div>

              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-3 shadow-2xl shadow-slate-200/80">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/profile.jpg"
                    alt="Shamshad Khan - Technical Director & Founder"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Photo Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-xl">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Shamshad Khan</h4>
                      <p className="text-[11px] text-brand-700 font-mono font-semibold">Lead Software Architect</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span>● Active Studio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Chips below image */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-md shadow-slate-200/50">
                  <div className="text-xl font-extrabold text-slate-900 font-mono">{BRAND.experienceYears} Years</div>
                  <div className="text-[11px] text-slate-500">Industry Experience</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-md shadow-slate-200/50">
                  <div className="text-xl font-extrabold text-slate-900 font-mono">{BRAND.deliveredProjects} Projects</div>
                  <div className="text-[11px] text-slate-500">Successfully Delivered</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Studio Story & Technical Stack */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-700 bg-brand-100/80 border border-brand-200 px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Our Engineering Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                Helping businesses transform ad clicks into <span className="gradient-text-brand">high-performance digital revenue</span>.
              </h3>

              <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  <strong>ShamshadCodes</strong> is an independent software development studio and digital product engineering partner based in Mumbai, India. Over the last 5+ years, we have partnered with business owners, retail brands, creative studios, and startups to engineer scalable web platforms, high-speed mobile apps, and automated business operations.
                </p>
                <p>
                  Unlike bloated agencies where your project gets passed between non-technical account managers and outsourced junior coders, our studio is led directly by <strong>Shamshad Khan</strong> (Lead Software Architect). Every line of code is structured for sub-second performance, strict security standards, and high ad conversion rates.
                </p>
              </div>
            </div>

            {/* Technical Stack Pills Group */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Verified Core Technical Stack
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <h5 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-brand-600" />
                      {cat.title}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Technical Discovery
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={BRAND.whatsappUrl}
                external
                icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
              >
                Direct WhatsApp Partner Chat
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;