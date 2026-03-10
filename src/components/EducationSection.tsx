import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "MBA, Business Administration",
    institution: "University Name",
    year: "2015",
  },
  {
    type: "degree",
    title: "B.S. Computer Science",
    institution: "University Name",
    year: "2013",
  },
];

const certifications = [
  { title: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", year: "2023" },
  { title: "Product Analytics Certification", issuer: "Amplitude", year: "2022" },
  { title: "AI Product Management", issuer: "Coursera", year: "2024" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
          Learning
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Education & Certs
        </h2>
        <div className="glow-line mt-6 max-w-xs" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.title} className="border-l-2 border-primary/30 pl-5">
                <p className="font-display font-medium text-foreground">{edu.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">Certifications</h3>
          </div>
          <div className="space-y-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="border-l-2 border-primary/30 pl-5">
                <p className="font-display font-medium text-foreground">{cert.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
