'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { projects } from '../lib/data';
import { Project } from '../lib/types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Dynamic import for ScrollTrigger to avoid SSR issues
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then((module) => {
    ScrollTrigger = module.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  });
}

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    const title = titleRef.current;

    if (!container || !scrollContainer || !title) return;

    // Title animation
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
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Check if we should use horizontal scroll (desktop only)
    const shouldUseHorizontalScroll = window.innerWidth >= 1024;

    if (shouldUseHorizontalScroll) {
      // Calculate total width needed for horizontal scroll
      const cardWidth = 400; // Approximate card width including gap
      const totalWidth = projects.length * cardWidth;
      
      // Horizontal scroll animation
      const horizontalScroll = gsap.to(scrollContainer, {
        x: () => -(totalWidth - window.innerWidth + 200),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          anticipatePin: 1,
        }
      });

      // Animate cards on scroll
      gsap.fromTo(
        '.project-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scrollContainer,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      return () => {
        horizontalScroll.kill();
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
        }
      };
    } else {
      // Mobile/tablet: simple fade-in animation for grid layout
      gsap.fromTo(
        '.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: scrollContainer,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-black to-charcoal overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section title */}
          <motion.h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient"
            initial={{ opacity: 0, y: 50 }}
          >
            Featured Projects
          </motion.h2>

          {/* Projects container */}
          <div ref={containerRef} className="relative">
            {/* Desktop: Horizontal scroll layout */}
            <div
              ref={scrollContainerRef}
              className="lg:flex lg:space-x-8 lg:w-max
                         md:grid md:grid-cols-2 md:gap-8
                         grid grid-cols-1 gap-6"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card lg:w-96 w-full flex-shrink-0"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll indicator for desktop */}
          <div className="hidden lg:flex justify-center mt-16">
            <motion.div
              className="flex items-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="mr-3">Scroll horizontally</span>
              <motion.div
                className="flex space-x-1"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-30"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}