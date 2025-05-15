
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ApproachSection from '@/components/home/ApproachSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import GlassmorphicCtaSection from '@/components/home/GlassmorphicCtaSection';
import ProjectCardsSection from '@/components/home/ProjectCardsSection';

const Index = () => {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <ProjectCardsSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <TestimonialsSection />
        <FaqSection />
        <GlassmorphicCtaSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
