import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, ArrowRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkEducation({ onViewAllAchievements }) {
  const { education, certifications, achievements } = resumeData;

  return (
    <section id="education" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 z-10">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education & Accolades
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* 2-Column Split matching light theme Education.jsx */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Education (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#10111A]/85 border border-white/10 backdrop-blur-xl shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Education
                </h3>
              </div>

              <div className="flex flex-col divide-y divide-white/10">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id || index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="py-6 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 w-fit">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-base text-zinc-300 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-zinc-400">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Achievements (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Certifications Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#10111A]/85 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Certifications
                </h3>
              </div>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-medium"
                  >
                    <span className="text-sky-400 font-bold">•</span>
                    <span>{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Achievements Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#10111A]/85 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Achievements
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-medium"
                  >
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              {/* View Full Achievements & Posts Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    if (onViewAllAchievements) onViewAllAchievements();
                    else window.location.hash = '#/achievements';
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group cursor-pointer"
                >
                  <span>View Full Achievements & Posts (SIH 2024 Gallery)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DarkEducation;
