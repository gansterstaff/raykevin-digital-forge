
import { Lightbulb, Users, Sparkles, Clock } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll';
import { motion } from 'framer-motion';

interface ApproachItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ApproachItem = ({ icon, title, description, index }: ApproachItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-neuro-sm"
    >
      <div className="bg-raykevin-purple/20 p-5 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 mb-5">
        {icon}
      </div>
      <h3 className="text-2xl font-medium text-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

const ApproachSection = () => {
  const approachItems = [
    {
      icon: <Lightbulb size={32} className="text-raykevin-purple" />,
      title: "Enfoque estratégico",
      description: "Cada proyecto comienza con un análisis profundo para entender objetivos y necesidades, asegurando que la solución técnica esté alineada con la estrategia general."
    },
    {
      icon: <Users size={32} className="text-raykevin-purple" />,
      title: "Colaboración constante",
      description: "Mantengo una comunicación clara y fluida durante todo el proceso, asegurando que tu visión se refleje en cada etapa del desarrollo."
    },
    {
      icon: <Sparkles size={32} className="text-raykevin-purple" />,
      title: "Innovación con propósito",
      description: "Integro nuevas tecnologías y enfoques creativos, siempre con el objetivo de resolver problemas reales y generar valor tangible."
    },
    {
      icon: <Clock size={32} className="text-raykevin-purple" />,
      title: "Compromiso con los resultados",
      description: "Me enfoco en crear soluciones que no solo se vean bien, sino que funcionen de manera óptima y generen los resultados esperados."
    }
  ];

  return (
    <section id="approach" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <SectionTitle 
            title="Mi Enfoque" 
            subtitle="Principios que guían mi trabajo para entregar soluciones digitales de valor."
            centered={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {approachItems.map((item, index) => (
              <ApproachItem 
                key={index} 
                icon={item.icon} 
                title={item.title} 
                description={item.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <motion.a 
              href="#services" 
              className="rounded-full bg-black/30 backdrop-blur-lg border border-white/10 hover:border-white/20 px-8 py-4 text-lg font-medium text-white shadow-neuro-sm hover:shadow-neuro transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver servicios completos
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ApproachSection;
