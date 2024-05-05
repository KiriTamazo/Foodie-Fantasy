import { FieldError, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "name" | "price";

export const ProductSchema = z.object({
  name: z.string().min(4),
  price: z.string(),
  image: z.string().nullable(),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
