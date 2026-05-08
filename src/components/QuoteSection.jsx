import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <div className="w-full relative z-10 py-4 md:py-8 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Floating Picture */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {/* Decorative background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-white/60 shadow-[0_10px_40px_rgba(37,99,235,0.15)] bg-white/40 backdrop-blur-md"
          >
            {/* Fallback state when image is not yet uploaded */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-6 text-white/50 -z-10 bg-[#1A1A1A]">
              <p className="text-sm">Please upload <strong>profile.jpg</strong> to your public folder.</p>
            </div>
            
            {/* Actual Image - Make sure the file exists in the public folder */}
            <img 
              src="/profile.png" 
              alt="Mourya Bodduru" 
              className="w-full h-full object-cover object-center relative z-10"
              onError={(e) => {
                e.target.style.display = 'none'; // Hide if not found, showing the fallback behind it
              }}
            />
          </motion.div>
        </div>

        {/* Right Side: Quote */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-[var(--color-accent)] opacity-20 absolute -top-6 -left-6 md:-top-8 md:-left-8 -z-10 rotate-180" />
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-[var(--color-text-dark)] font-serif-custom drop-shadow-sm">
              "Building scalable, secure, and impactful software solutions by turning complex problems into elegant code."
            </h2>
            
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-[2px] bg-[var(--color-accent)] rounded-full"></div>
              <span className="text-lg font-bold tracking-wide uppercase text-[var(--color-accent)]">
                Mourya Bodduru
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default QuoteSection;
