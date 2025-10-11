// src/app/components/hero.tsx
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  )

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <motion.div
        style={{ opacity, scale, position }}
        className="inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Salut, je suis <span className="text-blue-500">Mathis</span> 👋
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Développeur front-end passionné par la création d’interfaces modernes, fluides et accessibles.
        </p>

        <Button size="lg" asChild>
          <a href="#projects">Voir mes projets 🚀</a>
        </Button>
      </motion.div>
    </motion.section>
  )
}