// store/useCartStore.ts
import { create } from "zustand";
import type { Product } from "../assets/interface";

type CartItem = {
  id: string;
  productName: string;
  actualPrice: number;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  updateQuantity: (id: string, amount: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);

      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }),

  updateQuantity: (id, amount) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
}));