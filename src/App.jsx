import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Bio from './components/Bio';
import QuoteSection from './components/QuoteSection';
import EnergyBackground from './components/EnergyBackground';
import ResumeViewer from './components/ResumeViewer';
import { resumeData } from './data/resumeData';

function App() {
  const { header } = resumeData;
  const firstName = header.name.split(' ')[0] || header.name;
  const lastName = header.name.split(' ').slice(1).join(' ') || '';

  useEffect(() => {
    // Prevent Right Click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Prevent Print Screen / Copy Shortcuts
    const handleKeyDown = (e) => {
      if (
        e.key === 'PrintScreen' || 
        (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'c')) ||
        (e.metaKey && (e.key === 'p' || e.key === 's' || e.key === 'c' || e.shiftKey)) // MacOS Cmd+Shift+3/4/5
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full bg-[var(--color-primary)] text-[var(--color-text-dark)] min-h-screen font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      
      {/* 3D Scroll-Reactive Energy Particle Field (Concept 1) */}
      <EnergyBackground />

      <Navbar />

      {/* Hero Section with 3D Background */}
      <div id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* 3D Background - absolute behind text */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Hero3D />
        </div>
        
        {/* Hero Content (Includes its own background image now) */}
        <div className="relative z-10 w-full h-full">
          <About />
        </div>
      </div>

      {/* Dedicated Bio/About Section */}
      <Bio />

      {/* Main Content Sections */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-32 pt-8 md:pt-16 flex flex-col gap-16 md:gap-24">
        <div id="projects"><Projects /></div>

        <QuoteSection />

        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
      </div>

      {/* Resume Section Above Footer */}
      <div className="relative w-full bg-[var(--color-primary)] z-10">
        <ResumeViewer />
      </div>

      {/* Spylt-Inspired Footer */}
      <footer className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between bg-[#111111] text-[#FDF1E7] pt-12 pb-6 px-6 md:px-12 font-sans z-20">
        
        {/* Background Image (Kept for consistency with the dark vibe, but lowered opacity) */}
        <div className="absolute inset-0 z-0">
      
          <div className="absolute inset-0 bg-[#111111]/80"></div>
        </div>

        {/* Top Header Row */}
        <div className="relative z-10 w-full flex justify-between items-start">
          {/* Logo (Top Left) */}
          
        </div>

        {/* Massive Center Hashtag */}
        <div className="relative z-10 w-full text-center mt-8 md:mt-0 pointer-events-none">
          <h1 className="text-[10vw] md:text-[8vw] font-bold m-0 p-0 leading-none tracking-tighter opacity-95 uppercase font-sans">
            #Mourya Bodduru
          </h1>
        </div>

        {/* Circular Social Icons (Center below hashtag) */}
        <div className="relative z-10 w-full flex justify-center gap-4 mt-8">
          <a href={`mailto:${header.contact.email}`} aria-label="Email" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transform transition-all duration-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
          <a href={header.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transform transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href={header.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transform transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Middle Content Section (Columns and Newsletter) */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-start mt-auto pt-24 pb-32 gap-16 lg:gap-0">
          
          {/* Left Side: 3 Columns of Links */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-12 md:gap-24 text-sm font-medium opacity-80 w-full lg:w-auto">
            <div className="flex flex-col gap-3">
              <span className="opacity-50 mb-2 cursor-default uppercase text-xs tracking-wider">Navigation</span>
              <a href="#home" className="hover:text-[var(--color-accent)] transition-colors">Home</a>
              <a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[var(--color-accent)] transition-colors">Experience</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="opacity-50 mb-2 cursor-default uppercase text-xs tracking-wider">Details</span>
              <a href="#skills" className="hover:text-[var(--color-accent)] transition-colors">Skills</a>
              <a href="#education" className="hover:text-[var(--color-accent)] transition-colors">Education</a>
              <span className="cursor-default">Resume</span>
            </div>
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
              <span className="opacity-50 mb-2 cursor-default uppercase text-xs tracking-wider">Connect</span>
              <a href={header.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">LinkedIn</a>
              <a href={header.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">GitHub</a>
              <a href={`mailto:${header.contact.email}`} className="hover:text-[var(--color-accent)] transition-colors">Email</a>
            </div>
          </div>

          {/* Right Side: */}
         

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center text-xs md:text-sm opacity-50 font-medium pt-6">
          <span>Copyright © 2026 {header.name} - All Rights Reserved</span>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
