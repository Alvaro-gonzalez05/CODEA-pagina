'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Users, Target, Zap, Award } from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Innovación',
    description: 'Utilizamos las tecnologías más avanzadas para crear soluciones que marquen la diferencia'
  },
  {
    icon: Target,
    title: 'Compromiso',
    description: 'Nos comprometemos con el éxito de nuestros clientes, trabajando como parte de su equipo'
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Creemos en el trabajo en equipo y la comunicación constante con nuestros clientes'
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada proyecto, sin importar su tamaño o complejidad'
  }
]

const stats = [
  { number: '100+', label: 'Proyectos Completados' },
  { number: '50+', label: 'Clientes Satisfechos' },
  { number: '5+', label: 'Años de Experiencia' },
  { number: '99%', label: 'Tasa de Satisfacción' }
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
              Sobre Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de desarrolladores apasionados por la tecnología, 
            dedicados a transformar ideas en soluciones digitales extraordinarias
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl mb-6 text-white">
              Construyendo el futuro digital
            </h3>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Somos <span className="text-purple-400">Lucia y Alvaro</span>, dos emprendedores mendocinos con una firme visión en el futuro digital. Juntos, dimos vida a Codea Desarrollos, una startup que nació de la pasión por crear soluciones tecnológicas que realmente impulsen a los negocios.
</p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              En Codea Desarrollos, combinamos la creatividad local con estándares globales de desarrollo de software. Nos especializamos en transformar ideas ambiciosas en productos digitales funcionales y escalables. Con más de 30 proyectos exitosos a nuestras espaldas y una creciente cartera de clientes satisfechos, nuestro compromiso es ser el socio tecnológico que acompaña a las empresas en su proceso de digitalización.
Somos el talento mendocino que está programando el mañana. Nuestro objetivo es claro: dejar una huella de innovación y excelencia en cada línea de código que escribimos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Card */}
              <Card className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 border-purple-500/30 p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl text-white mb-2">Nuestro Equipo</h4>
                    <p className="text-gray-300">Fundadores</p>
                  </div>
                  
                  <div className="flex justify-center gap-8 mb-6">
                    {/* Álvaro González */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="overflow-hidden mb-3 mx-auto border-2 border-purple-500/30 hover:border-purple-500/70 transition-all duration-300"
                        style={{ borderRadius: '30px', width: '250px', height: '400px' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src="/multimedia/alva.jpg"
                          alt="Álvaro González"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <h5 className="text-white font-semibold text-sm mb-1">ÁLVARO GONZÁLEZ</h5>
                      <p className="text-gray-400 text-xs">Fundador</p>
                    </motion.div>

                    {/* Lucía Miranda */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="overflow-hidden mb-3 mx-auto border-2 border-purple-500/30 hover:border-purple-500/70 transition-all duration-300"
                        style={{ borderRadius: '30px', width: '300px', height: '400px' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src="/multimedia/luci.jpg"
                          alt="Lucía Miranda"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <h5 className="text-white font-semibold text-sm mb-1">LUCÍA MIRANDA</h5>
                      <p className="text-gray-400 text-xs">Fundadora</p>
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400">
                      Desarrolladores • Innovadores • Emprendedores
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center shadow-lg shadow-purple-400/50"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Target className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center text-white mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group text-center h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h4 className="text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}