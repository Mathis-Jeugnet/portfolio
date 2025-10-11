// src/app/components/skills.tsx
"use client"

import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Code, Database, Smartphone, Cloud, PenTool, GitBranch } from "lucide-react"

const skills = {
  "Langages & Frontend": [
    { name: "HTML5", icon: <Code /> },
    { name: "CSS3", icon: <Code /> },
    { name: "JavaScript", icon: <Code /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "React", icon: <Code /> },
    { name: "Next.js", icon: <Code /> },
    { name: "Tailwind CSS", icon: <PenTool /> },
  ],
  "Backend & Base de données": [
    { name: "Node.js", icon: <Code /> },
    { name: "Express", icon: <Code /> },
    { name: "MongoDB", icon: <Database /> },
    { name: "Firebase", icon: <Cloud /> },
  ],
  "Outils & Divers": [
    { name: "Git & GitHub", icon: <GitBranch /> },
    { name: "Figma", icon: <PenTool /> },
    { name: "Three.js", icon: <Code /> },
    { name: "Framer Motion", icon: <Code /> },
  ],
}

export default function Skills() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          className="space-y-10"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6 text-center text-muted-foreground">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {items.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <div className="bg-card/50 border border-border/50 p-4 rounded-lg flex items-center justify-center w-24 h-24 flex-col gap-2 cursor-pointer transition-transform hover:scale-110 hover:border-primary/50">
                        {skill.icon}
                        <span className="text-xs text-center">{skill.name}</span>
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