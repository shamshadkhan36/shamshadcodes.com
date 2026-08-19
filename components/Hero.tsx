import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, TRUST_METRICS } from '../constants';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { 
  ArrowRight, 
  MessageSquare, 
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
  Activity
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="emerald" dot={true} pulse={true}>
                Available for New Client Projects
              </Badge>
              <span className="hidden sm:inline-block text-xs text-slate-400 font-medium">
                • 1-on-1 Direct Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-sans">
              Build Your Digital Business With{' '}
              <span className="gradient-text-brand">ShamshadCodes</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Websites, mobile apps, custom software, and automation solutions designed to help ambitious businesses capture more leads, automate workflows, and scale online.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Start Your Project
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={BRAND.whatsappUrl}
                external
                icon={<MessageSquare className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#projects"
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>
            </div>

            {/* Quick Micro-Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">20+ Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Fast 1-on-1 Support</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Full Stack Stack</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">From ₹10,000</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Interactive Showcase Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-indigo-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60"></div>
            
            {/* Main Showcase Panel */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/60 p-6 shadow-2xl backdrop-blur-xl">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">shamshadcodes.config</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* Founder Mini Header Card */}
              <div className="flex items-center gap-4 bg-slate-950/60 border border-slate-800/80 p-3.5 rounded-xl mb-5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-brand-500/40 flex-shrink-0">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Shamshad Khan - Founder" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white truncate">Shamshad Khan</h3>
                    <span className="text-[10px] text-brand-400 font-mono bg-brand-500/10 px-2 py-0.5 rounded">Lead Engineer</span>
                  </div>
                  <p className="text-xs text-slate-400 truncate">Software Development Partner</p>
                </div>
              </div>

              {/* Service Highlights Matrix */}
              <div className="space-y-2.5 mb-5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-brand-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Business & E-Commerce Web</p>
                      <p className="text-[11px] text-slate-400">React • TypeScript • Tailwind</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 font-mono">100% Score</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Mobile Apps (Android & iOS)</p>
                      <p className="text-[11px] text-slate-400">Flutter • Firebase • Native Speed</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-400 font-mono">Cross-Platform</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">WhatsApp & Business Automation</p>
                      <p className="text-[11px] text-slate-400">Cloud API • Python • Django</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 font-mono">Auto-Sync</span>
                </div>
              </div>

              {/* Bottom Project Mini Stat Bar */}
              <div className="p-3 bg-gradient-to-r from-brand-950/40 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-xs font-medium text-slate-300">Recent Build: Arc Tech & Kalasaar</span>
                </div>
                <a 
                  href="#projects" 
                  className="text-xs font-semibold text-brand-400 hover:text-brand-300 inline-flex items-center gap-1"
                >
                  Explore <ArrowRight className="w-3 h-3" />
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