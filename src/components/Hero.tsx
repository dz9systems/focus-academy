import React, { useEffect, useRef } from 'react';
export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // More robust video autoplay implementation
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          videoRef.current.muted = true; // Ensure muted (required for autoplay in most browsers)
          await videoRef.current.play();
          console.log('Video playing successfully');
        }
      } catch (error) {
        console.log('Autoplay prevented:', error);
        // Retry with user interaction listener as fallback
        const attemptPlayOnInteraction = () => {
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.log('Still cannot play:', e));
          }
          document.removeEventListener('click', attemptPlayOnInteraction);
          document.removeEventListener('touchstart', attemptPlayOnInteraction);
        };
        document.addEventListener('click', attemptPlayOnInteraction);
        document.addEventListener('touchstart', attemptPlayOnInteraction);
      }
    };
    playVideo();
    // Ensure video keeps playing if it stops for any reason
    const handleEnded = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(e => console.log('Could not restart video:', e));
      }
    };
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleEnded);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleEnded);
      }
      document.removeEventListener('click', () => {});
      document.removeEventListener('touchstart', () => {});
    };
  }, []);
  return <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} className="object-cover w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} poster="/Screenshot_2025-07-23_at_4.52.36_PM.png">
          {/* Using Firebase Storage URL directly */}
          <source src="https://firebasestorage.googleapis.com/v0/b/smart-lead-agent-9f41e.appspot.com/o/hero-section.mp4?alt=media&token=fa518e9f-72db-4816-8b4d-ae61d4374dd7" type="video/mp4" />
          {/* Fallback to image if video fails */}
          <img src="/Screenshot_2025-07-23_at_4.52.36_PM.png" alt="Modern innovation workspace" className="object-cover w-full h-full opacity-70" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            FOCUS ACADEMY
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Ideate. Engage. Impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105">
              LEARN MORE
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>;
};