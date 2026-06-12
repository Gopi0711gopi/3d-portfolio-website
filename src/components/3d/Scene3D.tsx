'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)
  
  const shapes = useMemo(() => [
    { position: [-4, 2, -2] as [number, number, number], rotation: [0.5, 0.5, 0] as [number, number, number], scale: 0.4 },
    { position: [4, -1, -3] as [number, number, number], rotation: [0.2, 0.8, 0.3] as [number, number, number], scale: 0.3 },
    { position: [-2, -2, -1] as [number, number, number], rotation: [0.8, 0.2, 0.5] as [number, number, number], scale: 0.25 },
    { position: [3, 3, -2] as [number, number, number], rotation: [0.3, 0.6, 0.1] as [number, number, number], scale: 0.35 },
    { position: [-3, 0, -4] as [number, number, number], rotation: [0.1, 0.4, 0.7] as [number, number, number], scale: 0.2 },
    { position: [2, -3, -2] as [number, number, number], rotation: [0.6, 0.3, 0.2] as [number, number, number], scale: 0.3 },
  ], [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <Torus args={[shape.scale, shape.scale * 0.3, 16, 32]} position={shape.position} rotation={shape.rotation}>
            <MeshDistortMaterial
              color={i % 2 === 0 ? '#667eea' : '#764ba2'}
              emissive={i % 2 === 0 ? '#667eea' : '#764ba2'}
              emissiveIntensity={0.2}
              distort={0.3}
              speed={2}
              transparent
              opacity={0.6}
            />
          </Torus>
        </Float>
      ))}
    </group>
  )
}

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#667eea"
          emissive="#667eea"
          emissiveIntensity={0.3}
          distort={0.4}
          speed={1.5}
          transparent
          opacity={0.8}
          wireframe
        />
      </Sphere>
    </Float>
  )
}

function Particles() {
  const points = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.5)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02
      points.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function GeometricGrid() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} rotation={[Math.PI / 4, 0, 0]}>
      <ringGeometry args={[3, 5, 6]} />
      <meshBasicMaterial color="#667eea" transparent opacity={0.1} wireframe />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 5, 20]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} color="#667eea" intensity={0.5} />
        <pointLight position={[10, -10, 10]} color="#764ba2" intensity={0.3} />
        <Particles />
        <FloatingShapes />
        <GlowingSphere />
        <GeometricGrid />
      </Canvas>
    </div>
  )
}
