import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import BeyondWorkSection from "@/components/BeyondWorkSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <CaseStudiesSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <BeyondWorkSection />
      <FooterSection />
    </div>
  );
};

export default Index;
