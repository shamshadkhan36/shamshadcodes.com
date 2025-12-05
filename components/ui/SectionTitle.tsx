import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="block text-neonpink font-code text-sm tracking-widest mb-2 uppercase">
          // {subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan to-transparent"></span>
        </h2>
      </motion.div>
    </div>
  );
};

export default SectionTitle;