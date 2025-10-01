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

git  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHoveredIndex(true)}
      onPointerOut={() => setHoveredIndex(null)}
    >
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
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}