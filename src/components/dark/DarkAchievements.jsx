import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Sparkles, Maximize2, X, ArrowRight, ShieldCheck, Users, Hash } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkAchievements({ onNavigate }) {
  const { achievementPosts = [] } = resumeData;
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="achievements-dark" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 z-10">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-amber-400"></span>
              <span>SECTION 06 // VAULT OF ACCOLADES</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
              MAJOR <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">HONORS</span> & RECOGNITIONS
            </h2>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('achievements')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] cursor-pointer"
          >
            <span>VIEW COMPLETE GALLERY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Featured Achievements Cards */}
        <div className="flex flex-col gap-10">
          {achievementPosts.map((post, idx) => {
            const isSIH = post.slug === 'sih-2024';

            return (
              <motion.article
                key={post.id || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`p-6 sm:p-8 md:p-10 rounded-3xl backdrop-blur-2xl border transition-all duration-500 ${
                  isSIH 
                    ? 'bg-gradient-to-br from-[#18130B]/90 via-[#0F0D15]/90 to-[#0A0A10]/90 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.2)]' 
                    : 'bg-[#0E0C12]/90 border-cyan-500/30 hover:border-cyan-400/50 shadow-xl'
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  
                  {/* Visual Column */}
                  {post.image ? (
                    <div className="w-full lg:w-[46%] shrink-0">
                      <div 
                        onClick={() => setSelectedImage({ src: post.image, title: post.title })}
                        className="group relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl cursor-pointer bg-black/60"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-auto max-h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-amber-500/90 text-black text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                          <Trophy className="w-3.5 h-3.5" />
                          <span>1ST PLACE WINNER</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>EXPAND PHOTO</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full lg:w-[46%] shrink-0 aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#120D1A] via-[#1A1224] to-[#0A0710] border border-cyan-500/30 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-xl">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 flex items-center justify-center mb-4">
                        <Award className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-1">
                        {post.category || 'Executive Recognition'}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white uppercase">
                        {post.organization || post.title}
                      </h4>
                      <span className="text-xs font-mono text-zinc-400 mt-2">
                        {post.recognizedBy || 'C-Suite Commendation'}
                      </span>
                    </div>
                  )}

                  {/* Narrative & Details Column */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Badge Row */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {post.badge || 'National Recognition'}
                        </span>
                        {post.date && (
                          <span className="text-xs font-mono text-zinc-400">
                            DATE: {post.date}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                        {post.title}
                      </h3>

                      {/* Specs Row */}
                      <div className="my-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {post.prize && (
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                              ₹
                            </div>
                            <div>
                              <div className="text-[10px] font-mono uppercase text-zinc-400">Cash Award</div>
                              <div className="text-sm font-mono font-bold text-emerald-400">{post.prize}</div>
                            </div>
                          </div>
                        )}
                        {post.recognizedBy && (
                          <div className="flex items-center gap-2.5 sm:col-span-2">
                            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                              <Award className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[10px] font-mono uppercase text-zinc-400">Honored By</div>
                              <div className="text-sm font-mono font-bold text-amber-300">{post.recognizedBy}</div>
                            </div>
                          </div>
                        )}
                        {post.team && (
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                              <Users className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[10px] font-mono uppercase text-zinc-400">Team / Dept</div>
                              <div className="text-sm font-mono font-bold text-zinc-200">{post.team}</div>
                            </div>
                          </div>
                        )}
                        {post.psid && (
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center">
                              <Hash className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[10px] font-mono uppercase text-zinc-400">Ministry PSID</div>
                              <div className="text-sm font-mono font-bold text-purple-300">{post.psid}</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-6">
                        {post.description}
                      </p>
                    </div>

                    {/* Tags */}
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {post.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-400"
                          >
                            #{tag.replace(/\s+/g, '')}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 p-2 cursor-pointer transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-mono font-bold text-base sm:text-lg">
                  {selectedImage.title}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-mono">
                  Smart India Hackathon 2024 Software Edition Winner Cheque Presentation
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default DarkAchievements;