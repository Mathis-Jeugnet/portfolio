"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-screen flex flex-col items-center justify-center text-center px-4"
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
    </motion.section>
  )
}
