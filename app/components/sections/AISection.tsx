'use client';

import { useState, useEffect, useRef } from 'react';
import { aiProjects } from '../../lib/data';

export default function AISection() {
  const [terminalState, setTerminalState] = useState<'idle' | 'booting' | 'ready'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal viewport to bottom as logs print during booting, reset on ready
  useEffect(() => {
    if (terminalRef.current) {
      if (terminalState === 'booting') {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      } else if (terminalState === 'ready') {
        terminalRef.current.scrollTop = 0;
      }
    }
  }, [logs, terminalState]);

  const executeBootSequence = () => {
    if (terminalState === 'booting') return;
    
    setTerminalState('booting');
    setLogs([]);
    setExpandedId(null);

    const bootLines = [
      "> Initializing Zyrodev AI Subsystems...",
      "> Loading TensorFlow modules... [OK]",
      "> Allocating GPU memory... [OK]",
      "> Training Epoch 12/50... Loss: 0.14",
      "> Training Epoch 50/50... Loss: 0.01",
      "> Neural network converged.",
      "> Fetching AI Solutions..."
    ];

    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, line]);
        if (index === bootLines.length - 1) {
          setTimeout(() => {
            setTerminalState('ready');
          }, 400);
        }
      }, index * 300);
    });
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-slate-900 to-black overflow-visible relative border-t border-slate-900/60"
      id="ai-ml"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">AI & Machine Learning</h2>
          <p className="text-slate-400 max-w-2xl text-center text-lg">
            Harnessing the power of artificial intelligence to solve complex problems. From machine learning models to intelligent automation, we bring AI to life.
          </p>
        </div>

        {/* Split Layout: w-full max-w-7xl flex flex-col md:flex-row-reverse gap-8 */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-8 px-6 justify-between items-stretch">
          
          {/* Right/Top Side: Trigger Executive Button + Helper Text */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            <button
              onClick={executeBootSequence}
              disabled={terminalState === 'booting'}
              className={`w-full text-center border border-cyan-500 bg-cyan-950/20 text-cyan-400 font-mono text-xl md:text-3xl px-8 py-8 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all cursor-pointer rounded-xl select-none ${
                terminalState === 'booting' ? 'opacity-50 cursor-not-allowed border-slate-700 text-slate-500 bg-slate-950/10' : ''
              }`}
            >
              {terminalState === 'booting' ? '[ BOOTING_AI... ]' : '[ ./EXECUTE_AI.sh ]'}
            </button>
            <div className="text-xs md:text-sm text-cyan-500/50 mt-6 animate-pulse font-mono tracking-widest text-center select-none">
              &gt; CLICK TO INITIALIZE SEQUENCE
            </div>
          </div>

          {/* Left/Bottom Side: Terminal Console Window */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Terminal Window Header chrome */}
            <div className="bg-slate-900 border border-slate-800 border-b-0 rounded-t-xl px-4 py-3 flex items-center gap-2 select-none">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-slate-500 text-xs font-mono ml-4">zyrodev_ai_diagnostics.sh</span>
            </div>

            {/* Terminal Viewport */}
            <div 
              ref={terminalRef}
              style={{ WebkitOverflowScrolling: 'touch' }}
              className="h-[220px] sm:h-[300px] md:h-[400px] bg-black border border-slate-800 rounded-b-xl p-4 md:p-6 font-mono text-xs md:text-sm overflow-y-auto overscroll-y-contain relative shadow-[inset_0_0_20px_rgba(0,0,0,1)] text-left hide-scrollbar"
            >
              
              {/* State 1: IDLE */}
              {terminalState === 'idle' && (
                <div className="text-cyan-400 flex items-center h-full pb-10">
                  <span className="mr-2">root@zyrodev:~$</span>
                  <span className="inline-block w-2.5 h-5 bg-white animate-blink" />
                </div>
              )}

              {/* State 2: BOOTING */}
              {terminalState === 'booting' && (
                <div className="flex flex-col space-y-2 text-slate-400">
                  {logs.map((log, idx) => (
                    <div key={idx} className="transition-opacity duration-300">{log}</div>
                  ))}
                  <div className="flex items-center">
                    <span className="inline-block w-2.5 h-5 bg-slate-400 animate-blink" />
                  </div>
                </div>
              )}

              {/* State 3: DECRYPTED READY DIRECTORY */}
              {terminalState === 'ready' && (
                <div className="flex flex-col space-y-4">
                  <div className="text-slate-500">root@zyrodev:~$ ./list_ai_projects.sh</div>
                  <div className="text-cyan-400 font-bold mt-2 select-none">
                    &gt; --- AI & ML SOLUTIONS DIRECTORY ---
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    {aiProjects.map((project) => (
                      <div key={project.id} className="flex flex-col text-left">
                        <div
                          onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                          className="text-cyan-400 cursor-pointer hover:text-white text-base flex items-center gap-1.5 transition-colors select-none font-bold font-mono"
                        >
                          &gt; ./view_project.sh {project.title}
                        </div>
                        
                        {expandedId === project.id && (
                          <div className="text-slate-400 pl-4 py-2 border-l border-cyan-500/30 ml-2 mt-2 mb-4 font-mono text-sm leading-relaxed max-w-3xl">
                            {project.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}