import { create } from "zustand";
import { CartItem, PizzaSize, ProductsProps } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AuthStateProps = {
  auth: "admin" | "user";
};

export type AuthActionProps = {
  toggleUser: () => void;
};
export const useAuthStore = create<AuthStateProps & AuthActionProps>()(
  persist(
    (set) => ({
      auth: "user",
      toggleUser: () => {
        set((state) => {
          return state.auth === "user" ? { auth: "admin" } : { auth: "user" };
        });
      },
    }),
    {
      name: "cart-item",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export const useIsAdmin = () => {
  return useAuthStore((state) => state.auth) === "admin" ? true : false;
};
