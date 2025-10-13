// src/app/components/contact.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 text-center max-w-3xl mx-auto px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-4"
      >
        Entrons en contact
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-muted-foreground mb-8 max-w-xl mx-auto"
      >
        Je suis actuellement à la recherche de nouvelles opportunités. N&apos;hésitez pas à me contacter, je serais ravi d&apos;échanger avec vous !
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center gap-4 mb-12"
      >
        <Button size="lg" asChild>
          <a href="mailto:votre.email@example.com">
            <Mail className="mr-2 size-4" />
            Envoyez-moi un email
          </a>
        </Button>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center gap-6"
      >
        <a href="https://github.com/votre-pseudo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <Linkedin size={28} />
        </a>
      </motion.div>
    </section>
  )
}