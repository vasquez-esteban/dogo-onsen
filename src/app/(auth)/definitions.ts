import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe contener al menos 2 caracteres" })
    .trim(),
  user: z
    .string()
    .min(2, { message: "Tu usuario debe contener al menos 2 caracteres" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Tener por lo menos 8 caracteres." })
    .regex(/[a-zA-Z]/, { message: "Contener por lo menos una letra." })
    .regex(/[0-9]/, { message: "Contener por lo menos un número" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contener por lo menos un caracter especial",
    })
    .trim(),
});

export const SigninFormSchema = z.object({
  user: z.string(),
  password: z.string().min(1, { message: "La contraseña no debe estar vacía" }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        user?: string[];
        password?: string[];
      };
      success?: boolean;
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
