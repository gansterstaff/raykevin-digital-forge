
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center text-center pt-32 md:pt-36 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="rounded-full bg-raykevin-purple/20 text-raykevin-purple px-4 py-1 text-sm inline-flex items-center justify-center mb-5 backdrop-blur-sm">
            ESTRATEGIA DIGITAL MULTIDISCIPLINARIA
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-5">
            Desarrollo Digital <span className="text-raykevin-purple">Intuitivo</span> con Visión Estratégica
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-6 max-w-4xl mx-auto">
            Combino desarrollo full-stack, diseño UI/UX y estrategia de contenido para transformar ideas en experiencias digitales integrales que conectan y generan resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <motion.a 
              href="https://wa.me/51921209325" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-black/30 backdrop-blur-lg border border-white/10 hover:border-white/20 inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium text-white shadow-neuro hover:shadow-neuro-sm transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={22} />
              <span>Hablemos de tu proyecto</span>
            </motion.a>
            
            <motion.a 
              href="#services" 
              className="rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white shadow-neuro-sm hover:shadow-neuro transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Conocer mis servicios
            </motion.a>
          </div>
        </motion.div>
        
        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mx-auto w-full overflow-hidden mt-4"
        >
          <div className="relative w-full max-w-[1400px] mx-auto">
            <img 
              src="/lovable-uploads/2f4569f2-0274-45d7-9a52-ec45e87d47d8.png" 
              alt="Dashboard Interface" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
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
