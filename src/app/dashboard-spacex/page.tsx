"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Github, Globe, Cpu, Wrench, BarChart2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

// --- Interface pour typer les données de lancements ---
interface Launch {
  name: string;
  date_utc: string;
  success: boolean | null;
  rocket: string;
}

// --- Contenu textuel de la page ---
const project = {
  title: "Dashboard d'Analyse des Lancements SpaceX",
  tags: ["Data Pipeline", "ETL", "React", "Data Viz", "API REST"],
  liveUrl: "#",
  githubUrl: "#",
  summary: {
    client: "Projet Personnel",
    year: "2023",
    role: "Conception & Développement",
  },
  problem:
    "L'API publique de SpaceX est remplie de données brutes très intéressantes. Le défi était de concevoir un pipeline de données complet, de l'extraction à la visualisation, pour transformer ce flux d'informations en un dashboard clair, interactif et capable de révéler des informations significatives. De plus ce projet m'a permis de commencer et découvrir comment manipuler des données en temps réel.",
  solution:
    "J'ai mis en place un processus ETL (Extract, Transform, Load) simple mais efficace. Un script va chercher les données de l'API , les nettoie et les agrège pour calculer des données clés comme le nombre de lancements annuels et le taux de succès. Ces données traitées sont ensuite chargées et affichées dans une interface construite avec Next.js. En utilisant la bibliothèque Recharts, j'ai créé des graphiques dynamiques qui permettent de comprendre visuellement ces données les rendant plus accessibles et compréhensibles en un coup d'œil.",
  technicalStack: [
    {
      icon: <Cpu className="size-5 text-primary" />,
      title: "Pipeline de Données",
      description:
        "Logique d'extraction depuis une API REST, traitement des données en mémoire.",
    },
    {
      icon: <Wrench className="size-5 text-primary" />,
      title: "Développement Frontend",
      description:
        "Interface développée avec Next.js",
    },
    {
      icon: <BarChart2 className="size-5 text-primary" />,
      title: "Visualisation Interactive",
      description:
        "Utilisation de Recharts pour la création de graphiques dynamiques et personnalisés.",
    },
  ],
};

export default function ProjectDetailPage() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLaunches() {
      try {
        const response = await fetch("https://api.spacexdata.com/v5/launches");
        if (!response.ok)
          throw new Error(
            "Erreur lors de la récupération des données de l'API"
          );
        const data: Launch[] = await response.json();
        setLaunches(data);
      } catch (err: unknown) { // <-- CORRECTION ICI: 'any' est remplacé par 'unknown'
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur inconnue est survenue");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchLaunches();
  }, []);

  const { launchesPerYear, successRate } = useMemo(() => {
    if (launches.length === 0) return { launchesPerYear: [], successRate: [] };
    const yearCounts: { [year: string]: number } = {};
    launches.forEach((launch) => {
      const year = new Date(launch.date_utc).getFullYear().toString();
      yearCounts[year] = (yearCounts[year] || 0) + 1;
    });
    const launchesPerYear = Object.keys(yearCounts)
      .map((year) => ({
        name: year,
        Lancements: yearCounts[year],
      }))
      .sort((a, b) => parseInt(a.name) - parseInt(b.name));
    const successes = launches.filter((l) => l.success === true).length;
    const failures = launches.length - successes;
    const successRate = [
      { name: "Succès", value: successes },
      { name: "Échecs", value: failures },
    ];
    return { launchesPerYear, successRate };
  }, [launches]);

  const tooltipContentStyle = {
    backgroundColor: "hsl(var(--card))",
    border: "1px solid hsl(var(--border))",
    color: "hsl(var(--foreground))",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 min-h-screen bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-24">
        <div className="space-y-4 mb-12">
          <Button variant="ghost" asChild className="-ml-4">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Retour aux projets
            </Link>
          </Button>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12 border-y border-border py-8">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Client</p>
            <p className="font-semibold text-foreground">
              {project.summary.client}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Mon Rôle</p>
            <p className="font-semibold text-foreground">
              {project.summary.role}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Année</p>
            <p className="font-semibold text-foreground">
              {project.summary.year}
            </p>
          </div>
        </div>
        <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Le Défi</h2>
            <p>{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              La Solution
            </h2>
            <p>{project.solution}</p>
          </div>
        </div>

        {/* --- Section Dashboard Interactif --- */}
        <section className="space-y-12 mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Le Dashboard en direct
          </h2>
          {loading ? (
            <div className="flex items-center justify-center text-foreground h-80">
              <Loader2 className="mr-2 h-8 w-8 animate-spin" />
              <p>Chargement des données de SpaceX...</p>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center text-destructive h-80">
              <p>Erreur: {error}</p>
            </div>
          ) : (
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Lancements par Année
                </h3>
                <div className="w-full h-80 bg-card/50 p-4 rounded-lg border border-border">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={launchesPerYear}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                        opacity={0.5}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: "hsla(var(--primary), 0.2)" }}
                        contentStyle={tooltipContentStyle}
                      />
                      <Legend
                        wrapperStyle={{ color: "#888888", fontSize: "14px" }}
                      />
                      <Bar
                        dataKey="Lancements"
                        fill="#0ea5e9"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Taux de Succès Global
                </h3>
                <div className="w-full h-80 bg-card/50 p-4 rounded-lg border border-border">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={successRate}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        label
                      >
                        <Cell key="cell-0" fill="#0ea5e9" />
                        <Cell key="cell-1" fill="#f97316" />
                      </Pie>
                      <Legend
                        wrapperStyle={{ color: "#888888", fontSize: "14px" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* --- Sections du bas (inchangées) --- */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Stack Technique
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {project.technicalStack.map((item) => (
              <div
                key={item.title}
                className="bg-card/50 p-4 rounded-lg border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
