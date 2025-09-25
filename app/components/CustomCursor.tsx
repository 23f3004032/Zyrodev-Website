'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMounted, setIsMounted] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animations for cursor movement
  const springConfig = { damping: 25, stiffness: 700, restSpeed: 0.01 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Ensure component is mounted on client before rendering
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const moveCursor = (e: MouseEvent) => {
      // Use clientX/Y for viewport-relative positioning
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements with better targeting
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, [role="button"], .interactive, .cursor-pointer, input, textarea, select');
      
      if (isClickable) {
        setIsHovering(true);
        const elementType = target.tagName.toLowerCase();
        const hasInteractiveClass = target.classList.contains('interactive');
        
        if (elementType === 'button' || hasInteractiveClass) {
          setCursorVariant('button');
        } else if (elementType === 'a') {
          setCursorVariant('link');
        } else {
          setCursorVariant('hover');
        }
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    // Add event listeners to document for global coverage
    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Show cursor immediately
    setIsVisible(true);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMounted, cursorX, cursorY]);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(6, 182, 212, 0.15)',
      border: '1px solid rgba(6, 182, 212, 0.4)',
      boxShadow: '0 0 25px rgba(6, 182, 212, 0.3), 0 0 50px rgba(6, 182, 212, 0.1)',
    },
    hover: {
      scale: 2,
      backgroundColor: 'rgba(6, 182, 212, 0.2)',
      border: '1px solid rgba(6, 182, 212, 0.6)',
      boxShadow: '0 0 35px rgba(6, 182, 212, 0.5), 0 0 70px rgba(6, 182, 212, 0.2)',
    },
    button: {
      scale: 2.5,
      backgroundColor: 'rgba(6, 182, 212, 0.25)',
      border: '1px solid rgba(6, 182, 212, 0.8)',
      boxShadow: '0 0 45px rgba(6, 182, 212, 0.7), 0 0 90px rgba(6, 182, 212, 0.3)',
    },
    link: {
      scale: 2.2,
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      border: '1px solid rgba(34, 197, 94, 0.7)',
      boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.2)',
    }
  };

  // Don't render on server or before mount to prevent hydration issues
  if (typeof window === 'undefined' || !isMounted) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        html, body, * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Custom cursor - Clean circle glow only */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
        animate={cursorVariants[cursorVariant as keyof typeof cursorVariants]}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
          mass: 0.5,
        }}
      />
    </>
  );
}