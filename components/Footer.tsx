import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Neon Line Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 font-code text-sm">
          &copy; {new Date().getFullYear()} Shamshad Khan. All systems operational.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-gray-700 uppercase tracking-widest">
            <span>Designed in Night City</span>
            <span>•</span>
            <span>React + Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;