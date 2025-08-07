import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import your service images
import luxuryToiletsImage from '../../assets/Luxury Toilets.jpg';
import bioLoosImage from '../../assets/Bio Loos.png';
import handwashBasinsImage from '../../assets/Handwash Basin.jpg';
import mensUrinalsImage from '../../assets/Mens Urinals.jpg';
import coolingSystemsImage from '../../assets/Cooling System.jpg';
import patioHeatersImage from '../../assets/Patio Heaters.jpg';

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

  // Service image mapping
  const serviceImageMap: { [key: string]: string } = {
    'Luxury Toilets': luxuryToiletsImage,
    'Bio Loos': bioLoosImage,
    'Handwash Basins': handwashBasinsImage,
    "Men's Urinals": mensUrinalsImage,
    'Cooling Systems': coolingSystemsImage,
    'Patio Heaters': patioHeatersImage
  };

  // Event image mapping
  const eventImageMap: { [key: string]: string } = {
    'VVIP Events (Conferences & Rallys)': vvipImage,
    'Festivals & Concerts': festivalImage,
    'Social & Corporate': socialImage
  };

  // Event gradient mapping
  const eventGradientMap: { [key: string]: string } = {
    'VVIP Events (Conferences & Rallys)': 'bg-gradient-to-r from-blue-600 to-purple-600',
    'Festivals & Concerts': 'bg-gradient-to-r from-purple-500 to-yellow-500',
    'Social & Corporate': 'bg-gradient-to-r from-green-500 to-blue-500'
  };

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

  const handleSubmit = () => {
    const finalBookingData = {
      personalInfo,
      eventDetails,
      selectedServices,
      eventType,
      bookingData
    };
    
    console.log('Final booking data:', finalBookingData);
    alert('Booking submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
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

              {/* Show selected event or default message */}
              {eventType ? (
                <div className={`${eventGradientMap[eventType] || 'bg-gradient-to-r from-purple-500 to-yellow-500'} rounded-lg p-4 text-white mb-4`}>
                  {eventImageMap[eventType] && (
                    <img 
                      src={eventImageMap[eventType]} 
                      alt={eventType}
                      className="w-full h-20 object-cover rounded mb-3"
                    />
                  )}
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
                  selectedServices.map((service: string, index: number) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-3">
                      {serviceImageMap[service] ? (
                        <img 
                          src={serviceImageMap[service]} 
                          alt={service} 
                          className="w-full h-20 object-cover rounded mb-2"
                        />
                      ) : (
                        <div className="w-full h-20 bg-gray-200 rounded mb-2 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">{service}</span>
                        </div>
                      )}
                      <h3 className="font-medium text-gray-800 text-sm">{service}</h3>
                    </div>
                  ))
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Submit Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
