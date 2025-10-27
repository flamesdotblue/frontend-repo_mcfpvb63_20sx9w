import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!/^\+?[0-9\-\s]{7,15}$/.test(form.phone)) e.phone = 'Valid phone required';
    if (form.message.trim().length < 10) e.message = 'Please add a few more details';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#0f0f0f] py-20 text-gray-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Get In Touch
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#151515] p-6 shadow-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-[#FF6F61]"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-[#FF6F61]"
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-300">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-[#FF6F61]"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-300">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-[#FF6F61]"
                  placeholder="Tell us about your goals or event..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#FF6F61] px-6 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:bg-[#ff806f]"
            >
              Send Inquiry
            </button>
            {submitted && (
              <p className="mt-3 text-sm text-green-400">Thanks! We will get back to you shortly.</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
              <h3 className="text-xl font-semibold text-white">Visit Us</h3>
              <p className="mt-2 text-gray-300">Chengicherla</p>
              <div className="mt-4 overflow-hidden rounded-xl">
                <iframe
                  title="Dvija Fitness Location"
                  src="https://www.google.com/maps?q=Chengicherla&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
              <h3 className="text-xl font-semibold text-white">Connect</h3>
              <div className="mt-3 flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-3 text-pink-400 transition hover:bg-white/20">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-3 text-blue-400 transition hover:bg-white/20">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 p-3 text-red-500 transition hover:bg-white/20">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
