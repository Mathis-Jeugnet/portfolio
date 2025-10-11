// src/app/page.tsx
"use client"

import Hero from "@/app/components/hero"
import About from "@/app/components/about"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      {/* Vous pouvez ajouter ici vos autres sections (Projets, Compétences, Contact) */}
    </main>
  )
}