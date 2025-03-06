import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import FormEditarBano from "./FormEditarBano";

// Función para obtener datos desde Supabase
async function getBano(id: string | undefined) {
  if (!id || isNaN(Number(id))) {
    console.error("ID inválido:", id);
    return null;
  }
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
  params: Promise<{ id_baño: string }>;
}) {
  const { id_baño } = await params;

  console.log("Params recibidos:", id_baño);

  if (!id_baño || isNaN(Number(id_baño))) {
    console.error("ID inválido:", id_baño);
    return notFound();
  }
  const bano = await getBano(id_baño);

  if (!bano) {
    return notFound(); // Redirige a la página 404 si el baño no existe
  }

  return (
    <>
      <h1>Editar Baño {bano.nombre}</h1>
      <Card>
        <CardHeader>
          <CardDescription>Capacidad: {bano.capacidad}</CardDescription>
        </CardHeader>
        <CardContent>
          <FormEditarBano bano={bano} />
        </CardContent>
      </Card>
    </>
  );
}
