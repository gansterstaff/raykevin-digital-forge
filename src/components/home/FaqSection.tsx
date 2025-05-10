
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg text-white font-medium">{question}</h3>
        <ChevronDown
          size={20}
          className={`text-white/50 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/70">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "¿Cómo es tu proceso de trabajo?",
      answer: "Mi proceso comienza con una fase de descubrimiento donde analizo tus necesidades y objetivos. Luego, desarrollo una estrategia personalizada, seguida por la creación de un prototipo o plan de implementación. Después de tu aprobación, paso al desarrollo completo con revisiones regulares para asegurar que el proyecto avanza según lo esperado. Finalmente, realizamos pruebas exhaustivas antes del lanzamiento y ofrezco soporte posterior."
    },
    {
      question: "¿Qué tipo de proyectos realizas?",
      answer: "Trabajo en una amplia gama de proyectos digitales, desde sitios web corporativos y plataformas de comercio electrónico hasta aplicaciones web personalizadas. Mi enfoque multidisciplinario me permite abordar proyectos que requieren una combinación de desarrollo técnico, diseño de experiencia de usuario y estrategia de contenido."
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer: "Puedes contactarme directamente a través de WhatsApp o el formulario de contacto en esta web. Te responderé en menos de 24 horas para programar una consulta inicial gratuita donde podamos discutir tu proyecto en detalle. Después de esta conversación, te enviaré una propuesta personalizada con opciones de presupuesto basadas en tus necesidades específicas."
    },
    {
      question: "¿Cuánto tiempo toma completar un proyecto?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web informativo puede tomar entre 2-4 semanas, mientras que aplicaciones web más complejas pueden requerir 2-3 meses o más. Durante nuestra consulta inicial, podré darte un cronograma más preciso basado en tus requisitos específicos y prioridades."
    },
    {
      question: "¿Ofreces servicios de mantenimiento después del lanzamiento?",
      answer: "Sí, ofrezco planes de mantenimiento y soporte para asegurar que tu proyecto siga funcionando de manera óptima después del lanzamiento. Esto incluye actualizaciones técnicas, corrección de errores, mejoras continuas y asesoramiento estratégico para el crecimiento futuro de tu plataforma digital."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <SectionTitle 
            title="Preguntas Frecuentes" 
            subtitle="Respuestas a las dudas más comunes sobre mis servicios y proceso de trabajo."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={index}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  onClick={() => toggleFaq(index)}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FaqSection;
