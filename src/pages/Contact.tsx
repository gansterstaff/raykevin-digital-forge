
import { MessageCircle, Mail, Linkedin, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import GlassCard from '@/components/GlassCard';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé a la brevedad.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <SectionTitle 
                title="Contacto" 
                subtitle="Estoy aquí para ayudarte con tu próximo proyecto digital."
                centered
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="md:col-span-1">
                  <AnimateOnScroll>
                    <GlassCard className="h-full flex flex-col">
                      <h3 className="text-xl font-medium text-white mb-6">
                        Información de Contacto
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        <a 
                          href="https://wa.me/51921209325" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                        >
                          <div className="bg-raykevin-purple/20 p-2 rounded-full group-hover:bg-raykevin-purple/30 transition-colors">
                            <MessageCircle size={20} className="text-raykevin-purple" />
                          </div>
                          <span>+51 921 209 325</span>
                        </a>
                        
                        <a 
                          href="mailto:contacto@raykevin.com" 
                          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                        >
                          <div className="bg-raykevin-purple/20 p-2 rounded-full group-hover:bg-raykevin-purple/30 transition-colors">
                            <Mail size={20} className="text-raykevin-purple" />
                          </div>
                          <span>contacto@raykevin.com</span>
                        </a>
                        
                        <a 
                          href="https://linkedin.com/in/raykevin" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                        >
                          <div className="bg-raykevin-purple/20 p-2 rounded-full group-hover:bg-raykevin-purple/30 transition-colors">
                            <Linkedin size={20} className="text-raykevin-purple" />
                          </div>
                          <span>linkedin.com/in/raykevin</span>
                        </a>
                        
                        <div className="flex items-center gap-3 text-white/70">
                          <div className="bg-raykevin-purple/20 p-2 rounded-full">
                            <MapPin size={20} className="text-raykevin-purple" />
                          </div>
                          <span>Lima, Perú</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-6">
                        <p className="text-white/50 text-sm">
                          La forma más rápida de contactarme es a través de WhatsApp. 
                          Te responderé en menos de 24 horas.
                        </p>
                      </div>
                    </GlassCard>
                  </AnimateOnScroll>
                </div>
                
                <div className="md:col-span-2">
                  <AnimateOnScroll>
                    <GlassCard>
                      <h3 className="text-xl font-medium text-white mb-6">
                        Envíame un mensaje
                      </h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                            Nombre
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-raykevin-slate border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-raykevin-purple transition-colors"
                            placeholder="Tu nombre"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                            Correo Electrónico
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-raykevin-slate border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-raykevin-purple transition-colors"
                            placeholder="tu@email.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                            Mensaje
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full bg-raykevin-slate border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-raykevin-purple transition-colors resize-none"
                            placeholder="¿En qué puedo ayudarte?"
                          />
                        </div>
                        
                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="neuro-button w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white hover:text-raykevin-purple disabled:opacity-70"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Enviando...</span>
                              </>
                            ) : (
                              <>
                                <Send size={18} />
                                <span>Enviar mensaje</span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </GlassCard>
                  </AnimateOnScroll>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        
        <section className="section-padding bg-raykevin-darker">
          <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-6">
                Prefiero WhatsApp para una respuesta más rápida
              </h2>
              
              <a 
                href="https://wa.me/51921209325" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neuro-button inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white hover:text-raykevin-purple"
              >
                <MessageCircle size={20} />
                <span>Contactar por WhatsApp</span>
              </a>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
