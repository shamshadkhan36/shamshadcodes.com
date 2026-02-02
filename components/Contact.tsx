import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import CyberButton from './ui/CyberButton';
import { SOCIAL_LINKS } from '../constants';
import { Send, Mail, MapPin, CheckCircle, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = () => {
        setStatus('sent');
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    };

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
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
                        {/* Decorative Neon Border Animation */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent hover:border-cyan/30 transition-colors"></div>

                        {/* Hidden Iframe for submission without redirect */}
                        <iframe
                            name="hidden_iframe"
                            id="hidden_iframe"
                            style={{ display: 'none' }}
                            onLoad={() => status === 'sending' && handleSubmit()}
                        ></iframe>

                        <form
                            action="https://docs.google.com/forms/d/e/1FAIpQLSdeo-d0J0vsdX7lyurCFkBMmyL1gaHEgIzEaPLfv6Ygwt4H1g/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={() => setStatus('sending')}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-xs font-code text-cyan uppercase mb-2">Identity</label>
                                <input
                                    type="text"
                                    name="entry.845771374"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Full Name"
                                    className="w-full bg-black/50 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-code text-cyan uppercase mb-2">Comms Line</label>
                                <input
                                    type="tel"
                                    name="entry.1190954742"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="Phone Number"
                                    className="w-full bg-black/50 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-code text-cyan uppercase mb-2">Transmission Data</label>
                                <textarea
                                    rows={4}
                                    name="entry.71527503"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Message..."
                                    className="w-full bg-black/50 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-cyan focus:bg-cyan/5 transition-all resize-none"
                                ></textarea>
                            </div>

                            <CyberButton
                                variant="primary"
                                className="w-full"
                                icon={status === 'sent' ? <CheckCircle size={16} /> : <Send size={16} />}
                                disabled={status === 'sending'}
                                type="submit"
                            >
                                {status === 'sending' ? 'Transmitting...' : status === 'sent' ? 'Transmission Sent' : 'Send Message'}
                            </CyberButton>

                            {status === 'sent' && (
                                <p className="text-green-400 text-xs font-code text-center mt-2 animate-pulse">
                                    Successfully initiated uplink protocol.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;