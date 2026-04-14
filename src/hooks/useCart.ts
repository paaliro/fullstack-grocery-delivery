import { useEffect, useState } from "react";
import type { CartItem, FoodItem } from "../assets/interface";

const STORAGE_KEY = "cart_items";

export const useCart = () => {
  // Load from storage initially
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart =
      localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sync to both storages whenever cart changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: FoodItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      let updatedCart;

      if (existing) {
        updatedCart = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      } else {
        // add new item
        updatedCart = [...prev, { ...item, quantity: 1 }];
      }

      // ✅ sync with localStorage
      localStorage.setItem("cart_items", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, amount: number) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + amount }
              : item,
          )
          .filter((item) => item.quantity > 0), // remove if 0
    );
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};
