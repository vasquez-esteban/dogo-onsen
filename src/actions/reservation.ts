"use server";

import { FormState } from "@/app/(routes)/banos/crear-reserva/definitions";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const reservationSchema = z.object({
  id_bano: z.coerce.number().min(1, "El baño es obligatorio."), // Coerced to number
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

    console.log("Form data received:", rawData);

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

    console.log("Validated data:", validatedData.data);

    // Formato correcto para la fecha (opcional, según el formato esperado por Supabase)
    const formattedDate = new Date(date).toISOString().split("T")[0];

    // Llamar a la función almacenada en Supabase
    const { data, error } = await supabase.rpc("crear_reserva", {
      p_id_bano: id_bano,
      p_fecha: formattedDate, // Usar fecha formateada
      p_hora: time,
      p_cantidad_espiritu: spirits,
      p_jabon_especial: includeSpecialSoaps,
    });

    console.log("Response from Supabase:", data, error);

    if (error) {
      return {
        success: false,
        message: "Error en la base de datos.",
        errors: { name: [error.message] },
      };
    }

    // Manejar los mensajes de error específicos del procedimiento almacenado
    if (data === "Error: No se encontró el usuario autenticado.") {
      return {
        success: false,
        message: "Sesión expirada.",
        errors: {
          user: ["Usuario no autenticado. Inicia sesión nuevamente."],
        },
      };
    }

    if (data === "Ya reservado") {
      return {
        success: false,
        message: "Horario no disponible.",
        errors: {
          name: ["Este día/horario ya está ocupado. Elige otro."],
        },
      };
    }

    if (data === "Jabones insuficientes") {
      return {
        success: false,
        message: "Inventario insuficiente.",
        errors: { name: ["No hay suficientes jabones en el inventario."] },
      };
    }

    if (data === "Toallas insuficientes") {
      return {
        success: false,
        message: "Inventario insuficiente.",
        errors: { name: ["No hay suficientes toallas disponibles."] },
      };
    }

    if (data === "Jabones especiales insuficientes") {
      return {
        success: false,
        message: "Producto no disponible.",
        errors: {
          name: ["No hay jabón especial disponible."],
        },
      };
    }

    if (data === "Jabones especiales NE") {
      return {
        success: false,
        message: "Producto no disponible.",
        errors: {
          name: ["Los jabones especiales no están disponibles en el sistema."],
        },
      };
    }
    if (
      data === "Error: La cantidad de personas excede la capacidad del baño."
    ) {
      return {
        success: false,
        message: "Capacidad excedida.",
        errors: {
          name: ["El número de personas supera la capacidad del baño."],
        },
      };
    }

    if (data && data !== "Reserva creada") {
      // Manejar cualquier otro mensaje de error no previsto
      return {
        success: false,
        message: "Error en la reserva.",
        errors: { name: [data] },
      };
    }

    // Si llegamos aquí, la reserva se creó exitosamente
    return { success: true, message: "Reserva creada exitosamente." };
  } catch (error) {
    console.error("Error completo:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      message: "Error inesperado al procesar la reserva.",
      errors: { name: [`Error inesperado: ${errorMessage}`] },
    };
  }
}
