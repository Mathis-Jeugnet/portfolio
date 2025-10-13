// src/app/components/header.tsx
"use client"

import { motion } from "framer-motion"
import Lenis from "lenis"
import { useEffect, useRef } from "react"
import React from "react"

export default function Header() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // On garde l'instance de Lenis pour utiliser sa méthode scrollTo
    const lenis = new Lenis()
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault() // On empêche le saut brusque par défaut
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <div className="bg-card/50 backdrop-blur-lg rounded-full border border-border/50 shadow-sm">
          <ul className="flex items-center justify-center gap-4 px-4 py-2 text-sm">
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleScrollTo(e, "#about")} 
                className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                À propos
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                Projets
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => handleScrollTo(e, "#skills")}
                className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                Compétences
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}