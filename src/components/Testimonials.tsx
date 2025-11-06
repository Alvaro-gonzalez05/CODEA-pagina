'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'
import RotatingText from './RotatingText'

const testimonials = [
  {
    name: 'María González',
    position: 'CEO, Restaurante Delizioso',
    text: 'Resto Pro transformó completamente nuestro negocio. Aumentamos la fidelización en un 200% y las reservas online se triplicaron.',
    rating: 5,
    company: 'Delizioso'
  },
  {
    name: 'Carlos Mendoza',
    position: 'Director, Hotel Boutique Central',
    text: 'El sistema de UCO Bot automatizó todas nuestras reservas. Ahora podemos atender a más clientes sin aumentar el personal.',
    rating: 5,
    company: 'Hotel Central'
  },
  {
    name: 'Ana Rodríguez',
    position: 'Gerente, TiendaModa+',
    text: 'La aplicación e-commerce que desarrollaron superó todas nuestras expectativas. Las ventas online crecieron un 150%.',
    rating: 5,
    company: 'TiendaModa+'
  },
  {
    name: 'Jorge Silva',
    position: 'Fundador, StartupTech',
    text: 'Codea Desarrollos no solo entregó un producto excepcional, sino que nos asesoró en toda la estrategia digital. Excelente equipo.',
    rating: 5,
    company: 'StartupTech'
  }
]

const clients = [
  'Delizioso', 'Hotel Central', 'TiendaModa+', 'StartupTech', 
  'RestauranteX', 'Café Premium', 'Boutique Style', 'TechFlow'
]

const rotatingTitles = [
  'Clientes Felices',
  'Éxito Garantizado', 
  'Resultados Reales',
  'Confianza Total'
]

const rotatingSubtitles = [
  'Tu satisfacción es nuestro compromiso',
  'Soluciones que transforman negocios', 
  'Calidad que marca la diferencia',
  'Tecnología que genera valor'
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonios" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Título Principal */}
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight min-h-[1.4em] flex justify-center items-center px-4">
              <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent text-center">
                <RotatingText
                  texts={rotatingTitles}
                  rotationInterval={3500}
                  staggerDuration={0.08}
                  staggerFrom="center"
                  splitBy="words"
                  transition={{ type: 'spring', damping: 18, stiffness: 180 }}
                  initial={{ y: 60, opacity: 0, scale: 0.7 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -60, opacity: 0, scale: 0.7 }}
                />
              </span>
            </h2>
          </div>
          
          {/* Subtítulo */}
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 leading-relaxed min-h-[2.5em] flex justify-center items-center font-light">
              <RotatingText
                texts={rotatingSubtitles}
                rotationInterval={3500}
                staggerDuration={0.04}
                staggerFrom="center"
                splitBy="words"
                transition={{ type: 'spring', damping: 22, stiffness: 160 }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
              />
            </p>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <motion.div
            className="max-w-4xl mx-auto"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900/50 border-purple-500/30 shadow-lg shadow-purple-500/10">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="w-12 h-12 text-purple-400 opacity-50" />
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-lg text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-purple-300">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-purple-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Clients Logo Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-center text-gray-300 mb-8">
            Empresas que confían en nosotros
          </h3>
          
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-12"
              animate={{ x: [0, -100 * clients.length] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:border-purple-500/50 transition-colors duration-300"
                >
                  <span className="text-gray-300 font-medium text-sm">
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}