import React, { useState } from "react";
import { ArrowLeft, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductImg from "../assets/Product.jpg";
import { useCart } from "../contexts/CartContext";

const products = [
  {
    id: 1,
    name: "PM Container",
    price: 37489,
    originalPrice: 47489,
    rating: 4.5,
    reviews: 23,
    category: "Portable Toilets",
    discount: "22% off",
    bestseller: "#1 Bestseller in the past 3 months",
    images: [ProductImg, ProductImg, ProductImg, ProductImg],
    specifications: {
      unit: "1 Container",
      size: "20 feet x 8 feet x 9.6 feet (Weight of Container)",
      weight: "2500kg",
      capacity: "Upto 500-kg"
    },
    features: [
      "1 Entrance Door at 8 Feet Side",
      "1 Western Commode with flush tank",
      "Health Tissue roll hanger & Cloth Hanger",
      "Sensor Handwash Basin (provided with Liquid Handwash, Dispenser, Towel Dispenser, Dustbin)",
      "1 Ton Air Conditioner"
    ],
    delivery: "FREE delivery as soon as Thu, 3 Jan • Size - 1pft",
    transportation: "At location from One end. Car, Jeep are Required",
    powerConsumption: "500w",
    containerPlacement: "8 Feet From Floor to Head on ground level, a minimum of 15 Feet Length and 10 feet for each container.",
    waterUsage: "500 liters of fresh water and a minimum of 800 litres sewage tank",
    addedServices: "Unique and Exclusively made Container toilets with luxury interiors. Air conditioner, good lightings and aromatic diffuser for all time."
  }
];

const recommendedProducts = [
  { id: 2, name: "PM Container", price: 37489, originalPrice: 47489, discount: "22% off", rating: 4.5, reviews: 15, image: ProductImg },
  { id: 3, name: "PM Container", price: 37489, originalPrice: 47489, discount: "22% off", rating: 4.5, reviews: 18, image: ProductImg },
  { id: 4, name: "PM Container", price: 37489, originalPrice: 47489, discount: "22% off", rating: 4.5, reviews: 12, image: ProductImg },
  { id: 5, name: "PM Container", price: 37489, originalPrice: 47489, discount: "22% off", rating: 4.5, reviews: 25, image: ProductImg }
];

const ProductDetailsPage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products[0];

  const handleReturn = () => navigate(-1);

  const addAndRedirect = (action: "buy" | "rent" | "wishlist") => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[selectedImageIndex] || ProductImg,
      action,
      discount: product.discount,
      quantity, // <-- This works, as CartContext is fixed!
    });
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-16 md:h-20" />

      {/* Return Button */}
      <div className="bg-white px-4 py-3 border-b sticky top-0 z-40">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium"
          onClick={handleReturn}
        >
          <ArrowLeft className="w-4 h-4" />
          Return
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 flex justify-center items-center" style={{ minHeight: 400 }}>
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-[175px] h-[233px] object-cover rounded-lg"
                style={{ maxWidth: 175, maxHeight: 233 }}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`bg-white rounded p-2 border-2 ${selectedImageIndex === index ? 'border-orange-500' : 'border-gray-200'}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>
              <p className="text-sm text-orange-600 font-medium">{product.bestseller}</p>
            </div>
            <div className="bg-orange-100 rounded-lg p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-600">FREE DELIVERY</span>
                <p className="text-xs text-gray-500">{product.delivery}</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-green-600">₹{product.price.toLocaleString()}</span>
                <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
              </div>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">Limited time offer</span>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >-</button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >+</button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
                    onClick={() => addAndRedirect("buy")}
                  >Buy</button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
                    onClick={() => addAndRedirect("rent")}
                  >Rent</button>
                </div>
                <button
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium border"
                  onClick={() => addAndRedirect("wishlist")}
                >Add to Wishlist</button>
              </div>
            </div>
            {/* ...specifications, etc. remain unchanged */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">SPECIFICATIONS</h3>
              <div className="space-y-3 text-sm">
                <div><span className="font-medium">Unit:</span> {product.specifications.unit}</div>
                <div><span className="font-medium">Size:</span> {product.specifications.size}</div>
                <div><span className="font-medium">Weight:</span> {product.specifications.weight}</div>
                <div><span className="font-medium">Capacity:</span> {product.specifications.capacity}</div>
              </div>
              <h4 className="font-semibold mt-6 mb-3">Along with</h4>
              <ul className="text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start"><span className="text-green-500 mr-2">•</span>{feature}</li>
                ))}
              </ul>
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">Transportation/Loading-Unloading</h4>
                  <p className="text-gray-600">{product.transportation}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Power Consumption (Per Container)</h4>
                  <p className="text-gray-600">{product.powerConsumption}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Container Placement</h4>
                  <p className="text-gray-600">{product.containerPlacement}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Total Usage of Water per container</h4>
                  <p className="text-gray-600">{product.waterUsage}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Value added Services</h4>
                  <p className="text-gray-600">{product.addedServices}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-2">RECOMMENDATIONS</h2>
          <p className="text-gray-600 mb-8">As per your searches, here are a few suggestions you might be interested in</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map(recProduct => (
              <div key={recProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={recProduct.image}
                    alt={recProduct.name}
                    className="w-[175px] h-[233px] object-cover rounded-lg"
                    style={{ maxWidth: 175, maxHeight: 233 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{recProduct.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(recProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({recProduct.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="font-bold text-green-600">₹{recProduct.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through">₹{recProduct.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{recProduct.discount}</span>
                  <p className="text-xs text-gray-600 mt-2 mb-3">FREE delivery as soon as Thu, 2 Jan • Size - 1pft</p>
                  <div className="flex space-x-2">
                    <button
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3 rounded text-sm"
                      onClick={() => {
                        addToCart({
                          id: recProduct.id,
                          name: recProduct.name,
                          price: recProduct.price,
                          originalPrice: recProduct.originalPrice,
                          discount: recProduct.discount,
                          image: recProduct.image,
                          action: "buy",
                          quantity: 1,
                        });
                        navigate("/cart");
                      }}
                    >Buy</button>
                    <button
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
                      onClick={() => {
                        addToCart({
                          id: recProduct.id,
                          name: recProduct.name,
                          price: recProduct.price,
                          originalPrice: recProduct.originalPrice,
                          discount: recProduct.discount,
                          image: recProduct.image,
                          action: "rent",
                          quantity: 1,
                        });
                        navigate("/cart");
                      }}
                    >Rent</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="p-2 rounded-full border hover:bg-gray-100"><ChevronLeft className="w-5 h-5" /></button>
            <button className="p-2 rounded-full border hover:bg-gray-100"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
