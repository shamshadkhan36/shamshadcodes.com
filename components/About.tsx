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
  MessageSquare,
  Award
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#090E1A]/60 relative border-t border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Founder & Engineer"
          badgeVariant="brand"
          title="Meet Your"
          highlightText="Development Partner"
          subtitle="Hi, I'm Shamshad Khan. I engineer robust digital products, high-converting websites, and automated systems for businesses."
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
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-70"></div>

              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 p-3 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/images/profile.jpg"
                    alt="Shamshad Khan - Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Photo Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Shamshad Khan</h4>
                      <p className="text-[11px] text-brand-400 font-mono">Full Stack Engineer</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                      <span>● Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Chips below image */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xl font-extrabold text-white font-mono">5+ Years</div>
                  <div className="text-[11px] text-slate-400">Industry Experience</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xl font-extrabold text-white font-mono">20+ Projects</div>
                  <div className="text-[11px] text-slate-400">Successfully Delivered</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Tech Stack */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                Helping businesses transform ideas into <span className="gradient-text-brand">high-performance digital solutions</span>.
              </h3>

              <div className="space-y-4 text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  I am Shamshad Khan, an experienced Full Stack Developer and software solutions partner based in Mumbai, India. Over the last 5+ years, I have worked with entrepreneurs, business owners, and creative agencies to build fast, scalable, and revenue-generating digital products.
                </p>
                <p>
                  Unlike traditional agencies that pass you between salespeople and junior developers, I work with you directly from day one. Every line of code is structured for maintainability, security, and maximum performance.
                </p>
              </div>
            </div>

            {/* Technical Stack Pills Group */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Verified Technical Expertise
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h5 className="text-xs font-bold text-white mb-2.5 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-brand-400" />
                      {cat.title}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60"
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
                Discuss a Project
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={BRAND.whatsappUrl}
                external
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp Shamshad
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;