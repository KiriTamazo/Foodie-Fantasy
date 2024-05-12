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
export type SignInType = {
  email: string;
  password: string;
};
export type SignUpType = {
  name: string;
  confirm_password: string;
};

export type ValidFieldNames = "name" | "price";

export const ProductSchema = z.object({
  name: z.string().min(4),
  price: z.string(),
  image: z.string().nullable(),
});

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});
export const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(4),
    confirm_password: z.string().min(4),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password does not match",
    path: ["confirm_password"],
  });

export type ProductSchemaType = z.infer<typeof ProductSchema>;
