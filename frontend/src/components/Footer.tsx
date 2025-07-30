import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

// Define a type for link items for better organization
type FooterLink = {
  label: string;
  href: string;
};

// Define link groups
const helpLinks: FooterLink[] = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
];

const aboutLinks: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

const eventLinks: FooterLink[] = [
  { label: 'Events', href: '/events' },
  { label: 'Collaborate with us', href: '/collaborate' },
  { label: 'Our Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];


const Footer = () => (
  <footer className="bg-[#2A2A2A] text-white" style={{ padding: '48px 100px' }}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] text-sm">
        
        {/* Column 1: Address & Phone */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-2">Address</h3>
            <p className="text-gray-300 leading-relaxed">
              #46/2, Kaveri Layout, 1st Cross,<br />
              near Tirumala Dhaba,<br />
              Yelahanka, Uttarahalli Hobli,<br />
              Bengaluru, Karnataka 560097
            </p>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-2">Phone</h3>
            <div className="text-gray-300">
              <p>Mobile: <a href="tel:+919900022300" className="hover:text-amber-400">+91 99000 22300</a></p>
              <p>Hotline: <a href="tel:+919900022301" className="hover:text-amber-400">+91 99000 22301</a></p>
            </div>
          </div>
        </div>

        {/* Column 2: Help & Social */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold uppercase tracking-wider">Help</h3>
          {helpLinks.map(link => (
            <Link key={link.label} to={link.href} className="text-gray-300 hover:text-amber-400 transition">{link.label}</Link>
          ))}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Column 3: About Us */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold uppercase tracking-wider">About Us</h3>
          {aboutLinks.map(link => (
             <Link key={link.label} to={link.href} className="text-gray-300 hover:text-amber-400 transition">{link.label}</Link>
          ))}
        </div>

        {/* Column 4: Events */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold uppercase tracking-wider">Events</h3>
          {eventLinks.map(link => (
             <Link key={link.label} to={link.href} className="text-gray-300 hover:text-amber-400 transition">{link.label}</Link>
          ))}
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Jyoti Enterprises. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;