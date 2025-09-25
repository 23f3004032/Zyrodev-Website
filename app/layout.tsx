'use client';

import './globals.css';
import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    // Initialize Lenis smooth scrolling with optimized settings for performance
    const lenis = new Lenis({
      duration: 1.0, // Slightly faster for better responsiveness
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false, // Disable on touch for better mobile performance
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
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
        {/* Custom Sexy Cursor */}
        <CustomCursor />
        
        {/* Main Content */}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}