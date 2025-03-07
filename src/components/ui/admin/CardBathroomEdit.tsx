"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { getImage } from "@/utils/supabase/imageMap";

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
      <Card className="w-full sm:w-96 flex flex-col h-full">
        <CardHeader className="relative">
          <div className="w-full h-48 overflow-hidden rounded-t-md">
          <Image
            src={imageSrc}
            alt={`Imagen de ${bano.nombre}`}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 flex flex-col">
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
