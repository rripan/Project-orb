import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { TextureLoader } from "three"

// List of your images
const images = [
  "/src/assets/ID.heic",
  "/src/assets/IMG_2338.jpeg",
  "/src/assets/IMG_2678.jpeg",
  "/src/assets/IMG_6561.jpeg",
  "/src/assets/IMG_7472.JPG",
  "/src/assets/react.svg",
  "/src/assets/US.JPEG"
]

function FloatingImageSphere() {
  const groupRef = useRef()

  const textures = useMemo(() => images.map(img => new TextureLoader().load(img)), [])

  const TARGET_COUNT = 80 // fewer images for spacing
  const allTextures = useMemo(() => {
    const repeated = []
    for (let i = 0; i < TARGET_COUNT; i++) {
      repeated.push(textures[i % textures.length])
    }
    return repeated
  }, [textures])

  // Fibonacci Sphere positions
  const spheres = useMemo(() => {
    const temp = []
    const radius = 8 // bigger sphere
    const N = allTextures.length
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    allTextures.forEach((tex, i) => {
      const theta = 2 * Math.PI * i / goldenRatio
      const phi = Math.acos(1 - 2 * (i + 0.5) / N)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      temp.push({ texture: tex, position: [x, y, z] })
    })
    return temp
  }, [allTextures])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
      groupRef.current.rotation.x += 0.0005
    }
  })

  return (
    <group ref={groupRef}>
      {spheres.map((s, idx) => (
        <mesh
          key={idx}
          position={s.position}
          ref={mesh => {
            if (mesh) {
              const normal = new THREE.Vector3(...s.position).normalize()
              const quaternion = new THREE.Quaternion()
              quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
              mesh.setRotationFromQuaternion(quaternion)
            }
          }}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial
            map={s.texture}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 50 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingImageSphere />
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
}