"use server";

import {
  FormState,
  SigninFormSchema,
  SignupFormSchema,
} from "@/app/(auth)/definitions";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  // 1. Validar datos del formulario
  const validateFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // Retornar errores de validación
  if (!validateFields.success) {
    return {
      ...state,
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // 4. Crear el nuevo usuario
  const { error } = await supabase.auth.signUp(validateFields.data);

  const errorMessage = { message: "Error al Logear" };

  if (error) {
    return errorMessage;
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signin(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  // 1. Validar datos del formulario
  const validateFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // Retornar errores de validación
  if (!validateFields.success) {
    return {
      ...state,
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // 2. Hacer Login y retornar Errores de credenciales
  const { error } = await supabase.auth.signInWithPassword(validateFields.data);

  const errorMessage = { message: "Credenciales Inválidas" };

  if (error) {
    return errorMessage;
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signout() {
  // deleteSession()
  redirect("/signin");
}
