// src/app/components/projects.tsx
"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Mon Portfolio",
    description:
      "Le site sur lequel vous naviguez actuellement. Un portfolio 'one-page' avec des animations fluides, construit avec Next.js, Tailwind CSS et Three.js.",
    tags: ["Next.js", "Tailwind", "Three.js", "Framer Motion"],
    link: "#",
  },
  {
    title: "E-commerce de Sneakers",
    description:
      "Une plateforme de vente en ligne complète avec gestion des stocks, panier, et paiement sécurisé via Stripe.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "Application Météo",
    description:
      "Une application simple et intuitive pour consulter la météo en temps réel, utilisant l'API OpenWeatherMap.",
    tags: ["Vue.js", "API Rest", "CSS Grid"],
    link: "#",
  },
]

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="relative z-10 py-32 max-w-5xl mx-auto px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-12 text-center"
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Voir le projet
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}