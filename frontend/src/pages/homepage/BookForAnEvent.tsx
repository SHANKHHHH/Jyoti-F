import React from "react";
import { useNavigate } from "react-router-dom";

import vvipImage from "../../assets/VVIP.jpg";
import festivalImage from "../../assets/HOLI.jpg";
import socialImage from "../../assets/VVI.png";

const events = [
  { title: "VVIP Events (Conferences & Rallys)", img: vvipImage },
  { title: "Festivals & Concerts", img: festivalImage },
  { title: "Social & Corporate", img: socialImage },
];

const WhatOffer: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/event-selection", { state: { fromWhatOffer: true } });
  };

  const handleEventClick = (eventTitle: string) => {
    navigate("/event-selection", { state: { eventType: eventTitle } });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20 font-sans mt-20 sm:mt-24">
      {/* Header with Flame Icon */}
      <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <h2 className="text-orange-400 font-bold text-3xl sm:text-4xl tracking-wide">
            BOOK FOR AN
          </h2>
          <h2 className="text-orange-500 font-bold text-3xl sm:text-4xl tracking-wide">
            EVENT
          </h2>
        </div>
        
        <p className="text-base sm:text-lg mt-4 mb-1 text-gray-700 max-w-4xl mx-auto">
          Whether you're hosting an event, managing a construction site, or planning a special occasion, our range of
          services ensures you have access to clean, hygienic, and reliable amenities.
        </p>
        <p className="font-bold text-base sm:text-lg mb-10 text-gray-800">
          Select the one of your choice to know more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {events.map((ev, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div 
              onClick={() => handleEventClick(ev.title)}
              className="w-full h-52 sm:h-64 overflow-hidden cursor-pointer"
            >
              <img
                src={ev.img}
                alt={ev.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="text-center font-semibold text-lg text-gray-800 group-hover:text-orange-500 transition-colors duration-300 mb-4">
                {ev.title}
              </div>
              
              {/* Small Book Now Button */}
              <button
                onClick={handleBookNow}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatOffer;
