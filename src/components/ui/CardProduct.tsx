"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getImage } from "@/utils/supabase/imageMap";
import { useAuth } from "@/context/AuthContext";

interface Producto {
  id_producto: number;
  nombre: string;
  cantidad: number;
}

const CardProduct = ({ producto }: { producto: Producto }) => {
  const router = useRouter();
  const { role } = useAuth();

  const imageSrc = getImage(producto.id_producto, "product");

  return (
    <div className="w-full sm:w-auto">
      <Card className="w-full sm:w-96 flex flex-col h-full">
        <CardHeader className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        {/*<Image src={jabones} alt="Imagen de jabones"></Image>*/}
        <Image
          src={imageSrc}
          alt={`Imagen de ${producto.nombre}`}
          className="absolute inset-0 h-full w-full object-cover rounded-t-2xl"
          placeholder="blur"
        />
        </CardHeader>
        <CardContent className="flex-grow p-4 flex flex-col">
          <CardTitle className="text-lg font-semibold text-gray-800">{producto.nombre}</CardTitle>
          <p className="text-sm text-gray-600">Cantidad disponible: {producto.cantidad}</p>
          {/* Muestra el botón solo si el rol no es "Cliente" */}
          {role !== "Cliente" && (
          <button
            className="primary-btn mt-auto h-10 w-full"
            onClick={() => router.push(`/admin/editar-articulo/${producto.id_producto}`)}
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
