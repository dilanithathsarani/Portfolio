<section
  id="education"
  className="min-h-screen flex items-center justify-center bg-[#044A42] px-4 py-20"
>
  <div className="max-w-4xl mx-auto relative">

    <motion.h2
      className="text-3xl sm:text-4xl font-bold mb-12 text-[#B8E1DD] text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Education
    </motion.h2>

    {/* Timeline Line */}
    <div className="absolute left-4 sm:left-6 md:left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3A9188]/80 via-[#B8E1DD]/40 to-[#3A9188]/80 rounded"></div>

    <div className="flex flex-col space-y-10 sm:space-y-12 ml-0 md:ml-12">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-start gap-6 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* Icon */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-[#3A9188] p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
              {edu.icon}
            </div>
            {index !== educationData.length - 1 && (
              <div className="flex-1 w-1 bg-[#3A9188]/40 mt-1 md:mt-1 rounded h-6 md:h-full"></div>
            )}
          </div>

          {/* Card */}
          <motion.div
            className="bg-[#3A9188]/20 p-4 sm:p-6 rounded-xl shadow-lg border border-[#B8E1DD]/20 w-full md:w-80 hover:scale-105 transition-transform"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-[#B8E1DD]">{edu.degree}</h3>
            <p className="text-[#B8E1DD] mt-1 text-sm sm:text-base">{edu.institution}</p>
            {edu.achievement && (
              <span className="text-[#B8E1DD]/80 mt-2 block font-medium text-sm sm:text-base">
                {edu.achievement}
              </span>
            )}
            <span className="text-[#B8E1DD]/60 mt-1 block text-xs sm:text-sm">{edu.year}</span>
            <span className="text-[#B8E1DD]/60 mt-1 block text-xs sm:text-sm">{edu.time}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
