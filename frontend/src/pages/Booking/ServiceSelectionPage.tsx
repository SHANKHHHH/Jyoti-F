import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define the structure for a service option
interface ServiceData {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

// Import your static images
import bioLoosImage from "../../assets/BioLoos.png";
import coolingSystemsImage from "../../assets/Cooling System.jpg";
import handwashBasinsImage from "../../assets/Handwash Basin.jpg";
import luxuryToiletsImage from "../../assets/LuxuryToilets.jpg";
import mensUrinalsImage from "../../assets/MensUrinals.jpg";
import patioHeatersImage from "../../assets/PATIOHEATER1.png";

// Map service names to images
const serviceImages: Record<string, string> = {
  "Bio Loos": bioLoosImage,
  "Cooling Systems": coolingSystemsImage,
  "Handwash Basins": handwashBasinsImage,
  "Luxury Toilets": luxuryToiletsImage,
  "Men's Urinals": mensUrinalsImage,
  "Patio Heaters": patioHeatersImage,
};

const ServiceSelectionPage: React.FC = () => {
  const [services, setServices] = useState<ServiceData[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showCustomService, setShowCustomService] = useState(false);
  const [customService, setCustomService] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Get data from previous page
  const { selectedEvents, customEvent, eventType } = location.state || {};

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://jyothi-enterprises-4q1d.onrender.com/api/services"
        );
        const data = await response.json();

        if (data.success) {
          const servicesWithImages = data.services.map((service: ServiceData) => ({
            ...service,
            image:
              serviceImages[service.name] ||
              "https://placehold.co/400x300?text=No+Image",
          }));
          setServices(servicesWithImages);
        } else {
          setError("Failed to fetch services");
        }
      } catch (err) {
        setError("Something went wrong while fetching services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleReturn = () => {
    navigate("/event-selection", { state: { eventType } });
  };

  const handleNext = () => {
    const selectedServiceNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .filter(Boolean) as string[];

    navigate("/introduction", {
      state: {
        selectedEvents,
        customEvent,
        eventType,
        selectedServices: selectedServiceNames,
        selectedServiceIds: selectedServices,
        customService: customService.trim() || null,
        bookingData: {
          events: selectedEvents || [],
          customEvent: customEvent || null,
          eventType: eventType || null,
          services: selectedServiceNames || [],
          customService: customService.trim() || null,
        },
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-orange-500 font-semibold">
          Loading services...
        </p>
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
        {/* Return Button */}
        <div className="mb-8">
          <button
            onClick={handleReturn}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
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
          {eventType && (
            <div className="mt-4 p-3 bg-orange-100 rounded-lg inline-block">
              <p className="text-orange-700 text-sm">
                Selected Event:{" "}
                <span className="font-semibold">{eventType}</span>
              </p>
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceToggle(service.id)}
              className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedServices.includes(service.id)
                  ? "ring-4 ring-orange-500 ring-opacity-50"
                  : ""
              }`}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />

                {/* Selection Overlay */}
                {selectedServices.includes(service.id) && (
                  <div className="absolute inset-0 bg-orange-500 bg-opacity-20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <h3 className="font-semibold text-sm">{service.name}</h3>
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
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
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
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
            />
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={selectedServices.length === 0 && !customService.trim()}
            className={`px-12 py-3 rounded-full font-semibold text-white transition-all duration-300 ${
              selectedServices.length > 0 || customService.trim()
                ? "bg-emerald-500 hover:bg-emerald-600 hover:scale-105 shadow-lg"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>

        {/* Selection Counter */}
        {(selectedServices.length > 0 || customService.trim()) && (
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {selectedServices.length > 0 && (
                <>
                  {selectedServices.length} service
                  {selectedServices.length > 1 ? "s" : ""} selected
                </>
              )}
              {selectedServices.length > 0 && customService.trim() && " + "}
              {customService.trim() && "1 custom service"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelectionPage;
