


// "use client";
// import Sidebar from "./components/Sidebar";
// import Hero from "./components/Hero";
// import SocialLinks from "./components/SocialLinks";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const SectionHeader = ({ title, highlight, id }: { title: string, highlight: string, id: string }) => (
//   <div id={id} className="flex items-center gap-6 mb-12 pt-24">
//     <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tighter">
//       {title} <span className="text-blue-600 italic">{highlight}</span>
//     </h2>
//     <div className="h-px flex-1 bg-slate-200" />
//   </div>
// );

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-[#fdfaf5] scroll-smooth selection:bg-blue-100 selection:text-blue-600">
      
//       {/* FIXED BACKGROUND LAYER */}
//       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-[0.03]" 
//           style={{ backgroundImage: `radial-gradient(#3073f0 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} 
//         />
//         <motion.div
//           animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] rounded-full opacity-[0.08]" 
//           style={{ background: `radial-gradient(circle, #3073f0 0%, #5d95f5 70%, transparent 100%)`, filter: "blur(120px)" }}
//         />
//       </div>

//       <div className="relative z-10">
//         <Sidebar />
//         <SocialLinks />
        
//         <section id="home">
//           <Hero />
//         </section>

//         {/* ABOUT SECTION */}
//         <section id="about" className="px-6 md:px-32 py-16">
//           <SectionHeader title="About" highlight="Me" id="about" />
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <motion.div 
//               whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }}
//               className="lg:col-span-2 bg-[#0f172a] rounded-[48px] p-12 text-white shadow-2xl flex flex-col justify-center"
//             >
//               <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
//                 Head and Associate Professor at <span className="text-white font-bold">PICT, Pune</span>. 
//                 With a Ph.D. in Computer Engineering, I specialize in the intersection of <span className="text-blue-400">Computer Vision</span> and <span className="text-blue-400">Explainable AI</span>.
//               </p>
//             </motion.div>
//             <div className="bg-blue-600 rounded-[48px] p-10 text-white flex flex-col justify-center shadow-xl">
//                <h4 className="text-xs uppercase tracking-[0.2em] font-bold opacity-70 mb-4">Core Research</h4>
//                <ul className="space-y-2 font-bold text-lg">
//                  <li>• Artificial Intelligence</li>
//                  <li>• Machine Learning</li>
//                  <li>• Data Science</li>
//                  <li>• Education Tech</li>
//                </ul>
//             </div>
//           </div>
//         </section>

//         {/* GALLERY SECTION */}
//         <section id="gallery" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Moments &" highlight="Milestones" id="gallery" />
//           <div className="columns-1 md:columns-3 gap-6 space-y-6">
//               {[
//                 { img: "/event1.png", label: "ACM Committee", h: "h-64" },
//                 { img: "/event2.png", label: "PICT Campus", h: "h-80" },
//                 { img: "/event3.png", label: "Professional Chapter", h: "h-64" },
//                 { img: "/event4.png", label: "Keynote Session", h: "h-80" },
//                 { img: "/event5.png", label: "Expert Talk", h: "h-64" }
//               ].map((item, i) => (
//                 <div key={i} className={`${item.h} bg-slate-200 rounded-[32px] overflow-hidden group relative shadow-md`}>
//                    <div className="absolute inset-0 bg-slate-300 animate-pulse" />
//                    <Image 
//                      src={item.img} 
//                      alt={item.label}
//                      fill
//                      className="object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
//                    />
//                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold transition-opacity z-20">
//                      {item.label}
//                    </div>
//                 </div>
//               ))}
//           </div>
//         </section>

//         {/* AWARDS SECTION */}
//         <section id="awards" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Honors &" highlight="Awards" id="awards" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               "ACM India Internal Engagement Council Member",
//               "Secretary/Treasurer ACM India Women Committee",
//               "Chair ACM-W Pune Professional Chapter",
//               "Former Member, BoS, SPPU (2017-2022)",
//               "Cambridge Int. Certification in Teaching",
//               "8 Years of Service Recognition by ACM"
//             ].map((award, i) => (
//               <motion.div 
//                 key={i}
//                 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
//                 className="p-8 bg-white border border-slate-100 shadow-sm rounded-[32px] text-[#0f172a] font-bold text-lg hover:shadow-md transition-shadow group hover:border-blue-200"
//               >
//                 <span className="text-blue-600 mr-2 group-hover:animate-bounce inline-block">★</span> {award}
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* BOOK CHAPTERS */}
//         <section id="bookchapters" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Book" highlight="Chapters" id="bookchapters" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { title: "Research Methodology: A Practical Approach", detail: "Chapter 1: Introduction to Research", year: "2024" },
//               { title: "XAI Based Intelligent Systems for Society 5.0", detail: "Chapter: XAI in human motion recognition", year: "2023" }
//             ].map((book, i) => (
//               <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] flex flex-col gap-2 group hover:border-blue-200 transition-colors shadow-sm">
//                 <span className="text-blue-600 font-bold text-sm tracking-widest">{book.year}</span>
//                 <p className="font-black text-xl text-[#0f172a] group-hover:text-blue-600 transition-colors">{book.title}</p>
//                 <p className="text-slate-500 italic font-medium">{book.detail}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 6. RESEARCH (Journal Publications) */}
// <section id="research" className="px-6 md:px-32 py-16">
//   <SectionHeader title="Journal" highlight="Publications" id="research" />

//   <div className="max-w-5xl mx-auto">
    
//     {/* --- PROFESSIOANL RESEARCH BADGES --- */}
//     <div className="flex flex-wrap items-center gap-4 mb-10 border-b border-slate-100 pb-8">
//       <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mr-2">Research Indices:</span>
      
//       {[
//         { name: "Google Scholar", url: "https://scholar.google.com/citations?user=rJpGXxoAAAAJ" },
//         { name: "Scopus Profile", url: "https://www.scopus.com/authid/detail.uri?authorId=57194208000" }
//       ].map((link, i) => (
//         <a
//           key={i}
//           href={link.url}
//           target="_blank"
//           className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-[#0f172a] hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md group"
//         >
//           <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:animate-pulse" />
//           {link.name}
//           <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//           </svg>
//         </a>
//       ))}
//     </div>

//     {/* Publication List */}
//     <div className="grid grid-cols-1 gap-4">
//       {[
//         "A Survey of Motion Prediction for Autonomous Vehicles (2024)",
//         "Evaluating Performances of Attention-Based Merge (2023)",
//         "XAI in human motion recognition: A systematic review (2023)",
//         "Vision Based Monitoring System for Old Age Homes (2017)"
//       ].map((res, i) => (
//         <motion.div 
//           key={i} 
//           whileInView={{ opacity: 1, x: 0 }} 
//           initial={{ opacity: 0, x: -15 }}
//           transition={{ delay: i * 0.1 }}
//           className="p-6 bg-white border-l-4 border-l-transparent border-y border-r border-slate-100 hover:border-l-blue-600 hover:bg-blue-50/30 transition-all flex justify-between items-center group rounded-r-3xl"
//         >
//           <div className="flex gap-6 items-center">
//             <span className="text-slate-300 font-black text-xl group-hover:text-blue-200 transition-colors">{i + 1}</span>
//             <p className="text-[#0f172a] font-semibold italic leading-relaxed group-hover:text-blue-700 transition-colors">
//               {res}
//             </p>
//           </div>
//           <div className="shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
//               <span className="text-xs font-bold">PDF</span>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

//         {/* CONFERENCE */}
//         <section id="conference" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Conference" highlight="Papers" id="conference" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               { title: "Bharatnatyam Adavu Recognition", venue: "IEEE ICIIP" },
//               { title: "Motion Correction in Yogasana", venue: "Springer" },
//               { title: "Cervical Region Detection", venue: "IEEE CSE" },
//               { title: "Mars Imagery Classification", venue: "IEEE I2CT" }
//             ].map((conf, i) => (
//               <div key={i} className="flex gap-6 items-start p-6 bg-blue-50/30 rounded-[32px] border border-transparent hover:border-blue-100 transition-all">
//                 <div className="text-4xl font-black text-blue-200">0{i+1}</div>
//                 <div>
//                   <h4 className="text-xl font-bold text-[#0f172a] mb-1">{conf.title}</h4>
//                   <p className="text-blue-600 font-bold uppercase text-xs tracking-widest">{conf.venue}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//        {/* 9. INVITED TALKS & SESSIONS */}
// <section id="invitedtalks" className="px-6 md:px-32 py-24 bg-slate-50/50">
//   <SectionHeader title="Invited" highlight="Talks & Sessions" id="invitedtalks" />
  
//   <div className="max-w-7xl mx-auto mt-16">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         { category: "Leadership", title: "TPC Chair & Organizing Chair for ICEI-2022", venue: "International Conference on Emerging Information", date: "2022" },
//         { category: "Leadership", title: "Organising Co-chair for CTiS 2022-2024", venue: "Computational Thinking in Schools", date: "2022 - 2024" },
//         { category: "Expert Talk", title: "Visualising Data Science & Computer Vision", venue: "Indira College of Engineering, Pune", date: "21 Mar. 2024" },
//         { category: "Expert Talk", title: "Data Analytics in Computer Vision", venue: "AICTE-ISTE Refresher Course @ RSCOE", date: "16 Dec. 2020" },
//         { category: "Expert Talk", title: "Research Trends In CE & IT", venue: "Chief Guest @ SKNCOE, Pune", date: "4 Jan. 2021" },
//         { category: "Workshop", title: "Computer Graphics and Gaming", venue: "Resource Person for SPPU faculty @ AIT", date: "Resource Person" },
//         { category: "Workshop", title: "Computer Graphics (Theory and Lab)", venue: "Resource Person for SPPU faculty @ SIT", date: "Resource Person" },
//         { category: "Leadership", title: "Curriculum Design & Content Delivery", venue: "Moderator @ D. Y Patil College, Akurdi", date: "Moderator" },
//         { category: "Guest", title: "Cyber Security Workshop", venue: "Chief Guest @ Manjari College of Engineering", date: "Chief Guest" },
//         { category: "Workshop", title: "Android Application Development", venue: "Women from Industry @ VMware", date: "Organizer" },
//         { category: "Volunteer", title: "Computational Thinking at School", venue: "Gurukul School @ CSPathshala", date: "Volunteer" },
//         { category: "Workshop", title: "Computer Graphics (University Level)", venue: "Workshop for CE Faculty Members", date: "One Day" },
//         { category: "Workshop", title: "Computer Graphics & Gaming Using QT", venue: "Workshop for CE Faculty Members", date: "One Day" },
//         { category: "Expert Talk", title: "Transformations, Animation and Gaming", venue: "Expert lecture @ APCOE, Pune", date: "Expert Lecture" },
//         { category: "Session", title: "Mission 10X Learning Approach", venue: "Computer Department PICT, Pune", date: "2009" }
//       ].map((item, i) => {
//         // High-end solid color-coding for all roles
//         const getCategoryStyles = (cat) => {
//           switch(cat) {
//             case 'Leadership': return 'bg-blue-600 text-white shadow-lg shadow-blue-200';
//             case 'Expert Talk': return 'bg-indigo-600 text-white shadow-lg shadow-indigo-200';
//             case 'Workshop': return 'bg-emerald-600 text-white shadow-lg shadow-emerald-200';
//             case 'Guest': return 'bg-amber-500 text-white shadow-lg shadow-amber-200';
//             case 'Volunteer': return 'bg-slate-700 text-white shadow-lg shadow-slate-200';
//             default: return 'bg-blue-500 text-white shadow-lg shadow-blue-100';
//           }
//         };

//         return (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: (i % 3) * 0.1 }}
//             className="group relative flex flex-col p-8 bg-white border border-slate-200/60 rounded-[32px] hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
//           >
//             {/* Top Bar: Category & Date */}
//             <div className="flex justify-between items-center mb-8">
//               <span className={`text-[10px] font-black uppercase tracking-[0.1em] px-4 py-1.5 rounded-full transition-transform group-hover:-translate-y-1 ${getCategoryStyles(item.category)}`}>
//                 {item.category}
//               </span>
//               <div className="flex flex-col items-end">
//                 <span className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
//                   {item.date}
//                 </span>
//               </div>
//             </div>

//             {/* Title Body */}
//             <div className="flex-1">
//               <h5 className="text-lg font-bold text-[#0f172a] leading-[1.4] mb-6 group-hover:text-blue-700 transition-colors">
//                 {item.title}
//               </h5>
//             </div>

//             {/* Professional Venue Badge */}
//             <div className="mt-auto">
//               <div className="flex flex-col gap-1">
//                 <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest ml-1">Location / Context</p>
//                 <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50/50 transition-all border border-slate-100 group-hover:border-blue-100">
//                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
//                   <p className="text-[11px] font-bold text-slate-600 group-hover:text-blue-800 leading-tight">
//                     {item.venue}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )
//       })}
//     </div>
//   </div>
// </section>

//         {/* 7. PATENTS SECTION */}
// <section id="patents" className="px-6 md:px-32 py-24">
//   <SectionHeader title="Intellectual" highlight="Property" id="patents" />
  
//   <div className="max-w-6xl mx-auto mt-16">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {[
//         { 
//           title: "System and Method for Motion Analysis and Feedback for Amendment of Human Action", 
//           no: "201621029482", 
//           date: "30/08/2016", 
//           status: "GRANTED" 
//         },
//         { 
//           title: "System and method for automated evaluation of multimodal content", 
//           no: "202221060608", 
//           date: "11/11/2022", 
//           status: "GRANTED" 
//         },
//         { 
//           title: "System and method for analysis of human movement and suggestions of amendment", 
//           no: "2023/05683", 
//           date: "2023", 
//           status: "GRANTED" 
//         },
//         { 
//           title: "Personalized physical activity recommendations system using federated learning (FL)", 
//           no: "202321029305", 
//           date: "15/09/2023", 
//           status: "PUBLISHED" 
//         },
//         { 
//           title: "Hydroponic Nutrient Prediction Device using IoT", 
//           no: "202321039419", 
//           date: "18/08/2023", 
//           status: "PUBLISHED" 
//         }
//       ].map((patent, i) => (
//         <motion.div 
//           key={i}
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: i * 0.05 }}
//           className="group flex flex-col justify-between p-8 bg-white border border-slate-100 rounded-[32px] hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
//         >
//           <div>
//             {/* Status & Date Row */}
//             <div className="flex items-center justify-between mb-6">
//               <span className={`text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full ${
//                 patent.status === 'GRANTED' 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-slate-100 text-slate-500'
//               }`}>
//                 {patent.status}
//               </span>
//               <span className="text-[11px] font-bold text-slate-400">
//                 {patent.date}
//               </span>
//             </div>

//             {/* Title */}
//             <h5 className="text-lg font-bold text-[#0f172a] leading-tight mb-6 group-hover:text-blue-600 transition-colors">
//               {patent.title}
//             </h5>
//           </div>

//           {/* Patent ID Footer */}
//           <div className="pt-6 border-t border-slate-50 flex items-center gap-3">
//             <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//             </div>
//             <div>
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Official Number</p>
//               <p className="font-mono text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
//                 {patent.no}
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>
//         {/* 8. PHD STUDENTS SECTION */}
// <section id="phdstudents" className="px-6 md:px-32 py-16">
//   <SectionHeader title="Research" highlight="Guidance" id="phdstudents" />
  
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//     {[
//       { 
//         name: "Pravin Patil", 
//         topic: "Security in Multi-Tenant Distributed System", 
//         status: "Completed March 2025", 
//         center: "PICT, SPPU" 
//       },
//       { 
//         name: "Madhuri Wakode", 
//         topic: "Aggregation algorithm for federated learning", 
//         status: "In Progress", 
//         center: "Center PICT, SPPU" 
//       },
//       { 
//         name: "Priyanka Chaudhari", 
//         topic: "Explainable AI for HAR", 
//         status: "In Progress", 
//         center: "Center PICT, SPPU" 
//       },
//       { 
//         name: "Niranjan Deokule", 
//         topic: "Explainable AI for GIS", 
//         status: "In Progress", 
//         center: "Center PICT, SPPU" 
//       }
//     ].map((stud, i) => (
//       <motion.div 
//         key={i} 
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: i * 0.1 }}
//         className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all group flex flex-col justify-between"
//       >
//         <div>
//           {/* Status Badge */}
//           <div className="flex items-center gap-2 mb-6">
//             <span className={`w-2 h-2 rounded-full ${stud.status.includes('Completed') ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'}`} />
//             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
//               {stud.status}
//             </span>
//           </div>

//           {/* Scholar Name */}
//           <h4 className="text-xl font-black text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors">
//             {stud.name}
//           </h4>

//           {/* Research Topic */}
//           <p className="text-sm text-slate-600 font-medium leading-relaxed italic border-l-2 border-slate-100 pl-4 py-1 group-hover:border-blue-200 transition-colors">
//             "{stud.topic}"
//           </p>
//         </div>

//         {/* Institution Detail */}
//         <div className="mt-8 pt-6 border-t border-slate-50">
//           <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">Affiliation</p>
//           <p className="text-xs font-bold text-slate-500">{stud.center}</p>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>

//         {/* UPDATED COLLABORATE / CONTACT SECTION */}
//         <section id="contact" className="px-6 md:px-32 py-32">
//           <div className="bg-[#0f172a] rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5">
            
//             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              
//               {/* Circular Frame for Image */}
//               <div className="relative shrink-0">
//                 <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-blue-500/30 p-2">
//                   <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#0f172a]">
//                     <Image 
//                       src="/contact-image.png" // Path to your image
//                       alt="Dr. Geetanjali Kale"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-xl text-xs font-black tracking-widest shadow-xl whitespace-nowrap">
//                   PICT, PUNE
//                 </div>
//               </div>

//               {/* Detailed Bio Content */}
//               <div className="flex-1 text-center lg:text-left">
//                 <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
//                   Let's <span className="text-blue-400 italic">Connect.</span>
//                 </h2>
                
//                 <div className="space-y-6 max-w-4xl">
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-black text-white">Dr. Geetanjali Kale</h3>
//                     <p className="text-blue-400 text-lg font-bold mb-6">Head & Associate Professor, Dept. of Computer Engineering, PICT</p>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300">
//                     <div className="flex items-start gap-3">
//                       <span className="text-blue-500 mt-1">✦</span>
//                       <p className="leading-tight font-medium">Secretary, ACM India Woman | Senior Member ACM & IEEE</p>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <span className="text-blue-500 mt-1">✦</span>
//                       <p className="leading-tight font-medium">Chair ACMW Pune Professional Chap. | Former BoS CE SPPU</p>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <span className="text-blue-500 mt-1">✦</span>
//                       <p className="leading-tight font-medium">Core member of AnitaB.org</p>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <span className="text-blue-500 mt-1">✦</span>
//                       <p className="leading-tight font-medium">Research: Computer Vision & Explainable AI</p>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
//                     <button className="px-8 py-4 bg-blue-600 rounded-2xl font-black text-sm hover:bg-white hover:text-blue-600 transition-all shadow-lg">LinkedIn</button>
//                     <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-black text-sm hover:bg-white/20 transition-all">Email</button>
//                     <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-sm hover:bg-white/10 transition-all">Personal Mail</button>
//                     <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-sm hover:bg-white/10 transition-all">Phone </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

           
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }









// "use client";
// import Sidebar from "./components/Sidebar";
// import Hero from "./components/Hero";
// import SocialLinks from "./components/SocialLinks";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const SectionHeader = ({ title, highlight, id }: { title: string, highlight: string, id: string }) => (
//   <div id={id} className="flex items-center gap-6 mb-12 pt-24">
//     <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tighter">
//       {title} <span className="text-blue-600 italic">{highlight}</span>
//     </h2>
//     <div className="h-px flex-1 bg-slate-200" />
//   </div>
// );

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-[#fdfaf5] scroll-smooth selection:bg-blue-100 selection:text-blue-600">
      
//       {/* FIXED BACKGROUND LAYER - Consistent across all scrolls */}
//       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-[0.03]" 
//           style={{ backgroundImage: `radial-gradient(#3073f0 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} 
//         />
//         <motion.div
//           animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] rounded-full opacity-[0.08]" 
//           style={{ background: `radial-gradient(circle, #3073f0 0%, #5d95f5 70%, transparent 100%)`, filter: "blur(120px)" }}
//         />
//       </div>

//       <div className="relative z-10">
//         <Sidebar />
//         <SocialLinks />
        
//         <section id="home">
//           <Hero />
//         </section>

//         {/* 1. ABOUT SECTION */}
//         <section id="about" className="px-6 md:px-32 py-16">
//           <SectionHeader title="About" highlight="Me" id="about" />
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <motion.div 
//               whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }}
//               className="lg:col-span-2 bg-[#0f172a] rounded-[48px] p-12 text-white shadow-2xl flex flex-col justify-center"
//             >
//               <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
//                 Head and Associate Professor at <span className="text-white font-bold">PICT, Pune</span>. 
//                 With a Ph.D. in Computer Engineering, I specialize in the intersection of <span className="text-blue-400">Computer Vision</span> and <span className="text-blue-400">Explainable AI</span>.
//               </p>
//             </motion.div>
//             <div className="bg-blue-600 rounded-[48px] p-10 text-white flex flex-col justify-center shadow-xl">
//                <h4 className="text-xs uppercase tracking-[0.2em] font-bold opacity-70 mb-4">Core Research</h4>
//                <ul className="space-y-2 font-bold text-lg">
//                  <li>• Artificial Intelligence</li>
//                  <li>• Machine Learning</li>
//                  <li>• Data Science</li>
//                  <li>• Education Tech</li>
//                </ul>
//             </div>
//           </div>
//         </section>

//         {/* 2. GALLERY SECTION */}
//         <section id="gallery" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Moments &" highlight="Milestones" id="gallery" />
//           <div className="columns-1 md:columns-3 gap-6 space-y-6">
//               {[
//                 { img: "/event1.png", label: "ACM Committee", h: "h-64" },
//                 { img: "/event2.png", label: "PICT Campus", h: "h-80" },
//                 { img: "/event3.png", label: "Professional Chapter", h: "h-64" },
//                 { img: "/event4.png", label: "Keynote Session", h: "h-80" },
//                 { img: "/event5.png", label: "Expert Talk", h: "h-64" }
//               ].map((item, i) => (
//                 <div key={i} className={`${item.h} bg-slate-200 rounded-[32px] overflow-hidden group relative shadow-md`}>
//                    <div className="absolute inset-0 bg-slate-300 animate-pulse" />
//                    <Image 
//                      src={item.img} 
//                      alt={item.label}
//                      fill
//                      className="object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
//                    />
//                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold transition-opacity z-20">
//                      {item.label}
//                    </div>
//                 </div>
//               ))}
//           </div>
//         </section>

//         {/* 3. AWARDS SECTION */}
//         <section id="awards" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Honors &" highlight="Awards" id="awards" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               "ACM India Internal Engagement Council Member",
//               "Secretary/Treasurer ACM India Women Committee",
//               "Chair ACM-W Pune Professional Chapter",
//               "Former Member, BoS, SPPU (2017-2022)",
//               "Cambridge Int. Certification in Teaching",
//               "8 Years of Service Recognition by ACM"
//             ].map((award, i) => (
//               <motion.div 
//                 key={i}
//                 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
//                 className="p-8 bg-white border border-slate-100 shadow-sm rounded-[32px] text-[#0f172a] font-bold text-lg hover:shadow-md transition-shadow group hover:border-blue-200"
//               >
//                 <span className="text-blue-600 mr-2 group-hover:animate-bounce inline-block">★</span> {award}
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* 4. BOOK CHAPTERS */}
//         <section id="bookchapters" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Book" highlight="Chapters" id="bookchapters" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { title: "Research Methodology: A Practical Approach", detail: "Chapter 1: Introduction to Research", year: "2024" },
//               { title: "XAI Based Intelligent Systems for Society 5.0", detail: "Chapter: XAI in human motion recognition", year: "2023" }
//             ].map((book, i) => (
//               <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] flex flex-col gap-2 group hover:border-blue-200 transition-colors shadow-sm">
//                 <span className="text-blue-600 font-bold text-sm tracking-widest">{book.year}</span>
//                 <p className="font-black text-xl text-[#0f172a] group-hover:text-blue-600 transition-colors">{book.title}</p>
//                 <p className="text-slate-500 italic font-medium">{book.detail}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 5. RESEARCH (Journal Publications) */}
//         <section id="research" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Journal" highlight="Publications" id="research" />
//           <div className="max-w-5xl mx-auto">
//             <div className="flex flex-wrap items-center gap-4 mb-10 border-b border-slate-100 pb-8">
//               <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mr-2">Research Indices:</span>
//               {[
//                 { name: "Google Scholar", url: "https://scholar.google.com/citations?user=rJpGXxoAAAAJ" },
//                 { name: "Scopus Profile", url: "https://www.scopus.com/authid/detail.uri?authorId=57194208000" }
//               ].map((link, i) => (
//                 <a key={i} href={link.url} target="_blank" className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-[#0f172a] hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md group">
//                   <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:animate-pulse" />
//                   {link.name}
//                   <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                 </a>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 gap-4">
//               {[
//                 "A Survey of Motion Prediction for Autonomous Vehicles (2024)",
//                 "Evaluating Performances of Attention-Based Merge (2023)",
//                 "XAI in human motion recognition: A systematic review (2023)",
//                 "Vision Based Monitoring System for Old Age Homes (2017)"
//               ].map((res, i) => (
//                 <motion.div 
//                   key={i} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -15 }} transition={{ delay: i * 0.1 }}
//                   className="p-6 bg-white border-l-4 border-l-transparent border-y border-r border-slate-100 hover:border-l-blue-600 hover:bg-blue-50/30 transition-all flex justify-between items-center group rounded-r-3xl"
//                 >
//                   <div className="flex gap-6 items-center">
//                     <span className="text-slate-300 font-black text-xl group-hover:text-blue-200 transition-colors">{i + 1}</span>
//                     <p className="text-[#0f172a] font-semibold italic leading-relaxed group-hover:text-blue-700 transition-colors">{res}</p>
//                   </div>
//                   <div className="shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
//                       <span className="text-xs font-bold">PDF</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 6. CONFERENCE */}
//         <section id="conference" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Conference" highlight="Papers" id="conference" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               { title: "Bharatnatyam Adavu Recognition", venue: "IEEE ICIIP" },
//               { title: "Motion Correction in Yogasana", venue: "Springer" },
//               { title: "Cervical Region Detection", venue: "IEEE CSE" },
//               { title: "Mars Imagery Classification", venue: "IEEE I2CT" }
//             ].map((conf, i) => (
//               <div key={i} className="flex gap-6 items-start p-6 bg-white border border-slate-100 rounded-[32px] hover:border-blue-200 hover:bg-blue-50/10 transition-all">
//                 <div className="text-4xl font-black text-blue-200">0{i+1}</div>
//                 <div>
//                   <h4 className="text-xl font-bold text-[#0f172a] mb-1">{conf.title}</h4>
//                   <p className="text-blue-600 font-bold uppercase text-xs tracking-widest">{conf.venue}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 7. INVITED TALKS & SESSIONS */}
//         <section id="invitedtalks" className="px-6 md:px-32 py-24">
//           <SectionHeader title="Invited" highlight="Talks & Sessions" id="invitedtalks" />
//           <div className="max-w-7xl mx-auto mt-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 { category: "Leadership", title: "TPC Chair & Organizing Chair for ICEI-2022", venue: "International Conference on Emerging Information", date: "2022" },
//                 { category: "Leadership", title: "Organising Co-chair for CTiS 2022-2024", venue: "Computational Thinking in Schools", date: "2022 - 2024" },
//                 { category: "Expert Talk", title: "Visualising Data Science & Computer Vision", venue: "Indira College of Engineering, Pune", date: "21 Mar. 2024" },
//                 { category: "Expert Talk", title: "Data Analytics in Computer Vision", venue: "AICTE-ISTE Refresher Course @ RSCOE", date: "16 Dec. 2020" },
//                 { category: "Expert Talk", title: "Research Trends In CE & IT", venue: "Chief Guest @ SKNCOE, Pune", date: "4 Jan. 2021" },
//                 { category: "Workshop", title: "Computer Graphics and Gaming", venue: "Resource Person for SPPU faculty @ AIT", date: "Resource Person" },
//                 { category: "Workshop", title: "Computer Graphics (Theory and Lab)", venue: "Resource Person for SPPU faculty @ SIT", date: "Resource Person" },
//                 { category: "Leadership", title: "Curriculum Design & Content Delivery", venue: "Moderator @ D. Y Patil College, Akurdi", date: "Moderator" },
//                 { category: "Guest", title: "Cyber Security Workshop", venue: "Chief Guest @ Manjari College of Engineering", date: "Chief Guest" },
//                 { category: "Workshop", title: "Android Application Development", venue: "Women from Industry @ VMware", date: "Organizer" },
//                 { category: "Volunteer", title: "Computational Thinking at School", venue: "Gurukul School @ CSPathshala", date: "Volunteer" },
//                 { category: "Workshop", title: "Computer Graphics (University Level)", venue: "Workshop for CE Faculty Members", date: "One Day" },
//                 { category: "Workshop", title: "Computer Graphics & Gaming Using QT", venue: "Workshop for CE Faculty Members", date: "One Day" },
//                 { category: "Expert Talk", title: "Transformations, Animation and Gaming", venue: "Expert lecture @ APCOE, Pune", date: "Expert Lecture" },
//                 { category: "Session", title: "Mission 10X Learning Approach", venue: "Computer Department PICT, Pune", date: "2009" }
//               ].map((item, i) => {
//                 const getCategoryStyles = (cat) => {
//                   switch(cat) {
//                     case 'Leadership': return 'bg-blue-600 text-white shadow-lg shadow-blue-200';
//                     case 'Expert Talk': return 'bg-indigo-600 text-white shadow-lg shadow-indigo-200';
//                     case 'Workshop': return 'bg-emerald-600 text-white shadow-lg shadow-emerald-200';
//                     case 'Guest': return 'bg-amber-500 text-white shadow-lg shadow-amber-200';
//                     case 'Volunteer': return 'bg-slate-700 text-white shadow-lg shadow-slate-200';
//                     default: return 'bg-blue-500 text-white shadow-lg shadow-blue-100';
//                   }
//                 };
//                 return (
//                   <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
//                     className="group relative flex flex-col p-8 bg-white border border-slate-200/60 rounded-[32px] hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
//                   >
//                     <div className="flex justify-between items-center mb-8">
//                       <span className={`text-[10px] font-black uppercase tracking-[0.1em] px-4 py-1.5 rounded-full transition-transform group-hover:-translate-y-1 ${getCategoryStyles(item.category)}`}>{item.category}</span>
//                       <span className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{item.date}</span>
//                     </div>
//                     <div className="flex-1"><h5 className="text-lg font-bold text-[#0f172a] leading-[1.4] mb-6 group-hover:text-blue-700 transition-colors">{item.title}</h5></div>
//                     <div className="mt-auto">
//                       <div className="flex flex-col gap-1">
//                         <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest ml-1">Location / Context</p>
//                         <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50/50 transition-all border border-slate-100 group-hover:border-blue-100">
//                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
//                           <p className="text-[11px] font-bold text-slate-600 group-hover:text-blue-800 leading-tight">{item.venue}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         {/* 8. PATENTS SECTION */}
//         <section id="patents" className="px-6 md:px-32 py-24">
//           <SectionHeader title="Intellectual" highlight="Property" id="patents" />
//           <div className="max-w-6xl mx-auto mt-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 { title: "System and Method for Motion Analysis and Feedback for Amendment of Human Action", no: "201621029482", date: "30/08/2016", status: "GRANTED" },
//                 { title: "System and method for automated evaluation of multimodal content", no: "202221060608", date: "11/11/2022", status: "GRANTED" },
//                 { title: "System and method for analysis of human movement and suggestions of amendment", no: "2023/05683", date: "2023", status: "GRANTED" },
//                 { title: "Personalized physical activity recommendations system using federated learning (FL)", no: "202321029305", date: "15/09/2023", status: "PUBLISHED" },
//                 { title: "Hydroponic Nutrient Prediction Device using IoT", no: "202321039419", date: "18/08/2023", status: "PUBLISHED" }
//               ].map((patent, i) => (
//                 <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ delay: i * 0.05 }}
//                   className="group flex flex-col justify-between p-8 bg-white border border-slate-100 rounded-[32px] hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
//                 >
//                   <div>
//                     <div className="flex items-center justify-between mb-6">
//                       <span className={`text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full ${patent.status === 'GRANTED' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{patent.status}</span>
//                       <span className="text-[11px] font-bold text-slate-400">{patent.date}</span>
//                     </div>
//                     <h5 className="text-lg font-bold text-[#0f172a] leading-tight mb-6 group-hover:text-blue-600 transition-colors">{patent.title}</h5>
//                   </div>
//                   <div className="pt-6 border-t border-slate-50 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
//                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Official Number</p>
//                       <p className="font-mono text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{patent.no}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 9. PHD STUDENTS SECTION */}
//         <section id="phdstudents" className="px-6 md:px-32 py-16">
//           <SectionHeader title="Research" highlight="Guidance" id="phdstudents" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//             {[
//               { name: "Pravin Patil", topic: "Security in Multi-Tenant Distributed System", status: "Completed March 2025", center: "PICT, SPPU" },
//               { name: "Madhuri Wakode", topic: "Aggregation algorithm for federated learning", status: "In Progress", center: "Center PICT, SPPU" },
//               { name: "Priyanka Chaudhari", topic: "Explainable AI for HAR", status: "In Progress", center: "Center PICT, SPPU" },
//               { name: "Niranjan Deokule", topic: "Explainable AI for GIS", status: "In Progress", center: "Center PICT, SPPU" }
//             ].map((stud, i) => (
//               <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ delay: i * 0.1 }}
//                 className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all group flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex items-center gap-2 mb-6">
//                     <span className={`w-2 h-2 rounded-full ${stud.status.includes('Completed') ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'}`} />
//                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stud.status}</span>
//                   </div>
//                   <h4 className="text-xl font-black text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors">{stud.name}</h4>
//                   <p className="text-sm text-slate-600 font-medium leading-relaxed italic border-l-2 border-slate-100 pl-4 py-1 group-hover:border-blue-200 transition-colors">"{stud.topic}"</p>
//                 </div>
//                 <div className="mt-8 pt-6 border-t border-slate-50">
//                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">Affiliation</p>
//                   <p className="text-xs font-bold text-slate-500">{stud.center}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* 10. CONTACT SECTION */}
//         <section id="contact" className="px-6 md:px-32 py-32">
//           <div className="bg-[#0f172a] rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5">
//             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
//               <div className="relative shrink-0">
//                 <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-blue-500/30 p-2">
//                   <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#0f172a]">
//                     <Image src="/contact-image.png" alt="Dr. Geetanjali Kale" fill className="object-cover" />
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-xl text-xs font-black tracking-widest shadow-xl whitespace-nowrap">PICT, PUNE</div>
//               </div>
//               <div className="flex-1 text-center lg:text-left">
//                 <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Let's <span className="text-blue-400 italic">Connect.</span></h2>
//                 <div className="space-y-6 max-w-4xl">
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-black text-white">Dr. Geetanjali Kale</h3>
//                     <p className="text-blue-400 text-lg font-bold mb-6">Head & Associate Professor, Dept. of Computer Engineering, PICT</p>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300">
//                     <div className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><p className="leading-tight font-medium">Secretary, ACM India Woman | Senior Member ACM & IEEE</p></div>
//                     <div className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><p className="leading-tight font-medium">Chair ACMW Pune Professional Chap. | Former BoS CE SPPU</p></div>
//                     <div className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><p className="leading-tight font-medium">Core member of AnitaB.org</p></div>
//                     <div className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><p className="leading-tight font-medium">Research: Computer Vision & Explainable AI</p></div>
//                   </div>
//                   <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
//                     <button className="px-8 py-4 bg-blue-600 rounded-2xl font-black text-sm hover:bg-white hover:text-blue-600 transition-all shadow-lg">LinkedIn</button>
//                     <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-black text-sm hover:bg-white/20 transition-all">Email</button>
//                     <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-sm hover:bg-white/10 transition-all">Personal Mail</button>
//                     <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-sm hover:bg-white/10 transition-all">Phone </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }



"use client";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, Inbox, Phone,UserCircle } from 'lucide-react';


// Helper for Section Headers
const SectionHeader = ({ title, highlight, id }: { title: string, highlight: string, id: string }) => (
  <div id={id} className="flex items-center gap-6 mb-12 pt-24">
    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tighter">
      {title} <span className="text-blue-600 italic">{highlight}</span>
    </h2>
    <div className="h-px flex-1 bg-slate-200" />
  </div>
);

// Category Style Mapping to fix TypeScript 'any' error and improve performance
const CATEGORY_STYLES: Record<string, string> = {
  Leadership: "bg-blue-600 text-white shadow-lg shadow-blue-200",
  "Expert Talk": "bg-indigo-600 text-white shadow-lg shadow-indigo-200",
  Workshop: "bg-emerald-600 text-white shadow-lg shadow-emerald-200",
  Guest: "bg-amber-500 text-white shadow-lg shadow-amber-200",
  Volunteer: "bg-slate-700 text-white shadow-lg shadow-slate-200",
};

const DEFAULT_CATEGORY_STYLE = "bg-blue-500 text-white shadow-lg shadow-blue-100";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fdfaf5] scroll-smooth selection:bg-blue-100 selection:text-blue-600">
      
      {/* FIXED BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `radial-gradient(#3073f0 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} 
        />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] rounded-full opacity-[0.08]" 
          style={{ background: `radial-gradient(circle, #3073f0 0%, #5d95f5 70%, transparent 100%)`, filter: "blur(120px)" }}
        />
      </div>

      <div className="relative z-10">
        <Sidebar />
        <SocialLinks />
        
        <section id="home">
          <Hero />
        </section>

      {/* 1. ABOUT SECTION */}
<section id="about" className="px-6 md:px-32 py-24">
  <SectionHeader title="About" highlight="Me" id="about" />

  <motion.div 
    whileInView={{ opacity: 1, y: 0 }} 
    initial={{ opacity: 0, y: 30 }}
    className="bg-[#0f172a] rounded-[64px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5"
  >
    {/* Background Decorative Element */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />

    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      
      {/* LEFT: Portrait Circle (Mirroring Contact Section) */}
      <div className="relative shrink-0">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-blue-500/20 p-2">
          <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#0f172a]">
            <Image 
              src="/contact-image.png" 
              alt="Dr. Geetanjali Kale" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-lg text-[10px] font-black tracking-[0.2em] shadow-xl whitespace-nowrap">
           PICT • PUNE
        </div>
      </div>

      {/* RIGHT: Content Area */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
          Leading the Future of <br />
          <span className="text-blue-400 italic">Computer Engineering.</span>
        </h2>

        <div className="space-y-8">
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0">
            As the <span className="text-white font-bold">Head of Department</span> at PICT, I bridge the gap between academic excellence and industrial research, specializing in <span className="text-blue-400">Computer Vision</span> and <span className="text-white">Explainable AI</span>.
          </p>

          {/* Qualifications & Key Info (Mirroring Contact List Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-slate-400">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-blue-500 text-xl">✦</span>
              <p className="font-bold tracking-tight text-white/90">Ph.D. Computer Engineering <span className="text-slate-600 font-mono ml-2">2017</span></p>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-blue-500 text-xl">✦</span>
              <p className="font-bold tracking-tight text-white/90">M.E. Computer Engineering <span className="text-slate-600 font-mono ml-2">2004</span></p>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-blue-500 text-xl">✦</span>
              <p className="font-medium">Savitribai Phule Pune University</p>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-blue-500 text-xl">✦</span>
              <p className="font-medium">Pune Institute of Computer Technology</p>
            </div>
          </div>

          {/* Impact Metrics (Condensed) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center lg:items-start group hover:border-emerald-500/30 transition-all">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Funded Research</span>
               <span className="text-xl font-black text-emerald-400">₹1.9L</span>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center lg:items-start group hover:border-indigo-500/30 transition-all">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Consultancy Grant</span>
               <span className="text-xl font-black text-indigo-400">₹3.0L</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </motion.div>
</section>

        {/* 2. GALLERY SECTION */}
        <section id="gallery" className="px-6 md:px-32 py-16">
          <SectionHeader title="Moments &" highlight="Milestones" id="gallery" />
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
              {[
                { img: "/event1.png", label: "ACM Committee", h: "h-64" },
                { img: "/event2.png", label: "PICT Campus", h: "h-80" },
                { img: "/event3.png", label: "Professional Chapter", h: "h-64" },
                { img: "/event4.png", label: "Keynote Session", h: "h-80" },
                { img: "/event5.png", label: "Expert Talk", h: "h-64" }
              ].map((item, i) => (
                <div key={i} className={`${item.h} bg-slate-200 rounded-[32px] overflow-hidden group relative shadow-md`}>
                   <div className="absolute inset-0 bg-slate-300 animate-pulse" />
                   <Image 
                     src={item.img} 
                     alt={item.label}
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold transition-opacity z-20">
                     {item.label}
                   </div>
                </div>
              ))}
          </div>
        </section>
{/* 3. AWARDS SECTION */}
<section id="awards" className="px-6 md:px-32 py-24 bg-transparent relative overflow-hidden">
  {/* Optional: Keeps the decorative glow but makes it subtle so it doesn't clash with your main background */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-50/20 blur-[120px] rounded-full pointer-events-none -z-10" />

  <SectionHeader title="Honors &" highlight="Awards" id="awards" />
  
  <div className="max-w-7xl mx-auto mt-12 relative z-10">
    
    {/* Additional Recognition: 3-Column Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {[
        { title: "Wipro Mission 10X", subtitle: "Teaching Learning Excellence" },
        { title: "NITTTR Certification", subtitle: "Developing Teaching Competencies" },
        { title: "B.Voc. BoS Member", subtitle: "Board of Studies, SPPU Pune" }
      ].map((cert, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 10 }}
          // Changed bg-slate-50 to a transparent white with backdrop-blur
          className="p-6 bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-300 shadow-sm"
        >
          <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2 group-hover:text-blue-200">Recognition</span>
          <h5 className="text-sm font-bold text-[#0f172a] group-hover:text-white transition-colors">{cert.title}</h5>
          <p className="text-[11px] text-slate-500 mt-1 group-hover:text-blue-100 font-medium">{cert.subtitle}</p>
        </motion.div>
      ))}
    </div>

    {/* Major Honors: 3-Column Professional Grid */}
    {/* Added a semi-transparent container to slightly define the area without hiding the background */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white/10 backdrop-blur-sm rounded-[40px] border border-white/20">
      {[
        { title: "Council Member, ACM India", desc: "Internal Engagement Committee", year: "2020 – Present" },
        { title: "Secretary/Treasurer, ACM India Women", desc: "Executive Committee Member", year: "2023 – 2027" },
        { title: "Chair, ACM-W Pune Professional Chapter", desc: "Leadership in Professional Development", year: "2022 – Present" },
        { title: "PASC Counselor", desc: "4x Best ACM Student Chapter India Award", year: "2017 – 2020" },
        { title: "ACM Distinguished Service", desc: "Recognition for 8 Years of Excellence", year: "Awarded 2024" },
        { title: "Cambridge Int. Certification", desc: "Teaching & Training (Distinction)", year: "Certified" },
        { title: "Board of Studies Member", desc: "Computer Engineering, SPPU Pune", year: "2017 – 2022" },
        { title: "Classroom Innovation Representative", desc: "West Zone Representative", year: "Nominated 2010" }
      ].map((award, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          // Cards are now semi-transparent to let the background peak through
          className="group relative p-8 bg-white/70 backdrop-blur-lg border border-white/40 rounded-[32px] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50/80 px-3 py-1 rounded-full uppercase tracking-wider">
                {award.year}
              </span>
              <span className="text-blue-200 group-hover:text-blue-500 transition-colors">✦</span>
            </div>
            
            <h4 className="text-lg font-bold text-[#0f172a] leading-tight mb-2 group-hover:text-blue-600 transition-colors">
              {award.title}
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {award.desc}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Honorary Mention</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

       {/* 4. BOOK CHAPTERS */}
<section id="bookchapters" className="px-6 md:px-32 py-24 bg-transparent relative overflow-hidden">
  <SectionHeader title="Book" highlight="Chapters" id="bookchapters" />
  
  <div className="max-w-5xl mx-auto mt-16 relative z-10">
    <div className="space-y-4">
      {[
        { 
          title: "Research Methodology: A Practical and Scientific Approach", 
          authors: "Geetanjali V. Kale and J. Jayanath",
          detail: "Chapter 1: Introduction to research", 
          type: "Scientific Foundation" 
        },
        { 
          title: "Artificial Intelligence for Internet of Things", 
          authors: "Geetanjali V. Kale, Kalyani Waghmare",
          detail: "Heterogeneous data management in IoT-based health care systems", 
          type: "IoT & Healthcare" 
        },
        { 
          title: "XAI Based Intelligent Systems for Society 5.0", 
          authors: "Geetanjali V. Kale, Priyanka Chaudhari",
          detail: "XAI in human motion recognition and analysis for envisioning society: A systematic review", 
          type: "Explainable AI" 
        }
      ].map((book, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 p-10 bg-white/40 backdrop-blur-md border border-white/40 rounded-[40px] hover:bg-white/80 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
        >
          {/* Section 1: Domain & Meta */}
          <div className="flex flex-col justify-start space-y-4 border-b md:border-b-0 md:border-r border-slate-200/50 pb-4 md:pb-0">
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                Published
              </span>
            </div>
            
            <div className="bg-slate-100/50 rounded-2xl p-4 mr-4 group-hover:bg-blue-50 transition-colors">
              <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Domain</p>
              <p className="text-xs font-bold text-[#0f172a] leading-tight">
                {book.type}
              </p>
            </div>
          </div>

          {/* Section 2: Content & Citation */}
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl font-black text-[#0f172a] tracking-tight group-hover:text-blue-600 transition-all duration-300 leading-[1.2]">
              {book.title}
            </h4>
            
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-400 uppercase">Lead Authors</span>
                <span className="text-sm font-bold text-slate-600">{book.authors}</span>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4 p-4 bg-blue-50/30 rounded-2xl border border-blue-100/20 group-hover:bg-blue-50/50 transition-all">
              <div className="shrink-0 mt-1">
                <div className="w-5 h-5 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold italic">C</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Chapter Highlight</p>
                <p className="text-sm text-slate-700 font-medium italic leading-relaxed">
                  "{book.detail}"
                </p>
              </div>
            </div>
          </div>

          {/* Hidden "Read More" arrow that appears on hover */}
          <div className="absolute right-8 bottom-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
            <div className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center text-blue-600">
              <span className="text-xl">→</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

       {/* 5. RESEARCH (Journal Publications) */}
<section id="research" className="px-6 md:px-32 py-24 bg-transparent relative overflow-hidden">
  <SectionHeader title="Journal" highlight="Publications" id="research" />
  
  <div className="max-w-7xl mx-auto mt-12 relative z-10">
    {/* Research Indices Links */}
    <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-slate-100 pb-10">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mr-2">Verified Profiles:</span>
      {[
        { name: "Google Scholar", url: "https://scholar.google.com/citations?user=rJpGXxoAAAAJ" },
        { name: "Scopus Profile", url: "https://www.scopus.com/authid/detail.uri?authorId=57194208000" }
      ].map((link, i) => (
        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full text-sm font-bold text-[#0f172a] hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-blue-500/10 group">
          <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:animate-pulse" />
          {link.name}
          <svg className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ))}
    </div>

    {/* Publications Grid - Styled like Conference Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: "A Survey of Motion Prediction for Autonomous Vehicles Using the Lyft Dataset", meta: "LNNS, 2024, 819, pp. 429–441" },
        { title: "Evaluating Performances of Attention-Based Merge Architecture Models for Image Captioning", meta: "Journal of Image and Graphics, 2023, 11(3)" },
        { title: "XAI in human motion recognition and analysis for envisioning society: A systematic review", meta: "XAI Based Intelligent Systems, 2023" },
        { title: "Comparative Analysis of Weighted Ensemble and Majority Voting for Intrusion Detection", meta: "IJACSA, 2023, 14(12), pp. 741–747" },
        { title: "Domain Classification for Marathi blog articles using Deep learning", meta: "IJRITCC, Vol. 11 Issue: 10, 2023" },
        { title: "TextGram: Towards a Better Domain-Adaptive Pretraining", meta: "SPELL 2023, CCIS, vol 2046. Springer, 2024" },
        { title: "A novel and intelligent vision-based tutor for Yogāsana: e-YogaGuru", meta: "Machine Vision and Applications (MVPA), 2020" },
        { title: "A study of vision based human motion recognition and analysis", meta: "IJACI 7.2 (2016): 75-92 (Scopus)" },
        { title: "Survey on one time password", meta: "IJCEA 9.3 (2015) (UGC Approved)" },
        { title: "A Survey of Methods for Automatic Question Paper Generation System", meta: "IJEMA Vol. XI, Issue VII, 2019" },
        { title: "Survey of Load Balancing and Scaling approaches in cloud", meta: "IJETTCS, 2015 (Scopus)" },
        { title: "A survey of music recommendation system", meta: "IJSREIT 3.3 (2018): 1721-1729" },
        { title: "Automatic Question Paper Generation using Parametric Randomization", meta: "Journal of the Gujarat Research Society, 2019" },
        { title: "Smart Evaluation System", meta: "Journal of the Gujarat Research Society, 2019" },
        { title: "Study of Document Segmentation and English Character Recognition techniques", meta: "JETIR, Vol. 6, Issue 3, 2019" },
        { title: "Healthcare Analytics Systems: An Overview", meta: "International Journal of Engineering Science (2018)" },
        { title: "Real Time Human Action Recognition using Kinematic State Model", meta: "Advances in Image and Video Processing, 2014" },
        { title: "One Time Password Generation for Multi Factor Authentication using Graphical Password", meta: "IJERGS Vol. 3, Issue 5, 2015" },
        { title: "Survey on GPU based Linear Solver", meta: "IJSTE, Vol. 2, Issue 11, 2016" },
        { title: "Auto-Scaling of Micro-Services Using Containerization", meta: "IJSR, 9, September 2015" },
        { title: "IOT based health alliance help desk", meta: "IJETSR, 2017" },
        { title: "Vision Based Monitoring System for Old Age Homes", meta: "IJCTA, 10(9), 2017" },
        { title: "Human Activity Recognition on Real Time and Offline Dataset", meta: "IJISAE 7.1 (2019): 60-65" }
      ].map((pub, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
          className="flex gap-6 items-start p-8 bg-white/70 backdrop-blur-md border border-white/40 rounded-[32px] hover:border-blue-200 hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
        >
          <div className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
            {String(i + 1).padStart(2, '0')}
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#0f172a] mb-2 leading-tight group-hover:text-blue-600 transition-colors">
              {pub.title}
            </h4>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <p className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">
                {pub.meta}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

       {/* 6. CONFERENCE */}
<section id="conference" className="px-6 md:px-32 py-24 bg-transparent relative overflow-hidden">
  <SectionHeader title="Conference" highlight="Papers" id="conference" />
  
  <div className="max-w-7xl mx-auto mt-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: "Bharatnatyam Adavu Recognition from Depth Data", venue: "IEEE ICIIP, 2015" },
        { title: "Motion Correction in Physical Action of Human Body Applied to Yogasana", venue: "Springer, Berlin, 2013" },
        { title: "Automatic Detection of Cervical Region from VIA and VILI Images", venue: "22nd IEEE CSE, New York" },
        { title: "Comparison of Machine Learning Algorithms for Cervical Abnormality Detection", venue: "12th IC3, Noida, India" },
        { title: "PARTHA: A Visually Impaired Assistance System", venue: "IEEE CSCITA, 2020" },
        { title: "Comparative Study of Long Document Classification", venue: "TENCON 2021 - IEEE Region 10" },
        { title: "ShufText: Evaluate the Fragility of Text Classification Models", venue: "LOD 2021, Springer Cham" },
        { title: "Mars Imagery Classification: Galactic Battle between Knowledge Transfer Networks", venue: "IEEE I2CT, 2022" }
      ].map((conf, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
          className="flex gap-6 items-start p-8 bg-white/70 backdrop-blur-md border border-white/40 rounded-[32px] hover:border-blue-200 hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
        >
          <div className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
            {String(i + 1).padStart(2, '0')}
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#0f172a] mb-2 leading-tight group-hover:text-blue-600 transition-colors">
              {conf.title}
            </h4>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <p className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">
                {conf.venue}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* 7. INVITED TALKS & SESSIONS */}
        <section id="invitedtalks" className="px-6 md:px-32 py-24">
          <SectionHeader title="Invited" highlight="Talks & Sessions" id="invitedtalks" />
          <div className="max-w-7xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { category: "Leadership", title: "TPC Chair & Organizing Chair for ICEI-2022", venue: "International Conference on Emerging Information", date: "2022" },
                { category: "Leadership", title: "Organising Co-chair for CTiS 2022-2024", venue: "Computational Thinking in Schools", date: "2022 - 2024" },
                { category: "Expert Talk", title: "Visualising Data Science & Computer Vision", venue: "Indira College of Engineering, Pune", date: "21 Mar. 2024" },
                { category: "Expert Talk", title: "Data Analytics in Computer Vision", venue: "AICTE-ISTE Refresher Course @ RSCOE", date: "16 Dec. 2020" },
                { category: "Expert Talk", title: "Research Trends In CE & IT", venue: "Chief Guest @ SKNCOE, Pune", date: "4 Jan. 2021" },
                { category: "Workshop", title: "Computer Graphics and Gaming", venue: "Resource Person for SPPU faculty @ AIT", date: "Resource Person" },
                { category: "Workshop", title: "Computer Graphics (Theory and Lab)", venue: "Resource Person for SPPU faculty @ SIT", date: "Resource Person" },
                { category: "Leadership", title: "Curriculum Design & Content Delivery", venue: "Moderator @ D. Y Patil College, Akurdi", date: "Moderator" },
                { category: "Guest", title: "Cyber Security Workshop", venue: "Chief Guest @ Manjari College of Engineering", date: "Chief Guest" },
                { category: "Workshop", title: "Android Application Development", venue: "Women from Industry @ VMware", date: "Organizer" },
                { category: "Volunteer", title: "Computational Thinking at School", venue: "Gurukul School @ CSPathshala", date: "Volunteer" },
                { category: "Workshop", title: "Computer Graphics (University Level)", venue: "Workshop for CE Faculty Members", date: "One Day" },
                { category: "Workshop", title: "Computer Graphics & Gaming Using QT", venue: "Workshop for CE Faculty Members", date: "One Day" },
                { category: "Expert Talk", title: "Transformations, Animation and Gaming", venue: "Expert lecture @ APCOE, Pune", date: "Expert Lecture" },
                { category: "Session", title: "Mission 10X Learning Approach", venue: "Computer Department PICT, Pune", date: "2009" }
              ].map((item, i) => (
                <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}
                  className="group relative flex flex-col p-8 bg-white border border-slate-200/60 rounded-[32px] hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                >
                  <div className="flex justify-between items-center mb-8">
                    <span className={`text-[10px] font-black uppercase tracking-[0.1em] px-4 py-1.5 rounded-full transition-transform group-hover:-translate-y-1 ${CATEGORY_STYLES[item.category] || DEFAULT_CATEGORY_STYLE}`}>
                      {item.category}
                    </span>
                    <span className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{item.date}</span>
                  </div>
                  <div className="flex-1"><h5 className="text-lg font-bold text-[#0f172a] leading-[1.4] mb-6 group-hover:text-blue-700 transition-colors">{item.title}</h5></div>
                  <div className="mt-auto">
                    <div className="flex flex-col gap-1">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest ml-1">Location / Context</p>
                      <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50/50 transition-all border border-slate-100 group-hover:border-blue-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <p className="text-[11px] font-bold text-slate-600 group-hover:text-blue-800 leading-tight">{item.venue}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PATENTS SECTION */}
        <section id="patents" className="px-6 md:px-32 py-24">
          <SectionHeader title="Intellectual" highlight="Property" id="patents" />
          <div className="max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "System and Method for Motion Analysis and Feedback for Amendment of Human Action", no: "201621029482", date: "30/08/2016", status: "GRANTED" },
                { title: "System and method for automated evaluation of multimodal content", no: "202221060608", date: "11/11/2022", status: "GRANTED" },
                { title: "System and method for analysis of human movement and suggestions of amendment", no: "2023/05683", date: "2023", status: "GRANTED" },
                { title: "Personalized physical activity recommendations system using federated learning (FL)", no: "202321029305", date: "15/09/2023", status: "PUBLISHED" },
                { title: "Hydroponic Nutrient Prediction Device using IoT", no: "202321039419", date: "18/08/2023", status: "PUBLISHED" }
              ].map((patent, i) => (
                <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ delay: i * 0.05 }}
                  className="group flex flex-col justify-between p-8 bg-white border border-slate-100 rounded-[32px] hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full ${patent.status === 'GRANTED' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{patent.status}</span>
                      <span className="text-[11px] font-bold text-slate-400">{patent.date}</span>
                    </div>
                    <h5 className="text-lg font-bold text-[#0f172a] leading-tight mb-6 group-hover:text-blue-600 transition-colors">{patent.title}</h5>
                  </div>
                  <div className="pt-6 border-t border-slate-50 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Official Number</p>
                      <p className="font-mono text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{patent.no}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. PHD STUDENTS SECTION */}
        <section id="phdstudents" className="px-6 md:px-32 py-16">
          <SectionHeader title="Research" highlight="Guidance" id="phdstudents" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: "Pravin Patil", topic: "Security in Multi-Tenant Distributed System", status: "Completed March 2025", center: "PICT, SPPU" },
              { name: "Madhuri Wakode", topic: "Aggregation algorithm for federated learning", status: "In Progress", center: "Center PICT, SPPU" },
              { name: "Priyanka Chaudhari", topic: "Explainable AI for HAR", status: "In Progress", center: "Center PICT, SPPU" },
              { name: "Niranjan Deokule", topic: "Explainable AI for GIS", status: "In Progress", center: "Center PICT, SPPU" }
            ].map((stud, i) => (
              <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`w-2 h-2 rounded-full ${stud.status.includes('Completed') ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'}`} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stud.status}</span>
                  </div>
                  <h4 className="text-xl font-black text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors">{stud.name}</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed italic border-l-2 border-slate-100 pl-4 py-1 group-hover:border-blue-200 transition-colors">"{stud.topic}"</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1">Affiliation</p>
                  <p className="text-xs font-bold text-slate-500">{stud.center}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 10. CONTACT SECTION */}
<section id="contact" className="px-6 md:px-32 py-32 bg-transparent">
  <div className="bg-[#0f172a] rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5">
    
    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
      {/* Profile Image Area */}
      <div className="relative shrink-0">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-blue-500/30 p-2">
          <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#0f172a]">
            <Image src="/contact-image.png" alt="Dr. Geetanjali Kale" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-xl text-[10px] font-black tracking-widest shadow-xl">PICT, PUNE</div>
      </div>

      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
          Let's <span className="text-blue-400 italic">Connect.</span>
        </h2>
        
        <div className="space-y-8 max-w-4xl">
          <div className="border-b border-white/10 pb-6">
            <h3 className="text-3xl font-black text-white mb-1">Dr. Geetanjali Kale</h3>
            <p className="text-blue-400 text-lg font-bold">Head & Associate Professor, Dept. of Computer Engineering, PICT</p>
          </div>

          {/* Professional Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-slate-300 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">✦</span>
              <p className="leading-relaxed">Secretary, ACM India Woman | Senior Member ACM & IEEE</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">✦</span>
              <p className="leading-relaxed">Chair ACMW Pune Professional Chap. | Former BoS CE SPPU</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">✦</span>
              <p className="leading-relaxed">Core member of AnitaB.org</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">✦</span>
              <p className="leading-relaxed">Research Focus: Computer Vision & Explainable AI</p>
            </div>
          </div>

          {/* Social Icon Row (Matching the sidebar links) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6">
            {[
              { icon: <Linkedin size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/in/dr-geetanjali-kale-17148922/" },
              { icon: <Mail size={22} />, label: "PICT Mail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=gvkale@pict.edu" },
              { icon: <UserCircle size={22} />, label: "Personal", href: "https://mail.google.com/mail/?view=cm&fs=1&to=gvkale@gmail.com" },
              { icon: <Phone size={22} />, label: "Call", href: "tel:+919822477645" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 transition-all duration-300"
              >
                <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </div>
                <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-bottom-12 transition-all text-[10px] font-bold uppercase tracking-widest text-blue-400 whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </main>
  );
}