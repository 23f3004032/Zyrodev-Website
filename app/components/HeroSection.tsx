'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Rotating logo component
function RotatingLogo() {
  const meshRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgData = useLoader(SVGLoader, '/logo.svg');

  const logoGeometry = useMemo(() => {
    const shapes = svgData.paths.flatMap((path: THREE.ShapePath) => path.toShapes(true));
    
    const extrudeSettings = {
      steps: 2,
      depth: 0.2, // How thick the logo is
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 5,
    };

    return new THREE.ExtrudeGeometry(shapes, extrudeSettings);
  }, [svgData]);

  // Center the geometry so it rotates around its middle
  useEffect(() => {
    logoGeometry.computeBoundingBox();
    const center = new THREE.Vector3();
    logoGeometry.boundingBox?.getCenter(center);
    logoGeometry.center();
  }, [logoGeometry]);


  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Continuous rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.001;
    
    // Mouse parallax effect
    const { x, y } = mousePosition;
    meshRef.current.rotation.x += (y * 0.1) * 0.05;
    meshRef.current.rotation.y += (x * 0.1) * 0.05;
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      {/* IMPORTANT: Adjust scale and position here to fit your scene.
        Your SVG might be very large or small, so you will need to tweak these values.
      */}
      <group ref={meshRef} scale={0.01} position={[0, 0, 0]}>
        <mesh geometry={logoGeometry}>
          {/* Enhanced material with emissive glow for better visibility */}
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Background geometry
function BackgroundGeometry() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y += 0.001;
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#06b6d4" transparent opacity={0.6} />
    </points>
  );
}

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!title || !subtitle) return;

    // GSAP entrance animations
    gsap.fromTo(
      title,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    gsap.fromTo(
      subtitle,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1 }
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-charcoal to-black">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          {/* Enhanced Lighting for better logo visibility */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.8} />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
          <pointLight position={[10, 10, 5]} intensity={0.8} color="#0ea5e9" />
          
          {/* 3D Elements */}
          <RotatingLogo />
          <BackgroundGeometry />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full ">
        <div className="text-center">
          <motion.h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ZYRODEV
          </motion.h1>
          
          <motion.h2
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Develop, Automate, Captivate
          </motion.h2>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
              <motion.div
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-cyan-500 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-5" />
    </section>
  );
}