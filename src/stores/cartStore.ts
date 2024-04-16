import { create } from "zustand";
import { CartItem, PizzaSize, ProductsProps } from "../types";

export type CartStoreStateProps = {
  items: CartItem[];
};
export type CartStoreActionProps = {
  addToCart: (product: ProductsProps, size: PizzaSize) => void;
};
export const useCartStore = create<CartStoreStateProps & CartStoreActionProps>(
  (set) => ({
    items: [],
    addToCart: (product, size) => {
      console.log(size);
      set((state) => {
        // const exitItem = state.items.find((item) => item.id === value.id);

        // if (!exitItem) {
        //   return { items: [...state.items] };
        // } else {
        // }

        return {
          items: [
            ...state.items,
            {
              id: "1",
              product: product,
              size: size,
              product_id: product?.id,
              quantity: 1,
            },
          ],
        };
      });
    },
  })
);
