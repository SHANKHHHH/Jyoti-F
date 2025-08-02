import { Flame } from 'lucide-react';

import VVIP from '../../assets/VVIP.jpg';
import HOLI from '../../assets/HOLI.jpg';
import VVI from '../../assets/Desktop - 16.svg';
// Replace these imports with actual images if you have them
import WEDDINGS from '../../assets/Desktop - 16.svg'; // placeholder
import SPORTS from '../../assets/Desktop - 16.svg';  // placeholder

const imagePaths = {
  "VVIP EVENTS": VVIP,
  "FESTIVALS": HOLI,
  "FUN & FAIR": VVI,
  "SOCIAL": HOLI,
  "WEDDINGS": WEDDINGS,
  "SPORTS": SPORTS,
};

const WhatWeOffer = () => (
  <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
    {/* Header */}
    <div className="mb-12">
      <h2 className="text-orange-400 font-bold text-3xl sm:text-4xl tracking-wide mb-2">
        WHAT
      </h2>
      <div className="flex items-center gap-3">
        <Flame className="text-orange-500 w-8 h-8" />
        <h2 className="text-orange-500 font-bold text-3xl sm:text-4xl tracking-wide">
          WE OFFER
        </h2>
      </div>
    </div>

    {/* Main grid section */}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {/* VVIP EVENTS */}
      <div className="lg:row-span-2 relative rounded-lg overflow-hidden h-64 lg:h-96 flex items-center justify-center">
        <img src={imagePaths["VVIP EVENTS"]} alt="VVIP Events" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className="text-white font-bold text-xl sm:text-2xl">VVIP EVENTS</h3>
        </div>
      </div>
      {/* FESTIVALS */}
      <div className="lg:col-span-2 relative rounded-lg overflow-hidden h-32 lg:h-44 flex items-center justify-center">
        <img src={imagePaths["FESTIVALS"]} alt="Festivals" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white font-bold text-xl">FESTIVALS</h3>
        </div>
      </div>
      {/* FUN & FAIR */}
      <div className="relative rounded-lg overflow-hidden h-32 lg:h-44 flex items-center justify-center">
        <img src={imagePaths["FUN & FAIR"]} alt="Fun & Fair" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-3 left-3 z-20">
          <h3 className="text-white font-bold text-base">FUN & FAIR</h3>
        </div>
      </div>
      {/* SOCIAL */}
      <div className="relative rounded-lg overflow-hidden h-32 lg:h-44 flex items-center justify-center">
        <img src={imagePaths["SOCIAL"]} alt="Social" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-3 left-3 z-20">
          <h3 className="text-white font-bold text-base">SOCIAL</h3>
        </div>
      </div>
    </div>

    {/* Bottom section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* Promo section - BIG Planning */}
      <div>
        <h3 className="text-orange-400 font-bold text-2xl sm:text-3xl mb-4 leading-tight">
          Planning<br />Something BIG?
        </h3>
        <p className="text-gray-800 font-semibold text-base sm:text-lg mb-4 leading-relaxed">
          Let <span className="text-emerald-700 font-bold">BookForAnEvent</span> take care of the hygiene,<br />
          while you take care of the guests.
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          No matter the scale or setting, our portable sanitation services help create a clean, comfortable environment where people can focus on enjoying the moment.
        </p>
        <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base rounded-md transition-colors duration-200 shadow-sm hover:shadow-md">
          Read More
        </button>
      </div>
      {/* WEDDINGS */}
      <div className="relative rounded-lg overflow-hidden h-48 lg:h-52 flex items-center justify-center">
        <img src={imagePaths["WEDDINGS"]} alt="Weddings" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white font-bold text-lg">WEDDINGS</h3>
        </div>
      </div>
      {/* SPORTS */}
      <div className="relative rounded-lg overflow-hidden h-48 lg:h-52 flex items-center justify-center">
        <img src={imagePaths["SPORTS"]} alt="Sports" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white font-bold text-lg">SPORTS</h3>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeOffer;
