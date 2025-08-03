// ProductDetailsPage.tsx

import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import ProductImg from "../assets/Product.jpg";
import { useCart } from "../contexts/CartContext";
import { products } from "./Products"; // imports the products array

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductDetailsPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();
  const query = useQuery();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Product not found</h1>
          <button
            className="bg-emerald-500 text-white p-3 rounded"
            onClick={() => navigate("/products")}
          >
            Go to Products List
          </button>
        </div>
      </div>
    );
  }

  const handleReturn = () => navigate(-1);

  const addAndRedirect = (action: "buy" | "rent" | "wishlist") => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image || ProductImg,
      action,
      discount: product.discount,
      quantity,
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
          {/* Left Side - Single Image */}
          <div className="space-y-4 flex flex-col items-center">
            <div
              className="bg-white rounded-lg p-4 flex justify-center items-center"
              style={{ minHeight: 200 }}
            >
              <img
                src={product.image || ProductImg}
                alt={product.name}
                className="w-[175px] h-[233px] object-cover rounded-lg"
                style={{ maxWidth: 175, maxHeight: 233 }}
              />
            </div>
          </div>
          {/* Right: Product Info */}
          <div className="space-y-6 flex flex-col">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>
            <div className="bg-orange-100 rounded-lg p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-600">FREE DELIVERY</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-green-600">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </div>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">Limited time offer</span>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
                    onClick={() => addAndRedirect("buy")}
                  >
                    Buy
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
                    onClick={() => addAndRedirect("rent")}
                  >
                    Rent
                  </button>
                </div>
                <button
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium border"
                  onClick={() => addAndRedirect("wishlist")}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* ========= PRODUCT DESCRIPTION & DETAILS ========= */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">Product Details</h2>
              {/* Show bullet points, fallback to description if missing */}
              {Array.isArray(product.descriptions) && product.descriptions.length > 0 ? (
                <ul className="list-disc pl-5 text-gray-700 mb-2 space-y-1">
                  {product.descriptions.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 mb-2">{product.description}</p>
              )}
              <ul className="text-sm text-gray-600 space-y-1">
                <li><span className="font-medium">Category:</span> {product.category}</li>
                <li><span className="font-medium">Discount:</span> {product.discount}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* You can add recommendations or similar products below as needed */}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
