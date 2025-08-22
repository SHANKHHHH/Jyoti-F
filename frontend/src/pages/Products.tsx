// ProductsPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

// Original local image imports restored.
import ProductImg from '../assets/Product.jpg';
import Men3Urinal from '../assets/3 MENS URINELS.png';
import AirCooler from '../assets/AIR COOLER.png';
import bio from '../assets/bio.png';
import ABC from '../assets/ABC.jpeg.jpg';
import ductac from '../assets/duct ac.jpeg.jpg';
import uriens from '../assets/uriens 4in1.png';
import ShowerCabin from '../assets/shower cabin.jpeg.jpg';
import patioHeater from '../assets/patio heater.jpeg.jpg';
import mistfan from '../assets/mist fan.jpeg.jpg';
import AirWater from '../assets/AIRON WATER.png';

// Product type definition and product data
export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  category: string;
  discount: string;
  description?: string;
  descriptions: string[]; // <-- Bullet points!
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'PM Container',
    price: 37489,
    originalPrice: 45000,
    rating: 4.5,
    reviews: 23,
    category: 'Containers',
    discount: '10% off',
    description: 'Versatile PM Container for all site needs.',
    descriptions: [
      'Ideal for site offices, storage, or housing staff.',
      'Heavy-duty steel construction for security.',
      'Weather resistant design for any climate.',
      'Easy to transport and install at your site.',
      'Spacious interior with customizable layout.',
      'Low maintenance, long service life.',
      'Lockable doors & windows for added safety.',
      'Perfect for construction, events, or remote locations.',
    ],
    image: ProductImg,
  },
  {
    id: jsjjs,
    name: 'PM Container',
    price: 37489,
    originalPrice: 45000,
    rating: 4.5,
    reviews: 23,
    category: 'Portable Toilets',
    discount: '15% off',
    description: 'Sturdy portable container, perfect for any job site.',
    descriptions: [
      'Portable and robust for all job sites.',
      'Integrated ventilation for comfort.',
      'Customizable fittings for diverse needs.',
      'Quick to deploy and relocate.',
      'Water-resistant exterior finish.',
      'Secure lock system for safety.',
      'Spacious interior with ergonomic design.',
      'Eco-friendly and reusable materials.',
    ],
    image: ProductImg,
  },
  {
    id: 3,
    name: 'PM Container',
    price: 37489,
    originalPrice: 45000,
    rating: 4.5,
    reviews: 23,
    category: 'Air Conditioners',
    discount: '20% off',
    description: 'Air-conditioned container for your comfort.',
    descriptions: [
      'Integrated air conditioning for comfort.',
      'Double-insulated panels for temperature control.',
      'Low energy consumption cooling units.',
      'Fast and easy setup at any location.',
      'Prevent humidity and odor buildup.',
      'Noise-reduced ventilation.',
      'Adjustable cooling settings.',
      'Ideal for offices, labs, or resting areas.',
    ],
    image: ProductImg,
  },
  {
    id: 4,
    name: 'PM Container',
    price: 37489,
    originalPrice: 45000,
    rating: 4.5,
    reviews: 23,
    category: 'Containers',
    discount: '25% off',
    description: 'Secure and mobile PM container unit.',
    descriptions: [
      'Excellent security features with heavy-duty locks.',
      'Easily relocated with built-in lifting hooks.',
      'Compact, space-saving design.',
      'Durable steel base and frame.',
      'Water/seepage-proof flooring.',
      'Can be connected for multi-unit setups.',
      'Low cost, fast to deploy.',
      'Ideal for frequent site moves.',
    ],
    image: ProductImg,
  },
  {
    id: 5,
    name: 'PM Container',
    price: 37489,
    originalPrice: 45000,
    rating: 4.5,
    reviews: 23,
    category: 'Portable Toilets',
    discount: '30% off',
    description: 'Reliable portable container with flexible rental/ownership.',
    descriptions: [
      'Flexible rental and purchase options.',
      'Meets all health and safety regulations.',
      'Quick-connect utility fittings.',
      'Reinforced for long-term outdoor use.',
      'Delivered and installed by our team.',
      'Custom branding available.',
      'High resale value and durability.',
      'Available nationwide.',
    ],
    image: ProductImg,
  },
  {
    id: 6,
    name: '3 Mens Urinals',
    price: 33500,
    originalPrice: 38000,
    rating: 4.2,
    reviews: 14,
    category: 'Toilets',
    discount: '12% off',
    description: 'Large urinal unit with 3-person capacity for event sites.',
    descriptions: [
      '3-person design for busy event operation.',
      'Odor-free operation for hygiene and comfort.',
      'Easy to clean, minimal water usage.',
      'Portable and compact for rapid installation.',
      'Robust material resists damage.',
      'Bright colors for visibility and easy location.',
      'Suitable for both indoor and outdoor venues.',
      'Stacks for efficient transport/storage.',
    ],
    image: Men3Urinal,
  },
  {
    id: 7,
    name: '4 in 1 Urinals',
    price: 39800,
    originalPrice: 46500,
    rating: 4.1,
    reviews: 11,
    category: 'Toilets',
    discount: '15% off',
    description: '4-in-1 design for efficient use at crowded events.',
    descriptions: [
      'Innovative design: serves 4 users at once.',
      'Reduces waiting times in high-traffic areas.',
      'Anti-odor with advanced ventilation.',
      'Lightweight and easy to move.',
      'Made from strong, non-toxic materials.',
      'Quick and hygienic clean-up.',
      'Water-saving flush mechanism.',
      'Ideal for festivals, parks, and fairs.',
    ],
    image: uriens,
  },
  {
    id: 8,
    name: 'Fire Extinguisher',
    price: 31000,
    originalPrice: 35500,
    rating: 4.7,
    reviews: 31,
    category: 'Fire Safety',
    discount: '13% off',
    description: 'Easy-to-use ABC fire extinguisher for emergencies.',
    descriptions: [
      'Versatile ABC type for all fire categories.',
      'Fast and efficient discharge system.',
      'Simple instructions for easy use.',
      'Corrosion-resistant casing.',
      'Long shelf life with easy maintenance.',
      'Lightweight for quick maneuvering.',
      'Mounted for fast access.',
      'Certified by government safety norms.',
    ],
    image: ABC,
  },
  {
    id: 9,
    name: 'Air Cooler',
    price: 47000,
    originalPrice: 52000,
    rating: 4.6,
    reviews: 22,
    category: 'Coolers',
    discount: '10% off',
    description: 'Powerful air cooler for large indoor or outdoor spaces.',
    descriptions: [
      'Cools large spaces quickly and quietly.',
      'Energy-efficient, eco-friendly technology.',
      'Mobile design for flexible placement.',
      'Large water tank for longer usage.',
      'Three-speed fan control.',
      'Simple controls and digital interface.',
      'Durable exterior for outdoor parties.',
      'Low maintenance and noise output.',
    ],
    image: AirCooler,
  },
  {
    id: 10,
    name: 'Airon Water',
    price: 38900,
    originalPrice: 40500,
    rating: 4.4,
    reviews: 19,
    category: 'Coolers',
    discount: '4% off',
    description: 'Portable water cooling and dispensing solution.',
    descriptions: [
      'All-in-one portable water cooling device.',
      'Provides instant cold water in hot climates.',
      'Lightweight and easy to move.',
      'Low power consumption.',
      'Easy to fill and drain.',
      'Sanitized build for safe drinking.',
      'Drip-free dispensing faucet.',
      'Excellent for outdoor and event use.',
    ],
    image: AirWater,
  },
  {
    id: 11,
    name: 'Bio Toilet',
    price: 59000,
    originalPrice: 62000,
    rating: 4.8,
    reviews: 26,
    category: 'Portable Toilets',
    discount: '5% off',
    description: 'Environment-friendly bio toilet for outdoor locations.',
    descriptions: [
      '100% eco-friendly and odorless system.',
      'No sewage connection required.',
      'Perfect for remote/rural/temporary sites.',
      'Treated effluent safe for soil.',
      'Easy to install and maintain.',
      'Robust and UV resistant material.',
      'No need for chemical additives.',
      'Ensures hygiene and privacy.',
    ],
    image: bio,
  },
  {
    id: 12,
    name: 'Duct AC',
    price: 54500,
    originalPrice: 60000,
    rating: 4.5,
    reviews: 24,
    category: 'Air Conditioners',
    discount: '9% off',
    description: 'High-capacity duct air conditioning for large setups.',
    descriptions: [
      'High-capacity cooling for large spaces.',
      'Silent, efficient operation.',
      'Easy to hook into existing ductwork.',
      'Remote control for temperature management.',
      'Dust and pollen filter included.',
      'Even airflow from every corner.',
      'Low running and maintenance cost.',
      'Safety shutdown features.',
    ],
    image: ductac,
  },
  {
    id: 13,
    name: 'Fire Extinguisher Nitrogen',
    price: 36500,
    originalPrice: 41000,
    rating: 4.3,
    reviews: 12,
    category: 'Fire Safety',
    discount: '11% off',
    description: 'Advanced nitrogen-based fire extinguisher.',
    descriptions: [
      'Nitrogen-based for rapid cooling of flames.',
      'Safe for live electrical equipment.',
      'Lightweight, easy to handle.',
      'Highly reliable under all temperatures.',
      'Minimal maintenance required.',
      'Long discharge range.',
      'No residue or damage to surfaces.',
      'Meets BIS and ISI safety standards.',
    ],
    image: ABC,
  },
  {
    id: 14,
    name: 'Mist Fan',
    price: 35000,
    originalPrice: 38500,
    rating: 4.6,
    reviews: 29,
    category: 'Fans',
    discount: '9% off',
    description: 'Portable misting fan to beat the summer heat.',
    descriptions: [
      'Cools the air with fine mist spray.',
      'Timer and speed adjustable.',
      'Large tank for longer operation.',
      'Wheels for easy movement.',
      'Safe for indoor or outdoor use.',
      'Rust-resistant, weather-proof finish.',
      'Low water and power usage.',
      'Ideal for parties, weddings, and events.',
    ],
    image: mistfan,
  },
  {
    id: 15,
    name: 'Patio Heater',
    price: 41000,
    originalPrice: 48000,
    rating: 4.2,
    reviews: 17,
    category: 'Outdoor',
    discount: '15% off',
    description: 'All-weather patio heater for outdoor gatherings.',
    descriptions: [
      'Efficiently heats large outdoor areas.',
      'Safe, stable, tip-resistant design.',
      'Adjustable heat controls.',
      'Quick-start ignition system.',
      'Weather-resistant exterior.',
      'Quiet operation for events.',
      'Easy to move and store.',
      'Great for terraces, lawns, patios.',
    ],
    image: patioHeater,
  },
  {
    id: 16,
    name: 'Shower Cabin',
    price: 59900,
    originalPrice: 67000,
    rating: 4.9,
    reviews: 32,
    category: 'Luxe',
    discount: '10% off',
    description: 'Luxury mobile shower cabin with modern features.',
    descriptions: [
      'Luxury shower experience anywhere.',
      'Modern panel & rain shower options.',
      'Non-slip, hygienic flooring.',
      'Insulated for all-weather comfort.',
      'Separate dry/wet zones.',
      'Water-efficient nozzles.',
      'Premium look and feel.',
      'Easy to sanitize between uses.',
    ],
    image: ShowerCabin,
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative w-full md:w-[175px] h-[233px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mx-auto">
                <img
                  src={product.image || ProductImg}
                  alt={product.name}
                  className="
                    absolute top-0 left-0
                    w-[175.21px] h-[233.61px]
                    object-cover
                    rounded-lg
                    md:static md:w-full md:h-full
                  "
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '175.21px',
                    maxHeight: '233.61px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-sm text-gray-700 mb-3">{product.description}</div>
                {/* === ADDED: Bullet point details === */}
                {Array.isArray(product.descriptions) && product.descriptions.length > 0 && (
                  <div className="mb-4">
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      {product.descriptions.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* === END OF ADDED CODE === */}
                {/* Price */}
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    {product.discount}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  FREE delivery as soon as Thu, 2 Jan • Size - 1pft
                </p>
                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-3 w-full">
                  <Link
                    to={`/products/${product.id}?action=rent`}
                    className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    RENT
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;