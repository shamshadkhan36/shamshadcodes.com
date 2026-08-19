import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, BRAND } from '../constants';
import { Menu, X, MessageSquare, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080C14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 p-[1px] shadow-md shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-brand-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white font-sans flex items-center gap-1.5">
              ShamshadCodes
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] font-medium text-slate-400 -mt-1 tracking-wider uppercase">
              Software Partner
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 px-3 py-1.5 rounded-full">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-3 py-2 rounded-lg hover:bg-emerald-500/10 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <Button
            size="sm"
            variant="primary"
            href="#contact"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Start Project
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#080C14]/98 backdrop-blur-2xl border-b border-slate-800 overflow-hidden px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-brand-400 hover:bg-slate-900/60 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
                <Button
                  fullWidth
                  variant="whatsapp"
                  size="md"
                  href={BRAND.whatsappUrl}
                  external
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  fullWidth
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Your Project
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;