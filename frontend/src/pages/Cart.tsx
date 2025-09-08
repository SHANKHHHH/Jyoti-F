import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Trash2, Edit2 } from "lucide-react";
import { products } from "./Products";

const actionLabel = {
  buy: "",
  rent: " (RENT)",
  wishlist: " (Wishlist)"
};

const CartPage: React.FC = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gst, setGst] = useState("");
  const [savedDetails, setSavedDetails] = useState<{ name: string; email: string; phone: string; gst: string } | null>(null);
  const [rentedProducts, setRentedProducts] = useState<Set<string>>(new Set());

  // Get available recommendations from existing products (not rented yet)
  const availableRecommendations = products.filter(product => !rentedProducts.has(product.id));

  // Show up to 3 recommendations
  const recommendations = availableRecommendations.slice(0, 3);

  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    if (details) {
      setSavedDetails(JSON.parse(details));
    }
  }, []);

  const handleSaveDetails = () => {
    const details = { name, email, phone, gst };
    localStorage.setItem("userDetails", JSON.stringify(details));
    setSavedDetails(details);
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const handleProceedToCheckout = async () => {
    if (!savedDetails) {
      alert("Please save your details before proceeding to checkout.");
      return;
    }

    try {
      const response = await fetch("https://jyothi-enterprises-4q1d.onrender.com/api/cart/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          user: savedDetails,
        }),
      });

      if (response.ok) {
        alert("Checkout successful!");
        // Optionally clear cart or navigate to a confirmation page
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout.");
    }
  };

  return (
    // Add padding/margin top to account for fixed header height
    <div className="min-h-screen bg-gray-50 py-10 pt-20 md:pt-24">
      {/*      ^^^^^^^^^^^^^^^^^ Add pt-20 (or larger if needed for your header)   */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-2xl">Cart</h2>
          <span className="text-gray-500">{cart.length} Items added</span>
        </div>
        <div>
          {cart.length === 0 ? (
            <div className="py-14 text-center text-gray-500">Your cart is empty.</div>
          ) : (
            cart.map((item, idx) => (
              <div key={item.id + item.action} className="flex items-start mb-6 border-b pb-5">
                <img src={item.image} alt={item.name} className="w-24 h-32 rounded-lg object-cover border" />
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <span className="font-semibold text-lg">{item.name}{actionLabel[item.action]}</span>
                  </div>
                  <div className="flex items-center my-1">
                    <span className="text-yellow-500 font-semibold">{item.discount}</span>
                  </div>
                  <div className="flex gap-2 items-baseline mb-1">
                    <span className="text-2xl text-green-600 font-bold">₹{item.price.toLocaleString()}</span>                  </div>
                  <div className="text-xs text-gray-400 mb-1">Limited Time Offer</div>
                  <div className="text-xs text-gray-500">Bestseller for the past 3 months</div>
                  <div className="mt-1 text-sm">
                    Quantity:&nbsp;
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.action, Math.max(1, item.quantity - 1))}
                      className="ml-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >-</button>
                    <button
                      onClick={() => updateQuantity(item.id, item.action, item.quantity + 1)}
                      className="ml-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 ml-2">
                  <button onClick={() => removeFromCart(item.id, item.action)} className="hover:text-red-600">
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Enter Your Details</h3>
              <div className="flex flex-col gap-4 max-w-md">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded px-3 py-2"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="GST Number (optional)"
                  value={gst}
                  onChange={(e) => setGst(e.target.value)}
                  className="border rounded px-3 py-2"
                />
                <button
                  onClick={handleSaveDetails}
                  className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700"
                >
                  Save Details
                </button>
              </div>
              {savedDetails && (
                <div className="mt-4 p-4 bg-green-100 rounded">
                  <h4 className="font-semibold">Saved Details:</h4>
                  <p>Name: {savedDetails.name}</p>
                  <p>Email: {savedDetails.email}</p>
                  <p>Phone: {savedDetails.phone}</p>
                  <p>GST: {savedDetails.gst}</p>
                </div>
              )}
            </div>

            {/* Recommendation Section - Moved below saved details */}
            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Recommended for You</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendations.map((product) => (
                  <div key={product.id} className="flex items-center border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <img src={product.image[0]} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-green-600 font-bold">₹{product.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => {
                        const rentItem = {
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          action: "rent" as const,
                          image: product.image[0],
                          discount: "",
                        };
                        addToCart(rentItem);
                        setRentedProducts(prev => new Set(prev).add(rentItem.id));
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                      Rent
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end items-center mt-10 gap-2">
              <button
                onClick={handleContinueShopping}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded px-4 py-2 font-medium"
              >
                CONTINUE SHOPPING
              </button>
              <button
                onClick={handleProceedToCheckout}
                className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 font-medium"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
