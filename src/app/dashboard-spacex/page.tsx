// src/app/dashboard-spacex/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Globe, Cpu, Wrench, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

// --- DÉTAILS SPÉCIFIQUES À CE PROJET ---
const project = {
  title: "Dashboard d'Analyse des Lancements SpaceX",
  imageUrl: "/placeholder-dashboard.png", // Créez une image dans /public
  tags: ["Python", "Pandas", "ETL", "React", "Recharts", "Data Viz"],
  liveUrl: "#",
  githubUrl: "#",
  summary: {
    client: "Projet Personnel",
    year: "2024",
    role: "Développeur Full-Stack & Data",
  },
  problem:
    "L'objectif était de transformer les données brutes et complexes de l'API publique de SpaceX en informations claires et exploitables. Il fallait concevoir un mini-pipeline de données et une interface intuitive pour permettre l'exploration et la compréhension des tendances de lancements.",
  solution:
    "J'ai développé un pipeline ETL simple avec un script Python utilisant la bibliothèque Pandas pour extraire les données, les nettoyer (gestion des valeurs nulles, formatage des dates) et les agréger. Le front-end, construit avec Next.js et React, consomme ces données traitées et les affiche via des graphiques interactifs (créés avec Recharts), permettant aux utilisateurs de filtrer les lancements par année, par succès ou par type de fusée.",
  technicalStack: [
    {
      icon: <Cpu className="size-5 text-primary" />,
      title: "Backend & Traitement de Données",
      description: "Python, Pandas pour le nettoyage et la transformation, API REST pour l'extraction.",
    },
    {
      icon: <Wrench className="size-5 text-primary" />,
      title: "Frontend & Interface",
      description: "Next.js, React, TypeScript pour une application robuste et performante.",
    },
    {
      icon: <BarChart2 className="size-5 text-primary" />,
      title: "Visualisation de Données",
      description: "Recharts pour la création de graphiques interactifs et responsives.",
    },
  ],
};
// -----------------------------------------

export default function ProjectDetailPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 min-h-screen bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-24">
        {/* --- Header de la page projet --- */}
        <div className="space-y-4 mb-12">
          <Button variant="ghost" asChild className="-ml-4">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 size-4" />
              Retour aux projets
            </Link>
          </Button>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* --- Image Principale --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Image
            src={project.imageUrl}
            alt={`Image principale du projet ${project.title}`}
            width={1280}
            height={720}
            className="rounded-lg border border-border shadow-lg"
          />
        </motion.div>

        {/* --- Section Résumé --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12 border-y border-border py-8">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Client</p>
            <p className="font-semibold text-foreground">{project.summary.client}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Mon Rôle</p>
            <p className="font-semibold text-foreground">{project.summary.role}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Année</p>
            <p className="font-semibold text-foreground">{project.summary.year}</p>
          </div>
        </div>

        {/* --- Étude de cas --- */}
        <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Le Défi</h2>
            <p>{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">La Solution</h2>
            <p>{project.solution}</p>
          </div>
        </div>
        
        {/* --- Stack Technique --- */}
         <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Stack Technique</h2>
            <div className="grid sm:grid-cols-3 gap-6">
                {project.technicalStack.map((item) => (
                    <div key={item.title} className="bg-card/50 p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-3 mb-2">
                            {item.icon}
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- Liens Externes --- */}
        <div className="flex gap-4 mt-12 border-t border-border pt-8">
          <Button asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 size-4" /> Voir le site live
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" /> Voir le code
            </a>
          </Button>
        </div>

      </div>
    </motion.div>
  );
}