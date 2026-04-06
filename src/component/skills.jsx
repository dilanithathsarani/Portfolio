import { motion } from "framer-motion";
import { 
  FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaBrain, FaUsers, FaLightbulb 
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiC, SiFlutter, SiExpress, SiMongodb } from "react-icons/si";

/* ---------------- SKILLS DATA ---------------- */

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 75 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: 80 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 50 },
  { name: "React", icon: <FaReact className="text-blue-500" />, level: 45 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" />, level: 35 },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, level: 30, studying: true },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" />, level: 65, studying: true },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 30 },
  { name: "Express", icon: <SiExpress className="text-gray-800" />, level: 25 },
  { name: "Java", icon: <FaJava className="text-red-600" />, level: 70 },
  { name: "C", icon: <SiC className="text-blue-700" />, level: 75 },
];

const databaseSkills = [
  { name: "MySQL", icon: <FaDatabase className="text-green-600" />, level: 80 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: 40 },
];

const conceptSkills = [
  { name: "OOP", icon: <FaBrain className="text-purple-500" />, level: 70 },
  { name: "DB Design", icon: <FaDatabase className="text-green-600" />, level: 30 },
];

const softSkills = [
  { name: "Communication", icon: <FaUsers className="text-blue-400" />, level: 90 },
  { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400" />, level: 80 },
  { name: "Teamwork", icon: <FaUsers className="text-green-400" />, level: 85 },
  { name: "Time Mgmt", icon: <FaLightbulb className="text-orange-400" />, level: 90 },
];

/* ---------------- TABLE COMPONENT ---------------- */

function SkillTable({ title, skills }) {
  return (
    <div className="bg-[#0A3A35] p-4 rounded-lg shadow-md">
      
      <h3 className="text-lg font-semibold text-[#B8E1DD] mb-4 text-left">
        {title}
      </h3>

      <table className="w-full text-sm text-left text-gray-200">
        <tbody>
          {skills.map((skill, index) => (
            <motion.tr
              key={index}
              className="border-b border-gray-600 hover:bg-[#124E48] transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              
              {/* ICON */}
              <td className="py-2 pr-2 text-lg">
                {skill.icon}
              </td>

              {/* NAME */}
              <td className="py-2 pr-2">
                {skill.name}
                {skill.studying && (
                  <span className="ml-2 text-xs bg-[#3A9188] px-2 py-0.5 rounded">
                    Learning
                  </span>
                )}
              </td>

              {/* PROGRESS BAR */}
              <td className="py-2 w-full">
                <div className="w-full bg-gray-500 h-2 rounded-full">
                  <motion.div
                    className="bg-[#3A9188] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </td>

              {/* % */}
              <td className="py-2 pl-2 text-xs">
                {skill.level}%
              </td>

            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#062925] py-10 px-6">
      
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-[#B8E1DD] mb-10 text-center">
          My Skills
        </h2>

        {/* SIDE BY SIDE TABLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <SkillTable title="Frontend" skills={frontendSkills} />
          <SkillTable title="Backend" skills={backendSkills} />
          <SkillTable title="Database" skills={databaseSkills} />
          <SkillTable title="Concepts" skills={conceptSkills} />
          <SkillTable title="Soft Skills" skills={softSkills} />

        </div>

      </div>
    </section>
  );
}