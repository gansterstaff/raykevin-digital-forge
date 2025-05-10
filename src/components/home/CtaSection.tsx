
import { MessageCircle } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';

const CtaSection = () => {
  return (
    <section className="section-padding bg-raykevin-darker">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
              ¿Listo para llevar tu presencia digital al siguiente nivel?
            </h2>
            
            <p className="text-white/70 mb-8">
              Contáctame hoy mismo para discutir cómo puedo ayudarte a alcanzar tus objetivos digitales con una estrategia personalizada que combine desarrollo, diseño y contenido.
            </p>
            
            <a 
              href="https://wa.me/51921209325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neuro-button inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white hover:text-raykevin-purple"
            >
              <MessageCircle size={18} />
              <span>Iniciar conversación</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaSection;
