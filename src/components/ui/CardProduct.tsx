"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserRole } from "@/hook/useUserRole";
import { getImage } from "@/utils/supabase/imageMaps";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Producto {
  id_producto: number;
  nombre: string;
  cantidad: number;
}

const CardProduct = ({ producto }: { producto: Producto }) => {
  const router = useRouter();
  const { role, loading } = useUserRole();
  const imageSrc = getImage(producto.id_producto, "product");

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="w-full sm:w-auto">
      <Card className="w-full sm:w-96">
        <CardHeader className="relative h-48 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={imageSrc}
            alt={`Imagen de ${producto.nombre}`}
            className="absolute inset-0 size-full rounded-t-2xl object-cover"
            placeholder="blur"
          />
        </CardHeader>
        <CardContent className="flex grow flex-col p-4">
          <CardTitle>{producto.nombre}</CardTitle>
          {role === "Admin" && (
          <p>Cantidad disponible: {producto.cantidad}</p> 
          )}

          {/* Muestra el botón solo si el rol no es "Cliente" */}
          {role !== "Cliente" && (
            <button
              className="primary-btn mt-auto h-10 w-full"
              onClick={() =>
                router.push(`/admin/editar-articulo/${producto.id_producto}`)
              }
            >
              Editar
            </button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardProduct;
