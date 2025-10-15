'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { aiProjects } from '../../lib/data';
import { Project } from '../../lib/types';

export default function AISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [showImage, setShowImage] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = (project: Project) => {
    setHoveredProject(project.id);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Trigger bullet and image after brief delay
    setTimeout(() => {
      setCurrentImage(project.imageUrl || '');
      setShowImage(true);
      
      // Auto-hide after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setShowImage(false);
        setHoveredProject(null);
      }, 5000);
    }, 300); // Small delay for bullet animation
  };

  const handleMouseLeave = () => {
    // Don't immediately hide, let the 5-second timer complete
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-black overflow-visible relative"
      id="ai-ml"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-gradient"
          initial={{ opacity: 0, y: 50 }}
        >
          AI & Machine Learning
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-center text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Harnessing the power of artificial intelligence to solve complex problems. 
          From machine learning models to intelligent automation, we bring AI to life.
        </motion.p>

        {/* AI Projects List with Robot Shooter Effect */}
        <div className="max-w-6xl mx-auto space-y-4">
          {aiProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Project Card */}
              <div className="group relative bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 cursor-pointer overflow-visible">
                
                {/* Robot on Left/Right (alternating) */}
                <div className={`absolute ${index % 2 === 0 ? 'left-4 md:left-8' : 'right-4 md:right-8'} top-1/2 -translate-y-1/2 z-10`}>
                  {/* Robot Emoji */}
                  <motion.div
                    animate={hoveredProject === project.id ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                    className="text-6xl"
                  >
                    🤖
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 pl-20 pr-20">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-purple-400 text-sm md:text-base font-medium uppercase tracking-wide">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>

              {/* Project Image (Tilted 30° like Website Section) */}
              <AnimatePresence>
                {showImage && hoveredProject === project.id && (
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
                    {/* Image Container with Shadow */}
                    <div className="relative">
                      {/* Glow Shadow */}
                      <div className="absolute inset-0 bg-purple-500/30 blur-2xl scale-105 rounded-2xl"></div>
                      
                      {/* Image Frame - Large 16:9 like Website Section */}
                      <div className="relative bg-black rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl"
                           style={{
                             width: "clamp(400px, 55vw, 900px)",
                             aspectRatio: "16/9"
                           }}>
                        
                        {/* AI Badge Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 flex items-center gap-2 border-b border-purple-500">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-1 text-center text-white text-sm font-bold uppercase tracking-wide">
                            🤖 AI/ML Project
                          </div>
                        </div>

                        {/* Image - Full 16:9 Display */}
                        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                          <img
                            src={currentImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Overlay with Project Info */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4">
                            <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                            <p className="text-purple-300 text-xs uppercase tracking-wide">{project.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}