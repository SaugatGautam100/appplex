import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import AboutSection from '@/components/home/AboutSection';
import CtaSection from '@/components/home/CtaSection';
import {motion} from 'framer-motion';

export default function HomePage() {
  return (
    <>

      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}