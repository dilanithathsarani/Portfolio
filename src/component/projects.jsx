import { motion } from "framer-motion";
import { FaGithub, FaFigma, FaExternalLinkAlt, FaPalette, FaLaptopCode } from "react-icons/fa";

import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project5 from "../assets/5.png";
import project6 from "../assets/6.png";
import project7 from "../assets/7.png";

export default function Projects() {
  // Featured Web & Mobile Projects
  const webAndMobileProjects = [
    {
      id: "job-portal",
      name: "Job Portal Platform",
      category: "web",
      type: "Full-Stack Web App",
      description: "A comprehensive web-based Job Portal platform empowering job seekers to search openings, submit applications, and manage profiles while allowing recruiters to publish listings and track candidates.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      images: [project1],
      github: "https://github.com/dilanithathsarani/Job-Portal---frontend.git",
    },
    {
      id: "smart-ai-alarm",
      name: "Smart AI Alarm System",
      category: "mobile",
      type: "Capstone Project • AI Mobile App",
      description: "An intelligent AI-driven smart alarm mobile application developed as a capstone project. Features automated wake-up routines, intelligent scheduling, habit analytics, and AI assistance.",
      tags: ["Flutter", "Dart", "AI & ML", "REST API", "Firebase"],
      images: [project5],
      github: "https://github.com/Ashiy-Ishan/Smart_AI_Alarm.git",
    },
    {
      id: "portfolio",
      name: "Personal Portfolio Website",
      category: "web",
      type: "Full-Stack Web App",
      description: "A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS to showcase projects, technical skills, certifications, and career journey with smooth animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      images: [project2],
      github: "https://github.com/dilanithathsarani/Portfolio.git",
      demo: "#",
    },
    {
      id: "cbc-ecommerce",
      name: "CBC E-Commerce Platform",
      category: "web",
      type: "MERN Stack E-Business App",
      description: "Full-stack e-commerce application built using React, Node.js, Express, and MongoDB. Includes user authentication, product catalog, cart management, and RESTful API backend architecture.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
      images: [project3],
      github: "https://github.com/dilanithathsarani/CBC---Frontend.git",
    },
    {
      id: "hiru-news",
      name: "Hiru News Mobile App",
      category: "mobile",
      type: "Flutter Mobile Application",
      description: "Cross-platform real-time news application developed in Flutter. Integrated with RESTful News APIs for live news feeds, category filtering, and offline caching support.",
      tags: ["Flutter", "Dart", "REST API", "State Management"],
      images: [project4],
      github: "https://github.com/dilanithathsarani/Hiru_News_App_API_Testing.git",
    },
  ];

  // UI/UX Projects (Figma)
  const uiUxProjects = [
    {
      id: "ai-alarm",
      name: "AI Alarm System App UI/UX",
      category: "uiux",
      type: "Capstone Project • Mobile UI/UX Prototype",
      description: "Comprehensive mobile app UI/UX design created in Figma for an AI-powered smart alarm system. Features routine scheduling, intelligent notifications, and habit analytics.",
      tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      images: [project5],
      figma: "https://www.figma.com/design/yCJvUqUl9FE1qCY64u1bO5/AI-Alarm-System?node-id=0-1&m=dev&t=Y3Zho0Nil4FOozwM-1",
    },
    {
      id: "ai-chatbot",
      name: "AI ChatBot App UI/UX Design",
      category: "uiux",
      type: "Conversational UI Prototype",
      description: "Modern, interactive chat interface design for conversational AI assistants. Clean visual hierarchy, dark & light mode component variants, and intuitive chat flows.",
      tags: ["Figma", "Conversational UI", "Design System", "Prototyping"],
      images: [project6],
      figma: "https://www.figma.com/design/xJuvhSP79uds9b3peSYHf4/AI-ChatBot?node-id=1-2058&m=dev&t=RBidjDNCWYRURW2k-1",
    },
    {
      id: "ai-study-planner",
      name: "AI Study Planner UI/UX",
      category: "uiux",
      type: "EdTech Interface Design",
      description: "User-centric academic planner UI designed to help students schedule study sessions, set exam reminders, and track progress through interactive visual dashboards.",
      tags: ["Figma", "User Research", "Wireframing", "EdTech UI"],
      images: [project7],
      figma: "https://www.figma.com/design/GMBwMKOoqSqij9o7HbaT61/AI-Assisted-Study-Planner?node-id=1-2&m=dev&t=dl4jazNVL0DEHzfW-1",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-page py-24 px-6 border-t border-line">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs md:text-sm tracking-wider uppercase bg-accent-soft/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            Featured Projects & Designs
          </h2>
          <p className="text-ink-muted text-base md:text-lg mt-3">
            Explore my work in Web Development, Mobile Applications, and Figma UI/UX Design prototypes.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* --- WEB & MOBILE PROJECTS SHOWCASE --- */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-line">
            <h3 className="text-xl font-bold text-ink flex items-center gap-2">
              <FaLaptopCode className="text-accent" /> Web & Mobile Development
            </h3>
            <span className="text-xs font-semibold text-ink-muted">
              Code Repositories
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webAndMobileProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-page-muted rounded-3xl border border-line overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  {/* Browser Frame Window Header */}
                  <div className="bg-line/60 px-4 py-2 flex items-center gap-1.5 border-b border-line">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="text-[11px] font-mono text-ink-muted ml-2 truncate">
                      {project.name.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  {/* Single Main Image Screenshot */}
                  <div className="relative overflow-hidden bg-page-muted h-52 sm:h-56 p-3">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent-soft/30 text-accent-strong text-xs font-bold rounded-md mb-3">
                      {project.type}
                    </span>

                    <h4 className="text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                      {project.name}
                    </h4>

                    <p className="text-ink-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-card border border-line rounded-lg text-xs font-semibold text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-line mt-auto pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-accent transition-colors"
                    >
                      <FaGithub className="text-lg" /> Code Repository
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- UI/UX FIGMA PROJECTS SHOWCASE --- */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-line">
            <h3 className="text-xl font-bold text-ink flex items-center gap-2">
              <FaPalette className="text-pink-500" /> UI/UX Design Prototypes (Figma)
            </h3>
            <span className="text-xs font-semibold text-ink-muted">
              Crafted in Figma
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {uiUxProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-page-muted rounded-3xl border border-line overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  {/* Figma Badge Bar */}
                  <div className="bg-pink-50 dark:bg-pink-950/40 border-b border-pink-100 dark:border-pink-900/50 px-4 py-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-pink-600 dark:text-pink-300 flex items-center gap-1.5">
                      <FaFigma className="text-pink-500" /> Figma Design
                    </span>
                    <span className="text-[10px] bg-pink-200/60 dark:bg-pink-900/60 text-pink-800 dark:text-pink-200 font-bold px-2 py-0.5 rounded">
                      Interactive
                    </span>
                  </div>

                  {/* Screenshot Banner */}
                  <div className="relative overflow-hidden bg-page-muted h-52 p-3">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-pink-100/60 dark:bg-pink-950/50 text-pink-800 dark:text-pink-200 text-xs font-bold rounded-md mb-3">
                      {project.type}
                    </span>

                    <h4 className="text-xl font-bold text-ink mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {project.name}
                    </h4>

                    <p className="text-ink-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-card border border-line rounded-lg text-xs font-semibold text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Figma Link Button */}
                <div className="px-6 pb-6 pt-0 mt-auto">
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-pink-600 text-white font-bold text-sm shadow-md transition-all duration-300"
                  >
                    <FaFigma className="text-base text-pink-400" /> Open Figma Prototype <FaExternalLinkAlt className="text-xs ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
