import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Por favor ingrese un correo electrónico válido" })
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
  email: z.string().email(),
  password: z.string().min(1, { message: "La contraseña no debe estar vacía" }),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
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
