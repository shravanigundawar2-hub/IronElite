import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus Thorne',
    role: 'Head Strength Coach',
    image: 'https://images.pexels.com/photos/31918834/pexels-photo-31918834.jpeg',
    socials: ['instagram', 'twitter', 'linkedin']
  },
  {
    name: 'Elena Rodriguez',
    role: 'HIIT Specialist',
    image: 'https://images.pexels.com/photos/6572562/pexels-photo-6572562.jpeg',
    socials: ['instagram', 'twitter']
  },
  {
    name: 'David Chen',
    role: 'Bodybuilding Pro',
    image: 'https://images.pexels.com/photos/32085164/pexels-photo-32085164.jpeg',
    socials: ['instagram', 'linkedin']
  },
  {
    name: 'Sarah Jenkins',
    role: 'Nutrition & Wellness',
    image: 'https://images.pexels.com/photos/20044146/pexels-photo-20044146.jpeg',
    socials: ['instagram', 'twitter', 'linkedin']
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Expert Team
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              MEET YOUR <span className="text-brand-red">MENTORS</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-brand-black border border-white/5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-display font-bold mb-1">{trainer.name}</h3>
                <p className="text-brand-red text-sm font-medium mb-4 uppercase tracking-wider">{trainer.role}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-white hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="text-white hover:text-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="text-white hover:text-brand-red transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
