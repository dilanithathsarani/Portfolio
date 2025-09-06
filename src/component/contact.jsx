import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#3A9188] py-20 px-6 flex flex-col items-center overflow-x-hidden"
    >
      <motion.h2
        className="text-4xl font-bold text-[#062925] mb-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <p className="text-[#062925] mb-12 text-center max-w-2xl">
        You can reach me via WhatsApp, LinkedIn, or Email. I’m happy to connect!
      </p>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="https://wa.me/0741498949"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          <FaWhatsapp className="text-2xl" /> WhatsApp
        </a>

        <a
          href="https://www.linkedin.com/in/dilani-thathsarani-4a4984316"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          <FaLinkedin className="text-2xl" /> LinkedIn
        </a>

        <a
          href="mailto:dilanithathsarani2003@gmail.com"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          <FaEnvelope className="text-2xl" /> Email
        </a>
      </motion.div>

      <motion.form
        className="bg-[#B8E1DD] shadow-2xl rounded-xl p-8 max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#044A42] bg-[#DDFFFC] text-[#062925]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#044A42] bg-[#DDFFFC] text-[#062925]"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#044A42] bg-[#DDFFFC] text-[#062925]"
        ></textarea>
        <button className="px-6 py-3 bg-[#044A42] text-white rounded-lg hover:bg-[#3A9188] transition">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
