import React from 'react';
import { Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import VVIP from '../../assets/VVIP.jpg';
import HOLI from '../../assets/HOLI.jpg';
import VVI from '../../assets/Fun & Fair.jpg';
import WEDDINGS from '../../assets/Wedding.jpg';
import SPORTS from '../../assets/Sports.jpg';

interface OfferItem {
  title: string;
  image: string;
}

const offers: OfferItem[] = [
  { title: 'VVIP EVENTS', image: VVIP },
  { title: 'FESTIVALS', image: HOLI },
  { title: 'FUN & FAIR', image: VVI },
  { title: 'SOCIAL', image: HOLI },
  { title: 'WEDDINGS', image: WEDDINGS },
  { title: 'SPORTS', image: SPORTS },
];

const WhatWeOffer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 pt-6 pb-12 bg-gray-50">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <h2 className="text-orange-400 font-bold text-3xl sm:text-4xl tracking-wide">
            WHAT
          </h2>
          <Flame className="text-orange-500 w-8 h-8" />
          <h2 className="text-orange-500 font-bold text-3xl sm:text-4xl tracking-wide">
            WE OFFER
          </h2>
        </div>
        <p className="text-gray-600 font-medium sm:text-lg max-w-2xl mx-auto">
          Discover the best event solutions—delivered with hygiene, comfort, and style for every gathering.
        </p>
      </div>

      {/* Uniform Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {offers.map((offer) => (
          <div
            key={offer.title}
            onClick={() => navigate('/event-selection', { state: { eventType: offer.title } })}
            className="relative rounded-xl overflow-hidden h-52 sm:h-56 flex items-center justify-center group shadow-lg cursor-pointer"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <h3 className="text-white font-extrabold text-xl sm:text-2xl drop-shadow-lg text-center tracking-wide px-2">
                {offer.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Promo section */}
      <div className="bg-white rounded-xl shadow-lg px-7 py-8 max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="text-orange-400 font-bold text-2xl sm:text-3xl mb-3 text-center">
          Planning<br />Something BIG?
        </h3>
        <p className="text-gray-800 font-semibold mb-2 text-center">
          Let <span className="text-emerald-700 font-bold">BookForAnEvent</span> take care of hygiene,<br className="hidden sm:block" />
          while you take care of the guests.
        </p>
        <p className="text-gray-700 text-sm sm:text-base mb-4 text-center">
          No matter the scale or setting, our portable sanitation services help create a clean, comfortable environment where everyone enjoys the moment.
        </p>
      </div>
    </section>
  );
};

export default WhatWeOffer;
