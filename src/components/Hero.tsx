'use client'

import { Button } from './ui/button'
import { ArrowRight, Code, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import LiquidEther from './LiquidEther'
import RotatingText from './RotatingText'
import { SimpleFlipWords } from './SimpleFlipWords'
import StarBorder from './ui/StarBorder'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      // Ajuste para compensar el header fijo
      setTimeout(() => {
        const currentPosition = window.pageYOffset
        window.scrollTo({
          top: currentPosition - offset,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* LiquidEther Background - Interactive across entire screen */}
      <div style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: 1,
        pointerEvents: 'auto'
      }}>
        <LiquidEther
          colors={['#121111', '#7fa5d7', '#dc62f4']}
          mouseForce={20}
          cursorSize={150}
          isViscous={false}
          viscous={15}
          iterationsViscous={24}
          iterationsPoisson={24}
          resolution={0.6}
          dt={0.014}
          BFECC={false}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={1.5}
          takeoverDuration={0.15}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
        />
      </div>
      
      {/* Dark overlay for better text readability - allows mouse interaction to pass through */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>

      <div className="container mx-auto px-4 py-32 relative z-20 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center pointer-events-none">
          {/* Spacer for centered logo */}
          <div className="h-20 mb-8"></div>
          
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Innovación Tecnológica</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tight font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <span className="text-white block mb-4">
              Transformamos
            </span>
            <span className="text-white">ideas en </span>
            <SimpleFlipWords 
              words={["código", "realidad", "soluciones", "innovación"]}
              duration={2000}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent font-bold"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Desarrollamos software a medida que impulsa el crecimiento de tu negocio
            con tecnologías de vanguardia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <StarBorder 
              onClick={() => scrollToSection('#contacto')}
              className="shadow-lg hover:shadow-xl pointer-events-auto star-border-primary"
              color="#5227FF"
              speed="4s"
            >
              <span className="flex items-center gap-2">
                Empezar Proyecto
                <ArrowRight className="w-5 h-5" />
              </span>
            </StarBorder>
            
            <StarBorder 
              onClick={() => scrollToSection('#contacto')}
              className="pointer-events-auto star-border-secondary"
              color="#FF9FFC"
              speed="5s"
            >
              Contáctanos
            </StarBorder>
          </motion.div>

        </div>
      </div>
    </section>
  )
}