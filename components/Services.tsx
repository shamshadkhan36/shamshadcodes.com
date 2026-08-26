import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="What We Build"
          badgeVariant="brand"
          title="Engineered For Growth,"
          highlightText="Tailored For You"
          subtitle="From high-converting business websites to cross-platform mobile apps and automated workflows, explore our specialized development services."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 p-7 flex flex-col justify-between hover:border-brand-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl hover:shadow-brand-500/5"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <Badge variant="indigo" className="text-[10px] py-0.5 px-2">
                          {service.badge}
                        </Badge>
                      )}
                      {service.startingPrice && (
                        <span className="text-xs font-mono font-bold text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                          From {service.startingPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800/60">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-slate-300 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={`https://wa.me/919370262177?text=Hi%20Shamshad,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Quick Enquiry
                  </a>

                  <Button
                    size="sm"
                    variant="ghost"
                    href="#contact"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="text-xs text-brand-400 hover:text-brand-300 hover:bg-brand-500/10"
                  >
                    Start Scope
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-950/60 via-slate-900 to-indigo-950/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Need a custom integration or complex system?
            </h4>
            <p className="text-sm text-slate-400">
              I build custom API integrations, automation scripts, and full-stack software tailored to your workflow.
            </p>
          </div>
          <Button
            variant="whatsapp"
            size="md"
            href={BRAND.whatsappUrl}
            external
            icon={<MessageSquare className="w-4 h-4" />}
            className="flex-shrink-0"
          >
            Discuss Custom Tech
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;