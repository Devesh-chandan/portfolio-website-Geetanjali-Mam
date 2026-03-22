"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Gallery", "Awards", "Book Chapters", "Research", "Conference", "Invited Talks", "Patents", "PhdStudents", "Contact"];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 left-8 z-[110] p-4 bg-white/80 backdrop-blur-md rounded-2xl text-slate-900 border border-slate-200 shadow-xl hover:bg-white transition-all"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[120]"
            />

            <motion.div 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 h-full w-80 bg-white z-[130] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-slate-800 tracking-tighter text-2xl">G.KALE</span>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 overflow-y-auto">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-slate-500 hover:text-brand-blue font-bold tracking-tight transition-all border-b border-slate-50 flex items-center justify-between group"
                  >
                    {item}
                    <span className="opacity-0 group-hover:opacity-100">→</span>
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}