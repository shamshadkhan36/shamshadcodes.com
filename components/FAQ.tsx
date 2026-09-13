import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';
import Button from './ui/Button';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <SectionHeading
          badge="Got Questions?"
          badgeVariant="indigo"
          title="Frequently Asked"
          highlightText="Questions"
          subtitle="Everything you need to know about pricing, timelines, hosting ownership, and development workflows."
        />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-50/30 border-brand-500 shadow-lg shadow-brand-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions bottom callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Message our Lead Architect directly on WhatsApp for an immediate answer.
            </p>
          </div>
          <Button
            variant="whatsapp"
            size="sm"
            href={BRAND.whatsappUrl}
            external
            icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
            className="flex-shrink-0"
          >
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
