"use server";

import { FormState } from "@/app/(routes)/banos/crear-reserva/definitions";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const reservationSchema = z.object({
  id_bano: z.string().min(1, "El baño es obligatorio."),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Fecha inválida.",
  }),
  time: z.string().min(1, "La hora es obligatoria."),
  spirits: z
    .string()
    .transform((val) => parseInt(val, 10) || 0)
    .refine(
      (num) => num >= 0,
      "La cantidad de espíritus no puede ser negativa."
    ),
  includeSpecialSoaps: z.boolean(),
});

export async function createReservation(
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  try {
    const rawData = {
      id_bano: formData.get("id_baño"),
      date: formData.get("date"),
      time: formData.get("time"),
      spirits: formData.get("spirits"),
      includeSpecialSoaps: formData.get("includeSpecialSoaps") === "on",
    };

    // Validar datos con Zod
    const validatedData = reservationSchema.safeParse(rawData);
    if (!validatedData.success) {
      // Convertir los errores de Zod al formato esperado
      const errorObj: Record<string, string[]> = {};
      validatedData.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!errorObj[field]) {
          errorObj[field] = [];
        }
        errorObj[field].push(err.message);
      });
      return {
        success: false,
        message: "Por favor diligencie el formulario",
        errors: errorObj,
      };
    }

    const { id_bano, date, time, spirits, includeSpecialSoaps } =
      validatedData.data;

    // Llamar a la función almacenada en Supabase
    const { data, error } = await supabase.rpc("crear_reserva", {
      p_id_bano: id_bano,
      p_fecha: date,
      p_hora: time,
      p_cantidad_espiritu: spirits,
      p_jabon_especial: includeSpecialSoaps,
    });

    if (error) {
      return {
        success: false,
        message: "Error en la base de datos.",
        errors: { name: [error.message] },
      };
    }

    if (typeof data === "string" && data.startsWith("Error:")) {
      // Mapear los errores específicos a los campos correspondientes
      if (data.includes("No se encontró el usuario autenticado")) {
        return {
          success: false,
          message: "Sesión expirada.",
          errors: {
            user: ["Usuario no autenticado. Inicia sesión nuevamente."],
          },
        };
      }
      if (data.includes("El baño no existe")) {
        return {
          success: false,
          message: "Baño no encontrado.",
          errors: { name: ["El baño seleccionado no existe."] },
        };
      }
      if (data.includes("La fecha y hora ya están reservadas")) {
        return {
          success: false,
          message: "Horario no disponible.",
          errors: { name: ["Este horario ya está ocupado. Elige otro."] },
        };
      }
      if (data.includes("No hay suficientes jabones")) {
        return {
          success: false,
          message: "Inventario insuficiente.",
          errors: { name: ["No hay suficientes jabones en el inventario."] },
        };
      }
      if (data.includes("No hay suficientes toallas")) {
        return {
          success: false,
          message: "Inventario insuficiente.",
          errors: { name: ["No hay suficientes toallas disponibles."] },
        };
      }
      if (data.includes("No hay suficiente jabón especial")) {
        return {
          success: false,
          message: "Producto no disponible.",
          errors: {
            name: ["No hay jabón especial disponible."],
          },
        };
      }

      // Error general si no se detectó uno específico
      const errorMessage = data.replace("Error: ", "");
      return {
        success: false,
        message: "Error en la reserva.",
        errors: { name: [errorMessage] },
      };
    }

    return { success: true, message: "Reserva creada exitosamente." };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      message: "Error inesperado al procesar la reserva.",
      errors: { name: [`Error inesperado: ${errorMessage}`] },
    };
  }
}
