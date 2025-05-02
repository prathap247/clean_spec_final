import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  "/kia.JPEG",
  "/kiaa.JPEG",
  "/thar.JPEG",
  "/tharr.JPEG"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image}
            alt="Luxury car detailing"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

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

      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? 'w-6 sm:w-8 bg-primary' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;