"use server";

import { FormState } from "@/app/(routes)/admin/(articulos)/editar-articulo/definitions";
import { z } from "zod";

const AddProductsFormSchema = z.object({
  cantidad: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Cantidad debe ser un número positivo mayor que 0",
  }),
});

export async function addProducts(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = AddProductsFormSchema.safeParse({
    cantidad: formData.get("cantidad"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const cantidad = Number(validatedFields.data.cantidad);

  console.log("Productos Agregados:", {
    cantidad,
  });

  return {
    success: true,
    message: "Productos agregados exitosamente",
  };
}
