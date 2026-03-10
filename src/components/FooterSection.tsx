import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer className="section-padding max-w-5xl mx-auto" ref={ref}>
      <div className="glow-line mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm leading-relaxed">
          Whether you want to talk product, collaborate on a project, or just say
          hi — I'd love to hear from you.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground font-display">
          © {new Date().getFullYear()} — Built with passion & purpose.
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
