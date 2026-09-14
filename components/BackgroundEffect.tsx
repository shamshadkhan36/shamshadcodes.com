import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFAFC]">
      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_60%,transparent_100%)]"
      />
      
      {/* Top Ambient Glow - Sky / Brand Blue with slow floating pulse */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 0.95, 1],
          x: ['-50%', '-48%', '-52%', '-50%'],
          y: [0, 15, -10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/2 w-[800px] h-[450px] bg-gradient-to-b from-brand-300/30 via-indigo-200/20 to-transparent rounded-full blur-[140px] opacity-70"
      />

      {/* Middle Ambient Glow - Indigo drifting */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -30, 20, 0],
          x: [0, 25, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] -left-48 w-[550px] h-[550px] bg-indigo-200/25 rounded-full blur-[160px] opacity-60"
      />

      {/* Bottom Ambient Glow - Emerald drifting */}
      <motion.div 
        animate={{
          scale: [1, 1.12, 0.92, 1],
          y: [0, 35, -20, 0],
          x: [0, -30, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[65%] -right-48 w-[550px] h-[550px] bg-emerald-200/25 rounded-full blur-[160px] opacity-50"
      />
    </div>
  );
};

export default BackgroundEffect;