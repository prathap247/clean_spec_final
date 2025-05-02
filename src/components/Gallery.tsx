import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80',
    title: 'Paint Protection Film',
    category: 'Paint Protection Film'
  },
  {
    url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80',
    title: 'Ceramic Coating',
    category: 'Ceramic Coating'
  },
  {
    url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80',
    title: 'Graphene Coating',
    category: 'Graphene Coating'
  },
  {
    url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80',
    title: 'Car Wash',
    category: 'Car Wash'
  },
  {
    url: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&q=80',
    title: 'Interior Care',
    category: 'Interior Care'
  },
  {
    url: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80',
    title: 'Custom Services',
    category: 'Custom Services'
  }
];

const Gallery = () => {
  return (
    <section className="py-12 grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-3 sm:mb-4 font-display"
          >
            OUR WORK
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/70"
          >
            Browse through our portfolio of pristine detailing work
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {images.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-video"
            >
              <Link to={`/gallery?category=${encodeURIComponent(image.category)}`}>
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white font-display text-lg sm:text-xl">{image.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors group"
          >
            <span className="font-semibold">View All Works</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;