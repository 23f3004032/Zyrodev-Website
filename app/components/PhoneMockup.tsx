'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface PhoneMockupProps {
  videoUrl: string;
}

// Phone mesh component
function PhoneMesh({ videoUrl }: { videoUrl: string }) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Create a simple colored texture for the screen instead of video
  // In production, you would implement proper video texture loading
  const screenTexture = new THREE.CanvasTexture(
    (() => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, 512);
      gradient.addColorStop(0, '#06b6d4');
      gradient.addColorStop(1, '#0891b2');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 512);
      
      // Add some UI elements
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Demo App', 128, 100);
      
      return canvas;
    })()
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    // Subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* TODO: Load your actual 3D phone model here. */}
      {/* 1. Download a free .glb phone model from a site like Sketchfab. */}
      {/* 2. Place it in the /public folder. */}
      {/* 3. Use GLTFLoader (via Drei's `useGLTF` hook) to load it. */}
      {/* For now, we will use a placeholder box representing the phone body. */}
      
      {/* Phone body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 4, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Phone screen with texture */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[1.7, 3.4, 0.01]} />
        <meshStandardMaterial 
          map={screenTexture}
          emissive="#111111"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Screen bezel */}
      <mesh position={[0, 0, 0.105]}>
        <boxGeometry args={[1.8, 3.5, 0.01]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Camera notch */}
      <mesh position={[0, 1.4, 0.12]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Home indicator */}
      <mesh position={[0, -1.4, 0.12]}>
        <boxGeometry args={[0.3, 0.05, 0.01]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  );
}

export default function PhoneMockup({ videoUrl }: PhoneMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for the 3D model
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading 3D model...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#06b6d4" />
        <spotLight
          position={[0, 5, 10]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        {/* Phone model */}
        <PhoneMesh videoUrl={videoUrl} />

        {/* Interactive controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          autoRotate={false}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}