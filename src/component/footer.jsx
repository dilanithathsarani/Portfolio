import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#062925] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <div className="flex flex-col gap-3 text-sm font-medium">
          <p>Quick Links</p>
          <a href="#home" className="hover:text-[#B8E1DD] transition">Home</a>
          <a href="#about" className="hover:text-[#B8E1DD] transition">About</a>
          <a href="#skills" className="hover:text-[#B8E1DD] transition">Skills</a>
          <a href="#projects" className="hover:text-[#B8E1DD] transition">Projects</a>
          <a href="#contact" className="hover:text-[#B8E1DD] transition">Contact</a>
        </div>

        <div className="flex space-x-6 text-2xl md:ml-auto">
          <a 
            href="https://github.com/dilanithathsarani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition hover:text-[#3A9188] hover:scale-110"
            style={{ textShadow: "0 0 15px #3A9188, 0 0 30px #3A9188" }}
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/dilani-thathsarani-4a4984316" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition hover:text-[#3A9188] hover:scale-110"
            style={{ textShadow: "0 0 15px #3A9188, 0 0 30px #3A9188" }}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://instagram.com/thath_sa_ra_23" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition hover:text-[#3A9188] hover:scale-110"
            style={{ textShadow: "0 0 15px #3A9188, 0 0 30px #3A9188" }}
          >
            <FaSquareInstagram />
          </a>
          <a 
            href="https://facebook.com/Dilani Thathsarani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition hover:text-[#3A9188] hover:scale-110"
            style={{ textShadow: "0 0 15px #3A9188, 0 0 30px #3A9188" }}
          >
            <FaFacebook />
          </a>
          <a 
            href="mailto:dilanithathsarani2003@gmail.com" 
            className="transition hover:text-[#3A9188] hover:scale-110"
            style={{ textShadow: "0 0 15px #3A9188, 0 0 30px #3A9188" }}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-[#044A42] pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dilani Thathsarani | All Rights Reserved
      </div>
    </footer>
  );
}
