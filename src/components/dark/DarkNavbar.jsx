import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkNavbar({ onToggleTheme, currentTheme = 'dark', onNavigate, currentRoute = 'home' }) {
  const { header } = resumeData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Dossier', id: 'about-dark' },
    { label: 'Projects', id: 'projects-dark' },
    { label: 'Timeline', id: 'experience-dark' },
    { label: 'Matrix', id: 'skills-dark' },
    { label: 'Accolades', route: 'achievements' }
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.route === 'achievements') {
      if (onNavigate) onNavigate('achievements');
      else window.location.hash = '#/achievements';
    } else {
      if (onNavigate) {
        onNavigate('home', link.id);
      } else {
        const el = document.getElementById(link.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 py-4 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Terminal Node (Left) */}
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home', 'home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D0D14]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00F2FE]"></span>
          <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white uppercase group-hover:text-cyan-400 transition-colors">
            MOURYA <span className="text-cyan-400">//</span> 01
          </span>
          <span className="hidden md:inline text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            SYSTEM ONLINE
          </span>
        </a>

        {/* Centered Futuristic Glass Pill Menu (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0D0D14]/85 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.id || link.route}`}
              onClick={(e) => handleLinkClick(e, link)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 ${
                link.route === 'achievements' && currentRoute === 'achievements'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls (Right): Theme Toggle & Connect */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-200 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] cursor-pointer"
            title="Switch back to Light Theme"
          >
            <Sun className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-500" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase hidden sm:inline text-amber-200">
              LIGHT THEME
            </span>
          </button>

          {/* Contact / Terminal Link */}
          <a
            href={`mailto:${header.contact.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,242,254,0.15)] hover:shadow-[0_0_25px_rgba(0,242,254,0.3)]"
          >
            <span>TRANSMIT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#0D0D14]/80 text-white border border-white/10 hover:border-cyan-500/40"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-md mx-auto rounded-3xl bg-[#09090E]/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl flex flex-col gap-2"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
              <span>SYSTEM NAVIGATION</span>
              <span className="text-cyan-400">STATUS: ACTIVE</span>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.id || link.route}`}
                onClick={(e) => handleLinkClick(e, link)}
                className="flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-mono text-zinc-200 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              >
                <span>// 0{idx + 1} {link.label.toUpperCase()}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleTheme();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30"
              >
                <Sun className="w-4 h-4" />
                <span>SWITCH TO LIGHT THEME</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default DarkNavbar;