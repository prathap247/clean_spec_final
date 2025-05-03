import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Preload critical images
const preloadImages = [
  'https://imgs.search.brave.com/df7klZxU8R8A0-We3vpMORMyO5GM5UMjg8EVevBAKig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dHlsaXNoLWluZGlh/bi1iZWFyZC1tb2Rl/bC1tYW4tY2FzdWFs/LWNsb3RoZXMtcG9z/ZWQtb3V0ZG9vci1z/dHJlZXQtaW5kaWFf/NjI3ODI5LTEyOTUz/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA',
  // 'https://wallpapers.com/images/hd/aesthetic-4k-car-smoky-tire-dl19uf0v57dgj1r9.jpg',
  // 'https://images.unsplash.com/photo-1514996552891-7b77679fad77?auto=format&fit=crop&q=80',
  // 'https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?auto=format&fit=crop&q=80'
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