import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  mobileNumber: string;
  email: string;
  gst: string;
}

const IntroductionPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data passed from previous pages
  const { selectedServices, eventType, bookingData } = location.state || {};

  console.log('Introduction - Received data:', { selectedServices, eventType, bookingData });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobileNumber: '',
    email: '',
    gst: ''
  });
  
  // Remove submissionStatus since API call is no longer being made
  // const [submissionStatus, setSubmissionStatus] = useState({
  //   loading: false,
  //   error: '',
  //   success: ''
  // });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.mobileNumber || !formData.email) {
      // You can add a local state for an error message here if needed
      console.error('Please fill in all required fields.');
      return;
    }

    console.log('Introduction - Passing to checkout:', {
      ...formData,
      selectedServices,
      eventType,
      bookingData
    });

    // Navigate to checkout page with all collected data
    navigate('/checkout', {
      state: {
        // Personal information from this form
        ...formData,
        // Data from previous pages
        selectedServices,
        eventType,
        bookingData,
        // All combined for easy access
        allBookingData: {
          personalInfo: formData,
          services: selectedServices,
          event: eventType,
          additionalData: bookingData
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pt-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-light text-orange-400 mb-2">
            Introduce yourselves to us
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            and a way to reach out to you.
          </p>
          {/* Show selected services info if available */}
          {selectedServices && selectedServices.length > 0 && (
            <div className="mt-4 p-3 bg-orange-100 rounded-lg">
              <p className="text-orange-700 text-sm">
                Selected Services: <span className="font-semibold">{selectedServices.join(', ')}</span>
              </p>
            </div>
          )}
          {eventType && (
            <div className="mt-2 p-2 bg-blue-100 rounded-lg">
              <p className="text-blue-700 text-sm">
                Event Type: <span className="font-semibold">{eventType}</span>
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Sire N"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
                required
              />
            </div>

            {/* Mobile Number Field */}
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number*
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="+91 9786956408"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="techwire123@gmail.com"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
                required
              />
            </div>

            {/* GST Field */}
            <div>
              <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                GST
              </label>
              <input
                type="text"
                id="gst"
                name="gst"
                value={formData.gst}
                onChange={handleInputChange}
                placeholder="xxxxxxxxxxxxxx"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Upload Section */}
          <div className="mt-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white hover:border-orange-400 transition-colors cursor-pointer">
              <div className="text-gray-400 text-3xl mb-2">+</div>
              <p className="text-gray-500 text-sm">
                Upload additional documents (optional)
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            {/* Back Button */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium underline">Back</span>
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Next - Review Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntroductionPage;
