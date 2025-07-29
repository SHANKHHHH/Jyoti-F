import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import logo from '../assets/Logo.png';

const navItems = [
  { label: "PRODUCTS", anchor: "products" },
  { label: "EN", anchor: "#" },
  { label: "SIGN IN", anchor: "#" },
  { label: "CART", anchor: "#" },
  { label: "ABOUT", anchor: "about" },
  { label: "CONTACT US", anchor: "contact" }
];

const mobileItems = [
  { label: 'HOME', anchor: 'home' },
  { label: 'ABOUT US', anchor: 'about' },
  { label: 'OUR SERVICES', anchor: 'services' },
  { label: 'DESTINATIONS', anchor: 'destinations' },
  { label: 'BLOGS', anchor: 'blog' },
  { label: 'CONTACT US', anchor: 'contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center">
        {/* Logo + Search */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Jyoti Logo" className="h-10 sm:h-12 w-auto object-contain" />
          {/* Search bar only visible on md+ */}
          <div className="relative hidden md:flex items-center bg-[#DADBDF] border border-gray-400 rounded-full px-4 py-2 w-64 lg:w-96">
            <Search className="text-gray-600 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search your trips, destinations..."
              className="bg-transparent outline-none w-full text-sm placeholder-gray-600"
            />
          </div>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.anchor)}
              className="text-gray-800 hover:text-amber-500 font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        {/* Mobile nav toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-2">
          {mobileItems.map((item, idx) => (
            <button key={idx}
              onClick={() => scrollToSection(item.anchor)}
              className="text-gray-800 hover:text-amber-500 text-base font-medium py-2 transition-colors text-left">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
