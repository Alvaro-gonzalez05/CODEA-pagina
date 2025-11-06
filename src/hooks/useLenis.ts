import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Inicializar Lenis con configuración básica
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Función de animación recursiva
    function raf(time: number) {
      lenisRef.current?.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    // Iniciar el bucle de animación
    rafRef.current = requestAnimationFrame(raf)

    // Función de limpieza
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  return lenisRef.current
}