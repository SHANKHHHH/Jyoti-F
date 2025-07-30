import React, { useState } from 'react';

const AboutUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
  <section className="max-w-4xl mx-auto my-16 px-6 font-sans">
    {/* Header */}
    <h1 className="text-orange-400 font-bold text-3xl sm:text-4xl tracking-wider mb-8">
      ABOUT US
    </h1>
    
    {/* Main intro text */}
    <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8">
      We specialize in providing top-notch portable toilets, air conditioning and mobile containers as rental
      solutions, all tailored to meet your needs.
    </p>
    
    {/* Serving section */}
    <h2 className="text-black font-bold text-lg sm:text-xl mb-6">
      Serving across India since 2009
    </h2>
    
    <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
      Our commitment to customer satisfaction drives everything we do. From initial inquiry to post-event pickup,
      our dedicated team is here to support you every step of the way.
    </p>
    
    <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
      When it comes to portable toilets, luxury amenities, cooling systems, and luxury cabins, Jyoti Enterprises
      stands out for quality, service, and reliability. Discover the difference with us.
    </p>
    
    {/* Expandable content */}
    {isExpanded && (
      <div className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 animate-in fade-in duration-300">
        <p className="mb-4">
          <strong>Our Services Include:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Premium portable toilet rentals for events and construction sites</li>
          <li>Mobile air conditioning units for temporary cooling solutions</li>
          <li>Luxury cabin rentals with modern amenities</li>
          <li>24/7 maintenance and support services</li>
          <li>Customized solutions for corporate events and weddings</li>
        </ul>
        <p className="mb-4">
          With over 15 years of experience in the industry, we have served thousands of satisfied customers 
          across India. Our fleet of modern, well-maintained equipment ensures that your event or project 
          runs smoothly without any interruptions.
        </p>
        <p>
          We pride ourselves on punctual delivery, professional installation, and prompt pickup services. 
          Contact us today to discuss your requirements and get a customized quote for your needs.
        </p>
      </div>
    )}
    
    {/* Read More/Less button */}
    <button 
      onClick={toggleReadMore}
      className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
    >
      {isExpanded ? 'Read Less' : 'Read More'}
    </button>
  </section>
);
};

export default AboutUs;