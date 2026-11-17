import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Shield, ArrowUpRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkProjects() {
  const { projects } = resumeData;
  const [filter, setFilter] = useState('all');

  // Reverse project order so latest appear first
  const displayProjects = [...projects].reverse();

  return (
    <section id="projects-dark" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              <span>SECTION 03 // ARCHITECTURAL REPOSITORY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
              FEATURED <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">SYSTEMS</span> & PLATFORMS
            </h2>
          </div>

          <p className="text-zinc-400 text-sm md:text-base font-mono max-w-md">
            Production-grade web ecosystems, live client applications, and real-time encrypted communications.
          </p>
        </motion.div>

        {/* 3D Spatial Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayProjects.map((project, index) => {
            const isFeatured = index === 0 || index === 2 || project.title === 'SecureChat';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden bg-[#0C0C14]/85 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl flex flex-col justify-between transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_45px_rgba(0,242,254,0.2)] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Top Media Viewport */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/60 border-b border-white/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-black to-zinc-900 text-center">
                      <Layers className="w-10 h-10 text-cyan-400 opacity-60 mb-2" />
                      <span className="font-mono text-sm text-zinc-400">VISUAL_ASSET_READY</span>
                    </div>
                  )}

                  {/* High-Tech Scanline Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 242, 254, 0.15) 0px, transparent 1px, transparent 3px)',
                      backgroundSize: '100% 3px'
                    }}
                  ></div>

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                      SYS // 0{index + 1}
                    </span>
                    {project.isLive && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        LIVE DEPLOYMENT
                      </span>
                    )}
                  </div>

                  {/* Corner Launch Button */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-transform duration-300 hover:scale-110 z-20"
                      title={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Category / Tagline */}
                    <div className="text-xs font-mono text-cyan-400/90 font-bold uppercase tracking-wider mb-2">
                      {project.category || project.tagline || 'WEB APPLICATION'}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">ENGINEERED BY BODDURU MOURYA</span>
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                      >
                        <span>VISIT PLATFORM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-zinc-500">ENTERPRISE SYSTEM</span>
                    )}
                  </div>
                </div>

                {/* Cyber Corner Decals */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-500/40 pointer-events-none">◤</div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-cyan-500/40 pointer-events-none">◥</div>
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-cyan-500/40 pointer-events-none">◣</div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-cyan-500/40 pointer-events-none">◢</div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default DarkProjects;