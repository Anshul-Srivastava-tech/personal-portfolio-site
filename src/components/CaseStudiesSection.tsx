import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    title: "Digitizing the Cardholder Dispute Journey",
    tags: ["Digitization", "Automation", "Compliance", "Blackhawk Network"],
    problem:
      "Cardholders raising disputes had to download a form, fill it manually, scan it, and submit via fax or email. Before a single agent could begin reviewing it, hours or days had already passed. A poor experience at an already frustrating customer moment — compounded by rising compliance pressure after a competitor was fined by the regulator.",
    approach: [
      "Conducted <strong>build-vs-buy analysis</strong> — selected a hybrid approach purchasing a third-party module for backend processing and card network integrations",
      "Integrated vendor module with core systems to deliver a seamless <strong>end-to-end digital dispute journey</strong>",
      "Automated <strong>ticket creation, case routing, and pre-dispute processing</strong> via card network integrations — zero manual intervention",
      "Built financial model projecting savings vs. build costs to secure <strong>senior leadership buy-in</strong>",
    ],
    impact: [
      "<strong>$1.32M</strong> in annualized cost savings through automation",
      "Dispute submission reduced from <strong>hours/days to minutes</strong>",
      "Achieved <strong>compliance</strong> ahead of regulatory deadlines",
      "Improved <strong>CSAT</strong> at the most critical point in the customer journey",
    ],
  },
  {
    title: "Unified Servicing Platform",
    tags: ["0-to-1", "Cross-functional", "Blackhawk Network"],
    problem:
      "Customer operations ran on a fragmented foundation — Excel trackers, disconnected point tools, no automation, and zero self-serve capability. Every customer request required manual intervention, making it impossible to scale servicing without scaling headcount proportionally.",
    approach: [
      "Defined <strong>platform consolidation strategy</strong> — aligning Customer Support, Engineering, and legacy system owners around a single unified vision",
      "Navigated <strong>organizational resistance</strong> by demonstrating clear value for each team, not just the business",
      "Drove alignment across <strong>Director and VP-level stakeholders</strong> across multiple functions",
      "Delivered concept to launch in <strong>12 months</strong>",
    ],
    impact: [
      "Reduced average request handling time by <strong>15%</strong>",
      "Enabled <strong>self-serve capabilities</strong> for the first time, reducing inbound volume",
      "Foundation for onboarding <strong>700+ external partner users</strong> as a paid offering",
      "Generated <strong>$0.5M</strong> in new revenue through platform externalization",
    ],
  },
  {
    title: "NLP-Powered Case Presentment",
    tags: ["AI/NLP", "0-to-1", "American Express"],
    problem:
      "Customer complaints arrived across multiple email mailboxes globally — each requiring an agent to manually read, interpret, classify, and route before any resolution work could begin. Processing delays, inconsistent routing, and an unsustainable manual workload as volume scaled globally.",
    approach: [
      "Co-defined <strong>NLP solution architecture</strong> with Engineering — real-time email reading, intent classification, and automated ticket routing",
      "Designed <strong>intent taxonomy</strong> and confidence thresholds for automated vs. human-review routing",
      "Built <strong>fallback logic</strong> to handle ambiguous customer language across global markets",
      "Deployed across <strong>multiple global mailboxes</strong> simultaneously from a single solution",
    ],
    impact: [
      "Identified <strong>$14M OPEX opportunity</strong> — full addressable savings from eliminating manual case intake globally",
      "<strong>Zero manual intervention</strong> in the intake pipeline",
      "Scaled across <strong>multiple global markets</strong> from a single solution",
    ],
  },
];

const CaseStudyCard = ({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-card rounded-xl p-6 md:p-8 border border-border border-l-2 border-l-primary"
    >
      {/* Title + Tags row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
          {study.title}
        </h3>
        <div className="flex flex-wrap gap-2 shrink-0">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-display bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Three columns: Problem | Approach | Impact */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
            Problem
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {study.problem}
          </p>
        </div>
        <div>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
            Approach
          </p>
          <ul className="space-y-1.5 pl-1 list-none">
            {study.approach.map((point) => (
              <li
                key={point}
                className="text-muted-foreground text-sm leading-relaxed flex [&_strong]:text-foreground [&_strong]:font-semibold"
              >
                <span className="text-primary mr-2 shrink-0">▸</span>
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
            Impact
          </p>
          <ul className="space-y-1.5 pl-1 list-none">
            {study.impact.map((point) => (
              <li
                key={point}
                className="text-muted-foreground text-sm leading-relaxed flex [&_strong]:text-foreground [&_strong]:font-semibold"
              >
                <span className="text-primary mr-2 shrink-0">▸</span>
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudiesSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" className="section-padding max-w-5xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
          Featured Work
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Case Studies
        </h2>
        <p className="text-muted-foreground font-body text-lg mt-4 max-w-xl">
          A closer look at three product bets — the problems, the thinking, and
          the outcomes.
        </p>
        <div className="glow-line mt-6 max-w-xs" />
      </motion.div>

      <div className="flex flex-col gap-6">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.title} study={study} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
