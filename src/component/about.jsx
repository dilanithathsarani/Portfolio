import { motion } from "framer-motion";
import profileImg from "../assets/about.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
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
            className="w-90 h-90 md:w-90 md:h-90 object-cover rounded-full border-4 border-[#3A9188] shadow-[0_0_80px_#3A9188]"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-[#B8E1DD]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Me
          </motion.h2>

          {[
            `I'm Dilani Thathsarani, an undergraduate at Sabaragamuwa University of Sri Lanka. I’m passionate about Web Development, Mobile Apps, and becoming a QA Engineer in the future.`,
            `I completed my education at G/Anula Devi Balika Vidyalaya, Galle, where I did my O/Ls and A/Ls in the Physical Science stream.`,
            `With skills in React, MySQL, Java, and Express.js, I enjoy building projects like  E-Business platforms. I'm constantly learning, improving, and excited to explore new tech.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-lg text-[#B8E1DD] leading-relaxed mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {text
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

          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-4 bg-[#3A9188] text-white font-medium rounded-xl shadow-lg hover:bg-[#062925] transition m-[10px]"
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
  );
}
