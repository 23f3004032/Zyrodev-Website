'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactForm } from '../../lib/types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('YOUR MESSAGE HAS BEEN ENCRYPTED AND TRANSMITTED.');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setTimeout(() => {
          onClose();
          setStatusMessage('');
        }, 2200);
      } else {
        setStatusMessage('TRANSMISSION FAILED. TRY AGAIN.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setStatusMessage('TRANSMISSION ERROR. UNABLE TO ESTABLISH CONNECTION.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] p-6 md:p-8 overflow-hidden z-10"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Top accent glow line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute right-4 top-4 text-slate-500 hover:text-cyan-400 font-mono text-sm transition-colors focus:outline-none select-none z-20"
          >
            ✕
          </button>

          {/* Header block */}
          <div className="text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase select-none">
              Get in Touch
            </h2>
            
            {/* Inline contact metadata display */}
            <div className="text-cyan-400 font-mono text-xs md:text-sm mt-2 flex flex-col md:flex-row gap-1 md:gap-4 select-none">
              <span>
                &gt; <a href="mailto:ankit@zyrodev.com" className="hover:text-white transition-colors">ankit@zyrodev.com</a>
              </span>
              <span className="hidden md:inline text-slate-800">|</span>
              <span>
                <a href="tel:+919431078126" className="hover:text-white transition-colors">+91 94310 78126</a>
              </span>
            </div>
          </div>

          {/* Input Fields Form container */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-8">
            
            {/* Row 1: Name */}
            <div className="text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Your Name *
              </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono" 
                placeholder="root@user" 
              />
            </div>

            {/* Row 1: Email */}
            <div className="text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Email Address *
              </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono" 
                placeholder="user@domain.com" 
              />
            </div>

            {/* Row 2: Phone */}
            <div className="text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Phone Number
              </label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono" 
                placeholder="+00 00000 00000" 
              />
            </div>

            {/* Row 2: Project Type */}
            <div className="text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Project Type *
              </label>
              <div className="relative">
                <select 
                  name="projectType" 
                  value={formData.projectType} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-950 text-slate-500">Select a project type</option>
                  <option value="mobile-app" className="bg-slate-950 text-slate-300">Mobile App Development</option>
                  <option value="web-development" className="bg-slate-950 text-slate-300">Web Development</option>
                  <option value="web-and-mobile-app" className="bg-slate-950 text-slate-300">Web and Mobile App Development</option>
                  <option value="ai-ml" className="bg-slate-950 text-slate-300">AI/ML Solutions</option>
                  <option value="video-editing" className="bg-slate-950 text-slate-300">Video Content Creation</option>
                  <option value="other" className="bg-slate-950 text-slate-300">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs select-none">
                  ▼
                </div>
              </div>
            </div>

            {/* Row 3: Message / Details */}
            <div className="col-span-1 md:col-span-2 text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Project Details *
              </label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={3} 
                className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono resize-none leading-relaxed" 
                placeholder="Provide parameters, requirements, and target timeline..." 
              />
            </div>

            {/* Submit execution command */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full col-span-1 md:col-span-2 mt-2 bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-mono text-sm tracking-widest uppercase py-3 rounded-md hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 select-none cursor-pointer"
            >
              {isLoading ? 'SENDING...' : '[ SEND REQUEST ]'}
            </button>

            {/* Status alerts logs output */}
            {statusMessage && (
              <div className="col-span-1 md:col-span-2 text-center text-xs font-mono select-none py-1">
                <span className={statusMessage.includes('TRANSMITTED') ? 'text-green-400' : 'text-red-400'}>
                  &gt; {statusMessage}
                </span>
              </div>
            )}

          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}