'use client'

import { motion } from 'motion/react'
import { Monitor, Smartphone, Settings, Users, Palette, Cloud } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const services = [
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y responsivos que convierten visitantes en clientes.',
    features: ['React & Next.js', 'SEO Optimizado', 'Diseño Responsive'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas e híbridas para iOS y Android con la mejor experiencia de usuario.',
    features: ['React Native', 'Flutter', 'UX/UI Premium'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Settings,
    title: 'Sistemas a Medida',
    description: 'Desarrollo de software personalizado que se adapta perfectamente a tu negocio.',
    features: ['CRM', 'ERP', 'APIs Custom'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Users,
    title: 'Consultoría Tech',
    description: 'Asesoramiento estratégico para la transformación digital de tu empresa.',
    features: ['Auditoría Tech', 'Estrategia Digital', 'Arquitectura'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Diseños atractivos y funcionales que mejoran la experiencia de tus usuarios.',
    features: ['Prototipado', 'Design System', 'User Research'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infraestructura en la nube escalable y segura para tu aplicación.',
    features: ['AWS', 'Docker', 'CI/CD'],
    color: 'from-indigo-500 to-blue-500'
  }
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="text-white">Nuestros </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all duration-500 group hover:bg-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}