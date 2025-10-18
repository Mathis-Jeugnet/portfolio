// src/app/components/hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"; // Importer le nouveau composant

const words = "Mathis Jeugnet: De la Donnée à l'Interface.";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <motion.div
        style={{ opacity, scale, position }}
        className="inset-0 flex flex-col items-center justify-center text-center"
      >
        {/* On remplace le h1 par le nouveau composant */}
        <TextGenerateEffect words={words} className="text-5xl font-bold mb-4" />

        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Je me passionne par l&apos;exploration des données et l&apos;utilisation des outils pour les transformer et les rendre compréhensible.
        </p>

      </motion.div>
    </motion.section>
  );
}