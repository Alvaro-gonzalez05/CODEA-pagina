'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import StarBorder from './ui/StarBorder'
import { Card, CardContent } from './ui/card'
import { Users, BarChart3, Calendar, CreditCard, Star, TrendingUp, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Sistema de Fidelización',
    description: 'Premia a tus clientes frecuentes con puntos y descuentos automáticos'
  },
  {
    icon: Calendar,
    title: 'Gestión de Reservas',
    description: 'Sistema completo para manejar reservas online y presenciales'
  },
  {
    icon: BarChart3,
    title: 'Dashboard Analítico',
    description: 'Reportes en tiempo real de ventas, clientes y rendimiento'
  },
  {
    icon: CreditCard,
    title: 'Tarjeta Digital',
    description: 'Tarjetas de fidelización digitales para smartphones'
  }
]

const stats = [
  { number: '250%', label: 'Aumento en fidelización' },
  { number: '40%', label: 'Más reservas online' },
  { number: '60%', label: 'Reducción en no-shows' },
  { number: '99.9%', label: 'Uptime garantizado' }
]

export default function RestoPro() {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }



  return (
    <section id="resto-pro" className="py-24 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-black to-slate-800/30"></div>
      
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-gray-300">Producto Estrella</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Resto Pro
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white mb-4">
            Sistema integral para restaurantes
          </p>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Aumenta la fidelización de clientes y optimiza la gestión de tu local gastronómico
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/20 p-6 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg text-white">Dashboard Resto Pro</h3>
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-xl text-emerald-400 mb-1">{stat.number}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-300 text-sm">Clientes Activos</span>
                      <span className="text-emerald-400 text-sm">+23%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        transition={{ duration: 2, delay: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-32 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-4 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
                opacity: 1,
                rotate: -5
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.8,
                  delay: 0.6
                },
                rotate: {
                  duration: 0.8,
                  delay: 0.6
                }
              }}
            >
              <div className="text-white">
                <div className="text-sm mb-2">Tarjeta Fidelización</div>
                <div className="text-xs opacity-80">★★★★★ VIP Member</div>
                <div className="mt-2">
                  <div className="text-lg">1,247</div>
                  <div className="text-xs">Puntos acumulados</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <StarBorder 
              onClick={scrollToContact}
              className="star-border-secondary"
              color="#FF9FFC"
              speed="5s"
            >
              <span className="flex items-center gap-2">
                Solicitar Info
                <ArrowRight className="w-5 h-5" />
              </span>
            </StarBorder>
          </div>
        </motion.div>
      </div>
    </section>
  )
}