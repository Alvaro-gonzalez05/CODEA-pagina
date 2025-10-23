'use client'

import { motion } from 'motion/react'
import { Separator } from './ui/separator'
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Mail, Phone } from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Desarrollo Web', href: '#servicios' },
    { name: 'Apps Móviles', href: '#servicios' },
    { name: 'Sistemas a Medida', href: '#servicios' },
    { name: 'UI/UX Design', href: '#servicios' }
  ],
  productos: [
    { name: 'Resto Pro', href: '#resto-pro' },
    { name: 'UCO Bot', href: '#uco-bot' },
    { name: 'Consultoría', href: '#contacto' }
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Blog', href: '#' }
  ]
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/codeadesarrollos' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/codeadesarrollos' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/codeadesarrollos' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/codeadesarrollos' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="relative bg-gradient-to-t from-black via-slate-950 to-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => scrollToSection('#inicio')}
              className="flex items-center space-x-2 mb-6 group"
            >
              <div className="text-3xl tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  CODEA
                </span>
              </div>
              <div className="text-sm text-gray-400 tracking-wider">
                DESARROLLOS
              </div>
            </button>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales extraordinarias. 
              Desarrollamos software a medida que impulsa el crecimiento de tu negocio.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="mailto:hola@codeadesarrollos.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hola@codeadesarrollos.com</span>
              </a>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <a 
                href="tel:+541112345678"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+54 11 1234-5678</span>
              </a>
            </div>
            
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-6 text-lg">Servicios</h3>
            <div className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-6 text-lg">Productos</h3>
            <div className="space-y-3">
              {footerLinks.productos.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-6 text-lg">Empresa</h3>
            <div className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2025 Codea Desarrollos. Todos los derechos reservados.
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-1px] transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}