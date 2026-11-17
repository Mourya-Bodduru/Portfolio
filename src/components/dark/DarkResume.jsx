import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, Terminal, Eye, X } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkResume() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Terminal Header */}
        <div className="w-full p-8 sm:p-12 rounded-3xl bg-[#0D0D14]/90 border border-white/10 backdrop-blur-2xl flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.7)]">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
            <FileText className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
            // DOCUMENTATION ARCHIVE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
            CURRICULUM VITAE & TECHNICAL RESUME
          </h2>

          <p className="text-zinc-300 max-w-xl text-sm sm:text-base font-normal mb-8">
            Detailed breakdown of production engineering experience, hackathon victories, academic performance, and verified skill sets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all duration-300 cursor-pointer"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{isOpen ? 'CLOSE VIEWER' : 'INSPECT RESUME IN-BROWSER'}</span>
            </button>

            <a
              href="/resume.pdf"
              download="Bodduru_Mourya_Resume.pdf"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF FILE</span>
            </a>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full mt-8 overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0B0B10] shadow-[0_0_60px_rgba(0,242,254,0.2)]"
            >
              <div className="p-4 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-white font-bold">VIEWER // RESUME.PDF</span>
                </div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-300 hover:underline"
                >
                  <span>FULLSCREEN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="w-full h-[650px] sm:h-[850px] bg-zinc-900">
                <iframe
                  src="/resume.pdf#view=FitH"
                  title="Bodduru Mourya Resume"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default DarkResume;