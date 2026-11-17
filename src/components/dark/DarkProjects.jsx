import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkProjects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* 3D Modern Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...projects].reverse().map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-[#10111A]/85 border border-white/10 hover:border-sky-400/40 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-[0_10px_35px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#181926]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#12131F] to-[#1A1B2B]">
                      <span className="text-xl font-bold text-zinc-400 font-serif-custom italic">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-zinc-300 border border-white/10">
                      Project 0{idx + 1}
                    </span>

                    {project.isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {project.category && (
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
                      {project.category}
                    </span>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Link (if live) */}
              {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== 'https://' && (
                <div className="px-6 pb-6 pt-2 border-t border-white/5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DarkProjects;
