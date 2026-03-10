import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2021 — Present",
    role: "Senior Product Manager",
    company: "Tech Company",
    description:
      "Leading product strategy for a B2B SaaS platform serving 500K+ users. Drove 40% increase in user retention through data-driven feature prioritization and cross-functional team leadership.",
    highlights: ["Product Strategy", "Data Analytics", "Team Leadership"],
  },
  {
    period: "2018 — 2021",
    role: "Product Manager",
    company: "Growth Startup",
    description:
      "Owned the full product lifecycle from ideation to launch. Shipped 12 major features that contributed to 3x revenue growth. Built and mentored a team of 4 associate PMs.",
    highlights: ["0→1 Products", "Revenue Growth", "Mentorship"],
  },
  {
    period: "2015 — 2018",
    role: "Associate Product Manager",
    company: "Enterprise Corp",
    description:
      "Started my PM journey working on enterprise workflow tools. Learned the fundamentals of user research, agile methodology, and stakeholder management.",
    highlights: ["User Research", "Agile", "Stakeholder Mgmt"],
  },
];

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-[200px] top-2 w-3 h-3 rounded-full border-2 border-primary bg-background translate-x-[calc(1.5rem-6px)] z-10" />

      <div className="text-sm text-muted-foreground font-display tracking-wide pt-1">
        {exp.period}
      </div>

      <div className="md:pl-12 md:border-l border-border pb-12 last:pb-0 group-last:border-transparent">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {exp.role}
        </h3>
        <p className="text-primary text-sm font-medium mt-1">{exp.company}</p>
        <p className="text-muted-foreground mt-3 leading-relaxed text-sm">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {exp.highlights.map((h) => (
            <span
              key={h}
              className="px-3 py-1 rounded-full text-xs font-display bg-secondary text-secondary-foreground"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
          Career
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Work Experience
        </h2>
        <div className="glow-line mt-6 max-w-xs" />
      </motion.div>

      <div className="relative">
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.period} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
