import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes, FaCertificate, FaPaperPlane, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-line bg-card text-ink hover:text-accent hover:border-accent transition-colors ${className}`}
    >
      {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
    </button>
  );
}

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
          ? "bg-[var(--nav)] backdrop-blur-md shadow-sm py-3 border-b border-line" 
          : "bg-[var(--nav)] backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          
          <span className="text-xl font-bold tracking-tight text-ink">
            Dilani Thathsarani
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-7 text-sm font-semibold text-ink-muted">
          <li>
            <a href="#home" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
              <FaHome className="text-xs text-accent" /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
              <FaUser className="text-xs text-accent" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
              <FaCode className="text-xs text-accent" /> Skills & Tools
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
              <FaProjectDiagram className="text-xs text-accent" /> Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
              <FaCertificate className="text-xs text-accent" /> Certificates
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent transition-colors flex items-center gap-1.5 py-1">
              <FaEnvelope className="text-xs text-accent" /> Contact
            </a>
          </li>
        </ul>

        {/* Hire Me CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-strong to-accent hover:from-[#062925] hover:to-accent-strong text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <FaPaperPlane className="text-xs" /> Hire Me
          </a>

          <button 
            className="md:hidden text-2xl text-ink p-1.5 focus:outline-none" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-line px-6 py-6 shadow-xl animate-fadeIn">
          <ul className="flex flex-col space-y-4 font-semibold text-ink text-base">
            <li>
              <a 
                href="#home" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-line hover:text-accent"
              >
                <FaHome className="text-accent" /> Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-line hover:text-accent"
              >
                <FaUser className="text-accent" /> About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-line hover:text-accent"
              >
                <FaCode className="text-accent" /> Skills & Tools
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-line hover:text-accent"
              >
                <FaProjectDiagram className="text-accent" /> Projects
              </a>
            </li>
            <li>
              <a 
                href="#certificates" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-line hover:text-accent"
              >
                <FaCertificate className="text-accent" /> Certificates
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => setOpen(false)} 
                className="flex items-center gap-3 py-2 border-b border-line hover:text-accent"
              >
                <FaEnvelope className="text-accent" /> Contact
              </a>
            </li>
            <li className="flex items-center justify-between pt-1">
              <span className="text-sm text-ink-muted">Appearance</span>
              <ThemeToggle />
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-accent-strong to-accent text-white font-bold text-center shadow-md"
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
