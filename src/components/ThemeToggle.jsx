import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';

function ThemeToggle({ theme = 'light', onToggle }) {
  const isDark = theme === 'dark';

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      aria-label="Theme Switcher"
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <button
        onClick={onToggle}
        className={`group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full backdrop-blur-2xl transition-all duration-500 shadow-2xl cursor-pointer ${
          isDark
            ? 'bg-[#12121A]/90 hover:bg-[#1C1C28] text-amber-300 border border-amber-500/40 hover:border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.25)]'
            : 'bg-black/90 hover:bg-black text-cyan-300 border border-cyan-400/40 hover:border-cyan-300 shadow-[0_0_30px_rgba(37,99,235,0.3)]'
        }`}
        title={isDark ? "Switch to Light Theme" : "Switch to 3D Cyber Dark Theme"}
        aria-label="Toggle Website Theme"
      >
        {/* Glow halo */}
        <span className={`absolute -inset-1 rounded-full opacity-40 blur-md group-hover:opacity-75 transition-opacity ${
          isDark ? 'bg-amber-500/30' : 'bg-cyan-500/40'
        }`}></span>

        <span className="relative flex items-center justify-center">
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-300 group-hover:rotate-90 transition-transform duration-700" />
          ) : (
            <Moon className="w-5 h-5 text-cyan-300 group-hover:-rotate-12 transition-transform duration-700" />
          )}
        </span>

        <span className="relative text-xs font-mono font-bold tracking-wider uppercase">
          {isDark ? 'LIGHT THEME' : 'DARK THEME'}
        </span>
      </button>
    </motion.aside>
  );
}

export default ThemeToggle;