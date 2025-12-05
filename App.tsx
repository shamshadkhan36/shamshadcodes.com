import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

function App() {
  return (
    <div className="relative text-gray-200 font-sans selection:bg-cyan selection:text-black">
      <BackgroundEffect />
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-10 md:gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;