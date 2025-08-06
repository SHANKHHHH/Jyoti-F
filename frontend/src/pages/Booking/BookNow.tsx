import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame } from 'lucide-react';

const BookNow: React.FC = () => {
  const navigate = useNavigate();

  const handleStartBooking = () => {
    // Navigate to the event selection page to start the booking process
    navigate('/event-selection');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header with Flame Icon */}
        <div className="mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <h1 className="text-orange-400 font-bold text-4xl sm:text-5xl tracking-wide">
              START YOUR
            </h1>
            <Flame className="text-orange-500 w-10 h-10 sm:w-12 sm:h-12" />
            <h1 className="text-orange-500 font-bold text-4xl sm:text-5xl tracking-wide">
              BOOKING
            </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's help you find the perfect services for your event. Our booking process is simple and quick.
          </p>
          
          <p className="text-lg text-gray-600 mb-12">
            Whether you're hosting a conference, festival, wedding, or any special occasion, we've got you covered with clean, hygienic, and reliable amenities.
          </p>
        </div>

        {/* Features/Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Selection</h3>
            <p className="text-gray-600">Choose from our wide range of event types and services</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Process</h3>
            <p className="text-gray-600">Get your booking done in just a few simple steps</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Service</h3>
            <p className="text-gray-600">Premium amenities for your special occasions</p>
          </div>
        </div>

        {/* Booking Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Simple 3-Step Process</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">Select Event Type</h3>
              <p className="text-gray-600 text-center">Choose what type of event you're hosting</p>
            </div>
            
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">Choose Services</h3>
              <p className="text-gray-600 text-center">Pick the amenities you need</p>
            </div>
            
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">Confirm Booking</h3>
              <p className="text-gray-600 text-center">Complete your reservation</p>
            </div>
          </div>
        </div>

        {/* Start Booking Button */}
        <div className="mb-8">
          <button
            onClick={handleStartBooking}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Booking Process
          </button>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-gray-600">
            Need help? <span className="text-orange-500 font-semibold cursor-pointer hover:underline">Contact our support team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
