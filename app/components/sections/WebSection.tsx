'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { webProjects } from '../../lib/data';
import { Project } from '../../lib/types';
import LaptopMockup from '../LaptopMockup';

export default function WebSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

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
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 overflow-hidden"
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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          {webProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              {/* Laptop Mockup */}
              <div className="h-[400px] mb-8">
                <LaptopMockup videoUrl={project.videoUrl} />
              </div>
              
              {/* Project Info */}
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-4">
                  {project.category} • {project.year}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                  {project.technologies?.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-white/10 text-gray-300 text-sm rounded-lg backdrop-blur-sm border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}