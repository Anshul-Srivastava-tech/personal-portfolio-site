import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Oct 2021 — Present",
    role: "Principal Product Manager, Fintech",
    company: "Blackhawk Network",
    location: "Bengaluru, India",
    subtitle: "Senior PM → Principal PM (promoted Sep 2022)",
    bullets: [
      "Led product strategy and platform design for a global servicing platform — spanning <strong>8</strong> product teams and <strong>~30 cross-functional contributors</strong> (Product, Engineering, Ops, UX), reducing average handling time by <strong>10%</strong> across <strong>1M+</strong> annual customer contacts",
      "Reduced cardholders dispute reporting time from <strong>~2 days to 5 minutes</strong> and enabled self-serve by digitizing the end-to-end journey via a hybrid build-buy approach, delivering <strong>$1.32M</strong> in <strong>annualized savings</strong> and achieving compliance ahead of regulatory deadlines",
      "Defined <strong>AI-led servicing strategy</strong> with Engineering to deflect Operations volume and enable faster request handling — potential savings of <strong>$600K/yr</strong>",
      "Created a <strong>new revenue line</strong> and already captured <strong>$500K</strong> in recurring revenue by onboarding <strong>700+ external users</strong> across partner organizations onto a self-service platform, defining pricing and onboarding strategy",
      "Built an <strong>AI-powered Knowledge Assistant</strong> — cutting knowledge discovery from <strong>hours to minutes</strong> and enabling self-service at scale across the organization",
    ],
    highlights: ["Product Strategy", "Fintech", "AI", "Platform", "Payments"],
  },
  {
    period: "Sep 2017 — Sep 2021",
    role: "Product Manager",
    company: "American Express",
    location: "Gurgaon, India",
    subtitle: "Product Owner → Manager, Product Management (promoted Jan 2020)",
    bullets: [
      "Reduced customer onboarding time from <strong>days to hours</strong> by digitizing the KYC journey across <strong>6</strong> EMEA markets (Netherlands, Germany, France and others) — impacting <strong>1M+</strong> cardholder accounts",
      "Scaled an experimental POC to build an <strong>NLP-powered email automation</strong> that reduced mean time to respond to customer requests by <strong>80%</strong> — addressing a <strong>$14M</strong> global <strong>OPEX opportunity</strong>",
      "Automated dispute abuser identification — reducing <strong>manual effort</strong> by <strong>75%</strong> and delivering <strong>$350K</strong> in <strong>annual savings</strong>",
      "Automated <strong>12</strong> manual processes via RPA (credit balance refund, disputes, etc.) — delivering <strong>$2M</strong> in <strong>cost savings</strong>",
    ],
    highlights: ["KYC", "AI/NLP", "RPA", "Automation", "EMEA"],
  },
  {
    period: "Jun 2015 — Aug 2017",
    role: "Consultant, Process Excellence",
    company: "Wipro Limited",
    location: "New Delhi, India",
    bullets: [
      "Analyzed <strong>15+</strong> processes for automation across telecom and financial services clients",
      "Built Tableau dashboards for real-time business intelligence at client locations",
      "Developed a logistic regression model in R for SLA performance prediction",
    ],
    highlights: ["Consulting", "Automation", "Tableau", "Analytics"],
  },
  {
    period: "Jul 2011 — May 2013",
    role: "Assistant Manager, Operations",
    company: "Apraava Energy",
    location: "Jhajjar, India",
    bullets: [
      "Led two engineers and ten field operators at a <strong>660x2 MW</strong> power plant",
      "Proposed and presented an <strong>INR 20 crore</strong> energy efficiency initiative using Variable Frequency Drives to senior leadership",
    ],
    highlights: ["Operations", "Energy", "Leadership"],
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

      <div className="md:pl-12 md:border-l border-border pb-32 last:pb-0 group-last:border-transparent">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {exp.role}
        </h3>
        <p className="text-primary text-sm font-medium mt-1">{exp.company} · {exp.location}</p>
        {exp.subtitle && (
          <p className="text-muted-foreground text-xs font-display mt-1">{exp.subtitle}</p>
        )}
        <ul className="mt-3 space-y-1.5 pl-1 list-none">
          {exp.bullets.map((bullet) => (
            <li key={bullet} className="text-muted-foreground text-sm leading-relaxed flex [&_strong]:text-foreground [&_strong]:font-semibold">
              <span className="text-primary mr-2 shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: bullet }} />
            </li>
          ))}
        </ul>
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
