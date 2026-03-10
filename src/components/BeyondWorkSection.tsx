import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mountain, BookOpen, Camera, Music } from "lucide-react";

const interests = [
  {
    icon: Mountain,
    title: "Adventure & Travel",
    description:
      "From trekking in the Himalayas to exploring street food markets in Southeast Asia — I believe the best ideas come from experiencing the world.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learner",
    description:
      "Always reading, always curious. From behavioral economics to sci-fi novels — my reading list is as diverse as my product backlog.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "I see the world through a lens — capturing moments, patterns, and stories that often inspire my approach to product design.",
  },
  {
    icon: Music,
    title: "Music & Creativity",
    description:
      "Whether it's playing guitar on weekends or curating playlists for deep work — music is the soundtrack to my creative process.",
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
    </section>
  );
};

export default BeyondWorkSection;
