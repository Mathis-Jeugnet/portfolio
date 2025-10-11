// src/app/page.tsx
"use client"

import Hero from "@/app/components/hero"
import About from "@/app/components/about"
import Projects from "@/app/components/projects" // Importer le composant

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      {/* Vous pouvez ajouter ici vos autres sections (Compétences, Contact) */}
    </main>
  )
}