import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Preload critical images
const preloadImages = [
  'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80',
  'https://wallpapers.com/images/hd/aesthetic-4k-car-smoky-tire-dl19uf0v57dgj1r9.jpg',
  'https://images.unsplash.com/photo-1514996552891-7b77679fad77?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?auto=format&fit=crop&q=80'
];

preloadImages.forEach(url => {
  const img = new Image();
  img.src = url;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);