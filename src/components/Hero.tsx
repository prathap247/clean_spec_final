import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure muted for autoplay
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <video
        ref={videoRef}
        src="/vid1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-primary mb-4 sm:mb-6"
            />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 font-display tracking-wider">
              WE ENHANCE
              <span className="text-primary block mt-2">WE PROTECT</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-3xl font-sans">
              It's not Just a carwash; It's a lifestyle...
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-none text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors group"
            >
              BOOK NOW
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
        aria-label="Toggle Mute"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default Hero;
