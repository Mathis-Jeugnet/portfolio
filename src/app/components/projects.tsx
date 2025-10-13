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
import Link from "next/link" // Important d'importer Link

const projects = [
  // --- Le nouveau projet est maintenant en première position ---
  {
    title: "Dashboard d'Analyse de Ventes SpaceX",
    description:
      "Un dashboard interactif visualisant les données des lancements de SpaceX, démontrant des compétences en traitement et affichage de données.",
    tags: ["Python", "Pandas", "ETL", "React", "Recharts", "Data Viz"],
    link: "/dashboard-spacex", // <- Voici le lien vers votre nouvelle page statique
  },
  // --- Les autres projets suivent ---
  {
    title: "E-commerce de Sneakers",
    description:
      "Une plateforme de vente en ligne complète avec gestion des stocks, panier, et paiement sécurisé via Stripe.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#", // Vous pourrez créer des pages pour eux plus tard
  },
  {
    title: "Application Météo",
    description:
      "Une application simple et intuitive pour consulter la météo en temps réel, utilisant l'API OpenWeatherMap.",
    tags: ["Vue.js", "API Rest", "CSS Grid"],
    link: "#", // Vous pourrez créer des pages pour eux plus tard
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
                {/* Le bouton utilise maintenant le Link de Next.js pour une navigation fluide */}
                <Button variant="outline" asChild>
                  <Link href={project.link}>
                    Voir le projet en détail
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}