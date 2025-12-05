import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <SectionTitle title="Technical Arsenal" subtitle="Skills & Proficiency" />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Categories grouping could be done, but distinct list for now with animations */}
          {SKILLS.map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-xl text-white font-rajdhani font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan rounded-full animate-pulse"></span>
                  {skill.name}
                </h4>
                <span className="text-cyan font-code text-sm">{skill.level}%</span>
              </div>
              
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                {/* Background Grid inside bar */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-[size:10px_100%]"></div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full relative ${
                    skill.category === 'Frontend' ? 'bg-cyan' : 
                    skill.category === 'Backend' ? 'bg-neonpurple' : 'bg-neonpink'
                  }`}
                >
                   {/* Glow effect at tip */}
                   <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px]"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Indicators for Core Stats - Just for visual flair */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Problem Solving', 'Creativity', 'Teamwork', 'Communication'].map((item, idx) => (
                <motion.div 
                    key={item}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="p-6 border border-white/5 bg-white/5 rounded-full aspect-square flex flex-col items-center justify-center hover:bg-white/10 hover:border-cyan/50 transition-all cursor-crosshair group"
                >
                    <div className="text-3xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan transition-colors">100%</div>
                    <div className="text-sm text-gray-400 font-rajdhani uppercase tracking-wider">{item}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;