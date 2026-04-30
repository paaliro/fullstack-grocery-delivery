import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../assets/interface";
import { showToast } from "../utils/helper";

type CartItem = Product & {
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  updateQuantity: (id: string, amount: number) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === item.id);

          if (existing) {
            showToast("success", "Quantity increased");
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }

          showToast("success", "Added to cart");
          return {
            cart: [...state.cart, { ...item, quantity: 1 }],
          };
        }),

      // to handle update quantity of the item in the cart
      updateQuantity: (id, amount) => {
        const state = get();
        const item = state.cart.find((i) => i.id === id);

        if (!item) return;

        const newQty = item.quantity + amount;

        // Show toast BEFORE updating state
        if (newQty <= 0) {
          showToast("error", "Item removed");
        } else if (amount > 0) {
          showToast("success", "Quantity increased");
        } else {
          showToast("success", "Quantity decreased");
        }

        // Update state
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + amount }
                : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      // It will remove the item from the cart based on the id.
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "cart_items", // 🔥 localStorage key
    },
  ),
);
