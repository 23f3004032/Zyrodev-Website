'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { teamMembers } from '../../lib/data';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable part

  useEffect(() => {
    // This effect creates and destroys a Lenis instance for the modal's content
    if (isOpen && scrollContainerRef.current) {
      const modalLenis = new Lenis({
        wrapper: scrollContainerRef.current, // Target the scrollable div
        smoothWheel: true,
        duration: 1.2,
      });

      const raf = (time: number) => {
        modalLenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      
      return () => {
        modalLenis.destroy();
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          // The main modal box is a flex column with a max height and hidden overflow
          className="bg-charcoal/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl border border-cyan-500/20 flex flex-col overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* ## PART 1: THE STATIC HEADER ## */}
          {/* This part does NOT scroll */}
          <div className="p-8 border-b border-gray-700 bg-charcoal/95 z-10">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">About Zyrodev</h2>
                <p className="text-gray-400 text-lg">Engineering Digital Realities</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors interactive"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* ## PART 2: THE SCROLLABLE CONTENT AREA ## */}
          {/* This div takes the remaining space and handles all scrolling */}
          <div
            ref={scrollContainerRef}
            className="overflow-y-auto"
          >
            {/* All your scrollable content goes inside this div */}
            <div className="p-8 border-b border-gray-700 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Zyrodev, we believe in transforming ideas into powerful digital experiences. 
                We specialize in creating innovative solutions that bridge the gap between technology and human needs.
              </p>
              {/* ... Key Points content ... */}
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Meet Our Team</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="glass rounded-xl p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 border-t border-gray-700 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}