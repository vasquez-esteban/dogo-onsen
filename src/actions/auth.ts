"use server";

import {
  FormState,
  SigninFormSchema,
  SignupFormSchema,
} from "@/app/(auth)/definitions";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
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
  const { data, error: authError } = await supabase.auth.signUp(
    validateFields.data
  );

  if (authError) {
    return {
      ...state,
      message: authError.message,
    };
  } else if (data?.user?.identities?.length === 0) {
    return {
      ...state,
      message: "El ususario con este correo ya existe. Dirigete al login",
    };
  }

  // Registro exitoso (requiere confirmación)
  console.log("Registro exitoso.");
  return {
    ...state,
    errors: {},
    message:
      "¡Registro exitoso!. Diríjase a su correo para realizar la confirmación.",
  };
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

export async function getUserRole(): Promise<string | null> {
  const supabase = await createClient();

  // Get the authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return null;
  }

  const { data: userData, error } = await supabase
    .from("roles")
    .select("rol")
    .eq("id_usuario", user.id)
    .single();

  if (error || !userData) {
    return null;
  }

  return userData.rol;
}

export async function forgotPassword(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  // Verificar si el usuario existe
  {
    /*const email = formData.get("email") as string;
  const { data: user, error: userError } = await supabase
    .from("usuario") 
    .select("*")
    .eq("correo", email)
    .single();

  if (userError || !user) {
    return { message: "El correo no está asociado a una cuenta." };
  }*/
  }

  // Si el usuario existe, enviar el enlace de restablecimiento
  const { error } = await supabase.auth.resetPasswordForEmail(
    formData.get("email") as string,
    {
      redirectTo: `${origin}/reset-password`,
    }
  );

  if (error) {
    return { message: "Error al enviar el enlace de recuperación." };
  }

  return {
    message:
      "¡Restauracion exitosa!. Dirigete a tu correo para finalizar la restauracion.",
  };
}

export async function resetPassword(formData: FormData, code: string) {
  const supabase = await createClient();
  const { error: CodeError } = await supabase.auth.exchangeCodeForSession(code);

  if (CodeError) {
    return { status: CodeError?.message };
  }

  const { error: updateError } = await supabase.auth.updateUser({
    password: formData.get("password") as string,
  });

  if (updateError) {
    return { status: updateError?.message };
  }

  return { status: "success" };
}
