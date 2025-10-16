'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis'; // Import Lenis
import { mobileProjects, webProjects, aiProjects } from '@/app/lib/data';
import { Project } from '@/app/lib/types';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allProjects = [
  ...mobileProjects,
  ...webProjects,
  ...aiProjects
];

const categories = [
  { id: 'mobile', name: 'Mobile Apps', count: mobileProjects.length },
  { id: 'web', name: 'Web Development', count: webProjects.length },
  { id: 'ai', name: 'AI/ML Solutions', count: aiProjects.length }
];

export default function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for scrollable part
  const [activeCategory, setActiveCategory] = useState('mobile');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // This useEffect manages the Lenis instance for the current view (grid or detail)
  useEffect(() => {
    let modalLenis: Lenis | null = null;
    
    if (isOpen && scrollContainerRef.current) {
      modalLenis = new Lenis({
        wrapper: scrollContainerRef.current,
        smoothWheel: true,
        duration: 1.2,
      });

      const raf = (time: number) => {
        modalLenis?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
    
    return () => {
      modalLenis?.destroy();
    };
  }, [isOpen, selectedProject]); // Re-initialize Lenis when view changes

  // ... (useEffect for escape key can be removed for consistency)

  const getFilteredProjects = () => {
    switch (activeCategory) {
      case 'mobile': return mobileProjects;
      case 'web': return webProjects;
      case 'ai': return aiProjects;
      default: return mobileProjects;
    }
  };

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
          className="bg-charcoal/95 backdrop-blur-md rounded-2xl max-w-7xl w-full max-h-[90vh] shadow-2xl border border-cyan-500/20 flex flex-col overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedProject ? (
            // ## PROJECT DETAIL VIEW ##
            <>
              {/* Static Header for Detail View */}
              <div className="p-8 border-b border-gray-700 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 z-10">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setSelectedProject(null)} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    </div>
                  </div>
                  <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Content for Detail View */}
              <div ref={scrollContainerRef} className="overflow-y-auto">
                <div className="p-8">
                  {/* Mobile App - Portrait Layout with Small Phone */}
                  {selectedProject.type === 'mobile' && (
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Small Portrait Phone Video - 540x1161 dimensions (aspect ratio ~0.465:1) */}
                      <div className="w-full lg:w-auto flex-shrink-0">
                        <div className="relative mx-auto" style={{ width: '270px', maxWidth: '100%' }}>
                          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-2xl" style={{ aspectRatio: '540/1161' }}>
                            {selectedProject.videoUrl ? (
                              <video 
                                src={selectedProject.videoUrl} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-full object-contain"
                              />
                            ) : selectedProject.imageUrl ? (
                              <img 
                                src={selectedProject.imageUrl} 
                                alt={selectedProject.title} 
                                className="w-full h-full object-contain" 
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info on Right */}
                      <div className="flex-1 space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                          <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Category</h3>
                          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-lg border border-purple-500/30">
                            {selectedProject.category}
                          </span>
                        </div>
                        {selectedProject.link && (
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Project Link</h3>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
                              View Project
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          </div>
                        )}
                        {selectedProject.testimonial && (
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Client Testimonial</h3>
                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
                              <p className="text-gray-300 italic leading-relaxed">"{selectedProject.testimonial}"</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Web & AI/ML - Landscape Layout (Video Left, Data Right) */}
                  {(selectedProject.type === 'web' || selectedProject.type === 'ml') && (
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Landscape Video on Left - 1280x563 dimensions (aspect ratio ~2.27:1) */}
                      <div className="w-full lg:w-auto flex-shrink-0">
                        <div className="relative mx-auto" style={{ width: '640px', maxWidth: '100%' }}>
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-2xl" style={{ aspectRatio: '1280/563' }}>
                            {selectedProject.videoUrl ? (
                              <video 
                                src={selectedProject.videoUrl} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-full object-contain"
                              />
                            ) : selectedProject.imageUrl ? (
                              <img 
                                src={selectedProject.imageUrl} 
                                alt={selectedProject.title} 
                                className="w-full h-full object-contain" 
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info on Right */}
                      <div className="flex-1 space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                          <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Category</h3>
                          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-lg border border-purple-500/30">
                            {selectedProject.category}
                          </span>
                        </div>
                        {selectedProject.link && (
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Project Link</h3>
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all">
                              View Project
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          </div>
                        )}
                        {selectedProject.testimonial && (
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Client Testimonial</h3>
                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
                              <p className="text-gray-300 italic leading-relaxed">"{selectedProject.testimonial}"</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            // ## PORTFOLIO GRID VIEW ##
            <>
              {/* Static Header for Grid View */}
              <div className="p-8 border-b border-gray-700 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 z-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">Our Portfolio</h2>
                      <p className="text-gray-400">Showcasing our best work across different technologies</p>
                    </div>
                    {/* Total Projects Stat */}
                    <div className="text-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{allProjects.length}</div>
                      <div className="text-xs text-gray-400 uppercase mt-1">Total Projects</div>
                    </div>
                  </div>
                  <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors interactive">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>

              {/* Static Category Filter Bar */}
              <div className="p-8 border-b border-gray-700">
                <div className="flex flex-wrap gap-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${ activeCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20' }`}
                    >
                      {category.name}
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Projects Grid */}
              <div ref={scrollContainerRef} className="overflow-y-auto">
                {/* Mobile Apps - Portrait Grid (5 columns) */}
                {activeCategory === 'mobile' && (
                  <div className="p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {getFilteredProjects().map((project, index) => (
                      <motion.div
                        key={`${project.id}-${index}`}
                        className="group cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105" style={{ aspectRatio: '9/16' }}>
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h3 className="text-white font-semibold text-sm">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Web & AI/ML - Landscape Grid (3 columns) */}
                {(activeCategory === 'web' || activeCategory === 'ai') && (
                  <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredProjects().map((project, index) => (
                      <motion.div
                        key={`${project.id}-${index}`}
                        className="group cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105" style={{ aspectRatio: '16/9' }}>
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h3 className="text-white font-semibold text-sm">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}