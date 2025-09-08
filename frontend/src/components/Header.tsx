import { useState, useEffect, FormEvent } from 'react';
import { Menu, X, Search, User, ShoppingCart, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

// We update the routes to reflect the new structure:
// The 'ABOUT' page is now at the root '/', and the main landing page is at '/home'.

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { cart } = useCart();
  const { isAuthenticated, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor: string) => {
    if (anchor.startsWith('/')) {
      navigate(anchor);
    } else if (anchor !== '#') {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    if (searchTerm.trim().length > 0) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-black/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - This is now a clickable button */}
        <button
          onClick={() => navigate('/home')}
          className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md"
        >
          <img 
            src={logo} 
            alt="Jyoti Logo" 
            className="h-12 w-auto transition-all duration-300"
            style={{
              filter: scrolled 
                ? undefined 
                : 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
            }}
          />
        </button>

        {/* Desktop Search & Nav - This is all your original code */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Search */}
          <form
            onSubmit={handleSearchSubmit}
            className={`relative flex items-center rounded-full px-4 py-2 w-64 lg:w-80 transition-colors ${
              scrolled ? 'bg-gray-100' : 'bg-white/90'
            }`}
          >
            <Search className="text-gray-500 mr-3 cursor-pointer" size={18} onClick={handleSearchSubmit} />
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none w-full text-sm text-gray-800 placeholder-gray-500"
            />
          </form>
          
          {/* Nav */}
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {/* PRODUCTS */}
            <button
              onClick={() => navigate('/products')}
              className={`flex items-center gap-1 hover:text-amber-500 font-semibold text-sm transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span>PRODUCTS</span>
            </button>

            {/* CART */}
            <button
              onClick={() => navigate('/cart')}
              className={`relative flex items-center gap-1 font-semibold text-sm transition-colors hover:text-amber-500 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <ShoppingCart size={18} />
              <span>CART</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5 text-white">
                  {cart.length}
                </span>
              )}
            </button>

            {/* ABOUT */}
            <button
              onClick={() => navigate('/')}
              className={`flex items-center gap-1 hover:text-amber-500 font-semibold text-sm transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span>ABOUT</span>
            </button>

            {/* CONTACT */}
            <button
              onClick={() => navigate('/contact')}
              className={`flex items-center gap-1 hover:text-amber-500 font-semibold text-sm transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span>CONTACT</span>
            </button>

            {/* SIGN IN / SIGN OUT */}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  signOut();
                  navigate('/');
                }}
                className={`flex items-center gap-1 hover:text-amber-500 font-semibold text-sm transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <LogOut size={16} className="hidden lg:inline-block" />
                <span>SIGN OUT</span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/signin')}
                className={`flex items-center gap-1 hover:text-amber-500 font-semibold text-sm transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <User size={16} className="hidden lg:inline-block" />
                <span>SIGN IN</span>
              </button>
            )}
          </nav>
        </div>

        {/* Mobile Nav Toggle - This is all your original code */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - This is all your original code */}
      {isOpen && (
        <div
          className={`md:hidden shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-3 ${
            scrolled ? 'bg-white' : 'bg-black/80 backdrop-blur-sm'
          }`}
        >
          <form
            onSubmit={handleSearchSubmit}
            className={`flex items-center rounded-full px-4 py-2 w-full mb-3 transition-colors ${
              scrolled ? 'bg-gray-100' : 'bg-white/90'
            }`}
          >
            <Search className="text-gray-500 mr-3 cursor-pointer" size={18} onClick={handleSearchSubmit} />
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none w-full text-sm text-gray-800 placeholder-gray-500"
            />
          </form>
          {/* HOME */}
          <button
            onClick={() => handleNavClick('/home')}
            className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            HOME
          </button>

          {/* PRODUCTS */}
          <button
            onClick={() => handleNavClick('/products')}
            className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            PRODUCTS
          </button>

          {/* ABOUT US */}
          <button
            onClick={() => handleNavClick('/')}
            className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            ABOUT US
          </button>

          {/* CART */}
          <button
            onClick={() => handleNavClick('/cart')}
            className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            CART
          </button>

          {/* CONTACT */}
          <button
            onClick={() => handleNavClick('/contact')}
            className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            CONTACT
          </button>

          {/* SIGN IN / SIGN OUT */}
          {isAuthenticated ? (
            <button
              onClick={() => {
                signOut();
                navigate('/');
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              onClick={() => handleNavClick('/signin')}
              className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              SIGN IN
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;