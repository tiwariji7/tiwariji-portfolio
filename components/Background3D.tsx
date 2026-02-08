
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Grid } from '@react-three/drei';
import * as THREE from 'three';

const SceneManager = () => {
  const { camera, mouse } = useThree();
  const [activeColor, setActiveColor] = useState('#3b82f6');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Interpolate colors based on scroll
      if (scrollPercent < 0.15) setActiveColor('#3b82f6'); // Home
      else if (scrollPercent < 0.3) setActiveColor('#8b5cf6'); // About
      else if (scrollPercent < 0.45) setActiveColor('#06b6d4'); // Skills
      else if (scrollPercent < 0.6) setActiveColor('#3b82f6'); // Projects
      else if (scrollPercent < 0.75) setActiveColor('#f43f5e'); // Experience
      else if (scrollPercent < 0.9) setActiveColor('#10b981'); // Education
      else setActiveColor('#f59e0b'); // Contact
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const targetX = mouse.x * 0.8;
    const targetY = mouse.y * 0.5;
    
    // Smooth camera drift based on mouse
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY + 2, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
      <ParticleField color={activeColor} />
      <pointLight position={[10, 10, 10]} intensity={2} color={activeColor} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
      <ambientLight intensity={0.4} />
      
      <Grid
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
        cellSize={1}
        sectionSize={5}
        sectionThickness={1}
        sectionColor={activeColor}
        cellColor="#333333"
        position={[0, -5, 0]}
      />
    </group>
  );
};

const ParticleField = ({ color }: { color: string }) => {
  const points = useRef<THREE.Points>(null!);
  const particleCount = 3000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.02;
    points.current.rotation.x = time * 0.005;
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020202]">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }} dpr={[1, 2]}>
        <SceneManager />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  );
};

export default Background3D;
