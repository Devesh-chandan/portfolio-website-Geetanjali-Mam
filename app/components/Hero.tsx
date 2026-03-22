// "use client";
// import { motion } from "framer-motion";
// import Typewriter from 'typewriter-effect';

// export default function Hero() {
//   return (
//     <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center px-10 md:px-32 py-20 overflow-hidden bg-transparent">
      
//       {/* CONTENT SIDE */}
//       <div className="z-20 w-full md:w-1/2 space-y-6 text-center md:text-left">
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }} 
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//         >
//           {/* Main Name Line */}
// <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] tracking-tighter leading-tight">
//   I am <br /> 
//   <span className="text-[#3073f0] italic font-extrabold">
//     Dr. Geetanjali Kale
//   </span>
// </h1>
          
//           {/* Typewriter Effect */}
//           <div className="text-2xl md:text-3xl font-bold text-slate-400 mt-4 h-10 flex justify-center md:justify-start items-center">
//             <span className="mr-2 italic text-slate-300 font-medium">—</span>
//             <Typewriter
//               options={{
//                 strings: ['Innovation Mentor', 'Academic Leader', 'Researcher'],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//                 deleteSpeed: 30,
//                 wrapperClassName: "text-[#3073f0]/80", // Adds a subtle brand color to the typed text
//               }}
//             />
//           </div>

//           {/* Designation Text */}
//           <p className="text-slate-600 text-lg md:text-xl max-w-xl mt-6 leading-relaxed font-medium">
//             Associate Professor & Head of Computer Engineering at 
//             <span className="font-bold text-[#0f172a] ml-2 border-b-2 border-[#3073f0]/20 pb-0.5">
//               PICT, Pune.
//             </span>
//           </p>

//           <div className="pt-10">
//             <a href="#contact" className="px-12 py-4 bg-[#0f172a] text-white rounded-full font-bold text-lg transition-all hover:bg-[#3073f0] hover:shadow-[0_20px_40px_rgba(48,115,240,0.3)] active:scale-95 inline-block">
//               Work With Me! 🤝
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* PROFILE SIDE */}
//       <div className="w-full md:w-1/2 flex justify-center items-center relative mt-20 md:mt-0 z-10">
//         <div className="relative flex items-center justify-center w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
//           <motion.div 
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="absolute inset-0 rounded-full border-[12px] border-white/40 backdrop-blur-md shadow-2xl z-0"
//           />
//           <motion.div 
//             initial={{ scale: 0, opacity: 0 }} 
//             animate={{ scale: 0.92, opacity: 1 }}
//             className="absolute inset-0 rounded-full z-0" 
//             style={{ background: "#3073f0" }}
//           />
//           <div className="absolute bottom-0 w-full h-[120%] flex justify-center items-end overflow-hidden z-10 rounded-b-full">
//             <motion.img 
//               src="/profile1.jpg" 
//               alt="Dr. Geetanjali Kale"
//               initial={{ opacity: 0, y: 150 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               className="relative z-20 w-auto h-full object-contain drop-shadow-[0_-15px_30px_rgba(0,0,0,0.2)]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center px-10 md:px-32 py-20 overflow-hidden bg-transparent">
      
      {/* CONTENT SIDE */}
      <div className="z-20 w-full md:w-1/2 space-y-6 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Name Line */}
          <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] tracking-tighter leading-tight">
            I am <br /> 
            <span className="text-[#3073f0] italic font-extrabold">
              Dr. Geetanjali Kale
            </span>
          </h1>
          
          {/* Typewriter Effect */}
          <div className="text-2xl md:text-3xl font-bold text-slate-400 mt-4 h-10 flex justify-center md:justify-start items-center">
            <span className="mr-2 italic text-slate-300 font-medium">—</span>
            <Typewriter
              options={{
                strings: ['Innovation Mentor', 'Academic Leader', 'Researcher'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                wrapperClassName: "text-[#3073f0]/80", 
              }}
            />
          </div>

          {/* Designation Text */}
          <p className="text-slate-600 text-lg md:text-xl max-w-xl mt-6 leading-relaxed font-medium">
            Associate Professor & Head of Computer Engineering at 
            <span className="font-bold text-[#0f172a] ml-2 border-b-2 border-[#3073f0]/20 pb-0.5 uppercase">
              PICT, Pune.
            </span>
          </p>

          {/* UNIFIED UI BUTTON GROUP */}
          <div className="pt-10 flex flex-wrap justify-center md:justify-start gap-3">
            
            {/* Primary Action Button (Solid Style) */}
            <motion.a 
              href="#contact" 
              whileHover={{ y: -4 }}
              className="px-8 py-3 bg-[#0f172a] text-white rounded-xl font-bold text-xs tracking-widest uppercase shadow-lg transition-all flex items-center gap-2 hover:bg-[#3073f0] hover:shadow-[0_15px_30px_rgba(48,115,240,0.3)] active:scale-95"
            >
              Work With Me!
            </motion.a>

            {/* Secondary Navigation Buttons (Glass Style) */}
            {[
              { name: "Gallery", href: "#gallery" },
              { name: "Awards", href: "#awards" },
              { name: "Patents", href: "#patents" }
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 1)" }}
                className="px-6 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-md text-slate-600 font-bold text-xs tracking-widest uppercase shadow-sm transition-all flex items-center gap-2 group hover:text-[#3073f0] hover:border-[#3073f0]/30"
              >
                {link.name}
                <span className="text-[10px] text-slate-400 group-hover:text-[#3073f0] transition-colors">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* PROFILE SIDE */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-20 md:mt-0 z-10">
        <div className="relative flex items-center justify-center w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 rounded-full border-[12px] border-white/40 backdrop-blur-md shadow-2xl z-0"
          />
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 0.92, opacity: 1 }}
            className="absolute inset-0 rounded-full z-0" 
            style={{ background: "#3073f0" }}
          />
          <div className="absolute bottom-0 w-full h-[120%] flex justify-center items-end overflow-hidden z-10 rounded-b-full">
            <motion.img 
              src="/profile1.jpg" 
              alt="Dr. Geetanjali Kale"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 w-auto h-full object-contain drop-shadow-[0_-15px_30px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}