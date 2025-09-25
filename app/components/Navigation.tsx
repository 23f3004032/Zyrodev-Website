'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButton from './ui/CustomButton';

interface NavigationProps {
  onOpenModal: (modalName: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({ onOpenModal, onScrollToSection }: NavigationProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const scrollRef = useRef(0);
  const lastScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Ultra-optimized scroll handler using refs to avoid re-renders
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    scrollRef.current = currentScrollY;
    
    // Only update state if scroll difference is significant (reduces re-renders dramatically)
    if (Math.abs(currentScrollY - scrollY) > 10) {
      setScrollY(currentScrollY);
      
      // Hide/show navigation based on scroll direction (smoother logic)
      const shouldShow = currentScrollY < 50 || currentScrollY < lastScrollRef.current - 5;
      setIsVisible(shouldShow);
    }
    
    lastScrollRef.current = currentScrollY;
  }, [scrollY]);

  useEffect(() => {
    // Ultra-smooth scroll handling like cappen.com
    const smoothScrollHandler = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        handleScroll();
        rafRef.current = null;
      });
    };

    // Use passive listeners for maximum performance
    window.addEventListener('scroll', smoothScrollHandler, { 
      passive: true, 
      capture: false 
    });
    
    return () => {
      window.removeEventListener('scroll', smoothScrollHandler);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  // Calculate background opacity based on scroll
  const backgroundOpacity = Math.min(scrollY / 300, 0.95);
  
  // Calculate text color based on scroll position
  const getButtonVariant = () => {
    if (scrollY > 200) return 'ghost';
    return 'secondary';
  };

  // Check if navigation is interactive (scrolled enough to show glow)
  const isInteractive = scrollY > 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className={`fixed top-0 right-0 z-50 p-6 rounded-bl-2xl transition-all duration-300 ${
            isInteractive ? 'shadow-2xl shadow-cyan-500/20' : ''
          }`}
          style={{
            background: `rgba(17, 17, 17, ${backgroundOpacity})`,
            backdropFilter: backgroundOpacity > 0.1 ? 'blur(10px)' : 'none',
            border: isInteractive ? '1px solid rgba(6, 182, 212, 0.3)' : 'none',
          }}
        >
          <div className="flex items-center space-x-4">
            {/* Logo/Brand */}
            <motion.div
              className={`mr-8 cursor-pointer transition-all duration-300 ${
                isInteractive ? 'drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]' : ''
              }`}
              animate={{ 
                color: scrollY > 200 ? '#06b6d4' : '#ffffff'
              }}
              onClick={() => onScrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-xl font-bold tracking-wide">ZYRODEV</h1>
            </motion.div>

            {/* Section Navigation */}
            <div className="hidden md:flex items-center space-x-2 mr-4">
              {[
                { id: 'mobile', name: 'Mobile' },
                { id: 'web', name: 'Web' },
                { id: 'ai', name: 'AI/ML' },
                { id: 'video', name: 'Video' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => onScrollToSection(section.id)}
                  className={`px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-lg ${
                    isInteractive ? 'hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]' : ''
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <CustomButton
                variant={getButtonVariant()}
                size="sm"
                onClick={() => onOpenModal('portfolio')}
                className={`transition-all duration-300 ${
                  isInteractive ? 'hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]' : ''
                }`}
              >
                Portfolio
              </CustomButton>
              
              <CustomButton
                variant={getButtonVariant()}
                size="sm"
                onClick={() => onOpenModal('about')}
                className={`transition-all duration-300 ${
                  isInteractive ? 'hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]' : ''
                }`}
              >
                About Us
              </CustomButton>
              
              <CustomButton
                variant={getButtonVariant()}
                size="sm"
                onClick={() => onOpenModal('contact')}
                className={`transition-all duration-300 ${
                  isInteractive ? 'hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]' : ''
                }`}
              >
                Contact
              </CustomButton>
              
              <CustomButton
                variant="primary"
                size="sm"
                onClick={() => onOpenModal('meeting')}
                className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 ${
                  isInteractive ? 'shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)]' : ''
                }`}
              >
                Book Meeting
              </CustomButton>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}