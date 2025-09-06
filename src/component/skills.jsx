import { motion } from "framer-motion";
import { 
  FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaBrain, FaUsers, FaLightbulb 
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiC, SiFlutter, SiExpress, SiMongodb } from "react-icons/si";

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, studying: true },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" />, studying: true },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "C", icon: <SiC className="text-blue-700" /> },
];

const databaseSkills = [
  { name: "MySQL", icon: <FaDatabase className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
];

const conceptSkills = [
  { name: "OOP", icon: <FaBrain className="text-purple-500" /> },
  { name: "Database Design", icon: <FaDatabase className="text-green-600" /> },
];

const softSkills = [
  { name: "Communication", icon: <FaUsers className="text-blue-400" /> },
  { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400" /> },
  { name: "Teamwork", icon: <FaUsers className="text-green-400" /> },
  { name: "Time Management", icon: <FaLightbulb className="text-orange-400" /> },
];

function SkillGrid({ skills }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-12 overflow-x-hidden">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center justify-center bg-[#B8E1DD] rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-5xl mb-4">{skill.icon}</div>
          <p className="text-lg font-medium">{skill.name}</p>
          {skill.studying && (
            <span className="absolute top-2 right-2 text-xs bg-[#3A9188] text-gray-800 px-2 py-1 rounded-full">
              Still Learning
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#062925] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          className="text-4xl font-bold text-[#B8E1DD] mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <h3 className="text-2xl font-semibold text-[#B8E1DD] mb-6">Frontend Skills</h3>
        <SkillGrid skills={frontendSkills} />

        <h3 className="text-2xl font-semibold text-[#B8E1DD] mb-6">Backend Skills</h3>
        <SkillGrid skills={backendSkills} />

        <h3 className="text-2xl font-semibold text-[#B8E1DD] mb-6">Database Skills</h3>
        <SkillGrid skills={databaseSkills} />

        <h3 className="text-2xl font-semibold text-[#B8E1DD] mb-6">Concept Skills</h3>
        <SkillGrid skills={conceptSkills} />

        <h3 className="text-2xl font-semibold text-[#B8E1DD] mb-6">Soft Skills</h3>
        <SkillGrid skills={softSkills} />

      </div>
    </section>
  );
}
