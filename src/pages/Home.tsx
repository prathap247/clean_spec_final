import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/Services';
import AboutPreview from '../components/About';
import GalleryPreview from '../components/Gallery';
import InstagramShowcase from '../components/InstagramShowcase';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="bg-secondary">
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <GalleryPreview />
      <InstagramShowcase />
      <Contact />
    </main>
  );
};

export default Home;