import React from 'react';
import Dark3DBackground from './Dark3DBackground';
import DarkNavbar from './DarkNavbar';
import DarkHero from './DarkHero';
import DarkAbout from './DarkAbout';
import DarkProjects from './DarkProjects';
import DarkQuote from './DarkQuote';
import DarkExperience from './DarkExperience';
import DarkSkills from './DarkSkills';
import DarkEducation from './DarkEducation';
import DarkResume from './DarkResume';
import DarkFooter from './DarkFooter';

function DarkPortfolio({ onToggleTheme, currentTheme = 'dark', onNavigate, currentRoute = 'home' }) {
  return (
    <div className="relative w-full min-h-screen bg-[#090A0F] text-white font-sans selection:bg-sky-500 selection:text-black overflow-x-hidden">
      
      {/* 3D Smooth Ambient Background */}
      <Dark3DBackground />

      {/* Clean Floating Navbar with Theme Switcher */}
      <DarkNavbar 
        onToggleTheme={onToggleTheme} 
        currentTheme={currentTheme} 
        onNavigate={onNavigate}
        currentRoute={currentRoute}
      />

      {/* Main Content Sections */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Hero Section featuring me1.png */}
        <DarkHero onNavigate={onNavigate} />

        {/* About Section featuring me.png */}
        <DarkAbout />

        {/* Featured Projects */}
        <DarkProjects />

        {/* Quote Section */}
        <DarkQuote />

        {/* Experience Timeline */}
        <DarkExperience />

        {/* Skills & Competencies */}
        <DarkSkills />

        {/* Education, Certifications & Achievements */}
        <DarkEducation onViewAllAchievements={() => onNavigate && onNavigate('achievements')} />

        {/* Resume Section (View-only, no download) */}
        <DarkResume />

        {/* Clean Modern Footer */}
        <DarkFooter onNavigate={onNavigate} />
      </div>

    </div>
  );
}

export default DarkPortfolio;
