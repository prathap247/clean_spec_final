import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed right-4 bottom-[168px] z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors group flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          
          {/* Hover text bubble */}
          <div className="absolute right-full mr-4 px-3 py-2 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm pointer-events-none">
            <span className="font-medium">Back to Top</span>
            {/* Arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;