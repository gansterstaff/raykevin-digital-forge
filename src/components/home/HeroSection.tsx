
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="flex flex-col text-center pt-24 md:pt-28 lg:pt-32 pb-0 relative">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full md:w-2/3 h-full pointer-events-none" style={{ zIndex: -1 }}>
        <img
          src="/lovable-uploads/e6102a9a-9ee2-442f-80b7-7fcf08621fae.png"
          alt="Corner decoration"
          className="w-full h-full object-cover object-left opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-[0px] mt-8 pb-0 relative z-20"
        >
          <div className="rounded-full bg-raykevin-purple/20 text-raykevin-white px-4 py-1 text-sm inline-flex items-center justify-center mb-10 backdrop-blur-sm">
          SOLUCIONES DIGITALES COMPLETAS: HAGO QUE TU PRESENCIA ONLINE TRABAJE PARA TI 
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 ">
            Desarrollo Growth <span className="text-raykevin-purple">Intuitivo</span> con Visión Estratégica
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-0 md:mb-12 max-w-4xl mx-auto">
          Hablemos de tu visión.Yo lo transformo en una realidad digital estratégica, lista para conectar y generar <span className="text-raykevin-purple font-bold">resultados</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-0 mt-14">
            <motion.a
              href="https://wa.me/51921209325"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto max-w-sm rounded-full bg-black/30 backdrop-blur-lg border border-white/10 hover:border-white/20 inline-flex items-center justify-center gap-3 px-4 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-white shadow-neuro hover:shadow-neuro-sm transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={isMobile ? 18 : 22} />
              <span>Hablemos de tu proyecto</span>
            </motion.a>
            
            <motion.a
              href="#services" className="w-auto max-w-sm rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 inline-flex items-center justify-center px-4 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-white shadow-neuro-sm hover:shadow-neuro transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Conocer mis servicios
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mx-0 w-full overflow-hidden mt-[0px]  mb-0 z-10"
          style={{
            transform: isMobile ? 'translateY(0px)' : 'translateY(300px)',
            marginBottom: isMobile ? '-20px' : '-20px'
          }}
        >
          <div className="relative w-full max-w-[1400px] mx-auto">
            <img
              src="/lovable-uploads/2f4569f2-0274-45d7-9a52-ec45e87d47d8.png"
              alt="Dashboard Interface"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Dashboard Image - Significantly raised position px on all devices 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mx-auto w-full mt-[-80px] mb-[10px] pb-[0px] z-10"
        >
          <div className="relative w-full max-w-[1400px] mx-auto">
            <img
              src="/lovable-uploads/2f4569f2-0274-45d7-9a52-ec45e87d47d8.png"
              alt="Dashboard Interface"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
              style={{ transform: 'translateY(40px)' }}
            />
          </div>
        </motion.div>
      </div>*/}
      
      {/* Abstract background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-raykevin-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-raykevin-purple/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;

