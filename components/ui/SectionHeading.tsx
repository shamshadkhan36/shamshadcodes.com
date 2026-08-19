import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'brand' | 'emerald' | 'indigo' | 'amber' | 'slate';
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'brand',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {badge && (
          <div className="mb-3">
            <Badge variant={badgeVariant} dot={true} pulse={true}>
              {badge}
            </Badge>
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 font-sans">
          {title}{' '}
          {highlightText && (
            <span className="gradient-text-brand">{highlightText}</span>
          )}
        </h2>

        {subtitle && (
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeading;
