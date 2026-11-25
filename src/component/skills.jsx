import { motion } from "framer-motion";
import { 
  FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaBrain, FaUsers, FaLightbulb, FaGitAlt, FaGithub, FaFigma, FaTools, FaCheckCircle, FaCubes 
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { 
  SiTailwindcss, SiBootstrap, SiC, SiFlutter, SiExpress, SiMongodb, SiPostman, SiVercel, SiMysql, SiEclipseide, SiNextdotjs, SiPostgresql, SiFirebase 
} from "react-icons/si";

/* ---------------- SKILLS & TOOLS DATA ---------------- */

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 50 },
  { name: "CSS / Tailwind", icon: <SiTailwindcss className="text-cyan-500" />, level: 45 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 40 },
  { name: "React.js", icon: <FaReact className="text-accent" />, level: 50 },
  { name: "Next.js", icon: <SiNextdotjs className="text-ink" />, level: 20, studying: true },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" />, level: 45 },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, level: 35 },
];

const backendSkills = [
  { name: "Java", icon: <FaJava className="text-red-600" />, level: 50 },
  { name: "Node.js", icon: <FaNodeJs className="text-emerald-600" />, level: 35 },
  { name: "Express.js", icon: <SiExpress className="text-ink-muted" />, level: 30 },
  { name: "C Programming", icon: <SiC className="text-blue-700" />, level: 50 },
];

const databaseSkills = [
  { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 55 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 60 },
  { name: "Firebase", icon: <SiFirebase className="text-amber-500" />, level: 40 },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, level: 20, studying: true },
];

const coreConcepts = [
  { name: "Object-Oriented Programming (OOP)", icon: <FaBrain className="text-purple-600" />, level: 75 },
  { name: "Database Schema Design", icon: <FaDatabase className="text-accent-strong" />, level: 40 },
  { name: "Manual SQA Testing", icon: <FaCheckCircle className="text-emerald-600" />, level: 60 },
  { name: "Software Architecture & Design Patterns", icon: <FaCubes className="text-indigo-600" />, level: 40 },
];

const toolsAndTech = [
  { name: "Figma (UI/UX)", icon: <FaFigma className="text-pink-500" />, level: 80, category: "Design" },
  { name: "Git & GitHub", icon: <FaGithub className="text-ink" />, level: 75, category: "Dev" },
  { name: "VS Code", icon: <VscCode className="text-blue-500 text-xl" />, level: 90, category: "IDE" },
  { name: "Eclipse IDE", icon: <SiEclipseide className="text-[#2C2255] dark:text-indigo-300 text-xl" />, level: 30, category: "IDE" },
  { name: "Postman (API Testing)", icon: <SiPostman className="text-orange-600" />, level: 70, category: "Testing" },
  { name: "Vercel / Hosting", icon: <SiVercel className="text-ink" />, level: 72, category: "Deployment" },
];

const qaAndSoftSkills = [
  { name: "Problem Solving", icon: <FaLightbulb className="text-amber-500" />, level: 70 },
  { name: "Team Collaboration", icon: <FaUsers className="text-blue-500" />, level: 82 },
  { name: "Time Management", icon: <FaCheckCircle className="text-accent" />, level: 85 },
];

function SkillCategoryCard({ title, subtitle, icon, skills }) {
  return (
    <motion.div 
      className="bg-card p-6 sm:p-7 rounded-3xl border border-line shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-line">
          <div className="p-3 bg-accent-soft/30 text-accent-strong rounded-xl text-xl">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-ink leading-snug">{title}</h3>
            <p className="text-xs text-ink-muted font-medium">{subtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center justify-between text-sm mb-1.5 font-semibold text-ink">
                <span className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                  {skill.studying && (
                    <span className="text-[10px] bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded-md font-bold">
                      Still Studying
                    </span>
                  )}
                </span>
                <span className="text-xs font-bold text-accent bg-accent-soft/20 px-2 py-0.5 rounded">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-page-muted h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-accent-strong rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-page-muted py-24 px-6 border-t border-line">
      
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs md:text-sm tracking-wider uppercase bg-accent-soft/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            Skills & Development Tools
          </h2>
          <p className="text-ink-muted text-base md:text-lg mt-3">
            A comprehensive overview of programming languages, frameworks, developer tools, core concepts, and QA methodologies.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillCategoryCard 
            title="Frontend Development" 
            subtitle="Web & Mobile UI Engineering" 
            icon={<FaReact />} 
            skills={frontendSkills} 
          />

          <SkillCategoryCard 
            title="Backend & Languages" 
            subtitle="Server-side Architecture & Services" 
            icon={<FaJava />} 
            skills={backendSkills} 
          />

          <SkillCategoryCard 
            title="Databases & Data" 
            subtitle="Relational & Document Stores" 
            icon={<FaDatabase />} 
            skills={databaseSkills} 
          />

          <SkillCategoryCard 
            title="Core Concepts & Design" 
            subtitle="OOP, Schema & System Architecture" 
            icon={<FaBrain />} 
            skills={coreConcepts} 
          />

          <SkillCategoryCard 
            title="Tools & Technologies" 
            subtitle="IDEs, Version Control & Testing" 
            icon={<FaTools />} 
            skills={toolsAndTech}
          />

          <SkillCategoryCard 
            title="QA & Professional Skills" 
            subtitle="Testing, Quality & Collaboration" 
            icon={<FaCheckCircle />} 
            skills={qaAndSoftSkills} 
          />

        </div>

      </div>
    </section>
  );
}
