import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "$3M", label: "Servicing consolidation cost savings" },
  { value: "$14M", label: "AI-driven NLP automation for email channel" },
  { value: "$2M", label: "RPA automation across support workflows" },
  { value: "1M+", label: "Customers impacted through KYC automation across EMEA" },
  { value: "75%", label: "Effort reduction across operational workflows" },
];

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metrics" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <div className="glow-line mb-12" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="font-display text-3xl md:text-4xl font-bold text-primary">
              {metric.value}
            </p>
            <p className="text-xs text-muted-foreground font-display mt-2 leading-snug">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="glow-line mt-12" />
    </section>
  );
};

export default MetricsSection;
