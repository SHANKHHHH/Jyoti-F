import { createContext, useContext, useState, ReactNode } from "react";

export type CartAction = "buy" | "rent" | "wishlist";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  action: CartAction;
  quantity: number;
  discount: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number, action: CartAction) => void;
  updateQuantity: (id: number, action: CartAction, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

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

  const removeFromCart = (id: number, action: CartAction) => {
    setCart(prev => prev.filter(ci => !(ci.id === id && ci.action === action)));
  };

  const updateQuantity = (id: number, action: CartAction, quantity: number) => {
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
