import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import event images
import vvipImage from "../../assets/VVIP.jpg";
import festivalImage from "../../assets/HOLI.jpg";
import socialImage from "../../assets/VVI.png";

// Define the structure for an event option
interface EventData {
  id: string;
  name: string;
}

const EventSelectionPage: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [showCustomEvent, setShowCustomEvent] = useState(false);
  const [customEvent, setCustomEvent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // A mapping object to link event names from the API to local image imports
  const eventImageMap: { [key: string]: string } = {
    'VIP Events (Conferences & Rallys)': vvipImage,
    'Festivals & Concerts': festivalImage,
    'Social & Corporate Gatherings': socialImage,
    'Amusement Parks, Fairs & Carnivals': vvipImage,
    'Sports': socialImage,
    'Weddings & Family Gatherings': festivalImage,
  };
  
  // Get eventType from WhatOffer page
  const { eventType } = location.state || {};
  console.log('EventSelection - Received eventType:', eventType);

  // Fetch events from backend API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://jyothi-enterprises-4q1d.onrender.com/api/events");
        const data = await response.json();

        if (data.success && Array.isArray(data.events)) {
          setEvents(data.events);
        } else {
          setError("Failed to fetch events");
        }
      } catch (err) {
        setError("Something went wrong while fetching events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventToggle = (eventId: string) => {
    setSelectedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleNext = () => {
    // Get selected event names
    const selectedEventNames = selectedEvents.map(eventId => {
      const event = events.find(e => e.id === eventId);
      return event ? event.name : null;
    }).filter(Boolean) as string[];

    console.log('EventSelection - Passing data:', {
      selectedEvents: selectedEventNames,
      customEvent: customEvent.trim() || null,
      eventType
    });
    
    // Navigate to service selection page
    navigate('/service-selection', { 
      state: { 
        selectedEvents: selectedEventNames,
        customEvent: customEvent.trim() || null,
        eventType 
      } 
    });
  };

  // --- Conditional Rendering for Loading & Error ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-orange-500 font-semibold">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium underline">Back</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            What events are you looking to host?
          </h1>
          <p className="text-lg text-orange-400">
            View the options available and select your event
          </p>
          {/* Show pre-selected event */}
          {eventType && (
            <div className="mt-4 p-3 bg-blue-100 rounded-lg inline-block">
              <p className="text-blue-700 text-sm">
                Pre-selected: <span className="font-semibold">{eventType}</span>
              </p>
            </div>
          )}
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {events.map((event) => (
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
                  src={eventImageMap[event.name] || 'https://placehold.co/400x300?text=Image+Not+Found'}
                  alt={event.name}
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
                <h3 className="font-semibold text-sm">{event.name}</h3>
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
              value={customEvent}
              onChange={(e) => setCustomEvent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={selectedEvents.length === 0 && !customEvent.trim() && !eventType}
            className={`px-12 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
              selectedEvents.length > 0 || customEvent.trim() || eventType
                ? 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105 shadow-lg'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>

        {/* Selection Counter */}
        {(selectedEvents.length > 0 || customEvent.trim() || eventType) && (
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {eventType && 'Pre-selected event + '}
              {selectedEvents.length > 0 && (
                <>
                  {selectedEvents.length} additional event{selectedEvents.length > 1 ? 's' : ''} selected
                </>
              )}
              {selectedEvents.length > 0 && customEvent.trim() && ' + '}
              {customEvent.trim() && '1 custom event'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSelectionPage;
