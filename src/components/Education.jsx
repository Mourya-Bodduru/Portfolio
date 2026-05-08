import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

function Education() {
  const { education, certifications, achievements } = resumeData;

  return (
    <section className="w-full relative z-10 py-20 md:py-32 bg-[#1A100C] text-[#FDF1E7] rounded-[2rem] md:rounded-[3rem] px-5 md:px-16 overflow-hidden mx-2 md:mx-0">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--color-accent)] opacity-10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="flex flex-col xl:flex-row gap-16 md:gap-20 relative z-10">
        
        {/* Education Left Column */}
        <div className="xl:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold font-serif-custom italic mb-16">
            Education
          </h2>

          <div className="flex flex-col">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-white/10 py-8 group cursor-default"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
                  <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <span className="text-[var(--color-accent)] font-medium text-sm md:text-base shrink-0 border border-[var(--color-accent)]/30 rounded-full px-4 py-1">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-xl md:text-3xl font-serif-custom italic opacity-80 mb-2">{edu.institution}</p>
                <p className="opacity-50 font-light text-lg">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements Right Column */}
        <div className="xl:w-1/2 flex flex-col gap-16">
          
          {/* Certifications */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif-custom italic mb-10">
              Certifications
            </h2>
            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 text-xl md:text-2xl font-light opacity-80 hover:opacity-100 transition-opacity"
                >
                  <span className="text-[var(--color-accent)] font-bold">―</span>
                  <span className="leading-snug">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif-custom italic mb-10">
              Achievements
            </h2>
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 text-xl md:text-2xl font-light opacity-80 hover:opacity-100 transition-opacity"
                >
                  <span className="text-[var(--color-accent)] font-bold">―</span>
                  <span className="leading-snug">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
