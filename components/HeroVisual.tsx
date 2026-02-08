
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Icosahedron, Torus, Environment } from '@react-three/drei';
import * as THREE from 'three';

const HolographicCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.4;
    meshRef.current.rotation.z = t * 0.2;
    outerRef.current.rotation.y = -t * 0.2;
    ringRef.current.rotation.x = t * 0.1;
    ringRef.current.rotation.y = t * 0.15;
  });

  return (
    <group>
      {/* Central Architecture Core */}
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron ref={meshRef} args={[1.6, 1]}>
          <MeshDistortMaterial
            color="#3b82f6"
            speed={4}
            distort={0.4}
            radius={1}
            emissive="#1d4ed8"
            emissiveIntensity={2}
            wireframe
          />
        </Icosahedron>
      </Float>

      {/* Solid Inner Core */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={5} />
      </mesh>

      {/* Protective Energy Shell */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Interactive Data Rings */}
      <group ref={ringRef}>
        {[...Array(4)].map((_, i) => (
          <Torus key={i} args={[3 + i * 0.4, 0.02, 16, 100]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.2 - i * 0.04} />
          </Torus>
        ))}
      </group>
    </group>
  );
};

const HeroVisual: React.FC = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 9]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8b5cf6" />
        <spotLight position={[0, 5, 0]} intensity={2} angle={0.4} penumbra={1} color="#ffffff" />
        <HolographicCore />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroVisual;
