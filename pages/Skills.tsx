
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Programming', 'Web', 'App/Backend', 'Tools'];

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical expertise across multiple domains, from system-level programming to modern cloud infrastructures.
          </p>
        </div>

        {categories.map((cat, idx) => (
          <div key={cat} className="mb-16">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-blue-400 mb-8 border-l-4 border-blue-500 pl-4"
            >
              {cat}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.filter(s => s.category === cat).map((skill, sIdx) => (
                <GlassCard key={skill.name} delay={sIdx * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 p-3 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                    <p className="text-xs text-gray-400">{skill.description}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
