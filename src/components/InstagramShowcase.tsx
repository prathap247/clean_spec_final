import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Bhuvanesh',
    car: 'Hunter 350',
    image: 'https://imgs.search.brave.com/dItk2dkEMFEc8o7BBjTNTN_5wmmKIDJ9tBqAxOqq3iA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95b3Vu/Zy1zbWlsaW5nLXNv/dXRoLWluZGlhbi10/YW1pbC1tYW4tbG9u/Zy1oYWlycy1iZWFy/ZC13ZWFyaW5nLWZ1/bGwtc2xlZXZlcy1o/dWdnaW5nLWhpbXNl/bGYtb25lc2VsZi1z/ZWxmLWNhcmUtd2hp/dGUtMjE5MDIzODI1/LmpwZw',
    content: 'I recently got PPF done for my Hunter 350 at Clean Spec Automotive, and I couldn’t be happier with the results. The team was professional, detail-oriented, and clearly passionate about what they do. The finish is absolutely flawless '
  },
  {
    name: 'Gayathrie',
    car: 'Thar',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    content: 'My car is black color which got faded in this 3 and half years. They suggested me to opt for ceramic polish which restored the color and the finish was more than I expected. Thank you so much Clean spec and team.'
  },
  {
    name: 'Karthik Raman',
    car: 'Honda City',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
    content: 'Recently did ceramic protection and carpro sunflim from cleanspec. Totally satisfied with the work and strongly recommend to others. Sasi and his team are true professionals in all kind of detailing works. Keep up the good work cleanspec.'
  },
  {
    name: 'Prathap D',
    car: 'Toyota Fortuner',
    image: 'https://imgs.search.brave.com/k4CFTW0BIPAt_SS5tA9qD-BHNvkUfJ4AiFXN5PmfR7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/MjQ0ODc4MC9waG90/by9jYW5kaWQtcG9y/dHJhaXQtb2YtZWFy/bHktMzBzLWluZGlh/bi1tYW4tc3RhbmRp/bmctb3V0ZG9vcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PURLNEF2NmRrYmlT/LWtvTGtCT0s0dnY4/Smg0eV9LdEhSWGE0/NVE5N1JDUW89',
    content: 'I recently visited Clean Spec Automotive for a regular car wash and wax, inspired by the positive videos and customer feedback Id seen. From the moment I walked in, I felt I had made the right choice. I had a consultation with Mr. Bhuvnesh, who provided a detailed explanation of its current condition.'
  },
   {
    name: 'Jaise Paul',
    car: 'Kia Seltos',
    image: 'https://imgs.search.brave.com/df7klZxU8R8A0-We3vpMORMyO5GM5UMjg8EVevBAKig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dHlsaXNoLWluZGlh/bi1iZWFyZC1tb2Rl/bC1tYW4tY2FzdWFs/LWNsb3RoZXMtcG9z/ZWQtb3V0ZG9vci1z/dHJlZXQtaW5kaWFf/NjI3ODI5LTEyOTUz/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA',
    content: 'One of the best car detailing and wash available nearby. Service was completely professional and the one who runs this knows each and every detail of the product they use. They take 100% responsibility for the car once it enters their garage unlike other places. This place also has free pick up and delivery. Amazing service team '
  },
  {
    name: 'Edwin Lobo',
    car: 'Shift',
    image: 'https://imgs.search.brave.com/2zh6ymQrg5jXV4FZ_a-R5q0jlA3k6R_OEHAL1DvcsdY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzk2Lzg2LzUw/LzM2MF9GXzc5Njg2/NTA0MF9zbTR3WnhR/ekhZQ2JBQWR4aTR2/TzJkYzFHTWQ5UGhk/WC5qcGc',
    content: 'Honestly guys this one is the BEST Detailing Studio in chennai Thanks a lot to CLEAN SPEC AUTOMOTIVE The perfect place for the best treatment to your vehicle 🏍️ 🚗 Simply awsome and widely recommend for all moto and car enthusiasts they are very professional and wonderful team work'
  }
];

const instagramPhotos = [
  {
    url: '/insta2.jpeg',
    // description: 'Porsche GT3 RS Paint Protection'
  },
  {
    url: '/insta1.JPG',
    // description: 'Mercedes AMG Ceramic Coating'
  },
  {
    url: '/insta3.jpeg',
    // description: 'BMW M4 Full Detail'
  },
  {
    url: '/insta4.jpeg',
    // description: 'Audi RS6 Graphene Coating'
  },
  {
    url: '/thar.JPEG',
    // description: 'Lamborghini Paint Correction'
  },
  {
    url: '/insta5.png',
    // description: 'Ferrari Interior Detail'
  }
];

const InstagramShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling || isDragging) return;

    let animationFrameId: number;
    let startTime: number;
    const duration = 60000; // 30 seconds for one complete cycle
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      
      if (scrollContainer && isAutoScrolling && !isDragging) {
        scrollContainer.scrollLeft = progress * totalWidth;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAutoScrolling, isDragging]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 1000); // Resume auto-scroll after 2 seconds
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 1000); // Resume auto-scroll after 2 seconds
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsAutoScrolling(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white mb-8 text-center font-display">
            CUSTOMER TESTIMONIALS
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide touch-pan-x"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="inline-flex space-x-4 sm:space-x-6 px-4 sm:px-32 py-4">
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-accent p-4 sm:p-6 rounded-lg w-[280px] sm:w-[350px] flex-shrink-0"
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-white/70 text-xs sm:text-sm">{testimonial.car}</div>
                      </div>
                    </div>
                    <p className="text-white/80 italic text-sm sm:text-base line-clamp-4 sm:line-clamp-none">"{testimonial.content}"</p>
                    <div className="flex text-primary mt-2 sm:mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-display"
          >
            <div className="text-white">MAKE SURE THE NEXT PHOTO IS</div>
            <div className="text-primary mt-2 mb-2">YOUR CAR</div>
            <div className="text-white">FOLLOW US ON INSTAGRAM</div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto mt-4 sm:mt-6"
          >
            Stay updated with our latest projects and transformations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent px-4 sm:px-6 py-2 rounded-full mt-4"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-white font-semibold text-sm sm:text-base">@clean_spec_detailing_studio</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPhotos.map((photo, index) => (
            <motion.a
              key={photo.url}
              href="https://www.instagram.com/clean_spec_detailing_studio/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs sm:text-sm">{photo.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="https://www.instagram.com/clean_spec_detailing_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Visit Our Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramShowcase;