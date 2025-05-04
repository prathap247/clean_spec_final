import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80', title: 'BMW M4' },
  { url: 'https://images.unsplash.com/photo-1571607387031-67e219bc5e5e?auto=format&fit=crop&w=800&q=80', title: 'Mercedes-Benz AMG' },
  { url: 'https://images.unsplash.com/photo-1600180758890-6eca1e22f771?auto=format&fit=crop&w=800&q=80', title: 'Audi R8' },
  { url: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80', title: 'Chevrolet Camaro' },
  { url: 'https://images.unsplash.com/photo-1612531861316-4c33380a9e9b?auto=format&fit=crop&w=800&q=80', title: 'Dodge Challenger' },
  { url: 'https://images.unsplash.com/photo-1597009511667-41535985b5d4?auto=format&fit=crop&w=800&q=80', title: 'Lamborghini Huracán' },
  { url: 'https://images.unsplash.com/photo-1583267745769-021d572a964b?auto=format&fit=crop&w=800&q=80', title: 'Tesla Model S' },
  { url: 'https://images.unsplash.com/photo-1617301134739-45b0941cc1d1?auto=format&fit=crop&w=800&q=80', title: 'Porsche 911' },
  { url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80', title: 'Ford Mustang' },
  { url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80', title: 'Jeep Wrangler' },
  { url: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80', title: 'Range Rover Sport' },
  { url: 'https://images.unsplash.com/photo-1617082362018-9f71cdee08a2?auto=format&fit=crop&w=800&q=80', title: 'Toyota Supra' },
  { url: 'https://images.unsplash.com/photo-1616676524556-b1c964f6399f?auto=format&fit=crop&w=800&q=80', title: 'Nissan GT-R' },
  { url: 'https://images.unsplash.com/photo-1611967164524-0b1f216a19d0?auto=format&fit=crop&w=800&q=80', title: 'Aston Martin DB11' },
  { url: 'https://images.unsplash.com/photo-1558981003-b918f312dfcd?auto=format&fit=crop&w=800&q=80', title: 'Ferrari 488' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      {/* Gallery Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0">
          <div className="grid-pattern w-full h-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, idx) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
                  idx % 5 === 0 ? 'col-span-2 row-span-2' : 'aspect-square'
                }`}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-xl font-display">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎥 Video Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-12 text-center">
            Featured Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Local Video */}
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <video
                src="/sample-video.mp4" // ⬅ Replace with your video filename in /public
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>

            {/* YouTube 1 */}
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* YouTube 2 */}
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
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
