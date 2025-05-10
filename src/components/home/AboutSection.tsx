
import AnimateOnScroll from '../AnimateOnScroll';
import SectionTitle from '../SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <SectionTitle 
            title="Quién Soy" 
            subtitle="Estratega digital multidisciplinario con experiencia en desarrollo, diseño y contenido."
            centered
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/80 mb-6">
              Soy un profesional digital que combina conocimientos técnicos de desarrollo con una visión estratégica del diseño y el contenido. 
              Mi enfoque multidisciplinario me permite crear soluciones digitales completas que no solo funcionan técnicamente, 
              sino que también comunican eficazmente y ofrecen una experiencia de usuario excepcional.
            </p>
            
            <Link 
              to="/about" 
              className="inline-flex items-center text-raykevin-purple hover:text-raykevin-purple-light transition-colors"
            >
              <span>Leer más sobre RayKevin</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
