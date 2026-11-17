import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Server, Terminal, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkSkills() {
  const { skills, coreCompetencies } = resumeData;

  const categoryIcons = {
    'Programming Languages': Code,
    'Frontend': Cpu,
    'Backend & Frameworks': Server,
    'Databases': Database,
    'Concepts': Shield,
    'Tools & Platforms': Terminal
  };

  return (
    <section id="skills-dark" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 z-10">
      
      {/* Background Radiance */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            <span>SECTION 05 // TECHNICAL MATRIX</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            CORE <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">CAPABILITIES</span> & STACK
          </h2>
        </motion.div>

        {/* 6-Grid Cyber Skill Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {skills.map((skillGroup, idx) => {
            const Icon = categoryIcons[skillGroup.category] || Terminal;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-6 sm:p-8 rounded-3xl bg-[#0D0D14]/85 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl shadow-xl hover:shadow-[0_0_35px_rgba(0,242,254,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 font-bold">
                      CLUSTER 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-mono font-bold text-white mb-4 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                    {skillGroup.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-white/10 text-xs font-mono font-medium transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Competencies High-Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0D0D14] to-purple-950/40 border border-white/15 backdrop-blur-2xl"
        >
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            <span>PRODUCTION ENGINEERING COMPETENCIES</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 uppercase">
            Architectural Tenets & Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map((comp, cIdx) => (
              <div 
                key={cIdx} 
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm font-mono text-zinc-200">{comp}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default DarkSkills;