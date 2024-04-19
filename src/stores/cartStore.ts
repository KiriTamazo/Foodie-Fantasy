import { create } from "zustand";
import { CartItem, PizzaSize, ProductsProps } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type CartStoreStateProps = {
  items: CartItem[];
};

export type CartStoreActionProps = {
  addToCart: (product: ProductsProps, size: PizzaSize) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  totalPrice: () => number;
};
export const useCartStore = create<
  CartStoreStateProps & CartStoreActionProps
>()(
  persist(
    (set, get) => ({
      items: [],
      totalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity * item.product.price,
          0
        );
      },
      addToCart: (product, size) => {
        set((state) => {
          const newItemId = product.id + product.name + size;
          const exitItem = state.items.find(
            (item: CartItem) => item.id === newItemId
          );

          // adding item for the first time
          if (!exitItem) {
            return {
              items: [
                ...state.items,
                {
                  id: newItemId,
                  product,
                  product_id: product.id,
                  size: size,
                  quantity: 1,
                },
              ],
            };
          } else {
            // if item is already exit increase the quantity
            return {
              items: state.items.map((item: CartItem) =>
                item.id === newItemId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
        });
      },
      updateQuantity: (itemId, amount) => {
        set((state) => {
          // first update quantity or if quantity is less than 1 remove from items
          const updatedQuantity = state.items
            .map((item: CartItem) => {
              return item.id === itemId
                ? item.quantity === 1 && amount < 0
                  ? null
                  : { ...item, quantity: item.quantity + amount }
                : item;
            })
            .filter((item) => item !== null) as CartItem[];

          return { items: updatedQuantity };
        });
      },
    }),
    {
      name: "cart-item",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// export const useCartStore = create<CartStoreStateProps & CartStoreActionProps>(
//   (set) => ({
//     items: [],
//     addToCart: (product, size) => {
//       set((state) => {
//         const newItemId = product.id + product.name + size;
//         const exitItem = state.items.find((item) => item.id === newItemId);

//         // adding item for the first time
//         if (!exitItem) {
//           return {
//             items: [
//               ...state.items,
//               {
//                 id: newItemId,
//                 product,
//                 product_id: product.id,
//                 size: size,
//                 quantity: 1,
//               },
//             ],
//           };
//         } else {
//           // if item is already exit increase the quantity
//           return {
//             items: state.items.map((item) =>
//               item.id === newItemId
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             ),
//           };
//         }
//       });
//     },
//     updateQuantity: (itemId, amount) => {
//       set((state) => {
//         // first update quantity or if quantity is less than 1 remove from items
//         const updatedQuantity = state.items
//           .map((item) => {
//             return item.id === itemId
//               ? item.quantity === 1 && amount < 0
//                 ? null
//                 : { ...item, quantity: item.quantity + amount }
//               : item;
//           })
//           .filter((item) => item !== null) as CartItem[];

//         return { items: updatedQuantity };
//       });
//     },
//   })
// );
