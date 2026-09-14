import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, TRUST_METRICS } from '../constants';
import Button from './ui/Button';
import Badge from './ui/Badge';
import WhatsAppIcon from './ui/WhatsAppIcon';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Smartphone, 
  Bot, 
  Layers,
  Code2,
  Terminal,
  Activity,
  Star,
  Calculator
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Studio Positioning & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Live Availability & Rating Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <Badge variant="emerald" dot={true} pulse={true}>
                {BRAND.availability}
              </Badge>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-sm">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="text-slate-500 font-mono font-medium">Top Rated Studio</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 font-sans">
              Transform Clicks Into Revenue With{' '}
              <span className="gradient-text-brand">High-Converting Digital Platforms</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              We engineer custom business websites, high-speed mobile apps (iOS & Android), and intelligent WhatsApp automations built to turn ad traffic into paying customers.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                href="#estimator"
                icon={<Calculator className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-lg shadow-brand-500/25"
              >
                Calculate Project Cost
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={BRAND.whatsappUrl}
                external
                icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp (5m Reply)
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#projects"
                className="w-full sm:w-auto"
              >
                View Case Studies
              </Button>
            </div>

            {/* Quick Micro-Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">30+ Deployments</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">3-7 Day Sprints</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">From ₹10,000</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Studio Showcase Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-400/25 via-indigo-400/25 to-emerald-400/25 rounded-3xl blur-2xl opacity-60 animate-pulse-glow"></div>
            
            {/* Floating Micro Badge Top Left */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -left-3 z-20 bg-white/95 backdrop-blur-md border border-brand-200/80 text-brand-700 font-mono text-[11px] font-bold py-1.5 px-3 rounded-xl shadow-lg shadow-brand-500/10 flex items-center gap-1.5 hidden sm:flex"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
              <span>Direct Senior Sprint</span>
            </motion.div>

            {/* Floating Micro Badge Bottom Right */}
            <motion.div
              animate={{ y: [5, -5, 5], rotate: [1, -1, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-3 -right-3 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/80 text-emerald-700 font-mono text-[11px] font-bold py-1.5 px-3 rounded-xl shadow-lg shadow-emerald-500/10 flex items-center gap-1.5 hidden sm:flex"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>100% Fixed Quote</span>
            </motion.div>

            {/* Main Showcase Panel */}
            <div className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-500 ml-2">shamshadcodes.com</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <Activity className="w-3 h-3 animate-pulse text-emerald-600" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* Technical Director Leadership Header */}
              <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl mb-5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-brand-500/30 flex-shrink-0 shadow-sm">
                  <img 
                    src="/images/developer_avatar.jpg" 
                    alt="Shamshad Khan - Technical Director & Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 truncate">Shamshad Khan</h3>
                    <span className="text-[10px] text-brand-700 font-mono bg-brand-50 border border-brand-200 px-2 py-0.5 rounded">Technical Director</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">Lead Software Architect & Founder</p>
                </div>
              </div>

              {/* Service Highlights Matrix */}
              <div className="space-y-2.5 mb-5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-brand-300 hover:bg-white transition-all shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-50 text-brand-600 border border-brand-100">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Business Web & E-Commerce</p>
                      <p className="text-[11px] text-slate-500">React • Next.js • Tailwind CSS</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 font-mono">98+ PageSpeed</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition-all shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Mobile Apps (Android & iOS)</p>
                      <p className="text-[11px] text-slate-500">Flutter • Firebase • Native 60fps</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-700 font-mono">Cross-Platform</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">WhatsApp & Business Automation</p>
                      <p className="text-[11px] text-slate-500">Meta Cloud API • Python • CRM</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 font-mono">Auto-Lead Sync</span>
                </div>
              </div>

              {/* Bottom Project Mini Stat Bar */}
              <div className="p-3 bg-gradient-to-r from-brand-50 via-slate-50 to-indigo-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span className="text-xs font-medium text-slate-700">Case Study: Arc Tech Interior (+180% Leads)</span>
                </div>
                <a 
                  href="#projects" 
                  className="text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  View Work <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;