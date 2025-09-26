// app/layout.tsx
'use client';

import './globals.css';
import { useEffect, useState, createContext, useContext, ReactNode } from 'react'; // Import createContext and useContext
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';

// Create a context to hold the Lenis instance
const LenisContext = createContext<Lenis | null>(null);

// Custom hook to easily access the Lenis instance
export const useLenis = () => useContext(LenisContext);

export default function RootLayout({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance); // Store the instance in state

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    // Provide the lenis instance to all child components
    <LenisContext.Provider value={lenis}>
      <html lang="en" className="lenis">
        <head>
          <title>Zyrodev - Engineering Digital Realities</title>
          <meta name="description" content="Zyrodev portfolio showcasing innovative web, mobile, and AI projects" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="bg-charcoal text-white overflow-x-hidden">
          <CustomCursor />
          <main className="relative">{children}</main>
        </body>
      </html>
    </LenisContext.Provider>
  );
}