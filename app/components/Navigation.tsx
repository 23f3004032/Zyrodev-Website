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
              {/* Left Section: Logo & Text */}
              <div className="flex flex-1 items-center justify-start">
                <div
                  onClick={() => onScrollToSection('hero')}
                  className="flex items-center gap-3 cursor-pointer group interactive"
                >
                  <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                     <img src="/logo.svg" alt="Zyrodev Logo" className="w-full h-full" />
                  </div>
                  <h1 className="hidden md:block text-xl font-bold tracking-widest text-white ml-3 font-sans select-none">
                    ZYRODEV
                  </h1>
                </div>
              </div>

              {/* Center Section: Navigation Links with Sliding Pill */}
              <div className="hidden md:flex flex-1 items-center justify-center gap-8">
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

              {/* Right Section: CTA / Hamburger */}
              <div className="flex flex-1 items-center justify-end gap-3">
                {/* Book Meeting Button - Always Visible */}
                <button
                  onClick={() => onOpenModal('meeting')}
                  className="px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-cyan-500 text-white font-mono text-sm tracking-wide whitespace-nowrap hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300 select-none"
                >
                  <span className="md:hidden">Connect</span>
                  <span className="hidden md:inline">Book Meeting</span>
                </button>

                {/* Mobile: Hamburger Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="flex flex-col justify-center items-end gap-1.5 w-8 h-8 md:hidden text-cyan-400 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <span 
                    className={`h-[2px] bg-cyan-400 rounded transition-all duration-300 ${
                      isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'
                    }`}
                  />
                  <span 
                    className={`h-[2px] bg-cyan-400 rounded transition-all duration-300 ${
                      isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[3px]' : 'w-4'
                    }`}
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

