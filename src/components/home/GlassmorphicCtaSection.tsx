
import { MessageCircle, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const GlassmorphicCtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-8 rounded-2xl backdrop-blur-xl bg-black/30 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section with Text Content */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
              {/* Sphere/Logo */}
              <div className="w-24 h-24 mx-auto lg:mx-0 mb-4">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-white/30 to-white/5 shadow-lg"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                ¿Listo para transformar tu idea en una experiencia digital de impacto?
              </h2>
              
              <p className="text-white/80 max-w-xl">
                Cada proyecto es una oportunidad para crear algo único. 
                Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales.
              </p>
              
              <div className="mt-4">
                <motion.a 
                  href="https://wa.me/51921209325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 text-md font-medium 
                           bg-white/10 backdrop-blur-md border border-white/20 rounded-full
                           hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={18} />
                  <span>Contáctame por WhatsApp</span>
                </motion.a>
              </div>
            </div>
            
            {/* Right Section with Nested Cards */}
            <div className="lg:w-1/2 relative min-h-[300px]">
              {/* Second level glassmorphic container */}
              <div className="absolute inset-0 glass-card rounded-xl backdrop-blur-md bg-white/5">
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Third level - Top card */}
                  <div className="absolute glass-card w-[80%] h-[45%] top-[15%] rounded-lg backdrop-blur-sm bg-white/5 flex items-center justify-center">
                    <Image className="text-white/30" size={32} />
                  </div>
                  
                  {/* Third level - Bottom left card */}
                  <div className="absolute glass-card w-[38%] h-[40%] bottom-[15%] left-[calc(50%-40%)] rounded-lg backdrop-blur-sm bg-white/5 flex items-center justify-center">
                    <Image className="text-white/30" size={24} />
                  </div>
                  
                  {/* Third level - Bottom right card */}
                  <div className="absolute glass-card w-[38%] h-[40%] bottom-[15%] right-[calc(50%-40%)] rounded-lg backdrop-blur-sm bg-white/5 flex items-center justify-center">
                    <Image className="text-white/30" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassmorphicCtaSection;
