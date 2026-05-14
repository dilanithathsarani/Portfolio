import { motion } from "framer-motion";
import profileImg from "../assets/about.jpg";
import { FaArrowRight, FaSchool, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

export default function About() {
  const education = [
    {
      level: "Undergraduate",
      details: "BSc (Hons) in Computing & Information Systems",
      year: "Sabaragamuwa University of Sri Lanka",
      time: "2024 - Present",
      icon: <FaGraduationCap className="text-[#B8E1DD] w-5 h-5" />,
    },
    {
      level: "Advanced Level (A/L) – Mathematical Stream",
      details: "Results: ABS",
      year: "G/Anula Devi Balika Vidyalaya, Galle",
      time: "2020 - 2022",
      icon: <FaSchool className="text-[#B8E1DD] w-5 h-5" />,
    },
    {
      level: "Ordinary Level (O/L)",
      details: "Results: A4 s, B5 s",
      year: "G/Anula Devi Balika Vidyalaya, Galle",
      time: "2019",
      icon: <FaSchool className="text-[#B8E1DD] w-5 h-5" />,
    },
    {
      level: "Certificate In Information Technology",
      details: "Result: A",
      year: "Nenaiyasa - Rular Education Development & Vocational Training Institute",
      time: "2020 Jan - 2020 Sep",
      icon: <FaSchool className="text-[#B8E1DD] w-5 h-5" />,
    },
  ];

  const workExperience = [
    {
      role: "Assistant Accountant",
      company: "Ranjanas Holding (Pvt) Ltd",
      details: "Handled invoicing, payments, and financial records using accounting software.",
      time: "2023 Mar - 2025 Sep",
      icon: <FaBriefcase className="text-[#B8E1DD] w-5 h-5" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#044A42] px-6 py-24 overflow-hidden"
    >
      {/* Ambient Animated Background Blobs */}
      <motion.div 
        className="absolute top-40 right-10 w-[25rem] h-[25rem] bg-[#3A9188] rounded-full mix-blend-screen filter blur-[130px] opacity-20 z-0 pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-[20rem] h-[20rem] bg-[#B8E1DD] rounded-full mix-blend-screen filter blur-[100px] opacity-10 z-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start relative z-10 w-full">

        {/* Left Column: Image & Contact */}
        <motion.div
          className="flex flex-col items-center lg:items-start lg:sticky top-24"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          {/* Creative Image Container */}
          <div className="relative mb-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#3A9188] to-[#B8E1DD] rounded-[2.5rem] rotate-6 opacity-60 blur-sm"
              animate={{ rotate: [6, 8, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={profileImg}
              alt="Dilani About Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] border-2 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-10"
              whileHover={{ scale: 1.03, rotate: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-[#B8E1DD] to-[#7fcec5] text-[#062925] font-bold text-lg rounded-2xl shadow-[0_10px_30px_rgba(184,225,221,0.3)] hover:shadow-[0_10px_40px_rgba(184,225,221,0.5)] transition-all transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk <FaArrowRight className="ml-3" />
          </motion.a>
        </motion.div>

        {/* Right Column: Text & Timelines */}
        <motion.div
          className="text-center md:text-left flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#B8E1DD] to-[#3A9188]">
              About Me
            </h2>

            <div className="bg-[#3A9188]/10 border border-[#3A9188]/30 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              {/* Decorative background element inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8E1DD]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              {[
                `I'm Dilani Thathsarani from Galle, Southern Province, an undergraduate at Sabaragamuwa University of Sri Lanka. I’m passionate about Web Development, Mobile Apps, UI/UX designs and becoming a QA Engineer in the future.`,
                `I completed my education at G/Anula Devi Balika Vidyalaya, Galle, where I did my O/Ls and A/Ls in the Physical Science stream.`,
                `With skills in React, MySQL, Java, and Express.js, I enjoy building projects like E-Business platforms. I'm constantly learning, improving, and excited to explore new tech.`,
              ].map((text, index) => (
                <p key={index} className="text-lg text-gray-200 leading-relaxed mb-4 relative z-10 text-left">
                  {text
                    .split(/(Web Development|Mobile Apps|QA Engineer|React|MySQL|Java|Express.js|UI\/UX designs)/g)
                    .map((part, i) =>
                      /Web Development|Mobile Apps|QA Engineer|React|MySQL|Java|Express.js|UI\/UX designs/.test(part) ? (
                        <span key={i} className="text-[#B8E1DD] font-semibold drop-shadow-[0_0_5px_rgba(184,225,221,0.4)]">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-8 xl:gap-12">
            {/* Education Timeline */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#3A9188]/20 rounded-xl border border-[#3A9188]/40 shadow-sm">
                  <FaGraduationCap className="text-[#B8E1DD] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="relative border-l-2 border-[#3A9188]/40 ml-4 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#044A42] border-2 border-[#B8E1DD] group-hover:bg-[#B8E1DD] group-hover:shadow-[0_0_15px_#B8E1DD] transition-all duration-300"></span>
                    <div className="bg-[#3A9188]/10 border border-[#3A9188]/20 group-hover:border-[#3A9188]/50 rounded-2xl p-5 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 text-left">
                      <h4 className="font-bold text-[#B8E1DD] text-lg mb-1">{edu.level}</h4>
                      <p className="text-white text-sm mb-2 leading-snug">{edu.details}</p>
                      <p className="text-gray-400 text-xs mb-3 italic">{edu.year}</p>
                      <span className="inline-block px-3 py-1 bg-[#3A9188]/20 text-[#B8E1DD] text-xs font-bold rounded-full">
                        {edu.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Work Experience Timeline */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-8 mt-12 md:mt-0">
                <div className="p-3 bg-[#3A9188]/20 rounded-xl border border-[#3A9188]/40 shadow-sm">
                  <FaBriefcase className="text-[#B8E1DD] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>

              <div className="relative border-l-2 border-[#3A9188]/40 ml-4 space-y-8">
                {workExperience.map((work, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#044A42] border-2 border-[#B8E1DD] group-hover:bg-[#B8E1DD] group-hover:shadow-[0_0_15px_#B8E1DD] transition-all duration-300"></span>
                    <div className="bg-[#3A9188]/10 border border-[#3A9188]/20 group-hover:border-[#3A9188]/50 rounded-2xl p-5 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 text-left">
                      <h4 className="font-bold text-[#B8E1DD] text-lg mb-1">{work.role}</h4>
                      <p className="text-white text-sm font-medium mb-2">{work.company}</p>
                      <p className="text-gray-400 text-sm mb-3 leading-snug">{work.details}</p>
                      <span className="inline-block px-3 py-1 bg-[#3A9188]/20 text-[#B8E1DD] text-xs font-bold rounded-full">
                        {work.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
