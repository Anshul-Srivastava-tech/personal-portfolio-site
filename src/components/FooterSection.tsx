import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/anshul-kumar-srivastava/" },
  { icon: Mail, label: "Email", href: "mailto:aksri1007@gmail.com" },
];

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer className="px-6 pt-8 pb-24 md:px-12 lg:px-24 xl:px-32 max-w-5xl mx-auto" ref={ref}>
      <div className="glow-line mb-10" />

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
          Whether you want to discuss a product opportunity, collaborate on a project,
          or just say hi - I'd love to hear from you.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground font-display">
          © 2025 Anshul Kumar Srivastava
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
