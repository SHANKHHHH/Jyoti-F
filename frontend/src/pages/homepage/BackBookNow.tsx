import React from 'react';

const bgImagePath = "'../assets/bgm.png";
const BackBookNow: React.FC = () => {
  const handleBookNow = () => {
    // Replace with your booking logic or navigation
    console.log('Book Now button clicked!');
    // Example: navigate('/booking');  or openModal();
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImagePath}
        alt="Booking Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Semi-transparent Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Foreground Content Box */}
      <div className="relative z-20 flex flex-col items-center px-6 py-16 rounded-lg bg-white/75 backdrop-blur-md shadow-xl max-w-lg mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 text-center tracking-tight">
          Book Your Event Now
        </h1>
        <p className="text-gray-800 text-lg mb-10 text-center">
          Secure your spot for an unforgettable experience! Click below to get started with your booking through <span className="font-bold text-emerald-600">BookForAnEvent</span>.
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
