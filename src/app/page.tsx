// src/app/page.tsx
"use client"

import Hero from "@/app/components/hero"
import About from "@/app/components/about"
import Projects from "@/app/components/projects"
import Skills from "@/app/components/skills"
import Contact from "@/app/components/contact"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}