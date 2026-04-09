import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-brand-red p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                IRON<span className="text-brand-red">ELITE</span>
              </span>
            </a>
            <p className="text-gray-500 leading-relaxed">
              The ultimate destination for those who seek excellence in their fitness journey. Join the elite community today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors group">
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#trainers" className="text-gray-500 hover:text-brand-red transition-colors">Our Trainers</a></li>
              <li><a href="#transformations" className="text-gray-500 hover:text-brand-red transition-colors">Transformations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest">Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-brand-red transition-colors">Strength Training</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-red transition-colors">Bodybuilding</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-red transition-colors">HIIT & Cardio</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-red transition-colors">Yoga & Wellness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-500 mb-6">Subscribe to get the latest fitness tips and elite offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="bg-brand-red hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-colors">
                GO
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Iron Elite Gym. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
