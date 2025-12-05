import React from 'react';
import SectionTitle from './ui/SectionTitle';
import CyberButton from './ui/CyberButton';
import { SOCIAL_LINKS } from '../constants';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="Establish Uplink" subtitle="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info Column */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Let's Build the Future</h3>
                    <p className="text-gray-400">
                        Have a project in mind or want to discuss the latest in AI and Web Tech? 
                        Send a transmission.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="p-3 bg-cyan/10 rounded-full text-cyan">
                            <Mail size={20} />
                        </div>
                        <span className="font-code">Samsamkhan36@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="p-3 bg-neonpink/10 rounded-full text-neonpink">
                            <MapPin size={20} />
                        </div>
                        <span className="font-code">Remote / Worldwide</span>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-rajdhani font-bold text-white mb-4 uppercase tracking-widest">Connect</h4>
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-cyan hover:border-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all"
                            >
                                <link.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Column */}
            <form className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
                {/* Decorative Neon Border Animation */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent hover:border-cyan/30 transition-colors"></div>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-code text-cyan uppercase mb-2">Identity</label>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full bg-black/50 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-code text-cyan uppercase mb-2">Signal Frequency</label>
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full bg-black/50 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-code text-cyan uppercase mb-2">Transmission Data</label>
                        <textarea 
                            rows={4} 
                            placeholder="Message..." 
                            className="w-full bg-black/50 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all resize-none"
                        ></textarea>
                    </div>

                    <CyberButton variant="primary" className="w-full" icon={<Send size={16} />}>
                        Send Message
                    </CyberButton>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;