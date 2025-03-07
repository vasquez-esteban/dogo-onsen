"use client";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getImage } from "@/utils/supabase/imageMaps";


interface Bano {
  id_baño: number;
  nombre: string;
  descripcion: string;
  capacidad: number;
  encargado_limpieza: string;
  precio: number;
  cantidad_jabones: number;
  cantidad_toallas: number;
}

export default function CardBath({ bano }: { bano: Bano }) {
  const router = useRouter();
  const imageSrc = getImage(bano.id_baño, "bath");

  return (
    <Card className="overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            alt={`Imagen del baño ${bano.nombre}`}
            className="size-full rounded-t-md object-cover md:rounded-l-md"
            src={imageSrc}
            height={300}
            width={400}
          />
        </div>
        <div className="flex flex-col md:w-3/4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{bano.nombre}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {bano.descripcion} Incluye: {bano.cantidad_toallas} toallas y{" "}
              {bano.cantidad_jabones} jabones
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Capacidad</h3>
              <p className="text-sm text-muted-foreground">
                {bano.capacidad} Espíritus
              </p>
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">${bano.precio}</span>
              <span className="text-xs text-muted-foreground">/hora</span>
            </div>
            <Button
              onClick={() => {
                router.push(`/banos/crear-reserva/${bano.id_baño}`);
              }}
              className="bg-primarybtn"
            >
              Reservar
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
