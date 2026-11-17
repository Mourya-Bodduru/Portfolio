import React from 'react';
import Dark3DBackground from './Dark3DBackground';
import DarkNavbar from './DarkNavbar';
import DarkHero from './DarkHero';
import DarkAbout from './DarkAbout';
import DarkProjects from './DarkProjects';
import DarkExperience from './DarkExperience';
import DarkSkills from './DarkSkills';
import DarkAchievements from './DarkAchievements';
import DarkResume from './DarkResume';
import DarkFooter from './DarkFooter';

function DarkPortfolio({ onToggleTheme, currentTheme = 'dark', onNavigate, currentRoute = 'home' }) {
  return (
    <div className="relative w-full min-h-screen bg-[#070709] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* 3D Cyber Particle & Polyhedron Background */}
      <Dark3DBackground />

      {/* Futuristic Floating Glass Navbar with Theme Toggle */}
      <DarkNavbar 
        onToggleTheme={onToggleTheme} 
        currentTheme={currentTheme} 
        onNavigate={onNavigate}
        currentRoute={currentRoute}
      />

      {/* Main Dark Theme Unique Content */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Hero Section featuring me1.png */}
        <DarkHero onNavigate={onNavigate} />

        {/* Biometric Dossier / Identity section featuring me.png */}
        <DarkAbout />

        {/* 3D Spatial Projects Deck */}
        <DarkProjects />

        {/* Mission Operations Timeline with GMR C-Suite Recognition */}
        <DarkExperience />

        {/* Technical Capabilities Matrix */}
        <DarkSkills />

        {/* Accolades & SIH 2024 Showcase */}
        <DarkAchievements onNavigate={onNavigate} />

        {/* Technical Resume & Documentation Deck */}
        <DarkResume />

        {/* High-Tech Cyber Spatial Footer */}
        <DarkFooter onNavigate={onNavigate} />
      </div>

    </div>
  );
}

export default DarkPortfolio;