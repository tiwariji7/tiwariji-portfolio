
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { CERTIFICATIONS } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    { degree: 'B.Tech in CSE', institution: 'AKTU', year: '2022 - 2026', grade: 'Honors' },
    { degree: 'Class XII', institution: 'UP Board', year: '2022', grade: 'First Div' },
    { degree: 'Class X', institution: 'UP Board', year: '2020', grade: 'First Div' }
  ];

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold">Academic Journey</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <GlassCard key={edu.degree} delay={idx * 0.1}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/30">
                        {edu.year}
                      </span>
                      <p className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-widest">{edu.grade}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Certifications Column */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <GlassCard key={cert.title} delay={idx * 0.1}>
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 mb-4 bg-white/5 p-2 rounded-lg">
                      <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-blue-400 mb-2">{cert.issuer}</p>
                    <div className="mt-auto pt-2 border-t border-white/5 flex justify-between items-center">
                      <span className="text-[10px] text-gray-500">{cert.year}</span>
                      <Award size={12} className="text-purple-400" />
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Education;
