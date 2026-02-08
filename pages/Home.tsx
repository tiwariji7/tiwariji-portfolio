import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
import HeroVisual from '../components/HeroVisual';

/* ================= TYPEWRITER (FIXED) ================= */
const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1800); // pause after typing
        }
      } else {
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 70 : 120); // smooth & readable speed

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="text-blue-400 font-mono">
      {texts[textIndex].slice(0, charIndex)}
      <span className="inline-block ml-1 animate-pulse">|</span>
    </span>
  );
};

/* ================= VARIANTS ================= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.4 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ================= HOME ================= */
const Home: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20 relative">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 items-center z-10">

        {/* LEFT SECTION */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 text-blue-500/80 mb-2"
              >
                <Terminal size={18} />
                <span className="font-mono text-sm tracking-widest uppercase">
                  system.init() — success
                </span>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-light text-gray-400">
                  I'm <span className="text-white font-bold">Shivam Tiwari</span>
                </h2>

                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-none mt-2">
                  <TypewriterText
                    texts={[
                      'Software Engineer',
                      'Android Developer',
                      'AI Enthusiast',
                      'UI/UX Specialist',
                    ]}
                  />
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light"
              >
                Engineering{' '}
                <span className="text-white">scalable digital ecosystems</span>{' '}
                that bridge the gap between high-level AI logic and seamless user experiences.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={scrollToAbout}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all group"
                >
                  View my work
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={scrollToContact}
                  className="glass-panel px-8 py-4 rounded-xl font-bold border border-white/10 transition-all"
                >
                  Get in touch
                </button>
              </motion.div>

              {/* SOCIAL LINKS */}
              <motion.div
                variants={itemVariants}
                className="flex gap-6 items-center pt-8 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="h-[1px] w-12 bg-gray-700"></div>
                <div className="flex gap-5">
                  <a href="https://github.com/tiwariji7" target="_blank" rel="noopener noreferrer">
                    <Github size={22} />
                  </a>
                  <a href="https://linkedin.com/in/tiwarijii" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={22} />
                  </a>
                  <a href="mailto:tiwarijiofficial4@gmail.com">
                    <Mail size={22} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
          className="relative h-[400px] lg:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full scale-75 animate-pulse"></div>
          <HeroVisual />
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
