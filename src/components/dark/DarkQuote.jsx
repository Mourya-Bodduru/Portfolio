import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

function DarkQuote() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 sm:p-12 rounded-3xl bg-[#10111A]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Backing */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left: Floating Picture */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#151624]"
            >
              <img 
                src="/profile.png" 
                alt="Mourya Bodduru" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          </div>

          {/* Right: Quote Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <Quote className="w-10 h-10 text-sky-400 opacity-20 mb-4 rotate-180" />
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed text-zinc-100 font-serif-custom">
                "Building scalable, secure, and impactful software solutions by turning complex problems into elegant code."
              </h2>
              
              <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-[2px] bg-sky-400 rounded-full"></div>
                <span className="text-sm font-bold tracking-wider uppercase text-sky-400">
                  Mourya Bodduru
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DarkQuote;
