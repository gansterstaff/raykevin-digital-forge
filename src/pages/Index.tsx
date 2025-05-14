
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ApproachSection from '@/components/home/ApproachSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import InteractiveCardsSection from '@/components/home/InteractiveCardsSection';

const Index = () => {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <InteractiveCardsSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
