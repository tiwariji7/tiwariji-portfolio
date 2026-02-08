import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="max-w-7xl mx-auto flex justify-between items-center glass-panel rounded-[2rem] px-8 py-4 pointer-events-auto border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl"
      >
        {/* BRAND */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          {/* LOGO IMAGE */}
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-900/30 bg-gradient-to-br from-blue-500 to-purple-600">
            <img
              src="/assets/image/portfolio.png"
              alt="Tiwari Ji Logo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* NAME */}
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hidden sm:block">
            Tiwari <span className="font-light">Ji</span>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-all relative group py-2 ${
                activeSection === link.id
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  layoutId="nav-underline"
                />
              )}
            </button>
          ))}
        </div>

        {/* RESUME BUTTON */}
        <motion.a
          href="/assets/Shivam_Tiwari_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/40"
        >
          <Download size={14} />
          RESUME
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
