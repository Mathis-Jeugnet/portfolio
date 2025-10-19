// src/app/components/skills.tsx
"use client"

import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Code, Database, Braces, LayoutTemplate, Paintbrush, Users, Languages, Star, CheckCircle, Lightbulb, Github } from "lucide-react"
// Données extraites et structurées à partir de votre CV
const skills = {
  "Langages & Data": [
    { name: "Python", icon: <Code color="#306998" /> },
    { name: "JavaScript", icon: <Code color="#F0DB4F" /> },
    { name: "Next.js", icon: <Braces /> },
    { name: "React Native", icon: <Braces color="#61DAFB" /> },
    { name: "SQL", icon: <Database /> },
  ],
  "Outils & Logiciels": [
    { name: "Tableau / PowerBI", icon: <LayoutTemplate /> },
    { name: "Figma", icon: <Paintbrush /> },
    { name: "Suite Office", icon: <CheckCircle /> },
    { name: "Suite Adobe", icon: <Paintbrush /> },
    { name: "Git & GitHub", icon: <Github /> },
  ],
  "Compétences Transverses": [
    { name: "Adaptabilité", icon: <Star /> },
    { name: "Rigueur", icon: <CheckCircle /> },
    { name: "Travail d'équipe", icon: <Users /> },
    { name: "Curiosité", icon: <Lightbulb /> },
    { name: "Autonomie", icon: <Star /> },
  ],
}

export default function Skills() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="relative z-10 py-32 max-w-5xl mx-auto px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-12 text-center"
      >
        Mes Compétences
      </motion.h2>
      <TooltipProvider>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6 text-center text-muted-foreground">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {items.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <div className="bg-card/50 border border-border/50 p-4 rounded-lg flex items-center justify-center w-28 h-28 flex-col gap-2 cursor-pointer transition-transform hover:scale-110 hover:border-primary/50">
                        {skill.icon}
                        <span className="text-xs text-center font-semibold">{skill.name}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </TooltipProvider>
    </section>
  )
}