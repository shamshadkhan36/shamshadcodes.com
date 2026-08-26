import React from 'react';
import { BRAND, SERVICES, NAV_ITEMS, SOCIAL_LINKS } from '../constants';
import { Code2, Heart, ArrowUp, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080F] border-t border-slate-800/80 pt-16 pb-24 md:pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-brand-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                ShamshadCodes
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premium web development, cross-platform mobile apps, and business process automation solutions built by Shamshad Khan.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/40 hover:bg-slate-800 transition-colors"
                    aria-label={link.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a 
                    href="#services" 
                    className="hover:text-brand-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="hover:text-brand-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Base (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <a 
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="truncate">{BRAND.email}</span>
              </a>

              <a 
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{BRAND.phoneDisplay}</span>
              </a>

              <a 
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>{BRAND.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved. Founded by Shamshad Khan.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono">Fast • Scalable • Secure</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;