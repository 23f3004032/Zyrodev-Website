'use client';

import './globals.css';
import { useEffect, useState, ReactNode } from 'react';
import Lenis from 'lenis';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Custom cursor functionality
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Add cursor position listener
    document.addEventListener('mousemove', updateCursorPosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], .interactive'
    );
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const interactives = element.querySelectorAll(
              'button, a, [role="button"], .interactive'
            );
            interactives.forEach((interactive) => {
              interactive.addEventListener('mouseenter', handleMouseEnter);
              interactive.addEventListener('mouseleave', handleMouseLeave);
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      lenis.destroy();
      document.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <html lang="en" className="lenis">
      <head>
        <title>Zyrodev - Engineering Digital Realities</title>
        <meta name="description" content="Zyrodev portfolio showcasing innovative web, mobile, and AI projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-charcoal text-white overflow-x-hidden">
        {/* Custom Cursor */}
        <div
          className={`cursor ${isHovered ? 'hovered' : ''}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
        
        {/* Main Content */}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}