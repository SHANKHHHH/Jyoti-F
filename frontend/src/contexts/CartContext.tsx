import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./AuthContext";

export type CartAction = "rent" ;

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  action: CartAction;
  quantity: number;
  discount: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, action: CartAction) => void;
  updateQuantity: (id: string, action: CartAction, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user, isAuthenticated } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage when user changes
  useEffect(() => {
    if (isAuthenticated && user) {
      const storedData = localStorage.getItem(`cart_${user.id}`);
      if (storedData) {
        try {
          const parsed = JSON.parse(storedData);
          const now = Date.now();
          const sevenDays = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
          if (parsed.timestamp && (now - parsed.timestamp) < sevenDays) {
            setCart(parsed.cart);
          } else {
            // Expired, remove from storage
            localStorage.removeItem(`cart_${user.id}`);
            setCart([]);
          }
        } catch (error) {
          console.error("Error parsing cart from localStorage:", error);
          localStorage.removeItem(`cart_${user.id}`);
          setCart([]);
        }
      } else {
        setCart([]); // Clear cart if no stored data for user
      }
    } else {
      setCart([]); // Clear cart if not authenticated
    }
  }, [user, isAuthenticated]);

  // Save cart to localStorage whenever cart changes and user is authenticated
  useEffect(() => {
    if (isAuthenticated && user && cart.length > 0) {
      const dataToStore = {
        cart,
        timestamp: Date.now(),
      };
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(dataToStore));
    } else if (isAuthenticated && user && cart.length === 0) {
      // If cart is empty, still save with timestamp to track
      const dataToStore = {
        cart: [],
        timestamp: Date.now(),
      };
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(dataToStore));
    }
  }, [cart, user, isAuthenticated]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart(prev => {
      const exists = prev.find(ci => ci.id === item.id && ci.action === item.action);
      if (exists) {
        return prev.map(ci =>
          ci.id === item.id && ci.action === item.action
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, action: CartAction) => {
    setCart(prev => prev.filter(ci => !(ci.id === id && ci.action === action)));
  };

  const updateQuantity = (id: string, action: CartAction, quantity: number) => {
    setCart(prev =>
      prev.map(ci =>
        ci.id === id && ci.action === action
          ? { ...ci, quantity: Math.max(1, quantity) }
          : ci
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
