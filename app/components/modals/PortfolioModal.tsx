'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { mobileProjects, webProjects, aiProjects, internalProducts } from '@/app/lib/data';
import { Project } from '@/app/lib/types';

// Custom SVG Icons to avoid lucide-react build errors
const BuildingIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
    <path d="M6 12H4a2 2 0 0 0-2 2v8" />
    <path d="M18 12h2a2 2 0 0 1 2 2v8" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

const ScaleIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m16 16 3-8 3 8c-.87.65-2.24 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-2.24 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h18" />
  </svg>
);

const HospitalIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 6V2" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <path d="M19 14v8H5v-8" />
    <path d="M19 10a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H5a2 2 0 0 0-2 2v4" />
  </svg>
);

const FileTextIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

const categories = [
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ai', name: 'AI/ML Solutions' },
  { id: 'products', name: 'Our Products' }
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2: BuildingIcon,
  Scale: ScaleIcon,
  Hospital: HospitalIcon,
  FileText: FileTextIcon
};

export default function PortfolioModal({ isOpen, onClose, onOpenContact }: PortfolioModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('web');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const openContactModal = () => {
    onClose();
    if (onOpenContact) {
      onOpenContact();
    }
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Manage Lenis scroll wrapper instance
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
  }, [isOpen, selectedProject, activeCategory]);

  const getFilteredProjects = () => {
    switch (activeCategory) {
      case 'mobile': return mobileProjects;
      case 'web': return webProjects;
      case 'ai': return aiProjects;
      case 'products': return internalProducts;
      default: return mobileProjects;
    }
  };

  if (!isOpen) return null;

  const IconComponent = selectedProject && selectedProject.iconName ? iconMap[selectedProject.iconName] : null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop Close Capture */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

        <motion.div
          ref={modalRef}
          className="relative w-full max-w-7xl h-full max-h-[90vh] bg-slate-950 border border-slate-800 rounded-xl flex flex-col overflow-hidden z-10"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Top accent glow line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

          {selectedProject ? (
            // ## PROJECT DETAIL VIEW ##
            <>
              {/* Static Header for Detail View */}
              <div className="p-6 border-b border-slate-800 bg-slate-950 z-10 flex justify-between items-center select-none">
                <div className="flex items-center gap-4 text-left">
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  </button>
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-wide">{selectedProject.title}</h2>
                  </div>
                </div>
                <button 
                  onClick={onClose} 
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content for Detail View */}
              <div ref={scrollContainerRef} className="overflow-y-auto flex-1 animate-fadeIn">
                <div className="p-6">
                  {selectedProject.category === 'Our Products' ? (
                    // ## PRODUCTS LAYOUT ##
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Products presentation pane */}
                      <div className="w-full lg:w-auto flex-shrink-0 mx-auto">
                        <div className="relative mx-auto bg-slate-900/40 border border-slate-800 rounded-xl p-2 w-[340px] md:w-[480px] max-w-full">
                          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/20 flex flex-col items-center justify-center p-8 text-center" style={{ aspectRatio: '16/9' }}>
                            {/* Radial gradient backing */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)] pointer-events-none" />
                            {/* Grid overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_24px]" />
                            
                            {IconComponent && (
                              <div className="relative z-10 filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] text-cyan-500 mb-4">
                                <IconComponent size={80} />
                              </div>
                            )}
                            <h3 className="text-white font-bold text-lg md:text-xl relative z-10 max-w-sm">
                              {selectedProject.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info details */}
                      <div className="flex-1 space-y-5 text-left select-none">
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Product Overview</h3>
                          <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2">{selectedProject.description}</p>
                        </div>
                        {selectedProject.techStack && (
                          <div>
                            <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Tech Stack</h3>
                            <p className="text-cyan-400 font-mono text-xs md:text-sm mt-2">{selectedProject.techStack}</p>
                          </div>
                        )}
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Category</h3>
                          <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full font-mono">
                            {selectedProject.category}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider mb-2">Request Demo</h3>
                          <button 
                            onClick={openContactModal}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-black text-xs font-bold rounded-full font-mono hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer"
                          >
                            Request a Demo
                          </button>
                        </div>
                        {selectedProject.testimonial && (
                          <div>
                            <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider mb-2">Operational Scope</h3>
                            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-400 leading-relaxed">
                              "{selectedProject.testimonial}"
                            </div>
                          </div>
                        )}
                        
                        {/* Custom Sales CTA at the bottom */}
                        <div className="mt-8 p-4 border border-cyan-500/30 bg-cyan-500/5 rounded-lg text-center">
                          <p className="text-slate-300 text-sm">Need to implement this solution or have a custom product in mind?</p>
                          <button onClick={openContactModal} className="mt-2 text-cyan-400 font-bold hover:underline font-mono text-sm cursor-pointer">
                            Let's build your vision &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : selectedProject.type === 'mobile' ? (
                    // ## PORTRAIT LAYOUT ##
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Portrait Video container */}
                      <div className="w-full lg:w-auto flex-shrink-0 mx-auto">
                        <div className="relative mx-auto bg-black/40 border border-slate-800 rounded-xl p-2 w-[240px]">
                          <div className="relative overflow-hidden rounded-lg bg-slate-950" style={{ aspectRatio: '9/16' }}>
                            {selectedProject.videoUrl ? (
                              <video 
                                src={selectedProject.videoUrl} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-full object-cover"
                              />
                            ) : selectedProject.image ? (
                              <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="w-full h-full object-cover" 
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info details */}
                      <div className="flex-1 space-y-5 text-left select-none">
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Project Overview</h3>
                          <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2">{selectedProject.description}</p>
                        </div>
                        {selectedProject.techStack && (
                          <div>
                            <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Tech Stack</h3>
                            <p className="text-cyan-400 font-mono text-xs md:text-sm mt-2">{selectedProject.techStack}</p>
                          </div>
                        )}
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Category</h3>
                          <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full font-mono">
                            {selectedProject.category}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider mb-2">Project Link</h3>
                          {selectedProject.link ? (
                            <a 
                              href={selectedProject.link} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500 text-cyan-400 text-xs rounded-full font-mono hover:bg-cyan-500 hover:text-black transition-all duration-300"
                            >
                              Visit Live Platform
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          ) : (
                            <span className="inline-block mt-1 text-slate-500 font-mono text-xs italic">
                              Proprietary / Internal Platform Build
                            </span>
                          )}
                        </div>
                        {selectedProject.testimonial && (
                          <div>
                            <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider mb-2">Operational Scope</h3>
                            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-400 leading-relaxed">
                              "{selectedProject.testimonial}"
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    // ## LANDSCAPE LAYOUT ##
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Landscape Media */}
                      <div className="w-full lg:w-auto flex-shrink-0 mx-auto">
                        <div className="relative mx-auto bg-black/40 border border-slate-800 rounded-xl p-2 w-[340px] md:w-[480px] max-w-full">
                          <div className="relative overflow-hidden rounded-lg bg-slate-950" style={{ aspectRatio: '16/9' }}>
                            {selectedProject.videoUrl ? (
                              <video 
                                src={selectedProject.videoUrl} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-full object-cover"
                              />
                            ) : selectedProject.image ? (
                              <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="w-full h-full object-contain p-4" 
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info details */}
                      <div className="flex-1 space-y-5 text-left select-none">
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Project Overview</h3>
                          <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2">{selectedProject.description}</p>
                        </div>
                        {selectedProject.techStack && (
                          <div>
                            <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Tech Stack</h3>
                            <p className="text-cyan-400 font-mono text-xs md:text-sm mt-2">{selectedProject.techStack}</p>
                          </div>
                        )}
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider">Category</h3>
                          <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full font-mono">
                            {selectedProject.category}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider mb-2">Project Link</h3>
                          {selectedProject.link ? (
                            <a 
                              href={selectedProject.link} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500 text-cyan-400 text-xs rounded-full font-mono hover:bg-cyan-500 hover:text-black transition-all duration-300"
                            >
                              Visit Live Platform
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          ) : (
                            <span className="inline-block mt-1 text-slate-500 font-mono text-xs italic">
                              Proprietary / Internal Platform Build
                            </span>
                          )}
                        </div>
                        {selectedProject.testimonial && (
                          <div>
                            <h3 className="text-sm font-mono uppercase text-slate-500 tracking-wider mb-2">Operational Scope</h3>
                            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-400 leading-relaxed">
                              "{selectedProject.testimonial}"
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
              <div className="p-6 border-b border-slate-800 bg-slate-950 z-10 flex justify-between items-center select-none">
                <div className="text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">Our Portfolio</h2>
                  <p className="text-slate-400 font-mono text-xs mt-1">&gt; Engineering realizations across core verticals, Click to know more </p>
                </div>
                <button 
                  onClick={onClose} 
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Category Filter Navigation */}
              <div className="p-4 border-b border-slate-900 bg-slate-950/20 select-none">
                <div className="flex flex-wrap gap-2 justify-start items-center">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border ${
                        activeCategory === category.id 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' 
                          : 'bg-black/30 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Projects Grid */}
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-2 md:p-6 custom-scrollbar">
                {/* Mobile Apps - Portrait Grid */}
                {activeCategory === 'mobile' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fadeIn">
                    {getFilteredProjects().map((project, index) => (
                      <motion.div
                        key={`${project.id}-${index}`}
                        onClick={() => setSelectedProject(project)}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04 }}
                        className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-800 aspect-[9/16]"
                      >
                        {project.videoUrl ? (
                          <video 
                            src={project.videoUrl} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl" 
                          />
                        ) : (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        )}
                        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 z-10">
                          <h3 className="text-white font-bold text-center px-4 text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {project.title}
                          </h3>
                          <button className="mt-4 px-5 py-2 border border-cyan-500 text-white text-xs md:text-sm font-mono rounded-full hover:bg-cyan-500 hover:text-black transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                            Explore
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Web, AI & Products - Landscape Grid */}
                {(activeCategory === 'web' || activeCategory === 'ai' || activeCategory === 'products') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                    {getFilteredProjects().map((project, index) => {
                      const IconComponent = project.iconName ? iconMap[project.iconName] : null;
                      return (
                        <motion.div
                          key={`${project.id}-${index}`}
                          onClick={() => setSelectedProject(project)}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04 }}
                          className="group relative overflow-hidden rounded-xl cursor-pointer border border-slate-800 aspect-video flex flex-col items-center justify-center"
                        >
                          {project.category === 'Our Products' ? (
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/25 flex flex-col items-center justify-center p-4 border border-slate-800/50 rounded-xl bg-slate-950">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0,transparent_60%)] pointer-events-none" />
                              {IconComponent && (
                                <div className="text-cyan-500 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                                  <IconComponent size={64} />
                                </div>
                              )}
                              <span className="text-slate-400 font-bold text-sm md:text-base mt-3 text-center line-clamp-2 px-2 select-none group-hover:text-white transition-colors">
                                {project.title}
                              </span>
                            </div>
                          ) : (
                            <>
                              {project.videoUrl ? (
                                <video 
                                  src={project.videoUrl} 
                                  autoPlay 
                                  loop 
                                  muted 
                                  playsInline
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl" 
                                />
                              ) : (
                                <img 
                                  src={project.image} 
                                  alt={project.title} 
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                              )}
                              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 z-10">
                                <h3 className="text-white font-bold text-center px-4 text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                  {project.title}
                                </h3>
                                <button className="mt-4 px-5 py-2 border border-cyan-500 text-white text-xs md:text-sm font-mono rounded-full hover:bg-cyan-500 hover:text-black transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                  Explore
                                </button>
                              </div>
                            </>
                          )}
                        </motion.div>
                      );
                    })}
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