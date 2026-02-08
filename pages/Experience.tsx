
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-xs font-bold mb-4 tracking-[0.2em] uppercase"
          >
            Professional Path
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Career <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Milestones</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-blue-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-xl bg-[#0a0a0a] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    >
                      <Briefcase size={18} className="text-blue-400" />
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, rotateY: isEven ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <GlassCard className="group">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 bg-white/5 p-2 group-hover:border-blue-500/50 transition-colors">
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="text-blue-400 text-sm font-semibold flex items-center gap-1">
                              {exp.company}
                            </span>
                            <span className="text-gray-500 text-xs flex items-center gap-1">
                              <Calendar size={12} />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 relative">
                        {exp.description.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="text-gray-400 text-sm flex items-start gap-3 group/item"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 flex-shrink-0 group-hover/item:bg-blue-400 transition-colors"></span>
                            <p className="leading-relaxed">{item}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 uppercase tracking-widest font-bold">
                          <MapPin size={12} />
                          Remote / Hybrid
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs text-blue-400 flex items-center gap-1 font-bold hover:text-blue-300 transition-colors"
                        >
                          Verify <ExternalLink size={12} />
                        </motion.button>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center p-8 glass-panel rounded-3xl border-dashed border-white/10"
        >
          <p className="text-gray-400 font-medium">Looking for a results-driven developer to join your team?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 text-blue-400 font-bold hover:text-white transition-colors flex items-center gap-2 mx-auto"
          >
            Let's discuss my next chapter <Briefcase size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
