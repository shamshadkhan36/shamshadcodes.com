import React, { useState, useEffect } from 'react';
import { BRAND } from '../constants';
import { ArrowRight, X, Calculator, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './ui/WhatsAppIcon';

export const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 250px
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Show quick tooltip after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* 1. Mobile Bottom Sticky Bar (< md screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold py-3 px-2.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-transform active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 flex-shrink-0 fill-current" />
            <span className="truncate">WhatsApp Us</span>
          </a>

          <a
            href="#estimator"
            className="flex items-center justify-center gap-1.5 bg-brand-600 active:bg-brand-700 text-white text-xs font-bold py-3 px-2.5 rounded-xl shadow-lg shadow-brand-600/30 transition-transform active:scale-[0.98]"
          >
            <Calculator className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">Calculate Price</span>
          </a>
        </div>
      </div>

      {/* 2. Desktop Floating WhatsApp Widget (>= md screens) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <div className="relative flex items-center group">
          
          {/* Tooltip speech bubble */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 15, scale: 0.9 }}
                className="absolute right-16 bottom-1 bg-white border border-slate-200 text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-2xl whitespace-nowrap flex items-center gap-2 pointer-events-auto"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Need a fast quote? Chat on WhatsApp</span>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-slate-400 hover:text-slate-700 ml-1 cursor-pointer"
                  aria-label="Close message"
                >
                  <X className="w-3 h-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Floating Action Button */}
          <motion.a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 border border-emerald-400/30 transition-all cursor-pointer"
            aria-label="Chat with Lead Architect on WhatsApp"
          >
            <WhatsAppIcon className="w-7 h-7 fill-white" />
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;
