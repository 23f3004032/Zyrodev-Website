'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [formData, setFormData] = useState<MeetingForm>({
    name: '',
    email: '',
    company: '',
    preferredDateTime: '',
    agenda: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Custom Calendar state variables
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Custom Time picker select states
  const [selectedHour, setSelectedHour] = useState("10");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");
  const [calendarOpen, setCalendarOpen] = useState(false);

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const totalDays = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const updateDateTimeString = (date: Date | null, hr: string, min: string, period: string) => {
    if (!date) return;
    const monthStr = (date.getMonth() + 1).toString().padStart(2, '0');
    const dayStr = date.getDate().toString().padStart(2, '0');
    const dateString = `${date.getFullYear()}-${monthStr}-${dayStr}`;
    const fullDateTime = `${dateString} ${hr}:${min} ${period}`;
    
    setFormData(prev => ({
      ...prev,
      preferredDateTime: fullDateTime
    }));
  };

  const handleHourChange = (hr: string) => {
    setSelectedHour(hr);
    updateDateTimeString(selectedDate, hr, selectedMinute, selectedPeriod);
  };

  const handleMinuteChange = (min: string) => {
    setSelectedMinute(min);
    updateDateTimeString(selectedDate, selectedHour, min, selectedPeriod);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    updateDateTimeString(selectedDate, selectedHour, selectedMinute, period);
  };

  const handleDateSelect = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    setSelectedDate(d);
    updateDateTimeString(d, selectedHour, selectedMinute, selectedPeriod);
  };

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
        setStatusMessage('YOUR REQUEST HAS BEEN ENCRYPTED AND TRANSMITTED.');
        setFormData({
          name: '',
          email: '',
          company: '',
          preferredDateTime: '',
          agenda: ''
        });
        setSelectedDate(null);
        setSelectedHour("10");
        setSelectedMinute("00");
        setSelectedPeriod("AM");
        setTimeout(() => {
          onClose();
          setStatusMessage('');
        }, 2200);
      } else {
        const errorData = await response.json();
        setStatusMessage(errorData.message || 'TRANSMISSION FAILED. TRY AGAIN.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setStatusMessage('TRANSMISSION ERROR. UNABLE TO ESTABLISH CONNECTION.');
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
        className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop Close Capture */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

        <motion.div
          ref={modalRef}
          className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] p-6 md:p-8 flex flex-col h-auto max-h-[90vh] overflow-y-auto z-10"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Top accent glow line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute right-4 top-4 text-slate-500 hover:text-cyan-400 font-mono text-sm transition-colors focus:outline-none select-none z-20"
          >
            ✕
          </button>

          {/* Header block */}
          <div className="text-left select-none">
            <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase">
              Book a Meeting
            </h2>
            <p className="text-slate-400 font-mono text-xs md:text-sm mt-2">
              &gt; Schedule a direct tech consultation session
            </p>
          </div>

          {/* Input Fields Form container */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-8">
            
            {/* Row 1: Full Name */}
            <div className="text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Full Name *
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

            {/* Row 1: Email Address */}
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

            {/* Row 2: Company/Organization */}
            <div className="text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Company/Organization
              </label>
              <input 
                type="text" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono" 
                placeholder="Your Org" 
              />
            </div>

            {/* Row 2: Custom Preferred Date & Time Selector Trigger */}
            {/* Dynamic padding forces scroll capability inside the overflow-y-auto modal */}
            <div className={`text-left relative transition-all duration-300 ${calendarOpen ? 'pb-[260px] md:pb-[200px]' : ''}`}>
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Preferred Date & Time *
              </label>
              
              <div 
                onClick={() => setCalendarOpen(!calendarOpen)}
                className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono cursor-pointer flex justify-between items-center select-none"
              >
                <span className={formData.preferredDateTime ? 'text-slate-300 font-bold' : 'text-slate-500'}>
                  {formData.preferredDateTime ? formData.preferredDateTime : 'Select Date & Time'}
                </span>
                <span className="text-cyan-400 text-xs font-mono font-bold tracking-widest hover:text-white transition-colors">
                  {calendarOpen ? '[ CLOSE ]' : '[ SELECT ]'}
                </span>
              </div>

              {/* Custom Datepicker Absolute Overlay (Doesn't clip thanks to dynamic padding above) */}
              {calendarOpen && (
                <>
                  {/* Local backdrop close trap */}
                  <div className="fixed inset-0 z-40" onClick={() => setCalendarOpen(false)} />
                  
                  {/* Calendar interface container */}
                  <div className="absolute left-0 right-0 mt-2 bg-slate-950 border border-slate-800 rounded-lg p-4 shadow-2xl z-50 text-slate-300 select-none">
                    
                    {/* Header Month / Year controls */}
                    <div className="flex justify-between items-center mb-3">
                      <button 
                        type="button" 
                        onClick={prevMonth} 
                        className="text-cyan-400 hover:text-white px-2 py-0.5 font-bold font-mono text-xs focus:outline-none"
                      >
                        &lt;&lt;
                      </button>
                      <span className="font-mono text-xs uppercase tracking-wider font-bold select-none text-white">
                        {months[currentMonth]} {currentYear}
                      </span>
                      <button 
                        type="button" 
                        onClick={nextMonth} 
                        className="text-cyan-400 hover:text-white px-2 py-0.5 font-bold font-mono text-xs focus:outline-none"
                      >
                        &gt;&gt;
                      </button>
                    </div>

                    {/* Weekday indicators */}
                    <div className="grid grid-cols-7 gap-1 text-center font-mono text-[9px] text-slate-500 mb-2 select-none">
                      <span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span>
                    </div>

                    {/* Days matrix grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: firstDayIndex }).map((_, idx) => (
                        <span key={`empty-${idx}`} />
                      ))}
                      {Array.from({ length: totalDays }).map((_, idx) => {
                        const day = idx + 1;
                        const isSelected = selectedDate && 
                                           selectedDate.getDate() === day && 
                                           selectedDate.getMonth() === currentMonth && 
                                           selectedDate.getFullYear() === currentYear;
                        return (
                          <button
                            key={`day-${day}`}
                            type="button"
                            onClick={() => handleDateSelect(day)}
                            className={`p-1.5 font-mono text-xs rounded transition-all focus:outline-none ${
                              isSelected 
                                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(6,182,212,0.45)]'
                                : 'hover:bg-cyan-500/10 text-slate-400 hover:text-white'
                            }`}
                          >
                            {day.toString().padStart(2, '0')}
                          </button>
                        );
                      })}
                    </div>

                    {/* Time Selector Dropdowns */}
                    <div className="border-t border-slate-900 mt-4 pt-3 text-left">
                      <div className="text-[9px] font-mono text-slate-500 mb-2 uppercase tracking-wider select-none">
                        Configure Time
                      </div>
                      
                      <div className="flex gap-2">
                        {/* Hour Dropdown */}
                        <div className="flex-1 flex flex-col">
                          <label className="text-[8px] font-mono text-slate-600 mb-1 uppercase">Hour</label>
                          <select 
                            value={selectedHour}
                            onChange={(e) => handleHourChange(e.target.value)}
                            className="w-full bg-black border border-slate-800 rounded px-2 py-1.5 font-mono text-[11px] text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer"
                          >
                            {Array.from({ length: 12 }).map((_, i) => {
                              const val = (i + 1).toString().padStart(2, '0');
                              return <option key={val} value={val} className="bg-slate-950 text-slate-300">{val}</option>;
                            })}
                          </select>
                        </div>

                        {/* Minute Dropdown */}
                        <div className="flex-1 flex flex-col">
                          <label className="text-[8px] font-mono text-slate-600 mb-1 uppercase">Minute</label>
                          <select
                            value={selectedMinute}
                            onChange={(e) => handleMinuteChange(e.target.value)}
                            className="w-full bg-black border border-slate-800 rounded px-2 py-1.5 font-mono text-[11px] text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer"
                          >
                            {Array.from({ length: 12 }).map((_, i) => {
                              const val = (i * 5).toString().padStart(2, '0');
                              return <option key={val} value={val} className="bg-slate-950 text-slate-300">{val}</option>;
                            })}
                          </select>
                        </div>

                        {/* Period Dropdown */}
                        <div className="flex-1 flex flex-col">
                          <label className="text-[8px] font-mono text-slate-600 mb-1 uppercase">Period</label>
                          <select
                            value={selectedPeriod}
                            onChange={(e) => handlePeriodChange(e.target.value)}
                            className="w-full bg-black border border-slate-800 rounded px-2 py-1.5 font-mono text-[11px] text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer"
                          >
                            <option value="AM" className="bg-slate-950 text-slate-300">AM</option>
                            <option value="PM" className="bg-slate-950 text-slate-300">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>

            {/* Row 3: Meeting Agenda */}
            <div className="col-span-1 md:col-span-2 text-left">
              <label className="block text-slate-400 font-mono text-xs uppercase tracking-wider mb-2 select-none">
                Meeting Agenda *
              </label>
              <textarea 
                name="agenda" 
                value={formData.agenda} 
                onChange={handleChange} 
                required 
                rows={3} 
                className="w-full bg-black/50 border border-slate-800 rounded-md px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all font-mono resize-none leading-relaxed" 
                placeholder="Please describe targets, questions, and project parameters..." 
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

            <p className="col-span-1 md:col-span-2 text-slate-500 text-xs text-center font-mono select-none mt-2">
              Note: Calendar dispatch coordinates will be issued within 24 hours.
            </p>

          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}