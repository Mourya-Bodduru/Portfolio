import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Lightbulb, Wrench, CheckCircle } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkSkills() {
  const { skills, coreCompetencies } = resumeData;

  const categoryIcons = {
    'Programming Languages': Code,
    'Frontend': Layout,
    'Backend & Frameworks': Server,
    'Databases': Database,
    'Concepts': Lightbulb,
    'Tools & Platforms': Wrench,
  };

  return (
    <section id="skills" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* 6-Grid Skill Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {skills.map((skillGroup, idx) => {
            const Icon = categoryIcons[skillGroup.category] || Code;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-6 sm:p-7 rounded-3xl bg-[#10111A]/85 border border-white/10 hover:border-sky-400/30 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">
                    {skillGroup.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-sky-500/15 border border-white/10 text-xs font-medium transition-colors"
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

        {/* Core Competencies Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#10111A]/85 border border-white/10 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Core Competencies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map((comp, cIdx) => (
              <div 
                key={cIdx} 
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-400/25 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-sm font-semibold text-zinc-200">{comp}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default DarkSkills;
