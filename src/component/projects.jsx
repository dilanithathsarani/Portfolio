import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import project1 from "../assets/portfolioProject.png";
import project2 from "../assets/cbcFrontend.png";
import project3 from "../assets/foodStallProject.png";
import project4 from "../assets/juicebarProject.png";
import project5 from "../assets/cbcBackend.png";
import project6 from "../assets/personalProject.png";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const images = [project1, project2, project3, project4, project5,project6];

  useEffect(() => {
    axios
      .get("https://api.github.com/users/dilanithathsarani/repos")
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-[#044A42] py-20 px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-[#B8E1DD] mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {repos.slice(0, 6).map((repo, index) => (
            <motion.div
              key={repo.id}
              className="bg-[#B8E1DD] rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>

                <img
                  src={images[index % images.length]} 
                  alt={repo.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {repo.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {repo.description || "No description available."}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  ⭐ {repo.stargazers_count}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#062925] hover:text-[#3A9188] transition"
                >
                  <FaGithub /> <span>View</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
