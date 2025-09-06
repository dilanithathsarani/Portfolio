import { useState } from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#B8E1DD] via-[#3A9188] to-[#044A42] text-[#B8E1DD] shadow-lg z-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-bold text-[#062925]">
          Dilani Thathsarani
        </h1>

        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
            <FaHome /> <a href="#home">Home</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
            <FaUser /> <a href="#about">About</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
            <FaCode /> <a href="#skills">Skills</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
            <FaProjectDiagram /> <a href="#projects">Projects</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
            <FaEnvelope /> <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="md:hidden text-2xl text-[#062925]" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center bg-gradient-to-b from-[#B8E1DD] via-[#3A9188] to-[#044A42] space-y-6 py-6 font-medium text-[#062925]">
          <li className="flex items-center gap-2 hover:text-white">
            <FaHome /> <a href="#home" onClick={() => setOpen(false)}>Home</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white">
            <FaUser /> <a href="#about" onClick={() => setOpen(false)}>About</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white">
            <FaCode /> <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white">
            <FaProjectDiagram /> <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          </li>
          <li className="flex items-center gap-2 hover:text-white">
            <FaEnvelope /> <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
