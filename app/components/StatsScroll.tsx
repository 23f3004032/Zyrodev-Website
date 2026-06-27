'use client';

import { useRef, useEffect } from 'react';

export default function StatsScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const leftLabelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightLabelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const numberContainer = numbersRef.current;
    if (!container || !numberContainer) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;

      // Calculate scroll progress [0, 1] relative to viewport bounding box
      // (100% immune to scroll-variable bugs and custom scroll wrappers)
      let progress = -rect.top / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to step indices [0, 2]
      const rawVal = progress * 2;

      // Snapping step mechanical interpolation
      const getSnappedIndex = (val: number) => {
        const integer = Math.floor(val);
        const fractional = val - integer;
        const transitionThreshold = 0.3; // Animate transition only within this threshold

        if (fractional < 0.5 - transitionThreshold) {
          return integer;
        } else if (fractional > 0.5 + transitionThreshold) {
          return integer + 1;
        } else {
          const t = (fractional - (0.5 - transitionThreshold)) / (2 * transitionThreshold);
          // Cubic ease-in-out curve
          const eased = t * t * (3 - 2 * t);
          return integer + eased;
        }
      };

      const snappedIndex = getSnappedIndex(rawVal);

      // Translate track vertically using track percentages
      // (Each of the 3 numbers occupies exactly 33.333% of the track height)
      numberContainer.style.transform = `translateY(-${snappedIndex * (100 / 3)}%)`;

      // Apply crossfade and slide transforms to left and right labels
      for (let i = 0; i < 3; i++) {
        const opacity = Math.max(0, 1 - Math.abs(snappedIndex - i));
        
        const leftEl = leftLabelsRef.current[i];
        if (leftEl) {
          leftEl.style.opacity = `${opacity}`;
          leftEl.style.transform = `translate(-50%, -50%) translateY(${(1 - opacity) * 15}px)`;
        }

        const rightEl = rightLabelsRef.current[i];
        if (rightEl) {
          rightEl.style.opacity = `${opacity}`;
          rightEl.style.transform = `translate(-50%, -50%) translateY(${(1 - opacity) * 15}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial run to set default states
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[300vh] relative bg-gradient-to-b from-[#030712] via-[#030712] to-[#111111] text-white"
    >
      {/* Sticky container that freezes screen and centers items */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Performance-friendly high-tech CSS grid mesh background */}
        <div className="pointer-events-none -z-10 absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Responsive row: Stacks on mobile, extreme spaced on desktop */}
        <div className="w-full max-w-[100rem] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 gap-8 md:gap-0 h-full max-h-[85vh] md:max-h-none">
          
          {/* Left Column (Fading labels) */}
          <div className="w-full md:w-1/3 h-20 md:h-48 relative">
            <div
              ref={(el) => { leftLabelsRef.current[0] = el; }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-right text-3xl md:text-5xl font-bold tracking-wide text-white transition-opacity duration-300 select-none pointer-events-none"
            >
              Website<br />Development
            </div>
            <div
              ref={(el) => { leftLabelsRef.current[1] = el; }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-right text-3xl md:text-5xl font-bold tracking-wide text-white transition-opacity duration-300 opacity-0 select-none pointer-events-none"
            >
              Mobile<br />Applications
            </div>
            <div
              ref={(el) => { leftLabelsRef.current[2] = el; }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-right text-3xl md:text-5xl font-bold tracking-wide text-white transition-opacity duration-300 opacity-0 select-none pointer-events-none"
            >
              Our Own<br />Products
            </div>
          </div>

          {/* Center Column (Cinematic Slot Machine Ticker Capsule) */}
          <div className="relative flex-none w-72 md:w-96 h-32 md:h-48 rounded-[100px] border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] bg-black/80 backdrop-blur-md overflow-hidden select-none">
            <div
              ref={numbersRef}
              className="flex flex-col select-none pointer-events-none w-full transition-transform duration-75 ease-out"
            >
              <div className="text-7xl md:text-9xl font-black text-cyan-400 flex items-center justify-center h-32 md:h-48 w-full">
                37
              </div>
              <div className="text-7xl md:text-9xl font-black text-cyan-400 flex items-center justify-center h-32 md:h-48 w-full">
                18
              </div>
              <div className="text-7xl md:text-9xl font-black text-cyan-400 flex items-center justify-center h-32 md:h-48 w-full">
                05
              </div>
            </div>
          </div>

          {/* Right Column (Fading action labels in slate-300 tracking-widest) */}
          <div className="w-full md:w-1/3 h-16 md:h-48 relative">
            <div
              ref={(el) => { rightLabelsRef.current[0] = el; }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-left text-2xl md:text-4xl font-semibold text-slate-300 tracking-widest transition-opacity duration-300 select-none pointer-events-none"
            >
              Delivered
            </div>
            <div
              ref={(el) => { rightLabelsRef.current[1] = el; }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-left text-2xl md:text-4xl font-semibold text-slate-300 tracking-widest transition-opacity duration-300 opacity-0 select-none pointer-events-none"
            >
              Engineered
            </div>
            <div
              ref={(el) => { rightLabelsRef.current[2] = el; }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center md:text-left text-2xl md:text-4xl font-semibold text-slate-300 tracking-widest transition-opacity duration-300 opacity-0 select-none pointer-events-none"
            >
              Launched
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
