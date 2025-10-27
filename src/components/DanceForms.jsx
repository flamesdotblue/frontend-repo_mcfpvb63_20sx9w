import React from 'react';
import { motion } from 'framer-motion';
import { Music, Zap, Flame, Stars, HeartPulse } from 'lucide-react';

const styles = [
  {
    name: 'Zumba',
    icon: Zap,
    desc: 'High-energy dance workout that boosts stamina and burns calories.',
    benefits: ['Cardio fitness', 'Weight loss', 'Endorphin rush'],
  },
  {
    name: 'Hip-Hop',
    icon: Music,
    desc: 'Urban grooves with attitude, rhythm, and freestyle expression.',
    benefits: ['Coordination', 'Strength', 'Confidence'],
  },
  {
    name: 'Freestyle',
    icon: Flame,
    desc: 'Dynamic, improvisational moves that let your personality shine.',
    benefits: ['Creativity', 'Agility', 'Self-expression'],
  },
  {
    name: 'Bollywood',
    icon: Stars,
    desc: 'Vibrant, cinematic choreographies with infectious energy.',
    benefits: ['Rhythm', 'Fun', 'Stage presence'],
  },
  {
    name: 'Contemporary',
    icon: HeartPulse,
    desc: 'Fluid movements blending ballet, modern, and lyrical techniques.',
    benefits: ['Core strength', 'Flexibility', 'Emotion release'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const DanceForms = () => {
  return (
    <section id="dance-forms" className="w-full bg-[#121212] py-20 text-gray-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Dance Forms We Teach
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {styles.map(({ name, icon: Icon, desc, benefits }) => (
            <motion.div
              key={name}
              variants={item}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#1b1b1b] via-[#181818] to-[#232323] p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#FF6F61]/20 p-3 text-[#FF6F61]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{name}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-300">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {benefits.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-3 py-1 text-xs text-[#FFD700]"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-5 h-1 w-0 bg-gradient-to-r from-[#FF6F61] to-[#FFD700] transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DanceForms;
