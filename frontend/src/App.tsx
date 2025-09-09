import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './pages/ScrollToTop';

import CarrersPage from './pages/CarrersPage';
import BlogPage from './pages/BlogPage';


// All the lazy imports remain the same
const Hero = lazy(() => import('./pages/homepage/Hero'));
const AboutSection = lazy(() => import('./pages/homepage/AboutSection'));
const BookForAnEvent = lazy(() => import('./pages/homepage/BookForAnEvent'));
const BackBookNow = lazy(() => import('./pages/homepage/BackBookNow'));
const WhatOffer = lazy(() => import('./pages/homepage/WhatWeOffer'));
const SignIn = lazy(() => import('./pages/SignInPage'));
const SignUp = lazy(() => import('./pages/SignUpPage'));
const ProductsPage = lazy(() => import('./pages/Products'));
const CartPage = lazy(() => import('./pages/Cart'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const IconSection = lazy(() => import('./pages/homepage/icon'));

// Booking flow components
const EventSelectionPage = lazy(() => import('./pages/Booking/EventSelectionPage'));
const ServiceSelectionPage = lazy(() => import('./pages/Booking/ServiceSelectionPage'));
const IntroductionPage = lazy(() => import('./pages/Booking/IntroductionPage'));
const CheckOut = lazy(() => import('./pages/Booking/CheckOut'));

// We create a new component to contain all the homepage sections
function HomePage() {
  return (
    <>
      <Hero />
      <IconSection />
      <BackBookNow />
      <AboutSection />
      <WhatOffer />
      <BookForAnEvent />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = ['/signin', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            {/* THIS IS THE KEY CHANGE: */}
            {/* The root route (/) now shows the AboutPage */}
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* The original landing page is moved to the /home route */}
            <Route path="/home" element={<HomePage />} />
            
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* New booking flow routes */}
            <Route path="/event-selection" element={<EventSelectionPage />} />
            <Route path="/service-selection" element={<ServiceSelectionPage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/careers" element={<CarrersPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Suspense>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;