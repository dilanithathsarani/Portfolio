import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaLinkedin, FaCheckCircle } from "react-icons/fa";

export default function Certificates() {
  const certificates = [
    {
      title: "Frontend Web Development",
      issuer: "University of Moratuwa",
      date: "Nov 2024",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      category: "Web Development",
    },
    {
      title: "API Testing Foundations",
      issuer: "LinkedIn Learning Community",
      date: "Aug 2026",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      category: "Quality Assurance",
    },
    {
      title: "Introduction to Software Quality Assurance",
      issuer: "University of Moratuwa",
      date: "Sep 2024",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      category: "Quality Assurance",
    },
    {
      title: "Full Stack Web Development",
      issuer: "SKYREK (Pvt) Ltd",
      date: "Dec 2024",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      category: "Full Stack",
    },
    {
      title: "Software Quality Assurance Manual Testing",
      issuer: "Coding Academy",
      date: "Nov 2024",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      category: "Software Testing",
    },
    {
      title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
      issuer: "Amozon Web Services",
      date: "June 2026",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      category: "Cloud Services",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center bg-page-muted py-24 px-6 border-t border-line"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs md:text-sm tracking-wider uppercase bg-accent-soft/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-ink-muted text-base md:text-lg mt-3">
            Verified academic credentials and professional certifications earned in Software Development and Quality Assurance.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificate Tiles Grid (Medium Format) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-card p-6 rounded-2xl border border-line shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div>
                {/* Top Badge & Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 bg-accent-soft/30 text-accent-strong rounded-xl group-hover:bg-accent-strong group-hover:text-white transition-colors duration-300">
                    <FaCertificate className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-100 dark:border-emerald-800">
                    <FaCheckCircle className="text-[10px]" /> Verified
                  </span>
                </div>

                <span className="inline-block px-2.5 py-1 bg-page-muted text-ink-muted text-[11px] font-bold rounded-md mb-2">
                  {cert.category}
                </span>

                <h3 className="text-base font-bold text-ink mb-2 leading-snug group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                <p className="text-accent font-semibold text-xs mb-1">{cert.issuer}</p>
                <p className="text-ink-muted text-[11px] mb-4">Issued: {cert.date}</p>
              </div>

              <div className="pt-4 border-t border-line mt-auto">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-page-muted group-hover:bg-accent-strong text-ink group-hover:text-white text-xs font-bold transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-[10px]" /> View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Certifications CTA */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-strong hover:bg-[#062925] text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <FaLinkedin className="text-xl text-accent-soft" />
            Explore Full Certificates
          </a>
        </motion.div>

      </div>
    </section>
  );
}
