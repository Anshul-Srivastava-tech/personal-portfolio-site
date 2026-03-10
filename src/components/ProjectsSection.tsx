import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Product Analytics Dashboard",
    description:
      "An open-source analytics tool for product teams to visualize user behavior and make data-driven decisions.",
    tags: ["React", "D3.js", "Python"],
    link: "#",
  },
  {
    title: "PM Framework Toolkit",
    description:
      "A curated collection of frameworks, templates, and tools I've developed throughout my career for effective product management.",
    tags: ["Notion", "Miro", "Strategy"],
    link: "#",
  },
  {
    title: "Community Mentorship Platform",
    description:
      "A platform connecting aspiring product managers with experienced mentors. Built as a passion project to give back to the PM community.",
    tags: ["Next.js", "Supabase", "Community"],
    link: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group block bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-warm)]"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {project.description}
      </p>
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
          Things I've Built
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
