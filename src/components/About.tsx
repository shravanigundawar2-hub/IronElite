import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Shield, Trophy } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Personalized Goals',
    desc: 'Custom workout plans tailored to your specific body type and fitness objectives.'
  },
  {
    icon: Zap,
    title: 'High Intensity',
    desc: 'Push your limits with our advanced HIIT and strength training programs.'
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    desc: 'State-of-the-art equipment maintained to the highest safety and hygiene standards.'
  },
  {
    icon: Trophy,
    title: 'Expert Coaching',
    desc: 'Work with certified professionals who are dedicated to your transformation.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 max-w-[90%] mx-auto lg:mx-0 shadow-2xl shadow-brand-red/10">
              <img
                src="https://images.pexels.com/photos/6046978/pexels-photo-6046978.png?auto=compress&cs=tinysrgb&w=1280"
                alt="Gym Interior"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 bg-glass p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-brand-red/20">
              <p className="text-5xl font-display font-bold text-white mb-1">12+</p>
              <p className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">Years of Excellence</p>
            </div>
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-red/20 blur-[100px] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              WE DON'T JUST BUILD BODIES, <br />
              <span className="text-gray-500">WE BUILD CHARACTER.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              At Iron Elite, we believe that fitness is a journey of self-discovery. Our luxury facility provides the perfect environment for you to transcend your limits and achieve the extraordinary.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
