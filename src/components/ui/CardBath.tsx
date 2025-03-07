"use client";

//import bathImg from "@/assets/bano1.webp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { getImage } from "@/utils/supabase/imageMap";


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
  const [includeSpecialSoaps, setIncludeSpecialSoaps] = useState(false);

  const imageSrc = getImage(bano.id_baño, "bath");

  return (
    <Card className="overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
        <Image
            alt={`Imagen del baño ${bano.nombre}`}
            className="h-full w-full object-cover rounded-t-md md:rounded-l-md"
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
              <div>
                <h3 className="text-sm font-medium">Capacidad</h3>
                <p className="text-sm text-muted-foreground">
                  {bano.capacidad} Espíritus
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`soaps-${bano.id_baño}`}
                  checked={includeSpecialSoaps}
                  onCheckedChange={(checked) =>
                    setIncludeSpecialSoaps(checked as boolean)
                  }
                />
                <label
                  htmlFor={`soaps-${bano.id_baño}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Incluir Jabones Especiales ($15.000/Persona)
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">${bano.precio}</span>
              <span className="text-xs text-muted-foreground">/hora</span>
            </div>
            <Button asChild className="bg-primarybtn">
              <a href="#">Reservar</a>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}