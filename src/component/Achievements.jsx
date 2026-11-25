import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaUsers, FaAward, FaPalette, FaExternalLinkAlt } from "react-icons/fa";

const HACKATHON_HIGHLIGHTS = [
  {
    title: "CodeRally V7.0",
    badge: "Finalist",
    category: "Competitive Coding & Problem Solving",
    description:
      "Selected as a Finalist in CodeRally V7.0, demonstrating algorithmic problem-solving, teamwork, and rapid software prototyping under competition pressure.",
    flyerUrl: "https://lnkd.in/p/gF5RjHi9",
    Icon: FaTrophy,
  },
  {
    title: "HaXtreme 5.0",
    badge: "Finalist",
    category: "Hackathon & Innovation",
    description:
      "Reached the Finals of HaXtreme 5.0 by collaborating on innovative technical solutions and delivering a functional prototype within tight deadlines.",
    flyerUrl: "https://lnkd.in/p/gx2tU9XG",
    Icon: FaMedal,
  },
  {
    title: "7+ Hackathons & Tech Events",
    badge: "Active Competitor",
    category: "Inter-University & National",
    description:
      "Consistent participant across 7+ hackathons and coding competitions, building full-stack, mobile, and UI/UX solutions with cross-functional teams.",
    Icon: FaAward,
  },
];

const VOLUNTEERING_ROLES = [
  {
    organization: "IEEE CS Student Branch Chapter — SUSL",
    role: "Design Team Lead",
    period: "2025 – Present",
    highlights: "Design Team Lead for Blogthon V1.0 (Ongoing) and Designer for Pixel Pioneers Game Jam v1.0.",
  },
  {
    organization: "IEEE Student Branch — SUSL",
    role: "Design Team Lead & Member",
    period: "2024 – Present",
    highlights: "Team Lead for IEEE Day Celebration 2026; Design Team Member for IEEE Day Celebrations 2024 & 2025 and JamborIEEE 2026.",
  },
  {
    organization: "IEEE WIE Affinity Group — SUSL",
    role: "Design Team Lead",
    period: "2026 – Present",
    highlights: "Leading the design team for Hope 3.0 (Ongoing), crafting visual identity and event creatives.",
  },
  {
    organization: "Rotaract Club — SUSL",
    role: "Graphic Designer",
    period: "2025 – Present",
    highlights: "Designed creatives for Design for Impact, SDG Goal 01, Personal Branding 101, and Building a Brand as an Undergraduate.",
  },
  {
    organization: "Leo Club — SUSL",
    role: "Member",
    period: "2025 – Present",
    highlights: "Active member contributing to community service initiatives and student-led campus programs.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-page-muted py-24 px-6 border-t border-line relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs md:text-sm tracking-wider uppercase bg-accent-soft/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Recognition & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
            Achievements & Volunteering
          </h2>
          <p className="text-ink-muted text-base md:text-lg mt-3">
            Hackathon milestones, competitive programming finals, and design leadership across university tech communities.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Hackathon Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-7 mb-16">
          {HACKATHON_HIGHLIGHTS.map(({ title, badge, category, description, flyerUrl, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-card p-7 rounded-3xl border border-line shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent-soft/30 text-accent-strong dark:text-accent flex items-center justify-center text-xl group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-accent-soft/40 text-accent-strong dark:text-accent border border-accent/20">
                    {badge}
                  </span>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                  {category}
                </p>
                <h3 className="text-xl font-bold text-ink mb-2.5 group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {flyerUrl && (
                <div className="mt-5 pt-4 border-t border-line">
                  <a
                    href={flyerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-strong transition-colors"
                  >
                    View Flyer Post <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Volunteering & Design Leadership */}
        <div className="bg-card rounded-3xl border border-line p-7 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-line">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent-soft/30 rounded-xl text-accent-strong dark:text-accent">
                <FaUsers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink">
                  Volunteering & Community Leadership
                </h3>
                <p className="text-xs text-ink-muted">
                  Sabaragamuwa University of Sri Lanka (SUSL)
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent bg-accent-soft/20 px-3 py-1.5 rounded-full self-start sm:self-auto">
              <FaPalette className="text-[11px]" /> Design & Leadership
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {VOLUNTEERING_ROLES.map((item, idx) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-5 rounded-2xl bg-page-muted border border-line hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-accent-soft/30 text-accent-strong dark:text-accent text-[11px] font-bold">
                    {item.role}
                  </span>
                  <span className="text-xs font-semibold text-ink-muted">
                    {item.period}
                  </span>
                </div>
                <h4 className="font-bold text-ink text-sm sm:text-base mb-1.5">
                  {item.organization}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {item.highlights}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

