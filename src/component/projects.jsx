import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFigma, FaExternalLinkAlt, FaPalette, FaLaptopCode, FaMobileAlt, FaLayerGroup, FaTimes, FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project5 from "../assets/5.png";
import project6 from "../assets/6.png";
import project7 from "../assets/7.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

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

  const filteredDevProjects =
    activeFilter === "all"
      ? webAndMobileProjects
      : webAndMobileProjects.filter((p) => p.category === activeFilter);

  const showDevSection = activeFilter === "all" || activeFilter === "web" || activeFilter === "mobile";
  const showUiUxSection = activeFilter === "all" || activeFilter === "uiux";

  const visibleProjects = [
    ...(showDevSection ? filteredDevProjects : []),
    ...(showUiUxSection ? uiUxProjects : []),
  ];

  const selectedIndex = visibleProjects.findIndex((p) => p.id === selectedProjectId);
  const selectedProject = selectedIndex >= 0 ? visibleProjects[selectedIndex] : null;

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProjectId(null);
      if (e.key === "ArrowRight" && visibleProjects.length > 1) {
        setSelectedProjectId(visibleProjects[(selectedIndex + 1) % visibleProjects.length].id);
      }
      if (e.key === "ArrowLeft" && visibleProjects.length > 1) {
        setSelectedProjectId(visibleProjects[(selectedIndex - 1 + visibleProjects.length) % visibleProjects.length].id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, selectedIndex, visibleProjects]);

  const filterTabs = [
    { id: "all", label: "All Projects", count: webAndMobileProjects.length + uiUxProjects.length, Icon: FaLayerGroup },
    { id: "web", label: "Web Apps", count: webAndMobileProjects.filter((p) => p.category === "web").length, Icon: FaLaptopCode },
    { id: "mobile", label: "Mobile Apps", count: webAndMobileProjects.filter((p) => p.category === "mobile").length, Icon: FaMobileAlt },
    { id: "uiux", label: "UI/UX Design", count: uiUxProjects.length, Icon: FaPalette },
  ];

  return (
    <section id="projects" className="min-h-screen bg-page py-24 px-6 border-t border-line">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14" role="tablist" aria-label="Filter projects by category">
          {filterTabs.map(({ id, label, count, Icon }) => {
            const isActive = activeFilter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(id)}
                className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "bg-page-muted border border-line text-ink-muted hover:text-ink hover:border-accent/50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="projectFilterPill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-strong to-accent shadow-md"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Icon className="text-xs" />
                  <span>{label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-card text-ink-muted border border-line"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* --- WEB & MOBILE PROJECTS SHOWCASE --- */}
        <AnimatePresence mode="wait">
          {showDevSection && (
            <motion.div
              key={`dev-${activeFilter}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className={showUiUxSection ? "mb-20" : ""}
            >
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-line">
                <h3 className="text-xl font-bold text-ink flex items-center gap-2">
                  <FaLaptopCode className="text-accent" />{" "}
                  {activeFilter === "web"
                    ? "Web Development"
                    : activeFilter === "mobile"
                    ? "Mobile Applications"
                    : "Web & Mobile Development"}
                </h3>
                <span className="text-xs font-semibold text-ink-muted">
                  Code Repositories
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDevProjects.map((project, index) => (
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
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    aria-label={`Preview ${project.name}`}
                    className="relative overflow-hidden bg-page-muted h-52 sm:h-56 p-3 w-full block text-left cursor-pointer group/img"
                  >
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-sm text-white text-xs font-bold opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <FaExpand className="text-[10px]" /> Quick View
                    </span>
                  </button>

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
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- UI/UX FIGMA PROJECTS SHOWCASE --- */}
        <AnimatePresence mode="wait">
          {showUiUxSection && (
            <motion.div
              key="uiux-section"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
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
                      <button
                        type="button"
                        onClick={() => setSelectedProjectId(project.id)}
                        aria-label={`Preview ${project.name}`}
                        className="relative overflow-hidden bg-page-muted h-52 p-3 w-full block text-left cursor-pointer group/img"
                      >
                        <img
                          src={project.images[0]}
                          alt={project.name}
                          className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-sm text-white text-xs font-bold opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <FaExpand className="text-[10px]" /> Quick View
                        </span>
                      </button>

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
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectId(null)}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-line rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden text-left"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-page-muted">
                <span className="px-3 py-1 rounded-md bg-accent-soft/30 text-accent-strong dark:text-accent text-xs font-bold">
                  {selectedProject.type}
                </span>
                <div className="flex items-center gap-2">
                  {visibleProjects.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProjectId(
                            visibleProjects[(selectedIndex - 1 + visibleProjects.length) % visibleProjects.length].id
                          )
                        }
                        aria-label="Previous project"
                        className="p-2 rounded-lg border border-line bg-card text-ink-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
                      >
                        <FaChevronLeft className="text-xs" />
                      </button>
                      <span className="text-xs font-semibold text-ink-muted px-1">
                        {selectedIndex + 1} / {visibleProjects.length}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProjectId(
                            visibleProjects[(selectedIndex + 1) % visibleProjects.length].id
                          )
                        }
                        aria-label="Next project"
                        className="p-2 rounded-lg border border-line bg-card text-ink-muted hover:text-ink hover:border-accent transition-colors cursor-pointer"
                      >
                        <FaChevronRight className="text-xs" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(null)}
                    aria-label="Close lightbox"
                    className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-card transition-colors cursor-pointer ml-1"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Preview Image */}
              <div className="bg-page-muted p-4 sm:p-6 flex items-center justify-center max-h-[55vh] overflow-hidden">
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.name}
                  className="max-h-[48vh] w-auto object-contain rounded-2xl shadow-md"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-extrabold text-ink mb-2">
                  {selectedProject.name}
                </h3>
                <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-page-muted border border-line rounded-lg text-xs font-semibold text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-line">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-strong hover:bg-[#062925] text-white font-bold text-sm shadow-sm transition-colors"
                    >
                      <FaGithub className="text-base" /> Code Repository
                    </a>
                  )}
                  {selectedProject.figma && (
                    <a
                      href={selectedProject.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-pink-600 text-white font-bold text-sm shadow-sm transition-colors"
                    >
                      <FaFigma className="text-base text-pink-400" /> Open Figma Prototype <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
