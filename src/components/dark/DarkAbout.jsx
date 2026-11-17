import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Award, Trophy, Cpu, Code2, Sparkles, BookOpen, UserCheck, ShieldCheck } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkAbout() {
  const { summary, education } = resumeData;
  const [activeTab, setActiveTab] = useState('ethos');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const tabs = [
    { id: 'ethos', label: '// 01. ENGINEERING ETHOS', icon: Cpu },
    { id: 'milestones', label: '// 02. KEY RECOGNITIONS', icon: Trophy },
    { id: 'academics', label: '// 03. ACADEMIC DOSSIER', icon: BookOpen }
  ];

  return (
    <section id="about-dark" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 z-10">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            <span>SECTION 02 // ARCHITECTURAL DOSSIER</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            BIOMETRIC <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">IDENTITY</span> & ETHOS
          </h2>
        </motion.div>

        {/* 2-Column High-Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Holographic ID Card with me.png (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
            onMouseMove={handleMouseMove}
          >
            <div 
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-[390px] rounded-3xl overflow-hidden border border-purple-500/30 bg-[#0C0C14]/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(157,78,221,0.25)] group"
            >
              {/* Card Header Telemetry */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                  <span className="text-zinc-200 font-bold">DOSSIER // ME.RAW</span>
                </div>
                <span className="text-purple-300 font-mono">AGENT ID #BM-2026</span>
              </div>

              {/* Portrait Image Stage featuring me.png */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                <img
                  src="/me.png"
                  alt="Bodduru Mourya Dossier"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Animated Laser Scanning Line */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00F2FE] pointer-events-none animate-[bounce_4s_infinite]"></div>

                {/* Subtle Digital Grid Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #00F2FE 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                ></div>

                {/* Bottom Gradient Fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0C0C14] via-[#0C0C14]/80 to-transparent"></div>

                {/* Overlaid Identity Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-mono font-bold text-white uppercase">Bodduru Mourya</div>
                      <div className="text-[11px] font-mono text-cyan-300">GMR Institute of Technology</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold text-xs border border-cyan-500/30">
                      BM
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>SECURITY: CLEAR</span>
                    <span className="text-emerald-400">ACTIVE CONTRIBUTOR</span>
                  </div>
                </div>
              </div>

              {/* HUD Target Brackets */}
              <div className="absolute top-14 left-3 font-mono text-xs text-purple-400 opacity-60 pointer-events-none">[+]</div>
              <div className="absolute top-14 right-3 font-mono text-xs text-purple-400 opacity-60 pointer-events-none">[+]</div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Dossier & Interactive Tabs (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Title Statement */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
              Engineering high-performance software at the convergence of <span className="text-cyan-400">scalable architectures</span> and <span className="text-purple-400">real-time engineering</span>.
            </h3>

            {/* Core Summary Paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8">
              {summary}
            </p>

            {/* Interactive Tab Navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 max-w-xl">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label.split('.')[1]}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display */}
            <div className="p-6 rounded-2xl bg-[#0F0F17]/80 border border-white/10 shadow-xl min-h-[190px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTab === 'ethos' && (
                  <motion.div
                    key="ethos"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      // CORE PHILOSOPHY & WORKFLOW
                    </div>
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      Focusing on resilient systems design, clean software architecture (SDLC), and low-latency data pipelines. Dedicated to solving mission-critical problems with modern frontend frameworks and hardened backend APIs.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      {['Clean Architecture', 'Real-Time Sync', 'Modular APIs', 'Performance Tuning'].map((pill, i) => (
                        <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-zinc-400 border border-white/10">
                          #{pill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'milestones' && (
                  <motion.div
                    key="milestones"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                      // HIGHLIGHT RECOGNITIONS
                    </div>
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div className="text-sm text-zinc-300">
                        <span className="font-bold text-white">Smart India Hackathon 2024 National Winner:</span> 1st Place Champion solving PSID-1699 with Team Aavishkar, awarded ₹1,00,000.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <div className="text-sm text-zinc-300">
                        <span className="font-bold text-white">GMR Aero Technic C-Suite Recognition:</span> Commended by CEO, COO, CDO & HODs for delivering live operational web systems.
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'academics' && (
                  <motion.div
                    key="academics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2.5"
                  >
                    <div className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                      // ACADEMIC DOSSIER
                    </div>
                    {education.map((edu) => (
                      <div key={edu.id} className="flex items-center justify-between py-1.5 border-b border-white/5 text-sm">
                        <div>
                          <span className="font-bold text-white">{edu.degree}</span>
                          <span className="text-zinc-400 text-xs ml-2">({edu.institution})</span>
                        </div>
                        <span className="font-mono text-xs text-cyan-300 font-semibold">{edu.duration} • {edu.details}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default DarkAbout;