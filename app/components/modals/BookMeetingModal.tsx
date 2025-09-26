'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import CustomButton from '../ui/CustomButton';

interface BookMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MeetingForm {
  name: string;
  email: string;
  company: string;
  preferredDateTime: string;
  agenda: string;
}

export default function BookMeetingModal({ isOpen, onClose }: BookMeetingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<MeetingForm>({
    name: '',
    email: '',
    company: '',
    preferredDateTime: '',
    agenda: ''
  });
  
  // NEW: States for loading and status messages
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Effect to manage the modal's dedicated Lenis instance for scrolling
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

  // NEW: Updated handleSubmit function to call the API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/book-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Your request has been sent successfully!');
        setFormData({ // Reset form on success
            name: '',
            email: '',
            company: '',
            preferredDateTime: '',
            agenda: ''
        });
        setTimeout(() => {
          onClose();
          setStatusMessage(''); // Clear message on close
        }, 2500); // Close modal after 2.5 seconds
      } else {
        const errorData = await response.json();
        setStatusMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setStatusMessage('An error occurred. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          className="bg-charcoal/95 backdrop-blur-md rounded-2xl max-w-3xl w-full max-h-[90vh] shadow-2xl border border-cyan-500/20 flex flex-col overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Static Header */}
          <div className="p-8 border-b border-gray-700 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 z-10">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Book a Meeting</h2>
                <p className="text-gray-400">Let's discuss how we can bring your ideas to life</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors interactive"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div
            ref={scrollContainerRef}
            className="overflow-y-auto"
          >
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date & Time *
                  </label>
                  <input
                    type="datetime-local"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().slice(0, 16)}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors appearance-none"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meeting Agenda / What would you like to discuss? *
                </label>
                <textarea
                  name="agenda"
                  value={formData.agenda}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your project, goals, timeline, and any specific questions you'd like to discuss..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <CustomButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading} // Pass loading state to button
                  disabled={isLoading}  // Disable button while loading
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  Book Meeting
                </CustomButton>
                <CustomButton
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </CustomButton>
              </div>

              {/* NEW: Display status message to user */}
              {statusMessage && (
                <p className={`text-center text-sm font-medium transition-opacity duration-300 ${statusMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {statusMessage}
                </p>
              )}

              <p className="text-gray-400 text-sm text-center">
                We'll send you a calendar invite within 24 hours to confirm your meeting.
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}