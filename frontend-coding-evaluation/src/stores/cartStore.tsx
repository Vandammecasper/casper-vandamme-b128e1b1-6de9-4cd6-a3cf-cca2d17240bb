import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Product } from '../types/Product';

type CartStoreState = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeItemFromCart: (product: Product) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStoreState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product: Product) => set((state) => ({ cartItems: [...state.cartItems, product] })),
      removeFromCart: (product: Product) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== product.id),
        })),
      removeItemFromCart: (product: Product) =>
        set((state) => {
          const index = state.cartItems.findIndex((item) => item.id === product.id);
          if (index !== -1) {
            const newCartItems = [...state.cartItems];
            newCartItems.splice(index, 1);
            return { cartItems: newCartItems };
          }
          return state;
        }),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: 'cart-storage', // unique name for localStorage
    },
  ),
);

export default useCartStore;
