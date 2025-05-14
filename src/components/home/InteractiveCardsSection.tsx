
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';
import GlassCard from '../GlassCard';

interface CardItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const InteractiveCardsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const cards: CardItem[] = [
    {
      title: "Diseño Estratégico",
      description: "Experiencias digitales con propósito claro, orientadas a tus objetivos de negocio y necesidades de usuario.",
      icon: "✨",
      color: "from-raykevin-purple/20 to-raykevin-purple/40"
    },
    {
      title: "Desarrollo Personalizado",
      description: "Soluciones a medida que combinan rendimiento técnico con interfaces intuitivas y atractivas.",
      icon: "🛠️",
      color: "from-raykevin-purple/30 to-raykevin-purple-dark/50"
    },
    {
      title: "Experiencia Inmersiva",
      description: "Interfaces interactivas que capturan la atención y generan una conexión emocional con tus usuarios.",
      icon: "🔮",
      color: "from-raykevin-purple-light/20 to-raykevin-purple-light/40"
    },
    {
      title: "Optimización Continua",
      description: "Mejora constante basada en datos para maximizar el rendimiento y la satisfacción del usuario.",
      icon: "📈",
      color: "from-raykevin-purple/25 to-raykevin-purple-dark/45"
    }
  ];

  return (
    <section className="section-padding overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-raykevin-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-raykevin-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverCard openDelay={100} closeDelay={200}>
                  <HoverCardTrigger asChild>
                    <motion.div
                      className={`bg-gradient-to-br ${card.color} backdrop-blur-xl border border-white/10 rounded-xl shadow-neuro-sm p-6 h-full cursor-pointer transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 30px rgba(163, 26, 83, 0.2)" 
                      }}
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                    >
                      <div className="mb-4 text-4xl">{card.icon}</div>
                      <h3 className="text-xl font-medium text-white mb-2">{card.title}</h3>
                      <p className="text-white/70 line-clamp-2">{card.description}</p>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="glass-card w-80 p-0 border-white/10 shadow-neuro">
                    <div className="p-6">
                      <div className="mb-3 text-4xl">{card.icon}</div>
                      <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
                      <p className="text-white/80 mb-4">{card.description}</p>
                      <div className="inline-flex items-center text-raykevin-purple gap-1 font-medium text-sm group">
                        <span>Saber más</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default InteractiveCardsSection;
