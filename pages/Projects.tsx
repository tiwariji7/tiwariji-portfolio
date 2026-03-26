import React from 'react';
import GlassCard from '../components/GlassCard';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio Projects
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my professional work and personal experiments in software engineering.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <GlassCard
              key={project.title}
              delay={idx * 0.1}
              className="flex flex-col h-full group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* OVERLAY (NO CLICK BLOCK) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity
                                flex items-end p-4 pointer-events-none">
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] bg-blue-600/30 backdrop-blur-md
                                   px-2 py-1 rounded border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              {/* BUTTONS (CLICKABLE) */}
              <div className="flex items-center gap-4 mt-auto relative z-10 pointer-events-auto">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2
                               bg-blue-600/20 hover:bg-blue-600/40
                               text-blue-400 py-2 rounded-lg
                               border border-blue-500/30
                               transition-colors text-sm font-bold"
                  >
                    <ExternalLink size={16} />
                    DEMO
                  </a>
                )}

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2
                             bg-white/5 hover:bg-white/10
                             text-white py-2 rounded-lg
                             border border-white/10
                             transition-colors text-sm font-bold"
                >
                  <Github size={16} />
                  GITHUB
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
