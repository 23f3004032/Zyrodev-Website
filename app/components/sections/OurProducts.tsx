'use client';

import { useState, useEffect, useRef } from 'react';

const products = [
  { id: '01', title: "Smart Infrastructure", brief: "Centralized IoT and spatial data architecture engineered for seamless facility automation." },
  { id: '02', title: "Lexis AI", brief: "Advanced machine learning models trained on legal datasets to forecast case outcomes and mitigate risk." },
  { id: '03', title: "CareFlow", brief: "End-to-end digital health infrastructure optimizing patient routing, staff allocation, and inventory." },
  { id: '04', title: "MedAssist", brief: "NLP-driven diagnostic assistant featuring high-accuracy OCR for unstructured handwritten prescriptions." }
];

export default function OurProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);
  const mobileRingRef = useRef<SVGSVGElement>(null);
  const lastIndexRef = useRef<number>(0);
  
  const [isMobile, setIsMobile] = useState(false);

  // Responsive device detector
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      
      // Calculate scroll progress [0, 1] relative to viewport bounding box
      let progress = -rect.top / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      // Rotate the SVG ring directly on the DOM node for 60fps performance (Increased to 540 degrees for faster responsiveness)
      if (!isMobile && ringRef.current) {
        ringRef.current.style.transform = `rotate(${progress * 540}deg)`;
      } else if (isMobile && mobileRingRef.current) {
        mobileRingRef.current.style.transform = `rotate(${progress * 540}deg)`;
      }

      // Calculate index (0 to 3) based on scroll progress splits
      const index = Math.min(3, Math.floor(progress * 4));

      // Only update state when crossing card boundaries to avoid layout thrashing
      if (index !== lastIndexRef.current) {
        lastIndexRef.current = index;
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Set initial states
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="h-[400vh] relative bg-gradient-to-b from-[#111111] via-[#111111] to-[#0A0D14] text-white"
    >
      {/* Smooth Background Transition Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* Sticky view locking viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
        
        {/* Glowing grid mesh background */}
        <div className="pointer-events-none -z-10 absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Unified centered column container */}
        <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-4 md:gap-8 py-4">

          {/* Section Header */}
          <div className="text-center flex-none">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white select-none">
              Our Products
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mt-3 md:mt-4 text-sm md:text-base select-none">
              Proprietary platforms engineered to solve complex industry bottlenecks at scale.
            </p>
          </div>

          {/* Desktop Viewport Layout (Grid: Left Columns, Center Dial, Right Columns) */}
          {!isMobile ? (
            <div className="w-full flex flex-row items-center justify-between gap-12 flex-1">
              
              {/* Left Side: Products 01 and 03 */}
              <div className="w-1/3 flex flex-col gap-16 text-right">
                <ProductCard product={products[0]} isActive={activeIndex === 0} alignRight={true} />
                <ProductCard product={products[2]} isActive={activeIndex === 2} alignRight={true} />
              </div>

              {/* Center Disk: Rotating Ring with Pulsing Branding Logo */}
              <div className="w-80 h-80 relative flex items-center justify-center flex-none select-none">
                
                {/* Rotating Ring SVG */}
                <svg
                  ref={ringRef}
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full text-cyan-500/30 transition-transform duration-75 ease-out select-none"
                >
                  {/* Dashed ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                  />
                  {/* Inner solid circular track */}
                  <circle
                    cx="100"
                    cy="100"
                    r="72"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.15)"
                    strokeWidth="1"
                  />
                  {/* 4 Segmented Pointer Lines */}
                  <line x1="100" y1="8" x2="100" y2="24" stroke="#06b6d4" strokeWidth="2.5" />
                  <line x1="192" y1="100" x2="176" y2="100" stroke="#06b6d4" strokeWidth="2.5" />
                  <line x1="100" y1="192" x2="100" y2="176" stroke="#06b6d4" strokeWidth="2.5" />
                  <line x1="8" y1="100" x2="24" y2="100" stroke="#06b6d4" strokeWidth="2.5" />
                  
                  {/* Pointer dots */}
                  <circle cx="100" cy="16" r="3.5" fill="#06b6d4" />
                  <circle cx="184" cy="100" r="3.5" fill="#06b6d4" />
                  <circle cx="100" cy="184" r="3.5" fill="#06b6d4" />
                  <circle cx="16" cy="100" r="3.5" fill="#06b6d4" />
                </svg>

                {/* Central Zyrodev Logo with breathing neon pulse */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-black/60 border border-cyan-500/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.15)] select-none">
                  <img
                    src="/logo.svg"
                    alt="Zyrodev Logo"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse"
                  />
                </div>

              </div>

              {/* Right Side: Products 02 and 04 */}
              <div className="w-1/3 flex flex-col gap-16 text-left">
                <ProductCard product={products[1]} isActive={activeIndex === 1} alignRight={false} />
                <ProductCard product={products[3]} isActive={activeIndex === 3} alignRight={false} />
              </div>

            </div>
          ) : (
            /* Mobile Stack Layout (Top Central Disk, 4 cards stacked tightly below) */
            <div className="w-full flex flex-col items-center gap-2 mt-2">
              
              {/* Scaled-down Rotating Disk */}
              <div className="w-48 h-48 relative flex items-center justify-center flex-none select-none my-1 flex-shrink-0">
                
                {/* Rotating Ring SVG */}
                <svg
                  ref={mobileRingRef}
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full text-cyan-500/30 transition-transform duration-75 ease-out select-none"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="72"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.15)"
                    strokeWidth="1"
                  />
                  <line x1="100" y1="8" x2="100" y2="24" stroke="#06b6d4" strokeWidth="3" />
                  <line x1="192" y1="100" x2="176" y2="100" stroke="#06b6d4" strokeWidth="3" />
                  <line x1="100" y1="192" x2="100" y2="176" stroke="#06b6d4" strokeWidth="3" />
                  <line x1="8" y1="100" x2="24" y2="100" stroke="#06b6d4" strokeWidth="3" />
                </svg>

                {/* Central Logo */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-black/60 border border-cyan-500/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)] flex-shrink-0">
                  <img
                    src="/logo.svg"
                    alt="Zyrodev Logo"
                    className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"
                  />
                </div>

              </div>

              {/* Vertical Cards Stack with custom gaps for mobile fitting */}
              <div className="flex flex-col gap-2 w-full max-w-md flex-shrink-0">
                {products.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isActive={activeIndex === idx}
                    alignRight={false}
                  />
                ))}
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  isActive,
  alignRight
}: {
  product: typeof products[0];
  isActive: boolean;
  alignRight: boolean;
}) {
  return (
    <div
      className={`p-3 md:p-6 rounded-xl border transition-all duration-500 flex flex-col w-full text-left relative z-10 ${
        alignRight ? 'md:text-right' : 'md:text-left'
      } ${
        isActive
          ? 'border-cyan-500/50 bg-cyan-950/20 opacity-100 shadow-[0_0_20px_rgba(6,182,212,0.25)] text-white scale-100'
          : 'border-slate-800 bg-black/40 opacity-30 text-slate-500 scale-95'
      }`}
    >
      {/* Title block */}
      <div className={`flex items-center gap-3 mb-1.5 md:mb-3 w-full ${
        alignRight ? 'md:justify-end' : 'md:justify-start'
      }`}>
        <span className={`font-mono text-xs md:text-sm font-bold ${
          isActive ? 'text-cyan-400' : 'text-slate-600'
        }`}>
          {product.id}
        </span>
        <h3 className="text-base md:text-xl font-bold tracking-wider uppercase select-none">
          {product.title}
        </h3>
      </div>

      {/* Description Brief */}
      <p className="text-[11px] md:text-sm font-sans font-light leading-relaxed select-none text-slate-400">
        {product.brief}
      </p>
    </div>
  );
}
