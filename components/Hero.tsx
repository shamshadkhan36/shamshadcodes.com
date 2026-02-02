import React from 'react';
import CyberButton from './ui/CyberButton';
import GlitchText from './ui/GlitchText';
import { Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-neonpink/50 rounded-full bg-neonpink/10 text-neonpink font-code text-sm mb-6 tracking-wider">
              System Online: Ready to Code
            </span>
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl text-gray-400 font-rajdhani">Hello, I am</h2>
              <GlitchText
                text="SHAMSHAD KHAN"
                className="text-5xl md:text-7xl font-orbitron font-black text-white leading-tight mb-2 mt-2"
              />
            </div>
            <h3 className="text-2xl md:text-3xl text-cyan font-bold font-rajdhani mb-6 h-10 flex items-center justify-center md:justify-start">
              <span className="typing-effect border-r-2 border-cyan pr-2 animate-pulse">
                Full Stack Developer & AI Engineer
              </span>
            </h3>
            <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed mx-auto md:mx-0">
              Architecting immersive web experiences and intelligent systems. I blend cyberpunk aesthetics with robust functionality to build the future of the web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <CyberButton variant="primary" icon={<ChevronRight size={18} />}>
                Hire Me
              </CyberButton>
              <CyberButton variant="secondary" icon={<Download size={18} />}>
                Download CV
              </CyberButton>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual/Hologram */}
        <div className="flex-1 w-full max-w-md md:max-w-xl relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-square"
          >
            {/* Spinning Rings */}
            <div className="absolute inset-0 border-[2px] border-cyan/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border-[2px] border-neonpurple/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
            <div className="absolute inset-12 border border-dashed border-white/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>

            {/* Center Content / Avatar Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 relative bg-black rounded-full overflow-hidden border-4 border-cyan/50 shadow-[0_0_50px_rgba(0,243,255,0.3)]">
                <img
                  src="/images/profile.jpg"
                  alt="Shamshad Khan"
                  className="w-full h-full object-cover object-top opacity-100 hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                {/* Glitch Overlay */}
                <div className="absolute inset-0 bg-cyan/10 animate-pulse mix-blend-overlay"></div>
              </div>

              {/* Floating Info Bits */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-black/80 backdrop-blur border border-neonpink p-3 rounded-lg shadow-[0_0_15px_rgba(255,0,255,0.4)]"
              >
                <div className="text-neonpink font-code text-xs">STATUS</div>
                <div className="text-white font-bold">Available</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 bg-black/80 backdrop-blur border border-cyan p-3 rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.4)]"
              >
                <div className="text-cyan font-code text-xs">EXPERIENCE</div>
                <div className="text-white font-bold">5+ Years</div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;