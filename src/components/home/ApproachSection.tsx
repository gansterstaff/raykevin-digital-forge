
import { Lightbulb, Users, Sparkles, Clock } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll';

interface ApproachItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ApproachItem = ({ icon, title, description }: ApproachItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="bg-raykevin-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const ApproachSection = () => {
  const approachItems = [
    {
      icon: <Lightbulb size={24} className="text-raykevin-purple" />,
      title: "Enfoque estratégico",
      description: "Cada proyecto comienza con un análisis profundo para entender objetivos y necesidades, asegurando que la solución técnica esté alineada con la estrategia general."
    },
    {
      icon: <Users size={24} className="text-raykevin-purple" />,
      title: "Colaboración constante",
      description: "Mantengo una comunicación clara y fluida durante todo el proceso, asegurando que tu visión se refleje en cada etapa del desarrollo."
    },
    {
      icon: <Sparkles size={24} className="text-raykevin-purple" />,
      title: "Innovación con propósito",
      description: "Integro nuevas tecnologías y enfoques creativos, siempre con el objetivo de resolver problemas reales y generar valor tangible."
    },
    {
      icon: <Clock size={24} className="text-raykevin-purple" />,
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
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {approachItems.map((item, index) => (
              <AnimateOnScroll key={index}>
                <ApproachItem {...item} />
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ApproachSection;
