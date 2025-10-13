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
        Passionné par la Donnée et le Code
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-400 leading-relaxed"
      >
        Après avoir développé une solide expertise en développement web, je me suis découvert une passion pour les défis en amont : la collecte, la transformation et la mise à disposition de données fiables. Mon objectif est de devenir Data Engineer pour construire les infrastructures qui alimentent les applications de demain.
      </motion.p>
    </section>
  )
}