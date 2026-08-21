import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes, FaCertificate, FaPaperPlane } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/60" 
          : "bg-white/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          
          <span className="text-xl font-bold tracking-tight text-[#062925]">
            Dilani Thathsarani
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-7 text-sm font-semibold text-slate-600">
          <li>
            <a href="#home" className="hover:text-[#3A9188] transition-colors flex items-center gap-1.5 py-1">
              <FaHome className="text-xs text-[#3A9188]" /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#3A9188] transition-colors flex items-center gap-1.5 py-1">
              <FaUser className="text-xs text-[#3A9188]" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#3A9188] transition-colors flex items-center gap-1.5 py-1">
              <FaCode className="text-xs text-[#3A9188]" /> Skills & Tools
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#3A9188] transition-colors flex items-center gap-1.5 py-1">
              <FaProjectDiagram className="text-xs text-[#3A9188]" /> Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-[#3A9188] transition-colors flex items-center gap-1.5 py-1">
              <FaCertificate className="text-xs text-[#3A9188]" /> Certificates
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#3A9188] transition-colors flex items-center gap-1.5 py-1">
              <FaEnvelope className="text-xs text-[#3A9188]" /> Contact
            </a>
          </li>
        </ul>

        {/* Hire Me CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#044A42] to-[#3A9188] hover:from-[#062925] hover:to-[#044A42] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <FaPaperPlane className="text-xs" /> Hire Me
          </a>

          <button 
            className="md:hidden text-2xl text-[#062925] p-1.5 focus:outline-none" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl animate-fadeIn">
          <ul className="flex flex-col space-y-4 font-semibold text-slate-700 text-base">
            <li>
              <a 
                href="#home" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-slate-100 hover:text-[#3A9188]"
              >
                <FaHome className="text-[#3A9188]" /> Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-slate-100 hover:text-[#3A9188]"
              >
                <FaUser className="text-[#3A9188]" /> About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-slate-100 hover:text-[#3A9188]"
              >
                <FaCode className="text-[#3A9188]" /> Skills & Tools
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-slate-100 hover:text-[#3A9188]"
              >
                <FaProjectDiagram className="text-[#3A9188]" /> Projects
              </a>
            </li>
            <li>
              <a 
                href="#certificates" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-slate-100 hover:text-[#3A9188]"
              >
                <FaCertificate className="text-[#3A9188]" /> Certificates
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-slate-100 hover:text-[#3A9188]"
              >
                <FaEnvelope className="text-[#3A9188]" /> Contact
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#044A42] to-[#3A9188] text-white font-bold text-center shadow-md"
              >
                <FaPaperPlane className="text-sm" /> Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

