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
    <div className="min-h-screen bg-black text-white relative font-sans overflow-x-hidden selection:bg-cyan selection:text-black">
      <BackgroundEffect />
      <Navbar />
      <main>
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