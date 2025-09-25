'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MobileSection from './components/sections/MobileSection';
import WebSection from './components/sections/WebSection';
import AISection from './components/sections/AISection';
import VideoSection from './components/sections/VideoSection';
import ContactModal from './components/modals/ContactModal';
import AboutModal from './components/modals/AboutModal';
import BookMeetingModal from './components/modals/BookMeetingModal';
import PortfolioModal from './components/modals/PortfolioModal';

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Scroll to section function for navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal relative">
        {/* Navigation */}
        <Navigation onOpenModal={openModal} onScrollToSection={scrollToSection} />
        
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* Mobile App Section */}
        <section id="mobile">
          <MobileSection />
        </section>
        
        {/* Web Development Section */}
        <section id="web">
          <WebSection />
        </section>
        
        {/* AI/ML Section */}
        <section id="ai">
          <AISection />
        </section>
        
        {/* Video Editing Section */}
        <section id="video">
          <VideoSection />
        </section>
        
        {/* Footer */}
        <footer className="bg-black py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to build something amazing?</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your digital vision to life. From concept to deployment, 
                we're here to make your ideas reality.
              </p>
              <div className="flex justify-center gap-6">
                <button
                  onClick={() => openModal('contact')}
                  className="interactive px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
                >
                  Start a Project
                </button>
                <button
                  onClick={() => openModal('meeting')}
                  className="interactive px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold"
                >
                  Book a Call
                </button>
              </div>
            </div>
            
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="mailto:ankit@zyrodev.com"
                className="interactive text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                ankit@zyrodev.com
              </a>
              <a
                href="https://linkedin.com/company/zyrodev"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/zyrodev"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
            
            <div className="pt-8 border-t border-gray-800">
              <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                  <h4 className="text-white font-semibold mb-3">Zyrodev</h4>
                  <p className="text-gray-400 text-sm">
                    Engineering Digital Realities through innovative technology solutions.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Services</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>Mobile App Development</li>
                    <li>Web Development</li>
                    <li>AI/ML Solutions</li>
                    <li>Video Production</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>
                      <button 
                        onClick={() => openModal('portfolio')}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        Portfolio
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => openModal('about')}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        About Team
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => openModal('contact')}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        Contact Us
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Zyrodev. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Modals */}
        <ContactModal 
          isOpen={activeModal === 'contact'} 
          onClose={closeModal} 
        />
        <AboutModal 
          isOpen={activeModal === 'about'} 
          onClose={closeModal} 
        />
        <BookMeetingModal 
          isOpen={activeModal === 'meeting'} 
          onClose={closeModal} 
        />
        <PortfolioModal 
          isOpen={activeModal === 'portfolio'} 
          onClose={closeModal} 
        />
      </div>
  );
}