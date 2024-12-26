"use server";

import { FormState } from "@/app/(routes)/reserva/definitions";

interface UpdateBathData {
  name: string;
  description: string;
  capacity: string;
  spiritType: string;
  price: number;
  soapCount: number;
  towelCount: number;
}

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

export async function updateBath(
  state: FormState,
  formData: FormData
): Promise<{ message: string }> {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: UpdateBathData = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    capacity: formData.get("capacity") as string,
    spiritType: formData.get("spiritType") as string,
    price: Number(formData.get("price")),
    soapCount: Number(formData.get("soapCount")),
    towelCount: Number(formData.get("towelCount")),
  };

  // Log the data (replace with your actual update logic)
  console.log("Updating bath with data:", data);

  return {
    message: "Baño actualizado exitosamente",
  };
}
