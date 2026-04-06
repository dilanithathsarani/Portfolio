import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project5 from "../assets/5.png";
import project6 from "../assets/6.png";

const featuredProjects = [
  {
    name: "Portfolio Project",
    description: "Personal portfolio website built with React and Tailwind CSS.",
    image: [project1,project2],
    link: "https://github.com/dilanithathsarani/Portfolio.git",
  },
  {
    name: "CBC E-Commerce Application",
    description: "Frontend for CBC system with modern UI design.",
    image: [project3,project4],
    link: "https://github.com/dilanithathsarani/CBC---Frontend.git",
  },
  {
    name: "Hiru News App",
    description: "Build a news app using Flutter and NewsAPI for real-time news updates.",
    image: [project5,project6],
    link: "https://github.com/dilanithathsarani/Hiru_News_App_API_Testing.git",
  },
];

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/dilanithathsarani/repos")
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        ).slice(0, 6);
        setRepos(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-[#044A42] py-20 px-6">
      <div className="max-w-6xl mx-auto">

         <h2 className="text-4xl font-bold text-[#B8E1DD] mb-12 text-center">
          My Projects
        </h2>

         <h3 className="text-2xl font-semibold text-[#B8E1DD] mb-6">
          Featured Projects
        </h3>

<div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
        <motion.div
        key={index}
         className="bg-[#B8E1DD] rounded-xl shadow-md p-5 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid grid-cols-2 gap-2 mb-4">
        {project.image.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.name}-${i}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
      </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {project.name}
              </h4>

              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#062925] hover:text-[#3A9188]"
              >
                <FaGithub /> View Project
              </a>
            </motion.div>
          ))}
        </div>

<h3 className="text-2xl font-semibold text-[#B8E1DD] mb-6">
          Other Recent Projects
        </h3>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="bg-[#B8E1DD] rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{delay: index * 0.05 }}
            >
              <h4 className="text-md font-semibold text-gray-800 mb-2 capitalize">
                {repo.name.replace(/-/g, " ")}
              </h4>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {repo.description || "No description available."}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  ⭐ {repo.stargazers_count}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#062925] hover:text-[#3A9188]"
                >
                  <FaGithub /> View
                </a>
              </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <a
        href="https://github.com/dilanithathsarani?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#3A9188] text-white px-6 py-3 rounded-lg hover:bg-[#2e756e]"
      >
        <FaGithub />
        View All Repositories
      </a>
    </div>
  </div>
</section>
  );
}
