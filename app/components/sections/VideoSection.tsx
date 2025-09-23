'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { videoProjects } from '../../lib/data';
import { Project } from '../../lib/types';
import PhoneMockup from '../PhoneMockup';
import LaptopMockup from '../LaptopMockup';

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Reduced to 3 portrait videos for the phones
  const portraitVideos = [
    '/videos/portrait-1.mp4',
    '/videos/portrait-2.mp4',
    '/videos/portrait-3.mp4',
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

    // Title animation with improved ScrollTrigger
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
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none', // Don't reverse to prevent disappearing
          once: true // Only animate once
        }
      }
    );

    // Animate phones with persistent visibility
    gsap.fromTo(
      '.video-phone',
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.phones-grid',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none', // Don't reverse
          once: true // Only animate once to prevent disappearing
        }
      }
    );

    // Laptop mockup animation
    gsap.fromTo(
      '.laptop-container',
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.laptop-container',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      id="video-editing"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-gradient"
          initial={{ opacity: 0, y: 50 }}
        >
          Video Content Creation
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-center text-lg mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Crafting compelling visual stories that captivate audiences. From social media content 
          to brand campaigns, we bring your vision to life through expert video production.
        </motion.p>

        {/* Portrait Videos Grid - 6 Phones */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Social Media Content
          </motion.h3>
          
          <div className="phones-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {portraitVideos.map((videoUrl: string, index: number) => (
              <motion.div
                key={index}
                className="video-phone h-[350px] md:h-[400px] mx-auto"
                initial={{ opacity: 0, y: 100 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <PhoneMockup videoUrl={videoUrl} />
                <div className="text-center mt-4">
                  <p className="text-gray-400 text-sm font-medium">
                    {['Instagram Reels', 'TikTok Content', 'YouTube Shorts'][index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Horizontal Laptop Mockup for Graphics/Motion Design */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Motion Graphics & Visual Effects
          </motion.h3>
          
          <motion.div
            className="laptop-container max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[500px] mb-8">
              <LaptopMockup 
                videoUrl="/videos/motion-graphics.mp4" 
                isHorizontal={true}
              />
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-3">
                Professional Motion Graphics Suite
              </h4>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Advanced animation workflows, 3D graphics, and visual effects that elevate your brand 
                presence across all digital platforms.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['After Effects', 'Cinema 4D', 'Premiere Pro', 'DaVinci Resolve', 'Blender'].map((tool: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-red-900/50 to-orange-900/50 text-red-200 text-sm rounded-lg backdrop-blur-sm border border-red-500/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Projects Showcase */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {videoProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              className="glass rounded-xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-semibold">Video Preview</span>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h4>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-3">
                {project.category}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}