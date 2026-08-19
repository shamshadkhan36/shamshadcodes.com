import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import BackgroundEffect from './components/BackgroundEffect';

export function App() {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 relative font-sans overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <BackgroundEffect />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Process />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;