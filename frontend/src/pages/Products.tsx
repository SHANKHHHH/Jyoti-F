import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductImg from '../assets/Product.jpg'; // <-- Update if your image path is different

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([]);

  const products = [
    {
      id: 1,
      name: 'PM Container',
      price: 37489,
      originalPrice: 45000,
      rating: 4.5,
      reviews: 23,
      category: 'Portable Toilets',
      discount: '10% off'
    },
    {
      id: 2,
      name: 'PM Container',
      price: 37489,
      originalPrice: 45000,
      rating: 4.5,
      reviews: 23,
      category: 'Portable Toilets',
      discount: '15% off'
    },
    {
      id: 3,
      name: 'PM Container',
      price: 37489,
      originalPrice: 45000,
      rating: 4.5,
      reviews: 23,
      category: 'Air Conditioners',
      discount: '20% off'
    },
    {
      id: 4,
      name: 'PM Container',
      price: 37489,
      originalPrice: 45000,
      rating: 4.5,
      reviews: 23,
      category: 'Containers',
      discount: '25% off'
    },
    {
      id: 5,
      name: 'PM Container',
      price: 37489,
      originalPrice: 45000,
      rating: 4.5,
      reviews: 23,
      category: 'Portable Toilets',
      discount: '30% off'
    }
  ];

  const categories = [
    'All',
    'Air Conditioners',
    'Coolers',
    'Fans',
    'Toilets',
    'Mobile Container',
    'Luxe',
    'Containers'
  ];
  const discountOptions = [
    'Up to 10% off',
    '10% off or more',
    '20% off or more',
    '30% off or more'
  ];
  function parseDiscountPercent(discountString: string) {
    const match = discountString.match(/(\d+)%/);
    return match ? Number(match[1]) : 0;
  }
  function discountFilterFuncs(option: string) {
    switch (option) {
      case 'Up to 10% off': return (d: number) => d <= 10;
      case '10% off or more': return (d: number) => d >= 10;
      case '20% off or more': return (d: number) => d >= 20;
      case '30% off or more': return (d: number) => d >= 30;
      default: return () => true;
    }
  }
  const handleDiscountChange = (discount: string) => {
    setSelectedDiscounts(prev =>
      prev.includes(discount)
        ? prev.filter(d => d !== discount)
        : [...prev, discount]
    );
  };
  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (selectedDiscounts.length > 0) {
      const productDiscountPercent = parseDiscountPercent(product.discount);
      const matchesAny = selectedDiscounts.some(option =>
        discountFilterFuncs(option)(productDiscountPercent)
      );
      if (!matchesAny) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">CATEGORIES</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="text-orange-500"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">PRICE</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
              {/* Discounts */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">DISCOUNTS</h3>
                <div className="space-y-2">
                  {discountOptions.map(discount => (
                    <label key={discount} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedDiscounts.includes(discount)}
                        onChange={() => handleDiscountChange(discount)}
                        className="text-orange-500"
                      />
                      <span className="text-sm">{discount}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
              {filteredProducts.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-8">
                  No products found for selected filters.
                </div>
              )}
              {filteredProducts.map(product => (
                <div key={product.id} className="relative bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative w-full md:w-[175px] h-[233px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mx-auto">
                    <img
                      src={ProductImg}
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
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                    </div>
                    {/* Price */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        {product.discount}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      FREE delivery as soon as Thu, 2 Jan • Size - 1pft
                    </p>
                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        RENT
                      </button>
                      <Link
                        to={`/products/${product.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                      >
                        BUY
                      </Link>
                    </div>
                  </div>
                  {/* Wishlist Icon */}
                  <div className="absolute top-4 right-4 md:static">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination (static/dummy) */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <button className="px-3 py-2 bg-emerald-500 text-white rounded">1</button>
                <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">2</button>
                <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">3</button>
                <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">4</button>
                <button className="px-3 py-2 bg-emerald-500 text-white rounded">Next</button>
              </div>
            </div>
          </div>
        </div>
        {/* Recommendations Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-2">RECOMMENDATIONS</h2>
          <p className="text-gray-600 mb-8">As per your searches, here are a few suggestions you might be interested in</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <div key={`rec-${product.id}`} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative w-full h-[233px] bg-gray-200 flex items-center justify-center overflow-hidden mx-auto">
                  <img
                    src={ProductImg}
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
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {product.discount}
                  </span>
                  <p className="text-xs text-gray-600 mt-2 mb-3">
                    FREE delivery as soon as Thu, 2 Jan • Size - 1pft
                  </p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3 rounded text-sm">
                      RENT
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm flex items-center justify-center"
                    >
                      BUY
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
