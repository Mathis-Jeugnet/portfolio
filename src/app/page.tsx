// src/app/page.tsx
import Hero from "@/app/components/hero"
import About from "@/app/components/about"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
    </main>
  )
}
