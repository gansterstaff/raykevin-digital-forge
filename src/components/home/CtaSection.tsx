
import { MessageCircle } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
              ¿Listo para transformar tu idea en una experiencia digital de impacto?
            </h2>
            
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Cada proyecto es una oportunidad para crear algo único. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales.
            </p>
            
            <a 
              href="https://wa.me/51921209325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neuro-button inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white hover:text-raykevin-purple shadow-[0_20px_5px_rgba(100,70,190,0.45)]"
            >
              <MessageCircle size={18} />
              <span>Contáctame por WhatsApp</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaSection;
