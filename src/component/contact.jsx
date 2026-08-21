import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web Development",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", service: "Full-Stack Web Development", message: "" });
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-white py-24 px-6 overflow-hidden border-t border-slate-100"
    >
      {/* Subtle Background Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#B8E1DD]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3A9188]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3A9188] font-bold text-xs md:text-sm tracking-wider uppercase bg-[#B8E1DD]/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Hire Me & Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-3">
            Available for freelance projects, full-time engineering roles, UI/UX designs, and SQA testing positions.
          </p>
          <div className="w-16 h-1 bg-[#3A9188] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Get In Touch</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Feel free to reach out directly via WhatsApp, LinkedIn, or Email. I'm always open to discussing new opportunities or technical projects.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/94741498949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#3A9188] hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">WhatsApp</h4>
                    <p className="text-slate-500 text-xs mt-0.5">+94 74 149 8949</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/dilani-thathsarani-4a4984316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#3A9188] hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaLinkedin />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">LinkedIn</h4>
                    <p className="text-slate-500 text-xs mt-0.5">dilani-thathsarani</p>
                  </div>
                </a>

                <a
                  href="mailto:dilanithathsarani2003@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#3A9188] hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#B8E1DD]/40 text-[#044A42] flex items-center justify-center text-xl group-hover:bg-[#044A42] group-hover:text-white transition-colors">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Email</h4>
                    <p className="text-slate-500 text-xs mt-0.5">dilanithathsarani2003@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Location</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Galle, Southern Province, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hire Me Form */}
          <motion.div
            className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Send a Hire Inquiry</h3>
                <p className="text-slate-500 text-xs mt-1">Fill out the details below and I'll get back to you promptly.</p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600 text-lg" />
                  Thank you! Your message has been sent successfully. I will get back to you soon.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3A9188] focus:ring-1 focus:ring-[#3A9188] transition-all shadow-sm" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Your Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3A9188] focus:ring-1 focus:ring-[#3A9188] transition-all shadow-sm" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Project Type / Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#3A9188] focus:ring-1 focus:ring-[#3A9188] transition-all shadow-sm"
                >
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="Mobile App Development">Mobile Application Development</option>
                  <option value="UI/UX Figma Design">UI/UX Figma Design Prototype</option>
                  <option value="Software QA & Testing">Software QA & Manual Testing</option>
                  <option value="Full-time Job Opportunity">Full-time Engineering Role</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Your Message *
                </label>
                <textarea 
                  required
                  rows="4" 
                  placeholder="Tell me about your project requirements or hiring details..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3A9188] focus:ring-1 focus:ring-[#3A9188] transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#044A42] to-[#3A9188] hover:from-[#062925] hover:to-[#044A42] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 mt-2"
              >
                <FaPaperPlane className="text-sm" /> Send Hire Request
              </button>
            </form>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}

