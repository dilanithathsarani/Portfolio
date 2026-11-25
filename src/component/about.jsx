import { motion } from "framer-motion";
import profileImg from "../assets/about.jpeg";
import { FaGraduationCap, FaBriefcase, FaPaperPlane, FaUserGraduate, FaLightbulb, FaCheckCircle } from "react-icons/fa";

export default function About() {
  const education = [
    {
      level: "BSc (Hons) in Computing & Information Systems",
      details: "Sabaragamuwa University of Sri Lanka",
      year: "Faculty of Computing",
      time: "2024 - Present",
      icon: <FaGraduationCap className="text-accent w-5 h-5" />,
    },
    {
      level: "G.C.E. Advanced Level (A/L)",
      details: "Physical Science Stream (with ICT)",
      results: "Results: ABS",
      year: "G/Anula Devi Balika Vidyalaya, Galle",
      time: "2020 - 2022",
      icon: <FaUserGraduate className="text-accent w-5 h-5" />,
    },
    {
      level: "G.C.E. Ordinary Level (O/L)",
      results: "Results: 4As, 5Bs",
      year: "G/Anula Devi Balika Vidyalaya, Galle",
      time: "2019",
      icon: <FaUserGraduate className="text-accent w-5 h-5" />,
    },
    {
      level: "Certificate in Information Technology",
      details: "Vocational IT & Computer Literacy",
      results: "Result: Grade A",
      year: "Nenaiyasa Educational Institute, Galle",
      time: "2020",
      icon: <FaUserGraduate className="text-accent w-5 h-5" />,
    },
  ];

  const workExperience = [
    {
      role: "Assistant Accountant",
      company: "Ranjanas Holding (Pvt) Ltd",
      details: "Managed invoicing, billing records, financial statement reconciliations, and reporting system workflows.",
      time: "2023 - 2025",
      icon: <FaBriefcase className="text-accent w-5 h-5" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-page py-24 px-6 overflow-hidden border-t border-line"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-soft/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs md:text-sm tracking-wider uppercase bg-accent-soft/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            About Dilani Thathsarani
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Grid: Image + Bio Card */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Framed Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-[380px] md:w-80 md:h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-strong to-accent rounded-3xl rotate-3 opacity-90 shadow-lg" />
              <img
                src={profileImg}
                alt="Dilani Thathsarani"
                className="absolute inset-0 w-full h-full object-cover object-top rounded-3xl border-2 border-card shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right: Bio Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
              Building impactful web & mobile experiences with a strong focus on software quality.
            </h3>
            
            <p className="text-ink-muted text-base md:text-lg leading-relaxed mb-6">
              I am an undergraduate pursuing a <strong className="text-ink">BSc (Hons) in Computing & Information Systems</strong> at <strong className="text-accent-strong">Sabaragamuwa University of Sri Lanka</strong>. 
              My expertise spans across full-stack web development, mobile application design, UI/UX prototyping, and software quality assurance.
            </p>

            <p className="text-ink-muted text-base md:text-lg leading-relaxed mb-8">
              With hands-on experience developing projects using <strong className="text-ink">React, Node.js, Express, MongoDB, JavaScript, and Flutter</strong>, I combine technical engineering with creative problem solving to build applications that are clean, efficient, and user-centered.
            </p>

            {/* Core Values Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-page-muted border border-line rounded-xl">
                <FaLightbulb className="text-accent text-xl mb-2" />
                <h4 className="font-bold text-ink text-sm">Creative Design</h4>
                <p className="text-xs text-ink-muted mt-1">Figma UI/UX wireframing & prototyping</p>
              </div>

              <div className="p-4 bg-page-muted border border-line rounded-xl">
                <FaCheckCircle className="text-accent text-xl mb-2" />
                <h4 className="font-bold text-ink text-sm">Quality Assurance</h4>
                <p className="text-xs text-ink-muted mt-1">Systematic manual testing & bug tracking</p>
              </div>

              <div className="p-4 bg-page-muted border border-line rounded-xl">
                <FaGraduationCap className="text-accent text-xl mb-2" />
                <h4 className="font-bold text-ink text-sm">Continuous Growth</h4>
                <p className="text-xs text-ink-muted mt-1">Expanding modern tech stack daily</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-strong hover:bg-[#062925] text-white font-bold text-sm shadow-md transition-all"
              >
                <FaPaperPlane className="text-xs" /> Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Education & Experience Timelines */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Education Timeline */}
          <motion.div
            className="bg-page-muted p-8 rounded-3xl border border-line shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-line">
              <div className="p-3 bg-accent-soft/40 rounded-xl text-accent-strong">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-ink">Education</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-accent/30 ml-3 pl-6">
              {education.map((item, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-card border-2 border-accent group-hover:bg-accent transition-colors" />
                  <div className="bg-card p-5 rounded-2xl border border-line shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 bg-accent-soft/30 text-accent-strong text-xs font-bold rounded-md mb-2">
                      {item.time}
                    </span>
                    <h4 className="font-bold text-ink text-base mb-1">{item.level}</h4>
                    <p className="text-accent text-xs font-semibold mb-1">{item.details}</p>
                    {item.results && (
                      <p className="text-ink text-xs font-bold mb-1">{item.results}</p>
                    )}
                    <p className="text-ink-muted text-xs italic">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div
            className="bg-page-muted p-8 rounded-3xl border border-line shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-line">
              <div className="p-3 bg-accent-soft/40 rounded-xl text-accent-strong">
                <FaBriefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-ink">Work Experience</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-accent/30 ml-3 pl-6">
              {workExperience.map((item, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-card border-2 border-accent group-hover:bg-accent transition-colors" />
                  <div className="bg-card p-5 rounded-2xl border border-line shadow-sm hover:shadow-md transition-all">
                    <span className="inline-block px-3 py-1 bg-accent-soft/30 text-accent-strong text-xs font-bold rounded-md mb-2">
                      {item.time}
                    </span>
                    <h4 className="font-bold text-ink text-base mb-1">{item.role}</h4>
                    <p className="text-accent text-xs font-semibold mb-2">{item.company}</p>
                    <p className="text-ink-muted text-xs leading-relaxed">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
