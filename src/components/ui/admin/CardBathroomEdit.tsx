"use client";

import bathImg from "@/assets/bano1.webp";
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

  return (
    <div className="w[70px] sm:w-auto">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <Image
            src={bathImg}
            alt={`Imagen de ${bano.nombre}`}
            width={300}
            height={200}
          />
        </CardHeader>
        <CardContent>
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
