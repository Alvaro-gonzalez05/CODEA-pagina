'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Contenedor estilo React Bits con separación */}
      <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex items-center space-between shadow-xl min-w-[600px]">
        
        {/* Logo y Texto - Lado izquierdo */}
        <motion.button
          onClick={() => scrollToSection('#inicio')}
          className="group relative flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-7 h-7 flex-shrink-0">
            <img 
              src="/multimedia/logo.png" 
              alt="Codea Desarrollos Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white font-semibold text-lg tracking-wide">
            CODEA DESARROLLOS
          </span>
        </motion.button>

        {/* Navegación desktop - Lado derecho */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.slice(1, 4).map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white/70 hover:text-white transition-all duration-300 text-sm font-medium py-2 px-4 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Barra blanca animada debajo */}
              <motion.div
                className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-white rounded-full"
                whileHover={{ 
                  width: "calc(100% - 8px)",
                  x: "-50%"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ originX: 0.5 }}
              />
              
              {/* Efecto de fondo sutil en hover */}
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-lg opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Menú hamburguesa para móvil - Lado derecho */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-all duration-300 lg:hidden border border-white/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <span className={`bg-white block h-0.5 w-4 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block h-0.5 w-4 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block h-0.5 w-4 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'}`}></span>
          </div>
        </motion.button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-20 left-6 right-6 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative w-full text-left px-4 py-3 text-white/70 hover:text-white rounded-xl transition-all duration-300 text-sm font-medium group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Efecto hover para móvil */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
