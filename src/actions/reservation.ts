"use server";

import { FormState } from "@/app/(routes)/reserva/definitions";

export async function createReservation(
  formData: FormData,
  state: FormState,
): Promise<FormState> {
  try {
    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const date = new Date(formData.get("date") as string);
    const time = formData.get("time") as string;
    const spirits = formData.get("spirits") as string;
    const includeSpecialSoaps = formData.get("includeSpecialSoaps") === "true";

    if (isNaN(date.getTime())) {
      return {
        ...state,
        success: false,
        message: "Fecha inválida",
      };
    }

    console.log("Reservation created:", {
      date,
      time,
      spirits,
      includeSpecialSoaps,
    });

    return {
      success: true,
      message: "Reserva creada exitosamente",
    };
  } catch (error) {
    return {
      success: false,
      message: `${error} Error al crear la reserva`,
    };
  }
}

export async function searchReservation(
  formData: FormData
): Promise<FormState> {
  try {
    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const date = new Date(formData.get("date") as string);
    const time = formData.get("time") as string;
    const type = formData.get("type") as string;

    if (isNaN(date.getTime())) {
      return {
        success: false,
        message: "Fecha inválida",
      };
    }

    console.log("Buscando:", {
      date,
      time,
      type,
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
