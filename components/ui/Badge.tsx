import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'emerald' | 'indigo' | 'amber' | 'slate';
  dot?: boolean;
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  dot = false,
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    brand: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
  };

  const dotColor = {
    brand: 'bg-brand-400',
    emerald: 'bg-emerald-400',
    indigo: 'bg-indigo-400',
    amber: 'bg-amber-400',
    slate: 'bg-slate-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border uppercase ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor[variant]}`}
            ></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor[variant]}`}></span>
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
