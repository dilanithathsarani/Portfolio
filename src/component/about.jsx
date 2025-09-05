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
      institution: "Nenapiyasa Rural Education Development & Vocational Training Institute, Galle",
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

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
              className="w-90 h-90 md:w-100 md:h-100 object-cover rounded-full border-4 border-[#3A9188] shadow-[0_0_80px_#3A9188]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#3A9188] via-[#B8E1DD] to-[#3A9188] opacity-40 blur-3xl -z-10"
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
              className="text-4xl font-bold mb-6 text-[#B8E1DD]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>

            <div className="space-y-4 text-[#B8E1DD] max-w-xl">
              {aboutPoints.map((point, index) => (
                <motion.p
                  key={index}
                  className="text-lg leading-relaxed"
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
              className="inline-flex items-center px-6 py-4 bg-[#3A9188] text-white font-medium rounded-xl shadow-lg hover:bg-[#062925] transition mt-6"
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
        className="min-h-screen flex items-center justify-center bg-[#044A42] px-4 py-20"
      >
        <div className="max-w-4xl mx-auto relative">
          <motion.h2
            className="text-4xl font-bold mb-12 text-[#B8E1DD] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h2>

          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3A9188]/80 via-[#B8E1DD]/40 to-[#3A9188]/80 rounded"></div>

          <div className="space-y-12 ml-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#3A9188] p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>
                  {index !== educationData.length - 1 && (
                    <div className="flex-1 w-1 bg-[#3A9188]/40 mt-1 rounded"></div>
                  )}
                </div>

                <motion.div
                  className="bg-[#3A9188]/20 p-6 rounded-xl shadow-lg border border-[#B8E1DD]/20 w-80 hover:scale-105 transition-transform"
                >
                  <h3 className="text-xl font-semibold text-[#B8E1DD]">{edu.degree}</h3>
                  <p className="text-[#B8E1DD] mt-1">{edu.institution}</p>
                  {edu.achievement && (
                    <span className="text-[#B8E1DD]/80 mt-2 block font-medium">
                      {edu.achievement}
                    </span>
                  )}
                  <span className="text-[#B8E1DD]/60 mt-1 block text-sm">{edu.year}</span>
                  <span className="text-[#B8E1DD]/60 mt-1 block text-sm">{edu.time}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
