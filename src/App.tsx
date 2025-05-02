import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';  // Keep this import
import SocialButtons from './components/SocialButtons';  // Keep this import

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const PaintProtection = lazy(() => import('./pages/services/PaintProtection'));
const CeramicCoating = lazy(() => import('./pages/services/CeramicCoating'));
const GrapheneCoating = lazy(() => import('./pages/services/GrapheneCoating'));
const CarWash = lazy(() => import('./pages/services/CarWash'));
const Detailing = lazy(() => import('./pages/services/Detailing'));
const Custom = lazy(() => import('./pages/services/Custom'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/ppf" element={<PaintProtection />} />
            <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
            <Route path="/services/graphene-coating" element={<GrapheneCoating />} />
            <Route path="/services/car-wash" element={<CarWash />} />
            <Route path="/services/detailing" element={<Detailing />} />
            <Route path="/services/custom" element={<Custom />} />
          </Routes>
        </Suspense>
        <Footer />
        
        {/* Move BackToTop above SocialButtons */}
        <BackToTop />
        <SocialButtons />
      </div>
    </Router>
  );
}

export default App;
