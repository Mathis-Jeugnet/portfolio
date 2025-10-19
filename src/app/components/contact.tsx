// src/app/components/contact.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "mathis.jeugnet@gmail.com";

  const onCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
        setCopied(false);
    }, 2000); // Le message de confirmation disparaît après 2 secondes
  };

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
        Je suis actuellement à la recherche d&apos;une alternance dans la data. N&apos;hésitez pas à me contacter, je serais ravi d&apos;échanger avec vous !
      </motion.p>
      
      {/* --- Bouton "Copier l'email" --- */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center gap-4 mb-12"
      >
        
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center gap-6"
      >
        {/* N'oubliez pas de mettre vos vrais liens ici */}
        <a href="https://www.linkedin.com/in/mathis-jeugnet-94039b308/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <Linkedin size={28} />
        </a>
      </motion.div>
    </section>
  )
}