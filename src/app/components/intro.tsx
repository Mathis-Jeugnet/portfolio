"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Mathis.dev 🚀"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) {
        clearInterval(interval)
        setTimeout(onComplete, 800) // délai avant de révéler le site
      }
    }, 150)
    return () => clearInterval(interval)
  }, [fullText, onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -30 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center text-white text-4xl font-bold z-50"
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.div>
    </AnimatePresence>
  )
}
