import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#1a1a1a] to-[#2C2C2C] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1MH5ijGQRnLRtVUF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to enhance contrast without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#2C2C2C]/80" />
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
