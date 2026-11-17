import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkExperience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-3 mb-4"></div>
          <p className="text-base text-zinc-400 font-medium">
            Places where I've contributed to building scalable solutions and impactful software.
          </p>
        </motion.div>

        {/* Clean Timeline Feed */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-12 flex flex-col gap-10">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full border-2 border-sky-400 bg-[#090A0F] group-hover:bg-sky-400/20 shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#10111A]/85 border border-white/10 hover:border-sky-400/30 backdrop-blur-xl shadow-xl transition-all duration-300">
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      {exp.type}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-xs text-zinc-400 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Company & Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {exp.company}
                </h3>
                <h4 className="text-base text-zinc-300 font-medium mb-4">
                  {exp.title}
                </h4>

                {/* Bullet Points */}
                <ul className="space-y-2 text-sm sm:text-base text-zinc-300 font-normal">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DarkExperience;
