import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, BRAND } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { Check, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';
import WhatsAppIcon from './ui/WhatsAppIcon';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50/70 relative border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading
          badge="Practice Areas & Capabilities"
          badgeVariant="brand"
          title="Engineered For Revenue,"
          highlightText="Built To Scale"
          subtitle="Explore our specialized software engineering, high-converting web architecture, and business automation practice areas."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group relative rounded-3xl bg-white border border-slate-200 p-7 flex flex-col justify-between hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-shadow duration-300 shadow-lg shadow-slate-200/50"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <Badge variant="indigo" className="text-[10px] py-0.5 px-2">
                          {service.badge}
                        </Badge>
                      )}
                      {service.startingPrice && (
                        <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                          From {service.startingPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>

                  {service.subtitle && (
                    <p className="text-xs font-mono font-medium text-brand-700 mb-3">
                      {service.subtitle}
                    </p>
                  )}
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Turnaround & Ideal For Meta */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-5 text-[11px]">
                    {service.turnaround && (
                      <div className="flex items-center gap-2 text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span><strong>Sprint Delivery:</strong> {service.turnaround}</span>
                      </div>
                    )}
                    {service.idealFor && (
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                        <span className="truncate"><strong>Best For:</strong> {service.idealFor}</span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-slate-700 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`https://wa.me/919370262177?text=Hi%20ShamshadCodes,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20practice.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    Quick Enquiry
                  </a>

                  <Button
                    size="sm"
                    variant="ghost"
                    href={`#estimator?service=${service.id}`}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="text-xs text-brand-600 hover:text-brand-700 hover:bg-brand-50"
                  >
                    Estimate Cost
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-brand-50 via-white to-indigo-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-700 bg-brand-100/80 px-2.5 py-1 rounded-full mb-2 border border-brand-200">
              <Sparkles className="w-3 h-3 text-brand-600" />
              <span>Custom Enterprise Practice</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
              Need custom API integrations, cloud pipelines, or dedicated sprint teams?
            </h4>
            <p className="text-sm text-slate-600">
              We design custom software architecture, microservices, and WhatsApp automation bots tailored around your exact operational workflows.
            </p>
          </div>
          <Button
            variant="whatsapp"
            size="md"
            href={BRAND.whatsappUrl}
            external
            icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
            className="flex-shrink-0"
          >
            Discuss Custom Scope
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;