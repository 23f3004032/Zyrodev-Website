'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { aiProjects } from '../../lib/data';
import { Project } from '../../lib/types';
import LaptopMockup from '../LaptopMockup';

export default function AISection() {
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
          toggleActions: 'play none none none', // Don't reverse to prevent disappearing
          once: true // Only animate once
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-black overflow-hidden"
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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          {aiProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              {/* Laptop Mockup */}
              <div className="h-[400px] mb-8">
                <LaptopMockup videoUrl={project.videoUrl} />
              </div>
              
              {/* Project Info */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide mr-3">
                    AI/ML
                  </span>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-4">
                  {project.category}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                  {project.technologies?.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-200 text-sm rounded-lg backdrop-blur-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Real-time processing and analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Scalable cloud infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                      Advanced neural networks
                    </li>
                  </ul>
                </div>

                {/* Learn More Button */}
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}