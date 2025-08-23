import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import your service images
import luxuryToiletsImage from '../../assets/LuxuryToilets.jpg';
import bioLoosImage from '../../assets/BioLoos.png';
import handwashBasinsImage from '../../assets/Handwash Basin.jpg';
import mensUrinalsImage from '../../assets/MensUrinals.jpg';
import coolingSystemsImage from '../../assets/Cooling System.jpg';
import patioHeatersImage from '../../assets/PatioHeaters.jpg';

// Import event images
import vvipImage from "../../assets/VVIP.jpg";
import festivalImage from "../../assets/HOLI.jpg";
import socialImage from "../../assets/VVI.png";

interface PersonalInfo {
  name: string;
  mobileNumber: string;
  email: string;
  gst: string;
}

interface EventDetails {
  paxCount: number;
  toilets: number;
  location: string;
  startDate: string;
  endDate: string;
}

const CheckOut: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get all data from previous pages
  const { 
    selectedServices = [],
    eventType = '',
    bookingData = {},
    name = '',
    mobileNumber = '',
    email = '',
    gst = ''
  } = location.state || {};

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: name || 'Sire N',
    mobileNumber: mobileNumber || '+91 1234567890',
    email: email || 'techwire123@gmail.com',
    gst: gst || 'XXXXXXXXXXXXXXXXX'
  });

  const [eventDetails, setEventDetails] = useState<EventDetails>({
    paxCount: 900,
    toilets: 0,
    location: 'Yashwant Sai Fargo Road, Bangalore',
    startDate: 'Nov: August 1st',
    endDate: 'to August 3rd'
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    error: '',
    success: ''
  });

  // Enhanced Service image mapping with multiple possible keys
  const serviceImageMap: { [key: string]: string } = {
    'Luxury Toilets': luxuryToiletsImage,
    'luxury-toilets': luxuryToiletsImage,
    'Bio Loo': bioLoosImage,
    'bio-loos': bioLoosImage,
    'Handwash Basins': handwashBasinsImage,
    'handwash-basins': handwashBasinsImage,
    "Men's Urinals": mensUrinalsImage,
    'mens-urinals': mensUrinalsImage,
    'Cooling Systems': coolingSystemsImage,
    'cooling-systems': coolingSystemsImage,
    'Patio Heaters': patioHeatersImage,
    'patio-heaters': patioHeatersImage
  };

  // Enhanced Event image mapping with multiple possible keys
  const eventImageMap: { [key: string]: string } = {
    'VVIP Events (Conferences & Rallys)': vvipImage,
    'VIP Events (Conferences & Rallys)': vvipImage,
    'vip-events': vvipImage,
    'Festivals & Concerts': festivalImage,
    'festivals-concerts': festivalImage,
    'Social & Corporate': socialImage,
    'Social & Corporate Gatherings': socialImage,
    'social-corporate': socialImage
  };

  // Function to get service image with fallback - Fixed return type
  const getServiceImage = (serviceName: string): string | null => {
    // Try exact match first
    if (serviceImageMap[serviceName]) {
      return serviceImageMap[serviceName];
    }
    
    // Try lowercase and remove special characters
    const cleanName = serviceName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    if (serviceImageMap[cleanName]) {
      return serviceImageMap[cleanName];
    }
    
    // Try partial matching
    const mapKeys = Object.keys(serviceImageMap);
    const partialMatch = mapKeys.find(key => 
      key.toLowerCase().includes(serviceName.toLowerCase()) ||
      serviceName.toLowerCase().includes(key.toLowerCase())
    );
    
    if (partialMatch) {
      return serviceImageMap[partialMatch];
    }
    
    return null;
  };

  // Function to get event image with fallback - Fixed return type
  const getEventImage = (eventName: string): string | null => {
    // Try exact match first
    if (eventImageMap[eventName]) {
      return eventImageMap[eventName];
    }
    
    // Try partial matching
    const mapKeys = Object.keys(eventImageMap);
    const partialMatch = mapKeys.find(key => 
      key.toLowerCase().includes(eventName.toLowerCase()) ||
      eventName.toLowerCase().includes(key.toLowerCase())
    );
    
    if (partialMatch) {
      return eventImageMap[partialMatch];
    }
    
    return null;
  };

  // Event gradient mapping
  const eventGradientMap: { [key: string]: string } = {
    'VVIP Events (Conferences & Rallys)': 'bg-gradient-to-r from-blue-600 to-purple-600',
    'VIP Events (Conferences & Rallys)': 'bg-gradient-to-r from-blue-600 to-purple-600',
    'Festivals & Concerts': 'bg-gradient-to-r from-purple-500 to-yellow-500',
    'Social & Corporate': 'bg-gradient-to-r from-green-500 to-blue-500',
    'Social & Corporate Gatherings': 'bg-gradient-to-r from-green-500 to-blue-500'
  };
  
  // Auto-calculate toilets based on pax count (1 toilet per 30 people)
  useEffect(() => {
    const calculatedToilets = Math.ceil(eventDetails.paxCount / 30);
    setEventDetails(prev => ({
      ...prev,
      toilets: calculatedToilets
    }));
  }, [eventDetails.paxCount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, section: 'personal' | 'event') => {
    const { name, value } = e.target;
    
    if (section === 'personal') {
      setPersonalInfo(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      if (name === 'paxCount') {
        const paxValue = parseInt(value) || 0;
        setEventDetails(prev => ({
          ...prev,
          [name]: paxValue,
        }));
      } else {
        setEventDetails(prev => ({
          ...prev,
          [name]: name === 'toilets' ? parseInt(value) || 0 : value
        }));
      }
    }
  };

  const handleSubmit = async () => {
    setSubmissionStatus({ loading: true, error: '', success: '' });

    const finalBookingData = {
      personalInfo,
      eventDetails,
      selectedServices,
      eventType,
      bookingData
    };
    
    try {
      // Send data to the backend API endpoint
      const response = await fetch('https://jyothi-enterprises-4q1d.onrender.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalBookingData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking.');
      }

      setSubmissionStatus({
        loading: false,
        error: '',
        success: 'Booking submitted successfully!'
      });

      console.log('Final booking data submitted:', result);

    } catch (error: any) {
      console.error('Error submitting booking:', error);
      setSubmissionStatus({
        loading: false,
        error: error.message,
        success: ''
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBack}
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
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            BOOK FOR AN EVENT
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            Reach out to us for more information or to book our services for your upcoming event.
          </p>
          <p className="text-gray-800 font-semibold">
            Experience the difference with Jyoti Enterprises, <span className="text-orange-500">where hygiene meets comfort</span>.
          </p>
        </div>
        
        {/* Display submission status */}
        {submissionStatus.loading && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
            <p className="font-bold">Submitting your booking...</p>
          </div>
        )}
        {submissionStatus.error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p className="font-bold">Error!</p>
            <p>{submissionStatus.error}</p>
          </div>
        )}
        {submissionStatus.success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
            <p className="font-bold">Success!</p>
            <p>{submissionStatus.success}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information - Column 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">3</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={personalInfo.name}
                  onChange={(e) => handleInputChange(e, 'personal')}
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={personalInfo.mobileNumber}
                  onChange={(e) => handleInputChange(e, 'personal')}
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={(e) => handleInputChange(e, 'personal')}
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GST</label>
                <input
                  type="text"
                  name="gst"
                  value={personalInfo.gst}
                  onChange={(e) => handleInputChange(e, 'personal')}
                  className="w-full px-3 py-2 bg-gray-100 border-0 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50 hover:border-orange-400 transition-colors cursor-pointer">
                <div className="text-gray-400 text-xl mb-1">+</div>
              </div>
            </div>
          </div>

          {/* Events & Products - Column 2 */}
          <div className="space-y-6">
            {/* Events Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Events</h2>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">1</span>
              </div>

              {/* Show selected event */}
              {eventType ? (
                <div className={`${eventGradientMap[eventType] || 'bg-gradient-to-r from-purple-500 to-yellow-500'} rounded-lg p-4 text-white mb-4`}>
                  {(() => {
                    const eventImage = getEventImage(eventType);
                    return eventImage ? (
                      <img 
                        src={eventImage}
                        alt={eventType}
                        className="w-full h-20 object-cover rounded mb-3"
                        onError={(e) => {
                          console.log('Event image failed to load:', eventType);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-20 bg-white bg-opacity-20 rounded mb-3 flex items-center justify-center">
                        <span className="text-white text-xs">No image available</span>
                      </div>
                    );
                  })()}
                  <h3 className="font-semibold text-sm">{eventType}</h3>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-4 text-center text-gray-500">
                  <p className="text-sm">No event selected</p>
                </div>
              )}

              <div className="mt-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50 hover:border-orange-400 transition-colors cursor-pointer">
                  <div className="text-gray-400 text-xl mb-1">+</div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Products</h2>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">2</span>
              </div>

              {/* Show selected services */}
              <div className="space-y-4">
                {selectedServices && selectedServices.length > 0 ? (
                  selectedServices.map((service: string, index: number) => {
                    const serviceImage = getServiceImage(service);
                    return (
                      <div key={index} className="bg-gray-100 rounded-lg p-3">
                        {serviceImage ? (
                          <img 
                            src={serviceImage}
                            alt={service} 
                            className="w-full h-20 object-cover rounded mb-2"
                            onError={(e) => {
                              console.log('Service image failed to load:', service);
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-20 bg-gray-200 rounded mb-2 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">No image for: {service}</span>
                          </div>
                        )}
                        <h3 className="font-medium text-gray-800 text-sm">{service}</h3>
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-gray-100 rounded-lg p-4 text-center text-gray-500">
                    <p className="text-sm">No services selected</p>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50 hover:border-orange-400 transition-colors cursor-pointer">
                  <div className="text-gray-400 text-xl mb-1">+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details - Column 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Event Details</h2>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">3</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">👥 Pax Count</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Attendants</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="paxCount"
                    value={eventDetails.paxCount}
                    onChange={(e) => handleInputChange(e, 'event')}
                    className="w-20 px-2 py-1 bg-gray-100 rounded text-center text-sm border-0 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Toilets</span>
                <div className="flex items-center gap-2">
                  <span className="w-20 px-2 py-1 bg-green-100 text-green-700 rounded text-center text-sm font-medium">
                    {eventDetails.toilets}
                  </span>
                  <span className="text-xs text-gray-500">(auto)</span>
                </div>
              </div>

              <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                💡 {eventDetails.paxCount} people ÷ 30 = {eventDetails.toilets} toilets
                <br />
                <span className="text-orange-600">1 toilet serves 30 people</span>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center mb-2">
                    <span className="text-gray-500 text-sm">Map View</span>
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={eventDetails.location}
                    onChange={(e) => handleInputChange(e, 'event')}
                    className="w-full px-2 py-1 bg-white rounded text-xs focus:outline-none focus:ring-1 focus:ring-orange-400"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">📅 Dates</span>
                  </div>
                  <input
                    type="text"
                    name="startDate"
                    value={eventDetails.startDate}
                    onChange={(e) => handleInputChange(e, 'event')}
                    className="w-full px-3 py-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="text"
                    name="endDate"
                    value={eventDetails.endDate}
                    onChange={(e) => handleInputChange(e, 'event')}
                    className="w-full px-3 py-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50 hover:border-orange-400 transition-colors cursor-pointer">
                <div className="text-gray-400 text-xl mb-1">+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={submissionStatus.loading}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submissionStatus.loading ? 'Submitting...' : 'Submit Booking'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
