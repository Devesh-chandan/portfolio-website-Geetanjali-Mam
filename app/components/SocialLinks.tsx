// // "use client";
// // import { motion } from "framer-motion";
// // import { Linkedin, Mail, Phone, UserCircle } from "lucide-react";

// // const socials = [
// //   { 
// //     // LinkedIn - Official Profile (Glow Blue)
// //     icon: <Linkedin size={20} className="text-[#0077B5]" />, 
// //     link: "https://www.linkedin.com/in/dr-geetanjali-kale-17148922/", 
// //     label: "LinkedIn Profile",
// //     shadow: "shadow-[#0077B5]/30" // Custom glow color
// //   },
// //   { 
// //     // Institutional Email (Glow Red)
// //     icon: <Mail size={20} className="text-[#EA4335]" />, 
// //     link: "mailto:gvkale@pict.edu", 
// //     label: "Institutional (PICT)",
// //     shadow: "shadow-[#EA4335]/30"
// //   },
// //   { 
// //     // Personal Email (Glow Blue-400)
// //     icon: <UserCircle size={20} className="text-blue-400" />, 
// //     link: "mailto:gvkale@gmail.com", 
// //     label: "Personal Email",
// //     shadow: "shadow-blue-400/30"
// //   },
// //   { 
// //     // Phone Number (Glow Green)
// //     icon: <Phone size={20} className="text-[#34A853]" />, 
// //     link: "tel:+919822477645", 
// //     label: "+91 98224 77645",
// //     shadow: "shadow-[#34A853]/30"
// //   },
// // ];

// // export default function SocialLinks() {
// //   return (
// //     <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-6">
      
// //       {/* Top Gradient Divider */}
// //       <div className="w-[1px] h-20 bg-gradient-to-t from-blue-500 to-transparent" />
      
// //       <p className="rotate-180 [writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-blue-400/70 font-bold mb-4">
// //         Contact & Social
// //       </p>

// //       <div className="flex flex-col gap-5">
// //         {socials.map((social, idx) => (
// //           <motion.a
// //             key={idx}
// //             href={social.link}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             initial={{ opacity: 0, x: 20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 0.8 + idx * 0.1 }}
// //             // Apply custom shadow glow and hover effects
// //             className={`p-3 glass rounded-full hover:scale-125 border border-white/10 hover:border-white/30 transition-all group relative bg-white/5 shadow-lg ${social.shadow}`}
// //           >
// //             {social.icon}
            
// //             {/* Tooltip */}
// //             <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 border border-white/10 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
// //               {social.label}
// //             </span>
// //           </motion.a>
// //         ))}
// //       </div>

// //       {/* Bottom Gradient Divider */}
// //       <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500 to-transparent" />
// //     </div>
// //   );
// // }


// "use client";
// import { motion } from "framer-motion";
// import { Linkedin, Mail, Phone, UserCircle } from "lucide-react";

// const socials = [
//   { 
//     // LinkedIn - Official Profile (Glow Blue)
//     icon: <Linkedin size={20} className="text-[#0077B5]" />, 
//     link: "https://www.linkedin.com/in/dr-geetanjali-kale-17148922/", 
//     label: "LinkedIn Profile",
//     shadow: "shadow-[#0077B5]/30" 
//   },
//   { 
//     // Institutional Email (Updated for Gmail Web)
//     icon: <Mail size={20} className="text-[#EA4335]" />, 
//     // This URL opens Gmail directly in a new tab with the 'To' field filled
//     link: "https://mail.google.com/mail/?view=cm&fs=1&to=gvkale@pict.edu", 
//     label: "Institutional (PICT)",
//     shadow: "shadow-[#EA4335]/30"
//   },
//   { 
//     // Personal Email (Updated for Gmail Web)
//     icon: <UserCircle size={20} className="text-blue-400" />, 
//     link: "https://mail.google.com/mail/?view=cm&fs=1&to=gvkale@gmail.com", 
//     label: "Personal Email",
//     shadow: "shadow-blue-400/30"
//   },
//   { 
//     // Phone Number (Remains standard tel: protocol)
//     icon: <Phone size={20} className="text-[#34A853]" />, 
//     link: "tel:+919822477645", 
//     label: "+91 98224 77645",
//     shadow: "shadow-[#34A853]/30"
//   },
// ];

// export default function SocialLinks() {
//   return (
//     <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-6">
      
//       {/* Top Gradient Divider */}
//       <div className="w-[1px] h-20 bg-gradient-to-t from-blue-500 to-transparent" />
      
//       <p className="rotate-180 [writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-blue-400/70 font-bold mb-4">
//         Contact & Social
//       </p>

//       <div className="flex flex-col gap-5">
//         {socials.map((social, idx) => (
//           <motion.a
//             key={idx}
//             href={social.link}
//             target="_blank" // Essential to keep the portfolio open in the original tab
//             rel="noopener noreferrer"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.8 + idx * 0.1 }}
//             className={`p-3 glass rounded-full hover:scale-125 border border-white/10 hover:border-white/30 transition-all group relative bg-white/5 shadow-lg ${social.shadow}`}
//           >
//             {social.icon}
            
//             {/* Tooltip */}
//             <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 border border-white/10 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//               {social.label}
//             </span>
//           </motion.a>
//         ))}
//       </div>

//       {/* Bottom Gradient Divider */}
//       <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500 to-transparent" />
//     </div>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, UserCircle } from "lucide-react";

const socials = [
  { 
    icon: <Linkedin size={20} className="text-[#0077B5]" />, 
    link: "https://www.linkedin.com/in/dr-geetanjali-kale-17148922/", 
    label: "LinkedIn Profile",
    shadow: "hover:shadow-[#0077B5]/40",
    glow: "group-hover:bg-[#0077B5]/10"
  },
  { 
    icon: <Mail size={20} className="text-[#EA4335]" />, 
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=gvkale@pict.edu", 
    label: "Institutional (PICT)",
    shadow: "hover:shadow-[#EA4335]/40",
    glow: "group-hover:bg-[#EA4335]/10"
  },
  { 
    icon: <UserCircle size={20} className="text-blue-400" />, 
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=gvkale@gmail.com", 
    label: "Personal Email",
    shadow: "hover:shadow-blue-400/40",
    glow: "group-hover:bg-blue-400/10"
  },
  { 
    icon: <Phone size={20} className="text-[#34A853]" />, 
    link: "tel:+919822477645", 
    label: "+91 98224 77645",
    shadow: "hover:shadow-[#34A853]/40",
    glow: "group-hover:bg-[#34A853]/10"
  },
];

export default function SocialLinks() {
  return (
    /* Updated Class: 
       'hidden' hides the component on mobile.
       'md:flex' restores it on medium screens (768px+) 
    */
    <div className="hidden md:flex fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100] flex-col items-center gap-6">
      
      {/* Top Gradient Divider */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        className="w-[1px] bg-gradient-to-t from-blue-500 to-transparent" 
      />
      
      <p className="rotate-180 [writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-blue-400/70 font-bold mb-4">
        Contact & Social
      </p>

      <div className="flex flex-col gap-5">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + idx * 0.1 }}
            className={`
              p-3 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md
              transition-all duration-300 group relative shadow-sm
              hover:scale-110 hover:-translate-x-1
              ${social.shadow} ${social.glow}
            `}
          >
            {social.icon}
            
            {/* Improved Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0f172a] text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0 shadow-xl">
              {social.label}
              {/* Tooltip Arrow */}
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0f172a] rotate-45" />
            </span>
          </motion.a>
        ))}
      </div>

      {/* Bottom Gradient Divider */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        className="w-[1px] bg-gradient-to-b from-blue-500 to-transparent" 
      />
    </div>
  );
}