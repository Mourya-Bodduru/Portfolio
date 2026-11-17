import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

function DarkNavbar({ onToggleTheme, onNavigate, currentRoute = 'home' }) {
  const { header } = resumeData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const firstName = header.name.split(' ')[0] || header.name;
  const lastName = header.name.split(' ').slice(1).join(' ') || '';

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Achievements', route: 'achievements' },
    { label: 'Resume', id: 'resume' },
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-12 py-4 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Name (Left) */}
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home', 'home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#11121A]/80 backdrop-blur-xl border border-white/10 hover:border-sky-400/50 transition-all duration-300 shadow-lg"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
          <span className="text-sm font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
            {firstName} <span className="text-sky-400">•</span> {lastName}
          </span>
        </a>

        {/* Centered Pill Menu (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#11121A]/85 backdrop-blur-xl border border-white/10 shadow-xl">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.id || link.route}`}
              onClick={(e) => handleLinkClick(e, link)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                link.route === 'achievements' && currentRoute === 'achievements'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Theme Toggle & Contact */}
        <div className="flex items-center gap-3">
          
          {/* Light Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-amber-500/15 hover:bg-amber-500/25 text-amber-200 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 shadow-md cursor-pointer"
            title="Switch back to Light Theme"
          >
            <Sun className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-500" />
            <span className="text-xs font-semibold tracking-wide hidden sm:inline text-amber-200">
              Light Theme
            </span>
          </button>

          {/* Contact Button */}
          <a
            href={`mailto:${header.contact.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-xs font-semibold transition-all"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#11121A]/80 text-white border border-white/10 hover:border-sky-400/40"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden mt-3 max-w-md mx-auto rounded-2xl bg-[#0E0F17]/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl flex flex-col gap-2"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-medium text-zinc-400">
              <span>Navigation</span>
              <span className="text-sky-400 font-bold">Dark Theme</span>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.id || link.route}`}
                onClick={(e) => handleLinkClick(e, link)}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm font-medium text-zinc-200 hover:text-sky-300 hover:bg-white/5 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleTheme();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/20 text-amber-200 text-xs font-semibold border border-amber-500/30"
              >
                <Sun className="w-4 h-4 text-amber-300" />
                <span>Switch to Light Theme</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default DarkNavbar;
