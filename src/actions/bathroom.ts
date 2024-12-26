"use server";

import { FormState } from "@/app/(routes)/reserva/definitions";

export async function searchBano(formData: FormData): Promise<FormState> {
  try {
    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const date = new Date(formData.get("date") as string);
    const time = formData.get("time") as string;
    const spirits = formData.get("spirits") as string;

    if (isNaN(date.getTime())) {
      return {
        success: false,
        message: "Fecha inválida",
      };
    }

    console.log("Buscando:", {
      date,
      time,
      spirits,
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
