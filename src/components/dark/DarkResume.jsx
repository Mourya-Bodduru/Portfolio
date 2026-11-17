import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X } from 'lucide-react';

function DarkResume() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="resume" className="relative w-full py-20 px-4 sm:px-6 lg:px-12 z-10 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative group overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 sm:px-12 sm:py-5 flex items-center gap-3 text-white font-bold text-base sm:text-lg shadow-[0_0_35px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] transition-all duration-300 border border-white/15 cursor-pointer"
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5" />
              <span>Close Resume</span>
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              <span>View Resume</span>
            </>
          )}
        </motion.button>

        {/* In-Browser PDF Container */}
        <div className="w-full perspective-[2000px] mt-8">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, rotateX: -30, y: -40, scale: 0.95 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, rotateX: -30, y: -40, scale: 0.95 }}
                transition={{ 
                  type: 'spring', 
                  damping: 22, 
                  stiffness: 120,
                  mass: 1 
                }}
                className="w-full origin-top relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#10111A]"
              >
                {/* Header Bar */}
                <div className="w-full bg-[#151624] px-6 py-4 flex justify-between items-center border-b border-white/10">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span className="font-medium text-sm">resume.pdf</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 bg-white/5 hover:bg-red-500/80 hover:text-white rounded-lg text-zinc-400 transition-colors cursor-pointer"
                    aria-label="Close Viewer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* PDF Viewer Iframe (toolbar disabled to prevent browser download) */}
                <div className="w-full h-[65vh] sm:h-[75vh] md:h-[85vh] bg-[#090A0F] relative">
                  <iframe
                    src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                    className="w-full h-full border-none relative z-10"
                    title="Bodduru Mourya Resume"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default DarkResume;
