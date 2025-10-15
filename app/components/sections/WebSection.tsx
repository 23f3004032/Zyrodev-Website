'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { webProjects } from '../../lib/data';
import { Project } from '../../lib/types';

export default function WebSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import ScrollTrigger to avoid SSR issues
    const loadScrollTrigger = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      
      const title = titleRef.current;
      if (!title) return;

      gsap.fromTo(
        title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    };
    
    loadScrollTrigger();
  }, []);

  const handleMouseEnter = (projectId: string) => {
    setHoveredProject(projectId);
    // Use setTimeout to ensure video element is rendered before playing
    setTimeout(() => {
      const video = videoRefs.current[projectId];
      if (video) {
        video.currentTime = 0;
        video.load(); // Reload the video
        video.play().catch(err => console.log('Video play failed:', err));
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoveredProject) {
      const video = videoRefs.current[hoveredProject];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    setHoveredProject(null);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 overflow-visible relative"
      id="web-development"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-gradient"
          initial={{ opacity: 0, y: 50 }}
        >
          Web Development
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-center text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Building powerful web applications that drive business growth. 
          Our full-stack solutions combine cutting-edge technology with exceptional user experiences.
        </motion.p>

        {/* Website List */}
        <div className="max-w-6xl mx-auto space-y-4">
          {webProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Website Card */}
              <div className="group relative bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer overflow-visible">
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 text-sm md:text-base font-medium uppercase tracking-wide">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Indicator Arrow */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>

              {/* Tilted Video Preview (Appears on Hover) */}
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, y: 100, rotateZ: 0 }}
                  animate={{ opacity: 1, y: 0, rotateZ: -6 }}
                  exit={{ opacity: 0, y: 100, rotateZ: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute right-4 md:right-12 bottom-4 md:bottom-8 z-20 pointer-events-none"
                  style={{
                    transformOrigin: "bottom right"
                  }}
                >
                  {/* Video Container with Shadow */}
                  <div className="relative">
                    {/* Glow Shadow */}
                    <div className="absolute inset-0 bg-cyan-500/30 blur-2xl scale-105 rounded-2xl"></div>
                    
                    {/* Video Frame - Large 16:9 Aspect Ratio like Cappen */}
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl"
                         style={{
                           width: "clamp(400px, 55vw, 900px)",
                           aspectRatio: "16/9"
                         }}>
                      
                      {/* Browser Chrome */}
                      <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2 border-b border-gray-700">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-400 truncate">
                          {project.title.toLowerCase().replace(/\s+/g, '')}.com
                        </div>
                      </div>

                      {/* Video - Full 16:9 Display */}
                      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                        <video
                          ref={(el) => { videoRefs.current[project.id] = el; }}
                          src={project.videoUrl}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          loop
                          preload="metadata"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}