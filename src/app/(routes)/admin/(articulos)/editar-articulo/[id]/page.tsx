import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { supabase } from '@/utils/supabase/client';
import { notFound } from "next/navigation";
import FormEditarArticulo from "./FormEditarArticulo";
import ProtectedRoute from "@/components/ui/ProtectedComponent";

// Función para obtener datos desde Supabase
async function getProducto(id: string) {
  //const supabase = await createClient();
  const { data, error } = await supabase
    .from("producto")
    .select("*")
    .eq("id_producto", Number(id))
    .single();

  if (error || !data) {
    console.error("Error al obtener el producto:", error);
    return null;
  }

  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = await getProducto(id);

  if (!producto) {
    notFound(); // Redirige a la página 404 si el producto no existe
  }

  return (
    <ProtectedRoute>
    <>
      <h1>Editar Artículo {producto.nombre}</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Cantidad actual disponible: {producto.cantidad}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormEditarArticulo producto={producto} />
        </CardContent>
      </Card>
    </>
    </ProtectedRoute>
  );
}
