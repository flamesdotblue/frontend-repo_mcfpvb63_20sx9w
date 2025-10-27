import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import DanceForms from './components/DanceForms';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      {/* Hero with animated Spline cover */}
      <Hero />

      {/* About with events highlight */}
      <About />

      {/* Dance styles grid with hover animations */}
      <DanceForms />

      {/* Contact form, address and socials */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0b0b] py-8 text-gray-300">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#dance-forms" className="transition hover:text-white">Dance Forms</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <p className="text-xs text-gray-400">© 2025 DVIJA FITNESS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
