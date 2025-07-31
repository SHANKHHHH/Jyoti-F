import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext'; // <-- ADD

const Hero = lazy(() => import('./pages/homepage/Hero'));
const AboutSection = lazy(() => import('./pages/homepage/AboutSection'));
const BookForAnEvent = lazy(() => import('./pages/homepage/BookForAnEvent'));
const BackBookNow = lazy(() => import('./pages/homepage/BackBookNow'));
const WhatOffer = lazy(() => import('./pages/homepage/WhatWeOffer'));
const SignIn = lazy(() => import('./pages/SignInPage'));
const SignUp = lazy(() => import('./pages/SignUpPage'));
const ProductsPage = lazy(() => import('./pages/Products'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const CartPage = lazy(() => import('./pages/Cart')); // <-- Name matches your 'cart.tsx'
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = ['/signin', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <BackBookNow />
                  <AboutSection />
                  <BookForAnEvent />
                  <WhatOffer />
                </>
              }
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} /> {/* <-- CART ROUTE */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<AboutPage />} />
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
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
