import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

export default function Certificates() {
  // Add your latest certificates here to the top of the list.
  // The system will automatically slice and display only the first 4 certificates.
  const allCertificates = [
    {
      title: "Frontend Web Development",
      issuer: "University of Moratuwa",
      date: "Nov 2024",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      icon: <FaCertificate className="text-[#3A9188] w-6 h-6 animate-pulse" />,
    },
    {
      title: "Introduction to Software Quality Assurance",
      issuer: "University of Moratuwa",
      date: " Sep 2025",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      icon: <FaCertificate className="text-[#3A9188] w-6 h-6 animate-pulse" />,
    },
    {
      title: "Full Stack Web Development ",
      issuer: "SKYREK (Pvt)Ltd",
      date: "Dec 2025",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      icon: <FaCertificate className="text-[#3A9188] w-6 h-6 animate-pulse" />,
    },
    {
      title: "Software Quality Assurance Manual Testing",
      issuer: "Coding Academy",
      date: "Nov 2025",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      icon: <FaCertificate className="text-[#3A9188] w-6 h-6 animate-pulse" />,
    },
    {
      title: "Old Certificate 7 (Will be hidden)",
      issuer: "Issuing Organization",
      date: "Month Year",
      link: "https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/",
      icon: <FaCertificate className="text-[#3A9188] w-6 h-6 animate-pulse" />,
    }
  ];

  // Only take the first 4 certificates (latest ones)
  const displayedCertificates = allCertificates.slice(0, 4);

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center bg-[#02312C] px-4 py-20 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-bold text-[#B8E1DD] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Certificates & Licenses
          </motion.h2>
          <motion.p
            className="text-lg text-[#B8E1DD]/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            My professional achievements and certifications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedCertificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-[#044A42] p-6 rounded-2xl shadow-lg border border-[#3A9188]/30 hover:border-[#3A9188] transition-all flex flex-col sm:flex-row items-start gap-5 relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="mt-1 bg-[#02312C] p-4 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-xl font-semibold text-[#B8E1DD] mb-1">{cert.title}</h3>
                <p className="text-[#3A9188] font-medium mb-1">{cert.issuer}</p>
                <p className="text-[#B8E1DD]/60 text-sm mb-4">Issued: {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[#B8E1DD] hover:text-[#3A9188] transition gap-2 mt-auto"
                >
                  <FaExternalLinkAlt /> Show Credential
                </a>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3A9188]/0 via-[#3A9188]/10 to-[#3A9188]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/dilani-thathsarani-4a4984316/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#3A9188] text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(58,145,136,0.4)] hover:bg-[#062925] hover:shadow-[0_0_25px_rgba(58,145,136,0.6)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedin className="mr-3 w-6 h-6" />
            Explore More Certificates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
