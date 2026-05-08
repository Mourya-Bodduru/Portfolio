import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

function Bio() {
  const { summary } = resumeData;

  return (
    <section id="about" className="relative z-10 w-full py-12 md:py-20 px-6 sm:px-8 lg:px-12 flex flex-col items-center bg-transparent">
      
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 text-center w-full max-w-4xl"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-text-dark)] font-serif-custom italic leading-none text-left md:text-center">
          About Me
        </h2>
        <div className="w-full h-px bg-[var(--color-text-dark)]/10 mt-8"></div>
      </motion.div>

      {/* Bio Content */}
      <div className="max-w-4xl mx-auto w-full">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-dark)] opacity-90 text-left md:text-center"
        >
          {summary}
        </motion.p>
      </div>
    </section>
  );
}

export default Bio;
