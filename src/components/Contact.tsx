import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              READY TO START YOUR <br />
              <span className="text-brand-red">TRANSFORMATION?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have questions about our programs or memberships? Our team is here to help you take the first step towards excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6 bg-brand-dark p-6 rounded-2xl border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-1">Our Location</h4>
                <p className="text-gray-500">123 Elite Plaza, Fitness District, NY 10001</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6 bg-brand-dark p-6 rounded-2xl border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Phone className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-1">Phone Number</h4>
                <p className="text-gray-500">+1 (555) 000-1234</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-6 bg-brand-dark p-6 rounded-2xl border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-1">Email Address</h4>
                <p className="text-gray-500">hello@ironelite.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-6 bg-brand-dark p-6 rounded-2xl border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Clock className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-1">Opening Hours</h4>
                <p className="text-gray-500">Mon - Sat: 5:00 AM - 11:00 PM</p>
                <p className="text-gray-500">Sun: 7:00 AM - 8:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
