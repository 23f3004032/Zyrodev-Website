'use client';

import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  subline: string;
  linkedinUrl?: string;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      const modalLenis = new Lenis({
        wrapper: scrollContainerRef.current,
        smoothWheel: true,
        duration: 1.2,
      });

      const raf = (time: number) => {
        modalLenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      
      return () => {
        modalLenis.destroy();
      };
    }
  }, [isOpen]);

  const team: TeamMember[] = [
    {
      id: 'puneet',
      name: 'Puneet',
      role: 'Co-Founder & Consultant',
      initials: 'P',
      subline: 'Technical architecture & product consulting.',
      linkedinUrl: 'https://www.linkedin.com/in/brpuneet898/'
    },
    {
      id: 'ankit',
      name: 'Ankit',
      role: 'Co-Founder & CEO',
      initials: 'A',
      subline: 'Brand strategy, Client relations & Full stack Engineer.',
      linkedinUrl: 'https://www.linkedin.com/in/ankit-singh-117925249/'
    },
    {
      id: 'devanshu',
      name: 'Devanshu Bhatnagar',
      role: 'Co-Founder & CTO',
      initials: 'DB',
      subline: 'Full-stack systems architecture & engineering.',
      linkedinUrl: 'https://www.linkedin.com/in/devanshu-bhatnagar/'
    },
    {
      id: 'shruti',
      name: 'Shruti Shrivastava',
      role: 'Marketing Advisor',
      initials: 'SS',
      subline: 'Strategic marketing communications & outreach.'
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop Close Capture */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

        <motion.div
          ref={modalRef}
          className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden z-10"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Top accent glow line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none z-20" />

          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute right-4 top-4 text-slate-500 hover:text-cyan-400 font-mono text-sm transition-colors focus:outline-none select-none z-20"
          >
            ✕
          </button>

          {/* STATIC HEADER (Non-scrollable) */}
          <div className="p-6 border-b border-slate-900 bg-slate-950 z-10 text-left select-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase">
              Meet the Team
            </h2>
            <p className="text-slate-400 font-mono text-xs md:text-sm mt-2">
              &gt; The leadership driving Zyrodev
            </p>
          </div>

          {/* SCROLLABLE CONTENT AREA (Lenis wrapper) */}
          <div
            ref={scrollContainerRef}
            className="overflow-y-auto flex-1 p-6"
          >
            {/* Leadership cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {team.map((member) => (
                <div 
                  key={member.id}
                  className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 flex flex-col justify-between hover:border-slate-700 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all duration-300 group"
                >
                  {/* Card Body */}
                  <div className="flex items-start gap-3 text-left">
                    {/* Avatar Initials Circle */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-900/50 to-slate-900 flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0 select-none border border-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                      {member.initials}
                    </div>
                    
                    {/* Member Details */}
                    <div className="flex-grow min-w-0">
                      <h4 className="text-sm font-extrabold text-white tracking-wide">{member.name}</h4>
                      <p className="text-cyan-400 font-mono text-[9px] uppercase tracking-wider mt-0.5">{member.role}</p>
                      <p className="text-slate-400 text-xs mt-2 leading-relaxed font-sans font-medium">{member.subline}</p>
                    </div>
                  </div>

                  {/* Footer Action - Conditionally rendered based on URL presence */}
                  {member.linkedinUrl && (
                    <div className="mt-4 pt-3 border-t border-slate-900/40 flex justify-start">
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-transparent border border-cyan-500/20 text-cyan-400 text-[10px] rounded-full font-mono hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 select-none interactive"
                      >
                        View Profile
                      </a>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}