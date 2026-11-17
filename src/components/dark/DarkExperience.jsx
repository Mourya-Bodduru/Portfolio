import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkExperience() {
  const { experience } = resumeData;

  return (
    <section id="experience-dark" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 z-10">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none"></div>

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
            <span>SECTION 04 // OPERATIONAL TIMELINE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            ENTERPRISE <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">IMPACT</span> & CAREER
          </h2>
        </motion.div>

        {/* Cyber Timeline Feed */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-12 flex flex-col gap-12 sm:gap-16">
          
          {experience.map((exp, index) => {
            const isGMR = exp.company.toLowerCase().includes('gmr');

            return (
              <motion.div
                key={exp.id || index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Circuit Node Indicator */}
                <div className={`absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isGMR 
                    ? 'border-amber-400 bg-amber-950 shadow-[0_0_20px_#F59E0B]' 
                    : 'border-cyan-400 bg-black group-hover:bg-cyan-500/20 shadow-[0_0_15px_#00F2FE]'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isGMR ? 'bg-amber-400 animate-ping' : 'bg-cyan-400'}`}></div>
                </div>

                {/* Timeline Card */}
                <div className={`p-6 sm:p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-500 ${
                  isGMR 
                    ? 'bg-gradient-to-br from-[#16120D] to-[#0E0C09] border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.15)]' 
                    : 'bg-[#0D0D14]/85 border-white/10 hover:border-cyan-500/40 shadow-xl'
                }`}>
                  
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${
                        isGMR 
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                      }`}>
                        // MISSION 0{index + 1}
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Company & Role */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-sm sm:text-base font-mono text-cyan-400 font-semibold mb-4">
                    {exp.title}
                  </div>

                  {/* Special Callout for GMR Executive Recognition */}
                  {isGMR && (
                    <div className="mb-6 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-mono text-amber-200">
                        <span className="font-bold text-white uppercase">Executive Commendation:</span> Recognized by CEO, COO, CDO & Department HODs for delivering real-time operational systems.
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 text-sm sm:text-base text-zinc-300 font-normal">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="text-cyan-400 font-bold mt-1">▹</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default DarkExperience;