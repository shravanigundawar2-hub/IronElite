import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Fox',
    role: 'Business Executive',
    content: "The atmosphere at Iron Elite is unmatched. It's not just a gym; it's a high-performance sanctuary. The trainers truly care about your progress.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Jane Cooper',
    role: 'Professional Athlete',
    content: "State-of-the-art equipment and elite coaching. I've seen more progress here in 3 months than I did in a year elsewhere.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Cody Fisher',
    role: 'Fitness Enthusiast',
    content: "The luxury amenities combined with the hardcore training vibe is exactly what I was looking for. Highly recommended!",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Guy Hawkins',
    role: 'Marathon Runner',
    content: "The endurance programs here are world-class. I've shaved 15 minutes off my personal best thanks to the strength training.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Leslie Alexander',
    role: 'Yoga Instructor',
    content: "Even as a yoga instructor, I find the recovery and mobility tools at Iron Elite to be essential for my practice. Truly elite.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-red)_1px,_transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              WHAT OUR <span className="text-brand-red">ELITES</span> SAY
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-black p-10 rounded-3xl border border-white/5 relative group hover:border-brand-red/30 transition-all duration-500"
            >
              <div className="absolute -top-5 left-10 w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/20">
                <Quote className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                ))}
              </div>
              
              <p className="text-gray-400 italic mb-8 leading-relaxed">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-brand-red/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-lg font-display font-bold">{item.name}</h4>
                  <p className="text-brand-red text-[10px] uppercase tracking-widest font-bold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
