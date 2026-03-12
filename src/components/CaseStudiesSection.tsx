import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    title: "Digitizing the Cardholder Dispute Journey",
    tags: ["Digitization", "Automation", "Compliance", "Blackhawk Network"],
    problem:
      "Cardholders raising disputes had to download a form, fill it manually, scan it, and submit via fax or email. Before a single agent could begin reviewing it, hours or days had already passed. A poor experience at an already frustrating customer moment — compounded by rising compliance pressure after a competitor was fined by the regulator.",
    approach:
      "Led a build-vs-buy analysis that resulted in a hybrid approach — purchasing a specialized module for automated backend processing and card network integrations, then integrating it with core systems to deliver a seamless end-to-end digital journey. On the frontend, customers could submit disputes digitally in minutes. On the backend, rule-based automation handled ticket creation, pre-populated case information, routed to the correct team, and integrated directly with card networks to accelerate pre-dispute processing and chargeback resolution — all without manual intervention. The build-vs-buy decision required a financial model projecting savings against build costs, integration complexity, and vendor risk to secure senior leadership buy-in.",
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
    approach:
      "Led end-to-end product strategy to consolidate disparate servicing workflows into a single unified platform — aligning Customer Support leadership, Product and Engineering leads from multiple legacy systems, and Director and VP-level stakeholders across the organization. Consolidating systems that different teams had built their workflows around required navigating organizational resistance alongside technical complexity. Getting stakeholders to give up their tools meant demonstrating clear value for each team, not just the business overall. Concept to launch: 12 months.",
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
    approach:
      "Co-defined and led the product strategy with Engineering for an NLP-powered solution that reads incoming emails in real time, identifies customer intent, classifies the request, creates a ticket automatically, and routes it to the correct team — with zero manual intervention across global mailboxes simultaneously. Defining the intent taxonomy, confidence thresholds for automated versus human routing, and fallback logic required tight collaboration between product thinking and engineering capability.",
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
          <p className="text-muted-foreground text-sm leading-relaxed">
            {study.approach}
          </p>
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
