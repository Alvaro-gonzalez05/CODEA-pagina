'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { ExternalLink, Github } from 'lucide-react'
import StarBorder from './ui/StarBorder'
import { ImageWithFallback } from './figma/ImageWithFallback'

const projects = [
  {
    title: 'E-commerce Futurista',
    description: 'Plataforma de comercio electrónico con IA para recomendaciones personalizadas',
    tech: ['React', 'Node.js', 'AI/ML'],
    category: 'E-commerce'
  },
  {
    title: 'App Delivery Premium',
    description: 'Aplicación móvil para delivery con tracking en tiempo real y pagos integrados',
    tech: ['React Native', 'Firebase', 'Maps API'],
    category: 'Mobile App'
  },
  {
    title: 'Sistema Hotelero',
    description: 'CRM completo para gestión hotelera con reservas y check-in automático',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    category: 'Sistema Web'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Panel de control con métricas en tiempo real y reportes automatizados',
    tech: ['Next.js', 'D3.js', 'PostgreSQL'],
    category: 'Dashboard'
  },
  {
    title: 'Fintech Wallet',
    description: 'Billetera digital con transferencias instantáneas y criptomonedas',
    tech: ['React', 'Blockchain', 'Stripe'],
    category: 'Fintech'
  },
  {
    title: 'Marketplace B2B',
    description: 'Plataforma para conexión entre empresas con sistema de cotizaciones',
    tech: ['Angular', 'Express', 'MongoDB'],
    category: 'Platform'
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              Nuestros Proyectos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Algunos de los proyectos que hemos desarrollado con tecnologías de vanguardia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-purple-600/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-purple-600/80 rounded-xl flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-purple-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="flex gap-4">
                        <motion.button
                          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.button
                          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-xs text-purple-300 mb-3">
                      {project.category}
                    </div>

                    <h3 className="text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800/50 border border-gray-700 rounded-md px-2 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StarBorder
            className="shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 star-border-secondary"
            color="#B19EEF"
            speed="6s"
          >
            Ver Todos los Proyectos
          </StarBorder>
        </motion.div>
      </div>
    </section>
  )
}