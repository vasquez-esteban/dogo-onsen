"use server";

import { FormState } from "@/app/(routes)/banos/crear-reserva/definitions";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

interface UpdateBathData {
  id_baño: number;
  nombre: string;
  descripcion: string;
  capacidad: number;
  encargado_limpieza: string;
  precio: number;
  soapCount: number;
  towelCount: number;
}

export async function searchBano(formData: FormData): Promise<FormState> {
  try {
    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const date = new Date(formData.get("date") as string);
    const time = formData.get("time") as string;
    const encargado_limpieza = formData.get("spirits") as string;

    if (isNaN(date.getTime())) {
      return {
        success: false,
        message: "Fecha inválida",
      };
    }

    console.log("Buscando baño con:", {
      date,
      time,
      encargado_limpieza,
    });

    return {
      success: true,
      message: "Búsqueda exitosa",
    };
  } catch (error) {
    return {
      success: false,
      message: `${error} Error al buscar`,
    };
  }
}

export async function updateBath(
  state: FormState,
  formData: FormData
): Promise<{ message: string }> {
  // Simulate a delay
  try {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const supabase = await createClient();

    const data: UpdateBathData = {
      id_baño: Number(formData.get("id_baño")),
      nombre: formData.get("nombre") as string,
      descripcion: formData.get("descripcion") as string,
      capacidad: Number(formData.get("capacidad")),
      encargado_limpieza: formData.get("encargado_limpieza") as string, // "rojo" | "azul" | "verde"
      precio: Number(formData.get("precio")),
      soapCount: Number(formData.get("soapCount")),
      towelCount: Number(formData.get("towelCount")),
    };

    // Validar que el ID es un número válido
    if (isNaN(data.id_baño)) {
      return { message: "ID de baño inválido" };
    }

    // Llamar a la función RPC en Supabase
    const { data: result, error } = await supabase.rpc("actualizar_baño", {
      p_id_bano: data.id_baño,
      p_nombre: data.nombre,
      p_descripcion: data.descripcion,
      p_capacidad: data.capacidad,
      p_encargado_limpieza: data.encargado_limpieza,
      p_precio: data.precio,
      p_jabones: data.soapCount,
      p_toallas: data.towelCount,
    });

    if (error) {
      console.error("Error al actualizar el baño:", error);
      return { message: error.message || "Error al actualizar el baño" };
    }

    // Revalidar la ruta de la página de productos
    revalidatePath(`/admin/editar-bano/${data.id_baño}`);

    return { message: result || "Baño actualizado exitosamente" };
  } catch (error) {
    console.error("Error general al actualizar:", error);
    return { message: "Ocurrió un error inesperado" };
  }
}
