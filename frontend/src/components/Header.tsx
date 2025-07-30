import { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

const navItems = [
  { label: "PRODUCTS", anchor: "products", icon: null },
  { label: "EN", anchor: "#", icon: ChevronDown },
  { label: "SIGN IN", anchor: "/signin", icon: User },
  { label: "CART", anchor: "cart", icon: ShoppingCart },
  { label: "ABOUT", anchor: "about", icon: null },
  { label: "CONTACT", anchor: "contact", icon: null }
];

const mobileItems = [
  { label: 'HOME', anchor: 'home' },
  { label: 'PRODUCTS', anchor: 'products' },
  { label: 'ABOUT US', anchor: 'about' },
  { label: 'CONTACT US', anchor: 'contact' },
  { label: 'SIGN IN', anchor: '/signin' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
          <div
            className={`relative flex items-center rounded-full px-4 py-2 w-64 lg:w-80 transition-colors ${
              scrolled ? 'bg-gray-100' : 'bg-white/90'
            }`}
          >
            <Search className="text-gray-500 mr-3" size={18} />
            <input
              type="text"
              placeholder="Search for products"
              className="bg-transparent outline-none w-full text-sm text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* Nav */}
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.anchor)}
                className={`flex items-center gap-1 hover:text-amber-500 font-semibold text-sm transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.icon && <item.icon size={16} className="hidden lg:inline-block" />}
                <span>{item.label}</span>
                {item.label === 'EN' && <ChevronDown size={16} />}
              </button>
            ))}
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
          className={`md:hidden shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-2 ${
            scrolled ? 'bg-white' : 'bg-[#2A2A2A]'
          }`}
        >
          {mobileItems.map((item) => (
            <button
              key={item.anchor}
              onClick={() => handleNavClick(item.anchor)}
              className={`text-base font-medium py-2 transition-colors text-left hover:text-amber-500 ${
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
