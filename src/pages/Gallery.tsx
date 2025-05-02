import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    title: 'Paint Protection Film',
    category: 'Paint Protection Film'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    title: 'Ceramic Coating',
    category: 'Ceramic Coating'
  },
  {
    url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80',
    title: 'Graphene Coating',
    category: 'Graphene Coating'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
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

const categories = ['All', ...new Set(images.map(img => img.category))];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [filter, setFilter] = useState(categoryFromUrl || 'All');

  useEffect(() => {
    if (categoryFromUrl) {
      setFilter(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Filter the images based on the selected category
  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  const handleFilterChange = (category: string) => {
    setFilter(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image className="w-16 h-16 text-primary mb-4" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
                OUR GALLERY
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Showcasing our finest work in automotive detailing
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Grid Background */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0">
          <div className="grid-pattern w-full h-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {/* Category Filters */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-accent text-white/70 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render filtered images */}
            {filteredImages.map((image) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-video cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-display text-xl">{image.title}</h3>
                    <p className="text-white/70">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected work"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;