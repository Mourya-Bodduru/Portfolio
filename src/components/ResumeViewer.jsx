import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X } from 'lucide-react';

const ResumeViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleResume = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 relative z-10 flex flex-col items-center">
      
      {/* Big Action Button */}
      <motion.button
        onClick={toggleResume}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 sm:px-12 sm:py-5 flex items-center gap-3 text-white font-bold text-lg sm:text-xl shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] border border-white/10"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
        
        {isOpen ? (
          <>
            <X className="w-6 h-6" />
            <span>Close Resume</span>
          </>
        ) : (
          <>
            <FileText className="w-6 h-6" />
            <span>View Resume</span>
          </>
        )}
      </motion.button>

      {/* 3D Animated PDF Container */}
      <div className="w-full perspective-[2000px] mt-8">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, rotateX: -60, y: -100, scale: 0.9 }}
              animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, rotateX: -60, y: -100, scale: 0.9 }}
              transition={{ 
                type: 'spring', 
                damping: 20, 
                stiffness: 100,
                mass: 1.2
              }}
              className="w-full origin-top relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1A1A1A]"
            >
              {/* Header Bar for the PDF */}
              <div className="w-full bg-[#222] p-4 flex justify-between items-center border-b border-white/10">
                <div className="flex items-center gap-2 text-white/80">
                  <FileText className="w-5 h-5" />
                  <span className="font-medium font-sans">resume.pdf</span>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={toggleResume}
                    className="p-2 bg-white/5 hover:bg-red-500/80 hover:text-white rounded-lg text-white/80 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer - Using Object/Iframe */}
              <div className="w-full h-[60vh] sm:h-[75vh] md:h-[85vh] bg-white/5 relative">
                {/* Fallback text if PDF doesn't load/doesn't exist yet */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 -z-10 px-6 text-center">
                  <FileText className="w-16 h-16 mb-4 opacity-20" />
                  <p>Loading PDF viewer...</p>
                  <p className="text-sm mt-2">If you haven't uploaded 'resume.pdf' to the public folder yet, it won't display.</p>
                </div>
                
                <iframe
                  src="/resume.pdf#toolbar=0&view=FitH"
                  className="w-full h-full border-none relative z-10"
                  title="Resume"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ResumeViewer;
