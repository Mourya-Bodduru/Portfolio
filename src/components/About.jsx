import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

function About() {
  const { header } = resumeData;

  const firstName = header.name.split(' ')[0] || header.name;
  const lastName = header.name.split(' ').slice(1).join(' ') || '';

  return (
    <section className="relative w-full h-screen flex flex-col justify-end">
      


      {/* Massive Split Typography & Center Card */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 pb-10 md:pb-20 pointer-events-none">
        
        {/* First Name (Top/Left) */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[14vw] md:text-[12vw] xl:text-[10vw] font-bold text-[var(--color-text-dark)] m-0 p-0 leading-none tracking-tighter text-center md:text-right flex-1"
        >
          {firstName}
        </motion.h1>

        {/* Center Floating Card with Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-[50vw] h-[65vw] md:w-48 md:h-64 lg:w-64 lg:h-80 xl:w-72 xl:h-96 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden my-4 md:my-0 mx-0 md:mx-6 pointer-events-auto shrink-0 border border-white/20"
        >
          <img src="/profile1.jpg" alt="Bodduru Mourya" className="w-full h-full object-cover" />
        </motion.div>

        {/* Last Name (Bottom/Right) */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[14vw] md:text-[12vw] xl:text-[10vw] font-bold text-[var(--color-text-dark)] m-0 p-0 leading-none tracking-tighter text-center md:text-left flex-1"
        >
          {lastName}
        </motion.h1>

      </div>
    </section>
  );
}

export default About;
