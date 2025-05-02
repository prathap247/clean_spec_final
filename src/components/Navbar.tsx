import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Users, Wrench, Image, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', text: 'Home', icon: Car },
    { to: '/about', text: 'About', icon: Users },
    { to: '/services', text: 'Services', icon: Wrench },
    { to: '/gallery', text: 'Gallery', icon: Image },
    { to: '/contact', text: 'Contact', icon: Phone },
  ];

  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 15, transition: { duration: 0.2 } },
  };

  const underlineVariants = {
    initial: { width: "0%", left: "50%" },
    hover: { width: "100%", left: "0%", transition: { duration: 0.3 } },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.5 },
    hover: { opacity: 1, scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Car className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </motion.div>
            <motion.span 
              className="text-lg sm:text-2xl font-bold text-white font-display"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Clean Spec Automotive
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(({ to, text, icon: Icon }) => (
              <motion.div
                key={to}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredLink(to)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative"
              >
                <Link
                  to={to}
                  className="relative group flex flex-col items-center"
                >
                  <div className="flex items-center space-x-1 text-white group-hover:text-primary transition-colors duration-300 z-10">
                    <motion.div
                      variants={iconVariants}
                      className="relative"
                    >
                      <Icon className="h-4 w-4" />
                      {hoveredLink === to && (
                        <motion.div
                          className="absolute inset-0 bg-primary/20 blur-lg rounded-full"
                          variants={glowVariants}
                          initial="initial"
                          animate="hover"
                        />
                      )}
                    </motion.div>
                    <span className="font-semibold">{text}</span>
                  </div>
                  
                  {/* Animated Underline */}
                  <motion.div
                    className="absolute bottom-0 h-0.5 bg-primary"
                    variants={underlineVariants}
                    initial="initial"
                    animate={hoveredLink === to ? "hover" : "initial"}
                  />
                  
                  {/* Active Indicator */}
                  {location.pathname === to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                  
                  {/* Hover Glow Effect */}
                  <AnimatePresence>
                    {hoveredLink === to && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-primary/5 rounded-lg blur-xl -z-10"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm shadow-lg rounded-lg">
                {navLinks.map(({ to, text, icon: Icon }) => (
                  <motion.div
                    key={to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={to}
                      className={`text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-all duration-300 ${
                        location.pathname === to ? 'text-primary bg-white/5' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <span>{text}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;