'use client';

import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsScroll from './components/StatsScroll';
import MobileSection from './components/sections/MobileSection';
import WebSection from './components/sections/WebSection';
import AISection from './components/sections/AISection';
import OurProducts from './components/sections/OurProducts';
import ContactModal from './components/modals/ContactModal';
import AboutModal from './components/modals/AboutModal';
import BookMeetingModal from './components/modals/BookMeetingModal';
import PortfolioModal from './components/modals/PortfolioModal';

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (activeModal) {
      lenis?.stop(); // Stop Lenis when modal is open
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      lenis?.start(); // Restart Lenis when modal closes
      document.body.style.overflow = ''; // Restore scroll
    }
    
    return () => {
      document.body.style.overflow = ''; // Cleanup
    };
  }, [activeModal, lenis]);
  

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
        
        {/* Stats Scroll Section */}
        <section id="stats">
          <StatsScroll />
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
        
        {/* Our Products Section */}
        <section id="products">
          <OurProducts />
        </section>
        
        {/* Footer */}
        <footer className="bg-black py-12 px-6 md:px-12 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to build something amazing?</h3>
              <p className="text-slate-400 mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Let's collaborate and bring your digital vision to life. From concept to deployment, 
                we're here to make your ideas reality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => openModal('contact')}
                  className="w-full sm:w-auto bg-cyan-500/10 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-mono text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold select-none interactive"
                >
                  Start a Project
                </button>
                <button
                  onClick={() => openModal('portfolio')}
                  className="w-full sm:w-auto bg-transparent border border-slate-600 text-white px-6 py-3 rounded-full font-mono text-sm hover:border-cyan-400 transition-all duration-300 font-semibold select-none interactive"
                >
                  Our Portfolio
                </button>
                <button
                  onClick={() => openModal('meeting')}
                  className="w-full sm:w-auto bg-transparent border border-slate-600 text-white px-6 py-3 rounded-full font-mono text-sm hover:border-cyan-400 transition-all duration-300 font-semibold select-none interactive"
                >
                  Book a Call
                </button>
              </div>
            </div>
            
            <div className="flex justify-center mb-8">
              <a
                href="mailto:ankit@zyrodev.com"
                className="interactive text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 font-mono text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                ankit@zyrodev.com
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-slate-800 text-sm">
              <div className="col-span-2 flex flex-col text-left">
                <h4 className="text-white font-semibold mb-3 select-none">Zyrodev</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Engineering Digital Realities through innovative technology solutions.
                </p>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-white font-semibold mb-3 select-none">Services</h4>
                <ul className="text-sm">
                  <li>
                    <a href="#mobile" className="text-slate-400 hover:text-cyan-400 transition-colors block mb-2">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="#web" className="text-slate-400 hover:text-cyan-400 transition-colors block mb-2">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#ai" className="text-slate-400 hover:text-cyan-400 transition-colors block mb-2">
                      AI/ML Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-slate-400 hover:text-cyan-400 transition-colors block mb-2">
                      Our Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-white font-semibold mb-3 select-none">Quick Links</h4>
                <ul className="text-sm">
                  <li>
                    <button 
                      onClick={() => openModal('portfolio')}
                      className="text-slate-400 hover:text-cyan-400 transition-colors block mb-2 text-left"
                    >
                      Portfolio
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => openModal('about')}
                      className="text-slate-400 hover:text-cyan-400 transition-colors block mb-2 text-left"
                    >
                      About Team
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => openModal('contact')}
                      className="text-slate-400 hover:text-cyan-400 transition-colors block mb-2 text-left"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-center">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Zyrodev. All rights reserved.
              </p>
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
          onOpenContact={() => openModal('contact')}
        />
      </div>
  );
}