import { useContext, createContext, ReactNode } from 'react'
import Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

interface LenisProviderProps {
  children: ReactNode
  lenis: Lenis | null
}

export const LenisProvider = ({ children, lenis }: LenisProviderProps) => {
  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  )
}

export const useLenisContext = () => {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error('useLenisContext must be used within a LenisProvider')
  }
  return context
}

// Utilidades para scroll suave
export const scrollTo = (target: string | number, lenis: Lenis | null) => {
  if (!lenis) return
  
  if (typeof target === 'string') {
    const element = document.querySelector(target) as HTMLElement
    if (element) {
      lenis.scrollTo(element, { duration: 1.5 })
    }
  } else {
    lenis.scrollTo(target, { duration: 1.5 })
  }
}

export const scrollToTop = (lenis: Lenis | null) => {
  if (!lenis) return
  lenis.scrollTo(0, { duration: 1.5 })
}