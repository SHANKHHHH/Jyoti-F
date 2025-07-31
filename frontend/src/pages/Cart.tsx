import React from "react";
import { useCart } from "../contexts/CartContext";
import { Trash2, Edit2 } from "lucide-react";

const actionLabel = {
  buy: "",
  rent: " (RENT)",
  wishlist: " (Wishlist)"
};

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const getAmount = (item: any) => item.price * item.quantity;

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
                    <span className="text-2xl text-green-600 font-bold">₹{item.price.toLocaleString()}</span>
                    <span className="line-through text-gray-500 text-lg">₹{item.originalPrice.toLocaleString()}</span>
                  </div>
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
                  <button disabled className="text-gray-300 cursor-not-allowed">
                    <Edit2 size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <>
            <div className="flex justify-end items-center mt-10 gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded px-4 py-2 font-medium">CONTINUE SHOPPING</button>
              <button className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 font-medium">PROCEED TO CHECKOUT</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
