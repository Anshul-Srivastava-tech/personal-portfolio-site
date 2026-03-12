import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Indic Tales",
    description:
      "An Android app bringing timeless Indian mythology to modern families — one illustrated story at a time. 76 stories across 11 categories including Ramayana, Mahabharata, Buddhist Tales, and Freedom Fighters. Available in English and Hindi. No ads, no distractions.",
    tags: ["React Native", "Android", "AI Illustrations"],
    link: "https://indictales.in",
    featured: true,
    whyBuilt: "Built to help my child discover Indian mythology through modern storytelling and technology.",
  },
  {
    title: "MindBridge",
    description:
      "An AI-powered mental health platform connecting users with licensed professionals through an empathetic chatbot. Triages concerns and surfaces nearby specialists with matching ratings, specializations, and booking options.",
    tags: ["React", "Lovable", "AI Chatbot"],
    link: "#",
    featured: false,
    whyBuilt: "Built while exploring how AI could act as a triage layer before professional mental health support.",
  },
  {
    title: "Telegram News Bot",
    description:
      "A Telegram bot that aggregates news from multiple sources and delivers a curated daily digest — built to eliminate morning context-switching between multiple news apps.",
    tags: ["Telegram API", "Automation", "News Aggregation"],
    link: "#",
    featured: false,
    whyBuilt: "Built to reduce information overload by summarizing multi-source news feeds into daily digests.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target={project.link !== "#" ? "_blank" : undefined}
      rel={project.link !== "#" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group block bg-card rounded-xl p-6 md:p-8 border transition-all duration-300 hover:shadow-[var(--shadow-warm)] ${
        project.featured
          ? "border-primary/30 hover:border-primary/50"
          : "border-border hover:border-primary/30"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
      </div>
      {project.featured && (
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-display font-medium bg-primary text-primary-foreground">
            Coming to Play Store
          </span>
        </div>
      )}
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {project.description}
      </p>
      <div className="border-t border-border/50 pt-3 mb-5">
        <p className="text-primary font-display text-[11px] font-medium tracking-wide uppercase mb-1">
          Why I built this
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {project.whyBuilt}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-display bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
          Side Projects
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Things I've Built Using AI
        </h2>
        <div className="glow-line mt-6 max-w-xs" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
