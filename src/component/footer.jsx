import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#062925] text-slate-300 py-16 px-6 border-t border-[#044A42] dark:border-line">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 dark:border-line">
        
        {/* Brand Summary */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <a href="#home" className="flex items-center gap-2">
            
            <span className="text-xl font-bold tracking-tight text-white">
              Dilani Thathsarani
            </span>
          </a>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
            Computing & Information Systems undergraduate passionate about building high-performance web applications, mobile tools, and user-centered UI/UX prototypes.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 flex flex-col gap-2.5 text-xs font-semibold">
          <p className="text-sm font-bold text-[#B8E1DD] mb-2">Quick Navigation</p>
          <div className="grid grid-cols-2 gap-2 text-slate-300">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About Me</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills & Tools</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-accent transition-colors">Certifications</a>
          </div>
        </div>

        {/* Social Icons & Contact */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <p className="text-sm font-bold text-[#B8E1DD] mb-1">Connect Professionally</p>
          <div className="flex space-x-3 text-lg">
            <a 
              href="https://github.com/dilanithathsarani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#044A42] hover:bg-accent text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/dilani-thathsarani-4a4984316" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#044A42] hover:bg-accent text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://instagram.com/thath_sa_ra_23" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-[#044A42] hover:bg-accent text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Instagram Profile"
            >
              <FaSquareInstagram />
            </a>
            
            <a 
              href="mailto:dilanithathsarani2003@gmail.com" 
              className="w-10 h-10 rounded-xl bg-[#044A42] hover:bg-accent text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-center text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Dilani Thathsarani. All rights reserved.</p>
        
      </div>
    </footer>
  );
}
