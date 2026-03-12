import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Clapperboard, BookOpen, Trees, PenLine } from "lucide-react";

const interests = [
  {
    icon: Cpu,
    title: "Building with AI",
    description: "Vibe-coding apps that solve real problems.",
  },
  {
    icon: Clapperboard,
    title: "Movies & Series",
    description: "Always watching something worth discussing.",
  },
  {
    icon: BookOpen,
    title: "Books & Anime",
    description: "Reader across genres — from mythology to manga.",
  },
  {
    icon: Trees,
    title: "Outdoors",
    description: "Best thinking happens outside.",
  },
];

const BeyondWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="beyond" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
          Beyond the Product
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          The Human Side
        </h2>
        <div className="glow-line mt-6 max-w-xs" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {interests.map((interest, i) => {
          const Icon = interest.icon;
          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/20 transition-colors duration-300"
            >
              <Icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-display text-base font-semibold mb-2 text-foreground">
                {interest.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Blog link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-10"
      >
        <a
          href="https://adhyayah.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-card rounded-xl px-6 py-5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-warm)]"
        >
          <PenLine className="w-5 h-5 text-primary" />
          <div>
            <p className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              Adhyayah
            </p>
            <p className="text-sm text-muted-foreground">
              Personal writing on product, life, and everything in between.
            </p>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default BeyondWorkSection;
