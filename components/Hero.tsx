import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE, SOCIALS } from '../constants';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const socialIcons: Record<string, React.ReactNode> = {
  'GitHub': <Github size={20} />,
  'LinkedIn': <Linkedin size={20} />,
  'Twitter': <Twitter size={20} />,
};

const Hero: React.FC = () => {
  const firstName = PROFILE.name.split(' ')[0].toUpperCase();
  const role = PROFILE.title.toUpperCase();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0f0518] px-6 lg:px-12 pt-20 lg:pt-0">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">

        {/* Left Content */}
        <div className="text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name Tag */}
            <div className="inline-block bg-[#1a0b2e] text-pink-400 text-xs font-bold tracking-[0.2em] px-3 py-1.5 rounded-sm uppercase mb-6 shadow-lg shadow-pink-900/10 border border-white/5">
              {PROFILE.name}
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-2 tracking-tight leading-none">
              HI! I'M {firstName}
            </h1>

            {/* Animated Role */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 mb-8 tracking-tight leading-none">
              {role}
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base md:text-lg mb-10 max-w-lg leading-relaxed border-l-2 border-pink-500/30 pl-4">
              {PROFILE.tagline} {PROFILE.about}
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-primary hover:bg-pink-600 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg shadow-pink-600/25 flex items-center gap-2"
              >
                GET IN TOUCH
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-[#1a0b2e] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    aria-label={social.platform}
                  >
                    {socialIcons[social.platform]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image & Effects */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md aspect-square flex items-center justify-center"
          >
            {/* Decorative Horizontal Lines Background (Circle Mask) */}
            <div className="absolute inset-0 rounded-full border border-white/10 flex flex-col items-center justify-center overflow-hidden opacity-30">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-full h-px bg-white/20 my-2" />
              ))}
            </div>

            {/* 3D Spheres */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-purple-800 to-black shadow-2xl shadow-pink-500/20 z-20"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-indigo-900 to-black shadow-2xl shadow-purple-500/20 z-20"
            />

            {/* Profile Image */}
            <div className="relative z-10 w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-[#1a0b2e] shadow-2xl flex items-center justify-center bg-[#0f0518]">
              <img
                src="https://i.imgur.com/hs0JyOF.png?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="w-full h-full object-cover object-center scale-105"
              />
              {/* Overlay Gradient for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;