import React from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';

// Pages
import HomeHero from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';

/* ================= FOOTER ================= */
const Footer = () => (
  <footer className="py-10 px-6 glass-panel border-t-0 border-white/5 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 text-center">
      
      <h3 className="text-sm md:text-base font-mono text-gray-400">
        {'<'}Developed with ❤️ by{' '}
        <span className="text-blue-400 font-semibold">Shivam Tiwari</span>
        {' />'}
      </h3>

      <p className="text-gray-500 text-xs md:text-sm">
        © 2024 Shivam Tiwari. All rights reserved.
      </p>

    </div>
  </footer>
);

/* ================= APP ================= */
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col scroll-smooth">
      <Background3D />
      <Navbar />

      <main className="flex-grow">
        <section id="home"><HomeHero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
