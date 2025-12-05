import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-darkbg">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
      />
      
      {/* Moving Horizon Grid (Retro style) */}
      <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.1)_100%)] opacity-50 transform perspective-1000 rotate-x-60 origin-bottom animate-pulse-fast">
         <div className="w-full h-full bg-[linear-gradient(0deg,transparent_24%,rgba(0,243,255,0.3)_25%,rgba(0,243,255,0.3)_26%,transparent_27%,transparent_74%,rgba(0,243,255,0.3)_75%,rgba(0,243,255,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,243,255,0.3)_25%,rgba(0,243,255,0.3)_26%,transparent_27%,transparent_74%,rgba(0,243,255,0.3)_75%,rgba(0,243,255,0.3)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"></div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neonpurple/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[128px]" />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20" />
    </div>
  );
};

export default BackgroundEffect;