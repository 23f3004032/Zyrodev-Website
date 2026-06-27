'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Grid size configuration
const GRID_SIZE = 60;

interface Pulse {
  x: number;
  y: number;
  gridX: number;
  gridY: number;
  dirX: number;
  dirY: number;
  speed: number;
  length: number;
  history: { x: number; y: number }[];
  opacity: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  opacity: number;
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Interaction References (Stored in refs to prevent React render cycles at 60fps)
  const pointerRef = useRef({ x: -1000, y: -1000, active: false });
  const pulsesRef = useRef<Pulse[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastTouchTimeRef = useRef(0);
  const touchEndTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Grid columns and rows based on window dimensions
    let cols = Math.ceil(width / GRID_SIZE) + 1;
    let rows = Math.ceil(height / GRID_SIZE) + 1;

    // Helper to spawn initial flowing autonomous pulses
    const spawnPulses = (count: number, c: number, r: number): Pulse[] => {
      const list: Pulse[] = [];
      for (let i = 0; i < count; i++) {
        const gridX = Math.floor(Math.random() * c);
        const gridY = Math.floor(Math.random() * r);
        const dirIsHoriz = Math.random() > 0.5;
        const dirX = dirIsHoriz ? (Math.random() > 0.5 ? 1 : -1) : 0;
        const dirY = !dirIsHoriz ? (Math.random() > 0.5 ? 1 : -1) : 0;
        list.push({
          gridX,
          gridY,
          x: gridX * GRID_SIZE,
          y: gridY * GRID_SIZE,
          dirX,
          dirY,
          speed: 1.0 + Math.random() * 1.5, // 1 to 2.5 pixels per frame
          length: 8 + Math.floor(Math.random() * 12), // length in points
          history: [],
          opacity: 0.3 + Math.random() * 0.5
        });
      }
      return list;
    };

    // Initialize pulses
    pulsesRef.current = spawnPulses(16, cols, rows);

    // Canvas size adjustment for high DPI/Retina displays
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / GRID_SIZE) + 1;
      rows = Math.ceil(height / GRID_SIZE) + 1;
      pulsesRef.current = spawnPulses(16, cols, rows);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Pointer position listeners (Updates ref directly for performance)
    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Ignore emulated mouse events on touch devices
      if (Date.now() - lastTouchTimeRef.current < 1000) return;
      updatePointer(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      pointerRef.current.active = false;
    };

    // Trigger kinetic wave ripple
    const triggerRipple = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const rx = clientX - rect.left;
      const ry = clientY - rect.top;

      ripplesRef.current.push({
        x: rx,
        y: ry,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.65,
        speed: 6.5,
        opacity: 1.0
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      triggerRipple(e.clientX, e.clientY);
    };

    // Touch support for smartphones
    const handleTouchStart = (e: TouchEvent) => {
      lastTouchTimeRef.current = Date.now();
      if (touchEndTimeoutRef.current) {
        clearTimeout(touchEndTimeoutRef.current);
        touchEndTimeoutRef.current = null;
      }

      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePointer(touch.clientX, touch.clientY);
        
        // Prevent double trigger on mobile tap/clicks
        const now = Date.now();
        if (now - lastTouchTimeRef.current > 300) {
          triggerRipple(touch.clientX, touch.clientY);
          lastTouchTimeRef.current = now;
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      lastTouchTimeRef.current = Date.now();
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePointer(touch.clientX, touch.clientY);
      }
    };

    const handleTouchEnd = () => {
      if (touchEndTimeoutRef.current) {
        clearTimeout(touchEndTimeoutRef.current);
      }
      
      // Let pointer remain briefly before returning to normal idle state
      touchEndTimeoutRef.current = setTimeout(() => {
        pointerRef.current = { x: -1000, y: -1000, active: false };
      }, 500);
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    canvas.addEventListener('mousedown', handleMouseDown, { passive: true });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Main animation loop
    const animate = () => {
      // 1. Draw Deep Cyber Background
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      // Orbit helper when pointer is idle (so visual connection web exists at start/mobile)
      let currentPointerX = pointerRef.current.x;
      let currentPointerY = pointerRef.current.y;
      let isPointerActive = pointerRef.current.active;

      if (!isPointerActive) {
        const time = Date.now() * 0.0006;
        const centerX = width / 2;
        const centerY = height / 2;
        currentPointerX = centerX + Math.cos(time) * (width * 0.22);
        currentPointerY = centerY + Math.sin(time * 0.85) * (height * 0.18);
      }

      // 2. Draw Subtle Ambient Pointer Glow (radial glow)
      const glowGrad = ctx.createRadialGradient(
        currentPointerX, currentPointerY, 0,
        currentPointerX, currentPointerY, isPointerActive ? 300 : 200
      );
      glowGrad.addColorStop(0, isPointerActive ? 'rgba(6, 182, 212, 0.08)' : 'rgba(6, 182, 212, 0.04)');
      glowGrad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw Base Grid Lines (Subtle Cyan-Gray)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.035)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let col = 0; col < cols; col++) {
        ctx.beginPath();
        ctx.moveTo(col * GRID_SIZE, 0);
        ctx.lineTo(col * GRID_SIZE, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let row = 0; row < rows; row++) {
        ctx.beginPath();
        ctx.moveTo(0, row * GRID_SIZE);
        ctx.lineTo(width, row * GRID_SIZE);
        ctx.stroke();
      }

      // 4. Update and Render Autonomous Data Pulses
      const pulses = pulsesRef.current;
      pulses.forEach(pulse => {
        // Move pulse coordinates
        pulse.x += pulse.dirX * pulse.speed;
        pulse.y += pulse.dirY * pulse.speed;

        // Record history
        pulse.history.push({ x: pulse.x, y: pulse.y });
        if (pulse.history.length > pulse.length) {
          pulse.history.shift();
        }

        // Draw glowing tail
        const trail = pulse.history;
        for (let j = 1; j < trail.length; j++) {
          const pt1 = trail[j - 1];
          const pt2 = trail[j];
          const alpha = (j / trail.length) * pulse.opacity;

          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.7})`;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.stroke();
        }

        // Check node intersection alignment to decide branching turns
        const targetX = (pulse.gridX + pulse.dirX) * GRID_SIZE;
        const targetY = (pulse.gridY + pulse.dirY) * GRID_SIZE;
        const distToTarget = Math.sqrt((targetX - pulse.x) ** 2 + (targetY - pulse.y) ** 2);

        if (distToTarget <= pulse.speed) {
          // Snap exact coordinates
          pulse.x = targetX;
          pulse.y = targetY;
          pulse.gridX += pulse.dirX;
          pulse.gridY += pulse.dirY;

          // Compute possible next routing paths
          const possibleDirs: { dx: number; dy: number }[] = [];

          if (pulse.gridX < cols - 1 && !(pulse.dirX === -1 && pulse.dirY === 0)) possibleDirs.push({ dx: 1, dy: 0 }); // Right
          if (pulse.gridX > 0 && !(pulse.dirX === 1 && pulse.dirY === 0)) possibleDirs.push({ dx: -1, dy: 0 }); // Left
          if (pulse.gridY < rows - 1 && !(pulse.dirX === 0 && pulse.dirY === -1)) possibleDirs.push({ dx: 0, dy: 1 }); // Down
          if (pulse.gridY > 0 && !(pulse.dirX === 0 && pulse.dirY === 1)) possibleDirs.push({ dx: 0, dy: -1 }); // Up

          if (possibleDirs.length === 0) {
            // Respawn if boundary locked
            pulse.gridX = Math.floor(Math.random() * cols);
            pulse.gridY = Math.floor(Math.random() * rows);
            pulse.x = pulse.gridX * GRID_SIZE;
            pulse.y = pulse.gridY * GRID_SIZE;
            pulse.dirX = Math.random() > 0.5 ? 1 : -1;
            pulse.dirY = 0;
            pulse.history = [];
          } else {
            // 75% chance to remain on straight trajectory, else branch turn
            const straightDir = possibleDirs.find(d => d.dx === pulse.dirX && d.dy === pulse.dirY);
            if (straightDir && Math.random() < 0.75) {
              // Stay on course
            } else {
              const turn = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
              pulse.dirX = turn.dx;
              pulse.dirY = turn.dy;
            }
          }
        }
      });

      // 5. Update and Draw Expanding Kinetic Waves (Ripples)
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += ripple.speed;
        ripple.opacity = 1.0 - (ripple.radius / ripple.maxRadius);

        if (ripple.opacity <= 0) return false;

        // Visual Ring Glow (Overlay layer)
        ctx.strokeStyle = `rgba(6, 182, 212, ${ripple.opacity * 0.25})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(6, 182, 212, ${ripple.opacity * 0.08})`;
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        return true;
      });

      // 6. Draw Highlighted Grid Intersections (Pointer Connection Web & Ripple Hit Points)
      const maxConnDist = 180;
      const rippleWaveWidth = 35;

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const ix = col * GRID_SIZE;
          const iy = row * GRID_SIZE;

          // Pointer interaction connections
          const pdx = currentPointerX - ix;
          const pdy = currentPointerY - iy;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < maxConnDist) {
            const intensity = (1.0 - pdist / maxConnDist) * (isPointerActive ? 1.0 : 0.45);

            // Node core dot
            ctx.fillStyle = `rgba(6, 182, 212, ${intensity * 0.85})`;
            ctx.beginPath();
            ctx.arc(ix, iy, 2.5 + intensity * 2, 0, Math.PI * 2);
            ctx.fill();

            // Node surrounding halo glow
            ctx.fillStyle = `rgba(6, 182, 212, ${intensity * 0.2})`;
            ctx.beginPath();
            ctx.arc(ix, iy, 7 + intensity * 6, 0, Math.PI * 2);
            ctx.fill();

            // Connective thread (only when user actively pointer-hovering/touching)
            if (isPointerActive) {
              ctx.strokeStyle = `rgba(6, 182, 212, ${intensity * 0.28})`;
              ctx.lineWidth = 0.8 + intensity;
              ctx.beginPath();
              ctx.moveTo(ix, iy);
              ctx.lineTo(currentPointerX, currentPointerY);
              ctx.stroke();
            }
          }

          // Ripple wave intersection check
          ripplesRef.current.forEach(ripple => {
            const rdx = ix - ripple.x;
            const rdy = iy - ripple.y;
            const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
            const distToWave = Math.abs(rdist - ripple.radius);

            if (distToWave < rippleWaveWidth) {
              const waveIntensity = (1.0 - distToWave / rippleWaveWidth) * ripple.opacity;

              // Grid node illuminated by passing kinetic wave
              ctx.fillStyle = `rgba(6, 182, 212, ${waveIntensity * 0.9})`;
              ctx.beginPath();
              ctx.arc(ix, iy, 4 + waveIntensity * 2.5, 0, Math.PI * 2);
              ctx.fill();

              ctx.fillStyle = `rgba(6, 182, 212, ${waveIntensity * 0.3})`;
              ctx.beginPath();
              ctx.arc(ix, iy, 9 + waveIntensity * 6, 0, Math.PI * 2);
              ctx.fill();
            }
          });
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
      if (touchEndTimeoutRef.current) {
        clearTimeout(touchEndTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-glow-container relative min-h-screen w-full bg-[#030712] overflow-hidden cursor-none"
    >
      {/* Dynamic style block to hide standard and custom bubble cursors on desktop and touch devices */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide on desktop hover */
        body:has(.hero-glow-container:hover) .fixed.w-8.h-8.rounded-full,
        body:has(.hero-glow-container:hover) [class*="CustomCursor"] {
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        /* Hide completely on mobile/tablet touch devices */
        @media (pointer: coarse) {
          .fixed.w-8.h-8.rounded-full,
          [class*="CustomCursor"] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
        }
      `}} />

      {/* HTML5 Canvas Background Renderer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 block"
      />

      {/* Absolute overlay for branding text, disabled pointer events to permit canvas interaction */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto select-none pointer-events-none">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-widest text-white drop-shadow-lg"
        >
          ZYRODEV
        </motion.h1>

        {/* Subtitle / Motto */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-mono text-xs md:text-sm tracking-[0.2em] text-slate-400 mt-6"
        >
          DEVELOP. AUTOMATE. CAPTIVATE.
        </motion.h2>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center select-none pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-3 tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border border-gray-500 rounded-full flex justify-center p-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1.5 h-3 bg-cyan-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}