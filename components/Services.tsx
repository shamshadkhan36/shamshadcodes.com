import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <SectionTitle title="System Protocols" subtitle="What I Offer" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/5 p-8 rounded-xl hover:bg-white/10 hover:border-neonpurple/50 transition-all duration-300 group cursor-default"
            >
              <div className="mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 group-hover:border-neonpurple group-hover:shadow-[0_0_20px_rgba(189,0,255,0.4)] transition-all">
                <service.icon className="w-8 h-8 text-gray-300 group-hover:text-neonpurple transition-colors" />
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;