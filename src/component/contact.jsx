import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-[#062925] px-6 py-24 overflow-hidden"
    >
      {/* Ambient Animated Background Blobs */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 bg-[#3A9188] rounded-full mix-blend-screen filter blur-[150px] opacity-30 z-0 pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-[#B8E1DD] rounded-full mix-blend-screen filter blur-[150px] opacity-10 z-0 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#B8E1DD] to-[#3A9188]">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-6">
            <a
              href="https://wa.me/0741498949"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-4 rounded-2xl bg-[#3A9188]/10 border border-[#3A9188]/30 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(58,145,136,0.2)] transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-[#3A9188]/20 flex items-center justify-center text-[#B8E1DD] group-hover:bg-[#B8E1DD] group-hover:text-[#062925] transition-colors shadow-inner">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">WhatsApp</h4>
                <p className="text-[#B8E1DD]/70 text-sm mt-1">Send me a message</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dilani-thathsarani-4a4984316"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-4 rounded-2xl bg-[#3A9188]/10 border border-[#3A9188]/30 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(58,145,136,0.2)] transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-[#3A9188]/20 flex items-center justify-center text-[#B8E1DD] group-hover:bg-[#B8E1DD] group-hover:text-[#062925] transition-colors shadow-inner">
                <FaLinkedin className="text-2xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">LinkedIn</h4>
                <p className="text-[#B8E1DD]/70 text-sm mt-1">Let's connect professionally</p>
              </div>
            </a>

            <a
              href="mailto:dilanithathsarani2003@gmail.com"
              className="flex items-center gap-5 p-4 rounded-2xl bg-[#3A9188]/10 border border-[#3A9188]/30 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(58,145,136,0.2)] transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-[#3A9188]/20 flex items-center justify-center text-[#B8E1DD] group-hover:bg-[#B8E1DD] group-hover:text-[#062925] transition-colors shadow-inner">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Email</h4>
                <p className="text-[#B8E1DD]/70 text-sm mt-1">Drop me an email</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphism Form */}
        <motion.div
          className="bg-[#3A9188]/10 border border-[#3A9188]/30 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Inner decorative glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#B8E1DD]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <form className="relative z-10 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
            
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#062925]/50 border border-[#3A9188]/50 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#B8E1DD] focus:ring-1 focus:ring-[#B8E1DD] transition-all shadow-inner" 
              />
            </div>
            
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-[#062925]/50 border border-[#3A9188]/50 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#B8E1DD] focus:ring-1 focus:ring-[#B8E1DD] transition-all shadow-inner" 
              />
            </div>
            
            <div>
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                className="w-full bg-[#062925]/50 border border-[#3A9188]/50 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#B8E1DD] focus:ring-1 focus:ring-[#B8E1DD] transition-all resize-none shadow-inner"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-[#B8E1DD] to-[#7fcec5] text-[#062925] font-bold text-lg shadow-[0_10px_20px_rgba(184,225,221,0.2)] hover:shadow-[0_10px_30px_rgba(184,225,221,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
