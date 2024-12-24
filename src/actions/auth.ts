"use server";

import {
  FormState,
  SigninFormSchema,
  SignupFormSchema,
} from "@/app/(auth)/definitions";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const testUser = {
  id: 1,
  name: "Test",
  user: "test",
  password: "$2a$12$0ht684AbiDeNVNd3/tfLae3L7Mbtf3sDhJxUQQEeCv3RB0cGjFWZy", // Contrasena_0
};

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validar datos del formulario
  const validateFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    user: formData.get("user"),
    password: formData.get("password"),
  });

  // Retornar errores de validación
  if (!validateFields.success) {
    return {
      ...state,
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // Verificar que sea único
  /*
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (existingUser) {
    return {
      message: 'Email already exists, please use a different email or login.',
    };
  }
  */

  // 2. Preparar para la creación del nuevo usuario
  const { name, user, password } = validateFields.data;

  // Hash de la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Crear el nuevo usuario y mostrarlo por la consola
  console.log(name, user, password, hashedPassword);

  if (user === testUser.user) {
    redirect("/signin");
  }

  // 4. Crear una sesión para el nuevo usuario
  /*
  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }

  // 4. Create a session for the user
  const userId = user.id.toString();
  await createSession(userId);
  */
}

export async function signin(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validar datos del formulario
  const validateFields = SigninFormSchema.safeParse({
    user: formData.get("user"),
    password: formData.get("password"),
  });

  const errorMessage = { message: "Credenciales inválidas." };

  // Retornar errores de validación
  if (!validateFields.success) {
    return {
      ...state,
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // 2. Query en la base de datos para verificar existencia
  const user = testUser;

  if (!user) {
    console.log("Error");
    return errorMessage;
  }

  // 3. Comparar contraseñas
  const passwordMatch = await bcrypt.compare(
    validateFields.data.password,
    user.password
  );

  console.log(passwordMatch);

  if (!passwordMatch) {
    return errorMessage;
  }

  // 4. Crear una sesión nueva
  const userId = user.id.toString();
  console.log("Nueva sesión creada para el usuario con ID:", userId);
  // await createSession(userId);

  redirect("/");
}

export async function signout() {
  // deleteSession()
  redirect("/signin");
}
