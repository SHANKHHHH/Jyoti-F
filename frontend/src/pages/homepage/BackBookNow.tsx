import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgm from '../../assets/bgm.png';

const BackBookNow: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/products');
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bgm}
        alt="Booking Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        draggable={false}
      />

      {/* Semi-transparent Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Foreground Content (NO background box) */}
      <div className="relative z-20 flex flex-col items-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center tracking-tight">
          Bring a Premium and Hygiene Experience to Your Event
        </h1>
        <p className="text-gray-100 text-lg mb-10 text-center">
          Secure your spot for an unforgettable experience! Click below to get started with your booking through <span className="font-bold text-emerald-400">BookNow</span>.
        </p>
        <button
          onClick={handleBookNow}
          className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold rounded-md shadow-md transition-colors duration-200"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default BackBookNow;
