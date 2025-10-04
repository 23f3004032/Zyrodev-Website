'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { mobileProjects } from '../../lib/data';
import { Project } from '../../lib/types';
import PhoneMockup from '../PhoneMockup';

export default function MobileSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import ScrollTrigger to avoid SSR issues
    const loadScrollTrigger = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      
      const section = sectionRef.current;
      const title = titleRef.current;

      if (!section || !title) return;

    // Animate title on scroll
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

      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.trigger === title) trigger.kill();
        });
      };
    };
    
    loadScrollTrigger();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-charcoal to-gray-900 overflow-hidden"
      id="mobile-apps"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-gradient"
          initial={{ opacity: 0, y: 50 }}
        >
          Mobile Applications
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-center text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Crafting intuitive mobile experiences that users love. From concept to deployment, 
          we build high-performance apps that scale with your business.
        </motion.p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 items-center">
          {mobileProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Phone Mockup */}
              <div className="h-[500px] mb-8">
                <PhoneMockup videoUrl={project.videoUrl} />
              </div>
              
              {/* Project Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-3">
                  {project.category}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies?.slice(0, 3).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}