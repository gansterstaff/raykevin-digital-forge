
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll';
import GlassCard from '../GlassCard';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "RayKevin transformó por completo nuestra presencia digital. Su enfoque multidisciplinario combinando desarrollo web, diseño UX y estrategia de contenido nos dio exactamente lo que necesitábamos.",
    author: "María González",
    position: "CEO, InnovaTech"
  },
  {
    content: "Trabajar con RayKevin ha sido una experiencia excepcional. No solo entregó un producto técnicamente impecable, sino que realmente entendió nuestras necesidades de negocio y las tradujo a una solución digital completa.",
    author: "Carlos Méndez",
    position: "Director de Marketing, GrowthHub"
  },
  {
    content: "Su capacidad para integrar diseño atractivo con funcionalidad robusta es incomparable. RayKevin no solo desarrolló nuestra plataforma, sino que nos guió en todo el proceso estratégico.",
    author: "Laura Sánchez",
    position: "Fundadora, CreativeScope"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-raykevin-darker">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <SectionTitle 
            title="Lo que dicen mis clientes" 
            subtitle="Experiencias de quienes han confiado en mis servicios para sus proyectos digitales."
            centered
          />
          
          <div className="max-w-3xl mx-auto relative">
            <GlassCard className="py-8 px-6 md:px-10 text-center">
              <Quote size={48} className="mx-auto text-raykevin-purple opacity-30 mb-4" />
              
              <p className="text-white text-lg md:text-xl mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div>
                <h4 className="text-white font-medium">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-white/50 text-sm">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </GlassCard>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-raykevin-purple' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-raykevin-darker/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-8">
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-raykevin-darker/80 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
