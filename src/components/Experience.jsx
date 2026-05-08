import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

function Experience() {
  const { experience } = resumeData;

  return (
    <section className="w-full relative z-10 py-32 border-t border-[var(--color-text-dark)]/10">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 px-4 md:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold text-[var(--color-text-dark)] font-serif-custom italic leading-none"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-[var(--color-text-dark)] opacity-50 mt-4 md:mt-0 max-w-sm md:text-right font-medium"
        >
          Places where I've contributed to building scalable solutions and impactful software.
        </motion.p>
      </div>

      <div className="flex flex-col">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group border-b border-[var(--color-text-dark)]/20 py-12 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 hover:bg-[var(--color-text-dark)]/5 transition-colors px-4 md:px-8 cursor-default"
          >
            {/* Left: Number and Company */}
            <div className="flex items-center gap-8 md:gap-16 xl:w-1/2">
              <span className="text-4xl md:text-6xl font-serif-custom italic text-[var(--color-text-dark)] opacity-20 font-bold group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-colors duration-500">
                0{index + 1}
              </span>
              <div className="flex flex-col">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter group-hover:text-[var(--color-accent)] transition-colors duration-500 leading-none break-words hyphens-auto max-w-full">
                    {exp.company}
                  </h3>
                <span className="text-[var(--color-accent)] font-medium text-sm md:text-lg mt-2 uppercase tracking-widest">
                  {exp.duration}
                </span>
              </div>
            </div>

            {/* Right: Role and Points */}
            <div className="xl:w-1/2 flex flex-col items-start xl:items-end text-left xl:text-right">
              <h4 className="text-2xl md:text-4xl text-[var(--color-text-dark)] font-serif-custom italic mb-4">
                {exp.title}
              </h4>
              <div className="text-[var(--color-text-dark)] opacity-60 text-sm md:text-lg max-w-lg font-light">
                {exp.points[0]} {/* Display main point for clean minimalist look */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
