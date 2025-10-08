// src/app/page.tsx
"use client"

import { useState } from "react"
import Hero from "@/app/components/hero"
import About from "@/app/components/about"
import Intro from "@/app/components/intro"


export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && (
        <main className="flex flex-col">
          <Hero />
          <About />
          {/* Sections supplémentaires comme Projects, Skills, Contact */}
        </main>
      )}
    </>
  )
}
