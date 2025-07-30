import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const Hero = lazy(() => import('./pages/homepage/Hero'));
const AboutSection = lazy(() => import('./pages/homepage/AboutSection'));
const BookForAnEvent = lazy(() => import('./pages/homepage/BookForAnEvent'));
const WhatOffer = lazy(() => import('./pages/homepage/WhatWeOffer'));
const SignIn = lazy(() => import('./pages/SignInPage'));
const SignUp = lazy(() => import('./pages/SignUpPage'));

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
                  <AboutSection />
                  <BookForAnEvent />
                  <WhatOffer />
                </>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
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
      <AppContent />
    </Router>
  );
}

export default App;