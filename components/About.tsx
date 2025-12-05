import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { User, MapPin, Calendar, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" subtitle="Who I Am" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan to-neonpurple rounded-lg opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative border-2 border-cyan/50 bg-black p-2 rounded-lg clip-path-polygon-[20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px]">
              <img 
                src="https://picsum.photos/seed/techworkspace/800/600" 
                alt="Workspace" 
                className="w-full h-full object-cover rounded shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan shadow-[0_0_10px_#00f3ff]"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-neonpurple shadow-[0_0_10px_#bd00ff]"></div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-gray-300"
          >
            <h3 className="text-3xl font-orbitron font-bold text-white mb-6">
              Full Stack Wizard & <span className="text-neonpink">AI Enthusiast</span>
            </h3>
            <p className="mb-6 leading-relaxed font-rajdhani text-lg">
              I am Shamshad Khan, a passionate developer obsessed with creating clean, efficient, and futuristic code. With a background in both front-end aesthetics and back-end logic, I build systems that are not only robust but visually stunning.
            </p>
            <p className="mb-8 leading-relaxed font-rajdhani text-lg">
              Specializing in the intersection of Web Development and Artificial Intelligence, I help businesses transform complex problems into elegant, automated solutions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded hover:border-cyan/50 transition-colors flex items-center gap-4">
                <div className="p-2 bg-cyan/10 rounded-full text-cyan"><User size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-code uppercase">Name</p>
                  <p className="text-white font-bold">Shamshad Khan</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-4 rounded hover:border-cyan/50 transition-colors flex items-center gap-4">
                <div className="p-2 bg-neonpurple/10 rounded-full text-neonpurple"><Mail size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-code uppercase">Email</p>
                  <p className="text-white font-bold">samsamkhan36@gmail.com</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded hover:border-cyan/50 transition-colors flex items-center gap-4">
                <div className="p-2 bg-neonpink/10 rounded-full text-neonpink"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-code uppercase">Location</p>
                  <p className="text-white font-bold">Mumbai, Maharashtra, India </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded hover:border-cyan/50 transition-colors flex items-center gap-4">
                <div className="p-2 bg-cyan/10 rounded-full text-cyan"><Calendar size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-code uppercase">Experience</p>
                  <p className="text-white font-bold">5+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;