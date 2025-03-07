"use client";

import { getImage } from "@/utils/supabase/imageMaps";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

interface Bano {
  id_baño: number;
  nombre: string;
  capacidad: number;
  precio: number;
  estado: string;
}

export default function CardBathEdit({ bano }: { bano: Bano }) {
  const router = useRouter();
  const imageSrc = getImage(bano.id_baño, "bath");

  return (
    <div className="w-full sm:w-auto">
      <Card className="flex size-full flex-col sm:w-96">
        <CardHeader className="relative">
          <div className="h-48 w-full overflow-hidden rounded-t-md">
            <Image
              src={imageSrc}
              alt={`Imagen de ${bano.nombre}`}
              width={600}
              height={400}
              className="size-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex grow flex-col p-4">
          <CardTitle>{bano.nombre}</CardTitle>
          <p>Capacidad: {bano.capacidad} personas</p>
          <p>Precio: ${bano.precio}</p>
          <p>Estado: {bano.estado}</p>
          <button
            className="primary-btn mt-10 h-10 w-full"
            onClick={() => router.push(`/admin/editar-bano/${bano.id_baño}`)}
          >
            Editar
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
