// src/app/components/header.tsx
"use client"

import { motion } from "framer-motion"
import Lenis from "lenis"
import { useEffect, useRef } from "react"
import React from "react"
// On importe les icônes dont on a besoin
import { User, FolderKanban, Sparkles, Mail } from "lucide-react"

// On crée un tableau pour nos liens de navigation, c'est plus propre !
const navItems = [
  { href: "#about", text: "À propos", icon: <User className="size-5" /> },
  { href: "#projects", text: "Projets", icon: <FolderKanban className="size-5" /> },
  { href: "#skills", text: "Compétences", icon: <Sparkles className="size-5" /> },
  { href: "#contact", text: "Contact", icon: <Mail className="size-5" /> },
]

export default function Header() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])


  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
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
          <ul className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleScrollTo(e, item.href)} 
                  className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 flex items-center justify-center rounded-full"
                  aria-label={item.text}
                >
                  {/* L'icône s'affiche sur mobile, et est cachée sur les écrans plus grands (sm:) */}
                  <div className="sm:hidden">{item.icon}</div>
                  {/* Le texte est caché sur mobile, et s'affiche sur les écrans plus grands (sm:) */}
                  <span className="hidden sm:inline">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}