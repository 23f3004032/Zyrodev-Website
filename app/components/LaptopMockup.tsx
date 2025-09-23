'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface LaptopMockupProps {
  videoUrl: string;
  isHorizontal?: boolean;
}

// Laptop mesh component
function LaptopMesh({ videoUrl, isHorizontal = false }: { videoUrl: string; isHorizontal?: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Create a simple colored texture for the screen
  const screenTexture = new THREE.CanvasTexture(
    (() => {
      const canvas = document.createElement('canvas');
      canvas.width = isHorizontal ? 512 : 384;
      canvas.height = isHorizontal ? 288 : 256;
      const ctx = canvas.getContext('2d')!;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0891b2');
      gradient.addColorStop(0.5, '#06b6d4');
      gradient.addColorStop(1, '#67e8f9');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some UI elements
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Demo Website', canvas.width / 2, canvas.height / 2 - 20);
      
      ctx.font = '16px Arial';
      ctx.fillText('Interactive Preview', canvas.width / 2, canvas.height / 2 + 10);
      
      return canvas;
    })()
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    // Subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
  });

  const screenWidth = isHorizontal ? 4 : 3.2;
  const screenHeight = isHorizontal ? 2.25 : 2;
  const laptopWidth = screenWidth + 0.4;
  const laptopDepth = screenHeight + 1;

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Laptop base */}
      <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[laptopWidth, laptopDepth, 0.3]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Laptop screen bezel */}
      <mesh position={[0, screenHeight / 2, -laptopDepth / 2 + 0.1]} rotation={[0, 0, 0]}>
        <boxGeometry args={[laptopWidth, screenHeight + 0.4, 0.15]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Laptop screen */}
      <mesh position={[0, screenHeight / 2, -laptopDepth / 2 + 0.08]} rotation={[0, 0, 0]}>
        <boxGeometry args={[screenWidth, screenHeight, 0.02]} />
        <meshStandardMaterial 
          map={screenTexture}
          emissive="#111111"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Keyboard area */}
      <mesh position={[0, -0.13, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[laptopWidth - 0.4, laptopDepth - 1.2, 0.02]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Trackpad */}
      <mesh position={[0, -0.12, 0.8]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.8, 0.6, 0.01]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function LaptopMockup({ videoUrl, isHorizontal = false }: LaptopMockupProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading 3D model...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: isHorizontal ? [0, 1, 4] : [0, 2, 5], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          castShadow
        />
        <pointLight position={[-5, 2, 5]} intensity={0.3} color="#06b6d4" />
        <spotLight
          position={[0, 8, 8]}
          angle={0.3}
          penumbra={1}
          intensity={0.4}
          castShadow
        />

        {/* Laptop model */}
        <LaptopMesh videoUrl={videoUrl} isHorizontal={isHorizontal} />

        {/* Interactive controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 4}
          autoRotate={false}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}