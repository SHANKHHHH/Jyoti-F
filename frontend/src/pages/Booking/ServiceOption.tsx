import React, { useState } from 'react';

interface ServiceOption {
  id: string;
  title: string;
  image: string; // Placeholder for actual image path
}

const ServicesSelectionPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showCustomService, setShowCustomService] = useState(false);

  const serviceOptions: ServiceOption[] = [
    {
      id: 'luxury-toilets',
      title: 'Luxury Toilets',
      image: 'PLACEHOLDER_LUXURY_TOILETS_IMAGE'
    },
    {
      id: 'bio-loos',
      title: 'Bio Loos',
      image: 'PLACEHOLDER_BIO_LOOS_IMAGE'
    },
    {
      id: 'handwash-basins',
      title: 'Handwash Basins',
      image: 'PLACEHOLDER_HANDWASH_BASINS_IMAGE'
    },
    {
      id: 'mens-urinals',
      title: "Men's Urinals",
      image: 'PLACEHOLDER_MENS_URINALS_IMAGE'
    },
    {
      id: 'cooling-systems',
      title: 'Cooling Systems',
      image: 'PLACEHOLDER_COOLING_SYSTEMS_IMAGE'
    },
    {
      id: 'patio-heaters',
      title: 'Patio Heaters',
      image: 'PLACEHOLDER_PATIO_HEATERS_IMAGE'
    }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleReturn = () => {
    // Handle return to previous step
    console.log('Returning to previous step');
  };

  const handleNext = () => {
    console.log('Selected services:', selectedServices);
    // Handle next step logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Return Button */}
        <div className="mb-8">
          <button
            onClick={handleReturn}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium underline">Return</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            What services will you require from us?
          </h1>
          <p className="text-lg text-orange-400">
            View the options available and select your requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {serviceOptions.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceToggle(service.id)}
              className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedServices.includes(service.id)
                  ? 'ring-4 ring-orange-500 ring-opacity-50'
                  : ''
              }`}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] bg-gray-300 flex items-center justify-center relative">
                {/* Replace this div with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 text-sm text-center px-4">
                    {service.image}
                  </span>
                </div>
                
                {/* Selection Overlay */}
                {selectedServices.includes(service.id) && (
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
                <h3 className="font-semibold text-sm">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Add Different Service Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowCustomService(!showCustomService)}
            className="border-2 border-dashed border-gray-300 rounded-xl px-8 py-6 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 flex flex-col items-center gap-2"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-sm font-medium">to choose different options</span>
          </button>
        </div>

        {/* Custom Service Input */}
        {showCustomService && (
          <div className="mb-8 max-w-md mx-auto">
            <textarea
              placeholder="Enter your custom service requirements..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
            />
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={selectedServices.length === 0}
            className={`px-12 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
              selectedServices.length > 0
                ? 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105 shadow-lg'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>

        {/* Selection Counter */}
        {selectedServices.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSelectionPage;