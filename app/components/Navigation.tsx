'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButton from './ui/CustomButton'; // Corrected import path using alias

interface NavigationProps {
  onOpenModal: (modalName: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

const navLinks = [
  { id: 'portfolio', name: 'Portfolio', modal: 'portfolio' },
  { id: 'about', name: 'About', modal: 'about' },
  { id: 'contact', name: 'Contact', modal: 'contact' },
];

export default function Navigation({ onOpenModal, onScrollToSection }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const handleScroll = useCallback(() => {
    if (window.scrollY < 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
}, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: '-120%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-120%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="container mx-auto px-6 py-4">
            <nav 
              onMouseLeave={() => setHoveredLink(null)} // Reset hover when mouse leaves the nav bar
              className="relative flex items-center justify-between p-2 rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg"
            >
              {/* Left Side: Logo */}
              <div
                onClick={() => onScrollToSection('hero')}
                className="flex items-center gap-3 cursor-pointer group interactive"
              >
                <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                   <img src="/logo.svg" alt="Zyrodev Logo" className="w-full h-full" />
                </div>
                <h1 className="text-xl font-bold tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                  ZYRODEV
                </h1>
              </div>

              {/* Center: Navigation Links with Sliding Pill - Desktop Only */}
              <div className="hidden md:flex items-center gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onOpenModal(link.modal)}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    className="relative px-5 py-2 text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {hoveredLink === link.id && (
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
                        layoutId="navbar-pill"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                ))}
              </div>

              {/* Right Side: CTA Button + Hamburger (Mobile & Desktop) */}
              <div className="flex items-center gap-3">
                {/* Book Meeting Button - Always Visible */}
                <CustomButton
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenModal('meeting')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Book Meeting
                </CustomButton>

                {/* Mobile: Hamburger Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 group"
                  aria-label="Toggle menu"
                >
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white group-hover:bg-cyan-400 transition-colors"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 bg-white group-hover:bg-cyan-400 transition-colors"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white group-hover:bg-cyan-400 transition-colors"
                  />
                </button>
              </div>
            </nav>

            {/* Mobile Menu Dropdown - Only Portfolio, About, Contact */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-2 p-4 rounded-xl bg-black/95 backdrop-blur-lg border border-white/10 shadow-xl"
                >
                  {/* Mobile Navigation Links - Only 3 options */}
                  <div className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => {
                          onOpenModal(link.modal);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-base font-semibold text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

