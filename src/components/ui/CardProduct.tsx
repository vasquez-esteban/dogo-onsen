"use client";

import jabones from "@/assets/producto1.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Producto {
  id_producto: number;
  nombre: string;
  cantidad: number;
}

const CardProduct = ({ producto }: { producto: Producto }) => {
  const router = useRouter();

  return (
    <div className="w-70 sm:w-auto">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <Image src={jabones} alt="Imagen de jabones"></Image>
          {/*<Image
          src={imageSrc}
          alt={`Imagen de ${producto.nombre}`}
          width={300}
          height={200}
          placeholder="blur"
          blurDataURL={imageSrc} // Previsualización de carga
        />*/}
        </CardHeader>
        <CardContent>
          <CardTitle>{producto.nombre}</CardTitle>
          <p>Cantidad disponible: {producto.cantidad}</p>
          <button
            className="primary-btn mt-10 h-10 w-full"
            onClick={() =>
              router.push(`/admin/editar-articulo/${producto.id_producto}`)
            }
          >
            Editar
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardProduct;
