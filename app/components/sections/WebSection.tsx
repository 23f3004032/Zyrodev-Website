'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const projects = [
  { id: 1, name: "TutorSolve", type: "Marketplace Architecture", brief: "End-to-end development of a comprehensive educational marketplace with real-time matching.", url: '/portfolio/tutorsolve' },
  { id: 2, name: "Bean HR", type: "Web Redesign & Domain Setup", brief: "Complete UI/UX overhaul and robust domain architecture for a modern HR platform.", url: '/portfolio/beanhr' },
  { id: 3, name: "Marine Cargo", type: "Logistics Software", brief: "Custom digital platform engineered to streamline marine cargo agency operations and tracking.", url: '/portfolio/marinecargo' },
  { id: 4, name: "YahviAura", type: "Event Digital Platform", brief: "Service agreement execution and full digital platform build for premium event management.", url: '/portfolio/yahviaura' },
  { id: 5, name: "Plutope", type: "SaaS Platform", brief: "Empowering crypto freedom with a high-performance web architecture.", url: '/portfolio/plutope' }
];

export default function WebSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const isPaused = selectedProject !== null;

  return (
    <section 
      className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 overflow-visible relative border-t border-slate-900/60"
      id="web-development"
    >
      {/* Dynamic inline styles to keep the infinite horizontal marquee completely self-contained */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-16.6666%, 0, 0); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="container mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">Web Development</h2>
          <p className="text-slate-400 max-w-2xl">
            Building powerful web applications that drive business growth. Our full-stack solutions combine cutting-edge technology with exceptional user experiences.
          </p>
        </div>

        {/* Infinite Loop Marquee Showcase - Overflow hidden prevents scrollbar alignment bugs */}
        <div className="w-full overflow-hidden relative py-6">
          <div className={`flex w-max animate-[infinite-scroll_25s_linear_infinite] hover:[animation-play-state:paused] ${isPaused ? '[animation-play-state:paused]' : ''}`}>
            
            {/* Duplicated mapped array (6 copies) driving a seamless never-ending marquee */}
            {[...projects, ...projects, ...projects, ...projects, ...projects, ...projects].map((project, index) => (
              <div
                key={`blade-${project.id}-${index}`}
                onClick={() => setSelectedProject(project)}
                className="relative h-80 w-32 flex-none bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-xl overflow-hidden cursor-pointer group hover:border-cyan-400 transition-colors duration-300 flex flex-col justify-between mx-2 md:mx-3 select-none"
              >
                {/* Glowing Monolith Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Node Indicator Detail */}
                <div className="flex items-center justify-between w-full p-4 z-10">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-pulse" />
                  <div className="font-mono text-[9px] text-slate-600 tracking-wider">
                    SYS_MON_0{project.id}
                  </div>
                </div>

                {/* Center Stark White Monolithic Rotated Name */}
                <div className="flex-1 flex items-center justify-center relative">
                  <h3 className="text-white font-bold tracking-widest text-xl uppercase whitespace-nowrap -rotate-90 origin-center select-none group-hover:text-cyan-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>

                {/* Bottom Node Decryption Metadata */}
                <div className="w-full flex flex-col items-center gap-1.5 p-4 z-10">
                  <div className="flex gap-1 w-full justify-center">
                    <div className="h-0.5 w-4 bg-slate-800 group-hover:bg-cyan-500/50 transition-colors" />
                    <div className="h-0.5 w-1.5 bg-slate-800 group-hover:bg-cyan-500/50 transition-colors" />
                    <div className="h-0.5 w-6 bg-slate-800 group-hover:bg-cyan-500/50 transition-colors" />
                  </div>
                  <div className="text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-widest text-center truncate w-full group-hover:text-cyan-400/80 transition-colors">
                    {project.type.split(' ')[0]}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Terminal Modal Dialog Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            
            {/* Backdrop close capture */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setSelectedProject(null)} 
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-[90%] md:max-w-xl bg-slate-950/90 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 md:p-10 shadow-[0_0_80px_rgba(6,182,212,0.15)] flex flex-col text-left z-10 select-none overflow-hidden"
            >
              {/* Glowing Monolith Top Accent inside modal */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              
              {/* Terminal Title Bar Prompt */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-6 font-mono text-xs text-slate-500">
                <span>zyrodev://project/0{selectedProject.id}/brief</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-cyan-400 font-mono transition-colors focus:outline-none"
                >
                  [CLOSE_X]
                </button>
              </div>

              {/* Left Indicator Line & Text Body */}
              <div className="flex-1 pl-6 border-l border-cyan-500/10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-2">
                  {selectedProject.name}
                </h2>
                <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                  </span>
                  {selectedProject.type}
                </div>
                
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light mb-8">
                  {selectedProject.brief}
                </p>
                
                {/* Dynamic Non-Link Italic Prompt */}
                <div className="font-serif italic text-slate-400 text-sm md:text-base tracking-wide border-t border-slate-900/60 pt-6 mt-6 leading-relaxed">
                  explore the engineering story of <span className="text-cyan-400 font-serif italic font-medium">{selectedProject.name}</span> —<br className="md:hidden" /> see our portfolio
                </div>
              </div>

              {/* Status footer metrics */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-900/60 text-slate-600 font-mono text-[9px] select-none pl-6">
                <span>zyrodev://node/0{selectedProject.id}/brief</span>
                <span>STATUS: ACTIVE</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}