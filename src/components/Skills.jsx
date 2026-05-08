import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

// Custom Minimalist Icons for each category
const CategoryIcon = ({ category }) => {
  const iconClass = "w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)] mb-6";
  
  if (category.includes("Programming")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  } else if (category.includes("Web")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    );
  } else if (category.includes("Backend")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm-3-6h.008v.008h-.008v-.008z" />
      </svg>
    );
  } else if (category.includes("Data")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    );
  } else if (category.includes("Concepts")) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.487 1.508 1.333 1.508 2.316v.192m4.5 0v.028m-4.5-.028v.028m-4.5-3.048c1.689 0 3.273-.55 4.5-1.464M18.75 14.952c-1.689 0-3.273-.55-4.5-1.464M12 15a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    );
  } else {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    );
  }
};

function Skills() {
  const { skills, coreCompetencies } = resumeData;

  return (
    <section className="w-full relative z-10 py-32 overflow-hidden">
      
      {/* Title */}
      <div className="px-4 md:px-0 mb-20 text-center">
        <h2 className="text-6xl md:text-8xl font-bold text-[var(--color-text-dark)] font-serif-custom italic leading-none">
          Skills
        </h2>
      </div>

      {/* Bento Box Grid for Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-white/20 backdrop-blur-md border border-[var(--color-text-dark)]/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <CategoryIcon category={skillGroup.category} />
            
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-6 tracking-tight">
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 text-sm md:text-base font-medium rounded-xl border border-[var(--color-text-dark)]/20 text-[var(--color-text-dark)] group-hover:border-[var(--color-text-dark)]/40 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Competencies Minimalist List */}
      <div className="mt-32">
        <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] font-serif-custom italic mb-12 px-4 md:px-0 text-center">
          Core Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {coreCompetencies.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/30 backdrop-blur-md border border-white/40 p-8 rounded-[2rem] flex items-center justify-center text-center shadow-xl hover:bg-white/50 transition-colors"
            >
              <span className="text-xl md:text-2xl font-bold text-[var(--color-text-dark)] leading-snug">
                {comp}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
