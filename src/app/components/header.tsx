// src/app/components/header.tsx
"use client"

import { motion } from "framer-motion"

export default function Header() {
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
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
                À propos
              </a>
            </li>
            <li>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
                Projets
              </a>
            </li>
            <li>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
                Compétences
              </a>
            </li>
            <li>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}