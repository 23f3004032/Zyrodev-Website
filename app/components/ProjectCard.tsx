'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../lib/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    setMousePosition({
      x: (e.clientX - centerX) / (rect.width / 2),
      y: (e.clientY - centerY) / (rect.height / 2),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      layoutId={project.id}
      className="interactive relative group cursor-pointer overflow-hidden rounded-xl glass-cyan hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg) scale(1.05)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Video Background */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
        <video
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => {
            // Hide video on error and show gradient fallback
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>
        
        {/* Fallback gradient - always present as background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600" />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Project type badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="mb-2">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wide">
            {project.category}
          </span>
          {project.year && (
            <span className="text-gray-400 text-sm ml-2">• {project.year}</span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        {project.description && (
          <p className="text-gray-300 text-sm line-clamp-3 mb-4">
            {project.description}
          </p>
        )}

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded backdrop-blur-sm">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* View Project Button */}
        <motion.div
          className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          <span>View Project</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-500"
        animate={isHovered ? {
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.3)',
            '0 0 40px rgba(6, 182, 212, 0.5)',
            '0 0 20px rgba(6, 182, 212, 0.3)',
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}