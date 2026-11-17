import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, ChevronDown } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkHero({ onNavigate }) {
  const { header, summary } = resumeData;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 z-10"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Clean Typography & Real Portfolio Data (7 Cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span>{header.title}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            <span>Hey, I'm </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-indigo-200 to-white">
              {header.name}
            </span>
          </h1>

          {/* Real Title & Summary */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
            {summary}
          </p>

          {/* Action Buttons: View Projects, View Resume, Contact (NO DOWNLOAD BUTTON) */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => handleScroll('projects')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide flex items-center gap-2.5 shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll('resume')}
              className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-semibold text-sm tracking-wide flex items-center gap-2.5 transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Resume</span>
            </button>

            <a
              href={`mailto:${header.contact.email}`}
              className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-300"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/10 w-full max-w-xl text-sm text-zinc-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500">Connect:</span>
            <a 
              href={header.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-sky-300 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <span className="text-zinc-600">•</span>
            <a 
              href={header.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-sky-300 transition-colors font-medium"
            >
              GitHub
            </a>
            <span className="text-zinc-600">•</span>
            <a 
              href={`mailto:${header.contact.email}`} 
              className="hover:text-sky-300 transition-colors font-medium"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean 3D Card featuring me1.png (5 Cols) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-gradient-to-tr from-sky-500/15 to-indigo-500/15 blur-3xl pointer-events-none"></div>

          {/* 3D Interactive Tilt Card with me1.png */}
          <div 
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden border border-white/15 bg-[#10111A]/80 backdrop-blur-xl shadow-2xl group"
          >
            {/* Card Visual with me1.png */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
              <img
                src="/me1.png"
                alt="Bodduru Mourya"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Subtle Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#10111A] via-[#10111A]/70 to-transparent"></div>

              {/* Clean Bottom Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white leading-tight">{header.name}</div>
                  <div className="text-xs text-sky-400 font-medium">{header.title}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-xs border border-sky-500/30">
                  BM
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Clean Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-sky-300 transition-colors cursor-pointer"
        onClick={() => handleScroll('about')}
      >
        <span className="text-xs tracking-wider uppercase font-medium">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
      </motion.div>
    </section>
  );
}

export default DarkHero;
