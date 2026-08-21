import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile.jpeg"; 
import { FaArrowRight, FaPaperPlane, FaLaptopCode, FaCheckCircle, FaTrophy } from "react-icons/fa";

export default function Home() {
  const roles = [
    "CIS Undergraduate",
    "Web Developer",
    "UI/UX Designer",
    "Mobile App Developer",
    "Software QA Engineer"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-50/70 pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Background Animated Blobs for subtle elegance */}
      <motion.div 
        className="absolute top-12 left-10 w-96 h-96 bg-[#B8E1DD] rounded-full filter blur-[100px] opacity-40 z-0 pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-[#3A9188] rounded-full filter blur-[140px] opacity-20 z-0 pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">

        {/* Text Content Area */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#044A42] via-[#3A9188] to-[#062925]">
              Dilani Thathsarani
            </span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-semibold mb-6 h-12 flex items-center justify-center lg:justify-start">
            
            <span className="text-[#3A9188] font-bold border-b-2 border-[#3A9188]/40 pb-0.5">
              <AnimatePresence mode="wait" className="space-between">
                <motion.span
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Passionate Computing & Information Systems undergraduate at Sabaragamuwa University of Sri Lanka. 
            I specialize in crafting intuitive web & mobile interfaces, writing scalable code, and ensuring application quality with rigorous software testing.
          </p>

          {/* Quick Skill Tags */}
          <div className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start">
            <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs md:text-sm font-medium text-slate-700 shadow-sm flex items-center gap-1.5">
              <FaLaptopCode className="text-[#3A9188]" /> React & Flutter
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs md:text-sm font-medium text-slate-700 shadow-sm flex items-center gap-1.5">
              <FaCheckCircle className="text-[#3A9188]" /> Software Testing
            </span>
            <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs md:text-sm font-medium text-slate-700 shadow-sm flex items-center gap-1.5">
              <FaLaptopCode className="text-[#3A9188]" /> Node.js & MySQL
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#044A42] to-[#3A9188] hover:from-[#062925] hover:to-[#044A42] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <FaPaperPlane className="mr-2 text-sm" /> Hire Me Now
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white border border-slate-300 text-slate-800 hover:text-[#044A42] hover:border-[#3A9188] font-bold text-base rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              Explore Projects <FaArrowRight className="ml-2 text-sm text-[#3A9188]" />
            </a>
          </div>

          {/* Highlights Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#B8E1DD]/30 text-[#044A42]">
                <FaTrophy className="text-xl" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-slate-900 leading-none">7+</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Hackathons</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#B8E1DD]/30 text-[#044A42]">
                <FaLaptopCode className="text-xl" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-slate-900 leading-none">3+</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Projects Built</p>
              </div>
            </div>

            
          </div>

        </motion.div>

        {/* Profile Image Presentation Area */}
        <motion.div
          className="lg:col-span-5 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Background Decorative Rings */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#3A9188] to-[#B8E1DD] rotate-6 opacity-40 blur-lg" />
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-[#3A9188]/30 -rotate-3" />

            {/* Profile Image Card */}
            <div className="relative w-full h-full bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden group">
              <img
                src={profileImg}
                alt="Dilani Thathsarani"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062925]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>

            {/* Floating Info Pill 1 */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#044A42] text-white flex items-center justify-center font-bold text-sm">
                BSc
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Computing & IS</p>
                <p className="text-[10px] text-slate-500">Sabaragamuwa Univ.</p>
              </div>
            </motion.div>

            {/* Floating Info Pill 2 */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-slate-800">Open to Hire</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

