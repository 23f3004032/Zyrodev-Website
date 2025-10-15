'use client';

import { useRef, useEffect, useState } from 'react';

interface PhoneMockupProps {
  videoUrl: string;
}

export default function PhoneMockup({ videoUrl }: PhoneMockupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Ensure video plays when loaded
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, [videoUrl]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[570px] bg-gradient-to-br from-gray-900 to-black rounded-[50px] shadow-2xl p-3 border-4 border-gray-800">
        {/* Camera Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
          <div className="w-12 h-1.5 bg-gray-800 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
        </div>

        {/* Screen */}
        <div className="relative w-full h-full bg-black rounded-[42px] overflow-hidden">
          {/* Video Player */}
          <video
            ref={videoRef}
            key={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Loading State */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                <p className="text-gray-400 text-sm">Loading video...</p>
              </div>
            </div>
          )}

          {/* Screen Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Power Button */}
        <div className="absolute -right-1 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>

        {/* Volume Buttons */}
        <div className="absolute -left-1 top-28 w-1 h-8 bg-gray-800 rounded-r"></div>
        <div className="absolute -left-1 top-40 w-1 h-8 bg-gray-800 rounded-r"></div>

        {/* Bottom Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
      </div>

      {/* Phone Shadow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-cyan-500/20"></div>
    </div>
  );
}