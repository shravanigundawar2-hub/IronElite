import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/10929340/pexels-photo-10929340.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl relative">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -top-10 -right-10 md:right-0 bg-glass p-4 rounded-2xl border border-brand-red/30 hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Top Rated Gym</p>
                <p className="text-[10px] text-gray-500">Voted #1 in NY 2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-red/20 text-brand-red text-sm font-bold tracking-widest mb-6 border border-brand-red/30">
              ELITE FITNESS DESTINATION
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6 tracking-tighter">
              WHERE <span className="text-brand-red">STRENGTH</span> <br />
              <span className="text-gradient">MEETS EXCELLENCE</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Unleash your potential with world-class trainers, state-of-the-art equipment, and a community built on grit and determination.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-16">
              <button className="group bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20">
                JOIN NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-4 text-white font-bold hover:text-brand-red transition-colors">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-red transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                WATCH STORY
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 flex flex-wrap gap-8 md:gap-12 bg-glass p-8 rounded-3xl max-w-fit"
          >
            <div className="relative">
              <p className="text-4xl md:text-5xl font-display font-bold text-white mb-1">15k+</p>
              <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">Members</p>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10 hidden md:block" />
            </div>
            <div className="relative">
              <p className="text-4xl md:text-5xl font-display font-bold text-white mb-1">50+</p>
              <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">Trainers</p>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10 hidden md:block" />
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display font-bold text-white mb-1">100+</p>
              <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">Programs</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  );
}
