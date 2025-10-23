'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import { MessageCircle, Clock, Globe, Zap, Bot, ArrowRight, ExternalLink } from 'lucide-react'
import UCOBotNexusOrb from './UCOBotNexusOrb'
import StarBorder from './ui/StarBorder'

const features = [
  {
    icon: Clock,
    title: 'Atención 24/7',
    description: 'Responde a tus clientes las 24 horas del día, todos los días del año',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageCircle,
    title: 'Integración WhatsApp',
    description: 'Compatible con WhatsApp Business y sitios web',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Multirubro',
    description: 'Adaptable a restaurantes, hoteles, retail y servicios',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Respuestas Inteligentes',
    description: 'IA avanzada para conversaciones naturales y efectivas',
    color: 'from-orange-500 to-red-500'
  }
]

export default function UCOBot() {
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

  const openDemo = () => {
    // Open the UCO Bot app
    window.open('https://chatbot-sass-eight.vercel.app/', '_blank')
  }

  return (
    <section id="uco-bot" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* UCO Bot Illustration - Simplified Version */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
              
              {/* Main Container */}
              <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
                
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Ring */}
                <motion.div
                  className="absolute inset-8 border border-blue-400/10 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Bot Avatar - Center */}
                <motion.div
                  className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl relative z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Bot className="w-12 h-12 text-white" />
                </motion.div>

                {/* Feature Icons in Circle */}
                {features.map((feature, i) => {
                  const angle = (i * 360) / features.length;
                  const radius = 120;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-16 h-16 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: i * 0.1,
                        y: {
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5
                        }
                      }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Floating Messages */}
              <motion.div
                className="absolute top-10 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 max-w-32 shadow-lg border border-white/20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-sm text-white">¡Hola! ¿En qué puedo ayudarte?</p>
                <div className="absolute -left-2 top-3 w-0 h-0 border-r-8 border-r-white/10 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-16 -left-4 bg-gradient-to-r from-cyan-500/80 to-blue-600/80 backdrop-blur-md rounded-lg p-3 max-w-36 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <p className="text-sm text-white">Mesa para 4 personas disponible</p>
                <div className="absolute -right-2 top-3 w-0 h-0 border-l-8 border-l-cyan-500/80 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-300 text-sm">Inteligencia Artificial</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                UCO Bot
              </span>
              <br />
              <span className="text-white">Asistente Inteligente</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Automatiza la atención al cliente con IA conversacional avanzada. 
              Responde consultas, gestiona reservas y aumenta las ventas 24/7.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <StarBorder 
                onClick={openDemo}
                className="shadow-lg hover:shadow-xl star-border-primary"
                color="#5227FF"
                speed="4s"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Ir a la App
                </span>
              </StarBorder>
              
              <StarBorder 
                onClick={scrollToContact}
                className="star-border-secondary"
                color="#FF9FFC"
                speed="5s"
              >
                <span className="flex items-center gap-2">
                  Más Información
                  <ArrowRight className="w-5 h-5" />
                </span>
              </StarBorder>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}