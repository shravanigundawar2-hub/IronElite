import React from 'react';
import { motion } from 'motion/react';

const transformations = [
  {
    name: 'John Doe',
    time: '6 Months',
    desc: 'Lost 25kg and gained significant muscle mass.',
    before: 'https://images.pexels.com/photos/30283461/pexels-photo-30283461.jpeg',
    after: 'https://images.pexels.com/photos/30165254/pexels-photo-30165254.jpeg'
  },
  {
    name: 'Emily Smith',
    time: '4 Months',
    desc: 'Achieved peak athletic performance and core strength.',
    before: 'https://images.pexels.com/photos/32996770/pexels-photo-32996770.jpeg',
    after: 'https://images.pexels.com/photos/17959562/pexels-photo-17959562.jpeg'
  }
];

export default function Transformation() {
  return (
    <section id="transformations" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              REAL RESULTS, <br />
              <span className="text-gray-500">REAL PEOPLE</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md"
          >
            Witness the incredible journeys of our members who pushed their limits and transformed their lives at Iron Elite.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-brand-dark rounded-3xl p-8 border border-white/5 hover:border-brand-red/30 transition-all duration-500 group"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={item.before} alt="Before" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Before</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={item.after} alt="After" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-brand-red px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">After</div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-brand-red font-bold text-xl">{item.time}</p>
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest">Duration</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
