import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

const CyberButton: React.FC<CyberButtonProps> = ({ children, variant = 'primary', icon, className, ...props }) => {
  const baseStyles = "relative px-8 py-3 font-orbitron font-bold uppercase tracking-widest text-sm transition-all duration-300 clip-path-polygon-[10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px] focus:outline-none";
  
  const variants = {
    primary: "bg-cyan text-black hover:bg-white hover:text-cyan shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] border border-cyan",
    secondary: "bg-transparent text-cyan border border-cyan hover:bg-cyan/10 hover:text-white hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className} flex items-center justify-center gap-2 group`}
      {...props}
    >
      {icon && <span className="group-hover:animate-pulse">{icon}</span>}
      {children}
      {/* Decorative corner lines */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-50"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-50"></span>
    </motion.button>
  );
};

export default CyberButton;