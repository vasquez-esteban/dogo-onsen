import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import FormReservationClient from "./FormReservation";

// Función para obtener datos desde Supabase
async function getBano(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("baño")
    .select("*")
    .eq("id_baño", Number(id))
    .single();

  if (error || !data) {
    console.error("Error al obtener el baño:", error);
    return null;
  }

  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id_bano: string }>;
}) {
  const { id_bano } = await params;

  const bano = await getBano(id_bano);

  if (!bano) {
    notFound();
  }

  return (
    <>
      <h1>Reserva {bano.nombre}</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Diligencia el formulario para poder reservar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormReservationClient bano={bano}></FormReservationClient>
        </CardContent>
      </Card>
    </>
  );
}
