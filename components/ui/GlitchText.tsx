import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "h1" }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <Component className="relative z-10">
        {text}
      </Component>
      <Component className="absolute top-0 left-0 -z-10 w-full h-full text-neonpink opacity-0 group-hover:opacity-70 group-hover:animate-glitch clip-path-polygon-[0_0,100%_0,100%_35%,0_35%] transform translate-x-[-2px]">
        {text}
      </Component>
      <Component className="absolute top-0 left-0 -z-10 w-full h-full text-cyan opacity-0 group-hover:opacity-70 group-hover:animate-glitch animation-delay-100 clip-path-polygon-[0_65%,100%_65%,100%_100%,0_100%] transform translate-x-[2px]">
        {text}
      </Component>
    </div>
  );
};

export default GlitchText;