
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center text-center pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-full bg-raykevin-purple/20 text-raykevin-purple px-4 py-1 text-sm inline-flex items-center justify-center mb-6 backdrop-blur-sm">
            ESTRATEGIA DIGITAL MULTIDISCIPLINARIA
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            Desarrollo Digital <span className="text-raykevin-purple">Intuitivo</span> con Visión Estratégica
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Combino desarrollo full-stack, diseño UI/UX y estrategia de contenido para transformar ideas en experiencias digitales integrales que conectan y generan resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="https://wa.me/51921209325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neuro-button inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white hover:text-raykevin-purple"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={18} />
              <span>Hablemos de tu proyecto</span>
            </motion.a>
            
            <motion.a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium border border-white/20 rounded-lg bg-transparent hover:bg-white/5 text-white transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Conocer mis servicios
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-raykevin-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-raykevin-purple/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
