import { useState, useEffect, FormEvent } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useCart } from '../contexts/CartContext';

const navItems = [
  { label: "PRODUCTS", anchor: "/products", icon: null },
  { label: "EN", anchor: "#", icon: null },
  { label: "SIGN IN", anchor: "/signin", icon: User },
  { label: "CART", anchor: "/cart", icon: ShoppingCart },
  { label: "ABOUT", anchor: "/about", icon: null },
  { label: "CONTACT", anchor: "/contact", icon: null }
];

const mobileItems = [
  { label: 'HOME', anchor: 'home' },
  { label: 'PRODUCTS', anchor: '/products' },
  { label: 'ABOUT US', anchor: '/about' },
  { label: 'SIGN IN', anchor: '/signin' },
  { label: 'CART', anchor: '/cart' },
  { label: 'CONTACT', anchor: '/contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { cart } = useCart();

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

  // Handle form submission for search (works on Enter and on icon click)
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Jyoti Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Search & Nav */}
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
            {navItems.map((item) => {
              if (item.label === "CART") {
                return (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.anchor)}
                    className={`relative flex items-center gap-1 font-semibold text-sm transition-colors ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    <span>{item.label}</span>
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5 text-white">
                        {cart.length}
                      </span>
                    )}
                  </button>
                );
              }
              // Special rendering for EN (language) with SVG flag
              if (item.label === "EN") {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.anchor)}
                    className={`flex items-center gap-2 hover:text-amber-500 font-semibold text-sm transition-colors ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Inline SVG Indian Flag */}
                    <span className="inline-block align-middle">
                      <svg width="19" height="13" viewBox="0 0 19 13" fill="none">
                        <rect width="19" height="4.3" y="0" fill="#FF9933"/>
                        <rect width="19" height="4.3" y="4.3" fill="#fff"/>
                        <rect width="19" height="4.3" y="8.6" fill="#138808"/>
                        {/* Ashoka Chakra */}
                        <circle cx="9.5" cy="6.5" r="1.0" fill="none" stroke="#000088" strokeWidth="1" />
                      </svg>
                    </span>
                  </button>
                );
              }
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.anchor)}
                  className={`flex items-center gap-1 hover:text-amber-500 font-semibold text-sm transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.icon && <item.icon size={16} className="hidden lg:inline-block" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-3 ${
            scrolled ? 'bg-white' : 'bg-[#2A2A2A]'
          }`}
        >
          {/* Mobile Search Bar */}
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
          {mobileItems.map((item) => (
            <button
              key={item.anchor}
              onClick={() => handleNavClick(item.anchor)}
              className={`flex items-center gap-2 text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
