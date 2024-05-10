import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const _twMerge = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
