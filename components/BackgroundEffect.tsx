import React from 'react';

export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080C14]">
      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_60%,transparent_100%)]"
      />
      
      {/* Top Ambient Glow - Brand Blue */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-brand-500/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] opacity-70"
      />

      {/* Middle Ambient Glow - Indigo */}
      <div 
        className="absolute top-[35%] -left-48 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] opacity-50"
      />

      {/* Bottom Ambient Glow - Emerald */}
      <div 
        className="absolute top-[65%] -right-48 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] opacity-40"
      />
    </div>
  );
};

export default BackgroundEffect;