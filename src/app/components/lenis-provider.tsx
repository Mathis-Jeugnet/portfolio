// src/app/components/lenis-provider.tsx
"use client"
import { ReactNode, useEffect } from "react"
import Lenis from "lenis"

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <>{children}</>
}