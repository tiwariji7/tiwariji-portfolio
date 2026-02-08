
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Target, Lightbulb, Users, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-0 border-none">
              <img 
                src="/assets/image/mypic.jpeg" 
                alt="ShivamIMG" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-blue-400">Computer Science Background</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              I am Shivam Tiwari, a dedicated Software Developer with a strong foundation in Computer Science and Engineering. My journey in the world of programming started with a curiosity for how apps work, which evolved into a professional career building high-impact Android and Web solutions.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              With a primary focus on <span className="text-white font-bold">Android development </span> and <span className="text-white font-bold">Full-Stack Web (React/Node)</span>, I bridge the gap between complex logic and user-centric design.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Target, label: 'Problem Solver', color: 'text-blue-400' },
                { icon: Lightbulb, label: 'Creative Mind', color: 'text-purple-400' },
                { icon: Users, label: 'Team Player', color: 'text-cyan-400' },
                { icon: Trophy, label: 'Goal Oriented', color: 'text-pink-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 glass-panel rounded-xl">
                  <item.icon className={item.color} size={20} />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
