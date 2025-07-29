import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-loaded sections
const Hero = lazy(() => import('./sections/Hero'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const WhatOffer = lazy(() => import('./sections/WhatOffer'));
// Add more lazy imports for sections as you create them

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Hero />
          <AboutSection />
          <WhatOffer />
          {/* Add more sections here as needed */}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
