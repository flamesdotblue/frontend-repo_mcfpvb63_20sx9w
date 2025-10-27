import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#1b1b1b] py-20 text-gray-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300"
        >
          At DVIJA FITNESS, we combine rhythm, movement, and passion to create a fitness experience that transforms body and soul. Join us to dance your way to joy, health, and self-expression.
        </motion.p>

        {/* Events highlight within About section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] via-[#151515] to-[#222] p-6 shadow-xl"
        >
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Events & Performances</h3>
          <p className="mt-2 max-w-3xl text-gray-300">
            We perform and organize dance events for weddings, cultural programs, school functions, and corporate shows. Bring energy and elegance to your special moments with DVIJA FITNESS.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4 text-center backdrop-blur-sm transition-transform hover:scale-[1.02]">
              <p className="text-[#FFD700]">Weddings</p>
              <p className="mt-1 text-sm text-gray-300">Sangeet nights and special choreography</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4 text-center backdrop-blur-sm transition-transform hover:scale-[1.02]">
              <p className="text-[#FFD700]">Cultural & School</p>
              <p className="mt-1 text-sm text-gray-300">Annual days, festivals and more</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4 text-center backdrop-blur-sm transition-transform hover:scale-[1.02]">
              <p className="text-[#FFD700]">Corporate</p>
              <p className="mt-1 text-sm text-gray-300">Team building and stage performances</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
