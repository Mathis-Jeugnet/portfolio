// src/app/components/animated-background.tsx
"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm"
import { useScroll } from "framer-motion"
import * as THREE from "three"

export default function AnimatedBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Starfield />
    </Canvas>
  )
}

function Starfield(props: any) {
  const pointsRef = useRef<any>(null)
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  )

  const { scrollYProgress } = useScroll()

  useFrame((state, delta) => {
    if (!pointsRef.current) return

    const progress = scrollYProgress.get()

    // 1. Rotation continue et lente des particules sur elles-mêmes
    pointsRef.current.rotation.x -= delta / 15
    pointsRef.current.rotation.y -= delta / 20

    // 2. Mouvement orbital de la caméra basé sur le scroll
    // La caméra se déplace en arc de cercle autour du centre
    const angle = progress * Math.PI * 0.5 // On fait un quart de tour
    state.camera.position.x = Math.sin(angle) * 1.5
    state.camera.position.z = Math.cos(angle) * 1.5

    // 3. La caméra regarde toujours vers le centre de la constellation
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}