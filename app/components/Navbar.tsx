"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[150] px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100">
      {/* Logo Placeholder */}
      <div className="text-xl font-black text-slate-900 tracking-tighter">
        DR. <span className="text-brand-blue">GK.</span>
      </div>

      {/* Desktop Links (Hidden on Mobile) */}
      <div className="hidden md:flex gap-8 items-center font-semibold text-slate-600">
        <a href="#home" className="hover:text-brand-blue transition-colors">Home</a>
        <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
        <a href="#research" className="hover:text-brand-blue transition-colors">Research</a>
      </div>

      {/* RE-STYLED HAMBURGER ICON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[200] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
      >
        {/* Top Line */}
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className={`w-6 h-[2px] bg-slate-900 rounded-full transition-colors ${isOpen ? 'bg-brand-blue' : 'group-hover:bg-brand-blue'}`}
        />
        {/* Middle Line (Fades out) */}
        <motion.span 
          animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="w-6 h-[2px] bg-slate-900 rounded-full"
        />
        {/* Bottom Line */}
        <motion.span 
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className={`w-6 h-[2px] bg-slate-900 rounded-full transition-colors ${isOpen ? 'bg-brand-blue' : 'group-hover:bg-brand-blue'}`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-2xl font-bold text-slate-900 shadow-2xl"
          >
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#research" onClick={() => setIsOpen(false)}>Research</a>
            <button className="px-8 py-3 bg-brand-blue text-white rounded-full text-lg">Contact Me</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}