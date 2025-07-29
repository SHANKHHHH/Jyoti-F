import { Facebook, Instagram } from 'lucide-react';
import logo from '../assets/Logo.png';

const Footer = () => (
  <footer className="bg-[#2A2A2A] text-white pt-12 pb-4 px-4 w-full">
    <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
      <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-8 lg:gap-16 justify-between">
        {/* Address & Contact */}
        <div className="flex flex-col gap-8 w-full md:w-[45%] lg:w-[287px]">
          <img src={logo} alt="Jyoti Enterprises Logo" className="h-12 mb-6" />
          <p className="font-bold text-base mb-4 leading-relaxed">
            #46/2, Kaveri Layout, 1st Cross,<br />
            near Tirumala Dhaba,<br />
            Yelahanka, Uttarahalli Hobli,<br />
            Bengaluru, Karnataka 560097
          </p>
          <div>
            <div className="uppercase font-medium text-base">Phone</div>
            <div className="font-normal text-base">
              Mobile: <a href="tel:+919900022300" className="hover:text-amber-400">+91 99000 22300</a><br />
              Hotline: <a href="tel:+919900022301" className="hover:text-amber-400">+91 99000 22301</a>
            </div>
          </div>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-7 w-full sm:w-[144px]">
          <div className="flex flex-col gap-2">
            <div className="font-medium text-base mb-2">Help</div>
            <a href="/terms" className="hover:text-amber-400 transition">Terms &amp; Conditions</a>
            <a href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</a>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              <Facebook size={30} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              <Instagram size={30} />
            </a>
          </div>
        </div>

        {/* About Us & More */}
        <div className="flex flex-col gap-4 w-full xs:w-[83px]">
          <a href="/about" className="hover:text-amber-400 transition">About Us</a>
          <a href="/products" className="hover:text-amber-400 transition">Products</a>
          <a href="/careers" className="hover:text-amber-400 transition">Careers</a>
          <a href="/contact" className="hover:text-amber-400 transition">Contact Us</a>
        </div>

        {/* Events & More */}
        <div className="flex flex-col gap-4 w-full xs:w-[143px]">
          <a href="/events" className="hover:text-amber-400 transition">Events</a>
          <a href="/collaborate" className="hover:text-amber-400 transition">Collaborate with us</a>
          <a href="/pricing" className="hover:text-amber-400 transition">Our Pricing</a>
          <a href="/blog" className="hover:text-amber-400 transition">Blog</a>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-neutral-700 pt-6 text-center">
        <span className="text-sm text-[#EFEFEF]">&copy; {new Date().getFullYear()} Jyoti Enterprises. All rights reserved.</span>
        <div className="flex flex-col md:flex-row md:gap-10 text-base text-gray-400">
          <span>info@jyotienterprises.com</span>
          <span>+91 99000 22300</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
