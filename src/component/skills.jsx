import { motion } from "framer-motion";
import { 
  FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase 
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiC, SiFlutter, SiExpress,SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, studying: true },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "C", icon: <SiC className="text-blue-700" /> },
  { name: "MySQL", icon: <FaDatabase className="text-green-600" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500" />, studying: true },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#062925] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.h2
          className="text-4xl font-bold text-[#B8E1DD] mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
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
      </div>
    </section>
  );
}
