import React, { useState } from 'react';

import vvipImage from "../../assets/VVIP.jpg";
import festivalImage from "../../assets/HOLI.jpg";
import socialImage from "../../assets/VVI.png";

interface EventOption {
  id: string;
  title: string;
  image: string;
}

const eventOptions: EventOption[] = [
  { id: 'vip-events', title: 'VIP Events (Conferences & Rallys)', image: vvipImage },
  { id: 'festivals-concerts', title: 'Festivals & Concerts', image: festivalImage },
  { id: 'social-corporate', title: 'Social & Corporate Gatherings', image: socialImage },
  { id: 'amusement-parks', title: 'Amusement Parks, Fairs & Carnivals', image: vvipImage },      // Reuse images
  { id: 'sports', title: 'Sports', image: socialImage },
  { id: 'weddings-family', title: 'Weddings & Family Gatherings', image: festivalImage },
];

const EventSelectionPage: React.FC = () => {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [showCustomEvent, setShowCustomEvent] = useState(false);

  const handleEventToggle = (eventId: string) => {
    setSelectedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleNext = () => {
    console.log('Selected events:', selectedEvents);
    // Handle next step logic here
  };

  return (
    // Added pt-16 to prevent collision with fixed header, and changed py-12 to pb-12
    <div className="min-h-screen bg-gray-50 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            What events are you looking to host?
          </h1>
          <p className="text-lg text-orange-400">
            View the options available and select your event
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {eventOptions.map((event) => (
            <div
              key={event.id}
              onClick={() => handleEventToggle(event.id)}
              className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedEvents.includes(event.id)
                  ? 'ring-4 ring-orange-500 ring-opacity-50'
                  : ''
              }`}
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center relative w-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Selection Overlay */}
                {selectedEvents.includes(event.id) && (
                  <div className="absolute inset-0 bg-orange-500 bg-opacity-20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <h3 className="font-semibold text-sm">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Add Different Event Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowCustomEvent(!showCustomEvent)}
            className="border-2 border-dashed border-gray-300 rounded-xl px-8 py-6 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 flex flex-col items-center gap-2"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-sm font-medium">to add a different event</span>
          </button>
        </div>

        {/* Custom Event Input */}
        {showCustomEvent && (
          <div className="mb-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your custom event type..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={selectedEvents.length === 0}
            className={`px-12 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
              selectedEvents.length > 0
                ? 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105 shadow-lg'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>

        {/* Selection Counter */}
        {selectedEvents.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {selectedEvents.length} event{selectedEvents.length > 1 ? 's' : ''} selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSelectionPage;
