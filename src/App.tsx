'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import RestoPro from './components/RestoPro'
import UCOBot from './components/UCOBot'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import WhatsAppButton from './components/WhatsAppButton'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <RestoPro />
        <UCOBot />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}