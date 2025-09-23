'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../../lib/data';
import { TeamMember } from '../../lib/types';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
          className="bg-charcoal/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cyan-500/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="p-8 border-b border-gray-700">
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

          {/* Company Overview */}
          <div className="p-8 border-b border-gray-700 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Zyrodev, we believe in transforming ideas into powerful digital experiences. 
              We specialize in creating innovative solutions that bridge the gap between technology and human needs.
            </p>
            
            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Innovation-Driven</h4>
                    <p className="text-gray-400 text-sm">Cutting-edge technology solutions that push boundaries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">User-Centric Design</h4>
                    <p className="text-gray-400 text-sm">Beautiful interfaces that prioritize user experience</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Scalable Solutions</h4>
                    <p className="text-gray-400 text-sm">Architecture that grows with your business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quality Assurance</h4>
                    <p className="text-gray-400 text-sm">Rigorous testing and optimization for peak performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Meet Our Team</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  className="glass rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Avatar Placeholder */}
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
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill: string, skillIndex: number) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}