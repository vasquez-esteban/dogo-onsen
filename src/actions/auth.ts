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
  // Intentar registrar al usuario
  const { error: authError} = await supabase.auth.signUp(validateFields.data);

  const errorMessage = { message: "Error al Logear" };
  
  if (authError) {
    console.log(authError);
    return errorMessage;
  }
  

  // Registro exitoso (requiere confirmación)
  console.log('Registro exitoso.');
  return {
    ...state,
    errors: {},
    message: "¡Registro exitoso!. Diríjase a su correo para realizar la confirmación.",
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
  const { data,  error } = await supabase.auth.signInWithPassword(validateFields.data);

  console.log("Respuesta de Supabase:", { data, error }); 

  const errorMessage = { message: "Credenciales Inválidas" };

  if (error) {
    return errorMessage;
  }

  
  
  revalidatePath("/", "layout");
  redirect("/");
}

export async function getUserRole(): Promise<{ role: string }> {
  const supabase = await createClient();

  // Obtener el usuario autenticado
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.log("No autenticado", userError);
    return { role: "Guest"}; // Si no está autenticado, se considera "guest"
  }

  // Obtener el rol desde la tabla "roles"
  const { data: userData, error } = await supabase
    .from("roles")
    .select("rol")
    .eq("id_usuario", user.id)
    .single();

  if (error || !userData) {
    console.log("Error obteniendo rol", error);
    return { role: "Cliente"}; // Si no se encuentra el rol, se asume como usuario normal
  }

  return { role: userData.rol };
}
