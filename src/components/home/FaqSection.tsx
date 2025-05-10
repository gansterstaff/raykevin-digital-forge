
import { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from '../SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll';
import { motion } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
  image: string;
}

const FaqSection = () => {
  const faqs: FaqItem[] = [
    {
      question: "¿Cómo es tu proceso de trabajo?",
      answer: "Mi proceso comienza con una fase de descubrimiento donde analizo tus necesidades y objetivos. Luego, desarrollo una estrategia personalizada, seguida por la creación de un prototipo o plan de implementación. Después de tu aprobación, paso al desarrollo completo con revisiones regulares para asegurar que el proyecto avanza según lo esperado. Finalmente, realizamos pruebas exhaustivas antes del lanzamiento y ofrezco soporte posterior.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80"
    },
    {
      question: "¿Qué tipo de proyectos realizas?",
      answer: "Trabajo en una amplia gama de proyectos digitales, desde sitios web corporativos y plataformas de comercio electrónico hasta aplicaciones web personalizadas. Mi enfoque multidisciplinario me permite abordar proyectos que requieren una combinación de desarrollo técnico, diseño de experiencia de usuario y estrategia de contenido.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80"
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer: "Puedes contactarme directamente a través de WhatsApp o el formulario de contacto en esta web. Te responderé en menos de 24 horas para programar una consulta inicial gratuita donde podamos discutir tu proyecto en detalle. Después de esta conversación, te enviaré una propuesta personalizada con opciones de presupuesto basadas en tus necesidades específicas.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
    },
    {
      question: "¿Cuánto tiempo toma completar un proyecto?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web informativo puede tomar entre 2-4 semanas, mientras que aplicaciones web más complejas pueden requerir 2-3 meses o más. Durante nuestra consulta inicial, podré darte un cronograma más preciso basado en tus requisitos específicos y prioridades.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
    },
    {
      question: "¿Ofreces servicios de mantenimiento después del lanzamiento?",
      answer: "Sí, ofrezco planes de mantenimiento y soporte para asegurar que tu proyecto siga funcionando de manera óptima después del lanzamiento. Esto incluye actualizaciones técnicas, corrección de errores, mejoras continuas y asesoramiento estratégico para el crecimiento futuro de tu plataforma digital.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <SectionTitle 
            title="Preguntas Frecuentes" 
            subtitle="Respuestas a las dudas más comunes sobre mis servicios y proceso de trabajo."
            centered
          />
          
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <AccordionItem value={`item-${index}`} className="border-b border-white/10 last:border-none">
                    <AccordionTrigger className="text-lg text-white font-medium py-5 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-4">
                        <div className="md:col-span-3">
                          <p className="text-white/70">{faq.answer}</p>
                        </div>
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }} 
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="md:col-span-2 rounded-lg overflow-hidden shadow-lg"
                        >
                          <img 
                            src={faq.image} 
                            alt={`Ilustración para ${faq.question}`} 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AnimateOnScroll>
              ))}
            </Accordion>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FaqSection;
