import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Calendar, Users, CheckCircle2, ArrowLeft, Maximize2, X, Sparkles, Hash, IndianRupee, Building2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

function AchievementsPage({ onBack, theme = 'light' }) {
  const { achievementPosts = [] } = resumeData;
  const [selectedImage, setSelectedImage] = useState(null);
  const isDark = theme === 'dark';

  // Close image modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10 transition-colors duration-500 ${
      isDark ? 'text-white' : 'text-[var(--color-text-dark)]'
    }`}>
      
      {/* Top Navigation Bar: Back Link */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center justify-between"
      >
        <button
          onClick={onBack}
          className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group cursor-pointer border ${
            isDark 
              ? 'bg-white/10 hover:bg-white/15 text-white border-white/20' 
              : 'bg-[var(--color-text-dark)]/5 hover:bg-[var(--color-text-dark)]/10 text-[var(--color-text-dark)] border-[var(--color-text-dark)]/15'
          }`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <span className={`text-xs font-mono tracking-widest uppercase font-bold ${
          isDark ? 'text-cyan-400' : 'text-[var(--color-accent)]'
        }`}>
          {achievementPosts.length} Milestones Recorded
        </span>
      </motion.div>

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16 md:mb-20 text-center max-w-4xl mx-auto"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-6 border ${
          isDark 
            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' 
            : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/25'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>Honors, Hackathons & Posts</span>
        </div>

        <h1 className={`text-5xl sm:text-6xl md:text-8xl font-bold font-serif-custom italic leading-tight tracking-tight ${
          isDark ? 'text-white' : 'text-[var(--color-text-dark)]'
        }`}>
          Achievements <span className={`font-sans not-italic ${isDark ? 'text-cyan-400' : 'text-[var(--color-accent)]'}`}>&</span> Posts
        </h1>

        <p className={`mt-6 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-zinc-300' : 'text-[var(--color-text-dark)]/85'
        }`}>
          National hackathon championships, technical milestones, and documented recognitions earned through intense problem-solving and engineering.
        </p>

        {/* Quick Highlights Stats Pill Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className={`border rounded-2xl p-4 flex flex-col items-center ${
            isDark ? 'bg-white/[0.04] border-white/10' : 'bg-[var(--color-text-dark)]/5 border-[var(--color-text-dark)]/10'
          }`}>
            <span className={`text-2xl md:text-3xl font-extrabold ${isDark ? 'text-cyan-400' : 'text-[var(--color-accent)]'}`}>1st</span>
            <span className={`text-xs font-bold uppercase tracking-wider mt-1 ${isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/70'}`}>SIH 2024 Winner</span>
          </div>
          <div className={`border rounded-2xl p-4 flex flex-col items-center ${
            isDark ? 'bg-white/[0.04] border-white/10' : 'bg-[var(--color-text-dark)]/5 border-[var(--color-text-dark)]/10'
          }`}>
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-500">₹1,00,000</span>
            <span className={`text-xs font-bold uppercase tracking-wider mt-1 ${isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/70'}`}>Cash Prize Awarded</span>
          </div>
          <div className={`border rounded-2xl p-4 flex flex-col items-center ${
            isDark ? 'bg-white/[0.04] border-white/10' : 'bg-[var(--color-text-dark)]/5 border-[var(--color-text-dark)]/10'
          }`}>
            <span className="text-2xl md:text-3xl font-extrabold text-amber-500">C-Suite</span>
            <span className={`text-xs font-bold uppercase tracking-wider mt-1 ${isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/70'}`}>CEO, COO & CDO Honors</span>
          </div>
          <div className={`border rounded-2xl p-4 flex flex-col items-center ${
            isDark ? 'bg-white/[0.04] border-white/10' : 'bg-[var(--color-text-dark)]/5 border-[var(--color-text-dark)]/10'
          }`}>
            <span className={`text-2xl md:text-3xl font-extrabold ${isDark ? 'text-purple-400' : 'text-[var(--color-text-dark)]'}`}>GMR Aero</span>
            <span className={`text-xs font-bold uppercase tracking-wider mt-1 ${isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/70'}`}>Real-Time Projects</span>
          </div>
        </div>
      </motion.div>

      {/* Achievements Feed */}
      <div className="flex flex-col gap-16 md:gap-24">
        {achievementPosts.map((post, index) => {
          return (
            <motion.article
              key={post.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`backdrop-blur-md border rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                isDark 
                  ? 'bg-[#0E0C14]/90 border-white/10' 
                  : 'bg-white/40 border-[var(--color-text-dark)]/15'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
                
                {/* Left/Top: Image Container */}
                {post.image ? (
                  <div className="w-full lg:w-[48%] shrink-0">
                    <div 
                      onClick={() => setSelectedImage({ src: post.image, title: post.title })}
                      className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--color-text-dark)]/20 shadow-lg cursor-pointer bg-black/5"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto max-h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Winner Overlay Badge */}
                      {post.isWinner && (
                        <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                          <Trophy className="w-4 h-4 text-yellow-200" />
                          <span>Grand Finale Winner</span>
                        </div>
                      )}

                      {/* Click to expand badge */}
                      <div className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors opacity-90 group-hover:opacity-100">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full lg:w-[48%] shrink-0 aspect-[16/11] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1A110D] via-[#2A1C16] to-[#120B08] border border-amber-500/25 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-2xl text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 mb-4 shadow-lg">
                      <Award className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold mb-1">
                      {post.category || 'Executive Recognition'}
                    </span>
                    <h3 className="font-serif-custom italic text-2xl md:text-3xl font-bold text-[#FDF1E7] leading-tight">
                      {post.organization || post.title}
                    </h3>
                    <div className="mt-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90 font-semibold tracking-wide">
                      {post.recognizedBy || 'Leadership Commendation'}
                    </div>
                  </div>
                )}

                {/* Right/Bottom: Content Details */}
                <div className="flex-1 flex flex-col">
                  
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    {post.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-900 border border-amber-500/30">
                        <Trophy className="w-3.5 h-3.5 text-amber-600" />
                        {post.badge}
                      </span>
                    )}
                    {post.category && (
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)]/80 px-3 py-1 rounded-full bg-[var(--color-text-dark)]/5 border border-[var(--color-text-dark)]/15">
                        {post.category}
                      </span>
                    )}
                    {post.date && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-text-dark)]/70 px-2.5 py-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 ${
                    isDark ? 'text-white' : 'text-[var(--color-text-dark)]'
                  }`}>
                    {post.title}
                  </h2>

                  {/* Highlight Specs Pill Box */}
                  {(post.prize || post.team || post.psid || post.recognizedBy || post.organization) && (
                    <div className={`my-3 p-4 rounded-2xl border grid grid-cols-1 sm:grid-cols-3 gap-3 ${
                      isDark ? 'bg-white/[0.04] border-white/10' : 'bg-[var(--color-text-dark)]/5 border-[var(--color-text-dark)]/10'
                    }`}>
                      {post.prize && (
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-600/15 text-emerald-700'
                          }`}>
                            ₹
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[10px] uppercase tracking-wider font-bold ${
                              isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/60'
                            }`}>Prize</span>
                            <span className={`text-sm font-bold ${
                              isDark ? 'text-emerald-400' : 'text-emerald-800'
                            }`}>{post.prize}</span>
                          </div>
                        </div>
                      )}
                      {post.recognizedBy && (
                        <div className="flex items-center gap-2.5 sm:col-span-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-500/15 text-amber-700'
                          }`}>
                            <Award className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[10px] uppercase tracking-wider font-bold ${
                              isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/60'
                            }`}>Recognized By</span>
                            <span className={`text-sm font-bold ${
                              isDark ? 'text-amber-300' : 'text-amber-900'
                            }`}>{post.recognizedBy}</span>
                          </div>
                        </div>
                      )}
                      {post.organization && !post.recognizedBy && (
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-600/15 text-blue-700'
                          }`}>
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[10px] uppercase tracking-wider font-bold ${
                              isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/60'
                            }`}>Organization</span>
                            <span className={`text-sm font-bold ${
                              isDark ? 'text-zinc-200' : 'text-[var(--color-text-dark)]'
                            }`}>{post.organization}</span>
                          </div>
                        </div>
                      )}
                      {post.team && (
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            isDark ? 'bg-cyan-500/20 text-cyan-300' : 'bg-blue-600/15 text-blue-700'
                          }`}>
                            <Users className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[10px] uppercase tracking-wider font-bold ${
                              isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/60'
                            }`}>Department</span>
                            <span className={`text-sm font-bold ${
                              isDark ? 'text-zinc-200' : 'text-[var(--color-text-dark)]'
                            }`}>{post.team}</span>
                          </div>
                        </div>
                      )}
                      {post.psid && (
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-600/15 text-purple-700'
                          }`}>
                            <Hash className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[10px] uppercase tracking-wider font-bold ${
                              isDark ? 'text-zinc-400' : 'text-[var(--color-text-dark)]/60'
                            }`}>Problem ID</span>
                            <span className={`text-sm font-bold ${
                              isDark ? 'text-purple-300' : 'text-purple-900'
                            }`}>{post.psid}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div className={`mt-4 space-y-3 text-base sm:text-lg leading-relaxed font-medium ${
                    isDark ? 'text-zinc-300' : 'text-[var(--color-text-dark)]/90'
                  }`}>
                    {post.description.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlights Bullet List */}
                  {post.highlights && post.highlights.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-[var(--color-text-dark)]/10">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-dark)]/80 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Key Highlights
                      </h3>
                      <ul className="space-y-2.5">
                        {post.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--color-text-dark)]/85 font-medium">
                            <span className="text-[var(--color-accent)] font-bold mt-0.5">―</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  {post.tags && (
                    <div className="mt-6 flex flex-wrap gap-2 pt-4">
                      {post.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[var(--color-text-dark)]/5 text-[var(--color-text-dark)]/70 border border-[var(--color-text-dark)]/10"
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

      {/* Add More Achievements Prompt Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 p-8 md:p-12 rounded-[2rem] border-2 border-dashed border-[var(--color-text-dark)]/20 text-center flex flex-col items-center justify-center bg-white/20"
      >
        <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-4">
          <Trophy className="w-7 h-7" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] font-serif-custom italic">
          More Milestones In Progress
        </h3>
        <p className="mt-2 text-[var(--color-text-dark)]/80 max-w-md font-medium text-sm sm:text-base">
          Upcoming hackathons, competition wins, and technical project stories will be added here.
        </p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm hover:opacity-90 transition-all shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Portfolio</span>
        </button>
      </motion.div>

      {/* Lightbox Modal for Full Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 sm:right-2 text-white hover:text-amber-400 p-2 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/20"
              />
              
              <div className="mt-4 text-center">
                <p className="text-white font-bold text-base sm:text-lg">
                  {selectedImage.title}
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  Smart India Hackathon 2024 Grand Finale Stage Celebration • Click anywhere outside or press ESC to close
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default AchievementsPage;