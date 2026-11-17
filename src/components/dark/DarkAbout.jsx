import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Globe, GraduationCap } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkAbout() {
  const { header, summary, languages, education } = resumeData;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const currentEducation = education[0] || { degree: 'Bachelor of Technology', institution: 'GMR Institute of Technology' };

  return (
    <section id="about" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3D Tilt Card with me.png (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
            onMouseMove={handleMouseMove}
          >
            <div 
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-[360px] sm:max-w-[380px] rounded-3xl overflow-hidden border border-white/15 bg-[#10111A]/80 backdrop-blur-xl shadow-2xl group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                <img
                  src="/me.png"
                  alt="Bodduru Mourya"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#10111A] via-[#10111A]/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">Bodduru Mourya</span>
                    <span className="text-xs text-sky-400 font-medium">{currentEducation.institution}</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    B.Tech
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Summary & Real Details (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
              Passionate about building scalable, secure, and impactful software solutions.
            </h3>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8">
              {summary}
            </p>

            {/* Factual Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#11121A]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase font-medium">Role</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{header.title}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#11121A]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase font-medium">Education</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{currentEducation.degree}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#11121A]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase font-medium">Location</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Andhra Pradesh, India</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#11121A]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase font-medium">Languages</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{languages.join(', ')}</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default DarkAbout;
