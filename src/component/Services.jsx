import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaFigma,
  FaBug,
  FaPlug,
  FaArrowRight,
} from "react-icons/fa";

const SERVICES = [
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web applications with responsive React/Next.js frontends, RESTful Node.js/Express backends, and MongoDB, MySQL, or PostgreSQL databases.",
    highlights: ["React & Next.js", "Node.js & Express", "MERN / Prisma"],
    Icon: FaLaptopCode,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps built with Flutter & Dart, featuring clean state management, Firebase integration, and smooth native-like experiences.",
    highlights: ["Flutter & Dart", "Firebase", "REST Integration"],
    Icon: FaMobileAlt,
  },
  {
    title: "UI/UX Design (Figma)",
    description:
      "User-centered wireframes, interactive prototypes, and reusable component design systems crafted in Figma for web and mobile products.",
    highlights: ["Wireframing", "Prototyping", "Design Systems"],
    Icon: FaFigma,
  },
  {
    title: "Software QA & Testing",
    description:
      "Thorough manual test case design, API testing in Postman, and automated UI testing with Selenium WebDriver, TestNG, JUnit, and Maven.",
    highlights: ["Manual & API QA", "Selenium & TestNG", "Bug Reporting"],
    Icon: FaBug,
  },
  {
    title: "API & System Integration",
    description:
      "Secure authentication flows (JWT), database schema design, third-party APIs (e.g., Gemini AI), and CI workflows with GitHub Actions.",
    highlights: ["JWT Auth", "Schema Design", "CI Workflows"],
    Icon: FaPlug,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-page-muted py-24 px-6 border-t border-line relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs md:text-sm tracking-wider uppercase bg-accent-soft/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            Services & Capabilities
          </h2>
          <p className="text-ink-muted text-base md:text-lg mt-3">
            Combining full-stack engineering, thoughtful UI/UX design, and rigorous quality assurance to deliver reliable digital products.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map(({ title, description, highlights, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-card p-7 rounded-3xl border border-line shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-accent-soft/30 text-accent-strong dark:text-accent flex items-center justify-center text-2xl mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-ink mb-2.5 group-hover:text-accent transition-colors">
                  {title}
                </h3>

                <p className="text-ink-muted text-sm leading-relaxed mb-5">
                  {description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-page-muted border border-line rounded-lg text-xs font-semibold text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-strong transition-colors"
                >
                  Discuss a Project{" "}
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

