
import { MessageCircle } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center glass-card p-8 backdrop-blur-xl">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
              ¿Listo para transformar tu idea en una experiencia digital de impacto?
            </h2>
            
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Cada proyecto es una oportunidad para crear algo único. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales.
            </p>
            
            <motion.a 
              href="https://wa.me/51921209325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neuro-button inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white hover:text-raykevin-purple"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              <span>Contáctame por WhatsApp</span>
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaSection;
