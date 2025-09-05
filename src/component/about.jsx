import { motion } from "framer-motion";
import profileImg from "../assets/about.jpg";
import { FaArrowRight, FaGraduationCap, FaSchool } from "react-icons/fa";

export default function About() {
  const aboutPoints = [
    "I'm Dilani Thathsarani from Galle, Southern Province. Passionate about Web Development, Mobile Apps, and becoming a QA Engineer in the future.",
    "Skilled in React, MySQL, Java, and Express.js, and enjoy building projects like Movie Ticket Booking System and AIVault.",
    "Constantly learning, improving, and excited to explore new technologies.",
  ];

  const educationData = [
    {
      degree: "BSc (Hons) Computing & Information Systems",
      institution: "Sabaragamuwa University of Sri Lanka",
      year: "Undergraduate",
      time: "2024 - Present",
      icon: <FaGraduationCap className="text-white text-2xl" />,
      achievement: "",
    },
    {
      degree: "Advanced Level (Mathematical Stream)",
      institution: "G/Anula Devi Balika Vidyalaya, Galle",
      year: "",
      time: "2020 - 2022",
      icon: <FaSchool className="text-white text-2xl" />,
      achievement: "ABS",
    },
    {
      degree: "Ordinary Level",
      institution: "G/Anula Devi Balika Vidyalaya, Galle",
      year: "",
      time: "2019",
      icon: <FaSchool className="text-white text-2xl" />,
      achievement: "4A's, 5B's",
    },
    {
      degree: "Certificate In Information Technology",
      institution:
        "Nenapiyasa Rural Education Development & Vocational Training Institute, Galle",
      year: "",
      time: "2020 Jan - 2020 Sep",
      icon: <FaSchool className="text-white text-2xl" />,
      achievement: "A",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-[#044A42] px-4 py-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.15, rotate: 3 }}
          >
            <motion.img
              src={profileImg}
              alt="Dilani Profile"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-[#3A9188] shadow-[0_0_80px_#3A9188]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-[#3A9188] via-[#B8E1DD] to-[#3A9188] opacity-40 blur-3xl -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-[#B8E1DD]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>

            <div className="space-y-4 text-[#B8E1DD] max-w-xl mx-auto md:mx-0">
              {aboutPoints.map((point, index) => (
                <motion.p
                  key={index}
                  className="text-base sm:text-lg leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {point
                    .split(
                      /(Web Development|Mobile Apps|QA Engineer|React|MySQL|Java|Express.js|Movie Ticket Booking System|AIVault)/g
                    )
                    .map((part, i) =>
                      /Web Development|Mobile Apps|QA Engineer|React|MySQL|Java|Express.js|Movie Ticket Booking System|AIVault/.test(
                        part
                      ) ? (
                        <span key={i} className="text-[#3A9188] font-medium">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 sm:py-4 bg-[#3A9188] text-white font-medium rounded-xl shadow-lg hover:bg-[#062925] transition mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              Contact Me <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section
        id="education"
        className="min-h-screen flex flex-col items-center justify-center bg-[#044A42] px-4 py-16 -mt-20 pb-15 overflow-x-hidden"
      >
        <div className="w-full max-w-6xl mx-auto relative">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-10 text-[#B8E1DD] text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h2>

          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-10 h-full w-1 bg-gradient-to-b from-[#3A9188]/80 via-[#B8E1DD]/40 to-[#3A9188]/80 rounded"></div>

          <div className="flex flex-col space-y-8 md:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-start relative w-full ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex flex-col items-center z-10 hidden md:flex">
                  <div className="bg-gradient-to-r from-[#3A9188] via-[#B8E1DD] to-[#3A9188] md:mr-5 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-2xl transition-transform hover:scale-110">
                    {edu.icon}
                  </div>
                  {index !== educationData.length - 1 && (
                    <div className="h-10 md:h-full w-1 bg-gradient-to-b from-[#3A9188]/40 via-[#B8E1DD]/20 to-[#3A9188]/40 mt-1 md:mt-2 rounded"></div>
                  )}
                </div>

                <motion.div
                  className={`bg-gradient-to-r from-[#3A9188]/30 via-[#B8E1DD]/20 to-[#3A9188]/30 p-5 md:p-6 rounded-2xl shadow-xl border border-[#B8E1DD]/20 w-full max-w-md hover:scale-105 transition-transform ${
                    index % 2 === 0 ? "md:ml-1 text-left" : "md:mr-5 text-left"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#B8E1DD]">
                    {edu.degree}
                  </h3>
                  <p className="text-[#B8E1DD] mt-1 text-sm sm:text-base md:text-lg">
                    {edu.institution}
                  </p>
                  {edu.achievement && (
                    <span className="text-[#B8E1DD]/80 mt-2 block font-medium text-sm sm:text-base md:text-base">
                      {edu.achievement}
                    </span>
                  )}
                  <div className="mt-2 flex justify-between md:flex-row-reverse text-xs sm:text-sm md:text-sm text-[#B8E1DD]/60">
                    <span>{edu.year}</span>
                    <span>{edu.time}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
