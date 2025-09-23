'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../lib/types';
import PhoneMockup from './PhoneMockup';
import CustomButton from './ui/CustomButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          ref={modalRef}
          layoutId={project.id}
          className="relative w-full max-w-6xl h-full max-h-[90vh] bg-charcoal/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {/* Close button */}
          <motion.button
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors interactive"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Modal content based on project type */}
          {project.type === 'mobile' ? (
            <div className="flex flex-col lg:flex-row h-full">
              {/* 3D Phone Mockup - Left side */}
              <motion.div
                className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <PhoneMockup videoUrl={project.videoUrl} />
              </motion.div>

              {/* Project details - Right side */}
              <motion.div
                className="flex-1 p-8 lg:p-12 flex flex-col justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                    {project.type}
                  </span>
                  <span className="text-gray-400 text-sm ml-3">• {project.category}</span>
                  {project.year && (
                    <span className="text-gray-400 text-sm ml-2">• {project.year}</span>
                  )}
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  {project.title}
                </h2>

                {project.description && (
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg backdrop-blur-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.projectLink && (
                    <CustomButton
                      variant="primary"
                      size="lg"
                      onClick={() => window.open(project.projectLink, '_blank')}
                    >
                      View Live App
                    </CustomButton>
                  )}
                  <CustomButton
                    variant="secondary"
                    size="lg"
                    onClick={onClose}
                  >
                    Close
                  </CustomButton>
                </div>
              </motion.div>
            </div>
          ) : (
            // Web and ML projects layout
            <div className="flex flex-col lg:flex-row h-full">
              {/* Video player - Left side */}
              <motion.div
                className="flex-1 lg:flex-[1.5] p-8 flex items-center justify-center bg-black/20"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-full max-w-4xl">
                  <video
                    className="w-full h-auto rounded-lg shadow-2xl"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      // Show fallback content on video error
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center';
                      fallback.innerHTML = '<span class="text-white text-lg">Project Preview</span>';
                      (e.target as HTMLVideoElement).parentNode?.replaceChild(fallback, e.target as HTMLVideoElement);
                    }}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                </div>
              </motion.div>

              {/* Project details - Right side */}
              <motion.div
                className="flex-1 p-8 lg:p-12 flex flex-col justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                    {project.type}
                  </span>
                  <span className="text-gray-400 text-sm ml-3">• {project.category}</span>
                  {project.year && (
                    <span className="text-gray-400 text-sm ml-2">• {project.year}</span>
                  )}
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  {project.title}
                </h2>

                {project.description && (
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg backdrop-blur-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.projectLink && (
                    <CustomButton
                      variant="primary"
                      size="lg"
                      onClick={() => window.open(project.projectLink, '_blank')}
                    >
                      Visit Site
                    </CustomButton>
                  )}
                  <CustomButton
                    variant="secondary"
                    size="lg"
                    onClick={onClose}
                  >
                    Close
                  </CustomButton>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}