'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent } from './ui/card'
import StarBorder from './ui/StarBorder'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const faqs = [
  {
    question: '¿Cuánto tiempo toma desarrollar una aplicación web?',
    answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación web básica puede tomar 4-6 semanas, mientras que proyectos más complejos pueden requerir 3-6 meses. Siempre proporcionamos un cronograma detallado antes de comenzar.'
  },
  {
    question: '¿Ofrecen soporte después del lanzamiento?',
    answer: 'Sí, ofrecemos diferentes planes de soporte y mantenimiento. Incluimos soporte técnico, actualizaciones de seguridad, backups y optimizaciones de rendimiento para asegurar que tu aplicación funcione perfectamente.'
  },
  {
    question: '¿Pueden integrar nuestro sistema con APIs externas?',
    answer: 'Absolutamente. Tenemos experiencia integrando todo tipo de APIs: sistemas de pago, CRMs, ERPs, servicios de email, redes sociales, y más. Analizamos tus necesidades específicas y creamos las integraciones necesarias.'
  },
  {
    question: '¿Qué tecnologías utilizan para el desarrollo?',
    answer: 'Utilizamos tecnologías modernas como React, Next.js, Node.js, Python, React Native, y bases de datos como PostgreSQL y MongoDB. Seleccionamos la mejor tecnología según las necesidades específicas de cada proyecto.'
  },
  {
    question: '¿Trabajan con empresas de cualquier tamaño?',
    answer: 'Sí, trabajamos desde startups hasta grandes empresas. Tenemos experiencia en proyectos pequeños como landing pages hasta sistemas complejos empresariales. Adaptamos nuestro enfoque según el tamaño y presupuesto del proyecto.'
  }
]

const contactInfo = [
  {
    icon: MapPin,
    title: 'Ubicación',
    details: 'Buenos Aires, Argentina',
    link: 'https://maps.google.com/?q=Buenos+Aires+Argentina'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    details: '+54 11 1234-5678',
    link: 'tel:+541112345678'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hola@codeadesarrollos.com',
    link: 'mailto:hola@codeadesarrollos.com'
  },
  {
    icon: Clock,
    title: 'Horario',
    details: 'Lun - Vie: 9:00 - 18:00',
    link: null
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' })
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scheduleCall = () => {
    window.open('https://calendly.com/codeadesarrollos/consultation', '_blank')
  }

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="text-white">Hablemos de tu </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Proyecto
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una idea? Conversemos sobre cómo podemos transformarla en realidad digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 shadow-xl backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-white">
                    Envíanos un mensaje
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Nombre *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 focus:border-blue-400 text-white placeholder:text-gray-500"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 focus:border-blue-400 text-white placeholder:text-gray-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Empresa
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 focus:border-blue-400 text-white placeholder:text-gray-500"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white focus:border-blue-400 focus:outline-none"
                      >
                        <option value="">Seleccionar servicio</option>
                        <option value="web">Desarrollo Web</option>
                        <option value="mobile">App Móvil</option>
                        <option value="custom">Sistema a Medida</option>
                        <option value="resto-pro">Resto Pro</option>
                        <option value="uco-bot">UCO Bot</option>
                        <option value="consulting">Consultoría</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Presupuesto Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white focus:border-blue-400 focus:outline-none"
                    >
                      <option value="">Seleccionar rango</option>
                      <option value="under-5k">Menos de $5,000 USD</option>
                      <option value="5k-10k">$5,000 - $10,000 USD</option>
                      <option value="10k-25k">$10,000 - $25,000 USD</option>
                      <option value="25k-50k">$25,000 - $50,000 USD</option>
                      <option value="over-50k">Más de $50,000 USD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/5 border-white/20 focus:border-blue-400 text-white resize-none placeholder:text-gray-500"
                      placeholder="Cuéntanos sobre tu proyecto: objetivos, características principales, plazos esperados..."
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <StarBorder
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 star-border-primary"
                      color="#5227FF"
                      speed="4s"
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        <Send className="w-4 h-4" />
                      </span>
                    </StarBorder>
                    
                    <StarBorder
                      onClick={scheduleCall}
                      className="star-border-secondary"
                      color="#FF9FFC"
                      speed="5s"
                    >
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Agendar Llamada
                      </span>
                    </StarBorder>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & FAQs */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">{info.title}</div>
                            <div className="text-white group-hover:text-blue-300 transition-colors">{info.details}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">{info.title}</div>
                            <div className="text-white">{info.details}</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl text-white mb-6">Preguntas Frecuentes</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-white/10 bg-white/5 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-blue-300 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}