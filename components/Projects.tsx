import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" subtitle="Selected Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900 border border-white/10 rounded-xl overflow-hidden hover:border-cyan/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cyan/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  <a href={project.githubUrl} className="p-3 bg-white/10 rounded-full hover:bg-cyan hover:text-black text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demoUrl} className="p-3 bg-white/10 rounded-full hover:bg-neonpink hover:text-black text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan/50 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-code text-cyan bg-cyan/10 border border-cyan/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;