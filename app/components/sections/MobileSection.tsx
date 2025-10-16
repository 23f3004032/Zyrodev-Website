'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { mobileProjects } from '../../lib/data';
import PhoneMockup from '../PhoneMockup';

export default function MobileSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  
  // State to track which app is currently displayed
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const currentApp = mobileProjects[currentAppIndex];

  // Debug log
  useEffect(() => {
    console.log('Mobile Projects Total:', mobileProjects.length);
    console.log('Current Index:', currentAppIndex);
    console.log('Current App:', currentApp?.title);
  }, [currentAppIndex]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import ScrollTrigger to avoid SSR issues
    const loadScrollTrigger = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      
      const title = titleRef.current;
      if (!title) return;

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
            toggleActions: 'play none none none',
            once: true
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

  // Auto-rotate effect: change app every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAppIndex((prevIndex) => (prevIndex + 1) % mobileProjects.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate 3D rotation when app changes
  useEffect(() => {
    if (!phoneContainerRef.current) return;

    // Create 3D rotation animation
    gsap.fromTo(
      phoneContainerRef.current,
      { 
        rotationY: -90,
        opacity: 0,
        scale: 0.8
      },
      {
        rotationY: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, [currentAppIndex]);

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

        {/* Split Layout: Phone on Left, Info on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Left Side: 3D Rotating Phone */}
          <div 
            ref={phoneContainerRef}
            className="w-full lg:w-1/2 flex justify-center items-center"
            style={{ perspective: '1000px' }}
          >
              <div className="h-[600px] w-full max-w-md">
              <PhoneMockup videoUrl={currentApp.videoUrl || ''} />
            </div>
          </div>

          {/* Right Side: App Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentApp.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* App Name */}
                <div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentApp.title}
                  </motion.h3>
                  <motion.p 
                    className="text-cyan-400 text-lg font-medium uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentApp.category}
                  </motion.p>
                </div>

                {/* App Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <h4 className="text-white font-semibold text-lg mb-3">About the App</h4>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {currentApp.description}
                  </p>
                </motion.div>

                {/* Customer Testimonial */}
                {currentApp.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <svg 
                        className="w-8 h-8 text-cyan-400 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Customer Feedback</h4>
                        <p className="text-gray-200 text-base leading-relaxed italic">
                          "{currentApp.testimonial}"
                        </p>
                        <div className="flex gap-1 mt-4">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3"
                >
                  {currentApp.technologies?.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 text-gray-200 text-sm font-medium rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* App Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3 justify-center lg:justify-start"
                >
                  {mobileProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAppIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentAppIndex 
                          ? 'w-12 bg-cyan-400' 
                          : 'w-2 bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`View ${mobileProjects[index].title}`}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}