import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Trophy, Award, Sparkles, ArrowRight, Download, ChevronDown, Shield, Cpu, Flame } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkHero({ onNavigate }) {
  const { header } = resumeData;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden z-10"
    >
      {/* Background Cyber Ambient Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-cyan-500/15 via-purple-600/10 to-transparent rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Kinetic Cyber Typography & Pitch (7 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Cyber Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,242,254,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>REAL-TIME SYSTEMS ARCHITECT</span>
            <span className="text-zinc-600">|</span>
            <span className="text-amber-300 font-bold flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> SIH '24 WINNER
            </span>
          </div>

          {/* Massive Kinetic Hero Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-6">
            <span className="block font-sans text-zinc-300">BODDURU</span>
            <span className="block font-sans bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-400 drop-shadow-[0_0_35px_rgba(0,242,254,0.4)]">
              MOURYA
            </span>
          </h1>

          {/* Subtitle / Focus */}
          <div className="flex items-center gap-3 font-mono text-sm sm:text-base md:text-lg text-cyan-300/90 font-medium tracking-wide mb-6">
            <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>FULL STACK ENGINEER <span className="text-purple-400">×</span> BACKEND ARCHITECT</span>
          </div>

          {/* Narrative Summary */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
            Engineering scalable, secure, and production-grade software ecosystems. Grand Finale Winner of the <span className="text-amber-300 font-semibold underline decoration-amber-400/50 underline-offset-4">Smart India Hackathon 2024</span> and recognized by executive leadership at <span className="text-cyan-300 font-semibold">GMR Aero Technic</span> for deploying live operational web applications.
          </p>

          {/* Live System Capabilities Pill Deck */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['React 19', 'Python', 'FastAPI / Django', 'Node.js', 'MongoDB', 'Real-Time WebSockets', 'Cloud Architecture'].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* High-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects-dark"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('projects-dark');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-mono font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:shadow-[0_0_45px_rgba(0,242,254,0.6)] transition-all duration-300 cursor-pointer"
            >
              <span>EXPLORE SYSTEMS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => onNavigate && onNavigate('achievements')}
              className="px-7 py-4 rounded-xl bg-[#0F0F17]/90 hover:bg-[#151522] text-amber-300 border border-amber-500/40 hover:border-amber-400 font-mono font-bold text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>ACCOLADES // SIH '24</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
              title="Download Resume PDF"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Stats Telemetry Row */}
          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-xl">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">1st</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mt-1">SIH '24 Champion</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-amber-300">₹1L</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Grand Finale Prize</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-purple-400">07+</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Production Systems</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Spatial Holographic Portrait with me1.png (5 Cols) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Rotating 3D Holographic Orbit Ring Behind Image */}
          <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-cyan-500/20 pointer-events-none animate-[spin_25s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#00F2FE]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_#9D4EDD]"></div>
          </div>

          <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-purple-500/25 pointer-events-none animate-[spin_18s_linear_infinite_reverse]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_15px_#2DD4BF]"></div>
          </div>

          {/* Interactive 3D Perspective Card Container */}
          <div 
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 14}deg) rotateX(${-mousePos.y * 14}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="relative w-full max-w-[380px] sm:max-w-[430px] rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#0B0B12]/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,242,254,0.25)] group"
          >
            {/* Holographic Top Bar */}
            <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-zinc-300 font-bold">PORTRAIT // ME1.RAW</span>
              </div>
              <span className="text-cyan-400 font-bold">LEVEL 5 CLEARANCE</span>
            </div>

            {/* Image Stage featuring me1.png */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
              {/* Radial gradient backing for portrait */}
              <div className="absolute inset-0 bg-radial-gradient from-cyan-900/30 via-black to-black opacity-60"></div>
              
              <img
                src="/me1.png"
                alt="Bodduru Mourya - Full Stack Engineer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* High-tech Subtle Scanline Grid overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 242, 254, 0.15) 0px, transparent 1px, transparent 4px)',
                  backgroundSize: '100% 4px'
                }}
              ></div>

              {/* Bottom Vignette for seamless text blending */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B12] via-[#0B0B12]/80 to-transparent"></div>

              {/* Floating Overlaid HUD Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                <div className="p-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/15 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">Smart India Hackathon 2024</div>
                      <div className="text-[10px] font-mono text-amber-300">Grand Finale 1st Place Champion</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    ₹1,00,000
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Shield className="w-3.5 h-3.5" /> GMR Aero Technic
                  </span>
                  <span className="text-zinc-400">Executive Recognized</span>
                </div>
              </div>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute top-12 left-3 text-cyan-400 font-mono text-xs opacity-60 pointer-events-none">[+]</div>
            <div className="absolute top-12 right-3 text-cyan-400 font-mono text-xs opacity-60 pointer-events-none">[+]</div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 flex flex-col items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer"
        onClick={() => {
          const el = document.getElementById('about-dark');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] font-mono uppercase tracking-widest">INITIALIZE SYSTEM DOSSIER</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </motion.div>
    </section>
  );
}

export default DarkHero;