import React from 'react';
import { BRAND } from '../constants';
import { Calculator, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './ui/WhatsAppIcon';

export const StickyCTA: React.FC = () => {
  return (
    <>
      {/* 1. Mobile Bottom Sticky Bar (< md screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Direct Call Button */}
          <a
            href={`tel:${BRAND.phone}`}
            className="flex items-center justify-center gap-1.5 bg-brand-600 active:bg-brand-700 text-white text-xs font-bold py-3 px-2 rounded-xl shadow-lg shadow-brand-600/25 transition-transform active:scale-[0.98]"
          >
            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold py-3 px-2 rounded-xl shadow-lg shadow-emerald-600/25 transition-transform active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0 fill-current" />
            <span className="truncate">WhatsApp</span>
          </a>

          {/* Calculate Price Button */}
          <a
            href="#estimator"
            className="flex items-center justify-center gap-1.5 bg-slate-900 active:bg-slate-800 text-white text-xs font-bold py-3 px-2 rounded-xl shadow-lg shadow-slate-900/20 transition-transform active:scale-[0.98]"
          >
            <Calculator className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">Estimate</span>
          </a>
        </div>
      </div>

      {/* 2. Desktop Floating Action Buttons (>= md screens) */}
      <div className="hidden md:flex flex-col gap-3 fixed bottom-6 right-6 z-40">
        {/* Direct Call Floating Action Button */}
        <motion.a
          href={`tel:${BRAND.phone}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white flex items-center justify-center shadow-2xl shadow-brand-600/35 border border-brand-400/30 transition-all cursor-pointer group relative"
          aria-label={`Call Lead Architect: ${BRAND.phoneDisplay}`}
          title={`Call Lead Architect (${BRAND.phoneDisplay})`}
        >
          <Phone className="w-6 h-6" />
          {/* Simple hover label */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call: {BRAND.phoneDisplay}
          </span>
        </motion.a>

        {/* WhatsApp Floating Action Button */}
        <motion.a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 border border-emerald-400/30 transition-all cursor-pointer group relative"
          aria-label="Chat with Lead Architect on WhatsApp"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white" />
          {/* Simple hover label */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>
    </>
  );
};

export default StickyCTA;
