// src/app/components/about.tsx
"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 max-w-3xl text-center px-4 mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6"
      >
        À propos de moi
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-400 leading-relaxed"
      >
        Je suis un développeur passionné par les technologies web modernes. J’aime transformer des idées en
        expériences interactives et intuitives. Mon objectif est de créer des interfaces élégantes et performantes,
        tout en gardant le code propre et maintenable.
      </motion.p>
    </section>
  )
}