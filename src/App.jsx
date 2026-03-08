import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
