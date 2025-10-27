import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-[#0b0b0b] text-white">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a0b1f]/80 via-[#110a18]/40 to-black/80" />
      </div>

      {/* Decorative rocking visual (animated vinyl gradient) */}
      <div className="pointer-events-none absolute right-6 top-24 hidden h-48 w-48 select-none items-center justify-center sm:flex md:right-10 md:top-20 md:h-56 md:w-56">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(at_50%_50%,#ff6f61_0deg,#a855f7_120deg,#ec4899_240deg,#ff6f61_360deg)] opacity-80" />
          <div className="absolute inset-3 rounded-full bg-black/70 backdrop-blur" />
          <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs tracking-widest text-white/80">ROCK • GROOVE • MOVE</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          DVIJA FITNESS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-lg text-gray-200 sm:text-xl"
        >
          Move. Groove. Transform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full bg-[#FF6F61] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#ff806f] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/70"
          >
            Join Now
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/60 hover:bg-white/20"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
