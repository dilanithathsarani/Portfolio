import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile.jpeg"; 
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const roles = ["CIS Undergraduate", "Web Developer", "UI/UX Designer", "QA Engineer", "Mobile App Developer"];
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
      className="relative min-h-screen flex items-center justify-center bg-[#062925] px-6 py-20 text-white overflow-hidden"
    >
      {/* Ambient Animated Background Blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-[#3A9188] rounded-full mix-blend-screen filter blur-[120px] opacity-30 z-0 pointer-events-none"
        animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#B8E1DD] rounded-full mix-blend-screen filter blur-[150px] opacity-20 z-0 pointer-events-none"
        animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full pt-10">

        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left flex flex-col justify-center" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8E1DD] to-[#3A9188] drop-shadow-sm mt-2 inline-block">
                Dilani Thathsarani
              </span>
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-medium tracking-wide min-h-[80px] lg:min-h-[100px] flex items-center justify-center lg:justify-start">
            <span className="text-[#B8E1DD] font-extrabold relative drop-shadow-[0_0_20px_rgba(58,145,136,1)] py-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ y: 30, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -30, opacity: 0, rotateX: 90 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                  className="inline-block whitespace-nowrap origin-bottom"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I’m an undergraduate at <span className="font-semibold text-white">Sabaragamuwa University of Sri Lanka</span>. 
            My passion lies in <span className="italic text-white">designing user-friendly interfaces</span>, <span className="italic text-white">writing clean code</span>, 
            and <span className="italic text-white">testing systems for reliability</span>. I aim to bridge creativity with technology to deliver impactful digital solutions.
          </p>

          {/* Glassmorphism Skill Pills */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start max-w-2xl">
             <span className="px-5 py-2.5 bg-[#3A9188]/10 hover:bg-[#3A9188]/20 transition-colors border border-[#3A9188]/30 rounded-full text-sm md:text-base font-medium text-[#B8E1DD] backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
               💻 HTML, CSS, JS, Java, MySQL
             </span>
             <span className="px-5 py-2.5 bg-[#3A9188]/10 hover:bg-[#3A9188]/20 transition-colors border border-[#3A9188]/30 rounded-full text-sm md:text-base font-medium text-[#B8E1DD] backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
               🌱 Learning React & Flutter
             </span>
             <span className="px-5 py-2.5 bg-[#3A9188]/10 hover:bg-[#3A9188]/20 transition-colors border border-[#3A9188]/30 rounded-full text-sm md:text-base font-medium text-[#B8E1DD] backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
               🎯 QA Engineering
             </span>
          </div>

          {/* Achievement & CTA Row */}
          <div className="flex flex-col sm:flex-row items-center gap-10 justify-center lg:justify-start">
            <motion.div 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              <h3 className="flex items-center gap-4 text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg text-left">
                <span className="text-yellow-400 text-6xl md:text-7xl leading-none drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]">
                  5+
                </span> 
                <span className="leading-tight">
                  Hackathons<br />Participated
                </span>
              </h3>
            </motion.div>

            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#3A9188] to-[#1d6159] border border-[#B8E1DD]/20 text-white font-bold text-lg rounded-2xl shadow-[0_10px_30px_rgba(58,145,136,0.4)] hover:shadow-[0_10px_40px_rgba(58,145,136,0.6)] transition-all transform hover:-translate-y-1 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects <FaArrowRight className="ml-3" />
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image Area */}
        <motion.div
          className="flex justify-center relative mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Decorative Rings */}
          <motion.div 
            className="absolute inset-0 m-auto w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full border-2 border-dashed border-[#B8E1DD]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-0 m-auto w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem] rounded-full border border-[#3A9188]/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />

          {/* Main Image */}
          <div className="relative z-10 w-80 h-80 md:w-96 md:h-96">
            <motion.img
              src={profileImg}
              alt="Dilani Profile"
              className="w-full h-full object-cover rounded-[2rem] border-4 border-[#3A9188] shadow-[0_0_50px_rgba(58,145,136,0.5)] rotate-3 hover:rotate-0 transition-transform duration-500"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Glowing Backdrop */}
            <motion.div
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[#3A9188] to-[#B8E1DD] opacity-30 blur-2xl -z-10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
