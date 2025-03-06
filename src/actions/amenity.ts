"use server";

import { FormState } from "@/app/(routes)/admin/(articulos)/editar-articulo/definitions";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const AddProductsFormSchema = z.object({
  id_producto: z.string().refine((val) => !isNaN(Number(val)), {
    message: "ID del producto debe ser numérico",
  }),
  cantidad: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Cantidad debe ser un número positivo mayor que 0",
  }),
});

export async function addProducts(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = AddProductsFormSchema.safeParse({
    id_producto: formData.get("id_producto"),
    cantidad: formData.get("cantidad"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Conversión de los campos validados a números
  const cantidad = Number(validatedFields.data.cantidad);
  const id_producto = Number(validatedFields.data.id_producto);

  // Creación del cliente de Supabase
  const supabase = await createClient();

  // Inicio de una transacción
  const { error } = await supabase.rpc("actualizar_cantidad_producto", {
    p_id_producto: id_producto,
    p_cantidad: cantidad,
  });

  if (error) {
    return {
      success: false,
      message: "Error al actualizar el producto",
    };
  }

  // Revalidar la ruta de la página de productos
  revalidatePath(`/admin/editar-articulo/${id_producto}`); // Asegúrate de poner la ruta correcta
  return {
    success: true,
    message: "Productos agregados exitosamente",
  };
}
