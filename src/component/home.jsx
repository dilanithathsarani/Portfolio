import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg"; 
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#062925] px-6 py-16 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-[#B8E1DD]">Dilani Thathsarani</span>
          </h1>
          <h2 className="text-2xl text-[#B8E1DD] mb-6">
            Undergraduate at <span className="font-semibold">Sabaragamuwa University of Sri Lanka</span>
          </h2>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            I’m a <span className="font-semibold text-[#B8E1DD]">Web Developer</span>, 
            <span className="font-semibold text-[#B8E1DD]"> Mobile App Developer</span>, 
            and aspiring <span className="font-semibold text-[#B8E1DD]">QA Engineer</span>. 
            My passion lies in <span className="italic">designing user-friendly interfaces, writing clean code</span>, 
            and <span className="italic">testing systems for reliability</span>. 
            I aim to bridge creativity with technology to deliver impactful digital solutions.
          </p>

          <div className="space-y-3 text-gray-300 mb-6">
            <p>💻 Skilled in <span className="text-[#B8E1DD]">HTML,CSS,Java, JavaScript, MySQL</span></p>
            <p>🌱 Currently learning <span className="text-[#B8E1DD]">React & Flutter</span></p>
            <p>🎯 Interested in <span className="text-[#B8E1DD]">Software Quality Assurance</span></p>
          </div>

          <motion.a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-[#B8E1DD] text-[#062925] font-medium rounded-xl shadow-lg hover:bg-[#3A9188] hover:text-white transition"
            whileHover={{ scale: 1.05 }}
          >
            View My Projects <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>

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
                    className="absolute w-100 h-100 rounded-full bg-gradient-to-r from-[#3A9188] via-[#B8E1DD] to-[#3A9188] opacity-40 blur-3xl -z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
      </div>
    </section>
  );
}
