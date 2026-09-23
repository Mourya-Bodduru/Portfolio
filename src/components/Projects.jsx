import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

function Projects() {
  const { projects } = resumeData;

  return (
    <section className="w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center max-w-4xl mx-auto px-4 md:px-0"
      >
        <h2 className="text-4xl sm:text-5xl md:text-huge font-bold text-[var(--color-text-dark)] leading-tight break-words">
          Featured Works <span className="font-serif-custom italic text-[var(--color-accent-light)] block sm:inline mt-2 sm:mt-0">like:</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-24 md:gap-40 px-4 md:px-0">
        {[...projects].reverse().map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={project.id} 
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center group cursor-pointer`}
            >
              
              {/* Project Image/Visual */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[60%] rounded-[2rem] overflow-hidden relative shadow-2xl shrink-0 border border-[var(--color-text-dark)]/15 bg-[#140C08]"
              >
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  />
                ) : (
                  <div className="w-full aspect-[2.2/1] bg-[#1A100C] relative flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-light)] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    <div className="flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <span className="text-[var(--color-primary)] font-serif-custom italic text-2xl md:text-4xl opacity-50">
                        Visual Missing
                      </span>
                      <span className="text-[var(--color-primary)] opacity-30 text-sm mt-2 font-mono">
                        {project.title.substring(0, 3).toUpperCase()}-{(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Floating View Badge */}
                {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== 'https://' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:scale-110 hover:bg-[var(--color-accent)] z-20"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ) : (
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}

                {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== 'https://' && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-10"
                    aria-label={`Visit ${project.title}`}
                  />
                )}
              </motion.div>

              {/* Project Info */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={`w-full lg:w-[40%] flex flex-col ${isEven ? 'lg:items-start text-left' : 'lg:items-end text-left lg:text-right'}`}
              >
                <div className={`flex flex-wrap items-center gap-3 mb-4 ${isEven ? 'justify-start' : 'justify-start lg:justify-end'}`}>
                  <span className="text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase font-bold">
                    Project 0{index + 1}
                  </span>
                  {project.isLive && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-600/10 text-emerald-800 border border-emerald-600/25">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                      Live
                    </span>
                  )}
                  {project.category && (
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)]/80 px-2.5 py-0.5 rounded-md bg-[var(--color-text-dark)]/5 border border-[var(--color-text-dark)]/15">
                      {project.category}
                    </span>
                  )}
                </div>

                {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== 'https://' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title inline-block"
                  >
                    <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[var(--color-text-dark)] leading-tight mb-6 group-hover/title:text-[var(--color-accent)] transition-colors duration-500">
                      {project.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[var(--color-text-dark)] leading-tight mb-6 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {project.title}
                  </h3>
                )}

                <p className="text-lg md:text-xl text-[var(--color-text-dark)] font-semibold leading-relaxed">
                  {project.description}
                </p>

                {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== 'https://' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-sm tracking-wider uppercase text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                  >
                    <span>Visit Live Site</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
                
                <div className="mt-8 w-12 h-[2px] bg-[var(--color-accent)] opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"></div>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
